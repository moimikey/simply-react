export default {
  input: './src/index.js',
  treeshake: true,
  output: {
    dir: 'dist/',
    file: 'bundle.js',
    format: 'cjs'
  }
}
