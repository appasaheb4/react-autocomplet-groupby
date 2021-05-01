declare namespace _default {
    const input: string;
    const output: {
        file: any;
        format: string;
        exports: string;
        sourcemap: boolean;
        strict: boolean;
    }[];
    const plugins: import("rollup").Plugin[];
    const external: string[];
}
export default _default;
