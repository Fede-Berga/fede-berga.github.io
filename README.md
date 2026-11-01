# fede-berga.github.io

Source of my personal website, https://fede-berga.github.io. It is a static site built with [Astro](https://astro.build) and Tailwind CSS and deployed to GitHub Pages by GitHub Actions.

## Quick start

Requires [Bun](https://bun.sh) 1.4.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run preview  # serve dist/ locally
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. Pull requests run the build only.

## License

The code is released under the [MIT License](LICENSE).
