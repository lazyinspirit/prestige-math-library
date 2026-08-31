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
group work, `research/frontier-26-alpha-groups.json` is the assignment: it permits at
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

run: frontier-26
role: alpha-adjudicate
label: step8-b
covers: 6, 7, 9

# Step 8 — group **b**, run `frontier-26`

You are the group Alpha for batches **6**, **7**, **9**: 3 A/B pair(s), 6 page(s), 131 item(s), 77 open rejection(s) over 77 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-degreewise-split-cone-sequence-with-no-chain-splitting` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `4b0d624b0cfd0e92912fd5f47965db95a1871173e9afef4bf04fa87c1a8d335c` |
| `cex-a-rank-jumping-kernel-is-not-a-vector-subbundle` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `de8db5a8ac8e1fdb7810d129aa8ece44e27a304adcf6d3518469efb7b144022a` |
| `cex-an-acyclic-noncontractible-cone` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `c2ff55ab7e37f0990df680fe8fc79f0ab10fa6f28d8943253e3fe326db80c8b9` |
| `cor-every-smooth-manifold-admits-a-riemannian-metric` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `d010f5ce044f0d4f7cc5560b3bd7e20635abf5545cc7796c111a1a8e9f6c0568` |
| `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `6641a46809df99eab12c651394f164492ce5f14dd0fb45e2de371168f5450a74` |
| `def-cone-triangle-of-a-chain-map` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `cda536cf852fd72b3893228ad6b276eb89da87f2fa01955970ab9d47ffef0a8f` |
| `def-mapping-cylinder-of-a-chain-map` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `5323f43f1f86a90f08c80bb053c0cd46375213e188f18b8d4a5869cd5ca67d5e` |
| `def-normal-and-conormal-bundles-of-an-embedded-submanifold` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `25433548d34fc79a4e4f6b937ac5e55c3fe2463936fc9c372f644211c0785ac5` |
| `def-the-category-of-right-module-endofunctors` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `e618aef32a48027bdfb1e7bbccd43e57e988f090d85c25592120cbeb3cf0a9b0` |
| `def-vector-subbundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `df563076401f369384e07ae5048291e242716f5da09c50ad2f116322dbb67575` |
| `ex-a-quasi-isomorphism-detected-by-an-acyclic-cone` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `66d43cac4f48f9ef02c297e855318e6c13fc083b83e50c65d71c92e704dc783e` |
| `ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `9bb2d0de96ae6d7c76ead303e66920e537368584e22b8b9cf18490e12dac24ca` |
| `ex-relative-homology-of-a-map-between-stalk-complexes` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `9333f83da8313d4877380b27f82d53537444c05c4e8ad95b0a884b7ddd2023e0` |
| `ex-the-cone-of-multiplication-by-m-on-the-integers` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `dc0cc925dd9ce9238e5dbac914b42701234040f84a0c07d9848d139c2b0bde6d` |
| `ex-the-cone-of-zero-and-of-the-identity` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `e2ea4f66c45822068b01a45d1a7291d842dff41616b310fcaf88cd8403c127b7` |
| `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `cecdc85644fbaefcaceebaf261a42d445a6488c0c8eef3786521fdff2e36645e` |
| `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `dc520d319cf369c6aabc2cfc6046030c23585485db317bc80a76fa45474dbd8c` |
| `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `8b3fdc741c097cfce11615b1bbd48d4af77deff52dbaa2ae5f88e4433bbe2faa` |
| `ex-the-tangent-bundle-of-the-circle-is-trivial` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `c18a6b8784d40631fe4aebf77a151fafdae94c28ec43b22c9ef59428b5975465` |
| `ex-the-tautological-line-bundle-over-real-projective-space` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `729a928e981779fc2d9e66f607f20bbf1ef0a9e5ade3fdce6f17b7d0e35601c6` |
| `ex-the-three-cone-calculation-for-a-composite` | `mapping-cones-cylinders-and-chain-triangles-examples` | gpt-5.6-terra | `81234c656c42da85657cde35a5e14a9f5b0b8c33faa15d6b8329bcd5d1c6186e` |
| `ex-the-word-category-on-words-of-length-three` | `strictification-and-mac-lanes-coherence-theorem-examples` | gpt-5.6-terra | `74534fa7339dbeaf8118a6e8390c812632be308e4a154653c6889d0f33945796` |
| `fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `d62d9c142d96e28698e517ece2dc47760b0152dc97d8197c2a08329ed1855590` |
| `fs-an-acyclic-mapping-cone-is-contractible` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `65ef927759b152609481d0bb224289c60569d0affd8d73b6eeab80204a98178f` |
| `fs-every-diagram-in-a-monoidal-category-commutes` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `7659fbca17f3648da6889039f2d93b7abb31f45427d8f46ee18a8ec78832351c` |
| `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `4f29c29bed558ba7bc08f79aaca9d77d80f06aab6c4eedc5c83266a6cbc99024` |
| `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `1ec4dc580dfccf737ce4c320bcc82f9bd261ad9cf9b7893734d606bce9d07b52` |
| `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `6bd17143c107da6723f1a24b78fa11cba504a75a98600599a3b66abd53c4b4ed` |
| `fs-the-mapping-cone-differential-needs-no-minus-sign` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `b01c7953092db2cfc818591c8a648a248c30c591db1665f7b757c447c5f47974` |
| `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `2ccfc4a75ef723ea2ca9217f58f457bb1d24f0ab049a4ed3ba00df09e96cb04e` |
| `lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `387e37d373c08ca753387befe97ff3441bfd65c6354bc662bc1f3ec9d82a8a4c` |
| `lem-locally-finite-linear-combinations-of-sections-are-smooth` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `083625f37ee23d95166105ca248ef0d0672159419306a651b50a8a0f00952293` |
| `lem-the-mapping-cone-differential-squares-to-zero` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `8d19b9a2191fece520f7a3b8a1fd00d36848974eb8e22d07037a133e768057fd` |
| `lem-the-three-cone-calculation-for-a-composite-chain-map` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `10ceabf1ed93e8be93c67a77236daa31d0d38f766bcec1446567d7cd3d068daf` |
| `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `c2205b9b71d6b1eed2e752f2f6dfa16f39e3e1df2700f89d5a76c6fce1833311` |
| `prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `2a8333204577c4e1b39108ee39e37ea5b34bbad8fc64db05b0f3e53783615650` |
| `prop-a-vector-bundle-projection-is-a-surjective-submersion` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `41725b0e208b4558e1be1e9bcb73f68305f3f71f6d08009c3888082645b3d735` |
| `prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `03427cccf5664bf3ecea31692919b177f90396b689993e2bafaa432266e5e2ba` |
| `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `9cef0b1018d1cabec0e32e1620f289f97461f3228b44929bad35e5ccc1a8adaf` |
| `prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `ca201e8f8943907a863e2c926b2f0ef20dcaa4fd7f9cdf3a694f3b8df7d52499` |
| `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `f62799bb8b2d32bb2dfa3c463831dd255c77e173287951c53a4050bf0057f230` |
| `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `6976087e8e6bd83f6d6b415071735a38cbc1821eabf6cd00fa4533f722259501` |
| `prop-isomorphic-chain-maps-have-isomorphic-cones` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `007fed01c0fd928baa6bf5519f3f84608bcee520bde1aabe9daeaf4c3ba3b434` |
| `prop-isomorphic-cocycles-define-isomorphic-vector-bundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `c16881d5f9d669f275188d549d945bc945e9805199686cbe51e919b45e4700b8` |
| `prop-local-frames-and-local-trivializations-are-equivalent-data` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `ff623fbaf8ec90cdd83e476f874ab48684bb6d711966031b88cc2957d68ac872` |
| `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `80e5f82ac4e04cadf4fa748e71b9318efd6629780fd41bbf1fc56f86f7033614` |
| `prop-orthogonal-complements-of-subbundles-are-smooth-subbundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `15de1e8a78de9218e4dc6a31ba4c7974eb06520bda0a624758fe6c5f2256754c` |
| `prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `3c89408ced5b22265532b2a45231d1bb5a1a47dad4ded895ea6638543735b509` |
| `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `43d612e5a32e81e9a3d8e8cdf350db551bbc737f070631bd11c205c88c6ab42e` |
| `prop-smooth-sections-form-a-module-over-smooth-functions` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `1ec1548eb0f42ab9a9320540720cb824ce9276313140c63f068ac19a6c61aff9` |
| `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `4f3e6e630b4167321220f4c00e2721493766040a4607be59db95ceda9126cb09` |
| `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `8fa153e3a48235ad430cae2ad5ffbdfb77dc8a267fa209d7f4687279b74b1358` |
| `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `591044fb8e09cfa9ef22a0d6110e9afaa9cb286b8f3dee6bc868e24cdc23bf8f` |
| `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `e502744bfc9e2ca1b21ebd221c17adb78cadb8be0706a38621ae5c79d7ab830e` |
| `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `a8336b83f1c15ff1fa9b400c75fbd7672ce95ca4fe256a1b73f4589b0b5586c4` |
| `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `c64d601d0c7395366caf39f95cde4e9536f31e4463b74540ab348e8f4722adb3` |
| `prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `fd23b3361ac0f83dfc3fe617fa00af145db6601b177a4ad4d139eb6d066f3448` |
| `prop-the-zero-section-is-a-smooth-embedding` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `2a8bd9ecf3470c88c57ddad8791ed47ae31129be825da817aa08fd45ef5d64e9` |
| `rem-strictification-gives-equivalence-and-never-isomorphism` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `cf1967545815bd53005072be6ac3cdff196249e9238784bff7b65ece77ee7405` |
| `rem-the-choice-cost-of-strictification` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `82719f63522590475ed4bc37f3f658f8bae3e3d7c2627bb64b4a3785df13b529` |
| `rem-the-exact-scope-of-the-coherence-statement` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `359ed381a414ccece01ff2ded32b601067e347e8e7ed96ac654f6dd342c88f8f` |
| `rem-the-hairy-ball-theorem-for-even-dimensional-spheres` | `smooth-vector-bundles-and-sections-examples` | gpt-5.6-terra | `85676862a7a3aa590fb245a2083122c851e33d92cf22d45c4a3d23707115305c` |
| `rem-the-history-of-the-coherence-theorem` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `aa509b6a945811a402c8f8d4770c83e82e8883b27c3e5e206938c12bb0348b38` |
| `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `d79c3ebc86bf8cb0a89d2af94b56f7938f09404d16956585c1a9c03de613b502` |
| `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `e09050ff478dddbfb50112b55347975110d74b5fb84986edf6a78da6e811fec3` |
| `thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `28105f929ab21c14d62e7495ff11515fe713fbc671a3e3faaf81657d5320e924` |
| `thm-dual-and-hom-transition-functions-define-smooth-bundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `5f395d053dfc6cbd762fc3f097d27be5ac9df61bec5200bd91d0479d3c0f6c0a` |
| `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `83b20e49ae8d96c84e8d9b4f4a1c59c27d45cbea32a1f93d1414785aa612a681` |
| `thm-mac-lane-coherence-in-the-canonical-map-form` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `53f44bd8ac253e4538ea25b4201e845af946fdafa7a60555af42c734b9a24b74` |
| `thm-mac-lane-strictification` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `7c2225b73e3c339fcc4ae3eeca4783557dbb92ddf0294ef25eadfc3043f2b261` |
| `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `f8a169dde6fb19c820855742e4250053fcdef35e5e522afb18bf8440dcdab715` |
| `thm-the-cone-of-an-identity-map-is-contractible` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `2ecd121018eb1b3608525a2f7a64dc7131b9443df731377f131661738ed14a8b` |
| `thm-the-mapping-cylinder-factors-a-chain-map` | `mapping-cones-cylinders-and-chain-triangles` | gpt-5.6-terra | `8c8b6b011edb843f83a052454df7cc3e834ef202a4fa5067dd8362571d3f2c8e` |
| `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `bd424b8664ae3af610a7b2396ed60b12f0e5d5e6ba31e15e225eedca0b1bd0ec` |
| `thm-the-word-category-is-the-free-monoidal-category-on-one-generator` | `strictification-and-mac-lanes-coherence-theorem` | gpt-5.6-terra | `0c02aa552ee37bb25685dd13fe56dacdac1aa214f16225af085c622120206045` |
| `thm-vector-bundle-construction-from-a-smooth-cocycle` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `d4d57d9c85738e9220d0706b31e764c65b3ff6a75f6305c8fa98fc602045e20b` |
| `thm-whitney-sums-are-smooth-vector-bundles` | `smooth-vector-bundles-and-sections` | gpt-5.6-terra | `5373ad4e0f96ee2519734353e97f246a24730b5443af17378c57098521fd196b` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

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
