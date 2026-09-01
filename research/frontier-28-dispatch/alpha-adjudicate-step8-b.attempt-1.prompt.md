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
group work, `research/frontier-28-alpha-groups.json` is the assignment: it permits at
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

run: frontier-28
role: alpha-adjudicate
label: step8-b
covers: 1, 7, 10

# Step 8 — group **b**, run `frontier-28`

You are the group Alpha for batches **1**, **7**, **10**: 4 A/B pair(s), 8 page(s), 163 item(s), 96 open rejection(s) over 96 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `small-cancellation-and-dehn-algorithms` | A | group-theory | 71.015 | `decision-problems-for-finitely-presented-groups-examples` |
| 1 | `small-cancellation-and-dehn-algorithms-examples` | B | group-theory | 71.016 | `small-cancellation-and-dehn-algorithms` |
| 1 | `inverse-systems-profinite-groups-and-completion` | A | group-theory | 302.013 | `graphs-of-groups-and-bass-serre-theory-examples` |
| 1 | `inverse-systems-profinite-groups-and-completion-examples` | B | group-theory | 302.014 | `inverse-systems-profinite-groups-and-completion` |
| 7 | `braided-and-symmetric-monoidal-categories` | A | category-theory | 365.029 | `closed-monoidal-categories-and-the-internal-hom-examples` |
| 7 | `braided-and-symmetric-monoidal-categories-examples` | B | category-theory | 365.03 | `braided-and-symmetric-monoidal-categories` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation` | A | differential-geometry | 455 | `smooth-partitions-of-unity-and-exhaustions`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `homotopy-and-homotopy-equivalence` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | B | differential-geometry | 456 | `whitney-embedding-tubular-neighbourhoods-and-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-cancellation-and-dehn-algorithms` — Small Cancellation and Dehn Algorithms (26 item(s))

- `def-symmetrisation-of-a-relator-set` · definition — The symmetrisation of a relator set closes under inverses and cyclic conjugates
- `lem-symmetrisation-has-the-same-normal-closure` · lemma — A relator set and its symmetrisation have the same normal closure
- `def-piece-in-a-symmetrised-presentation` · definition — A piece is a common initial segment occurring in two distinct places of a symmetrised relator set
- `def-small-cancellation-conditions-c-lambda-and-c-prime-lambda` · definition — The small-cancellation conditions C(lambda) and C prime(lambda)
- `def-small-cancellation-condition-t-q` · definition — The condition T(q) forbids short cycles of pieces in the relator graph
- `lem-c-prime-lambda-implies-c-lambda` · lemma — C prime(lambda) implies C(lambda)
- `def-van-kampen-diagram-boundary-label-and-area` · definition — Van Kampen diagrams, boundary labels, and diagram area for a presentation
- `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` · lemma — The boundary label of a van Kampen diagram is trivial in the presented group
- `thm-van-kampen-lemma` · theorem — A word is trivial in a presented group exactly when it bounds a finite van Kampen diagram
- `thm-diagram-area-agrees-with-algebraic-relator-area` · theorem — Minimal van Kampen area agrees with minimal algebraic relator area
- `def-reduced-van-kampen-diagram` · definition — A reduced van Kampen diagram has no cancellable adjacent faces
- `lem-minimal-area-diagrams-are-reduced` · lemma — A minimal-area van Kampen diagram is reduced
- `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` · lemma — Reduced C prime(1/6) diagrams satisfy the standard combinatorial curvature count
- `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations` · theorem — In a reduced C prime(1/6) null diagram, some face contributes more than half of its boundary to the outer boundary
- `def-dehn-reduced-word-and-dehn-presentation` · definition — Dehn-reduced words and Dehn presentations
- `lem-dehn-replacement-strictly-shortens-a-word` · lemma — A Dehn replacement shortens the word strictly
- `thm-dehn-algorithm-solves-the-word-problem` · theorem — Dehn's algorithm terminates and decides the word problem for a Dehn presentation
- `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem` · corollary — Finite C prime(1/6) presentations have solvable word problem
- `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` · corollary — Finite C prime(1/6) presentations satisfy a linear isoperimetric inequality
- `thm-torsion-theorem-for-c-prime-one-sixth-groups` · theorem — In a C prime(1/6) group, every nontrivial torsion element is conjugate to a power of a relator root
- `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` · corollary — A C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `fs-every-repeated-subword-is-a-piece` · false-statement — FALSE: every repeated subword of a relator is a piece
- `fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six` · false-statement — FALSE: C prime(1/6) means every relator has length at most six
- `fs-greendlinger-lemma-applies-to-every-finitely-presented-group` · false-statement — FALSE: Greendlinger's lemma holds for every finite presentation
- `fs-dehn-reduction-is-the-same-as-free-reduction` · false-statement — FALSE: Dehn reduction is just free reduction under another name
- `fs-no-proper-power-relators-alone-implies-torsion-free` · false-statement — FALSE: a presentation with no proper-power relators is automatically torsion-free

### `small-cancellation-and-dehn-algorithms-examples` — Small Cancellation and Dehn Algorithms — Examples (7 item(s))

- `ex-symmetrising-a-one-relator-presentation` · example — Symmetrising a one-relator presentation adds the cyclic conjugates and inverse cyclic conjugates
- `ex-finding-pieces-and-checking-c-prime-one-sixth` · example — A concrete relator set with its pieces and a direct C prime(1/6) check
- `ex-a-dehn-reduction-sequence` · example — A trivial word is reduced to the empty word by successive Dehn moves
- `ex-a-greendlinger-cell-in-a-van-kampen-diagram` · example — A minimal diagram exhibits the Greendlinger face covering more than half its boundary
- `ex-a-torsion-free-small-cancellation-group` · example — A strict C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention` · counterexample — An overlap of exactly one sixth shows that the strict C prime(1/6) inequality is not cosmetic
- `cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation` · counterexample — No proper-power relators alone do not prevent torsion outside small cancellation

