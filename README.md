# English Together

## Cấu trúc
- `pronunciation-and-intonation/day-01/`: audio hội thoại Day 1
- `common-words/day-01/`: 8 audio từ vựng Day 1
- Tạo thêm thư mục `day-02`, `day-03` ... và tải MP3 vào đó.

## Tự động cập nhật
Netlify chạy `node scripts/build.js` theo `netlify.toml` sau mỗi lần commit. Script tạo `manifest.json` từ các thư mục và file MP3. Website tự hiển thị những Day có file. Không cần sửa `index.html`.

## Lưu ý
Kho GitHub Public và website Netlify Public cho phép truy cập file MP3. Chỉ đăng bản ghi mà bạn được phép chia sẻ.
