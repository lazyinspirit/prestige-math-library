# Step 7 adjudication — group **d**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **24**, **28**, **2**: 3 A/B pair(s), 6 page(s), 85 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-41-ha-dt-29-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 24 | `exotic-smooth-structures-and-milnor-spheres` | A | differential-topology | 579 | `intersection-pairings-self-intersection-and-euler-classes`, `smooth-cobordism-relations-groups-and-rings`, `thom-spaces-normal-data-and-collapse-maps`, `the-hirzebruch-signature-theorem`, `the-smooth-h-cobordism-theorem`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `topological-vector-bundles-and-grassmannian-classification`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `vector-field-index-euler-characteristic-and-poincare-hopf` |
| 24 | `exotic-smooth-structures-and-milnor-spheres-examples` | B | differential-topology | 580 | `exotic-smooth-structures-and-milnor-spheres` |
| 28 | `deligne-products-and-categorical-eilenberg-watts` | A | homological-algebra | 925 | `finite-abelian-categories-and-eilenberg-watts`, `ends-coends-and-weighted-limits`, `enriched-categories` |
| 28 | `deligne-products-and-categorical-eilenberg-watts-examples` | B | homological-algebra | 926 | `deligne-products-and-categorical-eilenberg-watts` |
| 2 | `intersection-pairings-self-intersection-and-euler-classes` | A | differential-topology | 531 | `oriented-and-mod-two-intersection-numbers`, `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `chern-weil-theory-and-characteristic-forms` |
| 2 | `intersection-pairings-self-intersection-and-euler-classes-examples` | B | differential-topology | 532 | `intersection-pairings-self-intersection-and-euler-classes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `exotic-smooth-structures-and-milnor-spheres` — Exotic Smooth Structures and Milnor Spheres (43 item(s))

- `def-exotic-smooth-structure-and-exotic-sphere` · definition — Exotic smooth structure and exotic sphere
- `def-smooth-homotopy-sphere` · definition — Smooth homotopy sphere
- `lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice` · lemma — Compact smooth manifolds have finite CW models under countable choice
- `lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere` · lemma — Connected sum preserves homotopy spheres
- `lem-theta-n-connected-sum-operation-is-well-defined` · lemma — Connected sum descends to oriented h-cobordism classes
- `lem-orientation-reversal-is-inverse-in-theta-n` · lemma — Orientation reversal is the connected-sum inverse
- `def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres` · definition — The homotopy-sphere group Θ_n
- `thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five` · theorem — H-cobordism of homotopy spheres equals oriented diffeomorphism
- `lem-parallelizable-boundaries-form-a-subgroup` · lemma — Parallelizable bounds define a subgroup
- `def-b-p-n-plus-one-subgroup-of-homotopy-spheres` · definition — The subgroup bP_{n+1}
- `rem-homotopy-spheres-stable-parallelizability-recorded-not-proved` · remark — Stable parallelizability of homotopy spheres (recorded, not proved here)
- `def-quaternionic-clutching-bundles-xi-h-j-over-s-four` · definition — Quaternionic clutching bundles over S⁴
- `lem-euler-number-is-the-clutching-degree` · lemma — Euler number from the clutching obstruction
- `lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two` · lemma — Pontryagin calibration of left and right quaternionic clutching
- `lem-degree-four-characteristic-numbers-add-under-clutching-product` · lemma — Degree-four characteristic numbers add under clutching product
- `lem-euler-and-first-pontryagin-classes-of-xi-h-j` · lemma — Euler and first Pontryagin classes of ξ_{h,j}
- `def-milnor-sphere-bundle-m-h-j` · definition — Milnor sphere and disk bundles
- `thm-h-plus-j-equals-plus-or-minus-one-gives-a-homology-seven-sphere` · theorem — Euler number ±1 gives an integral homology seven-sphere
- `lem-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-simply-connected` · lemma — Milnor sphere bundles are simply connected
- `cor-milnor-sphere-bundles-with-euler-number-plus-or-minus-one-are-homotopy-seven-spheres` · corollary — Milnor Euler ±1 bundles are homotopy seven-spheres
- `lem-two-disk-complement-in-a-homotopy-sphere-is-an-h-cobordism-in-dimensions-at-least-six` · lemma — Two-disk complement is an h-cobordism
- `lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick` · lemma — Alexander extension over a disk
- `cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven` · corollary — Milnor homotopy seven-spheres are topological spheres
- `lem-relative-kronecker-evaluation-is-well-defined-and-natural` · lemma — Relative Kronecker evaluation is well-defined and natural
- `lem-relative-middle-cup-products-are-symmetric` · lemma — Relative middle cup products are symmetric
- `lem-relative-cap-evaluation-identity` · lemma — Relative cap product evaluation identity
- `lem-collared-gluing-has-relative-excision-and-evaluation-maps` · lemma — Collared gluing gives relative excision and evaluation maps
- `lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology` · lemma — Compact oriented boundary manifolds have finite-dimensional cohomology
- `lem-integral-middle-cohomology-vanishing-implies-real-vanishing` · lemma — Integral middle cohomology vanishing implies real middle cohomology vanishing
- `lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator` · lemma — Disk-bundle Thom class pairs with the base generator
- `lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting` · lemma — Tangent bundle of the Milnor disk bundle has the stable splitting
- `def-boundary-middle-form-and-signature` · definition — Relative middle form and signature for an eight-manifold with boundary
- `lem-boundary-middle-form-is-well-defined-and-glues` · lemma — Boundary middle form and Novikov gluing
- `lem-disk-bundle-intersection-form-and-signature-for-xi-h-j` · lemma — Disk-bundle middle form and signature
- `lem-relative-pontryagin-square-equals-mixed-evaluation` · lemma — Relative square equals mixed evaluation
- `lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j` · lemma — Relative Pontryagin square of a Milnor disk bundle
- `def-milnor-lambda-candidate-from-a-filling` · definition — Milnor lambda candidate from a supplied filling
- `lem-relative-pontryagin-square-glues-across-a-seven-boundary` · lemma — Relative Pontryagin squares glue to the closed Pontryagin number
- `thm-milnor-lambda-invariant-is-well-defined-modulo-seven` · theorem — Milnor lambda is an oriented boundary invariant modulo seven
- `thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven` · theorem — Milnor’s exotic seven-sphere
- `rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved` · remark — The Kervaire-Milnor calculation of Theta seven (recorded, not proved here)
- `rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic` · remark — Scope of the order-28 calculation
- `rem-none-of-the-high-dimensional-exotic-sphere-results-settle-the-smooth-four-dimensional-poincare-problem` · remark — The smooth four-dimensional boundary

