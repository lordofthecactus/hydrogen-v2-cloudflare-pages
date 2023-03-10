# Hydrogen on Cloudflare Pages 

A template to try out Remix's new dev server + HMR on Cloudflare Pages

## Getting started

**Install dependencies:**

```sh
npm run install
```
 
You must use yarn at the moment or configure overrides for conflicts on @cloudflare/workers-types.

**Start in development mode with HMR:**

```sh
npm run dev
```

Visit http://localhost:3000/

## Deployment

- Point a new Cloudflare Pages project at your repository
- Configure the build command to be `npm run build`
- Configure the build output directory to be `public`
