# Batch 16 authoring notes — emg-fx01

## Scope and plan comparison

Owned pair: A page emg-fx01 (order 729) and B page emg-fx01-examples (order 730), category einstein-maxwell-models-mathematics, library mathematics. The optional run direction research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent.

The complete design section is research/plan-einstein-maxwell-models-frontier-expansion-track.md § “Conformal constraint weights and charged time-symmetric data”, lines 154–163; the detailed statements and routes are in research/frontier-expansion-2026-10-19/einstein-maxwell-models/prose-scaffold.md, § emg-fx01. Its three A interfaces and two B leaves are all authored. The canonical plan has the same page IDs, order, titles, category/library, A/B pairing and prerequisites (emg-cp01, emg-c01, emg-ms01; then emg-fx01), but leaves both items arrays empty as pre-authoring placeholders. This is an inventory-materialization difference, not a statement, hypothesis, or proof-route conflict. The shared plan-spec.json is unchanged.

The run’s existing Step-1 drift record reports no-drift for emg-fx01: the three page prerequisites match the canonical plan and are backward. That record is a prerequisite-closure check, not proof acceptance. The manifest initially had empty inventories; the authored manifest now records the planned three A items and two B examples.

## Inventory, dependencies, and levels

| Item | Page | In-run suppliers | dependency_level |
|---|---|---|---:|
| def-emg-fx-conformal-seed | A | none | 0 |
| lem-emg-fx-conformal-constraints | A | def-emg-fx-conformal-seed | 1 |
| prop-emg-fx-rn-isotropic-seed | A | seed definition and constraint lemma | 2 |
| cex-emg-fx-wrong-electric-weight | B | constraint lemma | 2 |
| ex-emg-fx-extremal-puncture-end | B | RN proposition | 3 |

Outside suppliers do not raise those item levels. The run batch-dependency evidence already places batch 16 at level 0; its page prerequisites are outside this run. The item dependency graph is acyclic and suppliers are authored before consumers within this pair. research/physics-non-fluid-129-2026-10-21-r2-batch-16.cross-batch-dependencies.json records the three page edges and six external item edges, one row per exact edge. Each verified row records only the scoped interface/hypothesis match, not independent proof approval.

The direct external item uses are:

- def-emg-constrained-electrovacuum-data: exact smooth spatial data, SI field types, constraints and units.
- def-emg-geometric-scaling: positive alpha and the exact alpha^2=kappa/(2 mu_0) coefficient conversion.
- thm-gr-constraint-equations-in-normal-frame: induced spatial curvature sign and positive-K constraint convention.
- def-emg-xs-rn-data: geometric RN mass/charge lengths and the standard areal-coordinate radial metric, used only on the exterior branch where f>0.

All are mathematical suppliers. Their inspected statements and actual proof/definition status remain as carried; no supplier is inferred proved from a draft label or pending precheck. The long published constraint-theorem proof and the local RN and normalization definitions were read in full. No unresolved hypothesis or proof prerequisite remains.

## Mathematical route and scope safeguards

The conformal definition fixes the types: bar E and bar B are contravariant vectors; bar A is a symmetric covariant trace-free two-tensor; tau and Lambda are scalars; psi is smooth and strictly positive. It distinguishes the geometric-normalized vectors from the inherited SI vectors and states their length-coordinate units.

The lemma derives, rather than cites as a black box, the determinant/divergence identity, electric and magnetic norm powers, covector cross-product weight, trace-free K norm, and three-dimensional scalar-curvature formula. It then substitutes into the inherited SI constraints and retains the transformed momentum equation as a separate obligation. It proves no elliptic existence or spacetime-development theorem.

The RN proposition uses exactly the positive domain of its square root, removes the puncture from the smooth manifold, and treats no delta-function charge. It verifies the radial Hamiltonian equation directly. In the m>|q| branch it proves the centered minimal sphere, its areal radius, both asymptotically Euclidean ends, and the standard RN exterior spatial metric only for r>r0; it makes no global horizon or maximal-extension claim. The B example separately handles m=|q|>0, proving an infinite proper-distance cylindrical end and positive mean curvature for every centered sphere. The B counterexample uses smooth data on all of Euclidean R3 and computes divergence 6 under the incorrect unscaled assignment.

## Source evidence

The full-text retrieval, search history, exact locators, item support, and all 13 harvested-result dispositions are in research/physics-non-fluid-129-2026-10-21-r2-batch-16.coverage.json and research/physics-non-fluid-129-2026-10-21-r2-batch-16-sources/source-reading.md. The two independent treatments are Alcubierre–Degollado–Salgado’s full paper and Gourgoulhon’s complete book-length lecture notes. The local SI/geometric normalization and curvature conventions are compared explicitly; no source is used in place of the item proofs.

Actual source-check result after the coverage file was written: source-fetch-check --stamp fetched and stamped 4/4 page/source entries; a subsequent check verified 4/4, with zero drops. coverage-checklist reported 2 pages, 13 harvested results, 0 errors and 0 warnings. No retrieval failure, recovery retry, source drop, or source-resolution escalation occurred.

## Readiness and scoped-check results

The current loadStep1Record snapshot initially showed no readiness records for these five new carriers. After the final content and manifest edits, step1-decisions.mjs record wrote each item as ready without --owner; a fresh step1Decision check returned ready/current for all five. The records bind the current carriers, direct dependencies, placement, and arguments. They do not assert independent acceptance.

Final scoped results:

- precheck.mts: 5 files, 4 proof-bearing items checked, 0 failures; the seed definition was not applicable to numbered proof formatting.
- proof-layout.mjs: 5 items, 20 numbered steps, 0 defects.
- proof-contract.mjs --strict: all 5 contracts checked, 0 errors and 0 warnings.
- content-policy.mjs: 5 assigned items, 0 errors and 0 warnings.
- Focused depcheck.mjs: all 5 assigned items and their 1,579-item dependency closure checked, 0 errors and 0 warnings.
- Scoped rendercheck.mjs: all 5 items and 2 pages checked, 0 errors and 0 warnings.
- Scoped physics-content check: 5 items and 2 pages, 0 errors.
- Scoped item-dependency-levels.mjs: levels 0, 1, 2, 3, 2 as tabulated above; 5 items, 0 errors.
- source-fetch-check: 4/4 entries fetch-verified; 0 drops. coverage-checklist: 2 pages, 13 harvested results, 0 errors and 0 warnings.
- Cross-batch dependency record: 9 exact edges, valid JSON array and valid row shapes.

The read-only current run graph computation found 129 batches, maximum level 5, and batch 16 at level 0 with no cross-batch suppliers. Its computed current input hash is bb680647da386a48dc8ca9c20ed12d3f348017fa48a7753bd4f60c3031745490. The existing run-level dependency-level receipt is stale because authoring changed manifest bytes; batch-dependency-levels.mjs check reports “Stale batch dependency levels”. The owner’s drained Step-1 join recomputes that shared receipt, so it was left untouched. The assigned item-level computation is current and passes.

No significant prerequisite gap, cycle, cross-batch change, or page-capacity problem was found or escalated.
