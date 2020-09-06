'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Called before an entry is created
    async beforeCreate(data) {
      
      await strapi.services.section.setLevel(data) ;
      
    },
    // Called before an entry is updated
    async beforeUpdate(params, data) {
      
      await strapi.services.section.setLevel(data) ;
      
    }
  },
};
