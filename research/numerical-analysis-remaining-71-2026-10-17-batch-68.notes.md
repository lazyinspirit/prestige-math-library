# Batch 68 authoring notes — hp finite elements and spectral elements

Run: `numerical-analysis-remaining-71-2026-10-17`; beta pair PE28; assigned output is this pair's A/B pages and evidence only.

## Governing plan and schedule reconciliation

The complete PE28 design section in `research/plan-numerical-spatial-track.md` and the PE28 row in `research/plan-spec.json` agree on page scope and required page interfaces. The design controls the local inventory because its `plan-spec.json` item arrays are empty. No PE28 design/spec scope conflict was found. The page-level prerequisites remain `spectral-collocation-and-galerkin-methods` and `curved-mesh-geometry-and-conservative-mesh-transfer`; these are recorded separately in the cross-batch file.

The dispatch text says batch level 0, no prerequisite batches, input SHA-256 `f1819b29485b2043512238019ea3bc172fa639b9a2d88098d95381d9403cc3ec`. The current on-disk dependency-level input is SHA-256 `ddd75e28f0ea33f5486073233367b94c125995d901fed2c2c1de2449fcfdee3c` and assigns batch 68 level 3, requiring batch 63 (which itself requires batches 7, 15, and 54). This is a scheduling-input conflict, not an item-proof dependency; the batch dependency file was not edited. Item levels below are computed from in-run item dependencies, as required by the dependency-level checker.

## Inventory and item dependency levels

The exact 20-item inventory, local dependencies, and labels are in the batch manifest. Recomputed levels are:
- A page `hp-finite-elements-and-spectral-element-methods`: 16 inventory item(s), item levels 0–3.
  - Level 0: def-hp-integrated-legendre-projector, def-hp-variable-degree-spaces-on-matching-meshes, lem-legendre-gauss-lobatto-nodes-are-distinct, lem-reference-jacobi-weighted-endpoint-kernel, thm-hp-simplex-weighted-spectral-projection
  - Level 1: def-legendre-gauss-lobatto-rule-on-affine-boxes, lem-hp-corner-uniform-degree-dof-count, lem-variable-degree-polynomial-spaces-are-h1-conforming, thm-hp-analytic-p-convergence-on-fixed-tensor-mesh, thm-hp-reference-interval-integrated-legendre-projection, thm-hp-simplex-p-dependent-face-trace-inverse
  - Level 2: lem-hp-simplex-p-explicit-conforming-interpolant, thm-hp-galerkin-energy-error-on-fixed-mesh, thm-hp-gll-top-mode-and-puniform-energy-equivalence
  - Level 3: thm-hp-corner-exponential-energy-convergence, thm-hp-gll-strang-error-with-aliasing-defect
- B page `hp-finite-elements-and-spectral-element-methods-examples`: 4 inventory item(s), item levels 1–4.
  - Level 1: cex-hp-degree-independent-sipdg-penalty-loses-coercivity
  - Level 3: ex-hp-analytic-p-refinement-on-a-fixed-box, ex-hp-gll-mass-top-mode-correction
  - Level 4: ex-hp-reentrant-corner-h-versus-hp

The proof scope is explicitly affine. The paired page does not turn the plan-level curved-mesh prerequisite into an implicit hypothesis of any affine estimate. The A page identifies the missing p-explicit simplex approximation/variable-degree lift and the corner rate as authoring escalations; the B corner example proves only the local fixed-degree h lower bound.

## Supplier inspection and cross-batch status

The spectral-collocation page and relevant published Legendre/GLL suppliers are published and were inspected; this establishes page-edge availability, not independent approval. Batch 63's actual PE17 page, manifest, and actual draft bodies were inspected. The five relevant IDs are `def-isoparametric-curved-cell-map`, `def-curved-domain-geometry-approximation`, `lem-isoparametric-pullback-and-surface-metric`, `lem-isoparametric-laplace-tensor-defect`, and `thm-curved-isoparametric-strang-error-bound`. They specify C2 maps, orientation and positive Jacobians, derivative bounds, matching traces, common image topology, and separate positional/derivative geometry errors. They remain draft and unaccepted. No current batch-68 affine theorem uses them; the assigned page-level PE17 edge is left open for owner reconciliation.

