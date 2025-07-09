# enabling native plugins causes css in vite manifest to disappear

1. Run `pnpm i` to install dependencies
2. Run `pnpm build` to generate the Vite manifest
3. Inspect the generated Vite manifest in [./dist/vite/manifest.json](./dist/.vite/manifest.json)
4. Observe that the `index.html` file's `css` key specifies the CSS files it uses.
5. Now, install `rolldown-vite` by adding the below to the [./package.json](./package.json)

```json
  "pnpm": {
    "overrides": {
      "vite": "npm:rolldown-vite@latest"
    }
  }
```

6. Run `pnpm i` to install `rolldown-vite`
7. Run `pnpm build` to generate the Vite manifest
8. Observe that the `index.html` entry no longer has a `css` key.