### `inverse-systems-profinite-groups-and-completion` — Inverse Systems Profinite Groups and Completion (33 item(s))

- `def-directed-set-and-inverse-system-of-groups` · definition — A directed set and an inverse system of groups indexed by it
- `def-compatible-tuple-inverse-limit-of-groups` · definition — The inverse limit is the set of compatible tuples in the Cartesian product
- `lem-compatible-tuples-form-a-subgroup` · lemma — Compatible tuples form a subgroup of the product group
- `def-coordinate-projections-from-an-inverse-limit` · definition — The inverse limit has its canonical coordinate projection maps
- `thm-concrete-inverse-limit-universal-property-in-groups` · theorem — The compatible-tuple construction satisfies the inverse-limit universal property in groups
- `def-inverse-limit-topology-for-finite-discrete-groups` · definition — The inverse limit of finite groups carries the subspace topology from the product of discrete factors
- `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup` · lemma — The inverse limit of finite discrete groups is a closed topological subgroup of the full product
- `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` · theorem — An inverse limit of finite discrete groups is Hausdorff, compact, and totally disconnected
- `def-profinite-group-by-inverse-limit` · definition — A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups
- `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis` · lemma — The kernels of the finite coordinate projections form an open normal neighbourhood basis at the identity
- `thm-continuity-into-an-inverse-limit-is-coordinatewise` · theorem — A map into an inverse limit is continuous exactly when all coordinate composites are continuous
- `def-cofinal-subsystem` · definition — A cofinal subsystem meets every index eventually
- `thm-cofinal-subsystems-have-isomorphic-inverse-limits` · theorem — A cofinal subsystem has the same inverse limit up to canonical isomorphism
- `def-totally-disconnected-and-totally-separated-spaces` · definition — Totally disconnected spaces and totally separated spaces
- `thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree` · theorem — For compact Hausdorff spaces, total disconnectedness and total separatedness are equivalent
- `thm-topological-characterisation-of-profinite-groups` · theorem — A topological group is profinite exactly when it is compact, Hausdorff, and totally disconnected, equivalently when a compact Hausdorff group has a basis of open normal subgroups with finite quotients
- `def-profinite-topology-on-an-abstract-group` · definition — The profinite topology on a group uses finite-index normal subgroups as an identity-neighbourhood basis
- `def-finite-residual-and-residually-finite-group` · definition — The finite residual is the intersection of the finite-index normal subgroups, and a group is residually finite when that intersection is trivial
- `def-profinite-completion-of-an-abstract-group` · definition — The profinite completion is the inverse limit of the finite quotients G over N
- `def-canonical-map-to-the-profinite-completion` · definition — The canonical map sends g to its coherent system of residue classes
- `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion` · theorem — The canonical map to the profinite completion has kernel equal to the finite residual and has dense image
- `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite` · corollary — The canonical map is injective exactly when the group is residually finite
- `thm-universal-property-of-profinite-completion` · theorem — The profinite completion is initial among continuous homomorphisms from G to profinite groups
- `thm-profinite-completion-is-functorial` · theorem — A homomorphism induces a continuous homomorphism of profinite completions
- `rem-malcev-finitely-generated-linear-groups-are-residually-finite` · remark — Malcev's theorem gives a canonical non-load-bearing source of residually finite groups
- `thm-free-groups-are-residually-finite` · theorem — Free groups are residually finite
- `def-subgroup-separable-and-lerf` · definition — A subgroup is separable when it is closed in the profinite topology, and a group is LERF when every finitely generated subgroup is separable
- `thm-finitely-generated-free-groups-are-subgroup-separable` · theorem — Every finitely generated free group is subgroup separable
- `fs-an-inverse-limit-of-groups-may-be-empty` · false-statement — FALSE: an inverse limit of groups can be empty
- `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf` · false-statement — FALSE: every inverse limit of surjective finite-group systems has surjective coordinate projections in ZF
- `fs-the-canonical-map-to-profinite-completion-is-always-injective` · false-statement — FALSE: the canonical map to the profinite completion is always injective
- `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness` · false-statement — FALSE: every compact Hausdorff topological group is profinite
- `fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic` · false-statement — FALSE: isomorphic profinite completions force the original groups to be isomorphic

