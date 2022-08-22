export default defineAppConfig({
  appId: "app",
  pages: [
    "pages/index/index",
    "pages/tab1/index",
    "pages/tab2/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff0",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: 'default'
  },
  // tabBar: {
  //   color: "red",
  //   selectedColor: "blue",
  //   backgroundColor: "white",
  //   borderStyle: "black",
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "index"
  //     },
  //     {
  //       pagePath: "pages/tab1/index",
  //       text: "tab1"
  //     },
  //     {
  //       pagePath: "pages/tab2/index",
  //       text: "tab2"
  //     }
  //   ]
  // }
});
