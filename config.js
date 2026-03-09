// ===================================================
// KETA Firebase Configuration
// Replace with your actual Firebase project config
// ===================================================

// IMPORTANT: Replace the values below with your Firebase project config.
// Get this from: Firebase Console > Project Settings > Your Apps > Web App
const firebaseConfig = {
  apiKey: "AIzaSyA924j6QmOTRCj2wPYoSNYCPlJoLPR7qZo",
  authDomain: "keystonetaekwondo-848fa.firebaseapp.com",
  projectId: "keystonetaekwondo-848fa",
  storageBucket: "keystonetaekwondo-848fa.firebasestorage.app",
  messagingSenderId: "142208032641",
  appId: "1:142208032641:web:5ef74ffe83352a5b4c9280",
  measurementId: "G-MZ0098D7PV"
};

// Cloudinary Configuration
// Replace with your Cloudinary credentials
const CLOUDINARY_CONFIG = {
  cloudName:    "dkwjkkypn",
  uploadPreset: "kmdpsk9y",   // Create unsigned upload preset in Cloudinary Dashboard
  folder:       ""
};

// Formspree endpoint
// Replace with your Formspree form endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqpqvgn";

// Admin credentials (stored in Firestore "config" collection for security)
// Do NOT hardcode passwords here — authentication handled by Firebase Auth

export { FIREBASE_CONFIG, CLOUDINARY_CONFIG, FORMSPREE_ENDPOINT };
