// Background/terminated-tab handler for web push — the browser loads this
// service worker itself (Firebase's web SDK looks for it at this exact path
// under the site root); it's what shows a system notification when the site
// isn't the focused tab. Config values below are the same public web values
// as lib/firebase_options.dart's `web` block — safe to expose, not secrets.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCc93wGlmZH2ewNw8H-BuGHFTMFO4jeLho',
  appId: '1:163607939024:web:e29c497e82abfd3665dbd5',
  messagingSenderId: '163607939024',
  projectId: 'moria-fund-79fb5',
  authDomain: 'moria-fund-79fb5.firebaseapp.com',
  storageBucket: 'moria-fund-79fb5.firebasestorage.app',
});

const messaging = firebase.messaging();

// The `notification` payload already renders itself via the browser's push
// API by default; this hook only matters if a `data`-only message needs
// custom handling later.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] background message', payload);
});
