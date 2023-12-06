(async () => {
  try {
    await import('./bootstrap');
  } catch (err) {
    console.error(err);
  }
})();
