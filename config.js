// ===================================================
// KETA Firebase Configuration
// Replace with your actual Firebase project config
// ===================================================

// IMPORTANT: Replace the values below with your Firebase project config.
// Get this from: Firebase Console > Project Settings > Your Apps > Web App
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Cloudinary Configuration
// Replace with your Cloudinary credentials
const CLOUDINARY_CONFIG = {
  cloudName:    "YOUR_CLOUD_NAME",
  uploadPreset: "keta_unsigned",   // Create unsigned upload preset in Cloudinary Dashboard
  folder:       "keta"
};

// Formspree endpoint
// Replace with your Formspree form endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// Admin credentials (stored in Firestore "config" collection for security)
// Do NOT hardcode passwords here — authentication handled by Firebase Auth

export { FIREBASE_CONFIG, CLOUDINARY_CONFIG, FORMSPREE_ENDPOINT };
