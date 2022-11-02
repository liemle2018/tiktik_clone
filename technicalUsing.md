This app cloned TikTok App on Web, has responsive

- https://www.youtube.com/watch?v=CcBHZ0t2Qwc&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=5 - part 1
- https://www.youtube.com/watch?v=7x-qQ_187rM - part 2
- https://github.com/adrianhajdin/project_tiktik
- https://console.cloud.google.com/

Building

- Github.com - create response
- Vercel.com - deploy with some config inside .env

Technical using:

- React Js
- Typescript
- Next Js
- Zustand
- Sanity

<!-- Install steps: -->

> mkdir tiktik
> npx create-next-app ./ --ts
> npm install -g @sanity/cli
> sanity init --coupon javascriptmastery2022
> logged with account me.mychild@gmail.comn
> npm i @sanity/client axios react-google-login react-icons uuidv4 zustand --legacy-peer-deps
> npm install @react-oauth/google@latest jwt-decode --legacy-peer-deps

<!-- install tailwindCSS - https://tailwindcss.com/docs/guides/nextjs -->

> npm install -D tailwindcss postcss autoprefixer --legacy-peer-deps
> npx tailwindcss init -p

<!-- run tik tik -->

> npm run dev

<!-- run sanity-backend -->

> cd sanity-backend
> npx sanity start

<!-- Other helpful commands from Sanity -->

> npx @sanity/cli docs - to open the documentation in a browser
> npx @sanity/cli manage - to open the project settings in a browser  
> npx @sanity/cli help - to explore the CLI manual
