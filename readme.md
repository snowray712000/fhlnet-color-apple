
[demo](https://snowray712000.github.io/fhlnet-color-apple/)

# @fhlnet/color-apple

Apple iOS system color CSS variables for web apps.

This package provides Apple iOS-style system color variables, including light mode, dark mode, and high-contrast variants.

## Installation

```bash
npm install @fhlnet/color-apple
```

## Usage

Import the package once in your app entry file:

```js
import '@fhlnet/color-apple'
```

Then use the CSS variables in your styles:

```css
.page {
  color: var(--label);
  background: var(--systemBackground);
}

.button {
  color: var(--systemBlue);
  border-color: var(--separator);
}
```

## Theme switching

By default, the colors follow the browser/system preference through `prefers-color-scheme` and `prefers-contrast`.

You can also manually set a theme:

```js
import { setTheme } from '@fhlnet/color-apple'

setTheme('light')
setTheme('dark')
setTheme('hc-light')
setTheme('hc-dark')
```

To return to automatic system preference mode:

```js
setTheme()
```

The helper updates the `data-theme` attribute on `<html>`:

```html
<html data-theme="dark">
```

## CSS-only usage

If your tooling supports package CSS imports, you can import the stylesheet directly:

```js
import '@fhlnet/color-apple/css'
```

or:

```css
@import '@fhlnet/color-apple/apple-color-ios.css';
```

## Available theme values

- `light`
- `dark`
- `hc-light`
- `hc-dark`
- `undefined` / no value: remove manual theme and follow system preference

## References

- [Color | Apple Developer Documentation](https://developer.apple.com/design/human-interface-guidelines/color)
- [Apple Colors | Mar Codes ](https://mar.codes/apple-colors)
