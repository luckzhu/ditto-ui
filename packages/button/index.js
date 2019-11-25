// 为组件提供 install 方法，供组件对外按需引入
import DtButton from "./src/button";
DtButton.install = Vue => {
  Vue.component(DtButton.name, DtButton);
};
export default DtButton;
