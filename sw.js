// O app antigo instalado neste endereço se desliga e manda a tela aberta para o endereço novo.
// Os caches não são apagados: o endereço novo usa os mesmos nomes.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    await self.registration.unregister();
    const wins = await self.clients.matchAll({ type: 'window' });
    for (const w of wins) w.navigate(w.url.replace('/desapego-brasilia', '/desapega')).catch(() => {});
  })());
});
