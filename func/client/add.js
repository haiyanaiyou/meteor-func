Template.add.events({
    'submit form.form-add'(e,tpl){
       e.preventDefault();
        var corpName=tpl.$("#bookmark_corpName").val();
        var unifiedCode=tpl.$("#bookmark_unifiedCode").val();
        var capital=tpl.$("#bookmark_capital").val();
        var address=tpl.$("#bookmark_address").val();
        var landlinePhone=tpl.$("#bookmark_landlinePhone").val();
        var legalName=tpl.$("#bookmark_legalName").val();
        var legalId=tpl.$("#bookmark_legalId").val();
        var legalPhone=tpl.$("#bookmark_legalPhone").val();
        var createdAt=tpl.$("#bookmark_createdAt").val();
        var json_data={corpName:corpName,capital:capital,unifiedCode:unifiedCode,address:address,landlinePhone:landlinePhone,legalName:legalName,legalId:legalId,legalPhone:legalPhone,createdAt:createdAt};
        Books.insert(json_data,function(err){
            if(!err){
                tpl.$("#bookmark_corpName").val('');
                tpl.$("#bookmark_unifiedCode").val();
                tpl.$("#bookmark_capital").val('');
                tpl.$("#bookmark_address").val('');
                tpl.$("#bookmark_landlinePhone").val();
                tpl.$("#bookmark_legalName").val();
                tpl.$("#bookmark_legalId").val();
                tpl.$("#bookmark_legalPhone").val();
                tpl.$("#bookmark_createdAt").val('');
                Router.go('/');

            }

        });

    }


});