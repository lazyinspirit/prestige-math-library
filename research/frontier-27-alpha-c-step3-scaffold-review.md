# frontier-27 — Alpha group `c` Step 3 scaffold review

Scope: batch `8`, covering
`sard-theorem-and-transversality` and
`tensor-fields-exterior-algebra-and-differential-forms`.

I read `research/frontier-27-batch-8.pages.json`,
`research/frontier-27-batch-8.coverage.json`,
`research/frontier-27-batch-8.notes.md`, the DG-6 and DG-11 sections of
`research/plan-differential-geometry-track.md`, and the current
`research/plan-spec.json`. I refreshed
`research/frontier-27-alpha-c-scope-decisions.json`, resolved all eleven rows,
and then checked the resulting file.

## Verdicts

| A page | Verdict | Reason |
|---|---|---|
| `sard-theorem-and-transversality` | insufficient | The manifest carries 44 A-page items, but the coverage file names only 15 exact carriers and leaves 29 results source-unassigned. |
| `tensor-fields-exterior-algebra-and-differential-forms` | insufficient | The manifest carries 50 A-page items, but the coverage file names only 16 exact carriers and leaves 34 results source-unassigned. |

## Direct repairs applied

- Corrected the stale fetch-gate claim in `research/frontier-27-batch-8.notes.md`.
  On the current 2026-08-31 bytes,
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-8.coverage.json --stamp`
  reports `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`.
- Resolved `research/frontier-27-alpha-c-scope-decisions.json` to ten `stands`
  rows and one `owner-decision` row. The owner-decision row is Lee's
  `Lie Derivatives of Tensor Fields`, whose destination conflicts between
  DG-9's forward-reference block, the DG-11 local block, and the current
  coverage row.

## Stable findings

### B8-1 — `sard-theorem-and-transversality` is under-harvested against DG-6

DG-6 requires the full null-set transport, Morse-Sard, transversality, and
genericity spine at
`research/plan-differential-geometry-track.md:1619-1763`. The current manifest
does carry that 44-item A-page spine at
`research/frontier-27-batch-8.pages.json:14-471`, but the current coverage
record names only 15 exact carriers across Lee, Gualtieri, and the
Encyclopedia row at `research/frontier-27-batch-8.coverage.json:12-188`.

Evidence on current bytes:

- `research/frontier-27-batch-8.notes.md:104-126` records the intended DG-6
  route and the boundary exclusion.
- `research/frontier-27-batch-8.coverage.json:12-71` names only seven Lee
  carriers: the opening null-set definition, two null-set transport
  propositions, the dense-complement proposition, manifold Sard, and the
  transverse-preimage theorem.
- `research/frontier-27-batch-8.coverage.json:86-151` names only eight unique
  Gualtieri/Encyclopedia carriers beyond those: the transversality definitions,
  intersection theorem, fibre-product theorem, stability, Euclidean Sard,
  parametric transversality, generic translations, and dense regular values.
- A manifest-to-coverage audit on the current bytes leaves 29 uncovered A-page
  items.

Exact missing result and source groups:

- `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets`,
  `lem-c1-local-diffeomorphisms-preserve-null-sets-locally`,
  `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`,
  `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`,
  `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`, and
  `cor-positive-codimension-immersed-submanifolds-are-null` still need exact
  carriers from the already-read Lee Chapter 6 `Sets of Measure Zero` block or
  Gualtieri `3.2 Sard's theorem`.
- `def-critical-locus-and-critical-value-set`,
  `lem-sard-slicing-for-compact-null-sections`,
  `lem-sard-on-the-nonflat-critical-strata`, and
  `lem-sard-on-the-infinitely-flat-critical-stratum` still need exact carriers
  from the already-read Lee `Sard's Theorem` heading or Gualtieri
  `3.2 Sard's theorem` stack.
- `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact`,
  `cor-regular-values-form-a-dense-g-delta-set`, and
  `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective` still
  need exact carriers from the already-read Sard stack or an expanded canonical
  carrier list.
- `def-transverse-linear-subspaces`,
  `def-a-smooth-map-transverse-to-an-embedded-submanifold`,
  `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`,
  `cor-a-submersion-is-transverse-to-every-embedded-submanifold`,
  `prop-transversality-to-a-point-is-the-regular-value-condition`,
  `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target`,
  `prop-local-graph-characterization-by-transversality-to-vertical-fibres`,
  `prop-global-graph-characterization-by-one-point-transverse-fibres`,
  `def-smooth-family-of-maps-and-evaluation-map`, and
  `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation`
  still need exact carriers from the already-read Lee `Transversality` heading
  or Gualtieri `3 Transversality`, `3.1 Stability`, and `3.4 Genericity`.
- `fs-every-critical-point-is-an-isolated-point`,
  `fs-the-set-of-critical-values-is-always-closed`,
  `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions`,
  `fs-two-submanifolds-with-nonempty-intersection-are-transverse`,
  `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold`, and
  `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology`
  still need exact canonical or source-backed carriers using the current
  Lee/Gualtieri source stack and the existing B-page counterexample route.

Because current authoring would otherwise have to reconstruct 29 named A-page
results from uncited neighboring source matter or ad hoc canonicalization, this
page is not author-ready on current bytes.

### B8-2 — `tensor-fields-exterior-algebra-and-differential-forms` is under-harvested against DG-11

DG-11 requires the full 50-item multilinear-tensor, exterior-algebra,
tensor-bundle, and differential-form spine at
`research/plan-differential-geometry-track.md:2743-2960`. The current manifest
does carry that spine at `research/frontier-27-batch-8.pages.json:597-1093`,
but the current coverage file names only 16 exact carriers across the Lee and
Merry rows at `research/frontier-27-batch-8.coverage.json:208-343`.

