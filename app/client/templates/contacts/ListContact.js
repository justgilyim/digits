Template.ListContact.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  contactList: function () {
    return Contact.find();
  }
});

Template.ListContact.events ({

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentContactId = this._id;
      Meteor.call('deleteContact', currentContactId);
      Router.go('ListContact');
    }
  }
})