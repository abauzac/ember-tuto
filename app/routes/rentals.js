import Ember from 'ember';

export default Ember.Route.extend({
    // model function acts as a hook (auto triggered by ember)
    model() {
        // ember data "store" service is injected into all routes and components (DI?)
        return this.get("store").findAll("rental");
    }
});
