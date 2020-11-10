<template>
  <div class="home">
    <h1>This is an example of the Figma-Low-Code Design System</h1>

      <div class="example">
        <div class="visual">
          <ButtonBlue label="Hello World"/>
        </div>
        <div class="code">
            <code>
                &lt;ButtonBlue label="Hello World"/&gt;
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
          <ButtonBlue> Hello World </ButtonBlue>
        </div>
        <div class="code">
            <code>
                &lt;ButtonBlue&gt;Hello World&lt;/ButtonBlue&gt;
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
          <ButtonRed label="Hello World"/>
        </div>
        <div class="code">
            <code>
                &lt;ButtonRed label="Hello World"/&gt;
            </code>
        </div>
      </div>

      <div class="example">
        <div class="visual">
          <ButtonRed> Hello World </ButtonRed>
        </div>
        <div class="code">
            <code>
                &lt;ButtonRed&gt;Hello World&lt;/ButtonRed&gt;
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
          <HeaderBlue> This is a blue header </HeaderBlue>
        </div>
        <div class="code">
            <code>
                &lt;HeaderBlue&gt;This is a blue header&lt;/HeaderBlue&gt;
            </code>
        </div>
      </div>
´
      <div class="example">
        <div class="visual">
          <HeaderSmallBlue> This is a small blue header </HeaderSmallBlue>
        </div>
        <div class="code">
            <code>
                &lt;HeaderSmallBlue&gt;This is a small blue header&lt;/HeaderSmallBlue&gt;
            </code>
        </div>
      </div>


    <div class="example">
        <div class="visual">
            <ContentCard v-model="content"/>
        </div>
        <div class="code">
            <code>
                &lt;ContentCard v-modle="content"/e&gt;
                <br><br>
                ...
                <br><br>
                content = {<br>
                &nbsp;&nbsp;"title": {{content.title}},<br>
                &nbsp;&nbsp;"body": {{content.body}}<br>
                }<br>
            </code>
        </div>
      </div>


    <div class="example">
        <div class="visual">
            <LoginDialog v-model="user" @login="onLogin"/>
        </div>
        <div class="code">
            <code>
                &lt;LoginDialog v-modle="user" @login="onLogin"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"name": {{user.name}},<br>
                &nbsp;&nbsp;"password": {{user.password}}<br>
                }<br>
            </code>
        </div>
      </div>

      <div class="example">
        <div class="visual">
          <WhiteInput v-model="user.city" @change="onTextBoxChange" placeholder="Enter the city"/>
        </div>
        <div class="code">
            <code>
                &lt;WhiteInput v-modle="user.city" @change="onTextBoxChange" placeholder="Enter the city"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"city": {{user.city}}<br>
                }<br>
            </code>
        </div>
      </div>

      <h2>Varient Components</h2>

      <div class="example">
        <div class="visual">
            <VarientButton type="Primary" state="Out" label="Hello World"/>
        </div>
        <div class="code">
            <code>
                &lt;VarientButton type="Primary" state="Out" label="Hello World"/&gt;<br>
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
           <VarientButton type="Secondary" state="Out" label="Hello World"/>
        </div>
        <div class="code">
            <code>
                 &lt;VarientButton type="Secondary" state="Out" label="Hello World"/&gt;
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
            <VarientButton type="Primary" state="Hover" label="Hello World"/>
        </div>
        <div class="code">
            <code>
                &lt;VarientButton type="Primary" state="Hover" label="Hello World"/&gt;<br>
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
           <VarientButton type="Secondary" state="Hover" label="Hello World"/>
        </div>
        <div class="code">
            <code>
                 &lt;VarientButton type="Secondary" state="Hover" label="Hello World"/&gt;
            </code>
        </div>
      </div>



      <h2>Varient Components with Smart Container</h2>
      <p class="help">
        The following components combine a varient component with a Smartz container. This allows them to switch between
        two states to build for instance checkboxes, toggle buttons or radio buttons.
      </p>

      <div class="example">
        <div class="visual">
            <ToggleRadioButton @change="onRadioChange" v-model="user.admin"/>
        </div>
        <div class="code">
            <code>
                &lt;ToggleRadioButton v-modle="user.admin" @change="onRadioChange"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"admin": {{user.admin}}<br>
                }<br>
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
            <VarientToggleButton @click="onToggleChange" @change="onRadioChange" v-model="user.admin"/>
        </div>
        <div class="code">
            <code>
                &lt;VarientToggleButton v-modle="user.admin" @change="onToggleChange"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"admin": {{user.admin}}<br>
                }<br>
            </code>
        </div>
      </div>



      <div class="example">
        <div class="visual">
            <VarientCheckBox label="Is admin" v-model="user.admin"  @change="onCheckBoxChange" Type="Red"/>
        </div>
        <div class="code">
            <code>
                &lt;VarientCheckBox v-modle="user.admin" @change="onCheckBoxChange" type="Red"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"admin": {{user.admin}}<br>
                }<br>
            </code>
        </div>
      </div>


      <div class="example">
        <div class="visual">
            <VarientCheckBox label="Is admin" v-model="user.admin"  @change="onCheckBoxChange" Type="Blue"/>
        </div>
        <div class="code">
            <code>
                &lt;VarientCheckBox v-modle="user.admin" @change="onCheckBoxChange" type="Blue"/&gt;
                <br><br>
                ...
                <br><br>
                user = {<br>
                &nbsp;&nbsp;"admin": {{user.admin}}<br>
                }<br>
            </code>
        </div>
      </div>


  </div>
</template>
<style>
.home {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0,15);
}
.example {
  margin-bottom: 80px;
  display: flex;

  align-content: flex-start;
}

.visual {
  width: 40%;
}

.code {
  width: 60%;
  background: #555;
  color: #B9EA46;
  border-radius: 5px;
  padding: 16px;
}

pre {
  margin: 0;
  text-align: left;
}

code {
  margin: 0;
  text-align: left;
}

.help {
  font-size: 20px;
  line-height: 1.6;
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
    onButtonBlueClick () {
      console.debug('onButtonBlueClick')
    },
    onLogin () {
      console.debug('onLogin')
      alert('Login was pressed for email ' + this.user.name)
    },
    onRadioChange () {
      console.debug('onCheckBoxChange')
    },
    onToggleChange () {
      console.debug('onCheckBoxChange')
    },
    onCheckBoxChange () {
      console.debug('onCheckBoxChange')
    },
    onTextBoxChange () {
      console.debug('onTextBoxChange')
    }
  }
}
</script>
