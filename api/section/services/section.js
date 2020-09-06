'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async setLevel (data) {
      if(!data.parent){
        data.level = 1 ;
      }else{
        let ss = await strapi.api.section.services.section.findOne({id:data.parent}) ;
        data.level = ss.level + 1 ;
      }
    return data ;
  }
}
