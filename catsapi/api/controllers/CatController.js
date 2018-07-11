/**
 * CatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {  
  test: function(req, res){
    var request = require('request');
    var convert = require('xml-js');

    var response;
    request.get({url: 'http://thecatapi.com/api/images/get?format=xml&results_per_page=21&size=small'},
        (error, response, body) => {
          if (error) {
            console.log(error)
          }
          this.response = convert.xml2js(response.body, {compact: true, spaces: 4})
          res.json(this.response.response.data.images)
        })
  }
};

