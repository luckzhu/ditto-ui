import { mount, shallowMount } from "@vue/test-utils";
import Button from "../../packages/button";
// import DtIcon from "../../packages/icon";

describe("Button", () => {
  it("type", () => {
    const type = "primary";
    const wrapper = shallowMount(Button, {
      propsData: { type }
    });
    expect(wrapper.classes()).toContain("dt-button-primary");
    // expect(wrapper.vm.classList.contains()).to.be.true;
  });

  it("shape", () => {
    const shape = "circle";
    const wrapper = shallowMount(Button, {
      propsData: { shape }
    });
    expect(wrapper.classes()).toContain("dt-button-circle");
  });

  it("ghost", () => {
    const ghost = true;
    const wrapper = shallowMount(Button, {
      propsData: { ghost }
    });
    expect(wrapper.classes()).toContain("is-ghost");
  });

  it("disabled", () => {
    const disabled = true;
    const wrapper = shallowMount(Button, {
      propsData: { disabled }
    });
    expect(wrapper.classes()).toContain("is-disabled");
  });

  it("htmlType", () => {
    const htmlType = "submit";
    const wrapper = shallowMount(Button, {
      propsData: { htmlType }
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  // it("icon", () => {
  //   const icon = "setting";
  //   const wrapper = mount(Button, {
  //     propsData: { icon }
  //   });
  //   const svg = wrapper.find("use");
  //   expect(svg.attributes("href")).toBe("#icon-setting");
  // });
});