## Source reading and resolution

Coverage records every inspected source locator and the named results harvested from it, with item-level dispositions. The A page uses independent textbook/monograph, course-note, and paper treatments; the B page uses independent course-note/monograph and paper treatments. Full texts inspected include Demkowicz, Vohralík, Guermond Chapters 11, 26, 27, and 32, Heltai Lecture 2, Schöberl Chapters 25 and 30, Braess–Schwab, Warburton–Hesthaven, Trefethen, Timmermans, and He–Houston–Schwab–Wihler. Fetch stamps are recorded by `source-fetch-check --stamp` in the coverage file. No source was dropped. A prior EPFL direct-download route returned HTTP 405; the complete Warburton–Hesthaven paper was recovered and inspected through the Infoscience API `/content` endpoint recorded in the item and coverage URLs. The recovery is not evidence that the source's mathematical result proves anything beyond its stated p-dependent inverse-trace claim.

The reviewed literature states but does not supply a complete derivation of the exact local simplex approximation plus degree-uniform variable-face lift needed by the assigned corner branch. Vohralík states Theorem 6.2.1 and says the further developments behind Theorem 6.3.1 are not detailed; Schöberl's triangle section states a p-stable extension but leaves major proof steps as exercises; Braess–Schwab's Theorem 3.3 concerns a weighted coefficient/derivative norm; Warburton–Hesthaven prove inverse traces only. The local weighted projection, trace inverse, and interval projector do not imply unweighted simplex approximation or the shared degree `p_F=min(p_K,p_K')` lift. Therefore `lem-hp-simplex-p-explicit-conforming-interpolant` remains escalated. He et al.'s corner theorem invokes prior hp approximation results and does not close the local proof; `thm-hp-corner-exponential-energy-convergence` remains escalated, not an open-problem designation.

## Axioms

Choice use is kept at the weakest declared strength. Countable Choice is explicit in the variable-degree H1 supplier (through its published Sobolev/finite-element supplier), the interval L1 fundamental-theorem branch, shape-regular simplex scaling, Céa, and first Strang. The analytic tensor theorem inherits Countable Choice only through the Riemann/Lebesgue integral supplier. The GLL top-mode identity, local quadrature norm equivalence, Jacobi endpoint kernel, tensor polynomial counting, and SIPDG witness are choice-free. No proof uses full Choice.

## Checks and readiness

Check outcomes are appended below after final scoped runs. Proof contracts cover only items with completed numbered arguments; the two unproved A-page target records receive no fabricated proof contracts. A ready record is withheld whenever a required supplier or proof remains unresolved. These authoring records are not independent mathematical approval.

## Final scoped check results

- `source-fetch-check --stamp`: 22/22 source entries fetched and stamped; 0 drops.
- `coverage-checklist`: 2 pages, 40 harvested results, 0 errors, 1 advisory warning. The B-page warning is 3/10 harvested results marked `included`; the remaining source results are deliberately inline/context, out of scope, or attached to the explicitly escalated corner comparison, rather than being represented as completed claims.
- `proof-contract --strict`: 18/18 proof-bearing or definition carriers checked; 42 derivations, exact linked excerpts, boundary dispositions, and applicable finite checks. The two no-proof A-page targets have no fabricated contracts. The corner example contract covers only its completed local h argument.
- `proof-layout`: 20 changed items, 42 numbered steps, 0 defects.
- `precheck`: 15 proof-bearing items, 0 failures.
- `rendercheck`: 22 assigned item/page files, passed after converting five multiline display blocks to single-source-line displays.
- `manifest-deps`: 20 items, every dependency array explicit.
- `content-policy`: 20 scoped items, 0 errors or warnings.
- `item-dependency-levels check`: 1,420 items across 142 pages, pass; maximum level 12.
- Focused `depcheck`: 20 assigned items; selected prerequisite closure covered 1,182 items and 278 pages; pass.
- Focused `extcheck`: 20 assigned items, 0 recorded-not-proved records or consequences.
- Step 1 records: 17 `ready`, 3 `escalated` (`lem-hp-simplex-p-explicit-conforming-interpolant`, `thm-hp-corner-exponential-energy-convergence`, and `ex-hp-reentrant-corner-h-versus-hp`). The last item has a complete local proof contract but remains escalated because its planned hp comparison depends on the two escalated A items.

