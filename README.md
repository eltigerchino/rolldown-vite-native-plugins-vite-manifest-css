# enabling native plugins causes css in vite manifest to disappear

1. Run `pnpm i` to install dependencies
2. Run `pnpm build` to generate the Vite manifest
3. Inspect the generated Vite manifest in [./dist/vite/manifest.json](./dist/.vite/manifest.json)
4. Observe the `css` key that specifies the CSS files.

