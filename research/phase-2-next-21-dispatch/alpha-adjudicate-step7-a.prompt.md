# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

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
group work, `research/phase-2-next-21-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

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
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
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

run: phase-2-next-21
role: alpha-adjudicate
label: step7-a
covers: 7, 8, 10

# Step 7 adjudication — group **a**, run `phase-2-next-21`

You are the group Alpha for batches **7**, **8**, **10**: 6 A/B pair(s), 12 page(s), 374 item(s), 78 open rejection(s) over 78 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-21-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-21-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `riemann-curvature-and-riemannian-submanifolds` | A | differential-geometry | 483 | `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `tensor-fields-exterior-algebra-and-differential-forms`, `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `the-spectral-theorem-and-singular-value-decomposition`, `matrix-differentiation-and-first-order-spectral-perturbation` |
| 7 | `riemann-curvature-and-riemannian-submanifolds-examples` | B | differential-geometry | 484 | `riemann-curvature-and-riemannian-submanifolds` |
| 7 | `lie-groups-invariant-fields-and-the-exponential-map` | A | differential-geometry | 491 | `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `connections-levi-civita-and-parallel-transport`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `monoids-groups-and-subgroups`, `matrices-and-the-matrix-of-a-linear-map`, `determinants-of-matrices-over-a-commutative-ring`, `holomorphic-functions-of-several-variables`, `the-group-algebra-and-representations`, `finite-dimensional-normed-spaces-and-riesz-lemma`, `formal-power-series`, `the-spectral-theorem-and-singular-value-decomposition` |
| 7 | `lie-groups-invariant-fields-and-the-exponential-map-examples` | B | differential-geometry | 492 | `lie-groups-invariant-fields-and-the-exponential-map`, `linear-recurrences-and-rational-generating-functions` |
| 8 | `lie-subgroups-actions-and-homogeneous-spaces` | A | differential-geometry | 493 | `whitney-embedding-tubular-neighbourhoods-and-approximation`, `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `manifolds-with-boundary-collars-and-orientations`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `lie-groups-invariant-fields-and-the-exponential-map`, `subspaces-products-and-quotients`, `covering-spaces-and-lifting`, `finite-averaging-and-character-theory-prerequisites`, `homology-axioms-degree-and-classical-applications`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `applications-of-the-fundamental-group` |
| 8 | `lie-subgroups-actions-and-homogeneous-spaces-examples` | B | differential-geometry | 494 | `lie-subgroups-actions-and-homogeneous-spaces`, `linear-recurrences-and-rational-generating-functions`, `the-ergodic-theorems-of-von-neumann-and-birkhoff` |
| 8 | `lie-algebra-representations-enveloping-algebras-and-pbw` | A | differential-geometry | 495 | `tensor-fields-exterior-algebra-and-differential-forms`, `lie-groups-invariant-fields-and-the-exponential-map`, `tensor-products-of-modules`, `modules-and-module-homomorphisms`, `free-modules-and-exact-sequences`, `rings-subrings-and-integral-domains`, `ideals-and-quotient-rings`, `chain-conditions-and-semisimple-modules` |
| 8 | `lie-algebra-representations-enveloping-algebras-and-pbw-examples` | B | differential-geometry | 496 | `lie-algebra-representations-enveloping-algebras-and-pbw` |
| 10 | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | A | differential-geometry | 511 | `smooth-partitions-of-unity-and-exhaustions`, `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `riemannian-metrics-length-distance-and-volume`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `dual-spaces-bilinear-forms-and-inertia`, `the-spectral-theorem-and-singular-value-decomposition` |
| 10 | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | B | differential-geometry | 512 | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `the-de-rham-theorem-and-degree` |
| 10 | `hamiltonian-mechanics-and-completely-integrable-systems` | A | differential-geometry | 513 | `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `the-exterior-derivative-and-cartan-calculus`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `measure-preserving-transformations-and-poincare-recurrence` |
| 10 | `hamiltonian-mechanics-and-completely-integrable-systems-examples` | B | differential-geometry | 514 | `hamiltonian-mechanics-and-completely-integrable-systems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `riemann-curvature-and-riemannian-submanifolds` — Riemann Curvature and Riemannian Submanifolds (53 item(s))

- `def-curvature-of-an-affine-connection` · definition — Curvature of an affine connection
- `lem-curvature-is-c-infinity-linear-in-all-three-vector-fields` · lemma — Curvature is C-infinity-linear in all three vector fields
- `thm-curvature-is-a-type-one-three-tensor` · theorem — Curvature is a type (1,3) tensor
- `prop-curvature-is-skew-in-its-first-two-arguments` · proposition — Curvature is skew in its first two arguments
- `prop-coordinate-formula-for-the-curvature-tensor` · proposition — Coordinate formula for the curvature tensor
- `def-curvature-of-a-vector-bundle-connection` · definition — Curvature of a vector-bundle connection
- `prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form` · proposition — Vector-bundle curvature is an endomorphism-valued two-form
- `thm-curvature-two-form-structure-equation` · theorem — Curvature two-form structure equation
- `thm-second-bianchi-identity-for-a-bundle-connection` · theorem — Second Bianchi identity for a bundle connection
- `prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball` · proposition — Flat connections have locally path-independent parallel transport on a coordinate ball
- `thm-a-flat-connection-admits-local-parallel-frames` · theorem — A flat connection admits local parallel frames
- `def-riemann-curvature-four-tensor` · definition — Riemann curvature four-tensor
- `thm-first-bianchi-identity` · theorem — First Bianchi identity
- `thm-algebraic-symmetries-of-the-riemann-tensor` · theorem — Algebraic symmetries of the Riemann tensor
- `thm-differential-second-bianchi-identity` · theorem — Differential second Bianchi identity
- `def-sectional-curvature` · definition — Sectional curvature
- `lem-sectional-curvature-is-independent-of-the-basis-of-the-plane` · lemma — Sectional curvature is independent of the basis of the plane
- `thm-sectional-curvatures-determine-the-riemann-tensor` · theorem — Sectional curvatures determine the Riemann tensor
- `def-constant-sectional-curvature-and-space-form` · definition — Constant sectional curvature and space form
- `prop-curvature-tensor-of-constant-sectional-curvature` · proposition — Curvature tensor of constant sectional curvature
- `def-ricci-curvature` · definition — Ricci curvature
- `lem-ricci-curvature-is-symmetric-and-basis-independent` · lemma — Ricci curvature is symmetric and basis independent
- `def-scalar-curvature` · definition — Scalar curvature
- `prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes` · proposition — Scalar curvature is twice the sum of sectional curvatures of orthonormal coordinate planes
- `def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature` · definition — Kulkarni–Nomizu product, trace-free Ricci tensor, and Weyl curvature
- `prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three` · proposition — Ricci decomposition of the Riemann tensor in dimension at least three
- `thm-contracted-second-bianchi-identity` · theorem — Contracted second Bianchi identity
- `thm-schurs-lemma-for-pointwise-constant-sectional-curvature` · theorem — Schur’s lemma for pointwise constant sectional curvature
- `thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space` · theorem — A Riemannian manifold is flat iff it is locally isometric to Euclidean space
- `def-tangential-and-normal-projections-along-a-riemannian-submanifold` · definition — Tangential and normal projections along a Riemannian submanifold
- `def-induced-connection-and-second-fundamental-form` · definition — Induced connection and second fundamental form
- `thm-the-induced-connection-is-levi-civita` · theorem — The induced connection is Levi–Civita
- `lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor` · lemma — The second fundamental form is a symmetric normal-bundle-valued two-tensor
- `def-normal-connection` · definition — Normal connection
- `def-shape-operator` · definition — Shape operator
- `thm-weingarten-equation-and-adjointness-of-the-shape-operator` · theorem — Weingarten equation and adjointness of the shape operator
- `thm-gauss-equation-for-a-riemannian-submanifold` · theorem — Gauss equation for a Riemannian submanifold
- `thm-codazzi-equation-for-a-riemannian-submanifold` · theorem — Codazzi equation for a Riemannian submanifold
- `thm-ricci-equation-for-the-normal-connection` · theorem — Ricci equation for the normal connection
- `def-totally-geodesic-submanifold` · definition — Totally geodesic submanifold
- `thm-equivalent-characterizations-of-a-totally-geodesic-submanifold` · theorem — Equivalent characterizations of a totally geodesic submanifold
- `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface` · definition — Principal curvatures, Gaussian curvature, and mean curvature of an oriented hypersurface
- `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures` · proposition — Euclidean hypersurface sectional curvature from principal curvatures
- `thm-gausss-theorema-egregium` · theorem — Gauss’s Theorema Egregium
- `def-mean-curvature-vector` · definition — Mean curvature vector
- `prop-first-variation-of-volume-for-a-normal-variation` · proposition — First variation of volume for a normal variation
- `rem-mean-curvature-and-minimal-submanifolds` · remark — Mean curvature and minimal submanifolds
- `fs-curvature-is-obtained-by-commuting-two-covariant-derivatives-without-a-bracket-correction` · false-statement — Curvature is obtained by commuting two covariant derivatives without a bracket correction
- `fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there` · false-statement — Christoffel symbols vanishing at one point implies curvature vanishes there
- `fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane` · false-statement — Sectional curvature depends on an ordered basis of the plane
- `fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension` · false-statement — Ricci curvature and scalar curvature determine the full Riemann tensor in every dimension
- `fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold` · false-statement — The second fundamental form is intrinsic to the abstract Riemannian manifold
- `fs-zero-mean-curvature-implies-a-submanifold-is-totally-geodesic` · false-statement — Zero mean curvature implies a submanifold is totally geodesic

