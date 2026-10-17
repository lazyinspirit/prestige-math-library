Seven batch8 finite fixture proposals

Research only. No callbacks, selftests, optional tests or native gates were executed by this preparer. Root evaluates after source/code review. No canonical registry, contracts, item, manifest or hashes changed.

`checks.mjs` exports `numericalParticlesChecks`, with callback `numerical-particles-fixture`. Select a case by top-level `fixture` or `parameters.fixture`; the seven selectors retain the original check names. Empty descriptor runs all seven cases. Unknown keys, conflicting/unknown selectors, explicit null and malformed parameter objects fail. No numeric inputs are configurable: these are seven fixed source cases.

Six cases use exact rational finite outcome enumeration or rational path values, importing the already-reviewed sibling numerical core without modifying it. The Gaussian barrier2 case compares its actual likelihood moments under the translated normal against fixed normal-tail quadratures and reference values, using4096 Simpson panels on bounded intervals. It checks only this fixed numerical substitution; it is not a certified Gaussian integral, random sampling, global unbiasedness proof, or asymptotic efficiency proof.

`batch8-contract-proposals.json` changes only the seven finite_smoke rows; `mapping.json` preserves each original case and records the exact current source section used as asserts. Full source and contract preimages are archived in before/. Root integrates the module under tools/finite-smoke-numerical-particles.mjs and adjusts only its sibling numerical-core import.
