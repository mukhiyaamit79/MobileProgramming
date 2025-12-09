import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update, remove } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBI4D_zH38xWsB9UbuGCAkn7Kjj_x67p3E",
  authDomain: "week-6-24953.firebaseapp.com",
  databaseURL: "https://week-6-24953-default-rtdb.firebaseio.com/",
  projectId: "week-6-24953",
  storageBucket: "week-6-24953.firebasestorage.app",
  messagingSenderId: "882536189812",
  appId: "1:882536189812:web:36e1bb716d232d1bd22621"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const usersRef = ref(db, "users");

let editUserId = null;

window.addUser = function() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    alert("Please enter both fields.");
    return;
  }

  const newUserRef = push(usersRef);
  set(newUserRef, { username, email });

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
};

// Load users
function fetchUsers() {
  const userList = document.getElementById("userList");

  onValue(usersRef, (snapshot) => {
    userList.innerHTML = "";

    snapshot.forEach((child) => {
      const id = child.key;
      const user = child.val();

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
          <button class="action-btn" onclick="editUser('${id}', '${user.username}', '${user.email}')">Edit</button>
          <button class="action-btn" onclick="deleteUser('${id}')">Delete</button>
        </td>
      `;
      userList.appendChild(row);
    });
  });
}

// Edit with confirmation
window.editUser = function(id, username, email) {
  const confirmEdit = confirm("Do you want to edit this user's information?");
  if (!confirmEdit) return;

  editUserId = id;
  document.getElementById("username").value = username;
  document.getElementById("email").value = email;

  document.getElementById("addBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline-block";
};

// Update
window.updateUser = function() {
  if (!editUserId) return;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    alert("Please enter both fields.");
    return;
  }

  const userRef = ref(db, "users/" + editUserId);
  update(userRef, { username, email });

  alert("User updated successfully!");

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";

  document.getElementById("addBtn").style.display = "inline-block";
  document.getElementById("updateBtn").style.display = "none";

  editUserId = null;
};

// Delete with confirmation
window.deleteUser = function(id) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  const userRef = ref(db, "users/" + id);
  remove(userRef);
};

window.onload = fetchUsers;
