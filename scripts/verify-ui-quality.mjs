import { chromium } from 'playwright';

const viewports = [
  { name: 'Mobile (iPhone 14/15)', width: 390, height: 844 },
  { name: 'Mobile (Pro Max)', width: 430, height: 932 },
  { name: 'Tablet (iPad)', width: 768, height: 1024 },
  { name: 'Laptop (1366)', width: 1366, height: 768 },
  { name: 'Desktop (1440)', width: 1440, height: 900 }
];

async function runAudit() {
  console.log('🚀 Starting UI Quality Watch Matrix Audit on http://localhost:5173...\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  let totalFailures = 0;
  const results = [];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    const audit = await page.evaluate(({ vpWidth }) => {
      const docScrollWidth = document.documentElement.scrollWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      const innerWidth = window.innerWidth;
      const hasHorizontalOverflow = docScrollWidth > innerWidth || bodyScrollWidth > innerWidth;

      // Find overflowing elements
      const overflowingElements = [];
      if (hasHorizontalOverflow) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > innerWidth + 1) {
            overflowingElements.push({
              tag: el.tagName.toLowerCase(),
              id: el.id,
              className: (el.className || '').toString().slice(0, 80),
              right: Math.round(rect.right),
              excess: Math.round(rect.right - innerWidth)
            });
          }
        });
      }

      // Check small touch targets (< 44px on mobile)
      const smallTouchTargets = [];
      if (vpWidth <= 430) {
        document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0 && (rect.width < 40 || rect.height < 40)) {
            // ignore hidden or inline small links if intended
            const text = (el.textContent || '').trim().slice(0, 30);
            smallTouchTargets.push({
              tag: el.tagName.toLowerCase(),
              text,
              w: Math.round(rect.width),
              h: Math.round(rect.height)
            });
          }
        });
      }

      // Check glassmorphism
      const glassElements = [];
      document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        const bf = style.backdropFilter || style.webkitBackdropFilter;
        if (bf && bf !== 'none' && bf.includes('blur')) {
          glassElements.push({
            tag: el.tagName.toLowerCase(),
            class: (el.className || '').toString().slice(0, 60),
            backdropFilter: bf
          });
        }
      });

      return {
        hasHorizontalOverflow,
        docScrollWidth,
        innerWidth,
        overflowCount: overflowingElements.length,
        topOverflowing: overflowingElements.slice(0, 5),
        smallTouchTargetsCount: smallTouchTargets.length,
        topSmallTouchTargets: smallTouchTargets.slice(0, 5),
        glassElementsCount: glassElements.length,
        topGlass: glassElements.slice(0, 3)
      };
    }, { vpWidth: vp.width });

    const passed = !audit.hasHorizontalOverflow && audit.glassElementsCount === 0;
    if (!passed) totalFailures++;

    results.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      passed,
      ...audit
    });

    console.log(`[${passed ? 'PASS' : 'FAIL'}] ${vp.name} (${vp.width}x${vp.height}):`);
    console.log(`  - Horizontal Overflow: ${audit.hasHorizontalOverflow ? `YES (scrollWidth: ${audit.docScrollWidth}px > ${audit.innerWidth}px)` : 'NO (Clean)'}`);
    if (audit.overflowCount > 0) {
      console.log(`    ⚠️ Overflowing elements (${audit.overflowCount}):`, JSON.stringify(audit.topOverflowing, null, 2));
    }
    console.log(`  - Glassmorphism violations: ${audit.glassElementsCount}`);
    if (audit.glassElementsCount > 0) {
      console.log(`    ⚠️ Glass elements:`, JSON.stringify(audit.topGlass, null, 2));
    }
    if (vp.width <= 430) {
      console.log(`  - Mobile Touch targets < 40px: ${audit.smallTouchTargetsCount}`);
    }
    console.log('');
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`Audit Summary: ${viewports.length - totalFailures}/${viewports.length} Viewports PASSED.`);
  console.log(`Console Errors recorded: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }
  console.log(`========================================\n`);

  if (totalFailures > 0 || consoleErrors.length > 0) {
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error('Audit crashed:', err);
  process.exit(1);
});
