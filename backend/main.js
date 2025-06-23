import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot
} from "firebase/firestore";

// Auth events
document.getElementById("signup").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User signed up!");
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("login").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("User logged in!");
  } catch (error) {
    alert(error.message);
  }
});

// Firestore: Add Todo
document.getElementById("addTodo").addEventListener("click", async () => {
  const todoText = document.getElementById("todoInput").value;
  try {
    await addDoc(collection(db, "todos"), { text: todoText });
    document.getElementById("todoInput").value = "";
  } catch (error) {
    alert("Error adding todo: " + error.message);
  }
});

// Firestore: Listen to todos
onSnapshot(collection(db, "todos"), (snapshot) => {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().text;
    todoList.appendChild(li);
  });
});
