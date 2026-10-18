# Batch 59 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `compressible-viscous-flow-and-entropy-stable-fluxes` / `compressible-viscous-flow-and-entropy-stable-fluxes-examples`  
Assigned batch level: **5**; prerequisite batches: **36, 44**  
Assigned scheduling input: `197b26583eb6760dc45128e450c32a5132605d90cbe79ae29ccfd1909b60b88b`

## Controlling plan and design comparison

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the complete `WORKFLOW.md`, the beta scaffold brief, the assigned task and dependency-order task, the complete owner authoring direction, the full PE24 design section at `research/plan-numerical-spatial-track.md` lines 1525–1568, and the PE04 design section at lines 631–665. The owner direction has no PE24-specific amendment.

The assigned page requirements in the current batch manifest are exactly `variational-crimes-and-strang-lemmas`, `hyperbolic-dg-and-summation-by-parts-discretizations`, and `finite-volume-diffusion-and-mimetic-fluxes`. The batch-level dependency artifact records batch 59 at level 5 with batches 36 and 44. The maximum local item level is 7; labels are recomputed in the manifest and checked after authoring.

The PE24 row in `plan-spec.json` is broader than the current detailed design. It mentions periodic or entropy-compatible walls, a DG/SBP branch, a time-agent method, possible limiter/time-step compatibility, and a smooth-flow error branch subject to mesh-uniform stability. The detailed PE24 design controls the selected claims here: ideal-gas states and entropy variables; the displayed symmetric entropy-potential flux; periodic diagonal-norm SBP matrices with `H D_j + D_j^T H = 0` and `D_j 1 = 0`; the local viscous `K` factorization; the exact semidiscrete conservation/entropy balance; the PE13 one-dimensional orthogonal finite-volume viscous operator; and a finite-budget forward-Euler loop with a conditional **fixed-grid** `O(Delta t)` estimate. The continuous smooth entropy identity is proved locally and used for the Couette wall example. The forward-Euler result has a grid-dependent constant. It does not claim a mesh-uniform spatial error rate, unconditional positivity, or a fully discrete entropy theorem.

The design’s prerequisite-interface paragraph lists optional PE01 and PE03 context, but neither appears in the task or controlling PE24 `requires` list. The optional Rusanov comparison and convex-scaling limiter branches are not selected, so PE01/PE03 are not added to the page requirements or item dependencies. NA28 is also not added: no mesh-refinement finite-element approximation claim is made. The finite-volume result is a one-dimensional specialization of the displayed `G_{i+1/2}` branch with zero boundary viscous flux; it proves the face entropy identity and local face-flux consistency only.

## Actual supplier review and unresolved interface

- **NA30 / `variational-crimes-and-strang-lemmas`:** The actual published page, `def-variational-crime-error-framework`, `thm-first-strang-lemma-for-conforming-perturbed-galerkin`, and `thm-second-strang-lemma-for-nonconforming-galerkin` were read. The selected PE24 results do not use a Strang estimate, geometric lift, finite-element consistency defect, or quadrature perturbation claim. The first published Strang theorem currently has `verification.precheck: pending`; it is not a direct or indirect premise of this pair and was not edited.

- **PE04 / `hyperbolic-dg-and-summation-by-parts-discretizations`, batch 36:** Its current manifest has `items: []` on both A and B entries, and the PE04 A/B carriers are absent. Therefore there is no exact PE04 item ID or supplier excerpt to quote. The controlling PE04 design calls for paired SBP/quadrature identities, the entropy-conservative shuffle identity, and discrete metric identities; the selected flat-periodic branch reduces these to the exact finite-matrix hypotheses written in Batch 59. The Batch 59 theorem proves the required special-case cancellation directly from those stated hypotheses, but the planned cross-page interface remains open until an actual PE04 carrier exists and its body can be compared. The affected consumer is `thm-periodic-sbp-compressible-viscous-conservation-and-entropy`; the dependent finite example is `ex-sbp-inviscid-versus-viscous-entropy-budget`. No absent supplier ID, excerpt, or acceptance was invented.

- **PE13 / `finite-volume-diffusion-and-mimetic-fluxes`, batch 44:** The actual draft page, `def-fv-admissible-cell-face-mesh`, and `def-tpfa-harmonic-face-scheme` were read. `def-fv-admissible-cell-face-mesh` is the direct supplier used for interval cells, endpoint faces, incidences, and flux orientation. Batch 44 records this definition at item level 0 and marks its assigned items ready. The current `def-tpfa-harmonic-face-scheme` is only for scalar positive isotropic diffusion and is not used for PE24’s state-block matrix `K`. The PE13 page’s open parabolic compactness/limit-identification obligations are unrelated because Batch 59 makes no finite-volume convergence claim.

The dependency record is in `batch-59.cross-batch-dependencies.json`. It records the unresolved PE04 page interface, the actual PE13 mesh item and hypotheses, and the non-use of NA30/NA28/PE01/PE03/NA15 results.

## Item inventory and dependency levels

| Level | A-page item(s) |
|---:|---|
| 0 | `def-compressible-navier-stokes-fourier-model` |
| 1 | `lem-compressible-admissible-state-set-open-convex` |
| 2 | `lem-compressible-ideal-gas-entropy-pair-and-variables` |
| 3 | `def-ideal-gas-entropy-conservative-pair-flux`; `lem-compressible-viscous-flux-entropy-variable-factorization` |
| 4 | `lem-ideal-gas-entropy-conservative-flux-properties`; `lem-compressible-viscous-smooth-entropy-identity`; `def-periodic-sbp-compressible-viscous-scheme`; `def-orthogonal-fv-compressible-viscous-scheme` |
| 5 | `thm-periodic-sbp-compressible-viscous-conservation-and-entropy`; `lem-orthogonal-fv-compressible-viscous-flux-consistency`; `thm-orthogonal-fv-compressible-viscous-entropy-dissipation`; `alg-positive-tube-forward-euler-for-compressible-sbp` |
| 6 | `lem-positive-tube-forward-euler-loop-terminates` |
| 7 | `thm-fixed-mesh-forward-euler-error-for-compressible-sbp` |

