// ROOT INTEGRATION PROPOSAL: these canonical filenames are proposed copy targets.
// Do not run until root has installed all ten actual ready modules at these paths.
import { gaussianVCMLChecks } from './finite-smoke-ml101-gaussian-vc.mjs';
import { sparseMLChecks } from './finite-smoke-ml101-sparse.mjs';
import { privacyFederatedMLChecks } from './finite-smoke-ml101-privacy-federated.mjs';
import { optimizationMLChecks } from './finite-smoke-ml101-optimization.mjs';
import { deepWassersteinMLChecks } from './finite-smoke-ml101-deep-wasserstein.mjs';
import { flowMatchingMLChecks } from './finite-smoke-ml101-flow.mjs';
import { calibrationMLChecks } from './finite-smoke-ml101-calibration.mjs';
import { pacMDPMLChecks } from './finite-smoke-ml101-pac-mdp.mjs';
import { policyCPOMLChecks } from './finite-smoke-ml101-policy-cpo.mjs';
import { verifierGroupMLChecks } from './finite-smoke-ml101-verifier-group.mjs';
import { mergeCheckRegistries } from './merge-check-registries.mjs';
export const ml101CheckGroups = [
  ['gaussianVCMLChecks',gaussianVCMLChecks], ['sparseMLChecks',sparseMLChecks],
  ['privacyFederatedMLChecks',privacyFederatedMLChecks], ['optimizationMLChecks',optimizationMLChecks],
  ['deepWassersteinMLChecks',deepWassersteinMLChecks], ['flowMatchingMLChecks',flowMatchingMLChecks],
  ['calibrationMLChecks',calibrationMLChecks], ['pacMDPMLChecks',pacMDPMLChecks],
  ['policyCPOMLChecks',policyCPOMLChecks], ['verifierGroupMLChecks',verifierGroupMLChecks],
];
// Within finite-smoke.mjs, replace the old spread construction with:
// mergeCheckRegistries([...legacyImportedGroups, ['inline-core', inlineCoreChecks], ...ml101CheckGroups]);
// Every ORIGINAL registry must be a separate group, BEFORE its keys are spread.
// Checking only this new aggregate would miss new-vs-legacy duplicate overwrites.
export const ml101Checks = mergeCheckRegistries(ml101CheckGroups);
