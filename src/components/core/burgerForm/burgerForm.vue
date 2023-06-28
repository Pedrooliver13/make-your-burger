<template>
  <div class="container">
    <form class="form" id="burger-form">
      <p>Componente de mensagem</p>
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
          <option value="">Selecione o seu tipo de pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
            {{ pao.tipo }}
          </option>
        </select>
      </div>
      <div class="form__input">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne">
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
            name="opcionais"
            v-model="opcionais"
            :value="opcional.tipo"
          />
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!" />
      </div>
    </form>
  </div>
</template>

<script>
import "./styles.css";

export default {
  name: "BurgerForm",
  components: {},
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: "Solicitado",
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
  },
  mounted() {
    this.getIngredients();
  },
};
</script>
