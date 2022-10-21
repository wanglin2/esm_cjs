let arg = process.argv;

let file = arg[2] === "esm" ? "esmUse.js" : "cjs.js";
let format = arg[2] === "esm" ? "cjs" : "esm";

require("esbuild").buildSync({
  entryPoints: [file],
  outfile: "out.js",
  format,
  // bundle: true,
});
