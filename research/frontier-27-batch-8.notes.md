# frontier-27 · Beta · batch-8 notes — `sard-theorem-and-transversality` and `tensor-fields-exterior-algebra-and-differential-forms`

Run `frontier-27`, batch `8`, two A/B pairs, category `differential-geometry`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-27-batch-8.pages.json`
- `research/frontier-27-batch-8.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-27-dispatch/beta-batch-8.prompt.md`, the seed manifest
`research/frontier-27-batch-8.pages.json`, the controlling design material in
`research/plan-differential-geometry-track.md`, and the live plan entries in
`research/plan-spec.json`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that command reported **`frontier-23`** in stage `5-author`,
not `frontier-27`. Because workflow state is out of scope and the dispatch
explicitly assigns `frontier-27`, I edited only the three
`research/frontier-27-batch-8.*` scaffold artifacts and did not try to steer or
repair `.autopilot/`.

## 2. Controlling design and design/spec drift

### Controlling design material

For DG-6 I treated the design block beginning at line `1605` and especially the
page section beginning at line `1765` as controlling. For DG-11 I treated the
design block beginning at line `2724` and the continuation through the proof
strategy section as controlling together.

### Design/spec drift recorded, not adjudicated

Two design/spec mismatches matter for this batch.

1. **DG-6 prerequisite list mismatch.**
   The design block for `sard-theorem-and-transversality` lists a broader direct
   prerequisite set:
   `rank-theorems-and-embedded-submanifolds`,
   `smooth-vector-bundles-and-sections`,
   `smooth-partitions-of-unity-and-exhaustions`,
   `cantor-set-baire-and-measure-zero`,
   `the-riemann-integral-in-rn-and-jordan-content`,
   `fubini-and-change-of-variables`,
   and `mixed-partials-taylor-and-extrema`.
   The live `plan-spec.json` entry and seed batch manifest list only:
   `smooth-partitions-of-unity-and-exhaustions`,
   `rank-theorems-and-embedded-submanifolds`,
   and `smooth-vector-bundles-and-sections`.
   Per the dispatch rule, I did **not** choose between them locally. I carried
   on with the spec.

   Important practical note: the spec-side prerequisite closure already reaches
   the real-analysis pages the design expects, so the actual item-level scaffold
   can still depend honestly on the needed null-set, Taylor, and compactness
   infrastructure without violating page-order closure.

2. **DG-11 B-page id mismatch.**
   The design names the B page
   `tensor-fields-and-differential-forms-examples`, while `plan-spec.json` and
   the live batch manifest use
   `tensor-fields-exterior-algebra-and-differential-forms-examples`.
   I carried on with the spec id.

### Non-drift clarification

The DG-11 design text also mentions published linear-algebra background pages
(`determinants-of-matrices-over-a-commutative-ring`,
`dual-spaces-bilinear-forms-and-inertia`, and
`linear-maps-rank-nullity-and-quotient-spaces`) without listing them as direct
page prerequisites. On current `plan-spec.json`, those pages are already in the
transitive closure of `tangent-cotangent-and-the-differential` and
`smooth-vector-bundles-and-sections`, so I did **not** treat that explanatory
difference as a design/spec conflict.

## 3. Scaffold shape and split check

The scaffold now has:

- `sard-theorem-and-transversality` (A): **44 items**
- `sard-theorem-and-transversality-examples` (B): **10 items**
- `tensor-fields-exterior-algebra-and-differential-forms` (A): **50 items**
- `tensor-fields-exterior-algebra-and-differential-forms-examples` (B): **12 items**

Both A pages are below the `60`-item split threshold, so **no split is
proposed**.

## 4. Route choices

### `sard-theorem-and-transversality`

The A page follows the design route:

1. define manifold null sets and prove chart independence honestly
2. prove the Euclidean null-set transport lemmas actually used by Sard
3. prove Euclidean Morse-Sard through the nonflat and flat critical strata
4. globalize to second-countable manifolds without boundary
5. package transversality through the normal-quotient criterion and the
   transverse preimage / intersection / fibre-product theorems
6. convert Sard into parametric transversality and the compact-source stability
   statement

Important local decisions:

- I reused the **published** manifold-level regular-value and embedded
  submanifold results from `rank-theorems-and-embedded-submanifolds` rather
  than duplicating them under new ids.
- I used the **quotient normal-bundle** convention already published on
  `smooth-vector-bundles-and-sections`; the design explicitly wants the
  normal-quotient formulation, so I kept that route instead of introducing an
  orthogonal-normal convention first.
- I kept the boundary-sensitive transversality extension theorem **out of
  scope** here. The design explicitly forbids smuggling boundary charts into
  this pair.

### `tensor-fields-exterior-algebra-and-differential-forms`

The A page follows the design route:

1. define tensors intrinsically as multilinear maps with the house
   `(V^*)^r × V^s -> R` convention
2. define tensor product, permutation actions, symmetrization, alternation, and
   contraction on that model
3. construct the exterior algebra on alternating covectors and the dual
   finite-dimensional exterior power of vectors
4. globalize to tensor bundles, tensor fields, exterior-power bundles, and
   differential forms
5. prove pullback, wedge, and interior-product operations at the bundle/section
   level, while deferring exterior derivative and Cartan calculus to DG-12

Important local decisions:

- I **did not** replace the finite-dimensional exterior-algebra block by
  dependencies on the already published page
  `exterior-powers-orientation-and-hodge-duality`, even though that page exists
  on disk. The reason is structural, not stylistic: that page is **outside the
  declared prerequisite closure of DG-11**, so using it would create an
  undeclared-prerequisite edge. The self-contained covector/exterior-algebra
  route is therefore required here, not redundant padding.
- I omitted the optional extra false statement
  `fs-every-mixed-tensor-field-can-be-pulled-back-by-an-arbitrary-smooth-map`.
  Design notes already flag that it is the same mathematical claim as item `32`;
  duplicating it would violate the duplicate-claim rule.

## 5. Source set actually recorded

### For `sard-theorem-and-transversality`

I recorded three verified source rows:

1. John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., via a live HTML
   mirror:
   `https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html`
   with `original_url` preserved as
   `https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf`
2. Marco Gualtieri, *Topology I: Smooth Manifolds*, cumulative course notes:
   `https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf`
3. *Encyclopedia of Mathematics*, `Sard theorem`:
   `https://encyclopediaofmath.org/wiki/Sard_theorem`

