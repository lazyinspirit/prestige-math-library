# Batch 92 authoring notes

## Scope and plan comparison

This batch owns the A/B pair `csm-frontier-macroscopic-fluctuations` / `csm-frontier-macroscopic-fluctuations-examples`, order 881, in `classical-statistical-mechanics`. The task, complete design section in `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md` (lines 263–287), and `research/plan-spec.json` agree on page IDs, title, category, library, companion, order and the A-page prerequisites `csm-frontier-hydrodynamic-ssep` and `csm-frontier-large-deviation-ensembles`. The plan's two `items: []` fields are its pre-scaffold inventory, while the design specifies the authored statements and proof routes; this is an inventory-state difference, not a scope conflict. No shared plan was changed. The requested `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` is absent.

The design requires the SSEP convention `D=1`, mobility `chi(rho)=rho(1-rho)`, current covariance coefficient `2 chi` and resulting action coefficient `1/4`, smooth periodic fields bounded in `[epsilon,1-epsilon]`, an exact equilibrium reversal/quasi-potential result, and a finite boundary-driven nonlocality example. It explicitly says the action definition does not prove a microscopic dynamical LDP and lists exponential-martingale, superexponential-replacement and density/extension obligations for any such theorem. The authored action fixes the resulting continuum functional without asserting a microscopic covariance law or path-LDP; the theorem stays within the smooth strictly interior fixed-mean torus scope, and the B example is an exact two-site stationary calculation.

## Item inventory and dependency levels

Levels were checked from the run manifests and current item dependencies. Cross-batch suppliers are included in the run graph; imports outside this run do not raise an item level. The full run-wide item-level command still reports unrelated empty scaffold inventories and mismatched levels elsewhere; none of the seven batch-92 items has a scoped level error. Suppliers were authored before their in-batch consumers.

| Item | Level | In-run suppliers | Role |
| --- | ---: | --- | --- |
| `def-csm-frontier-ssep-current-action` | 0 | — | Define the normalized smooth periodic current action |
| `def-csm-frontier-bernoulli-relative-free-energy` | 0 | — | Define the relative Bernoulli functional; imports the logarithm definition |
| `def-csm-frontier-ssep-quasipotential` | 1 | action definition | Define the fixed-mean finite-horizon action infimum |
| `thm-csm-frontier-mft-reversal-identity` | 1 | action definition | Prove the exact endpoint action-reversal identity |
| `lem-csm-frontier-mft-small-action-bridge` | 2 | action definition; batch-91 heat-flow lemma (level 1) | Construct the smooth connector with action tending to zero |
| `thm-csm-frontier-equilibrium-quasipotential` | 3 | batch-92 bridge (level 2), quasi-potential definition (1), reversal identity (1), plus batch-91 heat-flow (1) | Prove the fixed-mean equilibrium identity |
| `ex-csm-frontier-mft-nonlocal-warning` | 0 | — | Prove the exact two-site open-SSEP covariance example |

The definitions are on the A page before the reversal theorem, bridge lemma and equilibrium theorem. The B item has no supplier in this batch and is a leaf. The manifest, item frontmatter and page inventories agree on six A-page items and one B-page item, all below the 100-item page cap, with matching dependency metadata.

## Supplier interfaces and readiness

The batch-91 SSEP model was read in full for the unordered bond-rate `N^2`, row-generator and diffusive `D=1` conventions. The complete current heat-flow statement and proof were also read, as were the weak heat-solution definition, AC-omega definition, Fourier-coefficient definition and Fourier-basis/Parseval result used by that proof. The assigned bridge uses the actual smooth-data Fourier heat profile, heat equation, range and mass preservation; it proves its own `C^infinity` decay and connector estimate. The equilibrium theorem uses the same heat-flow hypotheses and the separate local action-reversal identity. Current `loadStep1Record` / `step1Decision` checks show the batch-91 model and heat-flow records are closed `ready`; their draft status and pending independent review are not treated as missing arguments.

For the batch-88 page prerequisite, the current finite-alphabet mean-field definition, compact Laplace/tilt theorem, supporting-lines theorem, Curie-Weiss theorem and B example were inspected at their actual statements and proofs. They concern static finite-alphabet equilibrium ensembles; no assigned item imports them as an SSEP dynamical path-LDP supplier. Their current Step-1 records are closed `ready`. The supporting-lines theorem's finite-alphabet assumptions are not transferred to the continuum torus result. Page and item interface checks are recorded in `batch-92.cross-batch-dependencies.json`; `verified` records only the scoped interface check, not independent proof approval.

