# Batch 67 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `ale-interface-and-partitioned-multiphysics-discretization`  
Assigned dependency level: 3; prerequisite batches: 35, 41, 63.  
Scheduling input SHA-256: `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0c`.

## Governing instructions and run state

Read `CLAUDE.md` fully, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold brief, the generated batch assignment, the owner-authoring direction, the full assigned PE22 design section, `research/plan-spec.json`, the batch scaffold manifest, and the dependency-level inputs before editing carriers. The owner direction is binding: continue independently against declared interfaces; preserve the draft work; do not claim acceptance or alter published content, shared plans, owner verdicts, or autopilot state.

The live status command was recomputed from disk:

`node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run numerical-analysis-remaining-71-2026-10-17 --state-dir .autopilot/numerical-analysis-remaining-71-2026-10-17`

It reports the run still `running`, `1-scaffold` at 48/71, no in-flight process, and the existing owner repair/recertification blocker in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`. Batch 67 authoring did not change run state.

## Plan conflicts and scope decisions

The current PE22 prose in `research/plan-numerical-spatial-track.md` lists three extra same-frontier interfaces, `variational-crimes-and-strang-lemmas` (NA-30), `mixed-finite-elements-and-stokes-stability` (NA-34), and `parabolic-finite-element-methods` (NA-36). The controlling `plan-spec.json`/assigned manifest requires only PE06, PE17, PE19, and T04. The manifest and plan control; the extra prose interfaces are recorded as drift and were not added as dependencies.

The current design and plan both name PE06, PE17, PE19, and T04. The plan description says time-agent splitting contributes a separate residual, while the PE22 design permits an optional T04 Lie/Strang branch. The A page includes only a conditional finite-dimensional corollary under T04's exact-flow, common-tube, commutator/local-defect, step-size, and approximate-subflow stability/error hypotheses. It asserts no PDE or unbounded-operator splitting estimate.

The design says arbitrary curved-map/transfer defects use PE17, while the selected scope gives no arbitrary multidimensional discrete GCL or curved-transfer rate. The A page keeps the PE17 `requires` edge, explicitly states that exclusion, and does not add a curved estimate.

## Inventory, dependencies, and levels

The scaffold inventory was completed before item carriers were written. It contains 17 A items and 3 B examples (20 total). Direct dependencies and per-item `dependency_level` are in `research/numerical-analysis-remaining-71-2026-10-17-batch-67.pages.json`; level is zero when no in-run supplier exists and otherwise one plus the maximum in-run supplier level. External published dependencies do not raise item levels.

| Level | Items |
|---:|---|
| 0 | `cor-ale-exact-splitting-residual-orders`, `def-ale-linear-diffusion-transmission-model`, `def-ale-moving-domain-map`, `def-ale-periodic-moving-grid`, `def-ale-toy-added-mass-recurrence` |
| 1 | `alg-ale-upwind-finite-volume-step`, `lem-ale-jacobi-geometric-conservation-identity`, `lem-ale-periodic-face-motion-satisfies-discrete-gcl`, `lem-ale-schur-complement-positive-and-minimizes-energy`, `thm-ale-monolithic-backward-euler-energy-identity`, `ex-ale-added-mass-toy-recurrence-instability` |
| 2 | `alg-ale-robin-robin-partitioned-iteration`, `lem-ale-schur-residual-controls-interface-energy-error`, `thm-ale-one-dimensional-reynolds-transport-identity`, `thm-ale-reynolds-transport-identity`, `thm-ale-upwind-step-conserves-mass-and-preserves-free-stream` |
| 3 | `thm-ale-robin-robin-iteration-contracts-and-certifies-stop`, `thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl`, `ex-ale-expanding-mesh-free-stream` |
| 4 | `ex-ale-two-domain-heat-interface-flux-balance` |

The A/B page inventories, batch manifest, coverage, contracts, and current carrier frontmatter were kept consistent. The highest A-page item level is 3; the B heat-interface example is level 4. The manifest’s page-level `requires` remain exactly PE06, PE17, PE19, and T04.

## Supplier inspection and open page-level prerequisites

Cross-batch page and direct item interfaces are recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-67.cross-batch-dependencies.json`. Current actual supplier bodies were checked before any readiness decision; interface inspection does not imply approval.

