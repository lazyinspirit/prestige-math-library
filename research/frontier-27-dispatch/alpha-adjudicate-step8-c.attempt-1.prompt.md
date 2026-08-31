# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-27-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-27
role: alpha-adjudicate
label: step8-c
covers: 8

# Step 8 — group **c**, run `frontier-27`

You are the group Alpha for batches **8**: 2 A/B pair(s), 4 page(s), 116 item(s), 79 open rejection(s) over 79 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `sard-theorem-and-transversality` | A | differential-geometry | 453 | `smooth-partitions-of-unity-and-exhaustions`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections` |
| 8 | `sard-theorem-and-transversality-examples` | B | differential-geometry | 454 | `sard-theorem-and-transversality` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms` | A | differential-geometry | 463 | `tangent-cotangent-and-the-differential`, `smooth-vector-bundles-and-sections` |
| 8 | `tensor-fields-exterior-algebra-and-differential-forms-examples` | B | differential-geometry | 464 | `tensor-fields-exterior-algebra-and-differential-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sard-theorem-and-transversality` — Sard Theorem and Transversality (44 item(s))

- `def-null-subset-of-a-smooth-manifold` · definition — Null subsets of a smooth manifold
- `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` · lemma — A $C^1$ map is locally Lipschitz on compact coordinate subsets
- `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` · lemma — $C^1$ local diffeomorphisms preserve null sets locally
- `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` · proposition — The manifold null-set definition is independent of the smooth atlas
- `prop-a-countable-chart-cover-detects-manifold-null-sets` · proposition — A countable chart cover detects manifold null sets
- `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` · proposition — Countable unions and subsets of manifold null sets are null
- `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` · proposition — A null set has dense complement in a positive-dimensional manifold
- `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` · proposition — An equidimensional $C^1$ map sends null sets to null sets
- `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` · proposition — The image of a lower-dimensional $C^1$ manifold is null
- `cor-positive-codimension-immersed-submanifolds-are-null` · corollary — Positive-codimension immersed submanifolds are null
- `def-critical-locus-and-critical-value-set` · definition — The critical locus and critical value set
- `lem-sard-slicing-for-compact-null-sections` · lemma — Compact null sections imply a compact set is null
- `lem-sard-on-the-nonflat-critical-strata` · lemma — Sard on the nonflat critical strata
- `lem-sard-on-the-infinitely-flat-critical-stratum` · lemma — Sard on the infinitely flat critical stratum
- `thm-morse-sard-for-euclidean-maps` · theorem — Morse-Sard for Euclidean maps
- `thm-morse-sard-for-smooth-manifolds` · theorem — Morse-Sard for smooth manifolds
- `cor-regular-values-have-null-complement-and-are-dense` · corollary — Regular values have null complement and are dense
- `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact` · proposition — The critical value set of a smooth map is sigma-compact
- `cor-regular-values-form-a-dense-g-delta-set` · corollary — Regular values form a dense $G_\delta$ set
- `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective` · corollary — A smooth map from lower to higher dimension cannot be surjective
- `def-transverse-linear-subspaces` · definition — Transverse linear subspaces
- `def-a-smooth-map-transverse-to-an-embedded-submanifold` · definition — A smooth map transverse to an embedded submanifold
- `def-transverse-smooth-maps` · definition — Transverse smooth maps
- `def-transverse-embedded-submanifolds` · definition — Transverse embedded submanifolds
- `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient` · lemma — Transversality is equivalent to surjectivity on the normal quotient
- `thm-transverse-preimage-theorem` · theorem — The transverse preimage theorem
- `cor-transverse-intersection-theorem` · corollary — Transverse embedded submanifolds intersect in the expected codimension
- `thm-transverse-fibre-product-theorem` · theorem — Transverse fibre products are embedded submanifolds
- `cor-a-submersion-is-transverse-to-every-embedded-submanifold` · corollary — A submersion is transverse to every embedded submanifold
- `prop-transversality-to-a-point-is-the-regular-value-condition` · proposition — Transversality to a point is the regular-value condition
- `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` · proposition — Transversality is invariant under diffeomorphic changes of source and target
- `prop-local-graph-characterization-by-transversality-to-vertical-fibres` · proposition — An $m$-dimensional submanifold transverse to vertical fibres is locally a graph
- `prop-global-graph-characterization-by-one-point-transverse-fibres` · proposition — A globally one-to-one transverse-fibre submanifold is a graph
- `def-smooth-family-of-maps-and-evaluation-map` · definition — Smooth families of maps and their evaluation maps
- `thm-parametric-transversality` · theorem — Parametric transversality
- `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` · corollary — Generic translations of a Euclidean-valued map are transverse
- `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation` · corollary — Outside a null set, every translation makes a chosen value a transverse zero
- `prop-transversality-is-stable-on-a-compact-source` · proposition — Transversality is stable on a compact source
- `fs-every-critical-point-is-an-isolated-point` · false-statement — Critical points need not be isolated
- `fs-the-set-of-critical-values-is-always-closed` · false-statement — The critical-value set need not be closed
- `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` · false-statement — Sard's theorem does not hold for every $C^1$ map
- `fs-two-submanifolds-with-nonempty-intersection-are-transverse` · false-statement — Intersecting submanifolds need not be transverse
- `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` · false-statement — A preimage need not be a submanifold without transversality
- `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` · false-statement — Uniform $C^1$ openness of transversality fails on arbitrary noncompact sources