B-page item levels are 3 for the near-vacuum entropy-variable sequence and 5 for the manufactured periodic state, Couette wall balance, and three-node SBP entropy budget. The pair remains below the 100-item A-page limit.

## Full-text sources and dispositions

The active source ledger is `batch-59.coverage.json`. It records complete source URLs, locators, supported items, each harvested-result disposition, search history, and full-text fetch stamps. The A page uses five independent full texts, including the complete Handbook chapter and the complete Eymard–Gallouët–Herbin book-length author manuscript.

- Tadmor, *Entropy Stable Schemes*, Handbook chapter (27-page PDF): §§1.1–1.2, 4.1–4.2, 4.6, and 6. It supports entropy pairs, potentials, entropy-conservative flux identities, and the high-order periodic flux-differencing context. All PE24-specific formulas and the finite matrix summation are proved locally.
- Ismail–Roe, *Affordable, entropy-consistent Euler flux functions II* (27-page PDF): printed pp. 5417–5419 and Appendix A. It supplies the normalized ideal-gas entropy-variable and entropy-conservative-flux context; the local proof carries general `R`, `c_v`, `s_0`, and `d`.
- Chan–Lin–Warburton, arXiv:1808.05066 (complete author preprint): §§2.1–2.3, 3.3, 4.4–4.5, Appendix A.4–A.5. It supports the constitutive and entropy-variable viscous structure. Its HDG scheme and boundary penalties are not imported; the local proof derives the full `d >= 1` block factorization and the distinct nodal SBP identity.
- Eymard–Gallouët–Herbin, updated author manuscript (254-page PDF): Chapter 9 §9.2 and §9.5. It supports finite-volume cell/face balance and smooth face-flux context; its d=2,3 geometry and scalar-diffusion results are not used as a d=1 state-block theorem.
- Droniou, *Finite volume schemes for diffusion equations* (38-page preprint): §§1.1–1.2 and 2.1–2.3. It supports cell/face definitions, shared-flux balance, and the scalar TPFA orthogonality limitation. The PE24 matrix flux identity is proved locally.

An exploratory Rice University dissertation PDF candidate returned a web-reader internal error. It was not cited or harvested. Search located the complete Chan–Lin–Warburton author preprint, whose relevant sections and appendix proof were inspected. No active source was dropped and no mathematical coverage was waived. This unused candidate history is preserved in `batch-59.source-evidence.json`; it does not require a source-drop receipt under `tools/source-resolution.mjs`.

## Scoped checks and readiness

Checks on the final item bodies and batch artifacts:

- `precheck`: 14 proof-bearing items checked, 0 failing; the 5 definitions/algorithm are not applicable.
- `node tools/proof-layout.mjs` on all 19 changed item paths: 50 steps, 0 defects.
- `rendercheck`: all 19 items and both A/B page files checked (21 files total), 0 errors and 0 warnings.
- `manifest-deps`: 19 items, 0 normalized dependencies, 0 errors. `content-policy`: 19 scoped items, 0 errors and 0 warnings.
- `depcheck`, `fwdcheck`, and `extcheck` on the 19-item scope all pass.
- `proof-contract --strict`: 19/19 items, 0 errors and 0 warnings. `citation-fidelity`: 33 citations, 0 missing quotes and 0 widening candidates.
- `coverage-checklist`: 1 page and 16 harvested results, 0 errors and 0 warnings. `source-fetch-check --stamp`: 5/5 sources fetch-verified, 5/5 resolved, 0 newly stamped on the final rerun, and 0 documented drops.
- `finite-smoke` found no registered finite-smoke callback for these items. The applicable three-node calculation is worked exactly in `ex-sbp-inviscid-versus-viscous-entropy-budget` step 3.1; no smoke result is claimed.
- `boundary-audit --fail-on-contradicted`: 0 contradicted candidates. The audit still reports 11 repeated-rationale clusters across 124 boundary rows; these are its nonfatal template candidates, covering one-way/iff, empty and degenerate cases, parameter limits, endpoints, and no-choice dispositions. The seven initially contradicted `not_applicable` rows were corrected to checked, statement- or step-anchored evidence.

The complete run dependency-level command currently reports six level mismatches in other pairs: `lem-maxwell-magnetic-compatible-initial-projection`, `thm-maxwell-edge-fem-smooth-solution-error`, `lem-pe11-continuous-gauge-compact-embedding`, `thm-pe11-edge-maxwell-spectral-approximation`, `ex-pe11-unit-cube-maxwell-mode`, and `ex-pe11-repeated-cube-maxwell-cluster`. None is in Batch 59. Recomputing the full manifest graph and inspecting the 19 Batch 59 rows gives no Batch 59 errors; every stored `dependency_level` matches its computed level (maximum 7). The other pairs were not edited.

`step1-decisions.mjs record` now has current non-owner records for all 19 items: 17 `ready` and 2 `escalated`. The escalations are `thm-periodic-sbp-compressible-viscous-conservation-and-entropy` and `ex-sbp-inviscid-versus-viscous-entropy-budget`. Both identify the missing PE04 page-level supplier, its empty item inventory and absent carriers, and the exact planned SBP/quadrature, shuffle, and metric identities that remain unchecked. The full-run readiness check remains open outside this batch as well; its latest snapshot had 1,405 items, 1,118 ready, and `closed: false`. These records express authoring readiness only and are not independent approval.
