import { mount, shallowMount } from "@vue/test-utils";
import { renderToString } from "@vue/server-test-utils";
import Row from "../../packages/row";

describe("Row", () => {
  it("create", () => {
    const wrapper = shallowMount(Row);
    expect(wrapper.classes()).toContain("dt-row");
  });

  it("gutter", async () => {
    const gutter = 16;
    const str = await renderToString(Row, {
      propsData: {
        gutter
      }
    });
    expect(str).toContain('style="margin-left:-8px;margin-right:-8px;"');
  });

  it("align", () => {
    const align = "middle";
    const wrapper = shallowMount(Row, {
      propsData: {
        align
      }
    });
    expect(wrapper.classes()).toContain("is-align-middle");
  });

  it("justify", () => {
    const justify = "space-around";
    const wrapper = shallowMount(Row, {
      propsData: {
        justify
      }
    });
    expect(wrapper.classes()).toContain("is-justify-space-around");
  });
});
