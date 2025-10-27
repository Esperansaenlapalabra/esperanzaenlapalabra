import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

document.getElementById('pushSubscribe').addEventListener('click', async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'TU_VAPID_KEY' });
      if (token) {
        // Enviar token al servidor (puedes usar Formspree o tu backend)
        await fetch('https://formspree.io/f/tu-form-id', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, type: 'push_subscription' })
        });
        alert('¡Notificaciones activadas! Recibirás mensajes diarios de esperanza.');
      }
    } else {
      alert('Permiso de notificaciones denegado.');
    }
  } catch (err) {
    console.error('Error al suscribir notificaciones:', err);
    alert('Error al activar notificaciones. Intenta de nuevo.');
  }
});

onMessage(messaging, payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'images/favicon.ico'
  };
  navigator.serviceWorker.ready.then(registration => {
    registration.showNotification(notificationTitle, notificationOptions);
  });
});