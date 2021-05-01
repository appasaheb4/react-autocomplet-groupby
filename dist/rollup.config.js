"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_typescript2_1 = require("rollup-plugin-typescript2");
const package_json_1 = require("./package.json");
// continued
exports.default = {
    input: 'index.ts',
    output: [
        {
            file: package_json_1.default.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        rollup_plugin_typescript2_1.default({ objectHashIgnoreUnknownHack: true })
    ],
    external: ['react', 'react-dom']
};
