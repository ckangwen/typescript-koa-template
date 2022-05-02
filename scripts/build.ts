import esbuild from "esbuild";
import path from "path";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild.build({
  entryPoints: [ path.resolve(__dirname, "../src/index.ts") ],
  bundle: true,
  outfile: "dist/index.js",
  platform: "node",
  plugins: [
    nodeExternalsPlugin({
      dependencies: false,
    }),
  ],
  external: [],
})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
