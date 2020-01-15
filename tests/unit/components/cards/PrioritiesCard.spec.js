import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PrioritiesCard from "../../../../src/components/cards/PrioritiesCard";
import { Quasar } from "quasar";

const localVue = createLocalVue();
localVue.use(Quasar);

describe("PrioritiesCard.vue", () => {
  it("Renders a Quasar card when renders", () => {
    const priority = {
      title: "Road Safety Week",
      updated: "18 November 2019",
      path: "/road-safety-week/"
    };

    const wrapper = shallowMount(PrioritiesCard, {
      propsData: { priority }
    });

    expect(wrapper.text()).to.include(priority.title);
    expect(wrapper.text()).to.include(priority.updated);
  });
});
