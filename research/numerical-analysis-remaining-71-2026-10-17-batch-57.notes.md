# Batch 57 authoring notes — boundary-integral equations and Galerkin BEM

Run `numerical-analysis-remaining-71-2026-10-17`; role beta; assigned pair `boundary-integral-equations-and-galerkin-bem` / `boundary-integral-equations-and-galerkin-bem-examples`. This is Step 1 authoring evidence, not independent review, acceptance, or publication.

## Controlling instructions and plan reconciliation

Read `CLAUDE.md`, the schema/workflow and beta scaffold instructions, the complete PE16 design at `research/plan-numerical-spatial-track.md` L1465–1493, `research/plan-spec.json`, the owner authoring direction, batch evidence, and `research/numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json` before constructing the carriers. The design and plan-spec agree on page IDs, order 2668/2669, category, companions, and required pages. No page-metadata conflict was found.

The assigned scheduling input SHA-256 is `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0f` (as supplied by the dispatch). Batch 57 is at scheduled dependency level 3, with prerequisite batches 19 and 26. This is separate from local item dependency levels, which range from 0 to 9. The A page has 26 items and the companion page has 5, both below the 100-item cap.

The companion page follows the PE16 example sequence: sphere constant density, sphere jump signs, reentrant edge, logarithmic circle scaling, and the two-by-two ledger. The sphere jump example follows its sphere potential supplier. The B-page `local_order` records design display order; actual in-run supplier bodies were authored and checked before consumers.

One design-level interface remains unavailable. PE16 says the Helmholtz combined-field extension consumes PE18 outgoing uniqueness. PE18 is at order 2682, after PE16, and its current batch-64 page inventory is empty; its page-level requirement points back to PE16. No PE18 item body exists to inspect. The CFIE carrier therefore states the exact compactness, outgoing uniqueness, mapping, and double-layer conormal hypotheses needed for its conditional proof, without adding a nonexistent `deps` or `forward_refs` entry and without claiming those hypotheses are supplied.

## Inventory and item dependency levels

Levels were recomputed with `dependencyLevels` on current manifests for batches 19, 26, and 57. The scoped graph has 71 items, no cycles or label errors; batch 57 has 31 items and maximum local item level 9.

| Local level | Batch 57 items |
|---:|---|
| 0 | `def-bem-lipschitz-polyhedral-boundary-and-trace-spaces`; `def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling`; `lem-bem-half-order-bessel-slobodeckij-equivalence`; `def-bem-newtonian-kernel-in-three-dimensions`; `lem-bem-plane-poisson-kernel-fourier-transform`; `def-bem-smooth-helmholtz-combined-field-operator` |
| 1 | `lem-bem-surface-fractional-norm-equivalence`; `lem-bem-lipschitz-trace-and-lifting`; `def-bem-surface-mesh-and-piecewise-constant-density-space`; `thm-bem-logarithmic-capacity-homothety-and-layer-scale`; `lem-bem-newtonian-kernel-is-fundamental-solution`; `thm-bem-helmholtz-layer-jumps-match-laplace-jumps`; `ex-bem-sphere-constant-density`; `ex-bem-polyhedral-reentrant-edge-singularity` |
| 2 | `lem-bem-exterior-energy-trace-bound`; `def-bem-laplace-layer-potentials-and-energy-spaces`; `lem-bem-p0-negative-half-order-approximation`; `thm-bem-combined-field-conditional-invertibility`; `ex-bem-logarithmic-capacity-and-scale-on-a-circle`; `ex-bem-sphere-jump-sign-orientation` |
| 3 | `def-bem-double-layer-transmission-space`; `thm-bem-single-layer-transmission-mapping-and-coercivity` |
| 4 | `thm-bem-double-layer-transmission-jumps-and-bounds`; `def-bem-calderon-boundary-operators`; `thm-bem-single-layer-galerkin-wellposed-and-quasioptimal` |
| 5 | `thm-bem-calderon-mapping-and-jump-identities`; `cor-bem-p0-galerkin-rate-for-h1-density` |
| 6 | `thm-bem-hypersingular-ellipticity-and-stabilized-formulation` |
| 7 | `alg-bem-certified-inexact-matrix-assembly` |
| 8 | `thm-bem-matrix-perturbation-transfer` |
| 9 | `ex-bem-inexact-assembly-error-ledger` |

New local A-page prerequisites are the half-order Bessel/Slobodeckij identity, surface chart/chordal norm equivalence, the plane Poisson multiplier, the exterior homogeneous-energy trace estimate, and the normalized Newton kernel/fundamental-solution pair. The P0 negative-half-order estimate is proved using the local surface norm equivalence, shape-regular element areas, element averages, and the published convex-domain Poincare–Wirtinger inequality.

