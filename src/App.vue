<script setup lang="ts">
import { locations } from './data/locations'

const mapZoom = 12

function createGoogleMapsEmbedUrl(latitude: number, longitude: number) {
  const query = encodeURIComponent(`${latitude},${longitude}`)
  return `https://www.google.com/maps?q=${query}&z=${mapZoom}&output=embed`
}

const displayLocations = locations.map((location) => {
  if (location.latitude === null || location.longitude === null) {
    return {
      ...location,
      coordinatesLabel: 'Add guessed coordinates in the data file.',
      mapUrl: null,
    }
  }

  return {
    ...location,
    coordinatesLabel: `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`,
    mapUrl: createGoogleMapsEmbedUrl(location.latitude, location.longitude),
  }
})

const latestLocations = displayLocations.filter((location) => location.group === 'latest')
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
            <p class="map-label">Location Guess</p>
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
                <p class="map-label">Location Guess</p>
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
    </main>
  </div>
</template>
