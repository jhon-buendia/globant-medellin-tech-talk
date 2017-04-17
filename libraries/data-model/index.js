var dataModel = (function () {

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
    
    function getCategoryByName(name) {

        if(!categories[name]) {
            console.log("category not found");
            return false;
        } else {
             console.log("category found:" + categories[name]);
             return categories[name];
        }
    }

    return {
        getCategoryByName : getCategoryByName,
    }

})();

if( typeof window !== 'undefined') {

} else {
    module.exports = dataModel;
}