## Source reading and limits

Two independent full-text treatments were inspected for the A page, including full lecture notes. Both PDFs were fetched in full and their retained fetch stamps pass `source-fetch-check` check mode. No retrieval failed, no recovery retry was needed, no source was dropped, and `source_resolution` remains empty. Section-level reads, per-result dispositions and retrieval history are recorded in `batch-92.coverage.json`.

| Source and locator | Harvested results and disposition |
| --- | --- |
| Bertini, De Sole, Gabrielli, Jona-Lasinio and Landim, *Macroscopic fluctuation theory*, [arXiv:1404.6466](https://arxiv.org/pdf/1404.6466), §§II.1–II.3, IV.1, V.A and V.D (46-page full-text PDF) | Diffusive action and SSEP coefficient convention — included in `def-csm-frontier-ssep-current-action`; time reversal — included in `thm-csm-frontier-mft-reversal-identity`; variational action/free-energy formulation — included across `def-csm-frontier-ssep-quasipotential` and `def-csm-frontier-bernoulli-relative-free-energy`; equilibrium reverse relaxation — included in `thm-csm-frontier-equilibrium-quasipotential`; boundary-driven nonlocality — inline in the B example with an independent finite-chain proof. |
| Bernard Derrida, *Lecture notes on large deviations in non-equilibrium diffusive systems*, [arXiv:2505.15618](https://arxiv.org/pdf/2505.15618), §§8.1–9, 10.2, 11, 13.1–13.2 and 14.1 (53-page full-text lecture-note PDF) | SSEP diffusion/mobility coefficients and current action — included in the action definition; general saddle-path large-deviation formalism — out of scope with the explicit reason in coverage; equilibrium Bernoulli density functional — included in `def-csm-frontier-bernoulli-relative-free-energy`; reverse diffusive relaxation — included in the bridge lemma; open-SSEP correlations/nonlocality — inline in the B example. |

The review's formal MFT saddle-path construction and the lecture notes' broader large-deviation formalism are not promoted to a proved microscopic SSEP path-space LDP. Experimental observations are not used. The displayed two-site covariance is a deduction from the finite generator, not a measurement.

## Cross-batch dependencies and run-level blockers

`batch-92.cross-batch-dependencies.json` records the two required page edges to batches 91 and 88 and the two direct heat-flow item edges to batch 91. All four rows are `verified` on the scoped evidence described above.

The stored batch-dependency snapshot records batch 92 at level 2 with `requires: ["88", "91"]`. The batch-92 page prerequisites and item dependencies reproduce those direct edges. Recomputing the full run through `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` currently stops at `Duplicate item undefined`: an unrelated batch-89 manifest has bare-string item entries, which the current run snapshot loader reads as missing IDs. The batch-92 row itself is unchanged and agrees with the recorded graph; do not repair batch 89 or rewrite the shared snapshot from this dispatch.

The full `item-dependency-levels.mjs check --run ...` likewise fails only outside this batch, on other pages' empty scaffold inventories and existing level mismatches (including NRQMX and QSMX items). A batch-92 scoped calculation matched all seven manifest levels exactly and reported no scoped dependency cycle or level error.

## Final scoped checks and readiness

- Normative proof precheck: 7 assigned items, 4 proof-bearing items passed and 3 definitions were not applicable; 0 failures.
- Strict proof contracts: 7/7 items, 0 errors, 0 warnings.
- `proof-layout` on all seven explicitly authored items: 21 steps, 0 defects.
- `rendercheck` on seven items and both pages: 9 files, 0 errors, 0 warnings.
- Coverage checklist: 1 A page, 11 harvested source results, 0 errors, 0 warnings.
- Source fetch check: 2/2 full-text sources fetch-verified; check-only run passed.
- Manifest dependency check: 7 items, 0 missing dependency arrays, 0 errors.
- Content policy, manifest-only/authored and normal authored modes: 7 items, 0 errors, 0 warnings in each mode.
- Selected dependency/cycle closure check: passed.
- Scoped item dependency calculation: all seven stored levels equal the computed levels (0, 0, 1, 1, 2, 3, 0); no scoped errors.
- Scoped batch dependency row: level 2, requiring batches 88 and 91; full-run recomputation is blocked by the unrelated batch-89 malformed inventory noted above.

The final item readiness records are recorded separately under the run's `step1-<item>.json` files and state the examined direct dependencies. Readiness means authoring prerequisites were checked; it is not independent proof approval. No tests were run.
