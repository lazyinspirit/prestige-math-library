# Batch 65 — Step 1 authoring notes

Run: physics-non-fluid-129-2026-10-21-r2  
Pair: qftx-scale-cocycles / qftx-scale-cocycles-examples

## Plan and inventory comparison

The run-local owner-authoring-direction file is absent. The assigned design section and current `research/plan-spec.json` agree on the A/B identities, title, category, library, order 827/828, companion, and page requirements. The plan-spec item arrays are empty in this pre-authoring scaffold; the detailed design inventory supplies three A items and one B example, all authored here. No scope or page-plan conflict was found.

The design directly lists `prop-qftx-finite-renormalization-composition` for `def-qftx-scaling-cocycle`. The authored definition also lists `def-qftx-local-time-ordered-system` directly because the scale action is defined on the normalized scalar systems. This states the system type and normalization prerequisite explicitly without changing the claim or page requirements.

## Dependency levels and exact uses

The run's batch dependency file assigns batch 65 level 2, with batch 60 (`qftx-causal-renormalization`) and batch 64 (`qftx-heavy-field-eft`) as suppliers. The current in-run item graph gives the following levels. The old carrier labels 10/11/11/12 did not match the live supplier graph; they have been corrected according to the required rule, one plus the highest in-run supplier level. Direct Choice-principle dependencies are outside this run and do not raise these levels.

| Item | Level | Direct in-run dependencies |
|---|---:|---|
| `def-qftx-scaling-cocycle` | 8 | `def-qftx-local-time-ordered-system` (6), `prop-qftx-finite-renormalization-composition` (7) |
| `prop-qftx-scale-cocycle-law` | 9 | `def-qftx-scaling-cocycle` (8) |
| `thm-qftx-truncated-rg-ode` | 9 | `def-qftx-scaling-cocycle` (8); ODE and Picard–Lindelöf suppliers are outside this run |
| `ex-qftx-truncation-landau-pole` | 10 | `thm-qftx-truncated-rg-ode` (9) |

All four items are mathematical and use mathematical prerequisites. The ODE proof computes the local Lipschitz bound on every compact state cylinder and uses Picard–Lindelöf only for uniqueness on common intervals. The scalar coefficient `b` is prescribed data.

## Assumptions and conventions

The current finite-renormalization proposition assumes both the Axiom of Choice and Countable Choice. Its proof uses AC for finite graph extensions and recursive choices, and Countable Choice for microcausal contraction products. The definition states both assumptions and lists `def-axiom-of-choice` and `def-countable-choice` as mathematical premises. The cocycle proposition, ODE theorem, and example carry those inherited premises explicitly. The ODE and endpoint calculations themselves use no choice operation. In the theorem, $t$, $g$, $g_0$, $a$, and $b$ are dimensionless, so the differential equation and formal coupling change have consistent units. Proof-contract citations quote the exact definitions of both choice principles.

For the stated field dilation `C_rho phi(x) = rho^-1 phi(rho^-1 x)` and the supplier's Poincare action, `T_a phi(x) = phi(x-a)` satisfies `C_rho T_a C_rho^-1 = T_(rho a)`; scalar dilations commute with Lorentz transformations. The definition derives normalization of the Poincare action with this parameter convention. It includes no claim that scale-conjugated systems exist absent the explicit admissibility assumption and finite-renormalization supplier.

## Current prerequisite readiness

Readiness was checked with `loadStep1Record` and `step1Decision` from the physics support helpers, then matched against actual current carriers and hashes:

- `def-qftx-local-time-ordered-system`: the current definition and normalization were inspected. Its ready record is hash-stale: the current manifest includes `lem-qftx-balanced-local-functional-representatives`, which the carrier deps omit.
- `def-qftx-off-shell-local-polynomial-functionals`: its compactly supported finite-jet definition was inspected; its ready record is hash-stale.
- `lem-qftx-balanced-local-functional-representatives`: the current item and full proof were inspected; its Step 1 record is missing.
- `prop-qftx-finite-renormalization-composition`: its current statement requires two systems with the same free data. Its record is escalated and its full proof is conditional on the stated graph-scaling inputs.
- `lem-qftx-finite-graph-scaling-degree` and `thm-qftx-scalar-eg-induction`: current records remain escalated for the unresolved graphwise product-scaling bound (PB).
- `lem-qftx-transverse-center-scaling-bound`: the current causal-renormalization manifest includes it, but its Step 1 record is missing; the graph carrier uses it while its escalated record binds an earlier dependency list.
- `thm-qftx-heavy-derivative-bound`: its record is ready and hash-current. The inspected bound is for `J=P_E J`, `E>=0`, and is small when `E<M`; it does not bound omitted RG beta terms.

Accordingly, all four assigned items are complete conditional arguments and both pages are authored, but their readiness remains escalated on those exact upstream gaps. No draft label was treated as proof or independent approval.

## Source reading and disposition

The two pages have five source-coverage entries across three unique full-text URLs. Both required independent A-page treatments were read in full at the relevant sections, including full lecture notes. `source-fetch-check --stamp` verified all five entries, and its current check mode still reports 5/5 fetch-verified. There were no retrieval failures, recovery retries, drops, or source-resolution escalations; `source_resolution` and `source_resolution_history` are empty. The coverage checklist accounts for all 12 harvested results with 0 errors and 0 warnings.