### `riemann-curvature-and-riemannian-submanifolds-examples` — Riemann Curvature and Riemannian Submanifolds — Examples (12 item(s))

- `ex-euclidean-space-has-zero-curvature` · example — Euclidean space has zero curvature
- `ex-the-round-sphere-has-positive-constant-sectional-curvature` · example — The round sphere has positive constant sectional curvature
- `ex-hyperbolic-space-has-negative-constant-sectional-curvature` · example — Hyperbolic space has negative constant sectional curvature
- `ex-curvature-of-a-riemannian-product` · example — Curvature of a Riemannian product
- `ex-gaussian-curvature-of-a-surface-of-revolution` · example — Gaussian curvature of a surface of revolution
- `ex-principal-curvatures-of-a-round-sphere` · example — Principal curvatures of a round sphere
- `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form` · example — The cylinder has zero Gaussian curvature but nonzero second fundamental form
- `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic` · example — The catenoid has zero mean curvature but is not totally geodesic
- `ex-a-great-sphere-is-totally-geodesic` · example — A great sphere is totally geodesic
- `cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending` · counterexample — The same intrinsic plane can have different extrinsic curvature after bending
- `cex-zero-scalar-curvature-does-not-imply-flatness` · counterexample — Zero scalar curvature does not imply flatness
- `ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle` · example — Curvature two-form of a connection on a trivial plane bundle

### `lie-groups-invariant-fields-and-the-exponential-map` — Lie Groups Invariant Fields and the Exponential Map (48 item(s))

- `def-lie-group` · definition — Lie group
- `def-lie-group-homomorphism-isomorphism-and-automorphism` · definition — Lie-group homomorphism, isomorphism, and automorphism
- `def-left-and-right-translations-on-a-lie-group` · definition — Left and right translations on a Lie group
- `prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle` · proposition — Translations are diffeomorphisms and their differentials trivialize the tangent bundle
- `def-left-and-right-invariant-vector-fields` · definition — Left- and right-invariant vector fields
- `thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity` · theorem — Left-invariant vector fields evaluate isomorphically at the identity
- `prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant` · proposition — The Lie bracket of left-invariant fields is left invariant
- `def-lie-bracket-on-the-tangent-space-of-a-lie-group` · definition — Lie bracket on the tangent space of a Lie group
- `def-finite-dimensional-lie-algebra` · definition — Finite-dimensional Lie algebra
- `thm-the-tangent-space-at-the-identity-is-a-lie-algebra` · theorem — The tangent space at the identity is a Lie algebra
- `prop-right-invariant-fields-carry-the-opposite-lie-bracket` · proposition — Right-invariant fields carry the opposite Lie bracket
- `def-left-maurer-cartan-form` · definition — Left Maurer–Cartan form
- `prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant` · proposition — Maurer–Cartan form is a pointwise isomorphism and left invariant
- `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative` · definition — Finite-dimensional vector-valued forms and their exterior derivative
- `thm-maurer-cartan-structure-equation` · theorem — Maurer–Cartan structure equation
- `def-one-parameter-subgroup-of-a-lie-group` · definition — One-parameter subgroup of a Lie group
- `thm-left-invariant-vector-fields-are-complete` · theorem — Left-invariant vector fields are complete
- `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields` · theorem — One-parameter subgroups are integral curves of left-invariant fields
- `def-exponential-map-of-a-lie-group` · definition — Exponential map of a Lie group
- `prop-exponential-scales-one-parameter-subgroups` · proposition — Exponential scales one-parameter subgroups
- `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero` · theorem — The Lie-group exponential map is smooth with identity differential at zero
- `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero` · corollary — The exponential map is a local diffeomorphism at zero
- `def-local-logarithm-on-a-lie-group` · definition — Local logarithm on a Lie group
- `thm-one-parameter-subgroups-are-exactly-exponentials` · theorem — One-parameter subgroups are exactly exponentials
- `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials` · proposition — Commuting Lie-algebra elements have multiplicative exponentials
- `def-lie-algebra-homomorphism` · definition — Lie-algebra homomorphism
- `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism` · theorem — Differential of a Lie-group homomorphism is a Lie-algebra homomorphism
- `prop-exponential-map-is-natural-for-lie-group-homomorphisms` · proposition — Exponential map is natural for Lie-group homomorphisms
- `thm-a-homomorphism-from-a-connected-lie-group-is-determined-by-its-differential-at-the-identity` · theorem — A homomorphism from a connected Lie group is determined by its differential at the identity
- `def-conjugation-and-the-adjoint-representation-of-a-lie-group` · definition — Conjugation and the adjoint representation of a Lie group
- `prop-adjoint-is-a-smooth-lie-group-representation` · proposition — Adjoint is a smooth Lie-group representation
- `def-adjoint-representation-of-a-lie-algebra` · definition — Adjoint representation of a Lie algebra
- `thm-the-differential-of-adjoint-is-ad` · theorem — The differential of Ad is ad
- `prop-adjoint-intertwines-the-exponential-map` · proposition — Adjoint intertwines the exponential map
- `prop-adjoint-exponential-identity` · proposition — Adjoint exponential identity
- `lem-right-trivialized-differential-of-the-lie-group-exponential` · lemma — Right-trivialized differential of the Lie-group exponential
- `def-baker-campbell-hausdorff-series` · definition — Baker–Campbell–Hausdorff series
- `lem-local-convergence-of-the-baker-campbell-hausdorff-series` · lemma — Local convergence of the Baker–Campbell–Hausdorff series
- `thm-baker-campbell-hausdorff` · theorem — Baker–Campbell–Hausdorff theorem
- `cor-the-local-lie-group-law-is-determined-by-the-lie-bracket` · corollary — The local Lie-group law is determined by the Lie bracket
- `cor-commuting-nearby-group-elements-have-commuting-logarithms-under-the-stated-domain-hypotheses` · corollary — Commuting nearby group elements have commuting logarithms under the stated domain hypotheses
- `def-real-and-complex-lie-groups` · definition — Real and complex Lie groups
- `fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism` · false-statement — The exponential map of a Lie group is a group homomorphism
- `fs-the-exponential-map-is-globally-injective-on-every-connected-lie-group` · false-statement — The exponential map is globally injective on every connected Lie group
- `fs-the-exponential-map-is-surjective-on-every-connected-lie-group` · false-statement — The exponential map is surjective on every connected Lie group
- `fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields` · false-statement — Right-invariant fields identify T_eG with the same bracket as left-invariant fields
- `fs-every-continuous-group-homomorphism-is-smooth-by-definition` · false-statement — Every continuous group homomorphism is smooth by definition
- `fs-differential-at-the-identity-determines-a-homomorphism-from-a-disconnected-lie-group` · false-statement — Differential at the identity determines a homomorphism from a disconnected Lie group

