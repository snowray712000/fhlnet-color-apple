❓ 問題
apple 規畫的 grouped table 是什麼概念呢？

### grouped table

- 不要將 grouped table 想成像 excel 那樣的 table
- 以下面為例

```html
<body class="bg">
  <div class="grouped-table">

    <section class="group">
      <h2>帳號</h2>
  
      <div class="row">Apple ID</div>
      <div class="row">密碼與安全性</div>
      <div class="row">付款方式</div>

    </section>
  
    <section class="group">
      <h2>通知</h2>
  
      <div class="row">訊息</div>
      <div class="row">Line</div>
      <div class="row">Mail</div>
    </section>

  </div>
</body>
```

要用的如下

```css

body {
    background-color: var(--systemBackground);
    color: var(--label);
}

.grouped-table {
    background-color: var(--systemGroupedBackground);
}

.group {
    background-color: var(--secondarySystemGroupedBackground);
}

```