## Cross-batch and published supplier checks

The full dependency record is `research/numerical-analysis-remaining-71-2026-10-17-batch-57.cross-batch-dependencies.json`.

- **Variational crimes / Strang.** Inspected the current published page and actual `thm-second-strang-lemma-for-nonconforming-galerkin`. The P0 method is conforming; the exact form/load are restricted to the discrete space, so its consistency defect is zero. The matrix-transfer theorem also uses this supplier as the exact Galerkin baseline.
- **Duffy quadrature, batch 26.** Inspected actual `thm-duffy-weak-singularity-transform`, `alg-duffy-weighted-product-gauss-quadrature`, and `cor-duffy-weighted-product-gauss-error`. The transform is for a reference-triangle vertex singularity $|z|^{-\alpha}$ with $\alpha<2$ and continuous amplitude; the stated quadrature error additionally requires the transformed amplitude derivatives through order $2n$. These bodies do not give a universal paired-panel self/edge singularity estimate.
- **3D Laplace FMM, batch 19.** Inspected actual `alg-three-dimensional-laplace-cluster-expansion` and `thm-three-dimensional-laplace-expansion-error-and-work`. They cover a finite point-charge source cluster and a target outside a source ball, with the uniform target-ball condition $R>a+b$. They do not prove a 3D multilevel or global $O(N)$ work theorem.

The BEM assembly carrier preserves both limits: it requires auditable per-pair near/far certificates, includes the quadrature residual separately, and returns `uncertified` if any pair lacks one. It does not use the Duffy supplier as a generic self-panel estimate or the single-cluster FMM result as a global complexity claim.

## Source reading and disposition

`research/numerical-analysis-remaining-71-2026-10-17-batch-57.coverage.json` records two independent full-text treatments and all 15 harvested results with dispositions, item destinations, locators, local caches, search history, and fetch stamps.

- Martin Costabel, *Boundary Integral Operators on Lipschitz Domains: Elementary Results* (1988): the complete scanned author-hosted article, printed pp. 613–626, was visually inspected page by page. The local cache is `research/numerical-analysis-remaining-71-2026-10-17-batch-57-source-cache/costabel-1988-lipschitz.pdf`. An initial browser PDF open timed out; an alternate direct fetch succeeded. The source’s 2D capacity-one invertibility exception is recorded `out-of-scope`: PE16’s 2D branch defines logarithmic capacity and proves its scale law, and no 2D coercivity theorem is inferred from the 3D energy proof.
- Francisco-Javier Sayas, *First Steps in the Boundary Element Method* (2015): the complete 51-page PDF was downloaded and the relevant full reasoning in Chapter 1 §§1.2–1.6 and Chapter 2 §§2.1–2.5 inspected. The local PDF and extracted text are listed in the coverage file.

`source-fetch-check --stamp` verified and newly stamped both URLs; the final check confirms 2/2 fetched and 2/2 resolved, with no documented drops. `citation-fidelity` checked 100 exact supplier excerpts: zero missing quotes and zero widening candidates. No unresolved retrieval failure requires a `source-resolution` record.

## Explicit escalations and proposed suppliers

These are authoring gaps, not claims that another item, source, or page has already supplied a result.

1. **Polyhedral-edge kernel representation.** `thm-bem-double-layer-transmission-jumps-and-bounds` proves the weak energy minimizer, mappings, common conormal, signed jump, and classical kernel agreement on the smooth face-interior core. It does not extend that kernel representation to facewise smooth densities reaching polyhedral edges. Proposed A-page supplier: `lem-bem-polyhedral-edge-kernel-representation`, after the trace/kernel prerequisites and before any claim of classical Calderon kernel realization. Required hypotheses and affected kernel claims are recorded in the item remark and cross-batch evidence.
2. **Helmholtz common conormal and operator extension.** `thm-bem-helmholtz-layer-jumps-match-laplace-jumps` proves the single-layer conormal jump and double-layer trace jump for smooth densities on a C2 surface. The double-layer conormal jump and bounded Sobolev extensions remain missing. Proposed A-page suppliers: `lem-bem-helmholtz-double-layer-conormal-jump` and `thm-bem-smooth-helmholtz-operator-compact-perturbation`.
3. **PE18 outgoing uniqueness.** Proposed PE18 A-page supplier: `thm-pe18-exterior-helmholtz-dirichlet-uniqueness`, with the declared outgoing condition and fixed-frequency hypotheses. PE18 currently has no item body. The combined-field theorem is conditional and records this exact missing page-level supplier.
4. **Panel-pair quadrature certificates.** Proposed A-page suppliers: `lem-bem-panel-pair-duffy-certificates` for coincident/edge-adjacent panels, and `lem-bem-far-panel-quadrature-residual` for separated smooth panel pairs. They must prove the exact reference-triangle decompositions, $\alpha<2$, transformed smoothness/derivative bounds, and separate quadrature residuals. The current assembly algorithm does not claim those certificates exist.