- Fredenhagen–Rejzner, *Perturbative algebraic quantum field theory*, full lecture notes, §7, Theorem 7.2 and equations (79)–(80): supports the formal S-map and finite-local-map interface for `def-qftx-scaling-cocycle` and contextualizes `prop-qftx-scale-cocycle-law`. The source's existence claims are not substituted for the current conditional local proof.
- Brunetti–Dütsch–Fredenhagen, *Perturbative Algebraic Quantum Field Theory and the Renormalization Groups*, §4.2, equations (60)–(65), and §5.1, equations (68)–(70): supports the field scaling, mass relabelling, twisted cocycle convention, and mass-dependent conjugation for the definition and proposition.
- *Renormalization Scheme Dependence*, University of Texas at Austin QFT II lecture notes, printed pp. 1–2, equations (2)–(9): independently treats finite coupling redefinitions and the leading beta-series coefficient for the theorem and example. The local proof supplies the coefficient calculation.

The BDF paper uses the opposite surrounding Minkowski signature; the scale action here uses the assigned `eta=diag(-1,1,1,1)` convention. The heavy-field page's source treatments remain with that supplier; its low-energy discussion was checked only to prevent overclaiming an RG remainder bound.

## Scoped checks

- `author-check` for batch 65: passed; precheck 4/4, rendercheck 6/6 files, content-policy 4/4 items, strict proof-contract 4/4.
- Strict proof-contract check: 4 items, 0 errors, 0 warnings.
- Explicit proof-layout on the four changed items: 10 steps, 0 defects.
- Focused depcheck: all four assigned items pass; prerequisite closure covers 1,208 items and 329 pages.
- `manifest-deps`: 4 manifest items, 0 missing arrays, 0 errors.
- `coverage-checklist`: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 5/5 source entries fetch-verified and resolved; 0 documented drops.
- The four assigned dependency levels recompute to 8, 9, 9, and 10, matching both carriers and batch manifest.

The full run-wide `item-dependency-levels.mjs check` remains nonzero for 60 unrelated errors: 51 empty scaffold inventories and 9 existing item-level mismatches: `post-nrqmx-finite-mode-light-matter-model (5 vs computed 1)`, `def-nrqmx-finite-mode-g2-statistic (6 vs computed 2)`, `pthm-nrqmx-jaynes-cummings-blocks (6 vs computed 2)`, `pthm-nrqmx-beam-splitter-count-statistics (6 vs computed 2)`, `pthm-nrqmx-finite-mode-loss-channel (7 vs computed 2)`, `ex-nrqmx-jc-vacuum-rabi (7 vs computed 3)`, `ex-nrqmx-single-photon-antibunching (7 vs computed 3)`, `thm-qsmx-finite-mazur-bound (1 vs computed 2)`, `cex-qsmx-dc-order-of-limits (2 vs computed 3)`. The 51 empty page inventories are: `emx-waveguide-scattering-channels`, `emx-waveguide-scattering-channels-examples`, `emg-fx08`, `emg-fx08-examples`, `emg-fx13`, `emg-fx13-examples`, `gr-fx09-bootstrap-and-stability-boundaries`, `gr-fx09-bootstrap-and-stability-boundaries-examples`, `nrqmx-certified-spectral-computation`, `nrqmx-certified-spectral-computation-examples`, `qftx-anomaly-cocycles`, `qftx-anomaly-cocycles-examples`, `qftx-ribbon-braid-representations`, `qftx-ribbon-braid-representations-examples`, `qftx-modular-tqft-sewing`, `qftx-modular-tqft-sewing-examples`, `qftx-chern-simons-bf-gravity`, `qftx-chern-simons-bf-gravity-examples`, `qftx-kz-chiral-interface`, `qftx-kz-chiral-interface-examples`, `qftx-hall-bps-wall-crossing`, `qftx-hall-bps-wall-crossing-examples`, `qftx-categorified-line-operators`, `qftx-categorified-line-operators-examples`, `csm-frontier-critical-gaussian-rg`, `csm-frontier-critical-gaussian-rg-examples`, `csm-frontier-sampling-certificates`, `csm-frontier-sampling-certificates-examples`, `csm-frontier-inverse-gibbs`, `csm-frontier-inverse-gibbs-examples`, `csm-frontier-planar-critical-point`, `csm-frontier-planar-critical-point-examples`, `csm-frontier-rare-event-numerics`, `csm-frontier-rare-event-numerics-examples`, `qsmx-quantum-double`, `qsmx-quantum-double-examples`, `qsmx-quasifree-gases`, `qsmx-quasifree-gases-examples`, `qsmx-transverse-ising-spectral`, `qsmx-transverse-ising-spectral-examples`, `tgrx-focusing-boundary`, `tgrx-focusing-boundary-examples`, `tgrx-finite-code-holography-examples`, `tgrx-ads-effective-boundaries`, `tgrx-ads-effective-boundaries-examples`, `tgrx-topological-entropy-models`, `tgrx-topological-entropy-models-examples`, `tgrx-jt-disk-model`, `tgrx-jt-disk-model-examples`, `tgrx-research-boundaries`, `tgrx-research-boundaries-examples`.

The full `proof-contract-coverage` check has no batch selector and stops on the unrelated empty frontier page `qsmx-quantum-double`. The scoped strict contract check for this batch passes. The full `batch-dependency-levels.mjs check` reports a stale shared input hash after manifest authoring; in-memory recomputation still gives batch 65 level 2 with `requires: [60,64]`. The shared schedule remains for the owner/engine to refresh at the drained construction join.

All four assigned Step 1 decisions remain `escalated`, not ready. Their recorded reasons remain accurate, but their stored hashes are stale after final content and dependency-level corrections. I preserved the escalations and did not use `--owner` or overwrite them. The current carriers, contracts, pages, manifests, coverage, and cross-batch edge records are complete.
