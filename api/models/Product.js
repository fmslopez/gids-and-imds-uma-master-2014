/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      identifier : {
          type : 'string',
          unique : true,
          required : true
      },
      productionDate : {
          type : 'datetime',
          required : true
      },
      amount : {
          type : 'integer',
          required : true
      },
      batch : {
          type : 'string',
          unique : true,
          required : true
      }
  }
};