This satisfies the standing source rule:

- an eligible primary textbook treatment
- an independent full course-note treatment
- an additional independent reference treatment used only for the exact
  finite-differentiability threshold

What each source is doing:

- Lee carries the primary textbook route for manifold null sets, Sard on
  manifolds, and the chapter-level placement of transversality against the next
  Whitney pair.
- Gualtieri carries the concrete transversality, stability, fibre-product, and
  parametric-transversality route, together with an independent Sard proof
  structure.
- The Encyclopedia of Mathematics row is **not** the pair's primary backing. It
  is recorded because the Gualtieri note's OCR-extracted “Big Sard's theorem”
  formula does not display the standard threshold cleanly, while the
  encyclopedia entry states the exact
  $r > \max\{0,\dim M - \dim N\}$ condition.

### For `tensor-fields-exterior-algebra-and-differential-forms`

I recorded two verified source rows:

1. John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., via the same live
   HTML mirror and `original_url` provenance as above
2. Will J. Merry, *Differential Geometry* lecture notes:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf`

This satisfies the standing source rule:

- an eligible primary textbook treatment
- an independent full lecture-note treatment

What each source is doing:

- Lee supplies the primary textbook structure for tensors, tensor pullbacks,
  alternating covectors, wedge products, interior multiplication, and
  differential forms, while clearly deferring exterior derivative material to
  the next page.
- Merry supplies the independent multilinear/exterior-algebra block, the
  tensor criterion, contraction and diffeomorphic pullback facts, the
  differential-form criterion, wedge-product formulas, and pullback of forms.

## 6. Known limits and step-5 risks

1. **The live coverage file is already fetch-stamped.**
   On the current bytes,
   `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-8.coverage.json --stamp`
   reports `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`.
   The coverage file therefore is not blocked on missing `fetch_verified`
   records.

2. **DG-6 threshold handling is deliberately split across sources.**
   The Gualtieri note supplies the proof shape of “Big Sard's theorem,” but its
   extracted threshold formula is not reliable enough to serve as the exact
   item-15 statement. Step `5` should preserve the exact threshold wording from
   the Encyclopedia row when authoring `thm-morse-sard-for-euclidean-maps`.

3. **DG-11 must stay self-contained at the exterior-algebra level.**
   The published linear-algebra exterior-power page is real, but it is not in
   the declared prerequisite closure of page `463`. Step `5` must not quietly
   replace the local covector/exterior-power arguments by citations to that
   page unless the reading-order metadata is changed by an owner-authorized
   drift or splice action outside this batch.

4. **Boundary transversality is intentionally excluded here.**
   Step `5` must not cite or smuggle in manifolds with boundary, neat
   transversality, or boundary homotopy-extension theorems on page `453`.

## 7. Validator results

I ran the scaffold-stage checks on Monday, August 31, 2026.

- `node -e 'JSON.parse(...)'` on `research/frontier-27-batch-8.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-27-batch-8.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-27-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-8.pages.json`
  -> `content-policy: 116 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`

## Step-5 authoring

### Authored pages and ids

- `library/differential-geometry/sard-theorem-and-transversality.md`
  with A-page ids:
  `def-null-subset-of-a-smooth-manifold`,
  `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets`,
  `lem-c1-local-diffeomorphisms-preserve-null-sets-locally`,
  `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`,
  `prop-a-countable-chart-cover-detects-manifold-null-sets`,
  `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`,
  `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`,
  `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets`,
  `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`,
  `cor-positive-codimension-immersed-submanifolds-are-null`,
  `def-critical-locus-and-critical-value-set`,
  `lem-sard-slicing-for-compact-null-sections`,
  `lem-sard-on-the-nonflat-critical-strata`,
  `lem-sard-on-the-infinitely-flat-critical-stratum`,
  `thm-morse-sard-for-euclidean-maps`,
  `thm-morse-sard-for-smooth-manifolds`,
  `cor-regular-values-have-null-complement-and-are-dense`,
  `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact`,
  `cor-regular-values-form-a-dense-g-delta-set`,
  `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective`,
  `def-transverse-linear-subspaces`,
  `def-a-smooth-map-transverse-to-an-embedded-submanifold`,
  `def-transverse-smooth-maps`,
  `def-transverse-embedded-submanifolds`,
  `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`,
  `thm-transverse-preimage-theorem`,
  `cor-transverse-intersection-theorem`,
  `thm-transverse-fibre-product-theorem`,
  `cor-a-submersion-is-transverse-to-every-embedded-submanifold`,
  `prop-transversality-to-a-point-is-the-regular-value-condition`,
  `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target`,
  `prop-local-graph-characterization-by-transversality-to-vertical-fibres`,
  `prop-global-graph-characterization-by-one-point-transverse-fibres`,
  `def-smooth-family-of-maps-and-evaluation-map`,
  `thm-parametric-transversality`,
  `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse`,
  `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation`,
  `prop-transversality-is-stable-on-a-compact-source`,
  `fs-every-critical-point-is-an-isolated-point`,
  `fs-the-set-of-critical-values-is-always-closed`,
  `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions`,
  `fs-two-submanifolds-with-nonempty-intersection-are-transverse`,
  `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold`,
  `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology`.

- `library/differential-geometry/sard-theorem-and-transversality-examples.md`
  with B-page ids:
  `ex-critical-points-and-values-of-a-height-function-on-a-sphere`,
  `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`,
  `ex-a-smooth-map-with-a-nonclosed-critical-value-set`,
  `ex-transverse-and-tangent-intersections-of-plane-curves`,
  `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set`,
  `ex-a-fibre-product-of-submersions`,
  `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely`,
  `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids`,
  `cex-a-c1-map-whose-critical-values-have-positive-measure`,
  `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension`.

- `library/differential-geometry/tensor-fields-exterior-algebra-and-differential-forms.md`
  with A-page ids:
  `def-type-r-s-tensor-on-a-finite-dimensional-vector-space`,
  `def-tensor-product-of-multilinear-tensors`,
  `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear`,
  `def-permutation-action-on-covariant-tensors`,
  `def-symmetrization-and-alternation-operators`,
  `prop-symmetrization-and-alternation-are-projections`,
  `def-contraction-of-a-mixed-tensor`,
  `lem-contraction-is-independent-of-the-basis-formula`,
  `def-pullback-of-a-covariant-tensor-by-a-linear-map`,
  `prop-linear-pullback-respects-tensor-products-and-permutations`,
  `def-alternating-k-covectors`,
  `def-wedge-product-of-alternating-covectors`,
  `lem-the-wedge-product-is-alternating-and-bilinear`,
  `thm-wedge-product-is-associative-and-graded-commutative`,
  `def-exterior-algebra-of-covectors`,
  `lem-wedge-monomials-in-a-dual-basis-form-a-basis`,
  `cor-dimension-of-the-kth-exterior-power-is-binomial`,
  `def-finite-dimensional-exterior-power-of-vectors`,
  `thm-universal-property-of-the-finite-dimensional-exterior-power`,
  `prop-functoriality-of-finite-dimensional-exterior-powers`,
  `prop-exterior-power-duality-pairing`,
  `prop-the-top-exterior-power-is-one-dimensional`,
  `def-interior-product-on-alternating-covectors`,
  `prop-interior-product-is-a-graded-antiderivation`,
  `def-type-r-s-tensor-bundle`,
  `thm-tensor-transition-laws-define-a-smooth-vector-bundle`,
  `def-smooth-tensor-field`,
  `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components`,
  `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth`,
  `def-pullback-of-a-covariant-tensor-field`,
  `prop-pullback-of-covariant-tensors-is-smooth-and-functorial`,
  `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map`,
  `def-symmetric-and-alternating-covariant-tensor-subbundles`,
  `thm-symmetric-and-alternating-images-are-smooth-subbundles`,
  `def-exterior-power-bundle-of-the-cotangent-bundle`,
  `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle`,
  `def-smooth-differential-k-form`,
  `prop-local-coordinate-expression-for-a-differential-form`,
  `def-wedge-product-of-differential-forms`,
  `prop-differential-forms-form-a-graded-commutative-algebra`,
  `def-interior-product-of-a-form-by-a-vector-field`,
  `prop-interior-product-on-forms-is-a-graded-antiderivation`,
  `def-pullback-of-a-differential-form`,
  `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`,
  `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically`,
  `fs-the-wedge-product-is-commutative`,
  `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product`,
  `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n`,
  `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions`,
  `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis`.

- `library/differential-geometry/tensor-fields-exterior-algebra-and-differential-forms-examples.md`
  with B-page ids:
  `ex-tensor-product-and-contraction-in-a-basis`,
  `ex-a-bilinear-form-as-a-type-zero-two-tensor`,
  `ex-an-endomorphism-as-a-type-one-one-tensor`,
  `ex-the-identity-endomorphism-and-its-coordinate-independent-trace`,
  `ex-wedge-products-of-the-standard-dual-basis`,
  `ex-determinant-as-the-pairing-of-top-exterior-powers`,
  `ex-the-euclidean-metric-as-a-symmetric-two-tensor`,
  `ex-the-area-form-in-polar-coordinates`,
  `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve`,
  `cex-a-vector-field-with-no-pullback-under-a-noninjective-map`,
  `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection`,
  `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor`.

### Provenance rationale

- I tagged the load-bearing theorem/lemma/proposition/corollary statements as
  `literature-derived` and their local proofs as `ai-altered`, because the page
  route, statements, and proof shapes come directly from the recorded Lee,
  Gualtieri, Merry, and EoM source stack, but the final Markdown proofs are
  authored locally for this batch.
- I tagged worked examples and locally chosen counterexamples as
  `ai-generated` with the required `generation.role` when they are not used as
  dependency targets. The one example that *is* a dependency target
  (`ex-an-endomorphism-as-a-type-one-one-tensor`) was retagged to
  `ai-altered` to satisfy the no-`ai-generated`-dependency rule truthfully.
- I handled the Whitney-threshold pair exactly as the design note requires:
  `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` and
  `cex-a-c1-map-whose-critical-values-have-positive-measure` are recorded as
  source-backed phenomena with `provenance.proof: not-supplied`; they stay
  draft, cite the batch sources, and do not pretend to reconstruct Whitney's
  construction inside batch 8.

### Narrowed or dropped claims

- No planned ids were dropped.
- No theorem statement was narrowed relative to the batch manifest.
- The only scope-sensitive handling is the Whitney phenomenon above: I kept the
  intended claim but recorded it honestly as sourced, not locally rebuilt.

### Blockers

- No batch blocker remains for the required Step-5 checks.

### Checks run on Monday, August 31, 2026

- `node tools/tsx-run.mjs tools/precheck.mts <all batch-8 item files>`
  -> `87 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `node tools/content-policy.mjs research/frontier-27-batch-8.pages.json`
  -> `content-policy: 116 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-27-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 87/87 item(s) checked`
  -> passed and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`
  The visible diagnostics before that tail were the repository's standing
  run-wide `redundant-prereq` warnings outside this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`

