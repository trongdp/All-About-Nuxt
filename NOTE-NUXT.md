# NOTE NHỮNG ĐIỀU QUAN TRỌNG

## Install tailwind để style
Đúng hai bước là npm install và thêm vào modules trong nuxt.config
https://tailwindcss.nuxtjs.org/getting-started/setup

# Install Pinia 
https://codybontecou.com/nuxt3-and-pinia.html

Install thư viện pinia dành cho nuxt và khai báo ở module, đồng thời set auto import cho các hàm defineStore ở trường pinia trong config

      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    
Sau đó cứ thế mà tạo ra file js ở thư mục stores và xài như bt
có thể xài syntax kiểu Option API hoặc Composition API




## Thêm các CDN vào nuxt.config.ts dứoi trường app/head/

    app: {
      head : {
        viewport: 'width=500, initial-scale=1',
        meta:[
          {
            name: 'Pina & Nuxt',
            content: 'A Pinia & Nuxt App'
          }
        ],
        link:[
          {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      }
    },

## Override font mặc định của tailwind ỏ assets/css/taiwind.css

@tailwind base;
@tailwind components;
@tailwind utilities;

//Import ở google font
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

@layer base {
    html {
        font-family: 'Nunito', sans-serif;
    }
}


## Dùng json-server để local host database json để test
npm install -g json-server

json-server -w ./data/db.json : để host lên local host, theo nguyên tắc mỗi property là 1 endpoint

Lúc này có thể dùng fetch hoặc axios để lấy về fetch("http://localhost:3000/tasks")