import Ember from 'ember';
import MapUtil from "../utils/google-maps";

/**
 * Benefits of a Ember service :
 * - auto injected (service locator pattern = registry of services instantiated when called)
 * - lazy loaded
 * - singleton (useful for caching)
 * - has lifecycle (can use hooks)
 */
export default Ember.Service.extend({
    init(){
        if(!this.get("cachedMaps")){
            this.set("cachedMaps", Ember.Object.create());
        }

        if(!this.get("mapUtil")){
            this.set("mapUtil", MapUtil.create());
        }
    },

    getMapElement(location){
        let formatLoc = location.camelize();
        let elem = this.get(`cachedMaps.${formatLoc}`);
        if(!elem){
            elem = this.createMapElement();
            this.get("mapUtil").createMap(elem, location);
            this.set(`cachedMaps.${formatLoc}`, elem);
        }
        return elem;
    },

    createMapElement(){
        let elem = document.createElement("div");
        elem.className = "map";
        return elem;
    }
});
