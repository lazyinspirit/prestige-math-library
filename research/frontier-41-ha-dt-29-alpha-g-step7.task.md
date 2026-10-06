# Step 7 adjudication — group **g**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **12**, **19**, **20**: 3 A/B pair(s), 6 page(s), 86 item(s), 0 open rejection(s) over 0 item(s).

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
| 12 | `the-hirzebruch-signature-theorem` | A | differential-topology | 555 | `intersection-pairings-self-intersection-and-euler-classes`, `smooth-cobordism-relations-groups-and-rings`, `characteristic-numbers-and-cobordism-obstructions`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `finite-averaging-and-character-theory-prerequisites` |
| 12 | `the-hirzebruch-signature-theorem-examples` | B | differential-topology | 556 | `the-hirzebruch-signature-theorem` |
| 19 | `isotopy-extension-and-embedding-theory-beyond-whitney` | A | differential-topology | 569 | `formal-immersions-and-the-smale-hirsch-theorem`, `the-whitney-trick-and-surgery-below-the-middle-dimension`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `vector-fields-flows-and-lie-derivatives`, `regular-homotopy-and-sphere-eversion` |
| 19 | `isotopy-extension-and-embedding-theory-beyond-whitney-examples` | B | differential-topology | 570 | `isotopy-extension-and-embedding-theory-beyond-whitney`, `regular-homotopy-and-sphere-eversion` |
| 20 | `characteristic-class-obstructions-to-immersions-and-embeddings` | A | differential-topology | 571 | `intersection-pairings-self-intersection-and-euler-classes`, `thom-spaces-normal-data-and-collapse-maps`, `characteristic-numbers-and-cobordism-obstructions`, `formal-immersions-and-the-smale-hirsch-theorem`, `isotopy-extension-and-embedding-theory-beyond-whitney`, `topological-vector-bundles-and-grassmannian-classification`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `linear-recurrences-and-rational-generating-functions` |
| 20 | `characteristic-class-obstructions-to-immersions-and-embeddings-examples` | B | differential-topology | 572 | `characteristic-class-obstructions-to-immersions-and-embeddings`, `compact-lie-groups-maximal-tori-and-peter-weyl-theory` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-hirzebruch-signature-theorem` — The Hirzebruch Signature Theorem (28 item(s))

- `def-middle-dimensional-intersection-form` · definition — The middle-dimensional intersection form of a closed oriented 4k-manifold
- `lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate` · lemma — The middle-dimensional intersection form is symmetric and nondegenerate
- `def-signature-of-a-closed-oriented-four-k-manifold` · definition — The signature of a closed oriented manifold of dimension divisible by four
- `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals` · lemma — The signature is independent of the diagonalizing basis and unchanged by scalar extension from the rationals to the reals
- `lem-a-half-dimensional-isotropic-subspace-forces-zero-signature` · lemma — A nondegenerate symmetric form with a totally isotropic subspace of half the dimension has zero signature
- `lem-boundary-restriction-image-is-lagrangian` · lemma — The restriction image on a cobordism boundary is Lagrangian
- `lem-signature-is-additive-under-disjoint-union-and-orientation-reversal` · lemma — The signature is additive under disjoint union and negates under orientation reversal
- `thm-signature-is-an-oriented-cobordism-invariant` · theorem — The signature of an oriented boundary vanishes, so the signature is an oriented cobordism invariant
- `lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia` · lemma — The tensor product of nondegenerate real symmetric forms has multiplicative signature
- `thm-signature-is-multiplicative-under-cartesian-products` · theorem — The signature is multiplicative under Cartesian products
- `def-formal-hyperbolic-tangent-series` · definition — The formal hyperbolic tangent series and the even series x/tanh x over the rationals
- `lem-formal-tangent-and-artanh-series-are-compositional-inverses` · lemma — The formal hyperbolic tangent and artanh series are inverse, with the artanh derivative
- `lem-l-series-coefficient-identity-for-projective-spaces` · lemma — The coefficient identity [z^{2k}](z/tanh z)^{2k+1} = 1 for every k
- `def-completed-fourfold-graded-cohomology-ring` · definition — The completed cohomology ring in degrees divisible by four
- `lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality` · lemma — The completed fourfold-graded cohomology ring is natural and satisfies the ring laws
- `def-hirzebruch-l-polynomials` · definition — The Hirzebruch L-polynomials and the total L-class of a real vector bundle
- `lem-l-polynomials-form-a-well-defined-multiplicative-sequence` · lemma — The L-polynomials are well defined and form a multiplicative, natural and stable sequence
- `def-total-l-class-of-a-smooth-manifold` · definition — The total L-class and the L-genus of a smooth manifold
- `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` · lemma — The L-genus is an oriented rational bordism ring homomorphism
- `lem-l-class-of-complex-projective-space` · lemma — The total L-class of complex projective space is a power of $x/\tanh x$
- `lem-l-genus-of-complex-projective-space-is-one` · lemma — The L-genus of complex projective space of even complex dimension is one
- `lem-signature-and-l-genus-agree-on-complex-projective-spaces` · lemma — The signature and the L-genus agree on complex projective space
- `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` · lemma — The signature and the L-genus agree on products of complex projective spaces
- `thm-hirzebruch-signature-theorem` · theorem — The Hirzebruch signature theorem
- `cor-four-dimensional-signature-formula` · corollary — The four-dimensional signature formula
- `cor-eight-dimensional-signature-formula` · corollary — The eight-dimensional signature formula
- `cor-signature-theorem-imposes-pontryagin-number-congruences` · corollary — The signature theorem imposes divisibility constraints on Pontryagin numbers
- `rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions` · remark — The zero extension of the signature is bookkeeping, not a geometric definition

### `the-hirzebruch-signature-theorem-examples` — The Hirzebruch Signature Theorem — Examples (5 item(s))

- `ex-signature-and-p-one-of-complex-projective-two-space` · example — Signature and first Pontryagin number of the complex projective plane
- `ex-orientation-reversed-complex-projective-plane-has-signature-minus-one` · example — The orientation-reversed projective plane has signature minus one
- `ex-signature-of-s-two-times-s-two-is-zero` · example — The signature of the product of two 2-spheres is zero: the hyperbolic intersection form
- `ex-signature-is-multiplicative-on-products-of-projective-spaces` · example — Multiplicativity of the signature on products of projective spaces
- `cex-euler-characteristic-does-not-determine-signature` · counterexample — The Euler characteristic does not determine the signature

### `isotopy-extension-and-embedding-theory-beyond-whitney` — Isotopy Extension and Embedding Theory Beyond Whitney (21 item(s))

- `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy` · definition — Smooth isotopies, diffeotopies and ambient isotopies
- `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image` · lemma — The velocity field of an isotopy is well defined along its image
- `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood` · lemma — The velocity field of an isotopy extends to a neighbourhood
- `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field` · lemma — Compactness gives a compactly supported time-dependent velocity field
- `lem-the-extended-time-dependent-field-has-a-global-time-one-flow` · lemma — A compactly supported time-dependent field has a global time-one flow
- `thm-isotopy-extension` · theorem — The isotopy extension theorem
- `cor-isotopic-embeddings-have-diffeomorphic-complements` · corollary — Isotopic embeddings of a compact manifold have diffeomorphic complements
- `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy` · corollary — Compatible tubular neighbourhoods agree near compact sets up to ambient isotopy
- `lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold` · lemma — The diagonal of a smooth manifold is a closed embedded submanifold
- `def-self-transverse-immersion-and-double-point-locus` · definition — Self-transverse immersions and the double point locus
- `lem-double-point-locus-has-expected-dimension-two-m-minus-n` · lemma — The double point locus has the expected dimension $2m-n$
- `lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m` · lemma — A self-transverse immersion has no double points when $n>2m$
- `cor-a-proper-injective-immersion-is-an-embedding` · corollary — A proper injective immersion is an embedding
- `lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks` · lemma — A double point has two disjoint embedded sheet disks meeting transversely
- `def-primary-double-point-obstruction-to-removing-self-intersections` · definition — The primary double point obstruction to removing self-intersections
- `lem-a-collared-whitney-disk-can-be-made-disjoint-from-an-entire-compact-immersed-image` · lemma — A collared Whitney disk can avoid an entire compact immersed image
- `lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs` · lemma — A small regular homotopy removes triple images and preserves transverse branch pairs
- `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range` · proposition — Whitney disjunction removes algebraically cancelling double points
- `rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings` · remark — Vanishing primary and characteristic obstructions do not classify embeddings
- `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery` · remark — Metastable embedding classification requires deleted-product machinery
- `rem-isotopy-extension-needs-compact-source-or-proper-support-control` · remark — Isotopy extension needs compact source or proper support control

### `isotopy-extension-and-embedding-theory-beyond-whitney-examples` — Isotopy Extension and Embedding Theory Beyond Whitney — Examples (5 item(s))

- `lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere` · lemma — An ambient isotopy preserves the orientation of an invariant round sphere
- `ex-ambient-isotopy-of-an-unknotted-circle-in-r-three` · example — Extending a visible isotopy of an unknotted circle in $\mathbb R^3$
- `ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements` · example — Compact isotopic submanifolds have isomorphic normal bundles and diffeomorphic complements
- `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one` · counterexample — A reflected sphere embedding is regularly homotopic but not isotopic to the standard one
- `ex-double-point-dimension-count-for-surfaces-in-four-and-five-space` · example — The double point dimension count for surfaces in four- and five-space

### `characteristic-class-obstructions-to-immersions-and-embeddings` — Characteristic Class Obstructions to Immersions and Embeddings (22 item(s))

- `def-stable-normal-inverse-of-the-tangent-bundle` · definition — Stable normal inverse of the tangent bundle
- `lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial` · lemma — The pullback of a trivial smooth vector bundle is canonically trivial
- `cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial` · corollary — The pullback of the Euclidean tangent bundle is canonically trivial
- `lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes` · lemma — Positive intermediate cohomology of compactified Euclidean space vanishes
- `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` · lemma — An embedding into Euclidean space gives a rank-(n-m) stable normal inverse
- `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle` · lemma — An immersion into R^n gives a rank-(n-m) representative of the stable normal bundle
- `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension` · proposition — Smale-Hirsch makes rank reduction sufficient for Euclidean immersion in positive codimension
- `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class` · lemma — The normal Stiefel-Whitney class is the multiplicative inverse of the tangent class
- `lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class` · lemma — The normal Pontryagin class is the rational inverse of the tangent Pontryagin class
- `def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold` · definition — Normal Stiefel-Whitney and Pontryagin classes of a closed manifold
- `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions` · corollary — High normal Stiefel-Whitney classes obstruct low-codimension immersions
- `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions` · corollary — High normal Pontryagin classes obstruct low-codimension immersions
- `lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion` · lemma — Finite normal push-off count for an even-dimensional Euclidean immersion
- `cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings` · corollary — Top normal classes vanish for Euclidean embeddings
- `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection` · proposition — The Euler class of an oriented even-rank normal bundle controls self-intersection
- `lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring` · lemma — The inverse of one plus the generator in the truncated mod-two polynomial ring
- `lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space` · lemma — Stiefel-Whitney classes of the tangent bundle of real projective space
- `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` · theorem — Real projective space Stiefel-Whitney non-immersion obstruction
- `prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion` · proposition — Parallelizable manifolds have no stable characteristic-class obstruction to Euclidean immersion
- `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions` · corollary — Embedding obstructions include all immersion normal-class obstructions
- `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` · remark — Characteristic-class vanishing is only necessary for embedding
- `rem-characteristic-class-construction-is-cited-not-rebuilt` · remark — The characteristic-class construction is cited, not rebuilt

### `characteristic-class-obstructions-to-immersions-and-embeddings-examples` — Characteristic Class Obstructions to Immersions and Embeddings — Examples (5 item(s))

- `ex-normal-class-calculation-for-real-projective-space` · example — Normal-class calculation for real projective space
- `ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space` · example — Power-of-two projective spaces do not embed in twice the dimension minus one
- `ex-parallelizable-tori-have-trivial-stable-normal-class` · example — Parallelizable tori have trivial stable normal class
- `ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` · example — The normal line of an oriented hypersurface is trivial
- `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` · counterexample — Vanishing stable characteristic classes do not make two embeddings isotopic

## Your seams

Your pages depend on another group's:

- `the-hirzebruch-signature-theorem` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `the-hirzebruch-signature-theorem` requires `characteristic-numbers-and-cobordism-obstructions` (group b, batch 11)
- `isotopy-extension-and-embedding-theory-beyond-whitney` requires `formal-immersions-and-the-smale-hirsch-theorem` (group j, batch 17)
- `isotopy-extension-and-embedding-theory-beyond-whitney` requires `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j, batch 14)
- `isotopy-extension-and-embedding-theory-beyond-whitney` requires `regular-homotopy-and-sphere-eversion` (group b, batch 18)
- `isotopy-extension-and-embedding-theory-beyond-whitney-examples` requires `regular-homotopy-and-sphere-eversion` (group b, batch 18)
- `characteristic-class-obstructions-to-immersions-and-embeddings` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `characteristic-class-obstructions-to-immersions-and-embeddings` requires `characteristic-numbers-and-cobordism-obstructions` (group b, batch 11)
- `characteristic-class-obstructions-to-immersions-and-embeddings` requires `formal-immersions-and-the-smale-hirsch-theorem` (group j, batch 17)

Another group's pages depend on yours:

- `exotic-smooth-structures-and-milnor-spheres` (group d) requires your `the-hirzebruch-signature-theorem`

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

# Step 7 batch adjudication, `frontier-41-ha-dt-29`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
