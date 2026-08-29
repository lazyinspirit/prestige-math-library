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
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
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

run: frontier-23
role: alpha-adjudicate
label: step8-b
covers: 2, 5, 9

# Step 8 — group **b**, run `frontier-23`

You are the group Alpha for batches **2**, **5**, **9**: 5 A/B pair(s), 10 page(s), 177 item(s), 124 open rejection(s) over 124 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `complexification-realification-and-real-structures` | A | linear-algebra | 107.001 | `tensor-products-of-modules`, `diagonalisation-and-the-minimal-polynomial` |
| 2 | `complexification-realification-and-real-structures-examples` | B | linear-algebra | 107.002 | `complexification-realification-and-real-structures` |
| 2 | `exterior-powers-orientation-and-hodge-duality` | A | linear-algebra | 107.003 | `tensor-products-of-modules`, `inner-product-spaces-and-orthogonality` |
| 2 | `exterior-powers-orientation-and-hodge-duality-examples` | B | linear-algebra | 107.004 | `exterior-powers-orientation-and-hodge-duality` |
| 5 | `matrix-norms-condition-numbers-and-numerical-stability` | A | linear-algebra | 168.001 | `rn-as-a-normed-space`, `the-spectral-theorem-and-singular-value-decomposition` |
| 5 | `matrix-norms-condition-numbers-and-numerical-stability-examples` | B | linear-algebra | 168.002 | `matrix-norms-condition-numbers-and-numerical-stability` |
| 9 | `smooth-manifolds-and-smooth-maps` | A | differential-geometry | 443 | `topological-spaces-and-continuity`, `subspaces-products-and-quotients`, `connectedness`, `compactness`, `the-topology-of-euclidean-space`, `separation-axioms`, `urysohn-lemma-and-tietze`, `partitions-of-unity-and-paracompactness`, `countability-axioms-and-cardinal-functions`, `metrization-theorems`, `the-total-derivative`, `mixed-partials-taylor-and-extrema` |
| 9 | `smooth-manifolds-and-smooth-maps-examples` | B | differential-geometry | 444 | `smooth-manifolds-and-smooth-maps` |
| 9 | `euclidean-ordinary-differential-equations-with-smooth-dependence` | A | differential-geometry | 457 | `completeness-and-uniform-continuity`, `uniform-convergence-of-functions`, `properties-of-the-integral-and-the-working-ftc`, `the-total-derivative`, `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes` |
| 9 | `euclidean-ordinary-differential-equations-with-smooth-dependence-examples` | B | differential-geometry | 458 | `euclidean-ordinary-differential-equations-with-smooth-dependence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `complexification-realification-and-real-structures` — Complexification, Realification and Real Structures (18 item(s))

- `def-realification-of-a-complex-vector-space` · definition — Realification of a complex vector space by restriction of scalars
- `def-complexification-of-a-real-vector-space` · definition — Complexification as $\mathbb C\otimes_{\mathbb R}V$ with its canonical real-linear embedding
- `def-direct-sum-model-of-complexification` · definition — The direct-sum model $V\oplus iV$ of a complexification
- `def-complexification-of-a-real-linear-map` · definition — Complexification of a real-linear map
- `def-conjugation-and-real-structure-on-a-complex-vector-space` · definition — Conjugations and real structures on a complex vector space
- `def-fixed-real-form-of-a-conjugation` · definition — The fixed real form of a conjugation
- `thm-tensor-and-direct-sum-models-of-complexification-agree` · theorem — The tensor and direct-sum models of complexification are canonically complex-linearly isomorphic
- `thm-universal-property-and-uniqueness-of-complexification` · theorem — Complexification is initial for real-linear maps into complex vector spaces, and is unique up to unique isomorphism
- `prop-complexification-is-functorial` · proposition — Complexification is a functor on real vector spaces and real-linear maps
- `thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences` · theorem — Complexification preserves kernels, images, finite rank, nullity, and short exact sequences
- `thm-a-real-basis-complexifies-to-a-complex-basis` · theorem — A real basis becomes a complex basis after complexification, so $\dim_{\mathbb C}(\mathbb C\otimes_{\mathbb R}V)=\dim_{\mathbb R}V$
- `cor-realification-doubles-finite-dimension` · corollary — Realification doubles finite dimension
- `thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space` · theorem — The fixed points of a conjugation form a real vector space whose complexification recovers the ambient complex space
- `cor-real-forms-correspond-to-conjugations` · corollary — Real forms of a complex vector space correspond exactly to conjugations
- `thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation` · theorem — A complex-linear operator comes from a real operator exactly when it commutes with the chosen conjugation
- `thm-characteristic-and-minimal-polynomials-survive-complexification` · theorem — Complexification preserves the characteristic and minimal polynomials of a finite-dimensional real operator
- `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs` · theorem — For a real operator, nonreal generalised eigenspaces of the complexification occur in conjugate pairs
- `cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane` · corollary — A nonreal eigenvector yields an invariant real two-plane and the standard rotation-scaling block

### `complexification-realification-and-real-structures-examples` — Complexification, Realification and Real Structures: Examples and Counterexamples (11 item(s))

- `ex-canonical-embedding-of-r-n-into-c-n` · example — The standard embedding $\mathbb R^n\hookrightarrow\mathbb C^n$ is the canonical complexification map
- `ex-complexification-of-a-real-polynomial-space` · example — Complexifying a real polynomial space gives the same degree bound with complex coefficients
- `ex-realification-of-c-n-has-doubled-dimension` · example — Realifying $\mathbb C^n$ gives $\mathbb R^{2n}$ with basis $e_1,ie_1,\dots,e_n,ie_n$
- `ex-quarter-turn-diagonalises-after-complexification` · example — The real quarter-turn diagonalises after complexification but has no real eigenvector
- `ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane` · example — One nonreal eigenvector reconstructs the invariant real plane of a rotation-scaling block
- `ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms` · example — Different conjugations on $\mathbb C^2$ can have different fixed real forms
- `cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form` · counterexample — A complex-linear map need not preserve a chosen real form
- `fs-complexification-doubles-finite-dimension` · false-statement — FALSE: complexification doubles finite dimension
- `fs-every-complex-vector-space-has-a-preferred-real-form` · false-statement — FALSE: every complex vector space has a preferred real form
- `fs-every-complex-linear-operator-descends-to-every-chosen-real-form` · false-statement — FALSE: every complex-linear operator descends to every chosen real form
- `fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one` · false-statement — FALSE: complexification creates a real eigenvector whenever it creates a complex one

### `exterior-powers-orientation-and-hodge-duality` — Exterior Powers, Orientation and Hodge Duality (28 item(s))

- `def-alternating-k-linear-map` · definition — Alternating $k$-linear maps
- `def-kth-exterior-power-by-quotient` · definition — The $k$th exterior power as the tensor-power quotient by repeated-vector relations
- `def-decomposable-k-vector-and-basic-wedge-product` · definition — Decomposable $k$-vectors and the basic wedge product
- `def-exterior-algebra-of-a-vector-space` · definition — The graded exterior algebra $\Lambda V$
- `def-kth-exterior-power-of-a-linear-map` · definition — The induced map $\Lambda^kT$ on exterior powers
- `def-orientation-of-a-finite-dimensional-real-vector-space` · definition — Orientation of a finite-dimensional real vector space
- `thm-universal-property-and-uniqueness-of-exterior-powers` · theorem — Exterior powers represent alternating multilinear maps and are unique up to unique isomorphism
- `prop-basic-wedge-is-multilinear-and-alternating` · proposition — The basic wedge map $(v_1,\dots,v_k)\mapsto v_1\wedge\cdots\wedge v_k$ is multilinear and alternating
- `thm-increasing-basis-wedges-form-a-basis` · theorem — Increasing-index wedges of a basis form a basis of $\Lambda^kV$
- `cor-dimension-of-the-kth-exterior-power` · corollary — If $\dim V=n$, then $\dim\Lambda^kV=\binom{n}{k}$
- `cor-the-kth-exterior-power-vanishes-above-dimension` · corollary — If $k>\dim V$, then $\Lambda^kV=0$
- `thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors` · theorem — In a finite-dimensional vector space, a decomposable wedge is nonzero exactly when its vectors are linearly independent
- `thm-exterior-algebra-laws` · theorem — Exterior multiplication is well defined, graded, associative, unital, and graded-commutative
- `thm-exterior-powers-are-functorial` · theorem — Exterior powers are functorial
- `thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix` · theorem — In basis-wedge coordinates, the matrix of $\Lambda^kT$ is the signed matrix of $k$-minors
- `cor-the-top-exterior-power-acts-by-the-determinant` · corollary — On $\Lambda^{n}V$, the induced map $\Lambda^{n}T$ is multiplication by $\det T$
- `cor-determinant-multiplicativity-from-the-top-exterior-power` · corollary — Determinant multiplicativity follows from the top exterior power
- `thm-determinant-sign-detects-orientation-change` · theorem — A real linear isomorphism preserves or reverses orientation according to the sign of its determinant
- `def-gram-inner-product-on-kth-exterior-power` · definition — The Gram inner product on $\Lambda^kV$
- `thm-gram-inner-product-on-exterior-powers-is-positive-definite` · theorem — The Gram formula gives a well-defined positive-definite inner product on exterior powers, and $\|v_1\wedge\cdots\wedge v_k\|^2$ is the Gram determinant
- `def-oriented-unit-volume-form` · definition — The oriented unit volume form
- `def-hodge-star-on-an-oriented-inner-product-space` · definition — The Hodge star on an oriented finite-dimensional real inner-product space
- `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula` · theorem — The Hodge star exists uniquely and is given by the complementary-basis formula in an oriented orthonormal basis
- `cor-hodge-star-is-an-isometry-and-squares-to-a-sign` · corollary — The Hodge star is an isometry and satisfies $\star^2=(-1)^{k(n-k)}$ on $\Lambda^kV$
- `def-interior-product-on-the-exterior-algebra` · definition — Interior product on the exterior algebra
- `thm-interior-product-is-adjoint-to-exterior-multiplication` · theorem — Interior product is the adjoint of exterior multiplication by a vector
- `prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity` · proposition — Exterior multiplication and interior product satisfy the graded anticommutation identity
- `cor-cross-product-is-hodge-star-of-the-wedge` · corollary — In oriented Euclidean three-space, the cross product is $\star(u\wedge v)$

### `exterior-powers-orientation-and-hodge-duality-examples` — Exterior Powers, Orientation and Hodge Duality: Examples and Counterexamples (13 item(s))

- `ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four` · example — Bases and dimensions of exterior powers of $\mathbb R^2$, $\mathbb R^3$, and $\mathbb R^4$
- `ex-a-wedge-product-detects-linear-dependence` · example — A wedge product detects linear dependence in concrete coordinates
- `ex-exterior-powers-of-a-diagonal-operator` · example — All exterior powers of a diagonal operator are diagonal
- `ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix` · example — A concrete second exterior-power matrix matches the signed $2\times2$ minors
- `ex-oriented-area-and-volume-from-gram-determinants` · example — Oriented area and volume are recovered from wedges and Gram determinants
- `ex-hodge-star-in-dimensions-two-three-and-four` · example — The Hodge star in dimensions two, three, and four
- `ex-the-cross-product-from-hodge-star-and-wedge` · example — The cross product is recovered from $\star(u\wedge v)$ in $\mathbb R^3$
- `ex-orientation-reversal-negates-the-hodge-star` · example — Reversing orientation negates the Hodge star while keeping the metric fixed
- `cex-a-bivector-in-r-four-need-not-be-decomposable` · counterexample — A bivector in $\mathbb R^4$ need not be decomposable
- `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` · false-statement — FALSE: $\Lambda^kV$ is canonically a subspace of $V^{\otimes k}$ over every field
- `fs-an-inner-product-determines-an-orientation` · false-statement — FALSE: an inner product determines an orientation
- `fs-an-orientation-determines-an-inner-product` · false-statement — FALSE: an orientation determines an inner product
- `fs-hodge-star-needs-only-the-vector-space-structure` · false-statement — FALSE: Hodge star needs only the vector-space structure

### `matrix-norms-condition-numbers-and-numerical-stability` — Matrix Norms, Condition Numbers and Numerical Stability (23 item(s))

- `def-absolute-and-relative-forward-error-for-a-problem-map` · definition — Absolute and relative forward error for an approximate value of a problem map
- `def-absolute-and-relative-local-condition-numbers-of-a-problem-map` · definition — Absolute and relative local condition numbers of a problem map
- `def-induced-matrix-p-norm` · definition — The matrix norm induced by a published vector p-norm
- `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized` · theorem — Induced matrix norms are compatible with multiplication, submultiplicative, and satisfy ||I|| = 1
- `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums` · theorem — The induced 1-norm is the maximum column sum and the induced infinity-norm is the maximum row sum
- `def-frobenius-matrix-norm` · definition — The Frobenius norm $||A||_F=(\sum_{i,j}|a_{ij}|^2)^{1/2}$ on real or complex matrices
- `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` · theorem — Spectral and Frobenius norms are unitarily invariant, are given by singular values, and satisfy the sharp rank comparison
- `def-condition-number-of-a-nonsingular-linear-system` · definition — The condition number kappa_p(A) = ||A||_p ||A^{-1}||_p of a nonsingular linear system
- `thm-right-hand-side-perturbation-bound-for-ax-equals-b` · theorem — Right-hand-side perturbations in Ax = b are amplified by the condition number
- `thm-matrix-perturbation-bound-for-ax-equals-b` · theorem — Matrix perturbations in Ax = b obey a first-order condition-number bound
- `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity` · theorem — The reciprocal spectral condition number is the relative distance to singularity
- `thm-residual-to-forward-error-bounds-for-linear-systems` · theorem — Residual bounds on forward error for a nonsingular linear system
- `def-normwise-and-componentwise-backward-error-for-linear-systems` · definition — Normwise and componentwise backward error for an approximate linear-system solution
- `prop-explicit-formulas-for-normwise-and-componentwise-backward-error` · proposition — Residual formulas for normwise and componentwise backward error
- `def-standard-relative-floating-point-model-and-unit-roundoff` · definition — The standard relative floating-point model and unit roundoff
- `def-forward-and-backward-stability-for-a-problem-family` · definition — Forward and backward stability for a problem family under an arithmetic model
- `lem-product-of-one-plus-deltas-gives-theta-n` · lemma — If |delta_i| <= u and nu < 1, then (1 + delta_1) ... (1 + delta_n) = 1 + theta_n with |theta_n| <= gamma_n
- `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` · theorem — The computed floating-point dot product obeys componentwise and normwise error bounds
- `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order` · theorem — Local conditioning times backward error controls forward error to first order
- `thm-normal-equations-square-the-spectral-condition-number` · theorem — For full-column-rank A, the normal equations square the spectral condition number
- `thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices` · theorem — Exact rank is locally constant at full-rank matrices and discontinuous at nonmaximal-rank matrices
- `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` · definition — Numerical rank relative to a declared norm, scale, and tolerance
- `prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold` · proposition — In the spectral norm, numerical rank counts the singular values above the declared threshold

### `matrix-norms-condition-numbers-and-numerical-stability-examples` — Matrix Norms, Condition Numbers and Numerical Stability: Examples and Counterexamples (11 item(s))

- `ex-two-by-two-systems-with-contrasting-condition-numbers` · example — Two 2x2 systems can have dramatically different condition numbers
- `ex-low-order-hilbert-matrices-have-large-condition-numbers` · example — Low-order Hilbert matrices already have large condition numbers
- `ex-vandermonde-conditioning-improves-after-centering-and-scaling` · example — Vandermonde conditioning improves after centering and scaling the nodes
- `cex-a-tiny-residual-does-not-force-a-small-forward-error` · counterexample — A tiny residual does not force a small forward error
- `ex-a-backward-stable-solution-of-an-ill-conditioned-system` · example — A backward-stable computed solution of an ill-conditioned system can still have large forward error
- `ex-catastrophic-cancellation-and-a-stable-reformulation` · example — A cancellation-prone formula can be replaced by a stable reformulation
- `ex-a-floating-point-dot-product-error-bound` · example — A short floating-point dot product obeys the gamma_n error bound
- `ex-normal-equations-versus-qr-conditioning` · example — Normal equations square the conditioning compared with QR on a nearly dependent least-squares problem
- `cex-condition-number-depends-on-the-chosen-norm-and-scaling` · counterexample — Condition number depends on the chosen norm and on diagonal rescaling
- `cex-numerical-rank-depends-on-the-declared-tolerance` · counterexample — The same matrix can have two different numerical ranks under two declared tolerances
- `cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations` · counterexample — The relative floating-point model excludes overflow, underflow, and invalid operations

### `smooth-manifolds-and-smooth-maps` — Smooth Manifolds and Smooth Maps (40 item(s))

- `def-topological-manifold-without-boundary` · definition — Topological manifolds without boundary
- `def-manifold-chart-coordinate-domain-and-coordinate-functions` · definition — Manifold charts, coordinate domains, and coordinate functions
- `def-coordinate-representation-of-a-map` · definition — The coordinate representation of a map
- `def-smoothly-compatible-charts` · definition — Smoothly compatible charts
- `lem-smooth-chart-compatibility-is-symmetric-and-reflexive` · lemma — Smooth chart compatibility is symmetric and reflexive
- `def-smooth-atlas` · definition — Smooth atlases
- `lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas` · lemma — The union of two compatible smooth atlases is a smooth atlas
- `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation` · proposition — Compatibility of smooth atlases is an equivalence relation
- `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas` · lemma — All charts compatible with a smooth atlas form a smooth atlas
- `def-smooth-structure-generated-by-an-atlas` · definition — The smooth structure generated by an atlas
- `thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas` · theorem — Each smooth atlas is contained in a unique maximal smooth atlas
- `def-smooth-manifold` · definition — Smooth manifolds
- `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure` · proposition — An open subset of a smooth manifold has a canonical restricted smooth structure
- `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure` · proposition — Open subsets of Euclidean space have the standard smooth structure
- `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` · proposition — Products of smooth manifolds have a canonical product smooth structure
- `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` · proposition — Countable disjoint unions of fixed-dimensional smooth manifolds are smooth manifolds
- `def-c-r-and-smooth-maps-between-smooth-manifolds` · definition — $C^r$ and smooth maps between smooth manifolds
- `lem-chart-independence-of-c-r-smoothness` · lemma — Chart independence of $C^r$ smoothness
- `prop-smooth-maps-are-continuous` · proposition — Smooth maps are continuous
- `prop-identity-maps-and-composites-of-smooth-maps-are-smooth` · proposition — Identity maps and composites of smooth maps are smooth
- `def-diffeomorphism-and-local-diffeomorphism-of-manifolds` · definition — Diffeomorphisms and local diffeomorphisms of manifolds
- `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets` · proposition — Chart maps are diffeomorphisms onto Euclidean open sets
- `prop-smoothness-is-local-on-the-source` · proposition — Smoothness is local on the source
- `lem-smooth-maps-paste-over-an-open-cover` · lemma — Smooth maps paste over an open cover
- `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth` · proposition — A map into a product is smooth iff its components are smooth
- `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth` · proposition — A map from a disjoint union is smooth iff each restriction is smooth
- `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth` · proposition — Restrictions, corestrictions, and products of smooth maps are smooth
- `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism` · proposition — A smooth map with everywhere smooth local inverses is a local diffeomorphism
- `lem-coordinate-balls-form-a-basis-of-a-topological-manifold` · lemma — Coordinate balls form a basis of a topological manifold
- `prop-topological-manifolds-are-locally-compact-and-locally-path-connected` · proposition — Topological manifolds are locally compact and locally path connected
- `prop-components-of-a-topological-manifold-are-open-and-at-most-countable` · proposition — Components of a topological manifold are open and at most countable
- `thm-topological-manifolds-are-sigma-compact` · theorem — Topological manifolds are sigma-compact
- `thm-topological-manifolds-are-metrizable-and-paracompact` · theorem — Topological manifolds are metrizable and paracompact
- `rem-manifold-conventions-and-the-role-of-second-countability` · remark — Manifold conventions and the role of second countability
- `fs-every-hausdorff-locally-euclidean-space-is-a-manifold` · false-statement — Hausdorff and locally Euclidean do not by themselves make a manifold
- `fs-a-chart-domain-is-an-open-subset-of-euclidean-space` · false-statement — A chart domain need not be a Euclidean open set
- `fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas` · false-statement — Two atlases on the same topological manifold need not have a union atlas
- `fs-a-bijective-smooth-map-is-a-diffeomorphism` · false-statement — A bijective smooth map need not be a diffeomorphism
- `fs-chart-compatibility-needs-only-one-smooth-transition-direction` · false-statement — One smooth transition direction does not guarantee chart compatibility
- `fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable` · false-statement — An arbitrary disjoint union of second-countable manifolds need not be second-countable

### `smooth-manifolds-and-smooth-maps-examples` — Smooth Manifolds and Smooth Maps - Examples (10 item(s))

- `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds` · example — Euclidean spaces and Euclidean open subsets as smooth manifolds
- `ex-the-circle-from-two-stereographic-charts` · example — The circle from two stereographic charts
- `ex-the-n-sphere-with-its-standard-smooth-atlas` · example — The $n$-sphere with its standard smooth atlas
- `ex-real-projective-space-from-affine-charts` · example — Real projective space from affine charts
- `ex-the-torus-as-a-product-smooth-manifold` · example — The torus as a product smooth manifold
- `ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold` · example — A countable disjoint union of lines is a smooth manifold
- `cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention` · counterexample — The long line is locally Euclidean and Hausdorff but not a manifold under the library convention
- `cex-two-noncompatible-atlases-on-the-real-line` · counterexample — Two noncompatible atlases on the real line
- `cex-a-bijective-smooth-map-with-nonsmooth-inverse` · counterexample — A bijective smooth map with nonsmooth inverse
- `cex-an-uncountable-disjoint-union-of-points-is-not-second-countable` · counterexample — An uncountable disjoint union of points is not second-countable

### `euclidean-ordinary-differential-equations-with-smooth-dependence` — Euclidean Ordinary Differential Equations with Smooth Dependence (17 item(s))

- `def-autonomous-ordinary-differential-equation` · definition — Autonomous ordinary differential equations
- `def-variational-equation-along-an-ode-solution` · definition — The variational equation along an ODE solution
- `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` · lemma — Linear matrix ODEs have unique global solutions on a fixed interval
- `prop-a-fundamental-matrix-is-invertible` · proposition — A fundamental matrix is invertible
- `thm-c1-dependence-of-solutions-on-initial-data` · theorem — $C^1$ dependence of solutions on initial data
- `thm-smooth-dependence-of-solutions-on-initial-data` · theorem — Smooth dependence of solutions on initial data
- `thm-smooth-dependence-of-ode-solutions-on-parameters` · theorem — Smooth dependence of ODE solutions on parameters
- `cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete` · corollary — A bounded vector field on all of Euclidean space is complete
- `cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete` · corollary — A compactly supported smooth Euclidean vector field is complete
- `thm-fundamental-theorem-for-autonomous-smooth-odes` · theorem — The fundamental theorem for autonomous smooth ODEs
- `thm-fundamental-theorem-for-nonautonomous-smooth-odes` · theorem — The fundamental theorem for nonautonomous smooth ODEs
- `prop-the-maximal-solution-domain-is-open` · proposition — The maximal solution domain is open
- `prop-solutions-compose-under-a-change-of-initial-time` · proposition — Solutions compose under a change of initial time
- `fs-every-smooth-vector-field-on-euclidean-space-is-complete` · false-statement — A smooth Euclidean vector field need not be complete
- `fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points` · false-statement — Pointwise local existence does not force one global uniform time interval
- `fs-a-maximal-ode-solution-has-a-closed-interval-domain` · false-statement — A maximal ODE solution need not have a closed interval domain
- `fs-continuous-dependence-alone-implies-differentiable-dependence` · false-statement — Continuous dependence does not by itself imply differentiable dependence

### `euclidean-ordinary-differential-equations-with-smooth-dependence-examples` — Euclidean Ordinary Differential Equations with Smooth Dependence - Examples (6 item(s))

- `ex-a-constant-vector-field-and-translation-solutions` · example — A constant vector field has translation solutions
- `ex-a-linear-system-and-its-fundamental-matrix` · example — A linear system and its fundamental matrix
- `ex-the-harmonic-oscillator-as-a-first-order-system` · example — The harmonic oscillator as a first-order system
- `ex-a-compactly-supported-vector-field-with-global-solutions` · example — A compactly supported vector field with global solutions
- `ex-smooth-dependence-in-an-ode-with-a-parameter` · example — Smooth dependence in an ODE with a parameter
- `ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time` · example — A nonautonomous equation made autonomous by adjoining time

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
| `cex-a-bivector-in-r-four-need-not-be-decomposable` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `324d0dabde884b2ba7e8d2d1ceb6c85077ea1f15558745b043e60ade047d5ac1` |
| `cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `9e9c94b6f0ff6900f69c4ddf1bf02368a46e84f758a4d2070e28c6fb4abcd34f` |
| `cex-a-tiny-residual-does-not-force-a-small-forward-error` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `21a6233618297addb573fdeb58295ef2e86badaa4d7a800d618e261593736daf` |
| `cex-an-uncountable-disjoint-union-of-points-is-not-second-countable` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `925e33180226d7d0b5ad514b7c1108ef63d014a7775bea72497bfc784d5edd0c` |
| `cex-condition-number-depends-on-the-chosen-norm-and-scaling` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `c646e3d5458572c8f73fcb7d73a28762140f936c735c525976cc6a654a2bcf54` |
| `cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `0c6982d0029349d991f84965ea9a914dbb743a50c7a81186ff1964bb02d98c73` |
| `cex-two-noncompatible-atlases-on-the-real-line` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `051ae9fbee693af75ebec3fce4b3728e9e5ba36d1e39b8bd354ed5a8ef009aeb` |
| `cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `9b915ba800d470a460f5a250817e24303eded5efac01fbc526a2af6decd39c95` |
| `cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `264a8d728e5d11edf5716b0f533450d5b27b1078375fbc7b4ff6affc60411b12` |
| `cor-cross-product-is-hodge-star-of-the-wedge` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `d33b1b06e353eb5aeaeef5fbf99874045b654a6d1501a46bebfa35a9e9624591` |
| `cor-determinant-multiplicativity-from-the-top-exterior-power` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `7b7c1ce01e0f15e25148a281058b6a52086b9e2d0bd705b2bb5d03bdfd0df780` |
| `cor-hodge-star-is-an-isometry-and-squares-to-a-sign` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `32fff4c9647cc56867b800efeb219931a42cd9684673cbc71f2f77f4de2511dc` |
| `cor-realification-doubles-finite-dimension` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `aa9618dc8dc96fb55e84ed6b8899f3cd379bab49cce0af7857a1c233fd5c46e0` |
| `cor-the-kth-exterior-power-vanishes-above-dimension` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `bc9be74e1db795588ae2af2ffd2ab7583373ab4c270404186f59d0a4b091832f` |
| `cor-the-top-exterior-power-acts-by-the-determinant` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `549947540a9e36471b9bd646fbb10369a5b60817620c89a47ccc5fd12f00ba00` |
| `def-absolute-and-relative-local-condition-numbers-of-a-problem-map` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `870a17f1c895396ad5ce7416a5e6facb2b10d63aec5ea4cc33cdb53fd9c0c726` |
| `def-c-r-and-smooth-maps-between-smooth-manifolds` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `1f57297f7a2d241e07e336c58e105f0741a51a6a6902d1d440bb9c1ff88715b3` |
| `def-complexification-of-a-real-linear-map` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `b86d5988a1e24a820ae04aa3522021bf6b953403839c0cd4edeb9f2761cf8520` |
| `def-complexification-of-a-real-vector-space` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `9f5e27d93ffeceecfc35c5bab7540a50c5d65590626b6611efa80c5252aeb685` |
| `def-condition-number-of-a-nonsingular-linear-system` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `30a9f2756c4956d45306f29060cc6a3c27ac0d2e42cfdf5959a46e6d2c8a1c2c` |
| `def-conjugation-and-real-structure-on-a-complex-vector-space` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `d09d4bb51973d38dfd0dfdcfa0746aeafb6865c9486ae616fcca4cffc6e8192a` |
| `def-coordinate-representation-of-a-map` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `2c4608e031213ea4a6f9aa19796a151d66138c4e79f4d4d3dcdac34252d80eb5` |
| `def-direct-sum-model-of-complexification` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `7f60de293e71295d80bfe621e6109e4d7c47487165b3f18ef39c48b208dcb3c5` |
| `def-exterior-algebra-of-a-vector-space` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `2d14857f2853fb9369ec64415d2649259a46c794f7eeff47b023aa1bdec3c348` |
| `def-fixed-real-form-of-a-conjugation` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `74b6f11a89059775e335f4e8c9607a8097293b41184c5ceaf70785f4acf7cce1` |
| `def-forward-and-backward-stability-for-a-problem-family` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `a652141eea6762c348fb4ad00e2940e390c74d89495ed010894491d2afc451fc` |
| `def-gram-inner-product-on-kth-exterior-power` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `fa4e3748f1ddd3071df5f7e475d20f531476d9b7b045ceaee0ddd509c12b413e` |
| `def-induced-matrix-p-norm` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `fc68fa683a17327298465bde6656c814a3c5b39c5592fbd397662b93ce84213b` |
| `def-interior-product-on-the-exterior-algebra` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `542da4fca726552926f55f3521c0b262f9fd10890f1f710fa5dbdafa73a8b7c6` |
| `def-kth-exterior-power-of-a-linear-map` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `9f8f899c7c524037f43bd5aa07aabf614c08d41f3d37032b05e0a91527a46da1` |
| `def-manifold-chart-coordinate-domain-and-coordinate-functions` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `8cb0122a825bf98a8feb466f89315e259fdf83c588c60237ae425c954910ff81` |
| `def-normwise-and-componentwise-backward-error-for-linear-systems` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `6da9b948d15b04052bf2d547e6e03c062a14c63804601478ff05592543ebd246` |
| `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `c219496c1dd3b60481792cc9211d03d16c8794d76177986835e06e19c899363b` |
| `def-oriented-unit-volume-form` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `e1f978d2059c1974b2a55b9e1072060bc8dc8b77d6079a76b87ebc6f5347ce19` |
| `def-realification-of-a-complex-vector-space` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `76ac362eff16b76595cd5055a6abf0f6ad056e80cb814b755bbcfa04fc992465` |
| `def-smoothly-compatible-charts` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `af099766ddf39f6f4f3320e42d18b5c0043d8e02738f6966a7fe85c69a492771` |
| `def-standard-relative-floating-point-model-and-unit-roundoff` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `e3d9c46f907daf687f228ff416427e34bf874c84caa2b8bf82a5c371b2536ff7` |
| `def-variational-equation-along-an-ode-solution` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `702f7cd56ccf04a9120f13c9780baefcc8e4e43c53a9021700df3f0366821a98` |
| `ex-a-backward-stable-solution-of-an-ill-conditioned-system` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `5efd4f64211b4b9f977b7c07ace287d3c068057f19fb93cfd4cd0cdfc3c72fdd` |
| `ex-a-floating-point-dot-product-error-bound` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `f9ec4b8c5dc4204b90d831714a6e43277c94495a25426d8a9b7a8a6ee746cf5a` |
| `ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `2b13f0cdfb405b95b213a6bb34f3069c85be606e3624f45cee7d9687d7b08af7` |
| `ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `5253940f2c3a252ddd7525729d96a8804df02a9fb0ce18221eba2b2a82d731f7` |
| `ex-catastrophic-cancellation-and-a-stable-reformulation` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `4f99b59f9b206b3dabc75142bf6d12ef4cdf7eb1668326fdc78135d72b326bbc` |
| `ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `9ef57ff501195602562f6abe6ead2b00a11f5c2a9e4ad921146d4ee2d8686f43` |
| `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `254031403b4c47c31ce317fc65b7d5ad7ba8e4ebc78646b3d9eb108b0bd528da` |
| `ex-exterior-powers-of-a-diagonal-operator` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `b2a8d26d1ed7e3086dba5988ddaa8635077f9dc997c4647196e4a7c1af905a45` |
| `ex-low-order-hilbert-matrices-have-large-condition-numbers` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `539c3c4c4641890981b3dab7057b1b78a1937216f411f444ecc61a9a28b1ef39` |
| `ex-normal-equations-versus-qr-conditioning` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `61d018b1bd566c0e102a2e85b0cd46f52ac578578c4c72b26a8f75f6a38192d6` |
| `ex-oriented-area-and-volume-from-gram-determinants` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `ffed6d0b8aca926d3411addf3f7e3e7d7d96ec899faaeebe7739e0fc5e927901` |
| `ex-quarter-turn-diagonalises-after-complexification` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `da69150c7756d386e52b2052d498f6da6aa1fcaa65bf24df2763c2acc22861fd` |
| `ex-real-projective-space-from-affine-charts` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `8fceb09010b5f0a8a4f478fe4e59ec2692715a479381d50eeabc738ad5921e4f` |
| `ex-realification-of-c-n-has-doubled-dimension` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `aa69116bbda5fafffb44c40cbba86136a781784186974767eab45d39365a0b47` |
| `ex-the-circle-from-two-stereographic-charts` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `6328dd5c498fd542152302acb1f32643708ecdd29606a4c0e64af9fa919bb1b7` |
| `ex-the-n-sphere-with-its-standard-smooth-atlas` | `smooth-manifolds-and-smooth-maps-examples` | gpt-5.6-terra | `6e3fb2b50be73075b49f678820a67b92b6c6ff4bc73620d471ee8eef38f0d145` |
| `ex-two-by-two-systems-with-contrasting-condition-numbers` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `90767dd144e80c17fd1a89bc05e9527528a6a261c2bed0a33405bb5a27175bc5` |
| `ex-vandermonde-conditioning-improves-after-centering-and-scaling` | `matrix-norms-condition-numbers-and-numerical-stability-examples` | gpt-5.6-terra | `e1720ec9b728d7c28d5222f6086449a50da39d4d3c4a9743a9fb3311c427d3b1` |
| `fs-a-bijective-smooth-map-is-a-diffeomorphism` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `a8eedf27c7d3fa9151ad120d47307adb76b72c7fbef94d7ab2955e2b3c17ac7a` |
| `fs-a-maximal-ode-solution-has-a-closed-interval-domain` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `7b833940dd665679e0c55f80600457cde7c21604473f6a55cd342503db10e9a8` |
| `fs-an-orientation-determines-an-inner-product` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `7e27aa0a3c4fdbb197d265012e9e678eb54934f38cdcb848245294f0cdec1ecd` |
| `fs-complexification-doubles-finite-dimension` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `c2e0dbe166e2431531dcf122c893a1e8aacb77af3932b2b6d4381384df83045b` |
| `fs-every-complex-vector-space-has-a-preferred-real-form` | `complexification-realification-and-real-structures-examples` | gpt-5.6-terra | `29db3330193d4942959387ac5376660750b9dfcb727fade9594f55d1ce1179c5` |
| `fs-every-hausdorff-locally-euclidean-space-is-a-manifold` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `87145246af1ced38b4e13e70a72ec5ef1b63028bd33332584f57c0af4c3f063f` |
| `fs-hodge-star-needs-only-the-vector-space-structure` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `32d3e096676bb8ea0d199b4616f0dbf7282f71b79163368b1b097231cd03e0fa` |
| `fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `ed1550f704d903d989331fd862fa21d88eee50d586596e3ac3307b7d86433c5a` |
| `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` | `exterior-powers-orientation-and-hodge-duality-examples` | gpt-5.6-terra | `1d56dc7e4b4063a43d7392012cd728fa13db663bb6690b6c9c131c20e90455e7` |
| `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `8614b3e8969dbe30257cd7fc24b93001f1858ccd84841eedf28527c3209d2747` |
| `lem-chart-independence-of-c-r-smoothness` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `5bcb32a03961486b8a099b787db0c0d49e6fc22cee96608b72ca8d1a7b823f57` |
| `lem-coordinate-balls-form-a-basis-of-a-topological-manifold` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `62196e986d0042126d1cd34be60e628ccb086df55e406f172904df17c235ceb8` |
| `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `d24569fd092e3560a75587606a5a94bcbb903901014d92ff675002cec1a956b2` |
| `lem-product-of-one-plus-deltas-gives-theta-n` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `5b8ef2dcb70631b4e0995245f854a4d5b548680100078cce1348fd38fd3f9fed` |
| `lem-smooth-chart-compatibility-is-symmetric-and-reflexive` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `95f5797c205dd2f89c7ab593543751bc205eb1cfbd05e953d2bac3c327283da4` |
| `lem-smooth-maps-paste-over-an-open-cover` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `0fd9c497f3d42a624b1e4dbeeadbe37c8f7abd35c5b46b06f5fa2366631f0adc` |
| `prop-a-fundamental-matrix-is-invertible` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `45d9ba5c4c332538c27833c62b6a36d0b1f9837842b745ea9260c4d8fb271548` |
| `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `ed607c7098c87dd0c9d58feecb94aadabae064f6e4fdc4830df58994251158b7` |
| `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `ace7198b0f4d20c8b2b3034e6688a57cd0f67b2994fa18b9ab1c67a1378f1e07` |
| `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `321a6537de9daeaa375bc202ad7b3ce8e0931736e4cce84e5a5e0a9114cfa4ad` |
| `prop-basic-wedge-is-multilinear-and-alternating` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `7b302e580ca058ca84e78959731471436c529e96305231e90fa91771fc0bf744` |
| `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `71e58c1cab55c191fa4ef4d49c86e58474020500f88e4f65928a44d405356371` |
| `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `b46a85c1a5062942d2e86cb3a2f2d0cee3b42a014d36bbd009e886193131091f` |
| `prop-components-of-a-topological-manifold-are-open-and-at-most-countable` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `a377be21020779e6e1cae8790bae67ac5f91a6b43583056212a563e48481c501` |
| `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `69e72aaa98d419150033804876923da78b657f4bca5143bbb5ba6b112a995e90` |
| `prop-explicit-formulas-for-normwise-and-componentwise-backward-error` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `2130b136ca9cb78303b31376c2cf2bd92d77113ee4ff4b8c25980abefd9e5cf4` |
| `prop-identity-maps-and-composites-of-smooth-maps-are-smooth` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `adb1be0b4651e0289ea8b333fb53e1db05c549d16a66d3e4cbd8c30c2558cea1` |
| `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `a6e2d7a4fb121e0ecab677053ec24faf84298c4d57ad393ce3a4b69ec70e41f5` |
| `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `dd36f5c70aafdbf428be8a67efe3616e610e671ad8b8336648988336570b1677` |
| `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `b67e3b8511dd7d93d08e4cad0b610d4f72e1bcb6d4121c28812ccafce9a28a8d` |
| `prop-smooth-maps-are-continuous` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `6ff0abaf38acb06ee92ec4fb391da2acafc4c4feed96c422d3af4a9c3f827c15` |
| `prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `67e07f2ae7f10f00de5a1aeee2afacfbbbfc0783135b57185a96297ac4864765` |
| `prop-the-maximal-solution-domain-is-open` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `cf765f345be954907942779bdde33a6037ea72c8f9932fc7a304cdb02f2aac25` |
| `prop-topological-manifolds-are-locally-compact-and-locally-path-connected` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `ccf4bcb4a7298961e1d29161819e97e8f6f929cc2f9705c076eda3694bce07c6` |
| `prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `58aac254088df549070e2aac4906b8f4721371dc19a4e6c1d72542703696dad6` |
| `rem-manifold-conventions-and-the-role-of-second-countability` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `e05ec166f9b954c60ddb127a22a14a521de5eee434cfa77ece8badcb35543a7e` |
| `thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `5476f104d21abdb71b134ba6a695b3c29f4443e1850ce63d79288d19d334b44c` |
| `thm-a-real-basis-complexifies-to-a-complex-basis` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `680cef709b5a249fb6fc406d673302e3d7f7ea101dcfdd44057dfec2a448a573` |
| `thm-c1-dependence-of-solutions-on-initial-data` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `a7c658bb4b518dd41ee3d0723ba14e42cb6fff5af66d16a7b50788095bf62323` |
| `thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `eb624de095edfd865a164a71e76c85b2eaf0048057c24ed757e1da23f50d4e01` |
| `thm-determinant-sign-detects-orientation-change` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `60931304f6a6011ed24e4e0ff0e1e79fcc4f2abcb0655484899b28d7af9c7365` |
| `thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `6a0c62905b86908356f5c5b7fdfa8cad2a09b48ae58d634f285bf3e88dfb0141` |
| `thm-exterior-algebra-laws` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `eee42641522b73031706ba93a9fe9135923a77df0f3290a7525c1f97eae2f267` |
| `thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `21fac2662fee8acee0e5d390a8c58ffed043899cedea720c1475df9749f846de` |
| `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `1cc306b639ea4e8d79f4179258c94dae144c12e5169eb014cb9e8afab62efcde` |
| `thm-fundamental-theorem-for-autonomous-smooth-odes` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `81d93d51232710be6e504a06199b54b2f636f529da7145973c5cbc4166cc1bc7` |
| `thm-fundamental-theorem-for-nonautonomous-smooth-odes` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `85360bea26c7cfdf3815214b7fecd4c79d086ef3c3fc97964e0a6251b131fc2d` |
| `thm-gram-inner-product-on-exterior-powers-is-positive-definite` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `c604faaf08f0f91886c449b77f5f3e92f5f43022ac6b61ed7338e5c8252f19ce` |
| `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `38d657c4f5def9ccbd55a8bd9da4a109f801a672f6e2bcd2b7d452ad833ca3c7` |
| `thm-increasing-basis-wedges-form-a-basis` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `268b7884eb4d1daf27fb10417999022d23e3f46156e8bc5cda71b5b4d1dfb038` |
| `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `ebec9893181cb0800ebaf26eb87421d79dc875d34b17f1f01b0b7f723ace2ef8` |
| `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `4996ceef9fdeebd5c56c982db21da733c7abe0a84b6e945a20e9dbea7ba66ce4` |
| `thm-interior-product-is-adjoint-to-exterior-multiplication` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `ef3cfac3645bf22943548fb2135c8f89b81f5ba6fdfecb83c3bd3dedd02e9c62` |
| `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `21c26706c8567ade887fac95b440de02b43f4dcb2a8c7ec1eee82ea0bddbb620` |
| `thm-matrix-perturbation-bound-for-ax-equals-b` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `3e770dc49d3f08a5d3835b54417548cb85ffdff4513f24e5032f6af032facd6a` |
| `thm-normal-equations-square-the-spectral-condition-number` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `9c3c3278c984c7150251dac73c5dac69ff0211c912f6e573c4fa43778b547a4d` |
| `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `d0e02e9348c91b14c7a012e55ee0254e0ad46b2da2287cb4af3b59a0ee949633` |
| `thm-residual-to-forward-error-bounds-for-linear-systems` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `c7f0a6fc774442478d6ee1fe5170266f56594502d47d36cf423bd8a9e3816f8f` |
| `thm-right-hand-side-perturbation-bound-for-ax-equals-b` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `fd886d48789515d08dfa4312f51e4e10771d6d999d3c46b74458600f04f655ba` |
| `thm-smooth-dependence-of-ode-solutions-on-parameters` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `223e04ad5afa3658cd3d70e106ee82c3eef02e938d62e5040db25a3223ba37ca` |
| `thm-smooth-dependence-of-solutions-on-initial-data` | `euclidean-ordinary-differential-equations-with-smooth-dependence` | gpt-5.6-terra | `0910a2165364d4796240ca7edf41fc393379f14c1bbe529646db5bdbe5657e1e` |
| `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` | `matrix-norms-condition-numbers-and-numerical-stability` | gpt-5.6-terra | `43f810d57f4b49426c4619a2216320f5c71708695c512edaebc0b0c64b892d7f` |
| `thm-tensor-and-direct-sum-models-of-complexification-agree` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `9294fd82e0df806e91143398adedab278aae9d28b32d3840312df3f7a56cebbf` |
| `thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `e45393c6f8a713b236380dee591fa9b5543dc89917da21d438949f7eca37e519` |
| `thm-topological-manifolds-are-metrizable-and-paracompact` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `3ec1e793ce6b7727834e2c8047c46983244de55d0c8d98646fdc24de567d7ae9` |
| `thm-topological-manifolds-are-sigma-compact` | `smooth-manifolds-and-smooth-maps` | gpt-5.6-terra | `f841319edb7fcb5bdc4d756271b7210770fd6563eea00c183d32137786a6df68` |
| `thm-universal-property-and-uniqueness-of-complexification` | `complexification-realification-and-real-structures` | gpt-5.6-terra | `9b547475cad375988a050e4a0fef6ad70f344d5e52c44d1bfb2e9583279e8e0a` |
| `thm-universal-property-and-uniqueness-of-exterior-powers` | `exterior-powers-orientation-and-hodge-duality` | gpt-5.6-terra | `2ee06cb178b2d7e55b2c2acdde3ea4ccea7e454677cc6284b089ea5af9337557` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-23`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-23-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-23-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-23-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-23-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