These are authoring checks and readiness records; none is independent mathematical approval.

The final source-to-coverage audit matched every item bibliography URL to a source entry on its page. A/B page frontmatter lists match their assigned manifest item sets, every item frontmatter dependency list matches its manifest entry, and the A-page inventory remains below the 100-item cap.

The final read-only autopilot status reports the run is still active, with no batch in flight. Batch 68 is not among the remaining missing authoring batches; 60/71 are covered. Other batches and owner recertification remain outside this assignment, and the global Step 1 stage is still held for owner repair. No engine or run state was changed.

A read-only attempt to run the aggregate `frontier-dependency-ledger.collect` check is blocked by a pre-existing ownership mismatch in `research/numerical-analysis-remaining-71-2026-10-17-batch-11.cross-batch-dependencies.json`: it records `hierarchical-low-rank-matrices-and-error-propagation` as a batch-11 consumer, while the current manifest places that page in batch 16; three other batch-11 rows refer to current batch-17 consumers. No other batch was edited. The two batch-68 page-edge rows pass a direct scoped shape/ownership check: the PE17 supplier is batch 63 and remains open with the five exact unresolved interface IDs; the published spectral page edge is verified.

## Owner-directed continuation — current authoring result

This addendum supersedes the initial 20-item inventory, the initial proof/source counts, and the initial readiness summary above. It preserves those lines as the original native history. The combined owner direction and both complete PE28 research packets were followed; the original A/B pair remains in this 71-pair frontier, with no shared plan, published item, engine state, or verdict changed.

### Current carriers and dependency order

The current batch manifest contains 25 items: 21 on A and all 4 examples on B. The A and B page frontmatter inventories match the manifest exactly; the A page remains below its 100-item cap. Five same-A prerequisites were added before their consumers:

- Level 0: `lem-hp-triangle-degree-uniform-strong-edge-lift` (A local order 6), `lem-hp-unweighted-legendre-derivative-tail` (order 7), `lem-hp-analytic-polynomial-approximation-on-a-triangle` (order 8), and `lem-hp-weighted-analytic-corner-pointwise-control` (order 9).
- Level 1: `thm-hp-triangle-unweighted-smooth-approximation` (order 16).
- Level 2: `lem-hp-simplex-p-explicit-conforming-interpolant` (order 17) and `thm-hp-corner-exponential-energy-convergence` (order 20).
- Level 3: `ex-hp-reentrant-corner-h-versus-hp` on B.

The manifest dependencies match current item frontmatter. The mixed-derivative tensor proof explicitly allocates derivative orders so the total order never exceeds r; the ordinary rate retains its uncontrolled C_r. The edge extension claims only the proved strong H1 edge norm, and the corner proof uses direct weighted pointwise estimates plus the strong edge lift on singular caps; it assumes no cap-cell H2 regularity. The L-shaped mode verifies the local h lower bound and the global hp upper comparison with Dirichlet data only on the two edges ending at the reentrant corner. Two final proof corrections are recorded in the current carriers: the edge-norm sum uses 8A <= 16A, including A=0, and the two-block integration-by-parts identity in the Legendre orthogonality proof has the correct cancellation sign.

### Sources and source dispositions

