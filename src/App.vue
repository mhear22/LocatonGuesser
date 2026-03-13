<script setup lang="ts">
import { locations } from './data/locations'

const mapZoom = 12

function formatCoordinatePair(latitude: number | null, longitude: number | null) {
  if (latitude === null || longitude === null) {
    return ''
  }

  return `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
}

function createGoogleMapsEmbedUrl(latitude: number, longitude: number) {
  const query = encodeURIComponent(`${latitude},${longitude}`)
  return `https://www.google.com/maps?q=${query}&z=${mapZoom}&output=embed`
}

function escapeCsvValue(value: string) {
  return `"${value.replace(/"/g, '""')}"`
}

function downloadCsv() {
  const header = ['Filename', 'Index Number', 'Geo Location', 'Actual Geo Location']
  const rows = locations.map((location, index) => [
    location.filename,
    String(index + 1),
    formatCoordinatePair(location.latitude, location.longitude),
    formatCoordinatePair(location.actualLatitude, location.actualLongitude),
  ])
  const csvContent = [header, ...rows]
    .map((row) => row.map(escapeCsvValue).join(','))
    .join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = objectUrl
  link.download = 'location-guesses.csv'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(objectUrl)
}

const displayLocations = locations.map((location, index) => {
  if (location.latitude === null || location.longitude === null) {
    return {
      ...location,
      referenceNumber: index + 1,
      coordinatesLabel: 'Add guessed coordinates in the data file.',
      mapUrl: null,
    }
  }

  return {
    ...location,
    referenceNumber: index + 1,
    coordinatesLabel: `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`,
    mapUrl: createGoogleMapsEmbedUrl(location.latitude, location.longitude),
  }
})

const latestLocations = displayLocations
  .filter((location) => location.group === 'latest')
  .sort((left, right) => right.referenceNumber - left.referenceNumber)
const archivedLocations = displayLocations.filter((location) => location.group === 'archive')
</script>

<template>
  <div class="page-shell">
    <header class="hero">
      <h1>Guessed locations, matched to the map.</h1>
    </header>

    <main class="locations" aria-label="Guessed locations">
      <article
        v-for="location in latestLocations"
        :key="location.id"
        class="location-card"
      >
        <div class="media-panel">
          <img
            class="location-image"
            :src="location.image"
            :alt="location.alt"
            loading="lazy"
          />
        </div>

        <div class="map-panel">
          <div class="map-header">
            <div class="map-label-row">
              <p class="map-label">Location Guess</p>
              <span class="location-number">#{{ location.referenceNumber }}</span>
            </div>
            <h2>{{ location.title }}</h2>
            <p
              class="coordinates"
              :class="{ 'pending-copy': !location.mapUrl }"
            >
              {{ location.coordinatesLabel }}
            </p>
          </div>

          <iframe
            v-if="location.mapUrl"
            class="map-frame"
            :title="`Google Maps view for ${location.title}`"
            :src="location.mapUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
          <div v-else class="map-empty-state">
            <p>Coordinates pending</p>
            <span>
              Set <code>latitude</code> and <code>longitude</code> for this
              image in <code>src/data/locations.ts</code>.
            </span>
          </div>
        </div>
      </article>

      <details class="archive-panel">
        <summary class="archive-summary">
          <span>Earlier Photos ({{ archivedLocations.length }})</span>
          <span class="archive-summary-copy">Open to view the older set</span>
        </summary>

        <div class="archive-list">
          <article
            v-for="location in archivedLocations"
            :key="location.id"
            class="location-card"
          >
            <div class="media-panel">
              <img
                class="location-image"
                :src="location.image"
                :alt="location.alt"
                loading="lazy"
              />
            </div>

            <div class="map-panel">
              <div class="map-header">
                <div class="map-label-row">
                  <p class="map-label">Location Guess</p>
                  <span class="location-number">#{{ location.referenceNumber }}</span>
                </div>
                <h2>{{ location.title }}</h2>
                <p
                  class="coordinates"
                  :class="{ 'pending-copy': !location.mapUrl }"
                >
                  {{ location.coordinatesLabel }}
                </p>
              </div>

              <iframe
                v-if="location.mapUrl"
                class="map-frame"
                :title="`Google Maps view for ${location.title}`"
                :src="location.mapUrl"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />
              <div v-else class="map-empty-state">
                <p>Coordinates pending</p>
                <span>
                  Set <code>latitude</code> and <code>longitude</code> for this
                  image in <code>src/data/locations.ts</code>.
                </span>
              </div>
            </div>
          </article>
        </div>
      </details>

      <div class="export-actions">
        <button
          class="export-button"
          type="button"
          @click="downloadCsv"
        >
          Download CSV
        </button>
      </div>
    </main>
  </div>
</template>
