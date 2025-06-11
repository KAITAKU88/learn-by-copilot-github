# Giới thiệu về Flexbox

Flexbox (Flexible Box) là một công cụ mạnh mẽ trong CSS giúp bạn dễ dàng sắp xếp, căn chỉnh và phân phối không gian giữa các phần tử trong một container (khối chứa). Flexbox đặc biệt hữu ích khi bạn muốn thiết kế giao diện web linh hoạt, dễ thích nghi với nhiều kích thước màn hình khác nhau.

## 1. Flex Container và Flex Items

- **Flex Container**: Là phần tử cha mà bạn áp dụng thuộc tính `display: flex;`. Khi đó, tất cả các phần tử con bên trong nó sẽ trở thành **flex items**.
- **Flex Items**: Là các phần tử con trực tiếp của flex container.

**Ví dụ:**
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
```css
.container {
  display: flex;
}
```
Khi đó, `.container` là flex container, còn các `<div>` bên trong là flex items.

## 2. Các thuộc tính quan trọng của Flexbox

### Trên Flex Container

- **flex-direction**: Xác định hướng sắp xếp các item (theo hàng ngang hoặc cột dọc).
  - `row` (mặc định): các item nằm ngang.
  - `column`: các item nằm dọc.
- **justify-content**: Căn chỉnh các item theo trục chính (main axis).
  - Ví dụ: `center`, `space-between`, `space-around`, `flex-end`,...
- **align-items**: Căn chỉnh các item theo trục phụ (cross axis).
  - Ví dụ: `center`, `flex-start`, `flex-end`, `stretch`,...
- **flex-wrap**: Cho phép các item xuống dòng khi không đủ chỗ.
  - `nowrap` (mặc định): không xuống dòng.
  - `wrap`: cho phép xuống dòng.

### Trên Flex Item

- **flex-grow**: Quy định item có thể mở rộng chiếm thêm không gian hay không.
- **flex-shrink**: Quy định item có thể thu nhỏ lại khi thiếu chỗ hay không.
- **flex-basis**: Kích thước cơ bản của item trước khi phân chia không gian.
- **align-self**: Căn chỉnh riêng lẻ từng item theo trục phụ.

## 3. Ví dụ thực tế

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid #ccc;
}
.container div {
  background: #90caf9;
  margin: 10px;
  padding: 20px;
  font-size: 24px;
}
```
Kết quả: Ba ô vuông nằm ngang, căn giữa cả theo chiều ngang và chiều dọc.

## 4. Khi nào nên dùng Flexbox?

- Khi bạn muốn sắp xếp các phần tử theo hàng hoặc cột.
- Khi cần căn giữa các phần tử dễ dàng.
- Khi muốn các phần tử tự động co giãn phù hợp với không gian.

## 5. Tổng kết

Flexbox giúp việc xây dựng giao diện web trở nên đơn giản, linh hoạt và dễ bảo trì hơn rất nhiều. Hãy luyện tập các thuộc tính cơ bản để làm chủ Flexbox!

---

**Tham khảo thêm:**  
[The Odin Project - Introduction to Flexbox](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox)