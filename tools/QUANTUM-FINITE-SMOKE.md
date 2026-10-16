# Quantum finite fixtures

`finite-smoke.mjs` retains its existing registry and imports three quantum
fixture modules: `finite-smoke-quantum-qc.mjs`,
`finite-smoke-quantum-query.mjs`, and `finite-smoke-quantum-estimation.mjs`.
The current quantum frontier supplies 51 obligations across synthesis,
query models, Simon sampling, adversary bounds, and expectation estimation.
Each obligation names an executable check, fixed fixture parameters, and an
assertion excerpt from its current source. These bounded computations do not
establish the general mathematical claims. Unknown checks, unsupported
parameters, stale excerpts, and failed computations remain gate failures.

Run these obligations through the native full battery. No test suite or
registry self-test was run for this integration.

`regen-contract-entries.mjs` preserves an existing routine-step classification
when refreshing current claims and inputs. It emits derivations only for the
other steps, so regeneration cannot create a duplicate derivation for an
already classified routine. Missing and duplicate authored routine entries
remain visible to the ordinary strict contract checker.
Self-contained arguments with numbered steps and no labelled facts retain
their empty citation list and receive the same current step records.
