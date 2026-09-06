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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
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

run: frontier-31a
role: alpha-adjudicate
label: step8-g
covers: 7, 12, 20

# Step 8 adjudication — group **g**, run `frontier-31a`

You are the group Alpha for batches **7**, **12**, **20**: 3 A/B pair(s), 6 page(s), 97 item(s), 31 open rejection(s) over 31 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `tensor-and-fusion-categories` | A | category-theory | 365.035 | `enriched-categories-examples` |
| 7 | `tensor-and-fusion-categories-examples` | B | category-theory | 365.036 | `tensor-and-fusion-categories` |
| 12 | `relative-homology-excision-and-mayer-vietoris` | A | algebraic-topology | 366.005 | `singular-chains-and-singular-homology-examples` |
| 12 | `relative-homology-excision-and-mayer-vietoris-examples` | B | algebraic-topology | 366.006 | `relative-homology-excision-and-mayer-vietoris` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories` | A | differential-topology | 521 | `morse-functions-critical-values-and-genericity-examples` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories-examples` | B | differential-topology | 522 | `gradient-like-vector-fields-and-morse-trajectories` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-and-fusion-categories` — Tensor and Fusion Categories (29 item(s))

- `def-k-linear-category-and-k-linear-functor` · definition — k-linear categories and k-linear functors
- `def-locally-finite-k-linear-abelian-category` · definition — Locally finite k-linear abelian categories
- `def-finite-k-linear-abelian-category` · definition — Finite k-linear abelian categories
- `def-semisimple-object-and-semisimple-abelian-category` · definition — Semisimple objects and semisimple abelian categories
- `def-tensor-and-multitensor-category` · definition — Tensor and multitensor categories
- `def-fusion-and-multifusion-category` · definition — Fusion and multifusion categories
- `rem-tensor-category-terminology-is-source-dependent` · remark — Tensor-category terminology follows the EGNO convention
- `thm-the-tensor-product-in-a-multitensor-category-is-biexact` · theorem — Tensor product in a multitensor category is biexact
- `thm-dualization-in-a-multitensor-category-is-exact` · theorem — Dualization in a multitensor category is exact
- `thm-images-commute-with-tensor-products-in-a-multitensor-category` · theorem — Images commute with tensor products in a multitensor category
- `thm-tensoring-with-a-dualizable-object-preserves-projectives` · theorem — Tensoring with a dualizable object preserves projectives
- `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple` · corollary — The unit is projective exactly when the tensor category is semisimple
- `thm-the-unit-object-of-a-multitensor-category-is-semisimple` · theorem — The unit object of a multitensor category is semisimple
- `thm-the-unit-object-of-a-tensor-category-is-simple` · theorem — The unit object of a tensor category is simple
- `cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` · corollary — Evaluation is epic and coevaluation monic for nonzero objects
- `def-tensor-functor-between-tensor-categories` · definition — Tensor functors between tensor categories
- `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` · theorem — An exact k-linear strong monoidal functor out of a tensor category is faithful
- `def-grothendieck-ring-of-a-tensor-category` · definition — The Grothendieck ring of a tensor category
- `thm-the-grothendieck-ring-multiplication-is-well-defined` · theorem — Grothendieck-ring multiplication is well-defined
- `def-fusion-rules` · definition — Fusion rules
- `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring` · theorem — Duality induces an anti-involution on the Grothendieck ring
- `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` · theorem — Left and right dual objects are isomorphic in a semisimple multitensor category
- `rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure` · remark — Objectwise double-dual isomorphisms do not supply a pivotal structure
- `rem-the-boundary-of-the-fusion-category-development` · remark — The boundary of this fusion-category development
- `fs-every-finite-k-linear-abelian-category-is-semisimple` · false-statement — Every finite k-linear abelian category is semisimple
- `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category` · false-statement — Every rigid k-linear abelian monoidal category is a tensor category
- `fs-a-tensor-functor-is-just-a-strong-monoidal-functor` · false-statement — A tensor functor is just a strong monoidal functor
- `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative` · false-statement — The Grothendieck ring of a tensor category is always commutative
- `fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure` · false-statement — Objectwise isomorphisms X isomorphic to its double dual supply a pivotal structure

### `tensor-and-fusion-categories-examples` — Tensor and Fusion Categories — Examples (4 item(s))

- `ex-finite-dimensional-vector-spaces-form-a-fusion-category` · example — Finite-dimensional vector spaces form a fusion category
- `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` · example — The Grothendieck ring of finite-dimensional vector spaces
- `ex-a-matrix-multifusion-category-with-nonsimple-unit` · example — A matrix multifusion category with nonsimple unit
- `ex-fusion-rules-for-a-supplied-finite-simple-family` · example — Fusion rules for a supplied finite simple family

### `relative-homology-excision-and-mayer-vietoris` — Relative Homology Excision and Mayer Vietoris (30 item(s))

- `def-singular-chain-complex-of-a-pair` · definition — Relative singular chain complex
- `lem-singular-boundary-descends-to-relative-chains` · lemma — Boundary on relative chains
- `def-relative-singular-homology` · definition — Relative singular homology
- `prop-relative-homology-is-functorial-for-maps-of-pairs` · proposition — Functoriality of relative homology
- `prop-relative-homology-of-the-empty-and-total-subspace` · proposition — Relative homology for the empty and total subspace
- `thm-long-exact-sequence-of-a-pair-in-singular-homology` · theorem — Long exact sequence of a pair
- `def-relative-homology-connecting-homomorphism-on-cycles` · definition — Relative connecting homomorphism on cycles
- `lem-the-relative-connecting-map-is-independent-of-lift-and-representative` · lemma — Well-definedness of the relative connector
- `thm-naturality-of-the-long-exact-sequence-of-a-pair` · theorem — Naturality of the pair long exact sequence
- `def-barycenter-and-affine-cone-on-a-singular-chain` · definition — Barycenter and affine cone
- `def-barycentric-subdivision-chain-operator` · definition — Barycentric subdivision operator
- `thm-barycentric-subdivision-is-a-chain-map` · theorem — Barycentric subdivision is a chain map
- `def-barycentric-subdivision-prism-homotopy` · definition — Subdivision prism homotopy
- `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` · theorem — Subdivision is chain homotopic to the identity
- `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` · lemma — Mesh tends to zero under iterated subdivision
- `def-cover-small-singular-chain-subcomplex` · definition — Cover-small singular chains
- `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` · lemma — Finite chains eventually become cover-small
- `thm-cover-small-singular-chains-compute-singular-homology` · theorem — Cover-small chains compute singular homology
- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` · theorem — The cover-small inclusion is a chain-homotopy equivalence
- `thm-excision-for-singular-homology` · theorem — Excision for singular homology
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` · corollary — Good pairs and quotient reduced homology
- `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` · lemma — Cover-small chains for a two-open cover
- `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence` · theorem — Short exact chain Mayer–Vietoris sequence
- `thm-mayer-vietoris-sequence-in-singular-homology` · theorem — Mayer–Vietoris sequence in singular homology
- `def-mayer-vietoris-connecting-class` · definition — Mayer–Vietoris connecting class
- `lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition` · lemma — Well-definedness of the Mayer–Vietoris connector
- `thm-naturality-of-singular-mayer-vietoris` · theorem — Naturality of singular Mayer–Vietoris
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` · theorem — Simplicial and singular homology agree
- `cor-homology-of-spheres` · corollary — Homology of spheres
- `cor-suspension-isomorphism-in-reduced-singular-homology` · corollary — Suspension isomorphism in reduced singular homology

