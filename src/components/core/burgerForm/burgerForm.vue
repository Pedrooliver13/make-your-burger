<template>
  <div class="container">
    <form class="form" id="burger-form" @submit="handleSubmit">
      <Message :msg="msg" />
      <div class="form__input">
        <label for="nome">Nome do cliente</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="nome"
          placeholder="Escreva um nome"
        />
      </div>
      <div class="form__input">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o tipo de pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
            {{ pao.tipo }}
          </option>
        </select>
      </div>
      <div class="form__input">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
            {{ carne.tipo }}
          </option>
        </select>
      </div>
      <div id="form__optional" class="form__optional">
        <div
          class="checkbox-container"
          v-for="opcional in opcionaisdata"
          :key="opcional.id"
        >
          <input
            type="checkbox"
            :id="opcional.tipo"
            name="opcionais"
            v-model="opcionais"
            :value="opcional.tipo"
          />
          <label :for="opcional.tipo">{{ opcional?.tipo }}</label>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script>
import Message from "../message/message.vue";
import "./styles.css";

export default {
  name: "BurgerForm",
  components: {
    Message,
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: "",
      carne: "",
      opcionais: [],
      msg: null,
    };
  },
  methods: {
    async getIngredients() {
      const response = await fetch("http://localhost:3000/ingredientes");
      const data = await response.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;

      return data;
    },
    reset() {
      this.nome = "";
      this.carne = "";
      this.pao = "";
      this.opcionais = "";
    },
    prepareData() {
      return JSON.stringify({
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      });
    },
    dispatchMessage(message = "Sucesso") {
      this.msg = message;
      setTimeout(() => (this.msg = ""), 2000);
      clearTimeout();
    },
    async handleSubmit(e) {
      e.preventDefault();
      const data = this.prepareData();

      const response = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      const responseJson = await response.json();

      this.reset();
      this.dispatchMessage(
        `Pedido Nº${responseJson?.id} realizado com sucesso`
      );
    },
  },
  mounted() {
    this.getIngredients();
  },
};
</script>
