
// Meteor.publish('Books',function(){
//     return Books.find();
// });


Meteor.publish('Books',function(searchCondition){
    let query = {};


    if (searchCondition) {
        console.log(111)
        let regex = new RegExp(searchCondition, 'i');
        query = {
            $or: [{
                corpName: regex
            }, {
                unifiedCode:regex
            }, {
                capital: regex
            },{
                address: regex

            },{
                landlinePhone: regex

            },{
                legalId: regex

            },{
                legalPhone: regex

            },{
                createdAt: regex

            },{
                legalName: regex

            }]
        }

        let res = Books.find(query);
        return res
    } else {
        return Books.find();
    }
    return Books.find(query);

});
