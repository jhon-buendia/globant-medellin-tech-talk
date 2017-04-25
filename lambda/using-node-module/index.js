'use strict';

var dataModel = require('data-model');

console.log('Loading function');

exports.handler = (event, context, callback) => {
    
    console.log('Received event:', JSON.stringify(event, null, 2));

    var category_required = event.category_required ;

    console.log("category_required");
    console.log(category_required);

    var response = {};

    if(!category_required) {

        response['status'] = 404;
        callback(null, response);
       
    } else {

        response['status'] = 200;
        console.log("categories[category_required].length");

        var category = dataModel.getCategoryByName(category_required);

        if(!category) {
             response['status'] = 404;
        } else {
             response['data'] = JSON.stringify( category,null,2);
        }
        
        callback(null, response);
    }
};