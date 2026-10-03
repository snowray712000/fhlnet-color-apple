/**
 * 使用此函數，方便使用 auto complete 功能, 取得 css var 的值
 * 例如 el.style.background = cssVar('systemGroupedBackground')
 * @param {import("./index").CssVarName} name 
 * @returns {string}
 */
export function cssVar(name) {
  return `var(--${name})`
}