The 2D capacity exception is not used to infer a result outside the plan’s selected scaling branch. The sphere examples are direct calculations and do not claim the sphere belongs to the polyhedral theorem’s domain. The inexact two-by-two ledger is explicitly a finite algebraic illustration, not a matrix from an unreported mesh.

## Scoped checks and current run status

| Check | Result |
|---|---|
| Scoped item dependency levels | 71 items across batches 19/26/57; 0 cycles/errors; Batch 57 has 31 items, maximum local level 9. |
| `precheck.mts` | 31 files; 23 proof-bearing items checked; 0 failures/repairs. |
| `proof-layout.mjs` | 31 items, 70 numbered steps; 0 defects. |
| `proof-contract.mjs --strict` | 31/31 items; 0 errors/warnings. |
| `citation-fidelity.mjs --fail-on-missing-quote` | 100 citations; 0 missing quotes, 0 widening candidates. |
| Focused `depcheck` | 31 selected items, dependency closure checked; 0 errors/warnings/cycles. |
| `content-policy.mjs` | 31 scoped items; 0 errors/warnings. |
| `rendercheck.mjs` | 31 item files; 0 errors/warnings. |
| `coverage-checklist.mjs --require-destination` | 1 A page, 15 harvested results; 0 errors/warnings. |
| `source-fetch-check.mjs` | 2/2 sources fetch-verified and resolved. |
| `step1-decisions.mjs` | 31/31 records present; 27 `ready` records hash-valid and 4 `escalated`, all `owner:false`. After the double-layer proof repair, six dependent ready hashes were rechecked and refreshed against their current supplier bodies. Escalations are `thm-bem-double-layer-transmission-jumps-and-bounds`, `thm-bem-helmholtz-layer-jumps-match-laplace-jumps`, `thm-bem-combined-field-conditional-invertibility`, and `alg-bem-certified-inexact-matrix-assembly`. These are author readiness records, not review or publication approval. |

