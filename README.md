Muốn hết lỗi typescript cho project JS thì thêm nodeLinker: node-modules vào file .yarnrc.yml

Cài tailwind cho dự án: 
//terminal
npm install tailwindcss @tailwindcss/vite

//vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

//CSS
@import 'tailwindcss'

Link doc dự án: https://docs.google.com/document/d/1Il7iK1MBsaacVVKdB7zE6PHFBul-kEYELY3FBUGBuUc/edit?usp=sharing