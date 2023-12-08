import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import('./app/app.module').then((e) =>
  platformBrowserDynamic()
    .bootstrapModule(e.AppModule)
    .catch((err) => console.error(err))
);
