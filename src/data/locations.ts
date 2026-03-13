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
import image20260312_090025626 from '../assets/locations/IMG_20260312_090025626.jpg'
import image20260312_113501214 from '../assets/locations/IMG_20260312_113501214.jpg'
import image20260313_105912933 from '../assets/locations/IMG_20260313_105912933.jpg'
import image20260313_111039650 from '../assets/locations/IMG_20260313_111039650.jpg'
import image20260303 from '../assets/locations/img_20260303_092304864.jpg'
import image20260311 from '../assets/locations/img_20260311_141506164.jpg'

export type LocationEntry = {
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

  if ((entry.actualLatitude === null) !== (entry.actualLongitude === null)) {
    throw new Error(
      `Invalid actual coordinates for "${entry.id}". actualLatitude and actualLongitude must both be provided or both be null.`,
    )
  }

  if (entry.latitude !== null && entry.longitude !== null) {
    assertCoordinateRange('latitude', entry.latitude, -90, 90, entry.id)
    assertCoordinateRange('longitude', entry.longitude, -180, 180, entry.id)
  }

  if (entry.actualLatitude !== null && entry.actualLongitude !== null) {
    assertCoordinateRange('latitude', entry.actualLatitude, -90, 90, entry.id)
    assertCoordinateRange('longitude', entry.actualLongitude, -180, 180, entry.id)
  }

  return entry
}

export const locations: LocationEntry[] = [
  defineLocation({
    id: '2026-03-10-143918-img-20260310-143918094',
    group: 'latest',
    title: '10 Mar 2026, 2:39 pm',
    filename: 'IMG_20260310_143918094.jpg',
    image: image20260310_143918094,
    alt: 'Location reference photo captured on 10 March 2026',
    latitude: 35.6383953369645,
    longitude: 139.7590020228351,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-10-185012-img-20260310-185012899',
    group: 'latest',
    title: '10 Mar 2026, 6:50 pm',
    filename: 'IMG_20260310_185012899.jpg',
    image: image20260310_185012899,
    alt: 'Location reference photo captured on 10 March 2026',
    latitude: 35.772669543003694,
    longitude: 140.38675259616105,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-092734-img-20260311-092734000',
    group: 'latest',
    title: '11 Mar 2026, 9:27 am',
    filename: 'IMG_20260311_092734000.jpg',
    image: image20260311_092734000,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.04125747432038,
    longitude: 138.3727454420994,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-142738-img-20260311-142738676',
    group: 'latest',
    title: '11 Mar 2026, 2:27 pm',
    filename: 'IMG_20260311_142738676.jpg',
    image: image20260311_142738676,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 34.69448814054522,
    longitude: 135.5023475534112,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-145538-img-20260311-145538432',
    group: 'latest',
    title: '11 Mar 2026, 2:55 pm',
    filename: 'IMG_20260311_145538432.jpg',
    image: image20260311_145538432,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 34.69448814054522,
    longitude: 135.5023475534112,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-12-090025-img-20260312-090025626',
    group: 'latest',
    title: '12 Mar 2026, 9:00 am',
    filename: 'IMG_20260312_090025626.jpg',
    image: image20260312_090025626,
    alt: 'Location reference photo captured on 12 March 2026',
    latitude: 32.74168514169738,
    longitude: 129.872318966023,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-12-113501-img-20260312-113501214',
    group: 'latest',
    title: '12 Mar 2026, 11:35 am',
    filename: 'IMG_20260312_113501214.jpg',
    image: image20260312_113501214,
    alt: 'Location reference photo captured on 12 March 2026',
    latitude: 32.7768648830334, 
    longitude: 129.86393415894932,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-13-105912-img-20260313-105912933',
    group: 'latest',
    title: '13 Mar 2026, 10:59 am',
    filename: 'IMG_20260313_105912933.jpg',
    image: image20260313_105912933,
    alt: 'Location reference photo captured on 13 March 2026',
    latitude: 32.77343859550882,
    longitude: 129.86330300142296,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-13-111039-img-20260313-111039650',
    group: 'latest',
    title: '13 Mar 2026, 11:10 am',
    filename: 'IMG_20260313_111039650.jpg',
    image: image20260313_111039650,
    alt: 'Location reference photo captured on 13 March 2026',
    latitude: 32.809304867689235,
    longitude: 129.86828919669216,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162203-1000017978',
    group: 'archive',
    title: '11 Mar 2026, 4:22 pm',
    filename: '1000017978.jpg',
    image: image1000017978,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.714528,
    longitude: 139.773417,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162207-img-20260303-092304864',
    group: 'archive',
    title: '11 Mar 2026, 4:22 pm',
    filename: 'img_20260303_092304864.jpg',
    image: image20260303,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.62725,
    longitude: 139.77425,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162158-1000018088',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    filename: '1000018088.jpg',
    image: image1000018088,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.580972,
    longitude: 138.44875,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162154-1000018236',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    filename: '1000018236.jpg',
    image: image1000018236,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.714194,
    longitude: 139.803389,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162149-1000018283',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    filename: '1000018283.jpg',
    image: image1000018283,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.710038,
    longitude: 139.810713,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162144-img-20260311-141506164',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    filename: 'img_20260311_141506164.jpg',
    image: image20260311,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.061944,
    longitude: 138.885667,
    actualLatitude: null,
    actualLongitude: null,
  }),
  defineLocation({
    id: '2026-03-11-162138-1000018304',
    group: 'archive',
    title: '11 Mar 2026, 4:21 pm',
    filename: '1000018304.jpg',
    image: image1000018304,
    alt: 'Location reference photo captured on 11 March 2026',
    latitude: 35.239056,
    longitude: 139.129333,
    actualLatitude: null,
    actualLongitude: null,
  }),
]
