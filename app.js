function addContact() {
   
    var contactName = document.querySelector('#contactName').value;
    var contactNumber = document.querySelector('#contactNumber').value;

  
    if (contactName.trim() === '' || contactNumber.trim() === '') {
        alert('Please enter contact name and number.');
        return;
    }


    var newContact = {
        name: contactName,
        number: contactNumber
    };

    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  
    contacts.push(newContact);

    localStorage.setItem('contacts', JSON.stringify(contacts));

  
    document.querySelector('#contactName').value = '';
    document.querySelector('#contactNumber').value = '';


    $('#addNew').modal('hide');

    displayContacts();
}


function removeContact(index) {
   
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

   
    contacts.splice(index, 1);

    
    localStorage.setItem('contacts', JSON.stringify(contacts));

    
    displayContacts();
}


function displayContacts() {

    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

 
    var contactList = document.getElementById('listOfContacts');


    contactList.innerHTML = '';

  
    contacts.forEach(function(contact, index) {
        var listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'row');
        listItem.innerHTML = `
            <span>${contact.name}</span>
            <span>${contact.number}</span>
            <button type="button" class="btn btn-sm btn-danger col-1 ml-5" onclick="removeContact(${index})">X</button>
        `;
        contactList.appendChild(listItem);
    });
}

displayContacts();