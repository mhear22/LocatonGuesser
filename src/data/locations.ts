import alpineVillage from '../assets/locations/alpine-village.svg'
import desertHighway from '../assets/locations/desert-highway.svg'
import harbourCity from '../assets/locations/harbour-city.svg'

export type LocationEntry = {
  id: string
  title: string
  image: string
  alt: string
  latitude: number
  longitude: number
}

function assertCoordinateRange(
  label: 'latitude' | 'longitude',
  value: number,
  min: number,
  max: number,
  id: string,
) {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new Error(
      `Invalid ${label} for "${id}". Expected a number between ${min} and ${max}, received ${value}.`,
    )
  }
}

function defineLocation(entry: LocationEntry): LocationEntry {
  assertCoordinateRange('latitude', entry.latitude, -90, 90, entry.id)
  assertCoordinateRange('longitude', entry.longitude, -180, 180, entry.id)
  return entry
}

export const locations: LocationEntry[] = [
  defineLocation({
    id: 'harbour-view',
    title: 'Sydney Harbour Guess',
    image: harbourCity,
    alt: 'Illustrated harbour skyline with a bridge, ferry, and waterside buildings',
    latitude: -33.8568,
    longitude: 151.2153,
  }),
  defineLocation({
    id: 'alpine-village',
    title: 'Swiss Village Guess',
    image: alpineVillage,
    alt: 'Illustrated mountain village with chalets beneath snow peaks',
    latitude: 46.6863,
    longitude: 7.8632,
  }),
  defineLocation({
    id: 'desert-highway',
    title: 'Arizona Desert Guess',
    image: desertHighway,
    alt: 'Illustrated desert road with cactus plants and layered mesas',
    latitude: 36.0544,
    longitude: -112.1401,
  }),
]
