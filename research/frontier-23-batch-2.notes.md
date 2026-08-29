# Frontier 23, batch 2 — Beta scaffold notes

## Batch result

This scaffold contains 70 planned items: 18 on `complexification-realification-and-real-structures`, 11 on its B page, 28 on `exterior-powers-orientation-and-hodge-duality`, and 13 on its B page. Both A pages are below the 60-item ceiling, so **no split is proposed**.

The coverage harvest records 59 harvested results across the two A pages. The complexification page uses two independent external treatments: Keith Conrad's UConn notes as the primary treatment and Troshkin's expository survey post for the real-structure side. The exterior-power page uses three treatments: Conrad for the quotient/functorial/exterior-algebra core, Sjamaar for orientation and Hodge star, and Chern for interior products. Two rows are intentionally `already-published`: the tensor-square-of-`\\mathbb C` example already on disk, and the existing characteristic-two witness separating alternation from the unsafe sign-only rule.

## Proposed A-page summaries

### `complexification-realification-and-real-structures`

This page introduces complexification as `\\mathbb C\\otimes_{\\mathbb R}V`, its concrete model `V\\oplus iV`, and realification by restriction of scalars. It proves the universal property, functoriality, the basis and dimension formulas, and the preservation of kernels, images, rank, nullity, and short exact sequences.

It then introduces conjugations and fixed real forms. From there it reconstructs a complex space from the fixed points of a conjugation, identifies real forms with conjugations, characterizes the complex-linear maps that descend to a chosen real form, and closes with the finite-dimensional operator consequences: unchanged characteristic and minimal polynomials, conjugate-paired nonreal generalized eigenspaces, and the invariant real two-plane from one nonreal eigenvector.

### `exterior-powers-orientation-and-hodge-duality`

This page builds `\\Lambda^kV` from the tensor power quotient, proves its universal property, identifies the basis wedges, derives the dimension and vanishing formulas, and shows that a pure wedge is nonzero exactly for independent vectors. It then assembles the graded exterior algebra, its functoriality, the signed-minor matrix formula for `\\Lambda^kT`, and the determinant action on top exterior power.

The second half uses a finite-dimensional real inner product to define the Gram pairing on exterior powers, the oriented unit volume form, and the Hodge star. It proves positive definiteness, the orthonormal-basis formula, the `\\star^2` sign, the adjoint interior product, the graded anticommutation identity, and the recovery of the cross product in oriented Euclidean three-space.

## Step-4 splice note

The design sections and `research/plan-spec.json` still agree on both page ids, orders, and declared prerequisites. The Alpha step-3 closure audit showed that the earlier batch note overstated the only live closure defect.

For `complexification-realification-and-real-structures`, the current manifest repair is the single extra backward prerequisite `diagonalisation-and-the-minimal-polynomial`. That one edge closes the operator tail named in the review:

- `thm-characteristic-and-minimal-polynomials-survive-complexification` cites the published minimal-polynomial field-extension machinery.
- `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs` cites the published generalized-eigenspace definition.

The earlier three-edge request was too broad. `tensor-products-of-modules` already reaches the field-extension and linear-map suppliers that the first draft listed separately, and `diagonalisation-and-the-minimal-polynomial` already pulls in the characteristic-polynomial page transitively. This fix pass does not edit `research/plan-spec.json`; it records the current scaffold bytes only.

For `exterior-powers-orientation-and-hodge-duality`, no page-level prerequisite amendment is proposed. The only step-3 defect there was local to `cor-cross-product-is-hodge-star-of-the-wedge`, and the current manifest already repairs it by keeping that corollary inside the page's own Hodge-star and interior-product closure instead of depending on the later surface page.

## Source ledger and harvest rationale

### Complexification, realification and real structures

- Keith Conrad, *Complexification*: <https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf>. Read at Sections 2-4, including Definition 2.1, Theorems 2.4, 2.6, 2.7, 2.9, Corollary 2.10, and Theorem 2.11. This is the primary source for the direct-sum model, the tensor model, the universal property, complexified maps, and the coordinate consequences for kernels, images, and matrices.
- Mikhail Troshkin, *Real-complex linear algebra and abelian varieties*: <https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/>. Read at the section `Complex and real structures`, stopping before `Bilinear and Hermitian forms`. This supplied the explicit realification/conjugation/fixed-real-form viewpoint and the warning that real-form data is extra structure.

