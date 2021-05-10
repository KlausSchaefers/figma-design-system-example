<template>
  <div class="play">
    <ButtonYellow > Hello World </ButtonYellow>

  </div>
</template>
<style>

.play {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 24px;
  min-height: 400px;
  border-radius:3px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function () {
    return {
      content: {
        header: 'Content title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      },
      user: {
        name: 'klaus@quant-ux.com',
        password: '',
        city: '',
        admin: false
      }
    }
  },
  computed: {
  },
  components: {

  },
  methods: {
  }
}
</script>