### `lie-groups-invariant-fields-and-the-exponential-map-examples` — Lie Groups Invariant Fields and the Exponential Map — Examples (12 item(s))

- `ex-the-additive-and-multiplicative-real-lie-groups` · example — The additive and multiplicative real Lie groups
- `ex-general-and-special-linear-lie-groups` · example — General and special linear Lie groups
- `ex-orthogonal-and-special-orthogonal-lie-groups` · example — Orthogonal and special orthogonal Lie groups
- `ex-unitary-and-special-unitary-lie-groups` · example — Unitary and special unitary Lie groups
- `ex-the-real-symplectic-matrix-group` · example — The real symplectic matrix group
- `ex-the-heisenberg-lie-group-and-algebra` · example — The Heisenberg Lie group and algebra
- `ex-the-affine-group-of-the-line` · example — The affine group of the line
- `ex-the-n-torus-and-its-exponential-lattice` · example — The n-torus and its exponential lattice
- `ex-matrix-exponential-as-the-lie-group-exponential` · example — Matrix exponential as the Lie-group exponential
- `ex-adjoint-and-ad-for-a-matrix-lie-group` · example — Adjoint and ad for a matrix Lie group
- `cex-a-real-invertible-matrix-with-no-real-logarithm` · counterexample — A real invertible matrix with no real logarithm
- `cex-bch-truncation-fails-when-higher-commutators-do-not-vanish` · counterexample — BCH truncation fails when higher commutators do not vanish

### `lie-subgroups-actions-and-homogeneous-spaces` — Lie Subgroups Actions and Homogeneous Spaces (54 item(s))

- `def-lie-subalgebra-and-ideal` · definition — Lie subalgebras and ideals
- `def-immersed-embedded-and-closed-lie-subgroup` · definition — Immersed, embedded, and closed Lie subgroups
- `prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra` · proposition — The Lie algebra of a Lie subgroup is a Lie subalgebra
- `def-left-translated-distribution-associated-to-a-lie-subalgebra` · definition — Left-translated distribution associated to a Lie subalgebra
- `lem-a-lie-subalgebra-distribution-is-involutive` · lemma — A Lie-subalgebra distribution is involutive
- `thm-lie-subgroup-lie-subalgebra-correspondence` · theorem — Lie subgroup–Lie subalgebra correspondence
- `cor-connected-lie-subgroups-with-the-same-lie-algebra-are-equal-as-immersed-subgroups` · corollary — Connected Lie subgroups with the same Lie algebra are equal
- `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup` · proposition — An ideal integrates to a connected immersed normal subgroup
- `lem-no-small-subgroups-in-a-lie-group` · lemma — No small subgroups in a Lie group
- `thm-cartans-closed-subgroup-theorem` · theorem — Cartan closed subgroup theorem
- `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups` · corollary — Discrete subgroups are closed embedded zero-dimensional Lie subgroups
- `thm-continuous-homomorphisms-between-lie-groups-are-smooth` · theorem — Continuous homomorphisms between Lie groups are smooth
- `thm-lie-group-homomorphisms-have-constant-rank` · theorem — Lie group homomorphisms have constant rank
- `thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup` · theorem — Kernels are closed embedded normal Lie subgroups
- `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup` · theorem — Images are immersed Lie subgroups
- `prop-first-isomorphism-factorization-for-lie-group-homomorphisms` · proposition — First-isomorphism factorization for Lie group homomorphisms
- `def-smooth-left-action-of-a-lie-group` · definition — Smooth left actions of Lie groups
- `def-homogeneous-space-of-a-lie-group` · definition — Homogeneous spaces
- `thm-quotient-manifold-by-a-closed-lie-subgroup` · theorem — Quotient manifold by a closed Lie subgroup
- `lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement` · lemma — The smooth structure on G/H is independent of the local complement
- `prop-tangent-space-of-a-homogeneous-quotient` · proposition — Tangent space of a homogeneous quotient
- `prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h` · proposition — The isotropy action on G/H is induced by Ad modulo h
- `thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group` · theorem — Quotient by a closed normal subgroup is a Lie group
- `def-principal-h-bundle-g-to-g-mod-h` · definition — The principal bundle G→G/H
- `thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle` · theorem — G→G/H is a smooth principal H-bundle
- `def-associated-bundle-to-a-principal-bundle-and-representation` · definition — Associated bundles
- `thm-associated-vector-bundle-is-well-defined` · theorem — Associated vector bundles are well-defined
- `def-fundamental-vector-field-of-a-left-action` · definition — Fundamental vector fields for a left action
- `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism` · theorem — Fundamental vector fields form a Lie-algebra homomorphism
- `def-orbit-stabilizer-and-orbit-map-of-a-smooth-action` · definition — Orbits, stabilizers, and orbit maps
- `thm-stabilizers-are-closed-embedded-lie-subgroups` · theorem — Stabilizers are closed embedded Lie subgroups
- `prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra` · proposition — Kernel of the infinitesimal orbit map
- `thm-every-orbit-is-an-injectively-immersed-homogeneous-space` · theorem — Every orbit is an injectively immersed homogeneous space
- `cor-transitive-smooth-actions-identify-m-with-g-mod-h` · corollary — Transitive actions identify M with G/H
- `def-free-and-proper-lie-group-actions` · definition — Free and proper Lie-group actions
- `prop-compact-lie-group-actions-are-proper` · proposition — Compact Lie-group actions are proper
- `lem-local-slice-for-a-free-proper-action` · lemma — Local slice for a free proper action
- `thm-free-proper-action-quotient-manifold` · theorem — Free proper action quotient manifold
- `thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle` · theorem — A free proper action makes M→M/G a principal bundle
- `prop-tangent-space-of-a-free-proper-quotient` · proposition — Tangent space of a free proper quotient
- `def-equivariant-map-and-equivariant-vector-bundle` · definition — Equivariant maps and equivariant vector bundles
- `prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients` · proposition — Equivariant maps descend on free proper quotients
- `def-covering-homomorphism-of-lie-groups` · definition — Covering homomorphisms of Lie groups
- `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure` · lemma — Connected covers of smooth manifolds have a canonical smooth structure
- `thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure` · theorem — Connected covers of connected Lie groups lift uniquely to Lie groups
- `thm-universal-covering-lie-group` · theorem — Universal covering Lie group
- `cor-fundamental-group-of-a-connected-lie-group-is-abelian` · corollary — The fundamental group of a connected Lie group is abelian
- `fs-every-lie-subgroup-is-an-embedded-closed-subset` · false-statement — Not every Lie subgroup is embedded and closed
- `fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup` · false-statement — A Lie subalgebra need not integrate to a closed subgroup
- `lem-irrational-torus-flow-is-free-with-dense-orbits` · lemma — The irrational torus flow is free with dense orbits
- `fs-the-image-of-a-lie-group-homomorphism-is-always-embedded` · false-statement — A homomorphism image need not be embedded
- `fs-g-mod-h-is-a-quotient-lie-group-for-every-closed-subgroup-h` · false-statement — G/H need not be a quotient Lie group
- `fs-a-free-action-always-has-a-manifold-orbit-space` · false-statement — A free action need not have a manifold quotient
- `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions` · false-statement — The plus exponential convention is not a homomorphism for left actions

### `lie-subgroups-actions-and-homogeneous-spaces-examples` — Lie Subgroups Actions and Homogeneous Spaces — Examples (12 item(s))