The operator-polynomial and conjugate-eigenspace rows are recorded as canonical syntheses because they are standard consequences of the harvested complexification machinery plus opened published dependencies already on disk. The tensor-square row is deliberately `already-published`: the design explicitly told this page to cite the existing split example instead of duplicating it.

### Exterior powers, orientation and Hodge duality

- Keith Conrad, *Exterior Powers*: <https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf>. Read at Sections 2-8 and 10, skipping the torsion-module application in Section 9. This is the primary source for alternating maps, the quotient construction of exterior powers, basis wedges, functoriality, determinant/minor formulas, wedge products, and the exterior algebra.
- Reyer Sjamaar, *Manifolds and Differential Forms*: <https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf>. Read at Chapter 2 `The Hodge star operator` and `div, grad and curl`, Chapter 3 `Determinants`, and Chapter 8 `n-Dimensional volume`, `Orientations`, and `Volume forms`, with the table of contents opened first. This is the primary source for the orientation/Hodge half and also satisfies the dispatch requirement of a harvestable full lecture-note set with TOC.
- Albert Chern, *Geometric Fluid Dynamics notes*: <https://cseweb.ucsd.edu/~alchern/notes/GeometricFluidDynamics/>. Read at the section `Interior Products`. This supplies the explicit interior-product viewpoint and its graded derivation rule.

The characteristic-two witness is not re-minted because `cex-antisymmetric-need-not-be-alternating-in-characteristic-two` already exists on disk. The coverage row keeps it visible as `already-published`, which is the honest non-duplicating disposition. The other canonical rows record standard consequences that the sources motivate but do not isolate under their own headings.

## Convention decisions

- The tensor product in complexification is always over `\\mathbb R`. This is explicit in the page titles, item titles, and source ledger.
- A complex vector space has no preferred real form unless a conjugation is specified. The B page carries the corresponding false statement and witness.
- Every map in this batch is labeled real-linear, complex-linear, or conjugate-linear. The page should not rely on unqualified “linear” once both scalar fields are in play.
- The exterior page works over arbitrary fields until orientation, Gram pairings, Hodge star, and the cross-product recovery. Those latter items are restricted to finite-dimensional real inner-product spaces exactly as the design requires.
- Characteristic-two behavior is handled through alternation, not by writing sign formulas that become vacuous when `-1=1`.
- The cross product is recovered only in oriented Euclidean three-space. No manifold, differential-form, or Maxwell material is pulled onto the A page beyond the linear-algebraic Hodge machinery.

## Known limits and blockers

- No mathematical blocker remains on the current batch-2 scaffold bytes. Alpha group `b` rechecked both A pages as sufficient after the `B2-1` and `B2-2` manifest repairs.
- All five recorded source URLs in `research/frontier-23-batch-2.coverage.json` were reopened over HTTP(S) at their stated sections or headings during this fix pass: Conrad `Complexification`, Troshkin `Real-complex linear algebra and abelian varieties`, Conrad `Exterior Powers`, Sjamaar `Manifolds and Differential Forms`, and Chern `Geometric Fluid Dynamics notes`.
- The coverage file already carries `fetch_verified` backing for each recorded source, so this fix pass needed no `research/frontier-23-batch-2.coverage.json` edit.

## Gate results

