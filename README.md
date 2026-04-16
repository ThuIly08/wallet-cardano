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
