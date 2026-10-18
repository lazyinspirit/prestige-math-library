# Batch 70 authoring notes

Run non-ml-math-remaining-81-2026-10-18; role beta; assigned pair PA-39.
The assignment supplied scheduling input 825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042. The active run remains at Step 1. No published item, shared plan, verdict, or .autopilot/ state was edited.

## Plan reconciliation

- The task, plan-spec.json, the assigned manifest, and PA-39 in plan-physics-algebras-track.md agree on both page IDs, category, order, title, and the page-level requires route to hopf-hecke-and-quantum-symmetry-interfaces.
- The plan's PA-39 source scope has three obligations: ordered-group unequal-parameter KL construction; left/right/two-sided cell quotients in a proved regime; and a modular basic-set connection under finite-Weyl hypotheses. The carriers preserve that scope. They do not assert positivity, semisimplicity or irreducible classification for arbitrary unequal parameters, and rem-general-unequal-parameter-cell-conjectures-are-regime-dependent records the boundedness convention and the conjectural status of P1–P15.
- The PA-39 historical placement record has empty item arrays, and the opening of plan-physics-algebras-track.md says no items were minted during the 2026-10-17 splice. That is the historical page-placement stage. The current Step-1 assignment and owner direction require the actual missing math authoring. The itemless plan record did not specify local item IDs, so the assigned manifest now records the necessary local definitions, intermediate theorem, proofs, and finite examples.
- plan-spec.json agrees with the assigned pages and requires metadata. No shared plan or original design file was edited.

## Inventory, dependencies, and levels

The manifest was completed before carrier authoring and now has 13 A-page items and 2 B-page examples. The full direct deps arrays are in non-ml-math-remaining-81-2026-10-18-batch-70.pages.json; the in-run dependency chain and recomputed item levels are:

| Level | Items | In-run suppliers |
|---:|---|---|
| 0 | def-arbitrary-rank-coxeter-system-and-bruhat-order; def-canonical-basic-set-for-hecke-specialization; def-schur-elements-from-a-symmetrizing-trace; rem-general-unequal-parameter-cell-conjectures-are-regime-dependent | none |
| 1 | def-unequal-parameter-weight-function-and-coefficient-order; thm-arbitrary-rank-finite-parabolics-and-bruhat-subword | weight definition and arbitrary-rank Coxeter definition, respectively |
| 2 | lem-simple-generator-weights-extend-to-a-weight-function; def-unequal-parameter-coxeter-hecke-algebra | both depend on the level-1 weight/Coxeter interfaces |
| 3 | lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity | level-2 simple-weight lemma and Hecke definition |
| 4 | thm-unequal-parameter-kazhdan-lusztig-basis | level-3 standard-basis/bar lemma |
| 5 | def-unequal-parameter-cells-and-cell-quotients | level-4 KL basis |
| 6 | thm-unequal-parameter-cell-quotients-are-modules; ex-b2-unequal-parameter-kl-basis-and-cell-edges | the module theorem depends on the level-5 cell definition; B2 example depends on the level-5 cell convention |
| 7 | thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set; cex-modular-specialization-collapses-unequal-parameter-cell-labels | A1×A1 theorem and modular counterexample depend on the level-6 cell-module theorem |

The item graph is acyclic, under the 100-item cap per page, and matches the manifest. The level calculation is zero without in-run suppliers and otherwise one plus their maximum. The new arbitrary-rank parabolic/subword theorem uses finite normal-closure support and published finite-generator results; it does not assume the geometric representation is faithful.

## Cross-batch interface

The declared page route is recorded in non-ml-math-remaining-81-2026-10-18-batch-70.cross-batch-dependencies.json. I inspected the current PA-33 page and the actual batch-64 bodies of def-hh-rational-spectral-r-matrix and lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter. The PA-33 page and both new carriers are drafts. Their finite-dimensional spectral R-matrix and Yang–Baxter claims supply no premise to any PA-39 item. Batch 70 uses published Coxeter, Hecke-basis, and Bruhat suppliers instead. No PA-39 item-level supplier remains unresolved; the page-reading route remains unaccepted, and no acceptance is inferred.

