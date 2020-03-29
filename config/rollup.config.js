import json from "@rollup/plugin-json";
import resolve from "rollup-plugin-node-resolve";
// import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default function(options) {
  return {
    input: options.input,
    /**
     * For browsers, use iife (Immediately Invoked Function Expression)
     * For Node.js, use cjs (CommonJS)
     * For both browsers and Node.js, use umd (Universal Module Definition)
     */
    output: [
      { format: "esm", file: "./dist/esm/index.js", sourcemap: true },
      { format: "cjs", file: "./dist/cjs/index.js", sourcemap: true },
      {
        file: "./dist/umd/bundle.min.js",
        format: "umd",
        name: options.umdName ? options.umdName : "rushUmd",
        plugins: [terser()]
      }
    ],
    plugins: [
      // replace({
      //   "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      // }),
      babel({
        runtimeHelpers: true,
        exclude: "../../node_modules/**",
        configFile: "../../.babelrc.js"
      }),
      commonjs({
        include: "../../node_modules/**"
      }),
      resolve({
        extensions: [".js", ".jsx"]
      }),
      json()
    ]
  };
}
