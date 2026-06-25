import { setTheme } from './../src/setTheme.js'
document.querySelectorAll('[data-theme2]').forEach(button => {
    button.addEventListener('click', () => {
        setTheme(button.dataset.theme2)        
    })
})