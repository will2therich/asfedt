import { expect } from "chai";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import PrioritiesSection from "../../../../src/components/sections/PrioritiesSection";
import Vuex from "vuex";
import { Quasar } from "quasar";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Quasar);

describe("PrioritiesSection.vue", () => {
  let getters;
  let store;
  let beat = {
    name: "Portishead",
    latLong: "51.485605, -2.768289",
    introText:
      "Contact your local policing team, find opportunities to meet the team and view or contribute to community policing priorities for your area.",
    officers: [
      {
        name: "Trevor Dyson",
        role: "Neighbourhood Police Team Sergeant",
        image: ""
      },
      {
        name: "Kirsten Karcher",
        role: "Police Community Support Officer",
        image: "kkarcher"
      },
      {
        name: "Bill Hoover",
        role: "Police Community Support Officer",
        image: ""
      },
      {
        name: "Andrew Henry",
        role: "Partnership Support Officer",
        image: ""
      }
    ],
    priorities: [
      {
        title: "Road Safety Week",
        updated: "18 November 2019",
        path: "/road-safety-week/"
      },
      {
        title: "Community SpeedWatch",
        updated: "14 August 2019",
        path: "/community-speedwatch/"
      },
      {
        title: "Mopeds using footpaths and speeding vehicles",
        updated: "04 September 2019",
        path: "/mopeds-using-footpaths-and-speeding-vehicles/"
      }
    ]
  };

  beforeEach(() => {
    getters = {
      getBeat: () => beat
    };
    store = new Vuex.Store({
      getters: getters
    });
  });

  it("Renders multiple Priority Cards when rendered", () => {
    const wrapper = shallowMount(PrioritiesSection, { store, localVue });

    expect(wrapper.html()).to.include("priorities-card-stub");
    expect(wrapper.text()).to.include("Our Policing Priorities in your area");
  });
});
