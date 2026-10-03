---
title: ❓ 問題: 為何 Color 已經有 label 了，卻還有 lightText 與 darkText？它們沒隨著 theme 變化，何時會用到？
---

### 問題

❓ 問題
依據 Apple Color 的設計規劃，一般文字是用 `label` 才對，但為何會出現 `lightText` 與 `darkText`？何時會用到這個 CSS？

### 簡答

- `label` 是給一般 UI 文字使用，會隨著 Light / Dark Mode 自動切換。
- `lightText` 與 `darkText` 不是用來對應 Theme，而是用在「已知背景明暗固定」的情況。
  - 例如一個圖片，它不會隨著 theme 變化。
  - 若有一個字，疊在上面，就要用 lightText。

