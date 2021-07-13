AccountsTemplates.configure({
    showForgotPasswordLink: true,
});

//AccountsTemplates.addField({
   // _id: 'name',
    //type: 'text',
   // displayName: "Name",
    //required: true,
    //func: function(value){return value !== 'Full Name';},
    //errStr: 'Only "Full Name" allowed!',

//});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
       required: true,
      miniLenght: 5,
    },
    {
        _id: 'email',
        type: 'email',
        displayName: "email",
        required: true,
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
   //{
       // _id: "sex",
        //type: "Select",
        //displayName: "Sex",
       //select: [
            //{
                //text: "Male",
               //value: "male",
            //},
            //{
                //text: "Female",
                //value: "female",
            //},
        //],
    //},
    pwd
]);