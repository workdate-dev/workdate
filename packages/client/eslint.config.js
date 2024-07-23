export default [
    {
        files: ['*.svelte.ts', '*.svelte'],
        plugins: { ...eslintPluginSvelte.configs['flat/recommended'] }
    }
];
