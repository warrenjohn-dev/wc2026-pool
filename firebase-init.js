// firebase-init.js — initializes Firebase for the WC2026 pool.
// Safe to be public: Firebase web config is meant to be visible; security is enforced by Firestore rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABFg7lkJGuXr_I_Us0-MNT3IcxMfC6MlA",
  authDomain: "wc2026-pool-13109.firebaseapp.com",
  projectId: "wc2026-pool-13109",
  storageBucket: "wc2026-pool-13109.firebasestorage.app",
  messagingSenderId: "549205367212",
  appId: "1:549205367212:web:583d1a8d3b848ea2998209"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Usernames are turned into emails behind the scenes so people only ever type a username.
export const USERNAME_DOMAIN = "@wcpool.local";
export function usernameToEmail(username){
  return username.trim().toLowerCase() + USERNAME_DOMAIN;
}
