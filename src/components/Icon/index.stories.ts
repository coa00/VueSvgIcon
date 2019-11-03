/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { text, number } from "@storybook/addon-knobs";

import Icon from "./Icon.vue";

storiesOf("Atoms", module).add(
  "Icon",
  () => ({
    components: { Icon },
    template:
      '<div><p><h5>Knobs で入力したアイコン</h5> <icon :size="size" :fill="fill" :stroke="stroke" :type="type" /></p><h5>all icons</h5><span v-for="item in icons"><p>{{item}}</p><icon :size="size" :fill="fill" :stroke="stroke" :type="item" /></span></div>',
    data: () => ({
      icons: [
        "arrowDown",
        "bell",
        "calendar",
        "cross",
        "file",
        "freelance",
        "lockOpen",
        "lock",
        "logOut",
        "mail",
        "nounMagnifying2664607",
        "public1",
        "sent",
        "setting",
        "task"
      ]
    }),
    props: {
      type: {
        default: text("type", "task")
      },
      stroke: {
        default: text("stroke", "none")
      },
      fill: {
        default: text("fiil", "#333")
      },
      size: {
        default: text("size", "48px")
      }
    }
  }),
  {
    // zeplin など参考リンクがあれば追加
    notes: `
  ## 注意点
   - size を指定しない場合は、100%
   - fill を指定しない場合は currentColor 

  ## 参照
  [デザイン](https://zpl.io/bWmmALx)
  `
  }
);
