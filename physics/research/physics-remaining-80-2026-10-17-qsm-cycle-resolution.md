# QSM source-level cycle resolution — 2026-10-17

Scope: fresh native Step-1 drift escalation for `qsm-states-ensembles` (order 569) and its later local bridge (571), one repair cycle. Source designs/mappings only; canonical plan, native drift report, evidence, dispatch/state, imported and original mathematical sources, production carriers and historical audits are untouched.

The erroneous edge was `def-qsm-finite-gibbs-purification -> def-qsm-local-finite-tensor-state`, giving a states-to-local-bridge edge opposite the legitimate local-bridge-to-states edge. The complete actual QGA0–QGA2 text in `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/gibbs-circuit-bridge.md` was read, together with the finite-state Q0 argument and local bridge Q0–Q6. QGA0 stipulates an arbitrary nonzero finite-dimensional complex Hilbert space, an ordered orthonormal basis and an identified reference copy. Its finite trace/purification calculation uses none of the later local definition's sites, C^q product configuration or N-site assumptions.

Exact replacement: `def-qsm-finite-gibbs-purification` now depends on same-page `lem-qsm-matrix-state-calculus` instead of `def-qsm-local-finite-tensor-state`. Its other three existing dependencies remain `def-qc-density-operator`, `def-qc-partial-trace`, and `thm-qc-partial-trace-characterization-and-basis-independence`. QGA0 explicitly explains unitary coordinate identification of the given arbitrary Hilbert space with C^d, transferring the same-page finite Hermitian spectral/functional calculus and trace identities. No definition or item is rehomed, no tensor-register or local-product hypothesis is imposed, and all original claims remain. The finite partial-trace suppliers already furnish the ordered two-factor tensor interface.

The complete current root texts actually read for this focused repair were `def-qc-density-operator`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `def-qc-trace-distance`, `thm-qc-trace-norm-spectral-formula`, `alg-qa-30-sdp-gibbs-purification`, and `thm-qa-30-sdp-gibbs-state-error-cost`. This is a bounded use review, not a recursive proof audit, external PDF retrieval or import certification. Their old reading/pin-status fields and historical audit records remain unchanged historical evidence; published P-page admission and current imports remain root-owned.

Consumer dispositions:

- QGA0: the normalized vector and exact system marginal remain unchanged. Spectral positivity gives finite positive Z; basis expansion gives the maximally entangled trace identity; the published coordinate partial trace/trace pairing yields exactly exp(-beta H)/Z.
- `alg-qsm-finite-gibbs-state-preparation` (QGA1), direct consumer: unchanged. The finite decoded sparse-oracle model, certified shifts, block precision/access/reference data and their costs remain required; normalized branch success and explicit FAIL remain as specified. Identity shifts cancel in the normalized density and purification.
- `thm-qsm-finite-gibbs-circuit-marginal-error` (QGA2), direct and indirect consumer: unchanged. The current root algorithm/error theorem supports the stated normalized-vector accuracy conditional on shift success with the declared cap failure budget. Its finite rank-two projector calculation and partial-trace contraction prove the same marginal trace-distance bound at most epsilon_out, with the factor 1/2 convention retained. No physical preparation/equilibration claim is added.
- The item dependency graph has no further descendants of QGA0. The local bridge's `def-qsm-local-coercive-regulated-model` and `pthm-qsm-local-regulated-interacting-gibbs` do not consume QGA0: they retain their real state-page postulate/trace-Gibbs suppliers. The cycle repair frees their ordering without changing their self-adjoint form realization, trace-class hypotheses, arbitrary finite-form-energy competitors or physical qualifications. The later finite tensor definition and all its actual consumers remain unchanged.

Current local and paired inventories and the aggregate supplier map use the exact replacement. Paired item/page ordering, the three affected item levels and page dependency projections are reconciled; the states page now has no in-run incoming local-bridge edge, while the local bridge still requires states. The pathway/track record the dated amendment. The prior track binding table and unchanged-import statement are explicitly historical; no old binding, reading record, closure/structural receipt or audit is resealed. A separate point-in-time `research/physics-remaining-80-2026-10-17-qsm-cycle-bindings.json` binds this amendment's changed source bytes.

Actual checks: JSON parsing; exact agreement of worker/local-to-paired-to-consumer-map dependencies; complete local item topological order; unique unchanged homes; recomputed page dependency projections and complete local page DAG; supplier-before-consumer order on the states page; exhaustive QGA0 descendant enumeration; retained consumer scope/status/other dependencies; changed-path whitespace diff check. No production proof-layout or native content/proof gate was run or claimed.

Remaining obligations: root must admit the missing published QC/QA P-page context and plan edges raised by native drift, and native authoring/reviews/readiness/gates must run. This repair resolves the source-level cycle only; it does not resolve unrelated drift holds or grant acceptance.

Changed paths, relative to physics:

- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/gibbs-circuit-bridge.md`
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/local-inventory.json`
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/paired-inventory.json`
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/supplier-map.json`
- `research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/pathway-and-inventory.md`
- `research/plan-quantum-statistical-mechanics-track.md`
- this resolution report and the new cycle binding JSON
