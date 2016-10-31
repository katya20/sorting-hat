var firebaseConfig = {
  apiKey: "AIzaSyD-U1vfBg6sjZdxjgzgNzB97dfFvNrcX38",
  authDomain: "project-1-48f93.firebaseapp.com",
  databaseURL: "https://project-1-48f93.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref()

function storeValue(name, value) {	
  store.child(name).set(value)
}

function addListItem(name, value) {		
  store.child(name).push(value)
}

function onNewListItem(name, callback) {		
  store.child(name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child(name).remove()
}

function onNewValue(name, callback) {	
  store.child(name).child(name).on("value", function(data) {		
    callback(data.val());
  })
}