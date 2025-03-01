# react_cf

 Version: 0.9.1

 Author  : 

 date    : 2025/03/01

 update  :

***
### Summary

react + cloudflare , example

***
* deploy

```
npx wrangler login
NITRO_PRESET=cloudflare_module npm run build
npx wrangler deploy
```
***
* wrangler.toml

```
name = "vinxi-react-app-1"
compatibility_date = "2024-09-19"
main = "./.output/server/index.mjs"

assets = { directory = "./.output/public/", binding = "ASSETS" }

[vars]
NITRO_HELLO_THERE="general"
SECRET="secret"
```
***
# License

* MIT

***