Evidence on current bytes:

- `research/frontier-27-batch-8.notes.md:130-155` records the intended DG-11
  route and the self-contained finite-dimensional exterior-power choice.
- `research/frontier-27-batch-8.coverage.json:208-288` names only ten Lee
  carriers: the opening tensor definition, symmetrization definition,
  tensor-bundle definition, covariant-tensor pullback, alternating-covector
  definition, wedge basis theorem, wedge associativity/graded commutativity,
  interior product on alternating covectors, and differential-form definition.
- `research/frontier-27-batch-8.coverage.json:303-343` names only eight Merry
  carriers: the tensor criterion, covariant-tensor pullback, diffeomorphic
  pullback, local coordinate expression for forms, wedge/product and
  pullback-of-form definitions, the graded-commutative-algebra proposition, and
  one B-page wedge example.
- A manifest-to-coverage audit on the current bytes leaves 34 uncovered A-page
  items.

Exact missing result and source groups:

- `def-tensor-product-of-multilinear-tensors`,
  `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear`,
  `def-permutation-action-on-covariant-tensors`,
  `prop-symmetrization-and-alternation-are-projections`,
  `def-contraction-of-a-mixed-tensor`,
  `lem-contraction-is-independent-of-the-basis-formula`,
  `def-pullback-of-a-covariant-tensor-by-a-linear-map`, and
  `prop-linear-pullback-respects-tensor-products-and-permutations` still need
  exact carriers from the already-read Lee Chapter 12 multilinear/symmetric
  tensor blocks or Merry Lecture 18.
- `def-wedge-product-of-alternating-covectors`,
  `lem-the-wedge-product-is-alternating-and-bilinear`,
  `def-exterior-algebra-of-covectors`,
  `cor-dimension-of-the-kth-exterior-power-is-binomial`,
  `def-finite-dimensional-exterior-power-of-vectors`,
  `thm-universal-property-of-the-finite-dimensional-exterior-power`,
  `prop-functoriality-of-finite-dimensional-exterior-powers`,
  `prop-exterior-power-duality-pairing`,
  `prop-the-top-exterior-power-is-one-dimensional`, and
  `prop-interior-product-is-a-graded-antiderivation` still need exact carriers
  from the already-read Lee Chapter 12/14 wedge and interior-multiplication
  blocks or Merry Lecture 19.
- `thm-tensor-transition-laws-define-a-smooth-vector-bundle`,
  `def-smooth-tensor-field`,
  `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth`,
  `def-symmetric-and-alternating-covariant-tensor-subbundles`,
  `thm-symmetric-and-alternating-images-are-smooth-subbundles`,
  `def-exterior-power-bundle-of-the-cotangent-bundle`, and
  `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` still
  need exact carriers from Lee `Tensors and Tensor Fields on Manifolds` or
  Merry Lecture 18.
- `def-interior-product-of-a-form-by-a-vector-field`,
  `prop-interior-product-on-forms-is-a-graded-antiderivation`, and
  `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` still
  need exact carriers from the already-read Lee `Differential Forms` heading or
  Merry Lecture 19.
- `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map`,
  `fs-the-wedge-product-is-commutative`,
  `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product`,
  `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n`,
  `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions`,
  and `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis`
  still need exact canonical or source-backed carriers from the current
  Lee/Merry stack and the existing B-page counterexample route.

Because current authoring would otherwise have to reconstruct 34 named A-page
results from uncited source neighborhoods, this page is not author-ready.

### B8-3 — `Lie Derivatives of Tensor Fields` is not a stable `stands` deferment

One current scope row is not a routine keep-as-is decision. DG-9's forward
reference still says tensor-field Lie derivatives go to DG-11
(`research/plan-differential-geometry-track.md:2514-2515`), but the DG-11
local block omits any Lie-derivative item and stops at pullback, wedge,
interior product, and form pullback
(`research/plan-differential-geometry-track.md:2743-2960`). Meanwhile the
coverage row routes Lee's `Lie Derivatives of Tensor Fields` backward to
`vector-fields-flows-and-lie-derivatives`
(`research/frontier-27-batch-8.coverage.json:235-239`).

That conflict is a genuine routing ambiguity. I therefore resolved that row as
`owner-decision` instead of silently endorsing the current destination. I did
not rewrite the batch scope locally because choosing DG-9, DG-11, or DG-12 as
the committed home changes which page owns that topic.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-27 --group c` produced
eleven current decline rows for this group. Ten now resolve as `stands`, and
one resolves as `owner-decision`.

The ten `stands` rows are stable on current bytes:

- DG-6 still defers Whitney embedding, Whitney approximation, tubular
  neighbourhoods, and the transversality-homotopy theorem to DG-7.
- DG-6 still keeps the boundary-sensitive homotopic transverse-extension
  theorem out of scope until the later boundary block.
- DG-11 still defers exterior-derivative and Lie-derivative-of-forms material
  to DG-12.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group c`
  Result: `scope-decisions: c: 11 decline(s), 11 pending`.
- `node tools/scope-decisions.mjs check --run frontier-27 --group c`
  Result: `scope-decisions: 11 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-8.coverage.json`
  Result: `coverage-checklist: two pages, 51 harvested result(s), 0 error(s), 0 warning(s)`.
- Manifest-to-coverage alignment audit over the two owned A pages
  Current result on 2026-08-31: `sard-theorem-and-transversality` missing 29
  exact carriers; `tensor-fields-exterior-algebra-and-differential-forms`
  missing 34 exact carriers.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-8.coverage.json --stamp`
  Result: `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`.
