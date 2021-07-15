import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');


FlowRouter.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('app_layout', {header: 'signInForm'});

    }
});

FlowRouter.route('/profile', {
    action() {
        BlazeLayout.render('app_layout', {header: 'signInForm', mainBody:'myAccounts'});
    }
});

FlowRouter.route('*', {
    action() {
        BlazeLayout.render('app_layout', {mainBody:'notFound'});
    }
});