The original dispatch input hash above differs from the latest stored run-wide batch-dependency-levels.json input hash observed during final audit: 825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042 versus 5b660437ff2af54b535a540c160e388767c35cc9176ba0f032f335e8f61d5bfe (an earlier audit snapshot was bf938b0fc1b06e93ab63e655a31a9ea4fd0208b0f29287b15cdb4d1bb99462f2). I left that generated shared artifact untouched. Its stored record still assigns batch 70 level 2 with prerequisite batch 64. The recomputation check is currently blocked by malformed YAML in a live input ("Nested mappings are not allowed in compact mappings" at line 17, column 14, near the Yury Polyanskiy and Yihong Wu source title); the batch-70 item-level graph above was independently recomputed from the full run manifests and has no batch-local errors.

## Sources

The complete relevant source text was inspected for Lusztig's revised Hecke Algebras with Unequal Parameters (§§3–5, 8, 13–14), Geck's Modular Representations of Hecke Algebras (§4.1), and Björner–Brenti's Combinatorics of Coxeter Groups (Chapter 1, §§1.4–1.5 and Chapter 2, §§2.1–2.2). URLs, locators, supported items, dispositions, fetch stamps, and hashes are in non-ml-math-remaining-81-2026-10-18-batch-70.coverage.json.

source-fetch-check --stamp returned 6/6 source records fetch-verified and 6/6 resolved, with six new stamps and zero documented drops. No retrieval failed, so no recovery retry or source_resolution entry was needed. Source stamps record retrieval and inspection; they do not certify proof acceptance.

## Proof and example scope

- The arbitrary-rank weight lemma proves both directions of the odd-edge criterion. The weighted Hecke standard basis and bar support are extended from finite generator support. The KL theorem proves the ordered-group triangular construction for positive, zero, and negative simple weights.
- The cell theorem proves the lower spans are ideals and the cell quotients are well-defined modules/bimodules with bases exactly indexed by their cells. It establishes none of Lusztig's P1–P15.
- The A1×A1 finite Weyl theorem computes four singleton cells, four stable rank-one lattices, and an identity decomposition matrix for O=Z_p, v=1+p, and odd p. It checks Geck's exact nonzero-Schur-element condition directly. The B page's characteristic-two example proves only that four distinct generic cell labels can collapse to the unique special simple; it makes no basic-set nonexistence claim.
- The B2 proof verifies the eight-element dihedral group directly from its presentation by an explicit square-symmetry representation, then fixes the Coxeter edge label and the direction/meaning of the four displayed left-preorder arrows. Its equations establish only the displayed transitions and do not claim a complete cell classification.

Eight proof-bearing items have contracts in non-ml-math-remaining-81-2026-10-18-batch-70.proof-contracts.json. The final contract audit matches every proof fact use and step input, quotes the exact supplier sections, anchors checked boundary cases to proof steps, and records applicable finite calculations.

## Scoped checks and readiness

- content-policy on the batch manifest: 15 items, 0 errors, 0 warnings.
- Focused depcheck on the 15 batch IDs: 0 errors, 0 warnings; 948-item prerequisite closure, 122 prerequisite pages.
- proof-layout on the 15 assigned items: 41 phase steps, 0 defects.
- precheck on the 8 proof-bearing items: 8 checked, 0 failures.
- local proof-contract audit: 8 proof-bearing items, 0 errors or warnings.
- rendercheck on the 15 items and 2 pages: 17 files, 0 errors, 0 warnings.
- Computed item dependency levels for all run manifests, checking batch 70 labels: 15 assigned items, 0 batch-local errors.
- All 15 Step-1 records are ready with owner:false and their direct dependency lists; five stale hashes were refreshed after final proof edits. A focused step1Decision audit confirms 15/15 current and closed. These records document authoring readiness, not independent approval.

The whole-run checks remain open in the shared frontier. The latest item-dependency-levels.mjs check reports 129 errors (19 empty inventories, 92 level mismatches, and 18 invalid or missing labels); none names a batch-70 item. batch-dependency-levels.mjs check is blocked before hash comparison by the malformed YAML input recorded above. proof-contract-coverage.mjs cannot resolve the unrelated frontier item lem-parallel-awgn-cost-constrained-achievability, so it has no run-wide result; the batch-local contract audit passes all eight proof-bearing items. The latest full Step-1 audit has 1,264 run items, 862 ready, 402 open item records, and 421 empty page inventories. No out-of-scope page or record was changed.
