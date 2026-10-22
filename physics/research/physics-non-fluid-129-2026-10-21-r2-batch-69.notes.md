# Batch 69 — Step 1 authoring and dependency notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `69`  
Pair: `qftx-reflection-positive-limits` / `qftx-reflection-positive-limits-examples`  
Authoring date: 2026-10-21

## Plan and design reconciliation

The assigned track section and the canonical plan agree on page IDs, titles, category, mathematics library, A/B order, page prerequisites, and the three planned A items plus one B counterexample. `plan-spec.json` has empty item arrays at its preauthoring stage; the detailed track and its prose scaffold supply the item inventory used here. This inventory-shape difference is recorded, not treated as a claim conflict. The A page adds `lem-qftx-tempered-tensor-products`, a local mathematical supplier required to make the free covariance's finite tensor-product moments tempered on Schwartz test spaces.

The design distinguishes ordinary positivity, reflection positivity, fixed-order distributional limits, clustering, and corrected OS regularity. The authored limit proposition proves only finite fixed-test positivity and fixed continuous symmetry passage. The local factorial-order seminorm bound in the data definition is an explicit comparison record; it is not identified with an OS-II hypothesis. No item claims construction of an OS null quotient, a translation semigroup or generator, analytic continuation, locality, the spectrum condition, or a reconstructed field.

## Supplier interfaces and dependency levels

The A-page prerequisites `qft-ir02` and `qft-mc02` are current published pages. I inspected the positive-tempered-moment definition, the finite Gaussian-law definition, the Gaussian Wick-moment lemma, and the full tempered-field reconstruction statement and proof. The QFT suppliers use ordinary star positivity and do not establish OS reflection positivity or reconstruction. The finite Gaussian law and Wick-moment suppliers explicitly require the full Axiom of Choice; that hypothesis is carried in the free covariance proposition. The reconstruction item was inspected but is not used as a premise. Root mathematical originals and imported mathematics were read in place and left unchanged.

| Item | Direct in-batch suppliers | Computed level | Placement |
|---|---|---:|---|
| `lem-qftx-tempered-tensor-products` | none | 0 | A |
| `def-qftx-euclidean-limit-data` | none | 0 | A |
| `prop-qftx-reflection-positivity-limit` | `def-qftx-euclidean-limit-data` | 1 | A |
| `prop-qftx-free-euclidean-reflection-positive` | `def-qftx-euclidean-limit-data`, `lem-qftx-tempered-tensor-products` | 1 | A |
| `cex-qftx-positive-not-reflection-positive` | `def-qftx-euclidean-limit-data` | 1 | B |

The batch is level 0 with no in-run batch prerequisites. The exact A/B inventory and each direct item dependency are in the batch manifest. The local five-item dependency calculation has no cycles and matches every declared level. The required run-wide `item-dependency-levels` command exits nonzero because 190 other run pages still have empty scaffold inventories; it reports no batch-69 item-level error. The run-wide `batch-dependency-levels check` reports its scheduling snapshot stale after the authored manifest changed. I left that shared scheduling file untouched; the recorded batch-69 row remains level 0 with `requires: []`, and the owner needs to refresh the run-wide derived snapshot.

`qft-ir02` and `qft-mc02` are outside this run's batch manifests, so there are no cross-batch edges in this batch. `physics-non-fluid-129-2026-10-21-r2-batch-69.cross-batch-dependencies.json` is the required empty JSON array. External page and item interfaces, including their published status and full-Choice hypotheses, are recorded here rather than as unsupported cross-batch review rows. Both pages remain below the 100-item cap: four A items and one B example.

## Source reading, retrieval and coverage

`physics-non-fluid-129-2026-10-21-r2-batch-69.coverage.json` records source URLs, exact locators, source-reading ranges, per-heading dispositions, supported items, source-resolution searches, and each item's argument and direct dependencies.

