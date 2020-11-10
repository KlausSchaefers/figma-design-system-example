<template>
  <div class="home">
    <h1>This is an example of the design systemy</h1>

   <div class="example">
        <ButtonBlue @click="onButtonBlueClick"/> <ButtonBlue @click="onButtonBlueClick" label="Hello"/> <ButtonBlue @click="onButtonBlueClick"> World</ButtonBlue>
      </div>

      <div class="example">
        <ButtonRed/> <ButtonRed label="Hello"/> <ButtonRed> World</ButtonRed>
      </div>

      <div class="example">
        <HeaderBlue @click="onHeaderBlueClick"/> <HeaderBlue label="Hello" @click="onHeaderBlueClick"/> <HeaderBlue @click="onHeaderBlueClick"> World</HeaderBlue>
      </div>

      <div class="example">
        <HeaderSmallBlue/> <HeaderSmallBlue label="Hello"/> <HeaderSmallBlue> World</HeaderSmallBlue>
      </div>

      <div class="example">
        <HeaderCenterBlue style="border:red 1px dashed; width:200px">Zentrum</HeaderCenterBlue>
      </div>


      <div class="example">
        <ContentCard v-model="content" style="margin:10px"/>
        <ContentCard v-model="content2" style="margin:10px"/>
      </div>

      <div class="example">
        <LoginDialog v-model="user" @login="onLogin"/>

        {{user.email}}
      </div>

      <div class="example">
        <WhiteInput v-model="user.city" @change="onWhiteValueChange" placeholder="Enter the city" @blur="onWhiteValueBlur"/>
      </div>

      <div class="example">
        <ToggleRadioButton @click="onRadioClick" @change="onRadioChange" v-model="user.male"/>   <ToggleRadioButton @click="onRadioClick" @change="onRadioChange"/>
      </div>
      <div class="example">
         <VarientButton type="Primary" state="Out" @click="onVarientClick"/> <VarientButton type="Primary" state="Hover" label="Primary Hover" @click="onVarientClick"/>
      </div>

      <div class="example">
         <VarientButton type="Secondary" state="Out" @click="onVarientClick"/> <VarientButton type="Secondary" state="Hover" label="Secondary Hover" @click="onVarientClick" />
      </div>

      <div class="example">
         <VarientCheckBox label="Is Male" v-model="user.male"  Type="Red"/> <VarientCheckBox label="Is Male" v-model="user.male"  Type="Blue"/>
      </div>

      <div class="example">
        <VarientToggleButton v-model="user.male" label="Male" @change="onToggleChange" @click="onToggleClick"/>  <VarientToggleButton/>
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
