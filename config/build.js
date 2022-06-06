const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/app.jsx'],
    bundle: true,
    outfile: 'dist/out.js',
    outbase: '.',
}).catch(() => process.exit());