- `ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus` · example — An irrational line as a dense immersed Lie subgroup of a torus
- `ex-special-linear-as-a-closed-lie-subgroup-of-general-linear` · example — SL(n) as a closed Lie subgroup of GL(n)
- `ex-the-kernel-and-image-of-the-determinant-homomorphism` · example — Kernel and image of determinant
- `ex-spheres-as-so-n-plus-one-mod-so-n` · example — Spheres as SO(n+1)/SO(n)
- `ex-real-and-complex-projective-spaces-as-homogeneous-spaces` · example — Projective spaces as homogeneous spaces
- `ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces` · example — Grassmannians and flag manifolds as homogeneous spaces
- `ex-su-two-to-so-three-as-a-covering-homomorphism` · example — SU(2)→SO(3) as a covering homomorphism
- `ex-the-mobius-line-bundle-as-an-associated-bundle` · example — The Möbius line bundle as an associated bundle
- `ex-the-free-proper-integer-translation-action-on-the-line` · example — Integer translations on the line
- `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper` · counterexample — A free irrational torus action that is not proper
- `cex-a-proper-action-with-stabilizers-whose-quotient-is-not-a-principal-bundle` · counterexample — A proper nonfree action is not a principal bundle
- `ex-the-tangent-bundle-of-g-mod-h-as-an-associated-bundle` · example — The tangent bundle of G/H as an associated bundle

### `lie-algebra-representations-enveloping-algebras-and-pbw` — Lie Algebra Representations Enveloping Algebras and Pbw (49 item(s))

- `def-lie-algebra-over-a-field` · definition — Lie algebras over a field
- `def-lie-subalgebra-ideal-and-center` · definition — Lie subalgebras, ideals, and center
- `lem-lie-algebra-quotient-bracket-is-well-defined` · lemma — The quotient Lie-algebra bracket is well-defined
- `def-quotient-lie-algebra` · definition — Quotient Lie algebras
- `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras` · definition — Homomorphisms of possibly infinite-dimensional Lie algebras
- `prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras` · proposition — Kernels, images, and the first isomorphism theorem for Lie algebras
- `def-direct-product-and-direct-sum-of-lie-algebras` · definition — Direct products and direct sums of Lie algebras
- `def-derivation-of-a-lie-algebra` · definition — Derivations of Lie algebras
- `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal` · proposition — Derivations form a Lie algebra and inner derivations an ideal
- `def-semidirect-product-of-lie-algebras` · definition — Semidirect products of Lie algebras
- `lem-semidirect-product-bracket-satisfies-jacobi` · lemma — The semidirect-product bracket satisfies Jacobi
- `def-representation-of-a-lie-algebra` · definition — Representations of Lie algebras
- `def-subrepresentation-quotient-representation-and-intertwiner` · definition — Subrepresentations, quotient representations, and intertwiners
- `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation` · definition — Irreducible, completely reducible, and faithful representations
- `prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity` · proposition — Representation kernels are ideals
- `prop-direct-sum-dual-hom-and-tensor-representations` · proposition — Direct-sum, dual, Hom, and tensor representations
- `def-symmetric-and-exterior-powers-over-an-arbitrary-field` · definition — Symmetric and exterior powers over an arbitrary field
- `prop-symmetric-and-exterior-powers-are-lie-algebra-representations` · proposition — Symmetric and exterior powers are representations
- `prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping` · proposition — Lie representations as actions before enveloping
- `def-tensor-algebra-of-a-vector-space` · definition — Tensor algebra of a vector space
- `thm-universal-property-of-the-tensor-algebra` · theorem — Universal property of the tensor algebra
- `def-symmetric-algebra-of-a-vector-space` · definition — Symmetric algebra of a vector space
- `thm-universal-property-of-the-symmetric-algebra` · theorem — Universal property of the symmetric algebra
- `def-universal-enveloping-algebra` · definition — Universal enveloping algebra
- `lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra` · lemma — The canonical map to U(g) is a Lie homomorphism
- `thm-universal-property-of-the-universal-enveloping-algebra` · theorem — Universal property of the enveloping algebra
- `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra` · theorem — Lie representations are U(g)-modules
- `prop-functoriality-of-the-universal-enveloping-algebra` · proposition — Functoriality of the enveloping algebra
- `def-pbw-filtration-on-the-universal-enveloping-algebra` · definition — PBW filtration on the enveloping algebra
- `def-associated-graded-algebra-of-a-filtered-algebra` · definition — Associated graded algebra of a filtered algebra
- `prop-the-pbw-filtration-is-multiplicative-and-its-associated-graded-algebra-is-commutative` · proposition — The PBW filtration is multiplicative and has commutative associated graded
- `def-pbw-symbol-map-from-the-symmetric-algebra` · definition — PBW symbol map from the symmetric algebra
- `lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis` · lemma — Ordered monomial basis of a symmetric algebra
- `lem-pbw-spanning-by-ordered-monomials` · lemma — PBW spanning by ordered monomials
- `lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra` · lemma — PBW linear independence via the ordered-monomial model
- `thm-poincare-birkhoff-witt` · theorem — Poincaré–Birkhoff–Witt theorem
- `cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective` · corollary — The canonical map g→U(g) is injective
- `cor-the-enveloping-algebra-has-no-hidden-linear-relations-in-degree-one` · corollary — No hidden linear relations in degree one
- `thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero` · theorem — PBW symmetrization in characteristic zero
- `prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra` · proposition — The enveloping algebra of an abelian Lie algebra is symmetric
- `prop-enveloping-algebra-of-a-direct-sum-is-the-tensor-product-of-enveloping-algebras` · proposition — Enveloping algebra of a direct sum
- `cor-schurs-lemma-for-irreducible-lie-algebra-representations` · corollary — Schur’s lemma for irreducible Lie-algebra representations
- `rem-hopf-algebra-structure-on-the-enveloping-algebra` · remark — Hopf-algebra structure on U(g)
- `fs-every-lie-subalgebra-is-an-ideal` · false-statement — Not every Lie subalgebra is an ideal
- `fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign` · false-statement — The dual action needs a minus sign
- `fs-the-universal-enveloping-algebra-is-commutative` · false-statement — An enveloping algebra need not be commutative
- `fs-the-canonical-map-g-to-u-g-is-injective-by-the-definition-of-a-quotient` · false-statement — Injectivity is not part of the enveloping quotient definition
- `fs-pbw-symmetrization-is-an-algebra-isomorphism-for-a-nonabelian-lie-algebra` · false-statement — PBW symmetrization is generally not multiplicative
- `fs-every-representation-of-a-lie-algebra-is-completely-reducible` · false-statement — Lie-algebra representations need not be completely reducible

### `lie-algebra-representations-enveloping-algebras-and-pbw-examples` — Lie Algebra Representations Enveloping Algebras and Pbw — Examples (12 item(s))

- `ex-adjoint-and-trivial-lie-algebra-representations` · example — Adjoint and trivial representations
- `ex-standard-representations-of-classical-matrix-lie-algebras` · example — Standard representations of classical matrix Lie algebras
- `ex-a-semidirect-product-lie-algebra-from-a-linear-action` · example — A semidirect-product Lie algebra from a linear action
- `ex-the-affine-lie-algebra-as-a-semidirect-product` · example — The affine Lie algebra as a semidirect product
- `ex-tensor-dual-and-hom-representation-formulas` · example — Tensor, dual, and Hom representation formulas
- `ex-u-of-a-one-dimensional-abelian-lie-algebra-is-a-polynomial-algebra` · example — The enveloping algebra of a one-dimensional abelian Lie algebra
- `ex-pbw-basis-for-the-heisenberg-lie-algebra` · example — PBW basis for the Heisenberg Lie algebra
- `ex-pbw-reordering-in-sl-two` · example — PBW reordering in sl_2
- `ex-a-nonsplit-two-dimensional-representation-of-a-solvable-lie-algebra` · example — A nonsplit two-dimensional representation
- `cex-symmetrization-does-not-preserve-products-in-sl-two` · counterexample — Symmetrization does not preserve products in sl_2
- `cex-a-subspace-stable-under-one-generator-but-not-a-subrepresentation` · counterexample — Stability under one generator is not enough
- `ex-the-casimir-element-in-u-sl-two` · example — The Casimir element in U(sl_2)

### `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` — Symplectic Manifolds Moser Stability and Darboux Weinstein Theory (47 item(s))

