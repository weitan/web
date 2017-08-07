# 更多规范
### HTML/Vue template
+ 每行不超过 80 字符；
+ 避免使用文档碎片(Fragment)；
+ 布尔型 Prop 省略属性值；
+ 集合书写同类属性(指令属性`v-`，数据绑定属性`:`，事件绑定属性`@`，普通及原生属性)；
+ 避免过长的指令表达式，原则上指令表达式中不超过两个二元运算符，过长的表达式使用计算属性或方法替代；

### CSS/LESS
+ 不使用 scoped 特性；
+ 原则上每个 Vue 文件有且只有一个一级选择器——即该组件样式的命名空间；
+ 颜色值采用简写、小写字母形式；
+ `0` 值不添加任何单位；
+ 集合书写相关属性，CSS 属性推荐书写顺序：
```css
el {
  /* 显示、定位属性 */
  /* display postion(top, ..., z-index) float clear content */

  /* Flex 属性 */

  /* 盒模型属性 */
  /* box-sizing width height padding border margin */

  /* 装饰属性 */
  /* background color font text align other */
}
```

### JavaScript
+ 每行不超过 80 字符；
+ [ES-Lint Ready] 不使用 `var`，以 `let` `const` 代之；
+ [ES-Lint Ready] 对象字面量使用简写形式：`{ myProp, myFunc () {} }`；
+ [ES-Lint Ready] 禁止嵌套三元运算符；
+ [ES-Lint Ready] 不在模版字符串中换行，不必要的换行符和空格很可能带来诡异的问题；
+ 箭头函数在仅有 1 个参数时省略小括号，不明确使用返回值时不省略函数体大括号；
+ 组件对象首字母大写：`import MyComponent from './my-component'`；
+ 变量命名原则上使用名词或形容词，函数、方法命名使用动词，变量命名应做到简明扼要；
+ 避免无意义、可替代的响应式数据(data)，避免将第三方对象(如 echarts 对象)转化为响应式对象；
+ 代码注释应着眼于描述复杂业务逻辑或遇到的坑点，避免单纯描述代码逻辑的注释(这样还不如直接读代码)；
```javascript
if (value > MAX_VALUE) {
  // if value greater than max value    ❎
  // disable button if larger than max  ✅
  ...
}
```
