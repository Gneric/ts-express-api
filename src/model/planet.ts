export interface Planet {
    id: number;
    name: string;
    mass: number;
    diameter: number;
    density: number;
    gravity: number;
    escapeVelocity: number;
    rotationPeriod: number;
    lengthOfDay: number;
    distanceFromSun: number;
    perihelion: number;
    aphelion: number;
    orbitalPeriod: number;
    orbitalVelocity: number;
    orbitalInclination: number;
    orbitalEccentricity: number;
    obliquityToOrbit: number;
    meanTemperature: number;
    surfacePressure: number | null;
    numberOfMoons: number;
    hasRings: boolean;
    hasGlobalMagneticField: boolean | null;
}
  