# Location Guesser Showcase

Static Vue 3 + Vite site for presenting guessed locations from images. Each entry shows a local image beside a Google Maps embed driven by saved coordinates.

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

Example:

```ts
import myImage from '../assets/locations/my-image.jpg'

{
  id: 'my-location',
  title: 'My Location Guess',
  image: myImage,
  alt: 'Short accessible description of the image',
  latitude: 35.6895,
  longitude: 139.6917,
}
```

## Content model

Each item uses this shape:

```ts
type LocationEntry = {
  id: string
  title: string
  image: string
  alt: string
  latitude: number
  longitude: number
}
```

The data module validates latitude and longitude values during development and build time so obviously invalid coordinates fail early.
