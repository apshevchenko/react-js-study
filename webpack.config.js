module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
    ],
  },
  mode,
  target: "node"
};