- `def-symplectic-vector-space` · definition — Symplectic vector space
- `prop-symplectic-vector-spaces-have-even-dimension` · proposition — Symplectic vector spaces have even dimension
- `def-symplectic-orthogonal-complement` · definition — Symplectic orthogonal complement
- `prop-symplectic-double-orthogonal-and-dimension-identities` · proposition — Symplectic double orthogonal and dimension identities
- `def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces` · definition — Isotropic coisotropic symplectic and lagrangian subspaces
- `thm-equivalent-characterizations-of-lagrangian-subspaces` · theorem — Equivalent characterizations of lagrangian subspaces
- `prop-symplectic-reduction-of-a-coisotropic-vector-subspace` · proposition — Symplectic reduction of a coisotropic vector subspace
- `prop-graphs-of-linear-maps-and-lagrangian-relations` · proposition — Graphs of linear maps and lagrangian relations
- `def-symplectic-form-and-symplectic-manifold` · definition — Symplectic form and symplectic manifold
- `thm-nondegeneracy-is-equivalent-to-a-nonvanishing-top-wedge` · theorem — Nondegeneracy is equivalent to a nonvanishing top wedge
- `cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form` · corollary — Symplectic manifolds have a canonical orientation and volume form
- `def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding` · definition — Symplectomorphism local symplectomorphism and symplectic embedding
- `prop-products-and-opposites-of-symplectic-manifolds` · proposition — Products and opposites of symplectic manifolds
- `def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds` · definition — Isotropic coisotropic symplectic and lagrangian submanifolds
- `prop-lagrangian-submanifolds-have-half-dimension` · proposition — Lagrangian submanifolds have half dimension
- `def-tautological-one-form-on-a-cotangent-bundle` · definition — Tautological one form on a cotangent bundle
- `lem-the-tautological-one-form-is-intrinsic-and-smooth` · lemma — The tautological one form is intrinsic and smooth
- `thm-the-canonical-cotangent-two-form-is-symplectic` · theorem — The canonical cotangent two form is symplectic
- `prop-cotangent-lifts-are-symplectomorphisms` · proposition — Cotangent lifts are symplectomorphisms
- `prop-graph-of-a-one-form-is-lagrangian-iff-the-one-form-is-closed` · proposition — Graph of a one form is lagrangian iff the one form is closed
- `def-compatible-complex-structure-on-a-symplectic-vector-space` · definition — Compatible complex structure on a symplectic vector space
- `thm-compatible-complex-structures-exist-on-symplectic-vector-spaces` · theorem — Compatible complex structures exist on symplectic vector spaces
- `lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots` · lemma — Positive definite bundle endomorphisms have smooth positive square roots
- `thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure` · theorem — Every symplectic manifold admits a compatible almost complex structure
- `def-compatible-almost-kahler-metric` · definition — Compatible almost kahler metric
- `rem-compatible-almost-complex-structures-and-kahler-geometry` · remark — Compatible almost complex structures and kahler geometry
- `lem-moser-pullback-differentiation-equation` · lemma — Moser pullback differentiation equation
- `lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold` · lemma — Smooth parametric primitives for a smooth exact family on a compact manifold
- `thm-moser-stability-theorem` · theorem — Moser stability theorem
- `thm-compact-support-moser-stability-on-a-noncompact-manifold` · theorem — Compact support moser stability on a noncompact manifold
- `lem-relative-poincare-primitive-near-a-submanifold` · lemma — Relative poincare primitive near a submanifold
- `thm-relative-moser-theorem` · theorem — Relative moser theorem
- `thm-darboux-theorem` · theorem — Darboux theorem
- `cor-symplectic-manifolds-have-no-local-invariants-beyond-dimension` · corollary — Symplectic manifolds have no local invariants beyond dimension
- `def-symplectic-normal-bundle-of-a-symplectic-submanifold` · definition — Symplectic normal bundle of a symplectic submanifold
- `thm-symplectic-neighborhood-theorem` · theorem — Symplectic neighborhood theorem
- `def-canonical-symplectic-model-near-the-zero-section-of-t-star-l` · definition — Canonical symplectic model near the zero section of t star l
- `thm-weinstein-lagrangian-neighborhood-theorem` · theorem — Weinstein lagrangian neighborhood theorem
- `prop-lagrangian-neighborhood-germ-is-not-canonical` · proposition — Lagrangian neighborhood germ is not canonical
- `prop-characteristic-distribution-of-a-coisotropic-submanifold-is-involutive` · proposition — Characteristic distribution of a coisotropic submanifold is involutive
- `thm-local-normal-form-near-a-coisotropic-submanifold` · theorem — Local normal form near a coisotropic submanifold
- `fs-every-nondegenerate-two-form-is-symplectic` · false-statement — Every nondegenerate two form is symplectic
- `fs-symplectic-manifolds-can-have-odd-dimension` · false-statement — Symplectic manifolds can have odd dimension
- `fs-every-half-dimensional-submanifold-is-lagrangian` · false-statement — Every half dimensional submanifold is lagrangian
- `fs-the-canonical-cotangent-symplectic-form-is-d-lambda-under-the-library-convention` · false-statement — The canonical cotangent symplectic form is d lambda under the library convention
- `fs-cohomologous-symplectic-forms-on-a-noncompact-manifold-are-always-isotopic` · false-statement — Cohomologous symplectic forms on a noncompact manifold are always isotopic
- `fs-darboux-theorem-makes-all-symplectic-manifolds-globally-symplectomorphic` · false-statement — Darboux theorem makes all symplectic manifolds globally symplectomorphic

### `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` — Symplectic Manifolds Moser Stability and Darboux Weinstein Theory — Examples (12 item(s))

- `ex-the-standard-symplectic-vector-space` · example — The standard symplectic vector space
- `ex-isotropic-coisotropic-and-lagrangian-coordinate-subspaces` · example — Isotropic coisotropic and lagrangian coordinate subspaces
- `ex-the-cotangent-bundle-of-a-circle-as-a-symplectic-cylinder` · example — The cotangent bundle of a circle as a symplectic cylinder
- `ex-graphs-of-exact-and-closed-one-forms-as-lagrangians` · example — Graphs of exact and closed one forms as lagrangians
- `ex-product-and-opposite-symplectic-manifolds` · example — Product and opposite symplectic manifolds
- `ex-a-compatible-complex-structure-on-standard-symplectic-space` · example — A compatible complex structure on standard symplectic space
- `ex-moser-isotopy-for-area-forms-on-a-compact-surface` · example — Moser isotopy for area forms on a compact surface
- `ex-darboux-coordinates-for-a-nonconstant-area-form` · example — Darboux coordinates for a nonconstant area form
- `ex-the-zero-section-and-cotangent-fibres-as-lagrangians` · example — The zero section and cotangent fibres as lagrangians
- `cex-a-nondegenerate-nonclosed-two-form-in-dimension-at-least-four` · counterexample — A nondegenerate nonclosed two form in dimension at least four
- `cex-cohomology-class-obstructs-a-global-symplectomorphism` · counterexample — Cohomology class obstructs a global symplectomorphism
- `cex-a-compatible-almost-complex-structure-that-is-not-integrable` · counterexample — A compatible almost complex structure that is not integrable

### `hamiltonian-mechanics-and-completely-integrable-systems` — Hamiltonian Mechanics and Completely Integrable Systems (51 item(s))