### `exotic-smooth-structures-and-milnor-spheres-examples` — Exotic Smooth Structures and Milnor Spheres — Examples (5 item(s))

- `ex-the-standard-seven-sphere-as-a-quaternionic-hopf-sphere-bundle` · example — The quaternionic Hopf sphere bundle
- `ex-gysin-sequence-for-a-milnor-sphere-bundle` · example — Gysin calculation of a Milnor homology sphere
- `ex-intersection-form-of-the-bounding-disk-bundle` · example — Intersection matrix of a Milnor bound
- `ex-two-milnor-spheres-with-distinct-congruence-invariants` · example — Two distinct Milnor lambda values
- `cex-homeomorphism-type-does-not-determine-smooth-structure-in-dimension-seven` · counterexample — Topological type does not determine smooth type

### `deligne-products-and-categorical-eilenberg-watts` — Deligne Products and Categorical Eilenberg–Watts (12 item(s))

- `lem-finite-vector-space-copowers-in-a-linear-abelian-category` · lemma — Finite vector-space copowers in a $k$-linear abelian category
- `def-deligne-product-of-finite-linear-categories` · definition — The Deligne product of finite linear categories
- `lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules` · lemma — Bilinear right exact functors are determined by their value on the regular modules
- `thm-finite-deligne-products-exist-by-tensor-product-algebras` · theorem — Finite Deligne products exist via tensor-product algebras
- `lem-opposite-deligne-product-identifies-with-finite-bimodules` · lemma — The opposite Deligne product is the category of finite bimodules
- `thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories` · theorem — Categorical Eilenberg–Watts equivalences for finite linear categories
- `lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps` · lemma — Finite Eilenberg–Watts kernels: explicit end and coend universal maps
- `cor-kernel-composition-and-transformations-use-balanced-tensor-products` · corollary — Composition of Deligne kernels is balanced tensor product
- `def-left-and-right-nakayama-functors-by-finite-kernel-calculus` · definition — Left and right Nakayama functors by finite kernel calculus
- `lem-nakayama-kernels-give-well-defined-adjoint-functors` · lemma — Nakayama kernels give well-defined adjoint functors
- `prop-left-to-right-exact-equivalence-sends-identity-to-nakayama` · proposition — The left-to-right exact equivalence sends the identity to the Nakayama functor
- `prop-projective-nakayama-pairing-and-symmetric-algebra-specialization` · proposition — The projective Nakayama pairing and the symmetric-algebra specialization

### `deligne-products-and-categorical-eilenberg-watts-examples` — Deligne Products and Categorical Eilenberg–Watts — Examples (4 item(s))

