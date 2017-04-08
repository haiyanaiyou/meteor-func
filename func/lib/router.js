Router.configure({
    layoutTemplate:'layout'


});
Router.route('/',{name:'search'});
Router.route('/add',{name:'add'});
// Router.route('/edit/:_id',{name:'edit',data:function(){
//     let res = Books.find();
//     // console.log(res.collection)
//     console.log(Books)
//     return Books.findOne({_id:this.params._id});}});

Router.route('/edit/:_id',function(){
       this.render('edit', {

        data: function() {
            Meteor.subscribe('Books');
            return Books.findOne({_id:this.params._id});
        }})
    }
);

