import DS from 'ember-data';
/**
 * we need our application to default to making requests to the namespace of /api. 
 * Without this change, navigation to /rentals in our application would conflict with Mirage.
 */
export default DS.JSONAPIAdapter.extend({
    namespace : "api"
});
