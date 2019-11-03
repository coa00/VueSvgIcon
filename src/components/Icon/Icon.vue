<template>
  <div v-bind:style="{ display: 'inline-block', width: size }">
    <svg :is="type" :stroke="stroke" :fill="fill" />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

import arrowDown from "@/assets/icons/arrow-down.svg?inline";
import bell from "@/assets/icons/bell.svg?inline";
import cross from "@/assets/icons/cross.svg?inline";
import calendar from "@/assets/icons/calendar.svg?inline";
import file from "@/assets/icons/file.svg?inline";
import freelance from "@/assets/icons/freelance.svg?inline";
import lock from "@/assets/icons/lock.svg?inline";
import lockOpen from "@/assets/icons/lock-open.svg?inline";
import logOut from "@/assets/icons/log-out.svg?inline";
import mail from "@/assets/icons/mail.svg?inline";
import nounMagnifying2664607 from "@/assets/icons/noun-magnifying-2664607.svg?inline";
import public1 from "@/assets/icons/public.svg?inline";
import sent from "@/assets/icons/sent.svg?inline";
import setting from "@/assets/icons/setting.svg?inline";
import task from "@/assets/icons/task.svg?inline";

export default Vue.extend({
  components: {
    arrowDown,
    bell,
    cross,
    calendar,
    file,
    freelance,
    lockOpen,
    lock,
    logOut,
    mail,
    nounMagnifying2664607,
    public1,
    sent,
    setting,
    task
  },
  props: {
    type: {
      type: String as PropType<string>,
      required: true
    },
    stroke: {
      type: String as PropType<string>,
      default: "none"
    },
    fill: {
      type: String as PropType<string>,
      default: "currentColor"
    },
    size: {
      type: String as PropType<string>,
      default: "100%"
    }
  }
});
</script>
