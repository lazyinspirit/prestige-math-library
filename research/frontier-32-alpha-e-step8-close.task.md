# Step 8 adjudication — group **e**, run `frontier-32`

You are the group Alpha for batches **8**, **10**, **18**: 3 A/B pair(s), 6 page(s), 113 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `triangulated-categories` | A | homological-algebra | 365.061 | `group-cohomology-as-a-derived-functor-examples` |
| 8 | `triangulated-categories-examples` | B | homological-algebra | 365.062 | `triangulated-categories` |
| 10 | `cw-complexes-and-cellular-homology` | A | algebraic-topology | 366.007 | `relative-homology-excision-and-mayer-vietoris-examples` |
| 10 | `cw-complexes-and-cellular-homology-examples` | B | algebraic-topology | 366.008 | `cw-complexes-and-cellular-homology` |
| 18 | `stable-unstable-manifolds-and-morse-smale-transversality` | A | differential-topology | 523 | `gradient-like-vector-fields-and-morse-trajectories-examples`, `complete-metrizability-and-baire` |
| 18 | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | B | differential-topology | 524 | `stable-unstable-manifolds-and-morse-smale-transversality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `triangulated-categories` — Triangulated Categories (46 item(s))

- `def-category-with-translation` · definition — Category with translation
- `def-triangle-in-a-category-with-translation` · definition — Triangle in a category with translation
- `def-morphism-and-isomorphism-of-triangles` · definition — Morphism and isomorphism of triangles
- `def-rotation-of-a-triangle` · definition — Rotation of a triangle
- `def-distinguished-triangle` · definition — Distinguished triangle
- `def-triangulated-category-axiom-tr-one` · definition — Triangulated-category axiom TR1
- `def-triangulated-category-axiom-tr-two` · definition — Triangulated-category axiom TR2
- `def-triangulated-category-axiom-tr-three` · definition — Triangulated-category axiom TR3
- `def-triangulated-category-axiom-tr-four-octahedral` · definition — Triangulated-category axiom TR4 (octahedral)
- `def-triangulated-category` · definition — Triangulated category
- `rem-triangulated-sign-convention` · remark — The triangulated rotation-sign convention
- `prop-zero-and-split-triangles-are-distinguished` · proposition — Zero and split triangles are distinguished
- `prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations` · proposition — Distinguished triangles are closed under shifts and both rotations
- `def-homological-functor-on-a-triangulated-category` · definition — Homological functor on a triangulated category
- `def-cohomological-functor-on-a-triangulated-category` · definition — Cohomological functor on a triangulated category
- `thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological` · theorem — Representable Hom functors on a triangulated category are homological or cohomological
- `thm-long-exact-hom-sequences-of-a-distinguished-triangle` · theorem — Long exact Hom sequences of a distinguished triangle
- `cor-triangulated-five-lemma` · corollary — The triangulated five lemma
- `prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third` · proposition — Two isomorphism components of a morphism of triangles force the third
- `prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes` · proposition — A map is zero exactly when the corresponding representable map vanishes
- `prop-a-distinguished-triangle-with-zero-first-map-is-split` · proposition — A distinguished triangle with zero first map is split
- `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` · proposition — A distinguished triangle splits exactly when one connecting map vanishes
- `prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism` · proposition — The cone object of a map is unique up to nonunique isomorphism
- `prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf` · proposition — The octahedral axiom gives a triangle relating the cones of f, g, and gf
- `def-exact-functor-between-triangulated-categories` · definition — Exact functor between triangulated categories
- `prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility` · proposition — A translation-compatible natural isomorphism of exact functors respects triangles
- `def-triangulated-subcategory` · definition — Triangulated subcategory
- `def-thick-subcategory` · definition — Thick subcategory
- `prop-the-total-kernel-of-a-cohomological-functor-is-thick` · proposition — The total kernel of a cohomological functor is thick
- `prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category` · proposition — The full subcategory of acyclic complexes is thick in the homotopy category
- `def-standard-cone-triangle-in-the-homotopy-category` · definition — Standard cone triangle in the homotopy category
- `def-distinguished-cone-triangle-in-the-homotopy-category` · definition — Distinguished cone triangle in the homotopy category
- `lem-cone-triangles-satisfy-tr-one` · lemma — Cone triangles satisfy TR1
- `lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign` · lemma — Cone triangles satisfy TR2 with the declared rotation sign
- `lem-cone-triangles-satisfy-tr-three` · lemma — Cone triangles satisfy TR3
- `lem-cone-triangles-satisfy-the-octahedral-axiom` · lemma — Cone triangles satisfy the octahedral axiom
- `thm-the-homotopy-category-of-an-abelian-category-is-triangulated` · theorem — The homotopy category of an abelian category is triangulated
- `thm-homology-is-a-homological-functor-on-the-homotopy-category` · theorem — Homology is a homological functor on the homotopy category
- `prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories` · proposition — An additive functor on abelian categories induces an exact functor on homotopy categories
- `prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language` · proposition — A quasi-isomorphism has an acyclic cone in the triangulated language
- `fs-the-third-map-in-a-morphism-of-triangles-is-unique` · false-statement — The third map in a morphism of triangles is unique
- `fs-cones-form-a-functor-in-every-triangulated-category` · false-statement — Cones form a functor in every triangulated category
- `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` · false-statement — A triangle is distinguished whenever the three composites vanish
- `fs-the-octahedral-axiom-is-the-associativity-of-composition` · false-statement — The octahedral axiom is the associativity of composition
- `fs-every-triangulated-subcategory-is-thick` · false-statement — Every triangulated subcategory is thick
- `fs-the-rotation-of-a-distinguished-triangle-has-no-sign` · false-statement — The rotation of a distinguished triangle has no sign

### `triangulated-categories-examples` — Triangulated Categories — Examples (7 item(s))

- `ex-the-split-distinguished-triangle` · example — The split distinguished triangle
- `ex-the-cone-triangle-of-multiplication-by-m` · example — The cone triangle of multiplication by m
- `ex-the-long-exact-hom-sequence-of-a-cone-triangle` · example — The long exact Hom sequence of a cone triangle
- `ex-an-octahedron-for-two-composable-maps-of-stalk-complexes` · example — An octahedron for two composable maps of stalk complexes
- `ex-the-thick-subcategory-of-acyclic-complexes` · example — The thick subcategory of acyclic complexes
- `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` · counterexample — A three-term zero-composite diagram that is not distinguished
- `cex-nonuniqueness-of-a-tr-three-completion` · counterexample — Nonuniqueness of a TR3 completion

### `cw-complexes-and-cellular-homology` — Cw Complexes and Cellular Homology (26 item(s))

- `def-cell-attachment-by-a-characteristic-map` · definition — Cell attachment by a characteristic map
- `lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure` · lemma — The interior of an attached cell embeds openly in its closure
- `def-cw-complex-with-closure-finiteness-and-weak-topology` · definition — CW complex with closure finiteness and weak topology
- `def-skeleta-cw-subcomplex-and-relative-cw-complex` · definition — Skeleta, CW subcomplexes, and relative CW complexes
- `prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition` · proposition — CW skeleta are closed and cells form a disjoint partition
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` · lemma — A compact subspace of a CW complex meets only finitely many cells
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` · corollary — The image of a compact space lies in a finite CW subcomplex
- `prop-relative-cw-inclusions-are-cofibrations` · proposition — Relative CW inclusions are cofibrations
- `prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology` · proposition — A CW complex is the colimit of its skeleta in the weak topology
- `thm-relative-homology-of-consecutive-cw-skeleta` · theorem — Relative homology of consecutive CW skeleta
- `def-oriented-cellular-chain-group` · definition — Oriented cellular chain group
- `def-cellular-boundary-from-three-consecutive-skeleta` · definition — Cellular boundary from three consecutive skeleta
- `lem-the-cellular-boundary-squares-to-zero` · lemma — The cellular boundary squares to zero
- `def-cellular-homology` · definition — Cellular homology
- `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension` · lemma — Skeletal homology stabilizes away from the cell dimension
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology` · lemma — Homology of an infinite CW complex is the colimit of skeletal homology
- `thm-cellular-homology-computes-singular-homology` · theorem — Cellular homology computes singular homology
- `thm-relative-cellular-homology-computes-relative-singular-homology` · theorem — Relative cellular homology computes relative singular homology
- `def-incidence-number-of-two-cw-cells` · definition — Incidence number of two CW cells
- `thm-cellular-boundary-is-the-incidence-degree-matrix` · theorem — Cellular boundary is the incidence degree matrix
- `prop-cellular-maps-induce-cellular-chain-maps` · proposition — Cellular maps induce cellular chain maps
- `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary` · corollary — A CW complex with no cells in adjacent dimensions has zero cellular boundary
- `def-euler-characteristic-of-a-finite-cw-complex` · definition — Euler characteristic of a finite CW complex
- `thm-euler-poincare-formula-for-finite-cw-complexes` · theorem — Euler–Poincare formula for finite CW complexes
- `prop-euler-characteristic-is-additive-for-finite-cw-pairs` · proposition — Euler characteristic is additive for finite CW pairs
- `prop-euler-characteristic-of-a-finite-cw-product` · proposition — Euler characteristic of a finite CW product

