import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';
import '../lib/userAcct.js';

Meteor.startup(() => {
 
});

Meteor.publish('profData', function(){
  return profilesdb.find({}, {
 

  });
});
Meteor.publish('proDat', function(data){
  return profilesdb.find({_id:data}, {
  

  });
});

Meteor.publish('noUser', function(){
  return profilesdb.find({}, {
    fields: {pPic:1, pFirst:1, pLast:1, pAge:1}

  });
});
