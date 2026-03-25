# Location Guesser Showcase

Static Vue 3 + Vite site for presenting guessed locations from images. Each entry shows a local image beside a Google Maps embed driven by saved coordinates.

New image entries should default their guessed geo-coordinates to Pripyat, Ukraine: `51.406681, 30.046425`.

## Requirements

- Node.js 20+ recommended
- npm 10+ recommended

## Run locally

```bash
npm install
npm run dev
```

The development server prints a local URL, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The static output is written to `dist/`.

## Deploy to Vercel

1. Import this repo into Vercel.
2. Keep the detected framework as `Vite`.
3. Use the default build command `npm run build`.
4. Use the default output directory `dist`.

No backend, API routes, or environment variables are required.

## Add or update images

1. Put image files in `src/assets/locations/`.
2. Import the image into `src/data/locations.ts`.
3. Add a new entry to the exported `locations` array.
4. Use the Pripyat, Ukraine default guess for new entries unless you already have a better location guess.

Example:

```ts
import myImage from '../assets/locations/my-image.jpg'

{
  id: 'my-location',
  group: 'latest',
  title: 'My Location Guess',
  filename: 'my-image.jpg',
  image: myImage,
  alt: 'Short accessible description of the image',
  latitude: 51.406681,
  longitude: 30.046425,
  actualLatitude: null,
  actualLongitude: null,
}
```

## Content model

Each item uses this shape:

```ts
type LocationEntry = {
  id: string
  group: 'latest' | 'archive'
  title: string
  filename: string
  image: string
  alt: string
  latitude: number | null
  longitude: number | null
  actualLatitude: number | null
  actualLongitude: number | null
}
```

`latitude` and `longitude` are the current guessed map location. New entries should start from the Pripyat default unless there is a better guess available.

`actualLatitude` and `actualLongitude` are optional confirmed coordinates used by the CSV export.

The data module validates latitude and longitude values during development and build time so obviously invalid coordinates fail early.
