<script>
import "./styles.css";

export default {
  name: "NavBar",
  props: ["logo_src", "alt"],
};
</script>

<template>
  <header class="menu">
    <div class="menu__content container">
      <router-link to="/">
        <img :src="logo_src" :alt="alt" id="logo" />
      </router-link>

      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/requests">Pedidos</router-link>
      </div>
    </div>
  </header>
</template>
