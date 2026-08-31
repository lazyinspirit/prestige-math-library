# frontier-27 — Step 8 group c adjudication

## Summary

Adjudicated all 79 exact rejections for batch 8: 21 `confirmed_fatal`, 56 `confirmed_nonfatal`, and 2 `false_positive`. Only the 21 fatal items were edited. There were no incoming alerts, outgoing cross-group findings, or published-item repairs.

The exact `(id, model, context_sha256, item_sha256)` decisions are appended to `research/frontier-27-judge-adjudications.jsonl`.

## Confirmed fatal repairs

| item | defect type | repair |
|---|---|---|
| `prop-a-countable-chart-cover-detects-manifold-null-sets` | `other` | The statement now separates positive-dimensional Euclidean nullity from the required empty-image condition in dimension zero. |
| `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` | `dependency_citation` | The repaired statement records Countable Choice and the proof constructs multidimensional cube covers directly instead of citing the one-dimensional theorem. |
| `def-pullback-of-a-covariant-tensor-by-a-linear-map` | `other` | The definition now binds both source and target as finite-dimensional real vector spaces. |
| `prop-linear-pullback-respects-tensor-products-and-permutations` | `other` | The statement now quantifies tensor degrees and takes the permutation in the symmetric group matching the degree of T. |
| `lem-sard-slicing-for-compact-null-sections` | `logic` | The false interval-length assertion is replaced by a Lebesgue-number partition whose subinterval lengths sum to b-a. |
| `lem-sard-on-the-infinitely-flat-critical-stratum` | `other` | The statement and Given block now require the Euclidean target dimension n to be positive. |
| `cor-dimension-of-the-kth-exterior-power-is-binomial` | `other` | The statement and Given block now quantify k as a natural number and V as a finite-dimensional real vector space. |
| `def-finite-dimensional-exterior-power-of-vectors` | `other` | The definition now requires V to be a finite-dimensional real vector space. |
| `prop-functoriality-of-finite-dimensional-exterior-powers` | `other` | The statement and Given block now bind all vector spaces as finite-dimensional real spaces and quantify k. |
| `prop-the-top-exterior-power-is-one-dimensional` | `other` | The statement and Given block now require V to be a finite-dimensional real vector space. |
| `def-interior-product-on-alternating-covectors` | `other` | The definition now requires V to be a finite-dimensional real vector space. |
| `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` | `other` | The statement now concerns the previously defined first-slot contraction rather than an undefined family of arbitrary contractions. |
| `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` | `logic` | The statement and Given block now require the target covariant tensor field to be smooth. |
| `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` | `other` | The false claim now states the precise differential-compatibility equation that a pulled-back vector field would have to satisfy. |
| `def-symmetric-and-alternating-covariant-tensor-subbundles` | `other` | The definition now starts with a smooth manifold M, making all tangent and tensor bundles well typed. |
| `def-wedge-product-of-differential-forms` | `dependency_citation` | A justified_by edge to the following graded-algebra proposition now records the pointwise wedge field smoothness obligation. |
| `def-interior-product-of-a-form-by-a-vector-field` | `other` | The degree-zero case now explicitly adopts the formal convention Omega^{-1}(M)={0}. |
| `prop-transversality-is-stable-on-a-compact-source` | `logic` | The statement and Given block now require the embedded target submanifold to be closed, excluding the supplied compact-source counterexample. |
| `fs-every-critical-point-is-an-isolated-point` | `logic` | The refutation now uses the constant map from R to R, whose critical locus is all of R and has no isolated points. |
| `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` | `logic` | The example now assumes a nonempty source and positive-dimensional target before asserting Crit(F)=M and CV(F)={q}. |
| `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` | `other` | The false claim now states the exact differential-compatibility equation, which the zero differential contradicts. |

## Confirmed nonfatal closures

Each objection below identifies a correct claim with an immediately closable citation, typing convention, elementary derivation, or local proof gap. Under the fatal-only rule these close without content, contract, impact, or verification changes.

