import Mediator from "../views/mediator.js";
import { Router as BaseRouter } from "presentation-router";
import { PANEL } from "../messages.js";

// views
import HomeView from "../views/homeView.js";

const TRANSITION = {
  "in": 250,
  "out": 250
};

const loadViewAndObserve = async (router, view) => {
  await Mediator.observeColleagueAndTrigger(view, PANEL, view.name);
  await router.loadView(view);
  return router;
};


const LENNON = {
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
};

class Router extends BaseRouter {
  constructor() {
    super({
      "transition": TRANSITION,
      "routes": {
        "": () => {
          return loadViewAndObserve(this, new HomeView(LENNON));
        },
        "home": () => {
          return loadViewAndObserve(this, new HomeView(LENNON));
        }
      }
    });
  };

  async cleanup() {
    if (this.view) {
      await Mediator.dismissColleagueTrigger(this.view, PANEL, this.view.name);
    }
    return await super.cleanup();
  };
};

export default Router;
