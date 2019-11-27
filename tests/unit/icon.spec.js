import { shallowMount } from "@vue/test-utils";
import Icon from "../../packages/icon";

describe("Icon", () => {
  it("name", () => {
    const name = "setting";
    const wrapper = shallowMount(Icon, {
      propsData: { name }
    });
    const svg = wrapper.find("use");
    expect(svg.attributes("href")).toBe("#icon-setting");
  });
});
