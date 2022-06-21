const esbuild = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json')
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outdir: './build',
    bundle: true,
    minify: false,
    platform: 'node',
    sourcemap: 'inline',
    target: 'node14',
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