- **PE06 / batch 41:** the current draft page and its 16-item inventory were inspected. `rem-na-pe06-pressure-recovery-escalation` states the exact open claims: pressure-bearing subsequential convergence with `p in L^{4/3}_t L^2_0` and the pressure part of the smooth velocity/pressure error bound. It explains that the current limit theorem reaches only `V_sigma`, the smooth theorem is velocity-only, and the existing discrete Helmholtz projector has no uniform H1 stability. It proposes an H1-stable L2-orthogonal projector onto `Z_h` or a complete alternative full-test estimate. Batch 67 uses no PE06 result; the required page-level edge remains open.
- **PE17 / batch 63:** the current draft page and its 15-item inventory were inspected. Batch 63's current cross-batch and coverage records leave its batch-15 Delaunay/certified-predicate interfaces open for the Delaunay seed, mesh-quality result, and sliver example. Exact unresolved IDs are listed in the batch 67 cross-batch record. Batch 67 uses no PE17 estimate; its required page-level edge remains open.
- **PE19 / batch 35:** the current draft page and its 7-item inventory were inspected, including `def-linear-elasticity-displacement-formulation-and-data` and `thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error`. Their domain, dimension, boundary, coefficient, and MINI-pair hypotheses were checked. Batch 67's finite-dimensional SPD diffusion model imports no elasticity result; the PE19 page-level edge remains open pending owner reconciliation.
- **T04:** the published page and complete current bodies/proofs of `def-additive-ode-and-partition`, `def-exact-split-flows-lie-strang-and-bracket`, `lem-lie-strang-local-error-expansions`, and `thm-lie-strang-global-orders-and-subflow-error` were read. The local corollary preserves the supplier's exact-flow and approximate-subflow hypotheses.

All direct published mathematical suppliers used by the item Facts blocks are recorded with exact excerpts, hypotheses and affected claim IDs in the proof contracts and cross-batch file. The one-dimensional Reynolds item has a choice-free direct argument and carries no Countable Choice hypothesis. The distinct d>=2 branch explicitly assumes Countable Choice; its sole use is through the finite piecewise-C1 divergence-theorem supplier in step 4.1. No local proof requires full AC. Formal transitive dependency lists contain axiom-definition references, but the choice branches above follow explicit supplier statements and actual proof uses, not mere appearances of an axiom definition in a dependency closure.

## Mathematical review and scope limits

The page separates (i) continuous ALE identities, (ii) a concrete periodic one-dimensional finite-volume update, (iii) finite-dimensional linear backward-Euler diffusion transmission, and (iv) the narrowly stipulated scalar added-mass recurrence. The TikZ interface diagram labels both outward normals and fluxes, shows a common trace, and is explanatory only; no proof relies on the diagram.

The C2 ALE map explicitly carries the finite boundary presentation to the moving domain and cites the exact Jordan measurability definition for its compact reference closure. The Reynolds proofs justify differentiation of the pulled-back fixed-domain integral by a uniform difference-quotient argument, with the mean-value theorem, Heine–Cantor, Jordan integral bounds, and finite Jordan content declared as suppliers. The Robin-Robin stop proof uses the actual incoming datum for the returned trace: the new-minus-old Robin datum equals `(R_2 R_1-I)e_m`, so `||d_m|| >= (1-q)||e_m||`, which certifies the current first-subdomain trace under the specified threshold. These steps were checked after review and are reflected in the current contracts.

No claim is made for high-dimensional discrete GCL rates, curved-mesh transfer rates, nonlinear moving-domain FSI well-posedness, or instability of a general partitioned algorithm. The added-mass result is exactly the defined recurrence `m_s delta v_(n+1)=-m_f delta v_n`; its example fixes `m_s=1`, `m_f=2`, and nonzero initial increment.

## Literature and source history

`research/numerical-analysis-remaining-71-2026-10-17-batch-67.source-coverage.json` lists full-text URLs, locators, supported items, each harvested result's disposition, recovery attempts, and fetch stamps. Four unique full texts are fetch-verified (7/8 page-specific source records); the Folch URL is a documented drop after its retry allowance was exhausted. The active page treatments include the full Donea encyclopedia chapter, the full Engström–Hansen research paper, the full Joosten thesis, and Hairer's complete 18-page graduate lecture-note PDF. Hairer supplies the full-notes source; the other branches have independent full-text treatments. Every theorem and example in the carriers has a local proof or exact finite calculation.