- `node tools/coverage-checklist.mjs research/frontier-23-batch-2.coverage.json --require-destination` — passed: 2 pages, 59 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json` — passed: 499 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed with only the standing repository-wide `redundant-prereq` advisories and no hard error involving this batch.

## Step-3 fix pass

- `B2-1` — accepted; no further manifest edit needed. Evidence: `research/frontier-23-alpha-b-step3-scaffold-review.md` narrowed the closure defect to the finite-dimensional operator tail, and the current `research/frontier-23-batch-2.pages.json` already declares `diagonalisation-and-the-minimal-polynomial` in the LA-14 page `requires`. Changed scaffold record: `research/frontier-23-batch-2.notes.md` only; the stale three-edge splice claim was withdrawn, and `research/frontier-23-batch-2.pages.json` plus `research/frontier-23-batch-2.coverage.json` were verified unchanged.
- `B2-2` — accepted; no further manifest edit needed. Evidence: the current `cor-cross-product-is-hodge-star-of-the-wedge` row in `research/frontier-23-batch-2.pages.json` depends only on page-local Hodge-star and interior-product items, not on the later `regular-surfaces-and-surface-integrals` page, matching the Alpha review's repair. Changed scaffold record: `research/frontier-23-batch-2.notes.md` only; the stale prerequisite-warning prose was replaced, and `research/frontier-23-batch-2.pages.json` plus `research/frontier-23-batch-2.coverage.json` were verified unchanged.

## Step-5 authoring

All 70 planned items and all 4 planned pages are authored, and every artifact remains `status: draft`; no judge record was written. Item ids are unchanged from the batch manifest.

**Authored ids.** On `complexification-realification-and-real-structures` (18): the six definitions `def-realification-of-a-complex-vector-space`, `def-complexification-of-a-real-vector-space`, `def-direct-sum-model-of-complexification`, `def-complexification-of-a-real-linear-map`, `def-conjugation-and-real-structure-on-a-complex-vector-space`, `def-fixed-real-form-of-a-conjugation`, and the twelve proof items `thm-tensor-and-direct-sum-models-of-complexification-agree`, `thm-universal-property-and-uniqueness-of-complexification`, `prop-complexification-is-functorial`, `thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences`, `thm-a-real-basis-complexifies-to-a-complex-basis`, `cor-realification-doubles-finite-dimension`, `thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space`, `cor-real-forms-correspond-to-conjugations`, `thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation`, `thm-characteristic-and-minimal-polynomials-survive-complexification`, `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs`, `cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane`. On its B page (11): the six examples `ex-canonical-embedding-of-r-n-into-c-n`, `ex-complexification-of-a-real-polynomial-space`, `ex-realification-of-c-n-has-doubled-dimension`, `ex-quarter-turn-diagonalises-after-complexification`, `ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane`, `ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms`, the counterexample `cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form`, and the four false statements `fs-complexification-doubles-finite-dimension`, `fs-every-complex-vector-space-has-a-preferred-real-form`, `fs-every-complex-linear-operator-descends-to-every-chosen-real-form`, `fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one`.

On `exterior-powers-orientation-and-hodge-duality` (28): the ten definitions `def-alternating-k-linear-map`, `def-kth-exterior-power-by-quotient`, `def-decomposable-k-vector-and-basic-wedge-product`, `def-exterior-algebra-of-a-vector-space`, `def-kth-exterior-power-of-a-linear-map`, `def-orientation-of-a-finite-dimensional-real-vector-space`, `def-gram-inner-product-on-kth-exterior-power`, `def-oriented-unit-volume-form`, `def-hodge-star-on-an-oriented-inner-product-space`, `def-interior-product-on-the-exterior-algebra`, and the eighteen proof items `thm-universal-property-and-uniqueness-of-exterior-powers`, `prop-basic-wedge-is-multilinear-and-alternating`, `thm-increasing-basis-wedges-form-a-basis`, `cor-dimension-of-the-kth-exterior-power`, `cor-the-kth-exterior-power-vanishes-above-dimension`, `thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors`, `thm-exterior-algebra-laws`, `thm-exterior-powers-are-functorial`, `thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix`, `cor-the-top-exterior-power-acts-by-the-determinant`, `cor-determinant-multiplicativity-from-the-top-exterior-power`, `thm-determinant-sign-detects-orientation-change`, `thm-gram-inner-product-on-exterior-powers-is-positive-definite`, `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`, `cor-hodge-star-is-an-isometry-and-squares-to-a-sign`, `thm-interior-product-is-adjoint-to-exterior-multiplication`, `prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity`, `cor-cross-product-is-hodge-star-of-the-wedge`. On its B page (13): the eight examples `ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four`, `ex-a-wedge-product-detects-linear-dependence`, `ex-exterior-powers-of-a-diagonal-operator`, `ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix`, `ex-oriented-area-and-volume-from-gram-determinants`, `ex-hodge-star-in-dimensions-two-three-and-four`, `ex-the-cross-product-from-hodge-star-and-wedge`, `ex-orientation-reversal-negates-the-hodge-star`, the counterexample `cex-a-bivector-in-r-four-need-not-be-decomposable`, and the four false statements `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field`, `fs-an-inner-product-determines-an-orientation`, `fs-an-orientation-determines-an-inner-product`, `fs-hodge-star-needs-only-the-vector-space-structure`.

**Provenance rationale.** Statements that are directly the harvested results carry `provenance.statement: literature-derived` with the corresponding source URL (Conrad for the complexification and exterior-power cores, Troshkin for the real-structure side, Sjamaar for orientation, Gram pairing, Hodge star and the cross product, Chern for the interior product). Canonical syntheses and the constructed examples/false statements that the sources motivate but do not isolate carry `provenance.statement: ai-altered` with the governing source URL attached, so every source-backed component has a reader-visible reference. All local proofs carry `provenance.proof: ai-altered`; the phase-format proofs were written for this library and are not transcriptions of a single source. Definitions carry `provenance.proof: not-applicable`. No item has `provenance.statement: ai-generated`, so no item is a forbidden dependency target and no `generation` block was needed.

**Narrowed and dropped claims.** No claim was narrowed or dropped during authoring relative to the current manifest bytes. Three design-level items are covered by their recorded dispositions rather than new files: Troshkin's $J^2=-1$ complex-structure paragraph is the standing out-of-scope row; the design's "$\mathbb C\otimes_{\mathbb R}\mathbb C$ canonically one copy" false statement is covered by the already-published `ex-complex-tensor-square-over-the-reals` (the manifest carries no such item); and the characteristic-two witness separating alternation from the sign-only rule is the already-published `cex-antisymmetric-need-not-be-alternating-in-characteristic-two`, referenced from the Remarks of `def-alternating-k-linear-map` instead of re-minted.

**Repairs applied during authoring.** Two preserved partial files gained missing fact dependencies (`def-complexification-of-a-real-linear-map` on `thm-complexification-preserves-…`, and `thm-universal-property-of-module-tensor-products` on `thm-universal-property-and-uniqueness-of-complexification`). All proof bodies were written or renumbered into the checker's canonical layer form, proof-section headings were added where the step block lacked one, and applied `\iota(...)` notation was rewritten to the bare form required by the content-policy rule. `cor-real-forms-correspond-to-conjugations` gained the direct-sum decomposition fact `[L4]` so its fixed-point computation is fully cited.

**Blockers.** None.

**Checks run, with results.**

- `node tools/tsx-run.mjs tools/precheck.mts` over all 70 batch items: `54 checked, 0 failing — all clean` (the 16 definitions are `n/a`).
- `node tools/validate-plan.mjs research/plan-spec.json`: `OK`; the batch-2 pages keep their declared orders 107.001–107.004 and prerequisites, with no item-level cycle, forward reference, B-page dependency, or unresolved id involving this batch.
- `node tools/content-policy.mjs research/frontier-23-batch-2.pages.json`: `70 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-23-batch-2.proof-contracts.json --strict`: `0 error(s), 0 warning(s), 54/54 item(s) checked` (one contract per proof-bearing item, citations regenerated from the on-disk facts, all eight boundary dispositions per item).
- `node tools/depcheck.mjs --quiet`, filtered to the 70 batch ids: no findings for this batch.
- `node tools/rendercheck.mjs` over the 70 item files and the 4 page files: `OK` for all 74 files (KaTeX and YAML both clean).

The output artifact is `research/frontier-23-batch-2.proof-contracts.json` (version 1, level `frontier-23`, scope of the 54 proof-bearing items).
