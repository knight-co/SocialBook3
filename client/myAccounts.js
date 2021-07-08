Template.myAccounts.helpers({
    theProfiles(){
        return profilesdb.find();
    }
});
Template.myAccounts.events({
    'click .js-delete'(event){
        let myId = this._id;
        let myDoc = event.target.parentnode.parentnode.parentnode;
        $(myDoc).fadeOut( "slow", function(){
            //delete document
            profilesdb.remove({_id: myId});
        });
        console.log("delete", myId);
    }
});