### `inverse-systems-profinite-groups-and-completion-examples` — Inverse Systems Profinite Groups and Completion — Examples (7 item(s))

- `ex-an-eventually-constant-inverse-system` · example — An eventually constant inverse system has inverse limit equal to its stable value
- `ex-the-profinite-completion-of-a-finite-group` · example — A finite group is canonically isomorphic to its profinite completion
- `ex-the-profinite-completion-of-the-integers` · example — The profinite completion of the integers is the inverse limit of the rings Z mod n
- `ex-a-residually-finite-free-group` · example — A free group separates one nontrivial reduced word by a finite quotient
- `ex-a-dense-nonclosed-copy-of-a-group-in-its-completion` · example — The integers sit densely but not closedly inside their profinite completion
- `ex-a-non-residually-finite-baumslag-solitar-group` · example — A Baumslag-Solitar group gives a noninjective completion map
- `cex-same-finite-quotients-do-not-trivially-identify-abstract-groups` · counterexample — Nonisomorphic groups can share the same profinite completion

### `braided-and-symmetric-monoidal-categories` — Braided and Symmetric Monoidal Categories (29 item(s))

- `def-braiding` · definition — Braiding
- `def-braided-monoidal-category` · definition — Braided monoidal category
- `thm-the-inverse-braiding-is-a-braiding` · theorem — The inverse braiding is again a braiding
- `thm-the-braiding-is-compatible-with-the-unit-constraints` · theorem — The braiding is compatible with the unit constraints
- `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation` · theorem — In a strict braided monoidal category the braiding satisfies the Yang-Baxter equation
- `def-symmetric-monoidal-category` · definition — Symmetric monoidal category
- `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` · theorem — In the presence of symmetry, one hexagon implies the other
- `def-braided-monoidal-functor` · definition — Braided monoidal functor
- `rem-being-braided-is-a-property-of-a-monoidal-functor` · remark — Being braided is a property of a strong monoidal functor
- `thm-the-cartesian-swap-braiding-is-a-symmetry` · theorem — The cartesian swap braiding is a symmetry
- `thm-the-double-braiding-center-is-symmetric` · theorem — The double-braiding center is a symmetric monoidal subcategory
- `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one` · theorem — Every braided monoidal category is monoidally equivalent to a strict braided one
- `def-braid-group-by-the-artin-presentation` · definition — The braid group by Artin presentation
- `thm-the-two-strand-braid-group-is-infinite-cyclic` · theorem — The two-strand braid group is infinite cyclic
- `thm-the-symmetric-group-has-the-coxeter-presentation` · theorem — The symmetric group has the Coxeter presentation
- `thm-the-braid-group-surjects-onto-the-symmetric-group` · theorem — The braid group surjects onto the symmetric group
- `def-the-braid-category` · definition — The braid category
- `cex-the-braid-category-is-braided-but-not-symmetric` · counterexample — The braid category is braided but not symmetric
- `thm-symmetric-coherence` · theorem — Symmetric coherence
- `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category` · corollary — Labelled unbracketed and unordered tensor strings are well defined in a symmetric monoidal category
- `thm-braided-coherence-fails-in-the-symmetric-form` · theorem — Braided coherence fails in the symmetric form
- `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes` · false-statement — FALSE: every diagram built from the associator and the braiding commutes
- `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` · theorem — The braid category is the free strict braided monoidal category on one generator
- `thm-braided-coherence-via-underlying-braids` · theorem — Braided coherence is controlled by underlying braids
- `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree` · corollary — Two canonical braided composites agree exactly when their underlying braids agree
- `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n` · remark — The symmetric and braided coherence theorems compare S_n with B_n
- `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one` · false-statement — FALSE: every braided monoidal category is equivalent to a strict commutative one
- `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category` · theorem — Monoid objects in a braided monoidal category form a monoidal category
- `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category` · corollary — Monoid objects in a symmetric monoidal category form a symmetric monoidal category

