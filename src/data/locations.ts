import image1000017978 from '../assets/locations/1000017978.jpg'
import image1000018088 from '../assets/locations/1000018088.jpg'
import image1000018236 from '../assets/locations/1000018236.jpg'
import image1000018283 from '../assets/locations/1000018283.jpg'
import image1000018304 from '../assets/locations/1000018304.jpg'
import image20260310_143918094 from '../assets/locations/IMG_20260310_143918094.jpg'
import image20260310_185012899 from '../assets/locations/IMG_20260310_185012899.jpg'
import image20260311_092734000 from '../assets/locations/IMG_20260311_092734000.jpg'
import image20260311_142738676 from '../assets/locations/IMG_20260311_142738676.jpg'
import image20260311_145538432 from '../assets/locations/IMG_20260311_145538432.jpg'
import image20260303 from '../assets/locations/img_20260303_092304864.jpg'
import image20260311 from '../assets/locations/img_20260311_141506164.jpg'

export type LocationEntry = {
  id: string
  group: 'latest' | 'archive'
  title: string
  image: string
  alt: string
  latitude: number | null
  longitude: number | null
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
  if ((entry.latitude === null) !== (entry.longitude === null)) {
    throw new Error(
      `Invalid coordinates for "${entry.id}". Latitude and longitude must both be provided or both be null.`,
    )
  }

  if (entry.latitude !== null && entry.longitude !== null) {
    assertCoordinateRange('latitude', entry.latitude, -90, 90, entry.id)
    assertCoordinateRange('longitude', entry.longitude, -180, 180, entry.id)
  }

  return entry
}

export const locations: LocationEntry[] = [
  defineLocation({
    id: '2026-03-10-143918-img-20260310-143918094',
    group: 'latest',
    title: '10 Mar 2026, 2:39 pm',
    image: image20260310_143918094,
    alt: 'Location reference photo captured on 10 March 2026',
    latitude: 35.6383953369645,
    longitude: 139.7590020228351,
  }),
  defineLocation({
    id: '2026-03-10-185012-img-20260310-185012899',
    group: 'latest',
    title: '10 Mar 2026, 6:50 pm',
    image: image20260310_185012899,
    alt: 'Location reference photo captured on 10 March 2026',
    latitude: 35.772669543003694,
    longitude: 140.38675259616105,
  }),
  defineLocation({
    id: '2026-03-11-092734-img-20260311-092734000',
    group: 'latest',
    title: '11 Mar 2026, 9:27 am',
    image: image20260311_092734000,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.04125747432038,
    longitude: 138.3727454420994,
  }),
  defineLocation({
    id: '2026-03-11-142738-img-20260311-142738676',
    group: 'latest',
    title: '11 Mar 2026, 2:27 pm',
    image: image20260311_142738676,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 34.69448814054522,
    longitude: 135.5023475534112,
  }),
  defineLocation({
    id: '2026-03-11-145538-img-20260311-145538432',
    group: 'latest',
    title: '11 Mar 2026, 2:55 pm',
    image: image20260311_145538432,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 34.69448814054522,
    longitude: 135.5023475534112,
  }),
  defineLocation({
    id: '2026-03-11-162203-1000017978',
    group: 'archive',
    title: '11 Mar 2026, 4:22 pm',
    image: image1000017978,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.714528,
    longitude: 139.773417,
  }),
  defineLocation({
    id: '2026-03-11-162207-img-20260303-092304864',
    group: 'archive',
    title: '11 Mar 2026, 4:22 pm',
    image: image20260303,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.62725,
    longitude: 139.77425,
  }),
  defineLocation({
    id: '2026-03-11-162158-1000018088',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    image: image1000018088,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.580972,
    longitude: 138.44875,
  }),
  defineLocation({
    id: '2026-03-11-162154-1000018236',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    image: image1000018236,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.714194,
    longitude: 139.803389,
  }),
  defineLocation({
    id: '2026-03-11-162149-1000018283',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    image: image1000018283,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.710038,
    longitude: 139.810713,
  }),
  defineLocation({
    id: '2026-03-11-162144-img-20260311-141506164',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    image: image20260311,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.061944,
    longitude: 138.885667,
  }),
  defineLocation({
    id: '2026-03-11-162138-1000018304',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    image: image1000018304,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.239056,
    longitude: 139.129333,
  }),
]
