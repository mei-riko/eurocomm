import $ from 'jquery';

$(document).ready(() =>{
    // MapBox
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2Vic29obyIsImEiOiJja2d0YnJleGMwOWs4MnJvNjZmeHQ0ZHd5In0.O3SaifC5NcA4dP8eWN1O1w';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [12, 30],
        zoom: 1
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    // Points
    var geojsonOrigin = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [25.286389,42.725351]
          },
          properties: {
            title: 'Bulgaria',
            description: 'Origins'
          }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [24.744553,46.192021]
            },
            properties: {
              title: 'Romania',
              description: 'Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [25.8441,56.896888]
            },
            properties: {
              title: 'Latvia',
              description: 'Baltic Sea countries | Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [25.660789,58.564388]
            },
            properties: {
              title: 'Estonia',
              description: 'Baltic Sea countries | Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [23.600189,55.508473]
            },
            properties: {
              title: 'Lithuania',
              description: 'Baltic Sea countries | Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [99.505405,61.698653]
            },
            properties: {
              title: 'Russia',
              description: 'Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [31.482771,49.02753]
            },
            properties: {
              title: 'Ukraine',
              description: 'Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-99.115868,36.952915]
            },
            properties: {
              title: 'North America',
              description: 'Origins'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-53.373061,-8.626851]
            },
            properties: {
              title: 'South America',
              description: 'Origins'
            }
        }]
    };
    var geojsonDest = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-7.309735,30.863677]
          },
          properties: {
            title: 'Morocco',
            description: 'Destinations'
          }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [9.602442,34.773985]
            },
            properties: {
              title: 'Tunis',
              description: 'Destinations'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [17.468477,27.747254]
            },
            properties: {
              title: 'Libya',
              description: 'Destinations'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [29.90523,26.112189]
            },
            properties: {
              title: 'Egypt',
              description: 'Destinations'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [56.30792,20.114063]
            },
            properties: {
              title: 'Oman',
              description: 'Destinations'
            }
        },
        {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [45.725533,22.848295]
            },
            properties: {
              title: 'Saudi Arabia',
              description: 'Destinations'
            }
        }]
    };
    // Add markers to map
    geojsonOrigin.features.forEach(function(markerOrig) {
        // create a HTML element for each feature
        var elOrig = document.createElement('div');
        elOrig.className = 'map-marker-1';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(elOrig)
            .setLngLat(markerOrig.geometry.coordinates)
            .addTo(map);
        // popup
        new mapboxgl.Marker(elOrig)
            .setLngLat(markerOrig.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML('<p>' + markerOrig.properties.title + '</p><p class="text-small mb-0">' + markerOrig.properties.description + '</p>'))
            .addTo(map);
    });
    geojsonDest.features.forEach(function(markerDest) {
        // create a HTML element for each feature
        var elDest = document.createElement('div');
        elDest.className = 'map-marker-2';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(elDest)
            .setLngLat(markerDest.geometry.coordinates)
            .addTo(map);
        // popup
        new mapboxgl.Marker(elDest)
            .setLngLat(markerDest.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML('<p>' + markerDest.properties.title + '</p><p class="text-small mb-0">' + markerDest.properties.description + '</p>'))
            .addTo(map);
    });
});