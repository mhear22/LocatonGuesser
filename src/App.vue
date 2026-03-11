<script setup lang="ts">
import { locations } from './data/locations'

const mapZoom = 12

function createGoogleMapsEmbedUrl(latitude: number, longitude: number) {
  const query = encodeURIComponent(`${latitude},${longitude}`)
  return `https://www.google.com/maps?q=${query}&z=${mapZoom}&output=embed`
}
</script>

<template>
  <div class="page-shell">
    <header class="hero">
      <p class="eyebrow">Static Vue Showcase</p>
      <h1>Guessed locations, matched to the map.</h1>
      <p class="hero-copy">
        This page pairs each supplied image with the coordinates you assign in a
        single typed data file. Add new assets, update the coordinates, and
        redeploy as a fully static Vercel site.
      </p>
    </header>

    <main class="locations" aria-label="Guessed locations">
      <article
        v-for="location in locations"
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
            <p class="coordinates">
              {{ location.latitude.toFixed(4) }},
              {{ location.longitude.toFixed(4) }}
            </p>
          </div>

          <iframe
            class="map-frame"
            :title="`Google Maps view for ${location.title}`"
            :src="createGoogleMapsEmbedUrl(location.latitude, location.longitude)"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </article>
    </main>
  </div>
</template>
