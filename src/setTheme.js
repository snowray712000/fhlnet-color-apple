
/**
 * @param {'light'|'dark'|'hc-light'|'hc-dark'} theme 
 */
export function setTheme(theme) {
    if (theme) {
        document.documentElement.setAttribute('data-theme', theme)
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
}

