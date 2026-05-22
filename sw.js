importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ➔ 【設定】あなたのFirebaseのConfig情報に書き換えてください
const firebaseConfig = {
  apiKey: "AIzaSyBVSs_5XPGfPbwQY0XmLit1dOeD8ELSB28",
  authDomain: "xnoti-f59fc.firebaseapp.com",
  projectId: "xnoti-f59fc",
  storageBucket: "xnoti-f59fc.firebasestorage.app",
  messagingSenderId: "868959057587",
  appId: "1:868959057587:web:9915e5de04ffa6a04a22c6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
