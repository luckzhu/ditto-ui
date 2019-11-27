import { mount, shallowMount } from "@vue/test-utils";
import Button from "../../packages/button";

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

  it("icon", () => {
    const icon = "setting";
    const wrapper = mount(Button, {
      propsData: { icon }
    });
    const svg = wrapper.find("use");
    expect(svg.attributes("href")).toBe("#icon-setting");
  });

  it("iconPosition", () => {
    const iconPosition = "right";
    const wrapper = shallowMount(Button, {
      propsData: { iconPosition }
    });
    expect(wrapper.classes()).toContain("dt-button-right");
  });

  it("loading-icon", () => {
    const loading = true;
    const wrapper = mount(Button, {
      propsData: { loading }
    });
    const svg = wrapper.find("use");
    expect(svg.attributes("href")).toBe("#icon-loading");
  });

  it("loading-icon", () => {
    const loading = true;
    const wrapper = mount(Button, {
      propsData: { loading }
    });
    const svg = wrapper.find("use");
    expect(svg.attributes("href")).toBe("#icon-loading");
  });

  it("loading-number", () => {
    const loading = { delay: 10 };
    const icon = "setting";
    const wrapper = mount(Button, {
      propsData: { loading, icon }
    });
    // 创建mock函数
    const mockFn = jest.fn();
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({
      handleClick: mockFn
    });
    // 触发按钮的点击事件
    wrapper.trigger("click");
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