### `relative-homology-excision-and-mayer-vietoris-examples` — Relative Homology Excision and Mayer Vietoris — Examples (9 item(s))

- `ex-relative-homology-of-a-disk-and-its-boundary` · example — Relative homology of a disk and its boundary
- `ex-relative-homology-of-an-interval-and-its-endpoints` · example — Relative homology of an interval and its endpoints
- `ex-first-barycentric-subdivision-of-a-triangle` · example — First barycentric subdivision of a triangle
- `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` · example — Cover-small chains for a two-arc cover of a circle
- `ex-mayer-vietoris-computation-of-sphere-homology` · example — Mayer–Vietoris computation of sphere homology
- `ex-mayer-vietoris-computation-of-the-torus-first-homology` · example — Mayer–Vietoris computation of first homology of the torus
- `cex-excision-fails-without-the-closure-inside-interior-hypothesis` · counterexample — Excision fails without closure inside interior
- `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` · counterexample — No uniform subdivision depth for all singular simplices
- `cex-relative-homology-is-not-the-homology-of-the-set-difference` · counterexample — Relative homology is not homology of the set difference

### `gradient-like-vector-fields-and-morse-trajectories` — Gradient Like Vector Fields and Morse Trajectories (20 item(s))

- `def-riemannian-gradient-of-a-smooth-function` · definition — The Riemannian gradient is the metric dual of the differential
- `lem-riemannian-gradient-vanishes-exactly-at-critical-points` · lemma — The Riemannian gradient vanishes exactly at the critical points
- `def-negative-gradient-trajectory-of-a-morse-function` · definition — Negative-gradient trajectories of a Morse function
- `lem-negative-gradient-energy-identity` · lemma — A negative-gradient trajectory satisfies the energy identity
- `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` · corollary — Nonconstant negative-gradient trajectories strictly decrease the function
- `def-downward-gradient-like-vector-field` · definition — Downward gradient-like vector fields for a Morse function
- `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` · proposition — Every Morse function admits a complete downward gradient-like field on a closed manifold
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` · lemma — Precompact trajectory tails have nonempty compact connected flow-invariant limit sets
- `lem-a-limit-point-of-a-gradient-trajectory-is-critical` · lemma — Every precompact end-limit point of a negative-gradient trajectory is critical
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` · lemma — A negative-gradient trajectory on a compact Morse manifold has single critical alpha and omega limits
- `def-morse-trajectory-from-p-to-q` · definition — A Morse trajectory from one critical point to another
- `lem-morse-trajectories-have-positive-energy-drop` · lemma — Morse trajectories have a positive energy drop
- `def-stable-and-unstable-sets-of-a-critical-point` · definition — Stable and unstable sets of a critical point
- `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` · theorem — Local stable and unstable manifolds at a Morse critical point
- `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` · theorem — Global stable and unstable manifolds are immersed Euclidean spaces
- `lem-stable-and-unstable-manifolds-are-flow-invariant` · lemma — Stable and unstable manifolds are flow invariant
- `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` · corollary — A downward gradient flow has no nonconstant periodic or recurrent orbit
- `def-proper-smooth-function-and-compact-morse-slab` · definition — Proper smooth functions and compact Morse slabs
- `prop-proper-morse-slabs-give-complete-connecting-trajectories` · proposition — Proper Morse slabs prevent finite-time escape of connecting trajectories
- `rem-noncompact-flow-completeness-is-an-extra-hypothesis` · remark — Completeness of a gradient flow is an extra hypothesis on a noncompact manifold

