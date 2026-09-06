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
group work, `research/frontier-32-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-32
role: alpha-adjudicate
label: step8-e
covers: 8, 10, 18

# Step 8 adjudication — group **e**, run `frontier-32`

You are the group Alpha for batches **8**, **10**, **18**: 3 A/B pair(s), 6 page(s), 113 item(s), 32 open rejection(s) over 32 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` | `triangulated-categories-examples` | gpt-5.6-terra | `e9732406d44519b2e85d5fdd831a034b3197fff1043bfd03731ef59f2f3958e8` |
| `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | gpt-5.6-terra | `1806ca2aa65513cae615509c05a3f8b50795aa46caad7d81be09bc9d695d6221` |
| `cex-symmetric-torus-height-flow-is-not-morse-smale` | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | gpt-5.6-terra | `85d08a768c41ea933ba8dee9403691c93fce7625b4ab6fc558aa3ef7f1a65d1b` |
| `def-cellular-homology` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `3bbcb51dd6022eeb77b290126a4196b840c3ad7562188303020e18b3e0679a5b` |
| `def-rotation-of-a-triangle` | `triangulated-categories` | gpt-5.6-terra | `d07366f69f0fb791a5238f221083e40c541e5df2273acddb71aabd88c0825a1d` |
| `def-standard-cone-triangle-in-the-homotopy-category` | `triangulated-categories` | gpt-5.6-terra | `59615f3b47da1dad1961f4745e3f337075372859b5e53bda93448168cfd28b08` |
| `def-triangulated-category-axiom-tr-four-octahedral` | `triangulated-categories` | gpt-5.6-terra | `18d4e8cbb7acec91d2c17d0b3630dabd3c72bc1fe28f3a48badcc38d677ae58e` |
| `ex-a-morse-smale-height-function-on-a-tilted-torus` | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | gpt-5.6-terra | `89402c16c10f652b25325f96e7e57a765bc475a093c28f9deaa0dc64eb71dca9` |
| `ex-an-octahedron-for-two-composable-maps-of-stalk-complexes` | `triangulated-categories-examples` | gpt-5.6-terra | `7cf1d42412c510b4cda4ff27abf5c34baffb3363ce3b86c1a312f884ea5fe5a1` |
| `ex-cellular-homology-of-an-infinite-dimensional-projective-space` | `cw-complexes-and-cellular-homology-examples` | gpt-5.6-terra | `e8ea572f58cdd0d3d18b1b9d94fcf76b9cefb3ad58ee653688dddf452a450668` |
| `ex-morse-smale-flow-on-the-circle` | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | gpt-5.6-terra | `f4554ab8251d0f605768c10425e93855c4046f8f4fad3c3e6fe61934864925e3` |
| `ex-the-cone-triangle-of-multiplication-by-m` | `triangulated-categories-examples` | gpt-5.6-terra | `4eed2d501034f26b5a3317572300eea6ea80e6916358449bc41cbbc656b2ba5c` |
| `ex-the-thick-subcategory-of-acyclic-complexes` | `triangulated-categories-examples` | gpt-5.6-terra | `782dafa171c29e8c0c04b072a8557c5179947bb8d447a889620a4db6770766d5` |
| `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic` | `cw-complexes-and-cellular-homology-examples` | gpt-5.6-terra | `ca3064c0880347fd02727390b20698bd56adc166bafb86d988a8f76f315ba06c` |
| `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics` | `stable-unstable-manifolds-and-morse-smale-transversality` | gpt-5.6-terra | `08d20bce44b2b15efb2f6c35f3a605198e78e2b2942508e6b6d42f616e7d68ab` |
| `lem-cone-triangles-satisfy-the-octahedral-axiom` | `triangulated-categories` | gpt-5.6-terra | `3f517cb510f64c92f978806e3988e8312955732a565731107363ddb3e765b8cd` |
| `lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign` | `triangulated-categories` | gpt-5.6-terra | `73691dd2b596338866ea5a7060013ef476a438ec9ecfc0ea3b453c186bb0f4d3` |
| `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` | `stable-unstable-manifolds-and-morse-smale-transversality` | gpt-5.6-terra | `675cd2a85a101ba6e2735cdd317d89a9588647acbc9438102fe551e78fb965be` |
| `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `6602c940696d75e25ded5a627790ed8b3702bdcac4e919c137782638d1a215ed` |
| `lem-the-cellular-boundary-squares-to-zero` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `083b0f1b78b904c57aabf034ad9bae8443bd4a05c57ccd6382bbc4872b6bbd36` |
| `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` | `triangulated-categories` | gpt-5.6-terra | `106d0f064510404d1d403c63b8af706b1207bf53a9b2d6faffbc18c1422f795b` |
| `prop-cellular-maps-induce-cellular-chain-maps` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `aef88cc4536818bfb66430f42f2f197acf9f3c0f548789a4593bbf1eb5040cc9` |
| `prop-euler-characteristic-is-additive-for-finite-cw-pairs` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `838994302db38e98bf24c6a6deb09c035a0f11aaf9e2eaedd1e40d2e2a9e72ec` |
| `prop-parametrized-morse-trajectory-space-is-a-manifold` | `stable-unstable-manifolds-and-morse-smale-transversality` | gpt-5.6-terra | `bc5b26e0875a88f42674901816176b00393db45febaa42c119401aa5c9dfdac0` |
| `prop-relative-cw-inclusions-are-cofibrations` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `66e672e2f6321597f66154eef50ebe0ad57e9f19a6dd337391e886ab70b9a59e` |
| `prop-zero-and-split-triangles-are-distinguished` | `triangulated-categories` | gpt-5.6-terra | `353d6893fd5bf17f656ab614d6e10afdd09e7b500d6ab68f0555e70ee0c6a216` |
| `thm-cellular-boundary-is-the-incidence-degree-matrix` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `e22678e9175c789c9fb45f648b9aa5bcc14c6856faebe2517f5be8ecc72cd168` |
| `thm-cellular-homology-computes-singular-homology` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `6073cfb2853947dc0f8ad2350db57abbd12b3445930ee8a70daaf85237620b4f` |
| `thm-homology-is-a-homological-functor-on-the-homotopy-category` | `triangulated-categories` | gpt-5.6-terra | `e54a49ee1dc7b0aece687a0000b168374d4b8265b6f6adecaee37fba2541118d` |
| `thm-relative-cellular-homology-computes-relative-singular-homology` | `cw-complexes-and-cellular-homology` | gpt-5.6-terra | `4b81d249899ceb773926db7e65fdfd3eeddeff42689dbe781c61ef4da3f55322` |
| `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` | `stable-unstable-manifolds-and-morse-smale-transversality` | gpt-5.6-terra | `ca949e6b6f8fff127c2f591d85c3ffa7de2ca062f3684ce3dde2345857785605` |
| `thm-unparametrized-trajectory-space-is-a-smooth-manifold` | `stable-unstable-manifolds-and-morse-smale-transversality` | gpt-5.6-terra | `e028e31f6ed45d558b087233a0a05284982d59cadbe1d145c7203c8512d30983` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-32`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-32-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-32-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-32-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-32-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-32-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