### `cw-complexes-and-cellular-homology-examples` — Cw Complexes and Cellular Homology — Examples (9 item(s))

- `ex-cellular-homology-of-real-projective-space` · example — Cellular homology of real projective space
- `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space` · example — Cellular homology and ring-independent groups of complex projective space
- `ex-cellular-boundary-matrix-of-a-closed-orientable-surface` · example — Cellular boundary matrix of a closed orientable surface
- `ex-cellular-homology-of-a-lens-space` · example — Cellular homology of a lens space
- `ex-cellular-homology-of-an-infinite-dimensional-projective-space` · example — Cellular homology of an infinite-dimensional projective space
- `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic` · example — Two CW structures on the circle have the same Euler characteristic
- `cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball` · counterexample — The closure of a CW cell need not be a closed ball
- `cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex` · counterexample — A cell decomposition without the weak topology need not be a CW complex
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells` · counterexample — The Hawaiian earring is not a CW complex with its punctured circles as cells

### `stable-unstable-manifolds-and-morse-smale-transversality` — Stable Unstable Manifolds and Morse Smale Transversality (20 item(s))

- `def-morse-smale-pair` · definition — Morse--Smale pairs
- `def-parametrized-morse-trajectory-space` · definition — Parametrized Morse trajectory space
- `prop-parametrized-morse-trajectory-space-is-a-manifold` · proposition — A parametrized Morse trajectory space is a manifold
- `lem-time-translation-acts-freely-on-nonconstant-trajectories` · lemma — Time translation acts freely on nonconstant trajectories
- `def-unparametrized-morse-trajectory-moduli-space` · definition — Unparametrized Morse trajectory moduli space
- `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories` · lemma — A regular level identifies unparametrized trajectories
- `thm-unparametrized-trajectory-space-is-a-smooth-manifold` · theorem — The unparametrized trajectory space is a smooth manifold
- `cor-no-morse-smale-trajectories-for-nonpositive-index-drop` · corollary — No Morse--Smale trajectories for nonpositive index drop
- `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` · lemma — Morse--Smale transversality and surjectivity of the linearized flow operator
- `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds` · definition — Fredholm maps and regular values on countable-base Banach manifolds
- `thm-sard-smale-residual-regular-values-for-fredholm-maps` · theorem — Sard--Smale residual regular values for Fredholm maps
- `lem-universal-metric-trajectory-projection-is-fredholm` · lemma — The universal metric--trajectory projection is Fredholm
- `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics` · lemma — Baire diagonal passage from finite regularity to smooth metrics
- `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` · theorem — Morse--Smale metrics are residual for a fixed Morse function
- `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` · theorem — Relative Morse--Smale perturbation of a gradient-like field
- `prop-index-one-trajectory-spaces-are-zero-dimensional` · proposition — Index-one trajectory spaces are zero-dimensional
- `prop-index-two-trajectory-spaces-are-one-dimensional` · proposition — Index-two trajectory spaces are one-dimensional
- `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices` · lemma — Broken Morse trajectories have strictly decreasing critical values and indices
- `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data` · remark — Morse--Smale residuality does not assert simultaneous genericity for all data
- `rem-ambient-orientability-is-not-required-for-morse-smale-transversality` · remark — Ambient orientability is not required for Morse--Smale transversality

### `stable-unstable-manifolds-and-morse-smale-transversality-examples` — Stable Unstable Manifolds and Morse Smale Transversality — Examples (5 item(s))

- `ex-morse-smale-flow-on-the-circle` · example — A Morse--Smale flow on the circle
- `ex-a-morse-smale-height-function-on-a-tilted-torus` · example — A Morse--Smale height function on a tilted torus
- `cex-symmetric-torus-height-flow-is-not-morse-smale` · counterexample — The symmetric torus height flow is not Morse--Smale
- `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` · counterexample — An index-one moduli locus can be infinite without compactness
- `ex-regular-level-slices-for-unparametrized-trajectories` · example — Regular-level slices for unparametrized trajectories

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-8824c5b08fc1f41e96253c0f · `def-triangulated-category-axiom-tr-four-octahedral`** (from group e, would-be-fatal) — The displayed fourth face ends in $Q_g\xrightarrow{p_f[1]d_g}Q_f[1]$, but this definition never introduces $p_f$ or $d_g`; moreover, under the apparent standard typings (the third maps of the chosen $f$- and $g$-triangles), that composite is not type-correct. Thus TR4 as written does not define a valid axiom, and downstream octahedral claims rest on an ill-typed formulation.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-32`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
