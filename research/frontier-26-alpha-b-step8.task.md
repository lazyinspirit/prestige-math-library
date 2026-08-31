# Step 8 — group **b**, run `frontier-26`

You are the group Alpha for batches **6**, **7**, **9**: 3 A/B pair(s), 6 page(s), 131 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `strictification-and-mac-lanes-coherence-theorem` | A | category-theory | 365.025 | `monoidal-categories-and-monoidal-functors-examples` |
| 6 | `strictification-and-mac-lanes-coherence-theorem-examples` | B | category-theory | 365.026 | `strictification-and-mac-lanes-coherence-theorem` |
| 7 | `mapping-cones-cylinders-and-chain-triangles` | A | homological-algebra | 365.041 | `chain-homotopy-and-the-homotopy-category-examples` |
| 7 | `mapping-cones-cylinders-and-chain-triangles-examples` | B | homological-algebra | 365.042 | `mapping-cones-cylinders-and-chain-triangles` |
| 9 | `smooth-vector-bundles-and-sections` | A | differential-geometry | 451 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds` |
| 9 | `smooth-vector-bundles-and-sections-examples` | B | differential-geometry | 452 | `smooth-vector-bundles-and-sections` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `strictification-and-mac-lanes-coherence-theorem` — Strictification and Mac Lanes Coherence Theorem (22 item(s))

- `def-canonical-morphism-between-parenthesised-words` · definition — Canonical morphisms between parenthesised tensor words
- `rem-every-diagram-commutes-is-false-as-stated` · remark — Why 'every diagram commutes' is false as stated
- `def-the-category-of-binary-words` · definition — The category of binary words
- `thm-the-category-of-binary-words-is-monoidal` · theorem — The category of binary words is monoidal
- `def-the-category-of-right-module-endofunctors` · definition — The category of right-module endofunctors
- `thm-the-module-endofunctor-category-is-strict-monoidal` · theorem — The right-module endofunctor category is strict monoidal
- `thm-mac-lane-strictification` · theorem — Mac Lane strictification
- `rem-strictification-gives-equivalence-and-never-isomorphism` · remark — Strictification gives equivalence, not on-the-nose identification
- `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence` · theorem — A monoidal category equivalent to a strict one satisfies coherence
- `rem-the-choice-cost-of-strictification` · remark — Strictification itself costs no Choice, but skeletal strictification does
- `thm-mac-lane-coherence-in-the-canonical-map-form` · theorem — Mac Lane coherence in canonical-map form
- `rem-the-exact-scope-of-the-coherence-statement` · remark — The coherence theorem's exact scope
- `thm-unbracketed-tensor-strings-are-well-defined-expressions` · theorem — Unbracketed tensor strings are well defined after coherence
- `thm-the-monoid-object-axioms-may-be-written-without-associators` · theorem — The monoid-object axioms may be written without associators
- `thm-the-word-category-is-the-free-monoidal-category-on-one-generator` · theorem — The word category is the free monoidal category on one generator
- `cor-coherence-follows-from-freeness` · corollary — The free-word formulation implies the canonical-map formulation
- `rem-the-history-of-the-coherence-theorem` · remark — The historical route to coherence and the route authored here
- `fs-every-diagram-in-a-monoidal-category-commutes` · false-statement — Every diagram in a monoidal category commutes
- `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` · false-statement — Every monoidal category is isomorphic to a strict one
- `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one` · false-statement — Every monoidal category is monoidally equivalent to a skeletal strict one
- `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal` · false-statement — Coherence says that any two parallel morphisms in a monoidal category are equal
- `fs-strictification-requires-the-axiom-of-choice` · false-statement — Strictification requires the axiom of choice

### `strictification-and-mac-lanes-coherence-theorem-examples` — Strictification and Mac Lanes Coherence Theorem — Examples (6 item(s))

- `ex-the-two-routes-around-the-pentagon-are-equal` · example — The two routes around the pentagon are equal
- `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product` · example — A canonical map between two bracketings of a five-fold product
- `ex-the-word-category-on-words-of-length-three` · example — The word category on words of length three
- `ex-strictification-of-a-cartesian-monoidal-category-computed` · example — Strictification of a cartesian monoidal category computed
- `cex-two-formally-distinct-words-that-become-the-same-object` · counterexample — Two formally distinct words can become the same object
- `ex-a-monoid-object-written-with-and-without-associators` · example — A monoid object written with and without associators

### `mapping-cones-cylinders-and-chain-triangles` — Mapping Cones Cylinders and Chain Triangles (34 item(s))

- `def-mapping-cone-of-a-chain-map` · definition — The mapping cone of a chain map
- `lem-the-mapping-cone-differential-squares-to-zero` · lemma — The mapping-cone differential squares to zero
- `def-canonical-inclusion-and-projection-for-a-mapping-cone` · definition — The canonical inclusion and projection for a mapping cone
- `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact` · theorem — The canonical mapping-cone sequence is degreewise split short exact
- `def-cone-triangle-of-a-chain-map` · definition — The cone triangle of a chain map
- `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift` · proposition — The cone of the zero map is the direct sum with a shift
- `thm-the-cone-of-an-identity-map-is-contractible` · theorem — The cone of an identity map is contractible
- `prop-isomorphic-chain-maps-have-isomorphic-cones` · proposition — Isomorphic chain maps have isomorphic cones
- `def-morphism-of-chain-maps` · definition — A morphism of chain maps
- `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones` · theorem — A morphism of chain maps induces a chain map of cones
- `prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes` · proposition — Mapping cone is functorial on the arrow category of complexes
- `lem-homotopic-maps-have-chain-isomorphic-mapping-cones` · lemma — Homotopic maps have chain-isomorphic mapping cones
- `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic` · theorem — A chain map is a quasi-isomorphism exactly when its cone is acyclic
- `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible` · theorem — A chain map is a homotopy equivalence exactly when its cone is contractible
- `def-mapping-cylinder-of-a-chain-map` · definition — The mapping cylinder of a chain map
- `lem-the-mapping-cylinder-differential-squares-to-zero` · lemma — The mapping-cylinder differential squares to zero
- `thm-the-mapping-cylinder-factors-a-chain-map` · theorem — The mapping cylinder factors a chain map
- `prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder` · proposition — The target is a strong deformation retract of the mapping cylinder
- `cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence` · corollary — Every chain map factors as a cofibration-like inclusion followed by a homotopy equivalence
- `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone` · proposition — The quotient of the mapping cylinder by its source is the mapping cone
- `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` · proposition — Cones preserve chain-homotopy equivalences of arrows
- `lem-the-three-cone-calculation-for-a-composite-chain-map` · lemma — The three-cone calculation for a composite chain map
- `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category` · proposition — The cone triangle of a null-homotopic map splits in the homotopy category
- `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category` · proposition — A chain map with contractible cone becomes an isomorphism in the homotopy category
- `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism` · proposition — The cone construction commutes with shift up to the canonical sign isomorphism
- `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences` · proposition — An exact functor carries mapping-cone sequences to mapping-cone sequences
- `def-relative-homology-of-a-chain-map` · definition — The relative homology of a chain map
- `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows` · proposition — Relative homology is invariant under homotopy equivalence of arrows
- `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms` · corollary — Relative homology vanishes exactly for quasi-isomorphisms
- `fs-the-mapping-cone-differential-needs-no-minus-sign` · false-statement — FALSE: the mapping-cone differential needs no minus sign
- `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting` · false-statement — FALSE: the degreewise splitting of the cone sequence is a chain splitting
- `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data` · false-statement — FALSE: mapping cone is a functor on the homotopy category with no extra data
- `fs-an-acyclic-mapping-cone-is-contractible` · false-statement — FALSE: an acyclic mapping cone is contractible
- `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization` · false-statement — FALSE: the mapping-cylinder factorization is a model-category factorization

### `mapping-cones-cylinders-and-chain-triangles-examples` — Mapping Cones Cylinders and Chain Triangles — Examples (8 item(s))

- `ex-the-cone-of-multiplication-by-m-on-the-integers` · example — The cone of multiplication by m on the integers
- `ex-the-cone-of-zero-and-of-the-identity` · example — The cone of zero and of the identity
- `ex-a-quasi-isomorphism-detected-by-an-acyclic-cone` · example — A quasi-isomorphism detected by an acyclic cone
- `cex-an-acyclic-noncontractible-cone` · counterexample — An acyclic noncontractible cone
- `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes` · example — The mapping cylinder of an inclusion of two-term complexes
- `ex-relative-homology-of-a-map-between-stalk-complexes` · example — Relative homology of a map between stalk complexes
- `ex-the-three-cone-calculation-for-a-composite` · example — The three-cone calculation for a composite
- `cex-a-degreewise-split-cone-sequence-with-no-chain-splitting` · counterexample — A degreewise split cone sequence with no chain splitting

### `smooth-vector-bundles-and-sections` — Smooth Vector Bundles and Sections (51 item(s))

- `def-smooth-fibre-bundle-and-local-trivialization` · definition — Smooth fibre bundles and local trivializations
- `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle` · definition — Smooth vector bundles, rank, fibres, and trivial bundles
- `prop-a-vector-bundle-projection-is-a-surjective-submersion` · proposition — A vector bundle projection is a surjective submersion
- `def-vector-bundle-chart-and-transition-function` · definition — Vector bundle charts and transition functions
- `lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities` · lemma — Vector bundle transition functions satisfy the cocycle identities
- `thm-vector-bundle-construction-from-a-smooth-cocycle` · theorem — Construction of a vector bundle from a smooth cocycle
- `prop-isomorphic-cocycles-define-isomorphic-vector-bundles` · proposition — Isomorphic cocycles define isomorphic vector bundles
- `def-restriction-of-a-vector-bundle` · definition — Restrictions of vector bundles
- `prop-the-zero-section-is-a-smooth-embedding` · proposition — The zero section is a smooth embedding
- `prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r` · proposition — The total space of a rank-r bundle has dimension dim M + r
- `def-smooth-section-local-section-and-support` · definition — Smooth sections, local sections, and support
- `def-local-frame-and-global-frame-of-a-vector-bundle` · definition — Local and global frames of a vector bundle
- `prop-local-frames-and-local-trivializations-are-equivalent-data` · proposition — Local frames and local trivializations are equivalent data
- `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame` · corollary — A vector bundle is trivial if and only if it has a global frame
- `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components` · proposition — Smoothness of a section is equivalent to smooth local components
- `prop-smooth-sections-form-a-module-over-smooth-functions` · proposition — Smooth sections form a module over smooth functions
- `lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section` · lemma — Every vector in a fibre extends to a compactly supported smooth section
- `lem-locally-finite-linear-combinations-of-sections-are-smooth` · lemma — Locally finite linear combinations of sections are smooth
- `def-vector-bundle-map-over-a-smooth-base-map` · definition — Vector bundle maps over a smooth base map
- `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices` · proposition — Smoothness of a bundle map is equivalent to smooth local matrices
- `prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism` · proposition — A fibrewise bijective smooth bundle map over a diffeomorphism is a bundle isomorphism
- `def-vector-subbundle` · definition — Vector subbundles
- `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles` · proposition — Constant-rank kernels and images of bundle maps over one base are subbundles
- `def-pullback-vector-bundle-as-a-fibre-product` · definition — Pullback vector bundles as fibre products
- `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` · theorem — The pullback fibre product is a smooth vector bundle
- `prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism` · proposition — Pullback is functorial up to canonical bundle isomorphism
- `def-whitney-sum-of-vector-bundles` · definition — Whitney sums of vector bundles
- `thm-whitney-sums-are-smooth-vector-bundles` · theorem — Whitney sums are smooth vector bundles
- `def-dual-and-hom-vector-bundles` · definition — Dual and Hom vector bundles
- `thm-dual-and-hom-transition-functions-define-smooth-bundles` · theorem — Dual and Hom transition functions define smooth bundles
- `prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps` · proposition — Sections of Hom are the same as smooth fibrewise linear maps
- `prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle` · proposition — Bundle maps over f are sections of the pulled-back Hom bundle
- `def-quotient-vector-bundle-by-a-subbundle` · definition — Quotient vector bundles by a subbundle
- `thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle` · theorem — A vector bundle quotient by a subbundle is a smooth vector bundle
- `prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map` · proposition — The canonical map to a quotient bundle is a smooth bundle map
- `def-smooth-bundle-metric` · definition — Smooth bundle metrics
- `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` · theorem — Every smooth vector bundle admits a smooth bundle metric
- `prop-orthogonal-complements-of-subbundles-are-smooth-subbundles` · proposition — Orthogonal complements of subbundles are smooth subbundles
- `cor-every-vector-subbundle-has-a-smooth-complement` · corollary — Every vector subbundle has a smooth complement
- `cor-every-short-exact-sequence-of-smooth-vector-bundles-splits` · corollary — Every short exact sequence of smooth vector bundles splits
- `def-normal-and-conormal-bundles-of-an-embedded-submanifold` · definition — Normal and conormal bundles of an embedded submanifold
- `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` · proposition — Normal and conormal bundles are smooth vector bundles
- `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` · proposition — An ambient Riemannian metric identifies the normal quotient with the orthogonal normal bundle
- `cor-every-smooth-manifold-admits-a-riemannian-metric` · corollary — Assuming countable choice, every smooth manifold admits a Riemannian metric
- `prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set` · proposition — A vector bundle section with surjective vertical differential at every zero has a submanifold zero set
- `fs-every-vector-bundle-is-globally-trivial` · false-statement — Every vector bundle is globally trivial
- `fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth` · false-statement — A continuous fibrewise linear map over a smooth base map is automatically smooth
- `fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle` · false-statement — The fibrewise quotient of a vector bundle by arbitrary varying subspaces is a vector bundle
- `fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting` · false-statement — A short exact sequence of vector bundles has a canonical splitting
- `fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric` · false-statement — The orthogonal normal bundle of a submanifold is defined without a metric
- `fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space` · false-statement — The pullback bundle is the set-theoretic inverse image of the total space

### `smooth-vector-bundles-and-sections-examples` — Smooth Vector Bundles and Sections — Examples (10 item(s))

- `ex-the-trivial-line-bundle-and-its-sections-as-functions` · example — The trivial line bundle and its sections as functions
- `ex-the-mobius-line-bundle-from-a-transition-function` · example — The Mobius line bundle from a transition function
- `ex-the-tautological-line-bundle-over-real-projective-space` · example — The tautological line bundle over real projective space
- `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` · example — Assuming countable choice, the tangent and cotangent bundles are smooth vector bundles
- `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` · example — The normal bundle of the sphere in Euclidean space is trivial
- `ex-the-tangent-bundle-of-the-circle-is-trivial` · example — The tangent bundle of the circle is trivial
- `rem-the-hairy-ball-theorem-for-even-dimensional-spheres` · remark — The hairy-ball theorem for even-dimensional spheres
- `ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover` · example — Pullback of the tautological line bundle along the antipodal cover
- `ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum` · example — The graph of a bundle map as a subbundle of a Whitney sum
- `cex-a-rank-jumping-kernel-is-not-a-vector-subbundle` · counterexample — A rank-jumping kernel is not a vector subbundle

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-26-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-26`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-26-judge-adjudications.jsonl`
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
`research/frontier-26-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-26-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-26-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