### `braided-and-symmetric-monoidal-categories-examples` — Braided and Symmetric Monoidal Categories - Examples (7 item(s))

- `ex-the-swap-braiding-on-sets` · example — The swap map on sets is the cartesian braiding
- `ex-the-braid-group-on-three-strands` · example — The braid group on three strands and its quotient to S_3
- `ex-the-hexagon-checked-for-cartesian-products` · example — The hexagon checked for cartesian products
- `ex-the-sign-braiding-on-supervector-spaces` · example — Supervector spaces with the sign braiding
- `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order` · example — The two-strand braiding in the braid category has infinite order
- `ex-two-canonical-maps-with-different-underlying-braids` · example — Two canonical maps with different underlying braids do not agree
- `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids` · example — Commutative monoid objects in sets are ordinary commutative monoids

### `whitney-embedding-tubular-neighbourhoods-and-approximation` — Whitney Embedding Tubular Neighbourhoods and Approximation (44 item(s))

- `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space` · lemma — A finite coordinate-bump map embeds a compact manifold in some Euclidean space
- `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` · lemma — A countable coordinate-bump map embeds a manifold in countable Euclidean data
- `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` · lemma — A smooth exhaustion separates the locally finite chart bands
- `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` · theorem — Every smooth manifold embeds in some finite-dimensional Euclidean space
- `prop-a-proper-injective-immersion-is-a-smooth-embedding` · proposition — A proper injective immersion is a smooth embedding
- `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` · definition — Secant and tangent direction maps of a Euclidean embedding
- `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` · lemma — A generic linear projection preserves injectivity and immersion
- `lem-a-generic-projection-can-preserve-properness` · lemma — A generic projection can preserve properness
- `thm-weak-whitney-proper-embedding-theorem` · theorem — The weak Whitney proper embedding theorem
- `thm-weak-whitney-immersion-theorem` · theorem — The weak Whitney immersion theorem
- `rem-strong-whitney-embedding-theorem` · remark — The strong Whitney embedding theorem
- `rem-strong-whitney-immersion-theorem` · remark — The strong Whitney immersion theorem
- `def-tubular-neighbourhood-of-an-embedded-submanifold` · definition — Tubular neighbourhoods of embedded submanifolds
- `def-normal-addition-map-for-a-euclidean-submanifold` · definition — The normal addition map for a Euclidean submanifold
- `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section` · lemma — Normal addition is a local diffeomorphism along the zero section
- `lem-variable-radius-injectivity-for-normal-addition` · lemma — Variable-radius injectivity for normal addition
- `thm-euclidean-tubular-neighbourhood-theorem` · theorem — The Euclidean tubular neighbourhood theorem
- `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — A closed Euclidean submanifold has a smooth neighborhood retraction
- `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking` · proposition — Nearest-point projection is the tubular retraction after shrinking
- `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` · theorem — The tubular neighbourhood theorem in a smooth ambient manifold
- `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — Every closed embedded submanifold has a smooth neighborhood retraction
- `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section` · proposition — Two tubular neighbourhood germs are isomorphic near the zero section
- `def-positive-continuous-error-function-for-strong-approximation` · definition — Positive continuous error functions for strong approximation
- `thm-whitney-approximation-for-euclidean-valued-maps` · theorem — Whitney approximation for Euclidean-valued maps
- `thm-relative-whitney-approximation-for-euclidean-valued-maps` · theorem — Relative Whitney approximation for Euclidean-valued maps
- `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood` · lemma — A fine Euclidean approximation lands in a prescribed tubular neighbourhood
- `thm-whitney-approximation-for-manifold-valued-maps` · theorem — Whitney approximation for manifold-valued maps
- `thm-relative-whitney-approximation-for-manifold-valued-maps` · theorem — Relative Whitney approximation for manifold-valued maps
- `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map` · corollary — Every continuous map between smooth manifolds is homotopic to a smooth map
- `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` · theorem — Continuously homotopic smooth maps are smoothly homotopic
- `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets` · corollary — The smooth and continuous homotopy categories of smooth manifolds have the same morphism sets
- `cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset` · corollary — A continuous map from a closed subset extends smoothly exactly when it has a continuous extension and is smooth near the subset
- `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family` · lemma — A tubular target produces a submersive finite-dimensional perturbation family
- `thm-transversality-homotopy-theorem` · theorem — The transversality homotopy theorem
- `thm-strong-whitney-approximation-by-transverse-maps` · theorem — Strong Whitney approximation by transverse maps
- `cor-transverse-maps-are-dense-in-the-strong-smooth-topology` · corollary — Transverse maps are dense in the strong smooth topology
- `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` · corollary — A smooth section transverse to the zero section has a submanifold zero set
- `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` · proposition — Relative transversality preserves a map on a closed good region
- `fs-every-injective-immersion-is-a-proper-embedding` · false-statement — FALSE: every injective immersion is a proper embedding
- `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` · false-statement — FALSE: an arbitrary linear projection of an embedding is an embedding
- `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n` · false-statement — FALSE: every proper embedding of an n-manifold lands in R^n
- `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood` · false-statement — FALSE: every noncompact submanifold has a uniform-radius tubular neighbourhood
- `fs-the-tubular-neighbourhood-retraction-is-canonical` · false-statement — FALSE: the tubular-neighbourhood retraction is canonical
- `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold` · false-statement — FALSE: uniform approximation is the right global notion on every noncompact manifold