So the batch scaffold is JSON-valid and fetch-stamped on current bytes. That
does not by itself certify author-readiness of every A-page result carrier.

## Step-3 fix pass

- `B8-1` — disposition: accepted and repaired in the current batch coverage.
  Evidence: the Alpha group-`c` review identified `29` uncovered
  `sard-theorem-and-transversality` A-page carriers; the current
  manifest-to-coverage audit on Monday, August 31, 2026 leaves `0` uncovered
  A-page items on that page. Changed scaffold record:
  `research/frontier-27-batch-8.coverage.json`, where the Lee and Gualtieri
  rows for `sard-theorem-and-transversality` now carry the DG-6 null-set,
  Sard, transversality, genericity, and false-statement items explicitly.
- `B8-2` — disposition: accepted and repaired in the current batch coverage.
  Evidence: the Alpha group-`c` review identified `34` uncovered
  `tensor-fields-exterior-algebra-and-differential-forms` A-page carriers; the
  current manifest-to-coverage audit on Monday, August 31, 2026 leaves `0`
  uncovered A-page items on that page. Changed scaffold record:
  `research/frontier-27-batch-8.coverage.json`, where the Lee and Merry rows
  now carry the missing multilinear-tensor, exterior-power, tensor-bundle,
  differential-form, and false-statement carriers explicitly.
- `B8-3` — disposition: accepted and repaired locally. Evidence:
  `research/plan-differential-geometry-track.md:2514-2515` still contains the
  stale DG-9 forward-reference sentence, but the DG-12 block at
  `research/plan-differential-geometry-track.md:3017-3034` explicitly owns the
  tensor-field Lie-derivative construction and its continuation, while DG-11's
  local block stops before Lie/Cartan calculus. Changed scaffold record:
  `research/frontier-27-batch-8.coverage.json`, where Lee's
  `Lie Derivatives of Tensor Fields` row now defers to
  `the-exterior-derivative-and-cartan-calculus`.
- Validator reruns on Monday, August 31, 2026:
  `node tools/coverage-checklist.mjs research/frontier-27-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 119 harvested result(s), 0 error(s), 0 warning(s)`.
- Validator reruns on Monday, August 31, 2026:
  `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  -> `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`.
- Validator reruns on Monday, August 31, 2026:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended with `OK`; the visible diagnostics were only the standing repo-wide
  `redundant-prereq` warnings outside this batch.
- Source support on the live bytes: all five source rows remain
  `fetch_verified`; this pass changed only coverage carriers and the one
  Lie-derivative deferment destination, not the verified URLs or receipts.