- **Donea et al.** Full 25-page chapter inspected, §§2–4 and §6. The original publisher endpoint had an SSL failure; the full CiteSeer copy cited in the active source coverage was fetched and stamped.
- **Folch Duran thesis:** the full 256-page thesis and relevant Chapter 3 §3.3.1/Chapter 6 passages were read earlier. In this batch's required live stamp, the UPC URL failed HTTP 418 on its initial attempt plus five recovery retries. A web search after exhaustion found alternate UPC handle/server API links, but no further retrieval was attempted because the five-retry allowance was exhausted. The source was dropped with certainty, its references were removed from the assigned item carriers, and all affected local proofs/dependencies are recorded under `source_resolution` in the source-coverage record. No mathematical coverage was dropped; the full Donea chapter remains an independently fetched ALE treatment.
- **Engström–Hansen (2022):** full arXiv PDF inspected for the heat transmission setup, opposite outward normal fluxes, Robin iteration and convergence discussion. Its setting differs from the local finite-dimensional BE proof, which is proved directly.
- **Joosten (2011):** full 154-page thesis inspected, especially Chapter 5's one-degree-of-freedom interface model and mass-ratio behavior. It is cited under its actual title, not misattributed to Förster.
- **Hairer:** full 18-page lecture note inspected, §5, pp. 11–13, for exact finite-dimensional Lie/Strang composition context. Global and approximate-flow hypotheses come from T04 and are reproduced conditionally.

Other retrieval/search history retained from source work: a DIVA result for Guillard/Farhat resolved to a different fully discrete energy-stability paper and was not cited; a Causin HAL report URL returned 404 twice and was not used; CTResources `csets.311.pdf` was only book front matter/contents and was not cited as Robin theory. None of these uncited sources is presented as read evidence or as a dropped mathematical premise. There are no unresolved source-resolution records for active sources.

## Checks and readiness

Final scoped checks were run against the current files:

- Batch 67 dependency recomputation: 20 items, all declared levels match, no cycles. The latest whole-run item-level snapshot has 1,418 items across 142 pages and four label mismatches, all outside this assignment: `lem-pe11-continuous-gauge-compact-embedding`, `thm-pe11-edge-maxwell-spectral-approximation`, `ex-pe11-unit-cube-maxwell-mode`, and `ex-pe11-repeated-cube-maxwell-cluster`. `research/numerical-analysis-remaining-71-2026-10-17-batch-67.dependency-level-check.json` records the scoped per-item results, global diagnostics, and batch input hash.
- The separate batch-graph command `node tools/batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` fails before graph comparison on a malformed double-quoted locator in `items/lem-ewald-gaussian-poisson-periodization.md` (batch 12, outside this assignment). No other pair was edited.
- Strict proof contracts: 14/14 proof-bearing items, zero errors or warnings. Scoped `precheck`: 14/14 pass. `node tools/proof-layout.mjs` on all 14 proof-bearing items: 14 items, 44 steps, zero defects. Scoped `rendercheck.mjs` on all 20 items and both A/B pages: 22 checked, zero errors or warnings.
- Source fetch check: 7/8 page-specific source records fetch-verified, 8/8 resolved with one documented dropped source and its per-item alternative arguments/dependencies. No active source remains unresolved.
- `step1-decisions.mjs record` created a non-owner record for each of the 20 items. The scoped hash check finds 20/20 ready and closed; `research/numerical-analysis-remaining-71-2026-10-17-batch-67.readiness.json` lists their current hashes. The last whole-run readiness snapshot observed 1,405 items with 1,093 ready and remaining work in other pairs; this does not invalidate batch 67's item-level records.
- The current autopilot snapshot is `running`, `1-scaffold` at 55/71, with no in-flight work and the pre-existing owner repair/recertification blocker. The three draft page-level prerequisites PE06, PE17, and PE19 remain open in the batch cross-batch record; T04 is verified. This batch's completion record is not independent approval or pair acceptance.

The first scoped precheck exposed untagged phase formatting and dependency-layer numbering in several proofs; those exact item carriers were corrected and the final 14/14 rerun passes. Mathematical repairs are recorded in the current items: `thm-ale-robin-robin-iteration-contracts-and-certifies-stop` now bounds the error in the incoming datum used by its returned trace; `thm-ale-monolithic-backward-euler-energy-identity` identifies its local backward-Euler right-hand side; and both Reynolds proofs explicitly justify differentiation under the pulled-back integral.