### `gradient-like-vector-fields-and-morse-trajectories-examples` — Gradient Like Vector Fields and Morse Trajectories — Examples (5 item(s))

- `ex-negative-gradient-lines-for-a-quadratic-morse-function` · example — Negative-gradient lines for a quadratic Morse function
- `ex-meridian-trajectories-for-height-on-the-sphere` · example — Meridian trajectories for height on the sphere
- `ex-gradient-flow-on-the-torus-morse-function` · example — Gradient flow for a Morse function on the flat torus
- `cex-positive-gradient-reverses-stable-and-unstable-dimensions` · counterexample — Using the positive gradient reverses the stable and unstable dimensions
- `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` · counterexample — A gradient flow on a noncompact manifold can be incomplete

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

5 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-93b925f4c1ffce51fe33418e · `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful`** (from group g, would-be-fatal) — The stated target is an arbitrary multitensor category, but def-tensor-and-multitensor-category does not require a nonzero unit, and the published def-category explicitly permits the empty category. The zero k-linear abelian rigid monoidal category satisfies the local definition of multitensor category; the zero functor from a tensor category to it is exact, k-linear, and strong monoidal, but is not faithful. Step 1.1 assumes without a stated premise that the target unit is nonzero.
- **s8a-76e67cbce18449dc106b5592 · `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category`** (from group g, would-be-fatal) — The local setup defines k only as a field. Its cited EGNO result occurs under the source section's algebraically closed-field assumption, while the proof's step 2.1 invokes equality of the two Hom-space dimensions from semisimplicity without a local result establishing that equality over an arbitrary k. Adjudicate whether the claimed generality is valid or the field hypothesis is required.
- **s8a-bef3f6664e848ad42bdaec3b · `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`** (from group g, would-be-fatal) — Neither this item nor any item in the corpus defines the decisive hypothesis 'good pair'. Thus the exact deformation-neighborhood condition needed for the quotient theorem is not stated or linked, so the claim's domain is indeterminate.
- **s8a-9572fde0899aae1f37932e53 · `cor-suspension-isomorphism-in-reduced-singular-homology`** (from group g, would-be-fatal) — Neither this item nor any corpus item defines 'based well-pointed space'. The qualifier is used to support the cone-neighborhood Mayer-Vietoris argument, but its exact condition is absent.
- **s8a-7a16928d2f2e586234d0b01d · `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`** (from group g, gap-a-reader-closes) — The cited flow theorem supplies only a maximal local flow. The conclusion says the limit set is invariant under every Phi_s, and step 3 applies both s and -s, but it does not establish that Phi_s is defined for all real s at every point of the compact limit set. A compact-set extension argument can likely close this, but it is not supplied.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` | `relative-homology-excision-and-mayer-vietoris-examples` | gpt-5.6-terra | `7f41972dd03160a6b070935415f767fe7f36e74479838c7a94ab9f15b31808e9` |
| `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `9b9201c1386b5d9d3400d9506dc1991c2442ec66a833369602a750ef3c562648` |
| `cor-homology-of-spheres` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `83ae583bebdeb0c89e5b4aea2e72db56cb32441f33c55642cd78d40bb3d56a84` |
| `cor-suspension-isomorphism-in-reduced-singular-homology` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `b51006d211726ea2dac9c1d1b28d3e32c79e69bc6e044acb27be010fe2bed695` |
| `def-barycenter-and-affine-cone-on-a-singular-chain` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `d36528c6dfcc8d2de8f7c9cb23a5405a3967997d86732b73953010c4a2198a3f` |
| `def-barycentric-subdivision-prism-homotopy` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `f815497b3e19e63b3dde4fe35347a8b6bafc9bd03dd040435fbde7c97e30eeac` |
| `def-mayer-vietoris-connecting-class` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `a619ae62e29c493801c8312be916d35b5d170bc4e2f8c2f057cd1f6fa617fcf8` |
| `def-morse-trajectory-from-p-to-q` | `gradient-like-vector-fields-and-morse-trajectories` | gpt-5.6-terra | `2f491dd6d02d2939fc0c9af0558110d4cd1212be711e3c45624c7db32dec5651` |
| `def-negative-gradient-trajectory-of-a-morse-function` | `gradient-like-vector-fields-and-morse-trajectories` | gpt-5.6-terra | `92206ee7169a3badda19aa3a8529bd1775932f0cfe2a24f30238ff1ae0ff8142` |
| `def-singular-chain-complex-of-a-pair` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `31261777cc1bb07afa4774fcab3684ba0cd966d7448fa939f75d4c50423e08ad` |
| `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` | `relative-homology-excision-and-mayer-vietoris-examples` | gpt-5.6-terra | `8778da650347f58af9cab55be2f2bd15bde6d5da7bd3192a199374cb8c360f0c` |
| `ex-fusion-rules-for-a-supplied-finite-simple-family` | `tensor-and-fusion-categories-examples` | gpt-5.6-terra | `147d1c5c72871d85015e2ae8b7eae83c34994361dc685d17b4105f96a07c0cd8` |
| `ex-mayer-vietoris-computation-of-sphere-homology` | `relative-homology-excision-and-mayer-vietoris-examples` | gpt-5.6-terra | `3d4ed13f76b7a2ee2aaabb15e449379825b6fc2aeb74bdf514ee1351e5060015` |
| `ex-relative-homology-of-a-disk-and-its-boundary` | `relative-homology-excision-and-mayer-vietoris-examples` | gpt-5.6-terra | `74821a3943cccd2a19bfd9ad7d5b598ef342a3bb67e66e49f17a31c9573b5623` |
| `ex-relative-homology-of-an-interval-and-its-endpoints` | `relative-homology-excision-and-mayer-vietoris-examples` | gpt-5.6-terra | `1996be5f5f3d649253745c3054adeb53b45293d9f797717df7c84d1d818e99ba` |
| `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` | `tensor-and-fusion-categories-examples` | gpt-5.6-terra | `1ece252abf3c8ac820a49efdbd25f23206d5e73e05501ac146c91b67b99dd9c8` |
| `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `72982eab3daf04f5b1cb2a8f579d22e52dec85ba04189ac881c553667bab4053` |
| `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | `gradient-like-vector-fields-and-morse-trajectories` | gpt-5.6-terra | `edd841845d01990c7a6d6e24e7aafaf2228c7e0099dd21be2b0a9ec5a69ed568` |
| `lem-singular-boundary-descends-to-relative-chains` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `306fdeabb822140ccb0c7f619fee4d1cb91b859de6d0348f68246699f9c0640a` |
| `lem-stable-and-unstable-manifolds-are-flow-invariant` | `gradient-like-vector-fields-and-morse-trajectories` | gpt-5.6-terra | `987e32bb8815b617017f9ed490eddb78b62da3e910c3e5306da4ffe9df65fe5c` |
| `prop-relative-homology-of-the-empty-and-total-subspace` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `1b5f42f23ae84d1ac20aca5b24a9a0fda20860ee42e27101ff330ea603b5b482` |
| `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` | `tensor-and-fusion-categories` | gpt-5.6-terra | `e5579928926f58b7f007990e1a6842b28a68c97fd0bcb00647d4f2397007db06` |
| `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `4255738ea830b802404b9b995cdcc3b1b32651f050c80964e1db0e73d0a83c66` |
| `thm-cover-small-singular-chains-compute-singular-homology` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `d4aa03a2cc30e86ea908f807334510760d451fcb27cd1bff523d4121c96ec542` |
| `thm-excision-for-singular-homology` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `1b14a19ad6f14e2abc602a0d747f24b3a7c7321160f70d824654f66944bf9112` |
| `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` | `tensor-and-fusion-categories` | gpt-5.6-terra | `e92aea87b9331ac00870ee991f821ba3137f16a407016093e8c2ee0a9958a50c` |
| `thm-long-exact-sequence-of-a-pair-in-singular-homology` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `436e6b6544026b78c6e25b1a1cd05d9a26184bfb0569df025b83843f1af729cf` |
| `thm-naturality-of-singular-mayer-vietoris` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `19d93448ea7f1968f5e57c534d0f9a085d3b560daf7aa11871902424ff8a5a70` |
| `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` | `relative-homology-excision-and-mayer-vietoris` | gpt-5.6-terra | `e28f820b811514f4e5b62c8e457f4fcee5c3e1c0fd20adb8a48462d02d083e66` |
| `thm-tensoring-with-a-dualizable-object-preserves-projectives` | `tensor-and-fusion-categories` | gpt-5.6-terra | `947ac7524c3d95c6293b26bbb4f34d5a7527ad6c8722a8cf4f8e6e560b78f19f` |
| `thm-the-unit-object-of-a-multitensor-category-is-semisimple` | `tensor-and-fusion-categories` | gpt-5.6-terra | `f38fefd1b160ce36e6346e447d10ae131c30dcab3c1d848b4df80b704b8624d5` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
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
