import path from "path";

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  // plugins: ["@tarojs/plugin-react-devtools"],
  defineConstants: {
    abc: "111",
    jsbrige: {
      func1: () => {},
      func2: () => {}
    }
  },
  alias: {
    "@/src": path.resolve(__dirname, "../src")
  },
  mini: {},
  h5: {
    // entry: {
    //   index: ["@/src/pages/index/index"],
    //   tab1: ["@/src/pages/tab1/index"]
    // },
    // output: {
    //   filename: "js/[name].[hash:8].js",
    //   chunkFilename: "js/[name].[chunkhash:8].js"
    // }
  }
};