- `def-symplectic-vector-field` · definition — Symplectic vector field
- `prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed` · proposition — A vector field is symplectic iff iota x omega is closed
- `def-hamiltonian-vector-field-and-hamiltonian-function` · definition — Hamiltonian vector field and hamiltonian function
- `thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions` · theorem — Hamiltonian vector fields exist uniquely for smooth functions
- `prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian` · proposition — Hamiltonian vector fields are symplectic and symplectic fields are locally hamiltonian
- `prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function` · proposition — Hamiltonians for a fixed vector field differ by a locally constant function
- `thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology` · theorem — Symplectic vector fields modulo hamiltonian vector fields are first de rham cohomology
- `thm-hamiltonian-flows-preserve-the-symplectic-form` · theorem — Hamiltonian flows preserve the symplectic form
- `prop-a-hamiltonian-is-conserved-along-its-own-flow` · proposition — A hamiltonian is conserved along its own flow
- `def-poisson-bracket-on-a-symplectic-manifold` · definition — Poisson bracket on a symplectic manifold
- `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry` · proposition — Poisson bracket is bilinear skew and a derivation in each entry
- `thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism` · theorem — Hamiltonian vector field map is a lie antihomomorphism
- `thm-poisson-bracket-satisfies-the-jacobi-identity` · theorem — Poisson bracket satisfies the jacobi identity
- `thm-smooth-functions-form-a-poisson-algebra` · theorem — Smooth functions form a poisson algebra
- `prop-observable-evolution-equation` · proposition — Observable evolution equation
- `def-first-integral-and-poisson-commuting-functions` · definition — First integral and poisson commuting functions
- `prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute` · proposition — F is a first integral of h iff f and h poisson commute
- `thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket` · theorem — Hamiltonian flows commute iff their hamiltonians poisson commute up to locally constant bracket
- `thm-hamilton-equations-in-canonical-cotangent-coordinates` · theorem — Hamilton equations in canonical cotangent coordinates
- `prop-coordinate-formula-for-the-poisson-bracket` · proposition — Coordinate formula for the poisson bracket
- `prop-cotangent-lift-of-a-vector-field-is-hamiltonian` · proposition — Cotangent lift of a vector field is hamiltonian
- `def-time-dependent-hamiltonian-vector-field-and-flow` · definition — Time dependent hamiltonian vector field and flow
- `prop-time-dependent-hamiltonian-evolution-is-symplectic` · proposition — Time dependent hamiltonian evolution is symplectic
- `def-canonical-transformation` · definition — Canonical transformation
- `thm-liouville-volume-preservation` · theorem — Liouville volume preservation
- `cor-hamiltonian-flow-has-zero-divergence-with-respect-to-symplectic-volume` · corollary — Hamiltonian flow has zero divergence with respect to symplectic volume
- `def-liouville-vector-field-on-an-exact-symplectic-manifold` · definition — Liouville vector field on an exact symplectic manifold
- `prop-canonical-liouville-vector-field-on-a-cotangent-bundle-is-radial-in-momenta` · proposition — Canonical liouville vector field on a cotangent bundle is radial in momenta
- `cor-poincare-recurrence-for-finite-volume-hamiltonian-invariant-regions` · corollary — Poincare recurrence for finite volume hamiltonian invariant regions
- `def-lagrangian-action-functional-on-curves` · definition — Lagrangian action functional on curves
- `thm-euler-lagrange-equations` · theorem — Euler lagrange equations
- `def-fibre-derivative-and-legendre-transform-of-a-lagrangian` · definition — Fibre derivative and legendre transform of a lagrangian
- `def-regular-and-hyperregular-lagrangian` · definition — Regular and hyperregular lagrangian
- `def-energy-and-hamiltonian-of-a-hyperregular-lagrangian` · definition — Energy and hamiltonian of a hyperregular lagrangian
- `thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians` · theorem — Equivalence of euler lagrange and hamilton equations for hyperregular lagrangians
- `prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian` · proposition — Natural mechanical lagrangian gives kinetic plus potential hamiltonian
- `def-completely-integrable-hamiltonian-system` · definition — Completely integrable hamiltonian system
- `prop-regular-common-level-sets-are-lagrangian-submanifolds` · proposition — Regular common level sets are lagrangian submanifolds
- `prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action` · proposition — Commuting hamiltonian vector fields integrate to a local r n action
- `lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice` · lemma — Stabilizer of the r n action on a compact connected regular fibre is a full lattice
- `thm-compact-connected-regular-fibres-are-tori` · theorem — Compact connected regular fibres are tori
- `def-action-and-angle-coordinates` · definition — Action and angle coordinates
- `thm-liouville-arnold-action-angle-theorem` · theorem — Liouville arnold action angle theorem
- `cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori` · corollary — Motion of a completely integrable hamiltonian is linear on invariant tori
- `prop-period-lattice-monodromy-obstructs-global-action-angle-coordinates` · proposition — Period lattice monodromy obstructs global action angle coordinates
- `fs-every-symplectic-vector-field-has-a-global-hamiltonian-function` · false-statement — Every symplectic vector field has a global hamiltonian function
- `fs-hamiltonian-functions-for-one-vector-field-differ-by-one-global-constant-on-a-disconnected-manifold` · false-statement — Hamiltonian functions for one vector field differ by one global constant on a disconnected manifold
- `fs-h-to-x-h-is-a-lie-homomorphism-under-the-library-poisson-convention` · false-statement — H to x h is a lie homomorphism under the library poisson convention
- `fs-hamiltonian-flows-are-complete-on-every-symplectic-manifold` · false-statement — Hamiltonian flows are complete on every symplectic manifold
- `fs-n-independent-first-integrals-automatically-form-a-completely-integrable-system` · false-statement — N independent first integrals automatically form a completely integrable system
- `fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold` · false-statement — Liouville arnold gives global action angle coordinates on the entire manifold

### `hamiltonian-mechanics-and-completely-integrable-systems-examples` — Hamiltonian Mechanics and Completely Integrable Systems — Examples (12 item(s))

- `ex-free-particle-hamiltonian-flow` · example — Free particle hamiltonian flow
- `ex-harmonic-oscillator-and-elliptic-phase-curves` · example — Harmonic oscillator and elliptic phase curves
- `ex-simple-pendulum-phase-portrait` · example — Simple pendulum phase portrait
- `ex-geodesic-flow-as-a-hamiltonian-flow-on-the-cotangent-bundle` · example — Geodesic flow as a hamiltonian flow on the cotangent bundle
- `ex-angular-momentum-as-a-cotangent-lift-hamiltonian` · example — Angular momentum as a cotangent lift hamiltonian
- `ex-poisson-brackets-in-canonical-coordinates` · example — Poisson brackets in canonical coordinates
- `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` · example — A symplectic nonhamiltonian vector field on the two torus
- `ex-legendre-transform-of-a-natural-mechanical-lagrangian` · example — Legendre transform of a natural mechanical lagrangian
- `ex-action-angle-coordinates-for-the-harmonic-oscillator` · example — Action angle coordinates for the harmonic oscillator
- `ex-spherical-pendulum-monodromy-obstructs-global-action-angle-coordinates` · example — Spherical pendulum monodromy obstructs global action angle coordinates
- `cex-a-singular-common-level-need-not-be-a-torus` · counterexample — A singular common level need not be a torus
- `cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates` · counterexample — Poisson commuting functions with dependent differentials do not give liouville arnold coordinates

## Your seams

Your pages depend on another group's:

