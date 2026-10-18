// Bounded numerical finite-model checks selected by exact proof-contract assertions.
// Importing this aggregator registers callbacks; it does not run their fixtures.
import { numericalRosenbrockChecks } from './finite-smoke-numerical-rosenbrock.mjs';
import { numericalPolynomialQuadratureChecks, numericalQuasiNewtonChecks } from './finite-smoke-numerical-quadrature-quasi-newton.mjs';
import { numericalSparseChecks } from './finite-smoke-numerical-sparse.mjs';
import { numericalMultistepChecks } from './finite-smoke-numerical-multistep.mjs';
import { numericalFourierChecks } from './finite-smoke-numerical-fourier.mjs';
import { numericalImplicitRKChecks } from './finite-smoke-numerical-implicit-rk.mjs';
import { numericalTimeParallelChecks, numericalPopulationChecks, numericalGaussChecks } from './finite-smoke-numerical-time-population-gauss.mjs';
import { numericalInverseChecks } from './finite-smoke-numerical-inverse.mjs';
import { numericalControlChecks, numericalMultirateChecks, numericalSensitivityChecks } from './finite-smoke-numerical-control-multirate-sensitivity.mjs';
import { numericalParticlesChecks } from './finite-smoke-numerical-particles.mjs';

import { numericalFrontierSpecialChecks } from './finite-smoke-numerical-frontier71-special.mjs';
import { numericalFrontierGeometryChecks } from './finite-smoke-numerical-frontier71-geometry.mjs';
import { numericalFrontierParticleChecks } from './finite-smoke-numerical-frontier71-particle.mjs';

const families = [
  ['numericalFrontierSpecialChecks', numericalFrontierSpecialChecks],
  ['numericalFrontierGeometryChecks', numericalFrontierGeometryChecks],
  ['numericalFrontierParticleChecks', numericalFrontierParticleChecks],
  ['numericalRosenbrockChecks', numericalRosenbrockChecks],
  ['numericalPolynomialQuadratureChecks', numericalPolynomialQuadratureChecks],
  ['numericalQuasiNewtonChecks', numericalQuasiNewtonChecks],
  ['numericalSparseChecks', numericalSparseChecks],
  ['numericalMultistepChecks', numericalMultistepChecks],
  ['numericalFourierChecks', numericalFourierChecks],
  ['numericalImplicitRKChecks', numericalImplicitRKChecks],
  ['numericalTimeParallelChecks', numericalTimeParallelChecks],
  ['numericalPopulationChecks', numericalPopulationChecks],
  ['numericalGaussChecks', numericalGaussChecks],
  ['numericalInverseChecks', numericalInverseChecks],
  ['numericalControlChecks', numericalControlChecks],
  ['numericalMultirateChecks', numericalMultirateChecks],
  ['numericalSensitivityChecks', numericalSensitivityChecks],
  ['numericalParticlesChecks', numericalParticlesChecks],
];

const checks = Object.create(null);
for (const [family, entries] of families) {
  for (const [name, check] of Object.entries(entries)) {
    if (!name || typeof check !== 'function')
      throw new TypeError(`Invalid numerical finite-smoke registration ${family}/${name}`);
    if (Object.hasOwn(checks, name))
      throw new Error(`Duplicate numerical finite-smoke check ${name} in ${family}`);
    checks[name] = check;
  }
}

export const numericalChecks = Object.freeze(checks);
