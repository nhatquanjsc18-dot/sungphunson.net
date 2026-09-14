# Súng Phun Sơn .NET

Website catalogue súng phun sơn chính hãng (DeVilbiss, Wagner, Binks, Anest Iwata) cho tên miền
**sungphunson.net**, xây bằng Next.js (App Router) + Tailwind CSS + GSAP.

Mô hình: **catalogue sản phẩm + yêu cầu báo giá** (không giỏ hàng/thanh toán online).

## Chạy thử ở local

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc chính

- `app/` — các route: trang chủ, `/san-pham` (danh sách + lọc theo brand/category),
  `/san-pham/[slug]` (chi tiết sản phẩm), `/gioi-thieu`, `/lien-he`.
- `data/products.js`, `data/brands.js` — toàn bộ dữ liệu sản phẩm (37 sản phẩm: 21 DeVilbiss,
  16 Wagner), biên soạn lại từ hệ thống của Nhất Quán (`devilbiss.nhatquan.vn`, `mayphunsonwagner.com`).
- `components/` — Header, Footer, ProductCard, QuoteForm (form báo giá), Reveal (hiệu ứng cuộn GSAP).
- `public/products/` — ảnh sản phẩm đã tải về local (không hotlink).

## ⚠️ Trước khi go-live

1. **Form báo giá** (`components/QuoteForm.jsx`) dùng [FormSubmit.co](https://formsubmit.co) gửi về
   `info@nhatquan.vn` — **cần đổi email nếu muốn nhận báo giá về hộp thư khác**, và lần gửi đầu tiên
   FormSubmit sẽ gửi email xác nhận kích hoạt tới địa chỉ đó (bấm xác nhận 1 lần).
2. Bổ sung thêm sản phẩm Binks / Anest Iwata nếu cần (ảnh 2 hãng này chưa lấy được do site nguồn
   lazy-load ảnh — có thể chụp/upload thủ công vào `public/products/binks/`, `public/products/anest-iwata/`
   rồi thêm entry vào `data/products.js`).
3. Kiểm tra lại thông tin liên hệ (hotline `0907 811 767`, địa chỉ) khớp với thông tin thật của công ty.

## Đẩy code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: sungphunson.net catalogue site"
git branch -M main
git remote add origin <URL_REPO_GITHUB_CUA_BAN>
git push -u origin main
```

## Deploy lên Hostinger

Hostinger hỗ trợ Node.js qua **hPanel → Website → Node.js** (cần gói Business/Cloud/VPS trở lên).

1. Trong hPanel, tạo ứng dụng Node.js mới, trỏ **Application root** vào thư mục chứa mã nguồn
   (nếu deploy qua Git, dùng tính năng **Git** trong hPanel để kéo repo GitHub về, hoặc SFTP upload
   toàn bộ project trừ `node_modules` và `.next`).
2. Set **Application startup file**: không dùng trực tiếp — cấu hình **Run command**:
   - Build command: `npm install && npm run build`
   - Start command: `npm run start` (Next.js sẽ tự chọn cổng qua biến `PORT` mà Hostinger cấp)
3. Trỏ domain `sungphunson.net` vào ứng dụng Node.js vừa tạo (Domains → point to application).
4. Nếu Hostinger dùng Passenger/LiteSpeed Node.js (phổ biến ở shared hosting), thêm file
   `.htaccess`/cấu hình theo hướng dẫn Hostinger để proxy request vào Next.js server thay vì static.
5. Sau mỗi lần push code mới lên GitHub, vào hPanel **Git → Pull** (hoặc thiết lập auto-deploy webhook)
   rồi chạy lại `npm install && npm run build` và restart ứng dụng.

Nếu gói Hostinger không hỗ trợ Node.js server thực sự, phương án thay thế là build site dạng tĩnh
(`next build && next export`-style bằng cách đặt `output: "export"` trong `next.config.mjs`) rồi
upload thư mục `out/` lên hosting tĩnh — phù hợp vì site này không cần server-side rendering động
(giỏ hàng, đăng nhập...).
