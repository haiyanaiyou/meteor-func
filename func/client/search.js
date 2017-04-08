Template.search.onCreated(function searchOnCreated(){
    var template=Template.instance();
    template.searchQuery=new ReactiveVar();
    template.searching=new ReactiveVar(false);
    template.autorun(function(){
       template.subscribe('Books',template.searchQuery.get(),()=>{
            setTimeout(()=>{
                template.searching.set(false);
            },300);
        });
    });
});
Template.search.helpers({
    searching:function(){
        var isSearching=Template.instance().searching.get();
        return isSearching;
    },
    query:function(){
        var qry=Template.instance().searchQuery.get();
        return qry;

    },
    books:function(){
        var booklist=Books.find();
        if(booklist){
             return booklist;
        }

    }

});
Template.search.events({
    'click button.go'(event,template){
        var value=$('#search-result').val().trim();
        console.log(value)
        if (value) {
            template.searchQuery.set(value);
            template.searching.set(true);
            return;
        }
        template.searchQuery.set(value);


    },
    'click span.remove'(e,tpl){

        if(confirm('确定删除这个吗？')){
            var id= this._id;
            Books.remove({_id:id});

        }

    },


});