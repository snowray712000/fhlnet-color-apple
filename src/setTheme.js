
/**
 * @param {'light'|'dark'|'hc-light'|'hc-dark'} theme 
 */
export function setTheme(theme) {
    if (theme) {
        document.documentElement.dataset.theme = theme
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
}

