Template.ListContact.helpers({
  /**
   * @returns {*} All of the Contact documents.
   */
  contactList: function () {
    return Contact.find({}, {sort: {submitted: -1}});
  }
});

Template.ListContact.events({
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteContact", currentContactID);
      Router.go('postsList');
    }
  }
})