### `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` — Whitney Embedding Tubular Neighbourhoods and Approximation — Examples (10 item(s))

- `ex-the-standard-circle-and-its-annular-tubular-neighbourhood` · example — The standard circle and its annular tubular neighbourhood
- `ex-the-sphere-and-its-two-sided-normal-tube` · example — The sphere and its two-sided normal tube
- `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius` · example — A noncompact embedded curve with no uniform tubular radius
- `ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space` · example — A coordinate-bump embedding of the circle in Euclidean space
- `ex-projecting-a-space-curve-can-create-a-double-point` · example — Projecting a space curve can create a double point
- `ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set` · example — Smoothing a piecewise-linear real-valued function relative to a closed set
- `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction` · example — Smoothing a continuous circle-valued map through an annular retraction
- `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set` · example — A generic section of a line bundle has a hypersurface zero set
- `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius` · counterexample — A nearest-point projection need not be unique outside the tubular radius
- `cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values` · counterexample — A smooth approximation without relative control destroys prescribed values

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
| `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `e6bc9c3b9c29b49dce3f08bae8a319e4c92dc325f94fc49e80638d664b93a33a` |
| `cex-the-braid-category-is-braided-but-not-symmetric` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `4433eeea38ded477a42ca27ecd702acc614f9d06556ef5a19d2e41ec996c5503` |
| `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `c04e5dc518e4ddfa1a7f6ebd7580620c92ba11c49752973f752804ef30b244ba` |
| `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `b672ab5fb8a8ad364fd12740cec970c85ed168d9a06cf89bd3eb4c783b7bf88f` |
| `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `0562a11eba1e370ec6037c69781b82c202573c85e7828cd4118d4eaf7ce95605` |
| `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `a151605e3800c4ce9997dd2a2ebed8c66f07c4684b01e38f44890776882faae1` |
| `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `4029991dde71d16f6655ad43c70351ffc0f910c2b92da38a37c85da737add63b` |
| `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `35afafc5cecd261d3d576013a42ff0426a0ad5bf8381849edeeffd759ae3bec1` |
| `def-braid-group-by-the-artin-presentation` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `50a301acd331cb0a9f5627ff949ef35a9f273eb134231fbf73208fc49d55bd03` |
| `def-cofinal-subsystem` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `b3e86074f4240878cf13837281a5a9d1a27a3d5469c4a513b0e0114ac63a6bca` |
| `def-compatible-tuple-inverse-limit-of-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `f27b9ca2b54f9c4fad6b56aa35a709b14c84e1121a3bd10dd85dddcd4c912aae` |
| `def-coordinate-projections-from-an-inverse-limit` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `8154ee6bcd80993f2c274b43bedde05be8162e38f78602250cda3ef42fc29a04` |
| `def-directed-set-and-inverse-system-of-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `730bd49a0d70f856580f9990992c3757f244a9c97a9b456f5b9b69067d50933c` |
| `def-inverse-limit-topology-for-finite-discrete-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `169e8cc6ed9c906fc9a47f36d14bbe6a1cd4bfc16bda2adf61d87acb934bd9a7` |
| `def-normal-addition-map-for-a-euclidean-submanifold` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `e0844a0a6194f9f0b3803dfcfdf780a8b77db5881beb29f2f67436962e301ff3` |
| `def-profinite-completion-of-an-abstract-group` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `f06efe48959e5311712d8874bcfdc7f4c2406a467be257dce75c538097fbff08` |
| `def-profinite-topology-on-an-abstract-group` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `01109672ff50954fde41402171f1bb4897bd1b0da57ab3c6a8bdd6693dfb3f2b` |
| `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `9144962bc4564416524d1187ff666515048c999ca14b6e3f253574d542402354` |
| `def-small-cancellation-condition-t-q` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `3b59f0486d0f4d0782a3a72f71eecbdf3a989f1c5765e0ba8cf60043c910aac2` |
| `def-the-braid-category` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `cdbfd83b810c08b787fb6657e9bed620c555bf79598e6dcb93d533e64db3d5e4` |
| `def-tubular-neighbourhood-of-an-embedded-submanifold` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `8de4ffd959d7b5c97608674633894235350d97db5117c2802b4039e9a2ba7492` |
| `def-van-kampen-diagram-boundary-label-and-area` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `052749211946971d6efa8bb4276f5ca1373126a95ba0f1680c661533f2b9d86d` |
| `ex-a-dehn-reduction-sequence` | `small-cancellation-and-dehn-algorithms-examples` | gpt-5.6-terra | `d13c444c6ff83a77b7f112e0b4fecdf58430b5a25ac41fbeb2196c310c638fec` |
| `ex-a-dense-nonclosed-copy-of-a-group-in-its-completion` | `inverse-systems-profinite-groups-and-completion-examples` | gpt-5.6-terra | `71fe0ae9969a8396f00b89a3083495e2ec6ac47c2dde21f542a5f0774c3d99ab` |
| `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `d1c3303cd8b1d250d2278928dc4029e5171bdb1b4e36302e9107c603a6f263c5` |
| `ex-a-greendlinger-cell-in-a-van-kampen-diagram` | `small-cancellation-and-dehn-algorithms-examples` | gpt-5.6-terra | `6328212e0ca6e1918f46350a21507b0fd6991e9cb11537a174cf4cca9050130b` |
| `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `f907c449db57ca92b7e8b3ccd3d39b86cdc2b9a742f422a313ed0271dcac6f00` |
| `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids` | `braided-and-symmetric-monoidal-categories-examples` | gpt-5.6-terra | `7c2cbb967936fe6ed48eb41b9f9d5fc0505e9d2c66587129dc6fed5e988a911e` |
| `ex-finding-pieces-and-checking-c-prime-one-sixth` | `small-cancellation-and-dehn-algorithms-examples` | gpt-5.6-terra | `e661ca3571a5606d9289b3d09d97ddf0c893e6f82832b0aa26e29aded52cb45c` |
| `ex-projecting-a-space-curve-can-create-a-double-point` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `945d91e10a299d7186f2b120fc2202d1dccc5f9bb637dc69333b9be5ccc84d95` |
| `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction` | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | gpt-5.6-terra | `81a2747e98464f5e49338d1a2fd6bf473929b5fcb2387f37fca398036f0f3a34` |
| `ex-the-hexagon-checked-for-cartesian-products` | `braided-and-symmetric-monoidal-categories-examples` | gpt-5.6-terra | `0346981f75bd8a6f7b83d8a22f7cbd0219814d329f7935f5e6ae10a7c4cd8df8` |
| `ex-the-profinite-completion-of-a-finite-group` | `inverse-systems-profinite-groups-and-completion-examples` | gpt-5.6-terra | `39a6e42d5a8b23585603484aef35e21babe6b3c611feb9fa97a927c5bb9fca44` |
| `ex-the-profinite-completion-of-the-integers` | `inverse-systems-profinite-groups-and-completion-examples` | gpt-5.6-terra | `e301dd08135801f71de37c3dbb3ca5d628463a0ffb41238af058d3ab55c3e36a` |
| `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order` | `braided-and-symmetric-monoidal-categories-examples` | gpt-5.6-terra | `d6cbb3339ceb756f4660feb105add4704a85bf8f3cde732aa272316855118ed4` |
| `ex-two-canonical-maps-with-different-underlying-braids` | `braided-and-symmetric-monoidal-categories-examples` | gpt-5.6-terra | `2301ba1c9eb99ea1b269845c47b4053c89db7e7dd05fc550baa7fb34245b6c98` |
| `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `4ff784d1b499a6f2b30ced27b8167debc39788970c241c2e1c391a38905051af` |
| `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `8529c6a7f66364da5f44ebc5ba90749671e5307b1a77da3684a7c2da26b2e15d` |
| `fs-dehn-reduction-is-the-same-as-free-reduction` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `08c5c733f87a86e18388ae56aff89f877a964e0b40e2a1a48de9c2d3b868b9bb` |
| `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `9f2ce9ac545d068daa657e4883385d74e398cac49d11f050a62a51eccba772f7` |
| `fs-every-injective-immersion-is-a-proper-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `7aee071d412a2f971584be5046af0ef74076e1d90a221d60813d1190cbfbb84e` |
| `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `912be86d91aa803ec3c7ff97498432ca423217c0d289dbc9df4af5f87c8f5104` |
| `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `b0ea3bededd7adbe4fb65a29529f4a5f165c1c262533c069cdaf0f5df8af05e7` |
| `fs-the-canonical-map-to-profinite-completion-is-always-injective` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `2361e80c53b8896344eb4a1f06e4492a4457d066abbddda7950df552b78cab34` |
| `fs-the-tubular-neighbourhood-retraction-is-canonical` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `40e96b0e0bd3d2a9f92fd310b4fb8d1be995f5acbb23e2fe09e237eefc509726` |
| `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `d0e5891297151dbba2ef997978ac389d704c55d5bbbf6009c409dcc42cd268b9` |
| `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `9cb2c230dcd75e110b2310b94564a57d43bebb1a13e1c5d08bacf73c66386288` |
| `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `4fc1a693cc58874fbc24afc5fa4118edefbe105e62ef87209dcb5ce6ba160e7b` |
| `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `f2693b4754b696a0ce55d44203d01a032164566c720fa4fd65de7e6c0385e1d9` |
| `lem-a-generic-projection-can-preserve-properness` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `017a69dac56ea925e31e93105e30bd4cd8567b71b7fff6c5f729564194aeda93` |
| `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `77cd3c71de92722e6e4987cbaf43827321d90916484c15f21eca3f090f31bc81` |
| `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `be77a774107d01a19e6efdb9de1249d300d3cdc8d5c0bd6c6da18dff110c5e13` |
| `lem-c-prime-lambda-implies-c-lambda` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `566c7aee5ba2cb231e3fdc7b89b080c1d1a3bd3a0750c723b8c94a3952ed9f1e` |
| `lem-compatible-tuples-form-a-subgroup` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `1ae1aa20a449970433f39f28108a66ddf85d03e6fffcbc7ee93a482e13ad84d0` |
| `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `6260907c3b815d7cffd9e22d4a951a4208ee4e0bc6cf3d4fb342f41dee6bf72b` |
| `lem-dehn-replacement-strictly-shortens-a-word` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `c51889a8d8bbb6786e622b8f39ed9ee8a969650bdce7b01f09738218c5713e00` |
| `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `44a6176ae4e1810a6c4ff83422eb95d035f56b5dc74a3da626b07e0d5722d8d5` |
| `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `049f916bb8ee31e576093739952b519f2e77802e3926d043331fd2edf9e4ea31` |
| `lem-minimal-area-diagrams-are-reduced` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `63dd2a8a85f6a5ab56d082876962fd91b37ddcfaae2f29ab305783bb2508c77e` |
| `lem-symmetrisation-has-the-same-normal-closure` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `443bb85957c0db2d5610b39f549d0776d4022009ebd54310e61ca9d7a4f94775` |
| `lem-variable-radius-injectivity-for-normal-addition` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `062d9dfeead2c69074598a9f46e443f7bcc362b621c2bff6a9758e890defa035` |
| `prop-a-proper-injective-immersion-is-a-smooth-embedding` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `0229d7a2f4bc06298a38172923f70870bf9593491be71069ba4b43fe9cd39174` |
| `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `251b71122ece9ee172f1e9d0c975f521ca4adabba4429d94a5121cc645c6c9c9` |
| `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `2a24bbb30b9dd0968a5b50d01a376ece86fd96d73b3cc963ee6088aa2e48c9b3` |
| `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `912b68bb23d0b5292d078cdb746d0b0d154291dc61ba09b9f119a77bf3bb69b5` |
| `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `d243b76a25cf643b7b5ce53a47c9a8bce677d68c9ec2da2c2358f1ac19b2bea6` |
| `thm-braided-coherence-fails-in-the-symmetric-form` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `b936aa25ed55f3af41d69c47599540c36c941e0bfb9473089d60633655753be3` |
| `thm-braided-coherence-via-underlying-braids` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `8bfd63c4e64b1246c9e7816b9598d077e5b151bcff5974008f24c116b0833b26` |
| `thm-cofinal-subsystems-have-isomorphic-inverse-limits` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `e8ce8e7a1c983442f19e114fd7f9ec64a53adffdc52e7bbd1fcde199c4d93ea7` |
| `thm-concrete-inverse-limit-universal-property-in-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `43a5b4a20bbdcb0590ea46cfb33352e4b59e1dd743bef984d29f74e919f37546` |
| `thm-continuity-into-an-inverse-limit-is-coordinatewise` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `6abf69082788299e346d020cdc0756a5514ad911e2c23cb16e083c69f5abd004` |
| `thm-dehn-algorithm-solves-the-word-problem` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `a2af099573165ef9c7f8ffee22aa101d41e801bb9925f1baf9b9864bc8547807` |
| `thm-diagram-area-agrees-with-algebraic-relator-area` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `672eb7569fe60d2b3c65f3b156617e5304b4679aebb9672b31feb79d591e25b7` |
| `thm-euclidean-tubular-neighbourhood-theorem` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `76a2f9709016587be2c9bc590c9ff08f96f96437e864da40f739ab2159472b49` |
| `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `0b7da689a8f6e140d9e3c849553214badc64b11018a866a5488bd31d1b3c29d5` |
| `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `36a795c7b890e269a91d815529e3854df672a29ba27c55a351c8021c85603a5c` |
| `thm-free-groups-are-residually-finite` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `dea77c5468129cb0a78504040fed44ac4734d301b3bf7923c56f99b65c816b12` |
| `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `2bd43f4b1cd29426ac94be384e3b4b558c0c35b7e7ead7af15747881e2d5a3b0` |
| `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `9ebffc2f267e084b701b5b863635403c69fdfec52ca9f73be1ecf6497976b620` |
| `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `6656c0c49562737e91d4604502e80c59e8d84d7ef53ce0352c65a2c664d9fed8` |
| `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `0f7c19dbd5ce99dd2ab8de8a183d0980408f24103e582f1e56cf28d6ff5056a9` |
| `thm-profinite-completion-is-functorial` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `8b34482c43be1e88663a3cf221ceb63f13b7c961acd8dab9e690b34fa6488142` |
| `thm-relative-whitney-approximation-for-euclidean-valued-maps` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `f0f79bf5d1fa156e3e36f7e36025b6c7d224cb84f036bffc75bdefc023392020` |
| `thm-relative-whitney-approximation-for-manifold-valued-maps` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `c00e2e1253f401ce2149792ad4f95465838157beac11457aeb5dd53a620f9dbf` |
| `thm-symmetric-coherence` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `f8f8a2cc00011bd7684f246180fad957df3a34a8a510a9df53b0785a43d30000` |
| `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `85dc521db521e3d8e06a3ab524ad30f371c5869794b444725645c00c50c4fe4c` |
| `thm-the-double-braiding-center-is-symmetric` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `ce46bf787f650ea2581c32c9c025253370997d8e98e5417044c696532cf844aa` |
| `thm-the-symmetric-group-has-the-coxeter-presentation` | `braided-and-symmetric-monoidal-categories` | gpt-5.6-terra | `0634beb81b48522084d696a2d164bd593516793a4d8ba419ff4a914f0ae0ab24` |
| `thm-topological-characterisation-of-profinite-groups` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `3ff73a292f738b5eeeadfbb94bb6ee7a4fe9a9c0705571171f9172c03b4b5032` |
| `thm-torsion-theorem-for-c-prime-one-sixth-groups` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `80f96e52fd8105262d9236419ea1f4b7c494e603b03acb4e57e95397860b25a2` |
| `thm-transversality-homotopy-theorem` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `603a33244ccc81cc099a92b5eace0ba5e6f00789278467cae1804a9a8962c3fa` |
| `thm-universal-property-of-profinite-completion` | `inverse-systems-profinite-groups-and-completion` | gpt-5.6-terra | `1e2e2dc015eac74dc105cd3acb3d1b1e65e10aecfd1bb7c92e70605768169e0c` |
| `thm-van-kampen-lemma` | `small-cancellation-and-dehn-algorithms` | gpt-5.6-terra | `1546138442ceec01a188bde8acd06f1e533ecc9980057e345f62334b6647f317` |
| `thm-weak-whitney-proper-embedding-theorem` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `f3801e0be808b680c753be3ec43beaff29dc9931e676bc6d866f0b8c7453914d` |
| `thm-whitney-approximation-for-euclidean-valued-maps` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `ef347006875d4c952bdf4aa81f899122ad1bdf08ba735f3d73b9241dd4c35b37` |
| `thm-whitney-approximation-for-manifold-valued-maps` | `whitney-embedding-tubular-neighbourhoods-and-approximation` | gpt-5.6-terra | `8bd00f1a80c1a407b88ca041e0c8c624ad2123bda9b92d13e0a9fb525370aba1` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-28`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-28-judge-adjudications.jsonl`
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
`research/frontier-28-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-28-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-28-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
