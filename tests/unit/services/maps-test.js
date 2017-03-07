import { moduleFor, test } from 'ember-qunit';
import Ember from "ember";

const DUMMY_ELEM = {};

let MapUtilStub = Ember.Object.extend({
  createMap(element, location){
    this.assert.ok(element, "createMap called with element");
    this.assert.ok(location, "createMap called with location");
    return DUMMY_ELEM;
  }
});

moduleFor('service:maps', 'Unit | Service | maps', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  needs: ['util:google-maps']
});

test("should create a new map if none cached", function(assert){
  assert.expect(4);
  // i guess create comes from the Ember Object class
  let stubMapUtil = MapUtilStub.create({assert});
  let mapService = this.subject({ mapUtil: stubMapUtil});
  let element = mapService.getMapElement("San Francisco");
  assert.ok(element, "element exists");
  assert.equal(element.className, "map", "element has class name 'map'");
});

test('should use existing map if one is cached for location', function (assert) {
  assert.expect(1);
  let stubCachedMaps = Ember.Object.create({
    sanFrancisco: DUMMY_ELEM
  });
  let mapService = this.subject({ cachedMaps: stubCachedMaps});
  let element = mapService.getMapElement("San Francisco");
  assert.equal(element, DUMMY_ELEM, "element fetched from cache");
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
