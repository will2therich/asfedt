import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import OfficerCard from "../../../../src/components/cards/OfficerCard";
import { Quasar } from "quasar";

const localVue = createLocalVue();
localVue.use(Quasar);

describe("OfficerCard.vue", () => {
  it("Renders a Quasar card when renders with no image provided", () => {
    const officer = {
      name: "Trevor Dyson",
      role: "Neighbourhood Police Team Sergeant",
      image: ""
    };

    const wrapper = shallowMount(OfficerCard, {
      propsData: { officer }
    });

    expect(wrapper.text()).to.include(officer.name);
    expect(wrapper.text()).to.include(officer.role);
    // Since we provided no image it should load the default placeholder image
    expect(wrapper.html()).to.include("/images/officers/officer-profile.jpg");
  });

  it("Renders a Quasar card when renders with an image provided", () => {
    const officer = {
      name: "Kirsten Karcher",
      role: "Police Community Support Officer",
      image: "kkarcher"
    };

    const wrapper = shallowMount(OfficerCard, {
      propsData: { officer }
    });

    expect(wrapper.text()).to.include(officer.name);
    expect(wrapper.text()).to.include(officer.role);
    // Since we provided no image it should load the default placeholder image
    expect(wrapper.html()).to.include("/images/officers/kkarcher.jpg");
  });
});
