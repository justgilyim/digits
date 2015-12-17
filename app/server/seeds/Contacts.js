/**
 * A list of Contact to pre-fill the Collection.
 * @type {*[]}
 */
var contactSeeds = [
  {first: "Philip", last: "Johnson", address: "1680 East-West Rd", phone: "808-9563489", email: "johnson@hawaii.edu"},
  {first: "Henri", last: "Casanova", address: "1680 East-West Rd", phone: "808-9563489", email: "henric@hawaii.edu"},
  {first: "Kim", last: "Binsted", address: "1680 East-West Rd", phone: "808-9563489", email: "binsted@hawaii.edu"}
];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds,  function(contact) {
    Contact.insert(contact);
  });
}
