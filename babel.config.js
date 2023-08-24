module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
        useBuiltIns: "usage", // 会根据配置的目标环境找出需要的polyfill进行部分引入
        corejs: 3, // 使用 core-js@3 版本
      },
    ],
    ["@babel/preset-react"],
  ],
};
