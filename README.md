# portfolio

Personal site for Chi Ho Ngan, built with [Astro](https://astro.build) and deployed on Vercel.

## Edit content

Everything (bio, experience, projects, skills, hobbies, photos) lives in `src/data/site.ts`. `/` is the work page and `/me` is the personal page.
Add a project to the `projects` array and its deep-dive page at `/projects/<slug>/` is generated automatically.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploy

Import the repo at vercel.com/new. Vercel detects Astro automatically; no settings needed.
