import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        // replace with is different from transitionTo function.
        // transitionTo will add the route to the browser's history
        this.replaceWith("rentals");
    }
});
