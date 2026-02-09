/**
 * SERVICE WORKER - Apprendre le Vietnamien PWA
 * Gère le cache et le mode hors-ligne
 */

const CACHE_NAME = 'viet-app-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/assets/turtle.jpg',
  // Fonts et librairies externes
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;700&display=swap'
];

/**
 * INSTALLATION - Mise en cache des fichiers essentiels
 */
self.addEventListener('install', (event) => {
  console.log('🚀 Service Worker: Installation...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Tous les fichiers mis en cache');
        return self.skipWaiting(); // Active immédiatement le nouveau SW
      })
      .catch((error) => {
        console.error('❌ Erreur lors de la mise en cache:', error);
      })
  );
});

/**
 * ACTIVATION - Nettoyage des anciens caches
 */
self.addEventListener('activate', (event) => {
  console.log('🔄 Service Worker: Activation...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activé');
      return self.clients.claim(); // Prend contrôle immédiatement
    })
  );
});

/**
 * FETCH - Stratégie Cache First avec fallback réseau
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retourne la réponse en cache
        if (response) {
          console.log('📦 Depuis le cache:', event.request.url);
          return response;
        }

        // Pas en cache - va chercher sur le réseau
        console.log('🌐 Depuis le réseau:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Vérifie si la réponse est valide
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone la réponse car elle ne peut être consommée qu'une fois
            const responseToCache = response.clone();

            // Met en cache les nouvelles ressources
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('❌ Erreur réseau:', error);
            
            // Retourne une page offline basique si disponible
            return caches.match('/index.html');
          });
      })
  );
});

/**
 * SYNC - Synchronisation en arrière-plan (optionnel)
 */
self.addEventListener('sync', (event) => {
  console.log('🔄 Background Sync:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Ici on pourrait synchroniser les données utilisateur
      // avec un serveur si on en avait un
      Promise.resolve()
    );
  }
});

/**
 * MESSAGE - Communication avec l'application
 */
self.addEventListener('message', (event) => {
  console.log('📨 Message reçu:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Commande pour vider le cache
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        console.log('🗑️ Cache vidé');
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

/**
 * NOTIFICATION PUSH (optionnel pour futures fonctionnalités)
 */
self.addEventListener('push', (event) => {
  console.log('🔔 Push notification reçue');
  
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle leçon disponible !',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'viet-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Apprendre le Vietnamien', options)
  );
});

/**
 * NOTIFICATION CLICK
 */
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Notification cliquée');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
