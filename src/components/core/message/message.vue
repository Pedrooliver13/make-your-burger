<template>
  <div class="message" v-if="msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import "./styles.css";

export default {
  name: "Message",
  props: {
    msg: String,
  },
};
</script>
