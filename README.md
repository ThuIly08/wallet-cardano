Muốn hết lỗi typescript cho project JS thì thêm nodeLinker: node-modules vào file .yarnrc.yml
Muốn hết lỗi position cho Notifications thì sử dụng lệnh như sau:
<Notifications
styles={{
          root: {
            position: "fixed",
            bottom: 8,
            right: 8,
            width: 300,
          },
        }}
/>
Quan trọng nhất chính là position fixed

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