| item | outcome | disposition |
|---|---|---|
| `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-symmetrization-and-alternation-are-projections` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `cor-positive-codimension-immersed-submanifolds-are-null` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `lem-the-wedge-product-is-alternating-and-bilinear` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-wedge-product-is-associative-and-graded-commutative` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `def-exterior-algebra-of-covectors` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `lem-sard-on-the-nonflat-critical-strata` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-morse-sard-for-euclidean-maps` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-universal-property-of-the-finite-dimensional-exterior-power` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-morse-sard-for-smooth-manifolds` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-exterior-power-duality-pairing` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `cor-regular-values-form-a-dense-g-delta-set` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-interior-product-is-a-graded-antiderivation` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-tensor-transition-laws-define-a-smooth-vector-bundle` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `def-a-smooth-map-transverse-to-an-embedded-submanifold` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `def-smooth-tensor-field` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `def-transverse-embedded-submanifolds` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `cor-transverse-intersection-theorem` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-transverse-fibre-product-theorem` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-symmetric-and-alternating-images-are-smooth-subbundles` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-global-graph-characterization-by-one-point-transverse-fibres` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `def-smooth-differential-k-form` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-local-coordinate-expression-for-a-differential-form` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `thm-parametric-transversality` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-differential-forms-form-a-graded-commutative-algebra` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-interior-product-on-forms-is-a-graded-antiderivation` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-the-set-of-critical-values-is-always-closed` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-the-wedge-product-is-commutative` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-tensor-product-and-contraction-in-a-basis` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-transverse-and-tangent-intersections-of-plane-curves` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-a-fibre-product-of-submersions` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-the-euclidean-metric-as-a-symmetric-two-tensor` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-the-area-form-in-polar-coordinates` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |
| `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` | `confirmed_nonfatal` | Correct claim; the exact objection is locally closable from the current item, an earlier same-page result, an opened dependency, or an elementary calculation. No edit. |

## False positives

| item | outcome | disposition |
|---|---|---|
| `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` | `false_positive` | The source-backed Whitney construction is correctly recorded: the original paper constructs a C1 function on the plane that is nonconstant on an arc of critical points; the continuous image of that arc is a nondegenerate interval, so the critical-value set has positive measure. The current schema permits the explicit `proof: not-supplied` source-backed item. No edit. |
| `cex-a-c1-map-whose-critical-values-have-positive-measure` | `false_positive` | The source-backed Whitney construction is correctly recorded: the original paper constructs a C1 function on the plane that is nonconstant on an arc of critical points; the continuous image of that arc is a nondegenerate interval, so the critical-value set has positive measure. The current schema permits the explicit `proof: not-supplied` source-backed item. No edit. |

## Alerts and source consultation

No incoming alert existed, and no rejection exposed a defect in another group or in published content.

The only web consultation was Hassler Whitney, “A Function Not Constant on a Connected Set of Critical Points,” *Duke Mathematical Journal* 1 (1935), 514–517, DOI `10.1215/S0012-7094-35-00138-7`. The paper supports the exact existence claim used by the two source-backed C1 counterexample items: a C1 real-valued function on the plane is nonconstant on an arc consisting entirely of critical points. Continuity then makes its critical values contain a nondegenerate interval.

## Rejudge targets

`prop-a-countable-chart-cover-detects-manifold-null-sets`, `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`, `def-pullback-of-a-covariant-tensor-by-a-linear-map`, `prop-linear-pullback-respects-tensor-products-and-permutations`, `lem-sard-slicing-for-compact-null-sections`, `lem-sard-on-the-infinitely-flat-critical-stratum`, `cor-dimension-of-the-kth-exterior-power-is-binomial`, `def-finite-dimensional-exterior-power-of-vectors`, `prop-functoriality-of-finite-dimensional-exterior-powers`, `prop-the-top-exterior-power-is-one-dimensional`, `def-interior-product-on-alternating-covectors`, `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth`, `prop-pullback-of-covariant-tensors-is-smooth-and-functorial`, `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map`, `def-symmetric-and-alternating-covariant-tensor-subbundles`, `def-wedge-product-of-differential-forms`, `def-interior-product-of-a-form-by-a-vector-field`, `prop-transversality-is-stable-on-a-compact-source`, `fs-every-critical-point-is-an-isolated-point`, `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`, `cex-a-vector-field-with-no-pullback-under-a-noninjective-map`.