- `ex-deligne-product-of-finite-vector-space-categories` · example — The Deligne product of finite vector spaces is finite vector spaces
- `cex-left-to-right-exact-equivalence-need-not-preserve-the-identity` · counterexample — The left-to-right exact equivalence need not preserve the identity
- `ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules` · example — The kernel end and coend distinguish the regular and co-regular bimodules
- `cex-a-deligne-kernel-need-not-be-one-external-tensor-factor` · counterexample — A Deligne kernel need not be one external tensor factor

### `intersection-pairings-self-intersection-and-euler-classes` — Intersection Pairings Self Intersection and Euler Classes (17 item(s))

- `def-geometric-intersection-pairing-on-a-closed-oriented-manifold` · definition — The geometric intersection pairing on a closed oriented manifold
- `lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles` · lemma — Bordant cycles have equal intersection numbers
- `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold` · lemma — The normal Thom class realizes the Poincare dual of a closed submanifold
- `lem-normal-bundle-of-the-zero-locus-of-a-transverse-section` · lemma — Normal bundle of the zero locus of a transverse section
- `lem-pullback-of-the-thom-class-along-a-transverse-section` · lemma — Pullback of the Thom class along a transverse section computes the Euler class
- `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual` · proposition — The zero locus of a transverse section represents the Euler dual
- `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing` · theorem — The geometric intersection number is the Poincare-dual cup pairing
- `rem-cap-product-order-awaits-the-at-sign-convention` · remark — The cap-product order is fixed by the AT convention, not minted here
- `def-self-intersection-number-of-an-oriented-submanifold` · definition — The self-intersection number of a complementary-dimensional oriented submanifold
- `lem-normal-push-off-zeros-are-self-intersection-points` · lemma — Normal push-off zeros are the self-intersection points
- `thm-self-intersection-is-the-euler-number-of-the-normal-bundle` · theorem — The self-intersection number is the Euler number of the normal bundle
- `lem-normal-bundle-of-the-diagonal-is-canonically-tm` · lemma — The normal bundle of the diagonal is canonically the tangent bundle
- `cor-diagonal-self-intersection-is-the-euler-number-of-tm` · corollary — The diagonal self-intersection is the Euler number of the tangent bundle
- `prop-mod-two-self-intersection-needs-no-orientation` · proposition — The mod two self-intersection is the top Stiefel-Whitney evaluation
- `cor-nowhere-zero-section-forces-the-euler-class-to-vanish` · corollary — A nowhere-zero section forces the Euler data to vanish
- `rem-euler-class-construction-remains-owned-by-at` · remark — The Euler class construction remains owned by algebraic topology
- `rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally` · remark — Not every integral homology class is represented by an embedded submanifold

### `intersection-pairings-self-intersection-and-euler-classes-examples` — Intersection Pairings Self Intersection and Euler Classes — Examples (4 item(s))

- `ex-self-intersection-of-the-zero-section-in-an-oriented-plane-bundle` · example — Self-intersection of the zero section in an oriented plane bundle
- `ex-diagonal-in-the-two-sphere-has-self-intersection-two` · example — The diagonal in the two-sphere has self-intersection two
- `ex-coordinate-circles-give-the-hyperbolic-intersection-form-on-a-torus` · example — Coordinate circles give the hyperbolic intersection form on a torus
- `cex-the-core-circle-of-a-mobius-band-has-no-integral-oriented-self-intersection` · counterexample — The Mobius core circle has no integral oriented self-intersection but mod two data survives

## Your seams

Your pages depend on another group's:

- `exotic-smooth-structures-and-milnor-spheres` requires `the-hirzebruch-signature-theorem` (group g, batch 12)
- `exotic-smooth-structures-and-milnor-spheres` requires `the-smooth-h-cobordism-theorem` (group h, batch 15)
- `exotic-smooth-structures-and-milnor-spheres` requires `vector-field-index-euler-characteristic-and-poincare-hopf` (group h, batch 7)
- `deligne-products-and-categorical-eilenberg-watts` requires `finite-abelian-categories-and-eilenberg-watts` (group a, batch 27)

Another group's pages depend on yours:

- `characteristic-numbers-and-cobordism-obstructions` (group b) requires your `intersection-pairings-self-intersection-and-euler-classes`
- `fixed-point-index-and-the-lefschetz-theorem` (group e) requires your `intersection-pairings-self-intersection-and-euler-classes`
- `smooth-surgery-traces-and-handle-trading` (group f) requires your `intersection-pairings-self-intersection-and-euler-classes`
- `the-hirzebruch-signature-theorem` (group g) requires your `intersection-pairings-self-intersection-and-euler-classes`
- `characteristic-class-obstructions-to-immersions-and-embeddings` (group g) requires your `intersection-pairings-self-intersection-and-euler-classes`
- `vector-field-index-euler-characteristic-and-poincare-hopf` (group h) requires your `intersection-pairings-self-intersection-and-euler-classes`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-41-ha-dt-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-41-ha-dt-29`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