### `sard-theorem-and-transversality-examples` — Sard Theorem and Transversality — Examples (10 item(s))

- `ex-critical-points-and-values-of-a-height-function-on-a-sphere` · example — Critical points and values of a height function on a sphere
- `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` · example — A constant map has a large critical locus and one critical value
- `ex-a-smooth-map-with-a-nonclosed-critical-value-set` · example — A smooth map with a nonclosed critical-value set
- `ex-transverse-and-tangent-intersections-of-plane-curves` · example — Transverse and tangent intersections of plane curves
- `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` · example — Coordinate spheres intersect as a transverse level set
- `ex-a-fibre-product-of-submersions` · example — A fibre product of submersions
- `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` · example — Generic affine hyperplanes meet an embedded submanifold transversely
- `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids` · example — A map can be vacuously transverse to a submanifold it avoids
- `cex-a-c1-map-whose-critical-values-have-positive-measure` · counterexample — A $C^1$ map can have critical values of positive measure
- `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` · counterexample — A tangent intersection can fail the expected-dimension conclusion

### `tensor-fields-exterior-algebra-and-differential-forms` — Tensor Fields Exterior Algebra and Differential Forms (50 item(s))

- `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` · definition — Type $(r,s)$ tensors on a finite-dimensional vector space
- `def-tensor-product-of-multilinear-tensors` · definition — The tensor product of multilinear tensors
- `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` · proposition — Tensor product of multilinear tensors is associative and bilinear
- `def-permutation-action-on-covariant-tensors` · definition — Permutation action on covariant tensors
- `def-symmetrization-and-alternation-operators` · definition — Symmetrization and alternation operators
- `prop-symmetrization-and-alternation-are-projections` · proposition — Symmetrization and alternation are projections
- `def-contraction-of-a-mixed-tensor` · definition — Contraction of a mixed tensor
- `lem-contraction-is-independent-of-the-basis-formula` · lemma — Contraction is independent of the basis formula
- `def-pullback-of-a-covariant-tensor-by-a-linear-map` · definition — Pullback of a covariant tensor by a linear map
- `prop-linear-pullback-respects-tensor-products-and-permutations` · proposition — Linear pullback respects tensor products and permutations
- `def-alternating-k-covectors` · definition — Alternating $k$-covectors
- `def-wedge-product-of-alternating-covectors` · definition — The wedge product of alternating covectors
- `lem-the-wedge-product-is-alternating-and-bilinear` · lemma — The wedge product is alternating and bilinear
- `thm-wedge-product-is-associative-and-graded-commutative` · theorem — The wedge product is associative and graded-commutative
- `def-exterior-algebra-of-covectors` · definition — The exterior algebra of covectors
- `lem-wedge-monomials-in-a-dual-basis-form-a-basis` · lemma — Wedge monomials in a dual basis form a basis
- `cor-dimension-of-the-kth-exterior-power-is-binomial` · corollary — The dimension of the $k$th exterior power is binomial
- `def-finite-dimensional-exterior-power-of-vectors` · definition — The finite-dimensional exterior power of vectors
- `thm-universal-property-of-the-finite-dimensional-exterior-power` · theorem — The finite-dimensional exterior power has the universal property
- `prop-functoriality-of-finite-dimensional-exterior-powers` · proposition — Finite-dimensional exterior powers are functorial
- `prop-exterior-power-duality-pairing` · proposition — Exterior powers carry a canonical duality pairing
- `prop-the-top-exterior-power-is-one-dimensional` · proposition — The top exterior power is one-dimensional
- `def-interior-product-on-alternating-covectors` · definition — Interior product on alternating covectors
- `prop-interior-product-is-a-graded-antiderivation` · proposition — Interior product is a graded antiderivation
- `def-type-r-s-tensor-bundle` · definition — The type $(r,s)$ tensor bundle
- `thm-tensor-transition-laws-define-a-smooth-vector-bundle` · theorem — Tensor transition laws define a smooth vector bundle
- `def-smooth-tensor-field` · definition — Smooth tensor fields
- `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a tensor field is equivalent to smooth coordinate components
- `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` · proposition — Tensor products and contractions of smooth tensor fields are smooth
- `def-pullback-of-a-covariant-tensor-field` · definition — Pullback of a covariant tensor field
- `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` · proposition — Pullback of covariant tensor fields is smooth and functorial
- `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` · false-statement — A general mixed tensor field does not pull back along every smooth map
- `def-symmetric-and-alternating-covariant-tensor-subbundles` · definition — Symmetric and alternating covariant tensor subbundles
- `thm-symmetric-and-alternating-images-are-smooth-subbundles` · theorem — Symmetric and alternating images are smooth subbundles
- `def-exterior-power-bundle-of-the-cotangent-bundle` · definition — The exterior power bundle of the cotangent bundle
- `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` · theorem — Exterior power transition laws define a smooth vector bundle
- `def-smooth-differential-k-form` · definition — Smooth differential $k$-forms
- `prop-local-coordinate-expression-for-a-differential-form` · proposition — A differential form has a unique local coordinate expression
- `def-wedge-product-of-differential-forms` · definition — The wedge product of differential forms
- `prop-differential-forms-form-a-graded-commutative-algebra` · proposition — Differential forms form a graded-commutative algebra
- `def-interior-product-of-a-form-by-a-vector-field` · definition — Interior product of a form by a vector field
- `prop-interior-product-on-forms-is-a-graded-antiderivation` · proposition — Interior product on forms is a graded antiderivation
- `def-pullback-of-a-differential-form` · definition — Pullback of a differential form
- `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` · proposition — Pullback of forms is smooth, functorial, and preserves wedges
- `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` · proposition — A diffeomorphism pulls back tensor fields and forms isomorphically
- `fs-the-wedge-product-is-commutative` · false-statement — The wedge product is not commutative
- `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` · false-statement — A nonzero one-form wedges with itself to zero
- `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` · false-statement — Forms of degree above dimension vanish
- `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` · false-statement — Tensor components do not transform as independent scalars
- `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis` · false-statement — A general tensor is not determined by diagonal values alone

### `tensor-fields-exterior-algebra-and-differential-forms-examples` — Tensor Fields Exterior Algebra and Differential Forms — Examples (12 item(s))

- `ex-tensor-product-and-contraction-in-a-basis` · example — Tensor product and contraction in a basis
- `ex-a-bilinear-form-as-a-type-zero-two-tensor` · example — A bilinear form as a type $(0,2)$ tensor
- `ex-an-endomorphism-as-a-type-one-one-tensor` · example — An endomorphism as a type $(1,1)$ tensor
- `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` · example — The identity endomorphism and its coordinate-independent trace
- `ex-wedge-products-of-the-standard-dual-basis` · example — Wedge products of the standard dual basis
- `ex-determinant-as-the-pairing-of-top-exterior-powers` · example — Determinant as the pairing of top exterior powers
- `ex-the-euclidean-metric-as-a-symmetric-two-tensor` · example — The Euclidean metric as a symmetric two-tensor
- `ex-the-area-form-in-polar-coordinates` · example — The area form in polar coordinates
- `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve` · example — Pullback of the circle angular form along a parametrized curve
- `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` · counterexample — A vector field need not admit a pullback under a noninjective map
- `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection` · counterexample — A reflection changes the sign of a top-degree coordinate form
- `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` · example — The canonical one-form on a cotangent bundle

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-c1-map-whose-critical-values-have-positive-measure` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `933b14a793b0d3b356b8611f00e232c208b884bbde0e850b4f60dac439e9dd54` |
| `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `f6ef385e7a958a248ebf458418b2e01773767e30d147c4327c8b701ecdd46c90` |
| `cex-a-vector-field-with-no-pullback-under-a-noninjective-map` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `99ea922b5176747f0f9d411eed39e68cdfcc3c274e3992c38d7b7d0dba345f6a` |
| `cor-dimension-of-the-kth-exterior-power-is-binomial` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `99b9246943d425a7c70d6b5ec23ed96547fbdf58d82e13473c80206b2314f1fe` |
| `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse` | `sard-theorem-and-transversality` | gpt-5.6-terra | `42ce06d8758d774a6082aafc85de12afa27a925e0d4051d99e8f6e50c0c7a990` |
| `cor-positive-codimension-immersed-submanifolds-are-null` | `sard-theorem-and-transversality` | gpt-5.6-terra | `a0a407353cb4babb94ef5ba8a0e9aab3dbd78c86246aac0b68055abf1a6b301d` |
| `cor-regular-values-form-a-dense-g-delta-set` | `sard-theorem-and-transversality` | gpt-5.6-terra | `8a92327a98aa3939db468d04cbf830fcccd1666b79933c568834d45955db96b0` |
| `cor-transverse-intersection-theorem` | `sard-theorem-and-transversality` | gpt-5.6-terra | `95c19a0376ad5895b39fce050e47c7b16d679aa78783631ed06656decc35cd00` |
| `def-a-smooth-map-transverse-to-an-embedded-submanifold` | `sard-theorem-and-transversality` | gpt-5.6-terra | `8f62b394d90b788063d7b30dcd626c847b29114d9a2d782e6d41dbcaeddedf9b` |
| `def-exterior-algebra-of-covectors` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `7080c15a76af32f6631823612b044ee76b5a97192082797bf58ba7d00c4fd9a7` |
| `def-finite-dimensional-exterior-power-of-vectors` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `f6ba75ce6d93a929c9edee2cad5b5927d107c6818aa3d230b58e2a777a21bee9` |
| `def-interior-product-of-a-form-by-a-vector-field` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `16e1670ae54488d0e6404ca1f602865c2405dee0772110f1f0f32848ba1de7ed` |
| `def-interior-product-on-alternating-covectors` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `aace2eae5be1da81a2a4186d35d45d39da441f49524a4e54a1b30a1e986911ac` |
| `def-pullback-of-a-covariant-tensor-by-a-linear-map` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `25db150811784bb3017bde8364629c27f272f9c934f71830c2ca24caa4f5ca44` |
| `def-smooth-differential-k-form` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `8ea82d5240f7c89116beee9e747d9728b562bd6dd801a4892161fa1971d1d335` |
| `def-smooth-tensor-field` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `a89fb298bb02ddc5639cafeefa498bd2792714e67801355d73431f6e8a1de73d` |
| `def-symmetric-and-alternating-covariant-tensor-subbundles` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `7731ccc24959f190402474932ed278a28346df638a7c2d021b5004e7a39d3545` |
| `def-transverse-embedded-submanifolds` | `sard-theorem-and-transversality` | gpt-5.6-terra | `7fb76829bf6a5cc5ff11cd74543ae2dcb9be1d3e89c1f61ed9cb14d746fbb06b` |
| `def-type-r-s-tensor-on-a-finite-dimensional-vector-space` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `a49f53cab10721c6dfe208e2fdeecfbefb469cf50d27f58ffd91cdc4a7ed7c87` |
| `def-wedge-product-of-differential-forms` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `ec726d428bb4082d313f713cd4a5795c2180e20095da471160557ae5f1684504` |
| `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `728bc4242aa438e1d2575befeb568f8f17eeb0173d37ce490acb24ace32ee437` |
| `ex-a-fibre-product-of-submersions` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `c52946b253b0033ab6ea2290887ade9608967d91be14ef055f6e3ff3c146c803` |
| `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `f4f44fa32d5f416a2bc1cf9115b8467a283a93a88ad46ce685a644a2b71d3ef9` |
| `ex-tensor-product-and-contraction-in-a-basis` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `ef171bd1af1d71558d5765c63f9a0a5b315316359d0bef68b36b23b4b958f768` |
| `ex-the-area-form-in-polar-coordinates` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `fb0211557c9cae27177f99a79547063eb3113e2b0ce504d388a5d4420cff6efb` |
| `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `11b3f78078a4e31b87ab54a0414fb2aedde3a4503ced766ae07aab01ec244264` |
| `ex-the-euclidean-metric-as-a-symmetric-two-tensor` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `9a8a81102399af93f8da2801f7a951b77a2cb1fd987b322cf5726351f2ebd034` |
| `ex-the-identity-endomorphism-and-its-coordinate-independent-trace` | `tensor-fields-exterior-algebra-and-differential-forms-examples` | gpt-5.6-terra | `61c1a00452eb38829c93290597b0e7ebacf25058316ed8aea4c089f42bc55bed` |
| `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `21b81c3d35afc2c68e9bdf15f273fa1bf0240913d5af72d1815da7b65c0dd549` |
| `ex-transverse-and-tangent-intersections-of-plane-curves` | `sard-theorem-and-transversality-examples` | gpt-5.6-terra | `c6785f0bef47a09d36388f45201ca8ac5aa33ded436065c46e1e03bad86be9aa` |
| `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `61ccb8e36f68ffadf692f33fea448302ce81c7252d93eecb4aa1ab5c6ff92aa8` |
| `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `f550b6eb73355f9cf906643b2af12fe85ff5a69a46a18b525e8f050e2fbbc221` |
| `fs-every-critical-point-is-an-isolated-point` | `sard-theorem-and-transversality` | gpt-5.6-terra | `789e88930741de685654122a6d4cbaf06a42f8f5e7978a177cdfa39a88f3e57b` |
| `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `ce448b7650556dad6c86397f31b68442d14863fa5842a384027b62a74b9400a0` |
| `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` | `sard-theorem-and-transversality` | gpt-5.6-terra | `d0c95c3653bd039d4da1a6b3646748c65e6fe62bb6840969f6ed31e3c1c799f0` |
| `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `2ce99fd769e5319544d7b0b7c5dc6aa83496f3df800b3878454316a8404fbe52` |
| `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold` | `sard-theorem-and-transversality` | gpt-5.6-terra | `534a598e7071ff9efd10b4a5013269b372955ec39af3e5c38d399a7228f51497` |
| `fs-the-set-of-critical-values-is-always-closed` | `sard-theorem-and-transversality` | gpt-5.6-terra | `4708b97ca8a525be4236754f7d58a26ebdbd793c84357cd40d4784357476972f` |
| `fs-the-wedge-product-is-commutative` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `d17671c4b4a60a1e0a5825a6c8e3479f3835cda61dc5cdda0dea9b34c62cf038` |
| `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology` | `sard-theorem-and-transversality` | gpt-5.6-terra | `0af1c4482209bbd4a0a9d6d02e0a2a25ea05d54dcc05789cbc2d79f07532c598` |
| `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets` | `sard-theorem-and-transversality` | gpt-5.6-terra | `bb88a09a4804a8a0cef0d046c72ed69fdee0a3905b5c7a040f20345b17cdac58` |
| `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` | `sard-theorem-and-transversality` | gpt-5.6-terra | `b33d7443b3e4f764518492136404b3ec86ba311848493fef1bcbc5f1b7fde7f6` |
| `lem-sard-on-the-infinitely-flat-critical-stratum` | `sard-theorem-and-transversality` | gpt-5.6-terra | `c14010d22caf95df95e99cdbce2ec0e4c63887a5fc2a2e6ff10bc987b4b0effc` |
| `lem-sard-on-the-nonflat-critical-strata` | `sard-theorem-and-transversality` | gpt-5.6-terra | `0cbda9276815837a3910ca829eb4c606787b79a1a5e99df9675332cd22cea46c` |
| `lem-sard-slicing-for-compact-null-sections` | `sard-theorem-and-transversality` | gpt-5.6-terra | `e7c2e9186f69b59926f7b6a9306438c54acf73051ce73f5cb1e59ba672a5e713` |
| `lem-the-wedge-product-is-alternating-and-bilinear` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `4c793ba68711cea018356d574d19a1e6d9613e4900cd22e50d897f4cd7dbd953` |
| `prop-a-countable-chart-cover-detects-manifold-null-sets` | `sard-theorem-and-transversality` | gpt-5.6-terra | `9ebe823991f4eb4ade3929e5f76a8dd4fd0915f9c7aefc88f82c5bba806d4d20` |
| `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `0d3b0915d35a6843771da0915b16e13774bd820b92842e800b6c377b596dfac8` |
| `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` | `sard-theorem-and-transversality` | gpt-5.6-terra | `16c22391bbfea8e25cf424dcbc37418d18d0d01d267dfffcc0289ae7e9fbded2` |
| `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` | `sard-theorem-and-transversality` | gpt-5.6-terra | `254ad5aedbf886f35a121e2b6a556ab2a7e4b7e63e43dac3e8e6fdc4ebcc3e95` |
| `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` | `sard-theorem-and-transversality` | gpt-5.6-terra | `b61eb321bfcc1bf72ac780cece94b09daff81fc30e32f41debe88959de7e750a` |
| `prop-differential-forms-form-a-graded-commutative-algebra` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `b6229c1c8084d06e2e2e3607a42108a4520bbc4e22422246a9916c67744c8573` |
| `prop-exterior-power-duality-pairing` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `8641e1bec8bc9d30183f4a74e47eb06e181eb23604bf3f9ee2cdd2bd61ddc49f` |
| `prop-functoriality-of-finite-dimensional-exterior-powers` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `3b8b7fe685143a1b08a5c78d2ecaabdc8bfec692fa10f8262c7eed8fda2ad968` |
| `prop-global-graph-characterization-by-one-point-transverse-fibres` | `sard-theorem-and-transversality` | gpt-5.6-terra | `dff4c9018b7aef8c734784a9681cb53ddb703ea5bb2373de57411bd7a9c1d369` |
| `prop-interior-product-is-a-graded-antiderivation` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `722dccfd946855b88c6ac3e2f268e6a7ce843556c8e54fa7470859b8e966a75e` |
| `prop-interior-product-on-forms-is-a-graded-antiderivation` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `5b5aea046c427410a77607e71a002f648bf8d7fcc5e62e61ed2e020317b79a95` |
| `prop-linear-pullback-respects-tensor-products-and-permutations` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `abf469ab631e46ff619789589ba0fae939b6a48bde75bf7c68ffa4a38bd25ef0` |
| `prop-local-coordinate-expression-for-a-differential-form` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `b098f50ec254bd864ea7467c514da84743266e5f14589ef63a70747a89598759` |
| `prop-pullback-of-covariant-tensors-is-smooth-and-functorial` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `a1c75603eb62c2356eea52bb5edf832b821b0450a9431f7fe68ddf127fae89b9` |
| `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `c73a59e6a6b71b209a3f1d580a0e04bfe0a5663e8351932a36158b3d65d06c46` |
| `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `8f9de0c17d7aea1292c1f571e0b787e9898561fd72ff07f16de6baf0279f7fe4` |
| `prop-symmetrization-and-alternation-are-projections` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `90a20236d24f31339ce6b7dc5fe9725f4e2c394297fb3867efbd0c02ffd78955` |
| `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `366043a2efa6ec78d177ed29c069fbcf8ffa81567499606ee7c7da6ba562449b` |
| `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `b0468f2fefcc964e17a5092b6f89654d7459ca862ace4726f3bf41f4c1e53439` |
| `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` | `sard-theorem-and-transversality` | gpt-5.6-terra | `4f37a9fbf4d57c7af04e906574f9a586fe940a1c644a57a6caece13e931f1c39` |
| `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` | `sard-theorem-and-transversality` | gpt-5.6-terra | `823e1d2ff213586a99b0205f789b70a0973c6409ff5525391e40a0b530861346` |
| `prop-the-top-exterior-power-is-one-dimensional` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `cf3cee283b59562fb0ebbcc8457c9fe019dd057cdfe4f8632e920c9dac9a34d6` |
| `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target` | `sard-theorem-and-transversality` | gpt-5.6-terra | `748b1940d100526dc991e84651d19e6607e85144d45b65c6333306d13f6577e2` |
| `prop-transversality-is-stable-on-a-compact-source` | `sard-theorem-and-transversality` | gpt-5.6-terra | `bd002b1e80c5bfee1be97f40833f0f2eea4e589d965a9ffbdd16c815ec236941` |
| `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `0c8b418549a789a7a9718e5ad2582adb8df18bb0bc5c80f7b47d1575433a80d0` |
| `thm-morse-sard-for-euclidean-maps` | `sard-theorem-and-transversality` | gpt-5.6-terra | `5e91ac9aca295ce59d9ff23ccb492001cfce3fcfc3ea24691805f158cd788c28` |
| `thm-morse-sard-for-smooth-manifolds` | `sard-theorem-and-transversality` | gpt-5.6-terra | `40eb2fd88dcae1530e95b3ed45ffbae8ec812aaa2f4f88122167fdc158791cdd` |
| `thm-parametric-transversality` | `sard-theorem-and-transversality` | gpt-5.6-terra | `6ff7dd3bb420f60905a8c9a096540559ed64e138b7d6e6b22ce458ecd33436fa` |
| `thm-symmetric-and-alternating-images-are-smooth-subbundles` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `94e6b0cf5759327cef201eb624a12cea0efabc46e833fd005c60ef21b607e394` |
| `thm-tensor-transition-laws-define-a-smooth-vector-bundle` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `9d2d880942c18b2ca435c58debad9a94895c5b6830143620411abffbcccc7c38` |
| `thm-transverse-fibre-product-theorem` | `sard-theorem-and-transversality` | gpt-5.6-terra | `fa67fef6d05705f098f16bb4d44363b2ae3cd7d061849e3562a3d97cbb32427b` |
| `thm-universal-property-of-the-finite-dimensional-exterior-power` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `9eea0865273c4a42ff1b5584c116563af431c9b17e843a8b8669b86d2d6babd5` |
| `thm-wedge-product-is-associative-and-graded-commutative` | `tensor-fields-exterior-algebra-and-differential-forms` | gpt-5.6-terra | `d1a190eb1c06483a4e7a00d7703d7464f93faaf0fc986770a3897011c8e33791` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-27-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-27-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-27-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
