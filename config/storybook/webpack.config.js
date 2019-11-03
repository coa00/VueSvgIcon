// This example uses "Full control mode + default".
// If you are using other mode, add payload of `config.module.rules.push` to rules list.
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: "storybook-addon-vue-info/loader",
    enforce: "post"
  });

  return config;
};
