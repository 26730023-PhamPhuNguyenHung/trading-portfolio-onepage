# Lessons Learned & Technical Memory Bank

## [2026-09-16] Section 09: Who I Work With (Audience & Collaboration)

### 1. Phân cấp thị giác & Thiết kế UI Dark Quant Theme
- **Bố cục 3 card đối xứng**: Mỗi card chia thành 2 phần: phần trên gồm badge, title và custom SVG artwork; phần dưới gồm 3 gạch đầu dòng có icon Lucide riêng biệt và divider gradient nhẹ.
- **Custom SVG Artworks**:
  - Không cần tải thêm file png/jpg bên ngoài, viết trực tiếp SVG component nội suy (Silhouette trader với đa màn hình nến, mạng lưới kết nối nhóm 3 người, khối 3D isometric cube lattice neon). Giúp bundle siêu nhẹ (0 external network request), sắc nét tuyệt đối trên mọi độ phân giải màn hình.
- **Tương phản & Font Hierarchy**:
  - Nền dark `#051013` và thẻ card `#07191d/85` với viền `border-cyan-500/20` và hiệu ứng hover `hover:border-cyan-400/50 hover:shadow-[0_12px_35px_-10px_rgba(49,226,218,0.2)]`.
  - Headline sử dụng kết hợp font chữ trắng và highlight cyan `#31e2da` kèm glow shadow nhẹ nhàng, không gây chói mắt.
  - Tuân thủ quy tắc: Không dùng glassmorphism mờ nhạt, text màu rõ nét (`#f4f7f7`, `#9cb0b4`, `#31e2da`).

### 2. Kiểm thử và Build Verification
- Sử dụng Vite + React 19 + TypeScript + Tailwind CSS 4.
- Lệnh xác thực `npm run build` đã build hoàn tất không phát sinh bất kỳ cảnh báo hay lỗi kiểu dữ liệu nào.
