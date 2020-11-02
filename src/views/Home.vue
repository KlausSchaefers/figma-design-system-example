<template>
  <div class="home">
    <h1>This is an example of the design systemy</h1>

    <div class="example">
      <ButtonBlue @click="onButtonBlueClick"/> <ButtonBlue label="Hello"/> <ButtonBlue> World</ButtonBlue>
    </div>

    <div class="example">
      <ButtonRed/> <ButtonRed label="Hello"/> <ButtonRed> World</ButtonRed>
    </div>

    <div class="example">
      <HeaderBlue/> <HeaderBlue label="Hello"/> <HeaderBlue> World</HeaderBlue>
    </div>

    <div class="example">
      <HeaderSmallBlue/> <HeaderSmallBlue label="Hello"/> <HeaderSmallBlue> World</HeaderSmallBlue>
    </div>

    <div class="example">
      <ContentCard v-model="content"/>
    </div>

    <div class="example">
      <LoginDialog v-model="user" @login="onLogin"/>

      {{user}}
    </div>

  </div>
</template>
<style>
.example {
  margin-bottom: 20px;
}
</style>
<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data: function () {
    return {
      content: {
        header: 'A cool title',
        body: 'Lore ipsum....'
      },
      user: {
        email: 'klaus@quant-ux.com',
        password: ''
      }
    }
  },
  components: {

  },
  methods: {
    onButtonBlueClick () {
      console.debug('onButtonBlueClick')
    },
    onLogin () {
      console.debug('onLogin')
    }
  }
}
</script>