The latest on-disk autopilot status recomputation (2026-10-17T14:04:50Z) shows the run still `running` at `1-scaffold`, 63/71 covered, with missing units 25, 38, 41, 57, 60, 63, 69, and 71; native refresh is pending for 25, 38, 41, and 60, and no writers are in flight. The owner blocker remains in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`. At this check, the dispatch directory contained the batch-57 prompts but no successful batch-57 `.result.json`, so the live driver still counted 57 as missing even though its 31 authoring records are current. The owner blocker and missing dispatch record prevent a stage transition; no `.autopilot` state was changed by this batch. The latest repository commit remains `1780b937d6` (`Record checked format for published first Strang estimate`).

The final audit reran `precheck.mts` and `proof-layout.mjs` on the repaired double-layer theorem, strict proof contracts and citation fidelity across all 31 items, focused dependency/content/render checks, the full run dependency-level validator, coverage checklist, source fetch verification, and the 31-item readiness-hash audit. The repaired item passed format and layout; the 31-item contract, citation, and readiness audits reported zero errors/stale records. No shared plan, verdict, published item, or other pair was edited.


## Owner-requested batch 57 continuation

The single authorized continuation is batch-57-refresh-76cf9ec8-6ea9-4862-ba66-9f906b58ec1b. The original native result remains at research/numerical-analysis-remaining-71-2026-10-17-dispatch/beta-batch-57.result.json with its original SHA-256 c7b6566753084ae5c8b952d2b08519b905a6c3caa63fdfe16457068d35adbfa6; its successful author drain at 2026-10-17T14:05:09Z is preserved as history. That result did not materialize the two declared library pages. Both pages now exist with the actual current inventory: A page 37 items and B page five worked examples, below the page cap.

The controlling owner direction added stable-special-function-recurrences-and-certified-evaluation as an upstream PE18 interface for the four same-ID items moved from batch 64. The original plan-spec page requires list did not include this owner-added page requirement, so the earlier “no page-metadata conflict” finding is historical. The current batch-57 manifest and A-page prose name the added page, and the cross-batch input records the exact symbolic Bessel/radial interfaces checked. The current in-run page prerequisites are batches 19, 25, and 26; variational-crimes-and-strang-lemmas is a published interface with no batch owner. The four item bodies remain byte-identical to their owner-packet rehome snapshots. No batch-64 canonical file was edited.

The seven previously absent suppliers are now complete: lem-bem-polyhedral-edge-kernel-representation, lem-bem-smooth-trace-and-helmholtz-layer-extension, lem-bem-helmholtz-double-layer-conormal-jump, thm-bem-smooth-helmholtz-operator-compact-perturbation, thm-bem-exterior-helmholtz-dirichlet-uniqueness, lem-bem-panel-pair-duffy-certificates, and lem-bem-far-panel-quadrature-residual. Existing edge, smooth-Helmholtz, quadrature, and assembly consumers were integrated with their full local proofs. The panel pairing item now states both Axiom of Choice and Countable Choice, because its actual trace/layer supplier hypotheses require them; its finite sign-cell, pulling, radial, and geometry-certificate arguments remain choice-free. The panel rule is restricted to the 3D Laplace P0 single layer with physical kernel 1/(4πr), nested outward error budgets, and an explicit uncertified result when geometry/arithmetic inputs are absent. The FMM term retains strict R>a+b and the single-cluster work scope.

The original notes above recorded Sayas printed pp. 40–46 as Chapter 2 §2.5. Full-text inspection corrected this locator: these are Chapter 3 §§3.1–3.3, printed pp. 40–46. Current locators in lem-bem-exterior-energy-trace-bound, def-bem-laplace-layer-potentials-and-energy-spaces, and thm-bem-matrix-perturbation-transfer now use Chapter 3. The rehomed lem-pe18-outgoing-spherical-mode-expansion source field was required to remain byte-unchanged; its current coverage locator identifies the actually inspected Stefanov Appendix 1.1–1.2, printed pp. 69–70 (PDF pp. 73–76), so the carrier’s older item-level Appendix page range remains a precise locator reconciliation for the final reviewer.

Coverage records 29 harvested results and all source histories/dispositions. Costabel’s complete scanned article (printed pp. 613–626) and Sayas’s complete 51-page notes are the two independent principal treatments. Supplemental inspected bodies include Capel, DLMF, the 78-page Stefanov author-hosted mirror, O’Neil’s complete course notes as previously read for batch 19, and Imperial College §1.6 quadrature notes. source-fetch-check --stamp newly stamped the Imperial notes; the final gate reports 7/8 sources fetch-verified and 8/8 resolved, with one documented drop. The original Stefanov URL retains its six failed attempts and search record; the complete author-hosted mirror is active and stamped. No failed retrieval history was removed.

## Final scoped author checks and readiness

- precheck.mts: 42 files, 33 proof-bearing items, 0 failures.
- proof-layout.mjs: 42 items, 118 numbered steps, 0 defects.
- proof-contract.mjs --strict: 42/42, 0 errors or warnings; contracts quote current exact supplier sections and map every numbered step.
- citation-fidelity.mjs: 169 citations, 0 missing quotes and 0 widening candidates.
- Focused depcheck: 42 selected items; 0 errors, warnings, or dependency/page cycles.
- content-policy.mjs: 42 items; 0 errors or warnings.
- rendercheck.mjs: 44 files (42 items and both library pages); 0 errors.
- coverage-checklist.mjs: one A page, 29 harvested results; 0 errors or warnings.
- source-fetch-check.mjs: 7/8 fetched, 8/8 resolved, including one documented drop.
- item-dependency-levels.mjs check: 1,437 run items; 0 level/cycle errors; maximum run level 12. Batch 57 local item levels remain A-page maximum 9 and B-page maximum 10.
- step1-decisions.mjs check: batch 57 now has 34 current ready records and 8 escalated records. Twenty-seven prior ready records received current hash refreshes after the manifest was synchronized; seven new suppliers now have author-ready records. The eight pre-existing escalations were not overwritten: four same-ID PE18 rehomes, the PE16 double-layer jump/edge-representation/CFIE/assembly consumers. Their historical reasons still describe the earlier absent suppliers/pages. Construction is now present, but owner-directed sequential final reviewer cycles and root recertification remain due; author readiness is not proof acceptance.

The required run-wide batch-dependency-levels.mjs check was attempted and could not parse three concurrent batch-68 item frontmatters: lem-hp-triangle-degree-uniform-strong-edge-lift (line 21), lem-hp-unweighted-legendre-derivative-tail (line 26), and lem-hp-weighted-analytic-corner-pointwise-control (line 31) report “Nested mappings are not allowed in compact mappings.” These belong to batch 68 and were left untouched. No global dependency-level artifact or .autopilot state was written. Batch 57’s own item-level check and its declared cross-batch interfaces are complete; root owns the final run-wide recheck after all live batches drain.

The original native result, refresh request, and historical evidence remain intact. No published item, shared plan, engine state, verdict, batch-64 carrier, or other pair’s file was changed. The original reviewer still owns the required sequential final cycles edge → Helmholtz → panel, including the full affected-consumer closure.