## Changed artifacts

- Repaired 21 owned item files; no item id or page file changed.
- Appended all 79 exact outcomes to `research/frontier-27-judge-adjudications.jsonl`.
- Appended 21 exact-linked rows to `research/defect-ledger.jsonl` through `tools/defect-ledger.mjs append`; the assembly file is `research/frontier-27-alpha-c-step8-ledger-rows.json`, and the generated view was refreshed.
- Wrote this group report.

## Checks

- Targeted precheck: all 15 repaired proof-bearing items pass; the other six repaired items are definitions.
- Targeted render check: all 21 repaired files pass YAML, delimiter, and KaTeX validation.
- Dependency check exits successfully; it reports only existing advisory warnings.
- Group-c evidence join: 79/79 exact rejections have outcomes, with no malformed or surplus group-c row.
- Group-c defect linkage: all 21 fatal adjudications have exactly one matching defect-ledger row.
- Frontier-27 defect-ledger validation: 199 current-run rows checked with zero schema errors.
- Step-8 guard was run. It reported no group-c error; the later preflight rerun passes run-wide.
- Step-8 scope check was run. Group c had zero open rejection; the later preflight rerun reports zero open rejection run-wide.

## Blockers

None within group c. The engine owns targeted rejudgment of the 21 repaired items; the later preflight reruns close the run-wide guard and scope checks.

## Step-8 preflight repair-integrity round 1

### Assigned gate residue

- `proof-contract`: regenerated citations and derivations for all 87 parseable proof-bearing batch-8 entries, preserving boundary records, finite-smoke records, and existing risk reviews.
- `citation-fidelity`: the regenerated batch-8 contract now has exact current quotations for all direct and downstream uses affected by the licensed repairs.
- `risk-report`: added complete Alpha reviews for `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` and `lem-sard-slicing-for-compact-null-sections`, the two repaired proofs whose current risk scores newly require reviews.
- `boundary-audit`: the focused batch-8 check has no contradicted disposition; its sole upheld heuristic is the already-reviewed empty-axis signal for `thm-parametric-transversality`.
- The assigned unknown-owner published dependencies were used as read-only context and were not edited.

### Documentary ids regenerated

`lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets`, `lem-c1-local-diffeomorphisms-preserve-null-sets-locally`, `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`, `prop-a-countable-chart-cover-detects-manifold-null-sets`, `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`, `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`, `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets`, `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`, `cor-positive-codimension-immersed-submanifolds-are-null`, `lem-sard-slicing-for-compact-null-sections`, `lem-sard-on-the-nonflat-critical-strata`, `lem-sard-on-the-infinitely-flat-critical-stratum`, `thm-morse-sard-for-euclidean-maps`, `thm-morse-sard-for-smooth-manifolds`, `cor-regular-values-have-null-complement-and-are-dense`, `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact`, `cor-regular-values-form-a-dense-g-delta-set`, `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective`, `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`, `thm-transverse-preimage-theorem`, `cor-transverse-intersection-theorem`, `thm-transverse-fibre-product-theorem`, `cor-a-submersion-is-transverse-to-every-embedded-submanifold`, `prop-transversality-to-a-point-is-the-regular-value-condition`, `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target`, `prop-local-graph-characterization-by-transversality-to-vertical-fibres`, `prop-global-graph-characterization-by-one-point-transverse-fibres`, `thm-parametric-transversality`, `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse`, `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation`, `prop-transversality-is-stable-on-a-compact-source`, `fs-every-critical-point-is-an-isolated-point`, `fs-the-set-of-critical-values-is-always-closed`, `fs-two-submanifolds-with-nonempty-intersection-are-transverse`, `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold`, `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology`, `ex-critical-points-and-values-of-a-height-function-on-a-sphere`, `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`, `ex-a-smooth-map-with-a-nonclosed-critical-value-set`, `ex-transverse-and-tangent-intersections-of-plane-curves`, `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set`, `ex-a-fibre-product-of-submersions`, `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely`, `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids`, `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension`, `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear`, `prop-symmetrization-and-alternation-are-projections`, `lem-contraction-is-independent-of-the-basis-formula`, `prop-linear-pullback-respects-tensor-products-and-permutations`, `lem-the-wedge-product-is-alternating-and-bilinear`, `thm-wedge-product-is-associative-and-graded-commutative`, `lem-wedge-monomials-in-a-dual-basis-form-a-basis`, `cor-dimension-of-the-kth-exterior-power-is-binomial`, `thm-universal-property-of-the-finite-dimensional-exterior-power`, `prop-functoriality-of-finite-dimensional-exterior-powers`, `prop-exterior-power-duality-pairing`, `prop-the-top-exterior-power-is-one-dimensional`, `prop-interior-product-is-a-graded-antiderivation`, `thm-tensor-transition-laws-define-a-smooth-vector-bundle`, `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components`, `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth`, `prop-pullback-of-covariant-tensors-is-smooth-and-functorial`, `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map`, `thm-symmetric-and-alternating-images-are-smooth-subbundles`, `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle`, `prop-local-coordinate-expression-for-a-differential-form`, `prop-differential-forms-form-a-graded-commutative-algebra`, `prop-interior-product-on-forms-is-a-graded-antiderivation`, `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`, `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically`, `fs-the-wedge-product-is-commutative`, `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product`, `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n`, `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions`, `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis`, `ex-tensor-product-and-contraction-in-a-basis`, `ex-a-bilinear-form-as-a-type-zero-two-tensor`, `ex-an-endomorphism-as-a-type-one-one-tensor`, `ex-the-identity-endomorphism-and-its-coordinate-independent-trace`, `ex-wedge-products-of-the-standard-dual-basis`, `ex-determinant-as-the-pairing-of-top-exterior-powers`, `ex-the-euclidean-metric-as-a-symmetric-two-tensor`, `ex-the-area-form-in-polar-coordinates`, `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve`, `cex-a-vector-field-with-no-pullback-under-a-noninjective-map`, `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection`, `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor`.

### Licensing evidence

`live_tuples` is empty. This dispatch made no mathematical item edit, adjudication append, defect-ledger append, judge call, impact change, or workflow transition. The documentary drift came from the 21 already licensed repairs and exact fatal rows recorded in the adjudication section above.

### Changed files

- `research/frontier-27-batch-8.proof-contracts.json`
- `research/frontier-27-proof-contracts.json`, mechanically re-merged from all ten current batch contracts
- `research/frontier-27-alpha-c-step8-preflight-risk-reviews.json`
- this group report

### Targeted checks

- Batch-8 strict proof contract: 87/87 checked, zero errors and zero warnings.
- Batch-8 citation fidelity: 194 citations, no missing quote and no widening candidate.
- Batch-8 reviewed risk report: 87 items routed, zero errors.
- Batch-8 boundary audit: no contradicted disposition and one previously upheld heuristic.
- Batch-8 content policy: 116 scoped items, zero errors and zero warnings.
- Whole-run risk report: 357 items routed, zero errors.
- Step-8 guard: 96 current item changes, all licensed, zero errors and zero warnings.
- Step-8 scope check: four groups, 449 items, zero open rejection and zero cross-group alert.
- The whole-run proof-contract and citation-fidelity reruns still name only group-d residue: 46 contract errors, three warnings, and five stale quotations. The whole-run boundary audit likewise has two group-d candidates. No remaining row names a group-c item.

### Blocker

None within group c. The engine owns routing of the remaining group-d documentary residue.

