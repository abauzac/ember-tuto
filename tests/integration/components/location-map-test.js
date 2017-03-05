import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('location-map', 'Integration | Component | location map', {
  integration: true,
  beforeEach(){
    //Registration makes an object available to your Ember application for things 
    //like loading components from templates and injecting services in this case
    this.register("service:maps", StubMapsService);
    //injects the service we just registered into the context of the tests, 
    //so each test may access it through this.get('mapsService')
    this.inject.service("maps", { as : "mapsService"});
  }
});

let StubMapsService = Ember.Service.extend({
  getMapElement(location){
    this.set("calledWithLocation", location);
    // simulate maps service by creatin a simple div
    return document.createElement("div");
  }
});

test("should append map element to container elem", function(assert){
  this.set("myLocation", "Oakland");
  this.render(hbs`{{location-map location=myLocation}}`);
    assert.equal(this.$(".map-container").children().length, 1, "map element should be visible");
    assert.equal(this.get("mapsService.calledWithLocation"), "Oakland", "a map of Potomac should be displayed");
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{location-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#location-map}}
      template block text
    {{/location-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
