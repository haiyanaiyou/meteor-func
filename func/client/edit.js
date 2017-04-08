Template.edit.events({
    'submit form.form-edit':function(e,tpl){
        e.preventDefault();
        var id=this._id;

        var corpName=tpl.$("#bookmark_corpName_new").val();

        var unifiedCode=tpl.$("#bookmark_unifiedCode_new").val();
        var capital=tpl.$("#bookmark_capital_new").val();
        var address=tpl.$("#bookmark_address_new").val();
        var landlinePhone=tpl.$("#bookmark_landlinePhone_new").val();
        var legalName=tpl.$("#bookmark_legalName_new").val();
        var legalId=tpl.$("#bookmark_legalId_new").val();
        var legalPhone=tpl.$("#bookmark_legalPhone_new").val();
        var createdAt=tpl.$("#bookmark_createdAt_new").val();



        Books.update({_id:id}, {$set:{corpName:corpName,capital:capital,unifiedCode:unifiedCode,address:address,landlinePhone:landlinePhone,legalName:legalName,legalId:legalId,legalPhone:legalPhone,createdAt:createdAt}}, function(err){
            if(!err){
                tpl.$("#bookmark_corpName_new").val('');
                tpl.$("#bookmark_unifiedCode_new").val('');
                tpl.$("#bookmark_capital_new").val('');
                tpl.$("#bookmark_address_new").val('');
                tpl.$("#bookmark_landlinePhone_new").val('');
                tpl.$("#bookmark_legalName_new").val('');
                tpl.$("#bookmark_legalId_new").val('');
                tpl.$("#bookmark_legalPhone_new").val('');
                tpl.$("#bookmark_createdAt_new").val('');

                Router.go('/');

            }

        });

    }
});