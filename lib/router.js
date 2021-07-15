import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');


FlowRouter.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});

    }
});

FlowRouter.route('/profiles', {
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'myAccounts'});
    },

    waitOn(params) {
        return Meteor.subscribe('profData', params.pid);
    }
});

FlowRouter.route('/profile/:pid', {
    action(params) {
        let theProfile = profilesdb.find();
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'viewProfile'});
    },
    waitOn(params) {
        return Meteor.subscribe('proDat', params.pid);
    }
});


FlowRouter.route('*', {
    action() {
        BlazeLayout.render('app_layout', {mainBody:'notFound'});
    }
});
