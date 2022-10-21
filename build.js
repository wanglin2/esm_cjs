let arg = process.argv;

let file = arg[2] === "esm" ? "esmUse.js" : "cjsUse.js";
let format = arg[2] === "esm" ? "cjs" : "esm";

require("esbuild").buildSync({
  entryPoints: [file],
  outfile: "outUse.js",
  format,
  // bundle: true,
});
