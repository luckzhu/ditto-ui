import { mount, shallowMount } from "@vue/test-utils";
import { renderToString } from "@vue/server-test-utils";
import Col from "../../packages/col";
import Row from "../../packages/row";

describe("Col", () => {
  it("create", () => {
    const wrapper = shallowMount(Col);
    expect(wrapper.classes()).toContain("dt-col");
  });

  it("span", async () => {
    const span = 10;
    const wrapper = shallowMount(Col, {
      propsData: { span }
    });
    expect(wrapper.classes()).toContain("dt-col-10");
  });

  it("gutter-col", async () => {
    const wrapper = mount(Col, {
      parentComponent: Row
    });
    expect(wrapper.vm.$parent.$options.name).toBe("DtRow");
  });
});