The A page now has 16 full-text source entries and B has 7; all 23 are fetched and stamped, with no drops. The new primary textbook is Jie Shen and Tao Tang, *Spectral and High-Order Methods with Applications*, full §1.8 (printed pp. 61–67), fetched from `https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf` in one successful attempt (2,741,222 bytes, 332 PDF pages, SHA-256 prefix `2daf6957c79cdaab`). It supports the Legendre derivative/projection context and analytic approximation context; the exact ordinary factorial estimate and polynomial-mask proof are supplied locally. Schöberl §30.4.2 and the relevant complete Vohralík Chapter 6 notes were inspected for the edge lift, triangle assembly, and p-approximation context; their stated results are not treated as complete proofs. The complete He–Houston–Schwab–Wihler paper was inspected for the weighted class and corner rate; its proof imports prior approximation results, which are proved locally here.

Coverage now records 54 actual harvested results with item-level dispositions. `coverage-checklist --require-destination` has 0 errors and one honest advisory: 15/41 A-page results are scaffolded. B has 7/13 included and does not trigger an advisory. The remaining A-page source results are recorded as local inline derivations, scope distinctions, or out-of-scope source claims with specific reasons; I do not claim Alpha concurrence. The prior EPFL HTTP 405 and successful Infoscience API recovery remain in the earlier source history. No new retrieval failure occurred and no new `source_resolution` decision was needed.

### Readiness and owner handoff

`step1-decisions.mjs record` now records the five new prerequisite items as `ready`, with their exact direct dependency sets and evidence. Their item hashes were checked current. The three previously escalated records for `lem-hp-simplex-p-explicit-conforming-interpolant`, `thm-hp-corner-exponential-energy-convergence`, and `ex-hp-reentrant-corner-h-versus-hp` were not overwritten. Their current carriers, contracts, and consumers are now authored, but the original owner direction still requires the same reviewers' second/final actual-closure cycle in simplex-then-corner order. These author readiness records do not constitute independent review or acceptance.

The current batch-68 page-level cross-batch edge to the published spectral-collocation page is verified. The required curved-mesh page edge remains open, with exact unresolved supplier IDs `def-isoparametric-curved-cell-map`, `def-curved-domain-geometry-approximation`, `lem-isoparametric-pullback-and-surface-metric`, `lem-isoparametric-laplace-tensor-defect`, and `thm-curved-isoparametric-strang-error-bound`. This affects page-level readiness only: all current batch-68 mathematical claims remain explicitly affine and do not use those suppliers. The recorded dispatch/on-disk scheduling-level conflict in the initial notes remains unchanged; the shared dependency input was not edited.

The read-only autopilot status at 2026-10-17T15:28:24.587Z reports the run active, 69/71 batches covered, no active jobs, and `1-scaffold` still waiting for native refresh of batches 68 and 71. Artifact completion is still deferred until author coverage is complete and writers drain. The engine's owner-repair/recertification blocker remains; this authoring pass did not edit `.autopilot/` or trigger a transition. The original native result and prompt hashes recorded in the dispatch are preserved.

### Final scoped checks after the last proof edits

- `precheck`: all 8 changed items pass, 0 failures.
- `proof-layout`: 8 items, 39 steps, 0 defects.
- `rendercheck`: 8 changed items and both actual pages pass; renderer YAML and KaTeX checks pass.
- `proof-contract --strict`: all 25 manifest items checked, 0 errors or warnings. The 8 current proofs have exact supplier excerpts, per-step inputs, boundary cases, and applicable finite checks.
- `content-policy`: 25 items, 0 errors or warnings.
- Focused `depcheck` and `extcheck`: pass for all 8 changed items and their checked prerequisite closure.
- `manifest-deps`: 25 items, 0 normalized, 0 errors.
- `item-dependency-levels check`: all 1,448 run items across 142 pages pass, maximum level 12.
- `source-fetch-check`: 23/23 stamped and resolved, 0 documented drops.
- `coverage-checklist --require-destination`: 2 pages, 54 harvested results, 0 errors, 1 A-page low-yield advisory described above.

All results are authoring/mechanical evidence, not independent proof approval. No engine transition or publication was performed.