- Neeb and Ólafsson, *Reflection Positivity—A Representation Theoretic Perspective*: the complete 136-page monograph was inspected, including the reflection-positive form and quotient/semigroup discussion and §§2.4.3(a), 2.4.5–2.4.7. It supports the positive-time exponential factorization and massive resolvent comparison. Reconstruction material remains an explicit future obligation.
- Summers, *A Perspective on Constructive Quantum Field Theory*: the complete 60-page survey was inspected, including §3's Schwinger-function, measure, reflection-positivity, clustering, growth, and reconstruction-warning discussion.
- Jaffe, *Constructive Quantum Field Theory*: the complete 16-page review was inspected, including §4, equations (8)–(9), and its cutoff-limit qualification.
- Dyatlov, *Lecture Notes for 18.155*: the complete 266-page notes were inspected, including §7.1, Theorem 7.1, and §11.1, Exercise 11.5(b). The exercise is not treated as a proof; the new tensor-product lemma supplies the global Schwartz-seminorm argument.

`source-fetch-check --stamp` fetched and verified all four active full-text PDFs; the final check reports 4/4 fetch-verified and zero documented drops. The direct Project Euclid OS-I/OS-II publisher routes returned anti-bot/iframe or HTML retrieval failures; those attempts and follow-up searches are recorded in `source_resolution`. No fetch stamp is claimed for those routes. The inaccessible papers are not active item sources or logical suppliers: the complete current reflection-positivity and limit arguments are supplied locally and supported by the four read alternatives. No mathematical result is marked dropped.

The exact corrected OS-II growth estimate and full reconstruction remain a significant future authoring obligation from the design; this is recorded as an owner escalation in the coverage `source_resolution`. No current item depends on or claims them. If the owner promotes reconstruction into scope, inspect Osterwalder–Schrader II (1975), §§I and III–VI, as the primary corrected-version source, with the already-read Neeb–Ólafsson Chapter 1 and Summers §3 as supporting treatments. The official Project Euclid route remains unavailable as inspectable full text, so it is only a proposed supplier and has no fetch stamp. Add a separate A theorem after `def-qftx-euclidean-limit-data` (or a dedicated reconstruction page if the complete argument does not fit), state the exact corrected theorem and test-space/growth conventions, and supply a complete proof. The current definition's comparison bound must not be used as that supplier. This future gap does not block any of the five present claims or readiness records.

## Authoring and checks

The A/B pages, five item files, manifest, proof contracts, coverage, notes, and cross-batch dependency array are consistent. The B counterexample uses an exact four-point probability law; no measurement or empirical claim is made. The free covariance proof constructs a tempered Schwinger moment hierarchy and proves polynomial reflection positivity; it does not assert a probability measure on distribution space.

- Scoped normative precheck: four proof-bearing items checked, zero failures; the definition is not applicable.
- Explicit-item proof-layout: five items, 12 proof steps, zero defects.
- Scoped rendercheck: five items and two pages, no YAML or KaTeX errors.
- Scoped content-policy: five items, zero errors or warnings.
- Focused `depcheck`: zero errors or warnings; all 1,571 reached dependency items and 217 dependency pages passed.
- Focused `extcheck`: five items, zero unproved references or errors.
- Strict proof-contract check: five items, zero errors or warnings. All standard boundary cases are recorded; no finite-smoke check applies. The finite counterexample arithmetic is documented in its manual model obligation.
- Coverage checklist: one A page, 12 harvested results, zero errors or warnings.
- Source-fetch check: four of four active sources fetch-verified.
- Batch-69 item graph: levels 0/0/1/1/1 as listed above, no cycles. The run-wide item-level and batch-level limitations are recorded above and left for the owner because they involve other unfinished batches and shared scheduling metadata.

Step 1 readiness records for all five owned items are `ready`. They bind each item's current direct dependency IDs and local placement; these records are authoring-readiness evidence, not independent proof approval.
