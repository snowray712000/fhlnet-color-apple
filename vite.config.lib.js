// build library
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  publicDir: false, // 不需要 public 資料夾
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'FHLColorApple',
      formats: ['es'],
      fileName: () => 'index.js',
      // 與 package.json exports 的 ./css、./apple-color-ios.css 同名
      cssFileName: 'apple-color-ios',
    },
    rollupOptions: {
      output: {
        // lib 模式會把 css 抽成獨立檔，index.js 不再 import 它；補回來，import '@fhlnet/color-apple' 才會載入顏色
        banner: "import './apple-color-ios.css'",
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  }
})