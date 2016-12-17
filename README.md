> Công cụ Editor chuyên cho người tạo Nội dung

### Mục đích
- Trực quan, dễ sử dụng ngay cả người không rành công nghệ
- Nhập và xem kết quả trên một giao diện


### Tính năng ban đầu
> Là 1 phần mềm viết trên nền tảng Electron 

 - cho phép đăng nhập
 - sau đó hiện ra form để nhập nội dung, lưu dưới dạng file .md
 - có phần front-matter phía trên:  gôm title, description, date
 - phía dưới dung ckeditor để cho nhập content
 - khi bấm save sẽ lưu trên firebase
 
### Chi tiết
 - json schema ban đầu https://gist.github.com/baotnq/025d456d5d0754109d3753f613444bad
 - Sinh form nhập liệu, kế thừa json-editor  http://jeremydorn.com/json-editor/