- `lie-subgroups-actions-and-homogeneous-spaces-examples` requires `the-ergodic-theorems-of-von-neumann-and-birkhoff` (group c, batch 1)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-747b49d39fc8b4b0d478a389 · `thm-liouville-arnold-action-angle-theorem`** (from group a, gap-a-reader-closes) — Steps 2.1 and 5.1 extend the local sheets of the period-lattice union Λ = a^{-1}(σ(B)) to global smooth one-forms β_1,…,β_n after shrinking B, and step 3.1 derives full local lattice generation from a countable counterexample sequence; both are asserted at the level of ‘the corresponding local sheets extend’ and ‘these continued periods generate the full lattice on every sufficiently nearby fibre’. The hypothesis set is explicit and the AC_ω use in step 3.1 is declared, but the sheet/identification bookkeeping is the thinnest passage in the group and should be re-derived in adjudication.
- **s8a-e672f83e07dee976eb3716d0 · `thm-baker-campbell-hausdorff`** (from group a, gap-a-reader-closes) — Step 5.1 identifies the integrated series with Dynkin’s homogeneous polynomials by counting blocks of P(t) = e^{t ad_X}e^{t ad_Y} − I; the claim that every other possible final block has at least two terminal equal letters and hence a vanishing right-nested commutator is stated without the block enumeration, and step 3.1 substitutes the formal series into an operator argument via ‘absolute operator convergence permits substitution’. A reader must verify the term-by-term identification against def-baker-campbell-hausdorff-series.
- **s8a-c70ecfb57f194b976c31e8dd · `lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra`** (from group a, gap-a-reader-closes) — The confluence/termination argument in steps 1.1–3.1 is compressed: the critical-pair comparison for zyx with z>y>x is quoted as the normal form of [[y,x],z]+[y,[z,x]]+[[z,y],x] without displaying the coefficient comparison, and the passage from N(xN(q))=N(xq) (context compatibility) to [L_x,L_y]=L_{[x,y]} is asserted after ‘well-founded induction on the decreasing measure’. The Jacobi cancellation does check out, but the context-compatibility and well-definedness bookkeeping should be re-verified.
- **s8a-a4ca4e6af8b135da278c1c40 · `lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold`** (from group a, gap-a-reader-closes) — Step 3.1’s Čech descent ends with the claim that the surviving cocycle lies in the image of the preceding Čech coboundary ‘because α is globally exact, comparison with any global primitive shows that this cocycle lies in the image’; the comparison argument and the choice of a linear right inverse on the image are stated rather than computed. A reader closes this quickly, but it is the one place where global exactness is used beyond the pointwise constructions.
- **s8a-df275efe65d3877e5cc869ed · `thm-first-bianchi-identity`** (from group a, presentation) — The AC_ω declaration points to prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, whose own statement, facts and immediate dependencies carry no choice assumption; the assumption in fact enters through the tangent-bundle smooth-structure theorem two levels down. The propagation is sound (verified), but an adjudicator objecting to the choice attribution must follow the chain rather than the named interface, and the same shape recurs in thm-algebraic-symmetries…, def-sectional-curvature and the Ricci/scalar consumers.
- **s8a-e35b18a6152a3a4b0d99c69b · `ex-su-two-to-so-three-as-a-covering-homomorphism`** (from group a, presentation) — Step 3.1 asserts surjectivity of ρ by saying that substituting q = cos(θ/2) + u sin(θ/2) into the step-1.3 formula gives Rodrigues’ formula; the substitution computation itself is not displayed. The finite choices (axis, basis, q_0 above a point) are correctly counted, so this is wording/verification depth only.

