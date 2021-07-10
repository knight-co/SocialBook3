Session.set("filter", "All");
Template.profFilter.events({
    'click .js-males'(events){
        Session.set("filter", "male");

    },
    'click .js-females'(event){
        Session.set("filter", "female");

    },
    'click .js-showAll'(event){
        Session.set("filter", "All");
    }

});