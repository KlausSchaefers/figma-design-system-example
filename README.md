# Figma-Designlets


Figma-Low-Code is an OpenSource project, that allows to use **Figma** designs directly in **VUE.js** applications. Business logic and data is written as plain JavaScript and 'wired' through data- and method-binding to the visual design. The bindings are defined with the help of a Figma [plugin](https://www.figma.com/community/plugin/858477504263032980/Figma-Low-Code). The low code approach reduces drastically the hand-off time between designers and developers, reduces UI code and ensures that the Figma design stays the single source of truth.


```sh
git clone https://github.com/KlausSchaefers/figma-designlets.git
```

Afterwards, load all dependecies with the following command

``` sh
npm install
```

Finally start the server

``` sh
npm run serve
```


Once done, open the 'src/views/Home.vue' and enter your figma file id and the access code. You can
get the access code in your Figma settings [(Details)](https://www.figma.com/developers/api#access-tokens).
The file id is the second last url parameter

```
https://www.figma.com/file/<FigmaFileId>/...
```

Once you have entered the values, the Home.vue should look like:



## Figma Plugin

To use the advanced features such as data, method binding or input widgets, you must install the  [Figma-Low-Code plugin](https://www.figma.com/community/plugin/858477504263032980/Figma-Low-Code). The plugin has two main tab. The 'Low Code' tab allows you to set the basics, such as the element type, or the input and output data binding.

![The Figma-Low-Code plugin](assets/PluginLowCode2.png "Figma-Low-Code plugin")

The 'Style' tab allows you to define, if the element should be fixed width or height. By default Figma Low Code will assume hat the widget is responsive. Also, you can define hover styles for the fill, stroke and text color. For input elements focus styles can also be defined.

![The Figma-Low-Code plugin](assets/PluginStyle.png "Figma-Low-Code plugin")

## Input Elements

By default Figma-Low-Code renders all elements of the design as div, span and label elements. Often this is not enough, and you
would like to allow the user to enter to. You can override the default rendering by specifying the desired element type, for instance
text fields or password fields.
To do so, you need to launch the Figma-Low-Code plugin and select an element. Once an element is selected, you can select from a list of
widgets the desired element type.

## Data Binding

Figma-Low-Code supports VUE data binding. You have to pass a v-model to the **Figma** component.

``` vue
<Figma :figma="figmaFile" v-model="viewModel"/>
```

You can specify the databinding with the help of the Figma-Low-Code plugin:

1. Launch the plugin
2. Select the desired element.
3. Select the 'Low Code Tab'
4. Specify the name of the varibale, for instance 'user.name'.


During runtime, the low-code component will update the viewModel and add the values entered by the user, e.g.

``` js
    viewModel: {
        user: {
          name: "Klaus"
        }
    }
```

## Method Binding

In the Figma-Low-Code plugin you can define javascript callbacks for the elements. You can specify the databinding with the help of the Figma-Low-Code plugin:

1. Launch the plugin
2. Select the desired element.
3. Select the 'Low Code Tab'.
4. Enter the name of the method taht should be called on the event (click or change are supported for now)


During run time, the figma component will look for a method with the given name in the parent component (in the example  Home.vue). If the method exists, it will be called. The method will have the following signature:

``` js
myMethod (value, element, e) {
 ...
 return 'Screen2'
}
```

# Credits

Figma-Low-Code is based on vue-low-code developed by [Quant-UX](https://quant-ux.com).
