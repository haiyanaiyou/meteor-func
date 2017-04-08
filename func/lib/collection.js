Books=new Mongo.Collection('books');
if(Meteor.isServer){
    Books._ensureIndex({
        corpName:1,
        unifiedCode:1,
        capital:1,
        address:1,
        landlinePhone:1,
        legalName:1,
        legalId:1,
        legalPhone:1,
        createdAt:1

    });

}