Append one owning-group disposition per warning to `research/phase-2-next-21-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper` | `lie-subgroups-actions-and-homogeneous-spaces-examples` | gpt-5.6-terra | `466fce238c71fad4a0db461bed7f5ef67146ab12b81bbf267e4386c0f974ac9e` |
| `cex-bch-truncation-fails-when-higher-commutators-do-not-vanish` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `7ad0908750df59c98f6875f8be51f67f2242b2d611b6a5f8eb83e43859628cde` |
| `cex-poisson-commuting-functions-with-dependent-differentials-do-not-give-liouville-arnold-coordinates` | `hamiltonian-mechanics-and-completely-integrable-systems-examples` | gpt-5.6-terra | `e871955ef5e97e69d4398a9145a981536bdbac5c22df939351d93bc03a72a424` |
| `cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending` | `riemann-curvature-and-riemannian-submanifolds-examples` | gpt-5.6-terra | `388f4c6761f79c42e4c3d42fdb5686a0d48b3ec2a1bc0b33345f217544bbae5b` |
| `cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `1bb8a4dd738ccc22a2f0f4222d5b03b8633ebc6b9449392e032b5bba649fabc1` |
| `def-action-and-angle-coordinates` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `84e0aca03acfce33174bc9589327d348019490785b9995273cf8246a40d6b47f` |
| `def-conjugation-and-the-adjoint-representation-of-a-lie-group` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `118937aa0f87a56d2fe88957f8082c5d6dbdcd61166214ec619ff877de1ab1da` |
| `def-fibre-derivative-and-legendre-transform-of-a-lagrangian` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `7464e804c7463215e3d226ca8189fe03ea1e8ef2d7bc50402de3aaa810d573db` |
| `def-fundamental-vector-field-of-a-left-action` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `1a7f46595f1ad7afa7add8893268cb43a08ad82af56889e9c54fed3716fe8590` |
| `def-local-logarithm-on-a-lie-group` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `6070348d7b91a3a0946bd81f40835c1870bb62bbd6f7205a29237fd44342edaf` |
| `def-principal-h-bundle-g-to-g-mod-h` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `ac780362072d4397ccc5b31ebd3328d40b8e009efe2eada53e603b4cf147aa4e` |
| `def-real-and-complex-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `de052719513183f2701064e17c691c3209e6343b4f58ac8fab364b76a1a6ad5e` |
| `def-sectional-curvature` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `f38d90aa02e9b3bd8f6d19e323c3a4f0e7e66ea663c7852e2470c028d2bfe100` |
| `def-semidirect-product-of-lie-algebras` | `lie-algebra-representations-enveloping-algebras-and-pbw` | gpt-5.6-terra | `5f91d5bcffb5dc1396efe414eeae8dcf31aecf8b11710a0a261af7586638c1bd` |
| `def-tautological-one-form-on-a-cotangent-bundle` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `72b33631345f389ea7f88163f195a14d07ae0f48f9ba71c3a1308261612f5339` |
| `def-time-dependent-hamiltonian-vector-field-and-flow` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `02a3372641e3eab9a709a7d7d6ed60b75dcb5c46a7944b1460aa649efbe0e4b9` |
| `ex-a-great-sphere-is-totally-geodesic` | `riemann-curvature-and-riemannian-submanifolds-examples` | gpt-5.6-terra | `8ca33cc7ac45ce90369ef0e2de42dc117da847fc4337615b91c91b20d31d95ed` |
| `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` | `hamiltonian-mechanics-and-completely-integrable-systems-examples` | gpt-5.6-terra | `beba261284166eb88ee3d2381139eb08cc263eafac9299d989e3059f04998642` |
| `ex-darboux-coordinates-for-a-nonconstant-area-form` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | gpt-5.6-terra | `2d579be737c6d029d24f0ea4b8b26880bdeb16361a3006b507cde67d847c18a6` |
| `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `52200c6302b48c9c9c58f2e2df76c664825378535902bbda97c185fa31aa52dc` |
| `ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces` | `lie-subgroups-actions-and-homogeneous-spaces-examples` | gpt-5.6-terra | `a2330753244d9b6cc22bd727d9bc9e6e7971805d160d1eb2452da5e302ac4f86` |
| `ex-isotropic-coisotropic-and-lagrangian-coordinate-subspaces` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | gpt-5.6-terra | `a41d40cc681f128e767bb33229d2298d812b7f1408551d834c0c5f45e2238bed` |
| `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `2936a979b37e62e83368168d106949168fa5a11b6aea68067e53bf89573141b1` |
| `ex-standard-representations-of-classical-matrix-lie-algebras` | `lie-algebra-representations-enveloping-algebras-and-pbw-examples` | gpt-5.6-terra | `9dc408f6bc0373a084b0e88dabd5c00680589ba6eea910d226a6da508ed51c30` |
| `ex-the-additive-and-multiplicative-real-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `abf6adde39d2a7e1257bf0f18dc436f501c68233f826749c7a991372b95cd046` |
| `ex-the-affine-group-of-the-line` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `e3d6c03c5907cdf3df0b21cc133b5fea0654cf9dc111c4f06f79e7543f320753` |
| `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic` | `riemann-curvature-and-riemannian-submanifolds-examples` | gpt-5.6-terra | `0b616d797f063fd577b6a0afc684308c5d0001daa3f60d932e6a40f515754a38` |
| `ex-the-cotangent-bundle-of-a-circle-as-a-symplectic-cylinder` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | gpt-5.6-terra | `b133da7ffa9cccbb558abb18ae584176a7134f6632be46555872845b0110e943` |
| `ex-the-heisenberg-lie-group-and-algebra` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `b043e3743d7a5ccac7b4f073d84f0ce2c5ecbb9fcb6f84f12fe71f0c5244707d` |
| `ex-the-kernel-and-image-of-the-determinant-homomorphism` | `lie-subgroups-actions-and-homogeneous-spaces-examples` | gpt-5.6-terra | `01101f8d7f5beb2a6158cd74994540ee5be68bdd2cc187ade040edc0ef56f1f7` |
| `ex-the-n-torus-and-its-exponential-lattice` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `9f25ff7134805aa63f038599ab3838571c21b988c12894bda7fe26691ff6b347` |
| `ex-the-real-symplectic-matrix-group` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `57e24ce636494159a5911a57fadd9b5930d76bb28ba9e7660392431ce140aa65` |
| `ex-the-round-sphere-has-positive-constant-sectional-curvature` | `riemann-curvature-and-riemannian-submanifolds-examples` | gpt-5.6-terra | `cce70b10f94371ef350633262f275cb4e6dbe921dc6d92929a733be0ad31d6d1` |
| `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | gpt-5.6-terra | `13282ac36d6d401c257d0784130ec3a1a87e0b0dca2199b6cfc807f10f4727ee` |
| `fs-a-free-action-always-has-a-manifold-orbit-space` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `a91a77f14bf48a30dee8d2e436d6ff03aff1d5c1b8dbb2777e30bd531c894b2b` |
| `fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `e4e0371bee5291dcb1ee3b15d6f979e9cc35386dff8e0dadac8e613fa1afb7c4` |
| `fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `f9b21353706425d866dc672b3ade60233a88fcf271693170807009b7fcafc626` |
| `fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `88a80adea45550670e00c2c29a7e4fdd64fe3dc9fa72d41032ecd8cb79542af4` |
| `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `ed0bd2c0483635ff0e5eed248fef9e28adc635f186c1f1e368966487bef761d3` |
| `fs-the-exponential-map-is-surjective-on-every-connected-lie-group` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `0c8dd8bb4f7ad586255e538f409d678c74006b8eba1f0da1a536b54fe809e9ae` |
| `fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `39da66ca6ddf9a10baa41efc6ed92d6f79ea6bc663b2659dc7b68637e1775f07` |
| `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `6e3815f9c3891efe715abb98c7a2dc227822a2de834ef8d1caeab81837af20ad` |
| `lem-moser-pullback-differentiation-equation` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `133b8cd193323258940cb096bb0e09445992b9b04bc8027638576a1c20c519c8` |
| `lem-smooth-parametric-primitives-for-a-smooth-exact-family-on-a-compact-manifold` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `ea51cd1b7c710e340fd5a2f05f1f01d2982bbdb5d65393f120f4cfea3c42a977` |
| `lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `e053e848a018c59573757e8c2fb7c8722b1535382d6f158e9b5badab76e1e812` |
| `lem-the-tautological-one-form-is-intrinsic-and-smooth` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `69600eed508d6312495342ff1c05809e11bfdf5bd2c8e432c85086cb6c48bd04` |
| `prop-adjoint-exponential-identity` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `4e078762fe4414e0fc8ef6779fef630a2aab63263908af1245b5a73bb654349b` |
| `prop-adjoint-is-a-smooth-lie-group-representation` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `304948366096d4e3cf20e85236c3b3d96781e8e5329bf9e225aa1775580f712d` |
| `prop-commuting-lie-algebra-elements-have-multiplicative-exponentials` | `lie-groups-invariant-fields-and-the-exponential-map` | gpt-5.6-terra | `7da0bf27cf79935e63fb20f7e870a829f08ba0c0409333c5f3e83e8a493344f9` |
| `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `2877a74f59c2a1f07bc02be70b6627fc23a925e7de3497cae2924d8f4ba2f506` |
| `prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `55c3cf991436aa90d138b855977e01470ccf0ebb564bc303f9ebde2c726b49a7` |
| `prop-hamiltonian-vector-fields-are-symplectic-and-symplectic-fields-are-locally-hamiltonian` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `58bef98ded197220a7eb6f519fede329460f76445e32803f195b5ece11c10fce` |
| `prop-lagrangian-neighborhood-germ-is-not-canonical` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `f1eb6d211cadd7c686978d27fc84269effb3a1e4e257b9657e2e87ab6fe30c05` |
| `prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping` | `lie-algebra-representations-enveloping-algebras-and-pbw` | gpt-5.6-terra | `62d7fce527366645837e3ab9feeb4935dc6813ba04122987a243764f641e9356` |
| `prop-regular-common-level-sets-are-lagrangian-submanifolds` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `7309e0e116d13ee96df1ad98fed9da7223f56d98ecbd4b9f0523d3c3239da3d3` |
| `prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `775f1b0c26a2c7131674277f390c196763a444dd299b04ed5590affe85a2d133` |
| `prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `cf044223c2bee6440cc2cb1d1384396b16691d74c5a22aeacb03d8c66c9282a5` |
| `prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `bc1d005dfb07a1aacacd5e51a1040cf7ca3455758a1fbdf3b734917d1712847e` |
| `rem-compatible-almost-complex-structures-and-kahler-geometry` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `f78154f6deeb126cb786a5c91d3430d558d3ca700e0c8629b7068456c3ea1463` |
| `thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `3a7730a10e02e0652b7754be96bcabfbca6748c336199efd2912358fcff5f7e4` |
| `thm-continuous-homomorphisms-between-lie-groups-are-smooth` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `e2ba8cf945f73d3e20539fe2beca839ebb83e9159b0b9d90ab29f48d709a548f` |
| `thm-equivalent-characterizations-of-lagrangian-subspaces` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `e9fa3e8c7c6f2e81df6bb7cf323012c48985a2255ecf56d113ea12d12c87ab9f` |
| `thm-first-bianchi-identity` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `7d4cd7f09aef2a8e4d62cebbbdc7f28c5f1869a2ff626ef9d24c1bdb742568fd` |
| `thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `b8d749d0025ebf0bdb18942f3dd890abf4eee09df60de7c1caaccb9d2562042f` |
| `thm-gauss-equation-for-a-riemannian-submanifold` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `86979e503b81126e7c108f584275b617016ee0a70b557a4c006202d775bda9e4` |
| `thm-gausss-theorema-egregium` | `riemann-curvature-and-riemannian-submanifolds` | gpt-5.6-terra | `315bca4603f38a743679426823e3f8846f404c3e9922b3ce33e34ff7679563da` |
| `thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `95ab04271a042555b1448812be01ff0a5d4c70d1960b5fa3a15e9cd28fcaa1b0` |
| `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `75a07d3724da77db5f74473c4d38f210368ad7aa8586dd420d98e45aad0f9913` |
| `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra` | `lie-algebra-representations-enveloping-algebras-and-pbw` | gpt-5.6-terra | `69b9576ee6110a3ee19b4a602ad8bc75b2002741893a6b17bd1ca421b9d903d5` |
| `thm-lie-subgroup-lie-subalgebra-correspondence` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `46661333487d28ab0b41411d2153c369739a43909af6b5ffd43ad77143dc85fe` |
| `thm-liouville-arnold-action-angle-theorem` | `hamiltonian-mechanics-and-completely-integrable-systems` | gpt-5.6-terra | `6d75e8d75bd035617c0c5a929653689d8d337ac5c3fb2eafbc0ab754158d030f` |
| `thm-local-normal-form-near-a-coisotropic-submanifold` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `e1a75b57271ddf89cc3daa7d7b9708420b742d780940801626485a4dafc26ba4` |
| `thm-moser-stability-theorem` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `bce4fbacb770eba92ab64e03e18d4e9524b31711a2621ea60054d644f9fdff0c` |
| `thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero` | `lie-algebra-representations-enveloping-algebras-and-pbw` | gpt-5.6-terra | `54fe402b7d5c99e8cd7861fd5eaf91ddf15d25ccec58dc0df0467aa4010af706` |
| `thm-poincare-birkhoff-witt` | `lie-algebra-representations-enveloping-algebras-and-pbw` | gpt-5.6-terra | `f6ba32c9333ce885aafb0c8944ee03f58cfd85fa53a865ab00c0e5a2f27c8866` |
| `thm-quotient-manifold-by-a-closed-lie-subgroup` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `e2fe9b9d77a8d87a33a7b45ef348b2af3d1ba5eb58620bf5fc506e32794dca7c` |
| `thm-symplectic-neighborhood-theorem` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` | gpt-5.6-terra | `269433e4cad21aa22baad424cf57645fd050267000b6635193caf6d138c9598c` |
| `thm-universal-covering-lie-group` | `lie-subgroups-actions-and-homogeneous-spaces` | gpt-5.6-terra | `84aec04801ff9c4e71496cfdcb5ef9f8a7e7fcae59a6fbfdc2a39b6d85ce78ba` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-21-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-21-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-21-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-21-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


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
