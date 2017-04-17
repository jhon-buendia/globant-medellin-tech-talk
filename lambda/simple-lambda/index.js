'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    
    console.log('Received event:', JSON.stringify(event, null, 2));

    var category_required = event.category_required ;
    console.log("category_required");
    console.log(category_required);
    var categories = {

        'ps4': [
            {
                'name' : 'Final fantasy xv',
                'price' : 45,
                'currency' : 'USD',
                'description' : 'play station 4 game'
            },

            {
                'name' : 'Pes 2017',
                'price' : 40,
                'currency' : 'USD',
                'description' : 'play station 4 game'
            }
        ],
        'xbox_one': [

            {
                'name' : 'Hallo collection',
                'price' : 60,
                'currency' : 'USD',
                'description' : 'xbox one game'
            },

             {
                'name' : 'Pes 2017',
                'price' : 41,
                'currency' : 'USD',
                'description' : 'xbox one game'
            }
        ]
    }

    var response = {};

    if(!category_required) {

        response['status'] = 404;
        callback(null, response);
       
    } else {

        response['status'] = 200;
        console.log("category[category_required].length");
        console.log(categories[category_required]);
        if(! categories[category_required]) {
            response['data'] = false;
        } else {
             response['data'] = JSON.stringify( categories[category_required],null,2);
        }
        
        callback(null, response);
    }
};