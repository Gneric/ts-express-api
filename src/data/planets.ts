import { Planet } from '../model/planet'

export let planets : Planet[] = [
    {
        "id": 1,
        "name": "Mercury",
        "mass": 0.330,
        "diameter": 4879,
        "density": 5429,
        "gravity": 3.7,
        "escapeVelocity": 4.3,
        "rotationPeriod": 1407.6,
        "lengthOfDay": 4222.6,
        "distanceFromSun": 57.9,
        "perihelion": 46.0,
        "aphelion": 69.8,
        "orbitalPeriod": 88.0,
        "orbitalVelocity": 47.4,
        "orbitalInclination": 7,
        "orbitalEccentricity": 0.206,
        "obliquityToOrbit": 0.034,
        "meanTemperature": 167,
        "surfacePressure": 0,
        "numberOfMoons": 0,
        "hasRings": false,
        "hasGlobalMagneticField": true
    },
    {
        "id": 2,
        "name": "Venus",
        "mass": 4.87,
        "diameter": 12104,
        "density": 5243,
        "gravity": 8.9,
        "escapeVelocity": 10.4,
        "rotationPeriod": -5832.5,
        "lengthOfDay": 2802.0,
        "distanceFromSun": 108.2,
        "perihelion": 107.5,
        "aphelion": 108.9,
        "orbitalPeriod": 224.7,
        "orbitalVelocity": 35.0,
        "orbitalInclination": 3.4,
        "orbitalEccentricity": 0.007,
        "obliquityToOrbit": 177.4,
        "meanTemperature": 464,
        "surfacePressure": 92,
        "numberOfMoons": 0,
        "hasRings": false,
        "hasGlobalMagneticField": false
    },
    {
        "id": 3,
        "name": "Earth",
        "mass": 5.97,
        "diameter": 12756,
        "density": 5514,
        "gravity": 9.8,
        "escapeVelocity": 11.2,
        "rotationPeriod": 23.9,
        "lengthOfDay": 24.0,
        "distanceFromSun": 149.6,
        "perihelion": 147.1,
        "aphelion": 152.1,
        "orbitalPeriod": 365.2,
        "orbitalVelocity": 29.8,
        "orbitalInclination": 0.0,
        "orbitalEccentricity": 0.017,
        "obliquityToOrbit": 23.4,
        "meanTemperature": 15,
        "surfacePressure": 1,
        "numberOfMoons": 1,
        "hasRings": false,
        "hasGlobalMagneticField": true
    },
    {
        "id": 4,
        "name": "Mars",
        "mass": 0.642,
        "diameter": 6792,
        "density": 3933,
        "gravity": 3.7,
        "escapeVelocity": 5.0,
        "rotationPeriod": 24.6,
        "lengthOfDay": 24.7,
        "distanceFromSun": 228.0,
        "perihelion": 206.7,
        "aphelion": 249.3,
        "orbitalPeriod": 687.0,
        "orbitalVelocity": 24.1,
        "orbitalInclination": 1.8,
        "orbitalEccentricity": 0.094,
        "obliquityToOrbit": 25.2,
        "meanTemperature": -65,
        "surfacePressure": 0.01,
        "numberOfMoons": 2,
        "hasRings": false,
        "hasGlobalMagneticField": false
    },
    {
        "id": 5,
        "name": "Jupiter",
        "mass": 1898,
        "diameter": 142984,
        "density": 1326,
        "gravity": 23.1,
        "escapeVelocity": 59.5,
        "rotationPeriod": 9.9,
        "lengthOfDay": 9.9,
        "distanceFromSun": 778.5,
        "perihelion": 740.6,
        "aphelion": 816.4,
        "orbitalPeriod": 4331,
        "orbitalVelocity": 13.1,
        "orbitalInclination": 1.3,
        "orbitalEccentricity": 0.049,
        "obliquityToOrbit": 3.1,
        "meanTemperature": -110,
        "surfacePressure": null,
        "numberOfMoons": 95,
        "hasRings": true,
        "hasGlobalMagneticField": true
    },
    {
        "id": 6,
        "name": "Saturn",
        "mass": 568,
        "diameter": 120536,
        "density": 687,
        "gravity": 9.0,
        "escapeVelocity": 35.5,
        "rotationPeriod": 10.7,
        "lengthOfDay": 10.7,
        "distanceFromSun": 1433.5,
        "perihelion": 1352.6,
        "aphelion": 1514.5,
        "orbitalPeriod": 10747,
        "orbitalVelocity": 9.7,
        "orbitalInclination": 2.5,
        "orbitalEccentricity": 0.057,
        "obliquityToOrbit": 26.7,
        "meanTemperature": -140,
        "surfacePressure": null,
        "numberOfMoons": 146,
        "hasRings": true,
        "hasGlobalMagneticField": true
    },
    {
        "id": 7,
        "name": "Uranus",
        "mass": 86.8,
        "diameter": 51118,
        "density": 1271,
        "gravity": 8.7,
        "escapeVelocity": 21.3,
        "rotationPeriod": -17.2,
        "lengthOfDay": 17.2,
        "distanceFromSun": 2867.0,
        "perihelion": 2732.7,
        "aphelion": 3001.4,
        "orbitalPeriod": 30589,
        "orbitalVelocity": 6.8,
        "orbitalInclination": 0.8,
        "orbitalEccentricity": 0.047,
        "obliquityToOrbit": 97.8,
        "meanTemperature": -195,
        "surfacePressure": null,
        "numberOfMoons": 28,
        "hasRings": true,
        "hasGlobalMagneticField": true
    },
    {
        "id": 8,
        "name": "Neptune",
        "mass": 102,
        "diameter": 49528,
        "density": 1638,
        "gravity": 11.0,
        "escapeVelocity": 23.5,
        "rotationPeriod": 16.1,
        "lengthOfDay": 16.1,
        "distanceFromSun": 4515.1,
        "perihelion": 4471.1,
        "aphelion": 4558.9,
        "orbitalPeriod": 59800,
        "orbitalVelocity": 5.4,
        "orbitalInclination": 1.8,
        "orbitalEccentricity": 0.011,
        "obliquityToOrbit": 28.3,
        "meanTemperature": -200,
        "surfacePressure": null,
        "numberOfMoons": 16,
        "hasRings": true,
        "hasGlobalMagneticField": true
    },
    {
        "id": 9,
        "name": "Pluto",
        "mass": 0.0130,
        "diameter": 2376,
        "density": 1850,
        "gravity": 0.7,
        "escapeVelocity": 1.3,
        "rotationPeriod": -153.3,
        "lengthOfDay": 153.3,
        "distanceFromSun": 5906.4,
        "perihelion": 4436.8,
        "aphelion": 7375.9,
        "orbitalPeriod": 90560,
        "orbitalVelocity": 4.7,
        "orbitalInclination": 17.2,
        "orbitalEccentricity": 0.244,
        "obliquityToOrbit": 119.5,
        "meanTemperature": -225,
        "surfacePressure": 0.00001,
        "numberOfMoons": 5,
        "hasRings": false,
        "hasGlobalMagneticField": null
    }
]