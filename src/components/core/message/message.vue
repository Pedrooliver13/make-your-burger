<script>
import "./styles.css";

export default {
  name: "Message",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="message" v-if="msg">
    <p>{{ msg }}</p>
  </div>
</template>
