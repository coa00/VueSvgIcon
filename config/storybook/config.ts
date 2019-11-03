/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator, configure } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import { withKnobs } from "@storybook/addon-knobs";
import Decorator from "./Decorator.vue";

addDecorator(() => ({
  components: {
    Decorator
  },
  template: `
    <decorator>
      <story slot="story"></story>
    </decorator>
  `
}));
addDecorator(withInfo);
addDecorator(withKnobs);

const req = require.context("../../src/", true, /stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
