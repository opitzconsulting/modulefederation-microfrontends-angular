# Über

Dieses Repo beinhaltet einen PoC für Microfrontends mit **Angular**.
Es verwendet **Webpack** als Build-Tool.

Das Projekt beinhaltet zwei Angular-Frontends:

## packages/angular-host

Das ist die "Haupt"-Anwendung (Analog zu `packages/main` aus dem React-PoC). In sie wird die `packages/angular-remote` eingebunden.
Der Import geschieht über ein Lazy-Module, welches über einen `loadChildren`-Eintrag die Routen des Untermoduls einbindet.

## packages/angular-remote

Das ist das Microfrontend. Es wird in die Haupt-Anwendung eingebunden.
**Wichtig dabei:** Es müssen CORS-Header gesetzt sein. Sonst blockiert der Browser den Aufruf des Moduls auf einem anderen Server / Port.

# Installation

In der Wurzel `npm i` ausführen.

# Build

`npm run build` um host und remote zu bauen.
Alternativ können die jeweiligen Module über `npm run build:host` und `npm run build:remote` gebaut werden.

# Serve

Im Wurzelprojekt `npm run serve`. Es werden dadurch Haupt (`:3000`)- und Micro-Frontend (`:3001`) gestartet.

# Aufrufen

Das Haupt-Repo kann unter http://localhost:3000 aufgerufen werden.
Wird der Netzwerktab aufgemacht sollte erkennbar sein, dass Anfragen an
http://localhost:3001 geschickt werden.
