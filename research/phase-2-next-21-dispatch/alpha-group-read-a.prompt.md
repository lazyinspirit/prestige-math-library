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
role: alpha-group-read
label: a
covers: a

# Step 6 whole-group reading — group **a**, run `phase-2-next-21`

You are the group Alpha for batches **7**, **8**, **10**: 6 A/B pair(s), 12 page(s), 374 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 6 — group reading digest, `phase-2-next-21`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
