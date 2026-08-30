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
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
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

run: frontier-24
role: alpha-adjudicate
label: step8-b
covers: 3, 8, 9

# Step 8 — group **b**, run `frontier-24`

You are the group Alpha for batches **3**, **8**, **9**: 4 A/B pair(s), 8 page(s), 192 item(s), 117 open rejection(s) over 117 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `direct-matrix-factorisations-lu-cholesky-and-qr` | A | linear-algebra | 168.003 | `matrix-norms-condition-numbers-and-numerical-stability` |
| 3 | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | B | linear-algebra | 168.004 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 8 | `chain-complexes-and-homology` | A | homological-algebra | 365.037 | `abelian-categories`, `exactness-and-the-member-calculus` |
| 8 | `chain-complexes-and-homology-examples` | B | homological-algebra | 365.038 | `chain-complexes-and-homology` |
| 9 | `smooth-partitions-of-unity-and-exhaustions` | A | differential-geometry | 445 | `smooth-manifolds-and-smooth-maps`, `the-exponential-function` |
| 9 | `smooth-partitions-of-unity-and-exhaustions-examples` | B | differential-geometry | 446 | `smooth-partitions-of-unity-and-exhaustions` |
| 9 | `tangent-cotangent-and-the-differential` | A | differential-geometry | 447 | `smooth-manifolds-and-smooth-maps`, `dual-spaces-bilinear-forms-and-inertia`, `the-determinant-of-a-linear-operator`, `the-fundamental-theorems-of-calculus`, `the-inverse-function-theorem-completed` |
| 9 | `tangent-cotangent-and-the-differential-examples` | B | differential-geometry | 448 | `tangent-cotangent-and-the-differential`, `smooth-manifolds-and-smooth-maps` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `direct-matrix-factorisations-lu-cholesky-and-qr` — Direct Matrix Factorisations: LU, Cholesky and QR (24 item(s))

- `def-forward-and-back-substitution-for-triangular-systems` · definition — Forward and backward substitution for triangular linear systems
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` · theorem — Forward and backward substitution are correct, unique, and quadratic in scalar operations
- `def-normalised-lu-factorisation` · definition — A normalised LU factorisation has a unit lower-triangular L and an upper-triangular U
- `def-ldu-factorisation` · definition — An LDU factorisation has unit lower-triangular L, diagonal D, and unit upper-triangular U
- `thm-normalised-lu-and-ldu-factorisations-are-unique` · theorem — Normalised LU and LDU factorisations are unique when they exist
- `def-block-lu-factorisation` · definition — Block LU factorisation and the associated Schur complement
- `thm-block-lu-factorisation-via-an-invertible-leading-block` · theorem — An invertible leading block yields block LU through its Schur complement
- `thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero` · theorem — An invertible matrix has an unpivoted unit-lower LU factorisation exactly when all leading principal minors are nonzero
- `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` · theorem — When unpivoted elimination runs to completion, the elimination multipliers are the entries of the normalised LU factors
- `def-permutation-matrix-partial-pivoting-and-pivot-growth` · definition — Permutation matrices, partial pivoting, and the pivot-growth factor
- `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity` · theorem — Every real or complex square matrix admits a PLU factorisation, and the first failed pivot marks the singular boundary
- `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound` · theorem — In the standard real floating-point model, computed pivoted LU is a nearby factorisation with a pivot-growth dependent backward bound
- `def-cholesky-factorisation-with-positive-diagonal` · definition — Hermitian positive-definite matrices and Cholesky factorisation A = LL* with positive diagonal
- `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique` · theorem — A matrix admits a Cholesky factorisation with positive diagonal exactly when it is Hermitian positive definite, and that factor is unique
- `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots` · theorem — For real symmetric matrices, positive leading principal minors are equivalent to positive Cholesky pivots
- `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost` · theorem — Cholesky solves Hermitian positive-definite systems and has about half the factorisation cost of LU
- `def-householder-reflector` · definition — Householder reflectors in real or complex inner-product spaces
- `def-real-and-complex-givens-transformations` · definition — Real Givens rotations and complex Givens transformations
- `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries` · theorem — Householder reflectors and Givens transformations are unitary and can annihilate prescribed entries
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations` · definition — Full, reduced, and column-pivoted computational QR factorisations
- `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts` · theorem — Successive Householder or Givens transformations produce full and reduced QR factorisations with the standard dense operation counts
- `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` · theorem — Householder QR is backward stable in the standard real floating-point model
- `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block` · theorem — Exact column-pivoted QR of a real or complex rank-r matrix has an invertible leading triangular block and zero trailing block
- `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number` · theorem — Reduced QR over the reals solves full-column-rank least squares without squaring the condition number

### `direct-matrix-factorisations-lu-cholesky-and-qr-examples` — Direct Matrix Factorisations: LU, Cholesky and QR: Examples and Counterexamples (10 item(s))

- `cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot` · counterexample — An invertible matrix can fail unpivoted LU at the first pivot
- `ex-plu-factorisation-by-hand` · example — A full PLU factorisation can be computed explicitly by hand
- `ex-ldu-factorisation-and-its-unique-diagonal-pivots` · example — An LDU factorisation isolates the pivot scalars uniquely
- `ex-block-lu-factorisation-and-a-schur-complement-solve` · example — A block LU factorisation turns a linear solve into a Schur-complement solve
- `ex-cholesky-factorisation-and-solve` · example — A Cholesky factorisation solves a small positive-definite system efficiently
- `cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky` · counterexample — Indefinite and semidefinite matrices can both fail positive-diagonal Cholesky
- `ex-householder-qr-factorisation-by-hand` · example — A short dense matrix admits a worked Householder QR factorisation
- `ex-givens-qr-on-a-sparse-matrix` · example — Givens QR can zero selected entries of a sparse matrix one at a time
- `ex-reduced-qr-least-squares-versus-normal-equations` · example — Reduced QR avoids the condition-number squaring seen in the normal equations
- `ex-sparse-gaussian-elimination-can-create-fill-in` · example — Sparse Gaussian elimination can create fill-in in the factors

### `chain-complexes-and-homology` — Chain Complexes and Homology (47 item(s))

- `def-chain-complex-in-an-abelian-category` · definition — Chain complex in an abelian category
- `def-cochain-complex-in-an-abelian-category` · definition — Cochain complex in an abelian category
- `def-bounded-bounded-below-and-bounded-above-complex` · definition — Bounded, bounded below, and bounded above complexes
- `def-zero-and-stalk-complex` · definition — Zero complex and stalk complex
- `def-cycle-and-boundary-subobjects-of-a-complex` · definition — Cycle and boundary subobjects of a complex
- `lem-the-boundary-subobject-factors-through-the-cycle-subobject` · lemma — The boundary subobject factors through the cycle subobject
- `def-homology-object-of-a-chain-complex` · definition — Homology object of a chain complex
- `def-cohomology-object-of-a-cochain-complex` · definition — Cohomology object of a cochain complex
- `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex` · definition — Exactness of a complex at a degree and acyclic complexes
- `thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero` · theorem — A complex is exact at n exactly when its nth homology is zero
- `prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees` · proposition — An exact sequence is a complex, and its exactness agrees with the earlier notion
- `def-chain-map` · definition — Chain map
- `def-cochain-map` · definition — Cochain map
- `prop-identities-and-composites-of-chain-maps-are-chain-maps` · proposition — Identities and composites of chain maps are chain maps
- `def-category-of-chain-complexes` · definition — The category of chain complexes
- `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries` · lemma — A chain map carries cycles to cycles and boundaries to boundaries
- `thm-a-chain-map-induces-a-well-defined-map-on-homology` · theorem — A chain map induces a well-defined map on homology
- `prop-homology-respects-identities-and-composition` · proposition — Homology respects identities and composition
- `thm-homology-is-an-additive-functor` · theorem — Homology is an additive functor
- `def-quasi-isomorphism` · definition — Quasi-isomorphism
- `prop-isomorphisms-of-complexes-are-quasi-isomorphisms` · proposition — Isomorphisms of complexes are quasi-isomorphisms
- `prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is` · proposition — A chain map is a quasi-isomorphism exactly when its cochain reindexing is
- `def-subcomplex` · definition — Subcomplex
- `lem-the-differential-descends-to-a-quotient-complex` · lemma — The differential descends to a quotient complex
- `def-quotient-complex` · definition — Quotient complex
- `def-short-exact-sequence-of-complexes` · definition — Short exact sequence of complexes
- `lem-the-kernel-of-a-chain-map-is-computed-degreewise` · lemma — The kernel of a chain map is computed degreewise
- `lem-the-cokernel-of-a-chain-map-is-computed-degreewise` · lemma — The cokernel of a chain map is computed degreewise
- `prop-images-and-coimages-of-chain-maps-are-computed-degreewise` · proposition — Images and coimages of chain maps are computed degreewise
- `thm-the-category-of-complexes-in-an-additive-category-is-additive` · theorem — The category of complexes in an additive category is additive
- `thm-the-category-of-complexes-in-an-abelian-category-is-abelian` · theorem — The category of complexes in an abelian category is abelian
- `cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise` · corollary — A sequence of chain maps is exact exactly when it is exact degreewise
- `prop-a-subcomplex-is-the-kernel-of-its-quotient-map` · proposition — A subcomplex is the kernel of its quotient map
- `thm-the-first-isomorphism-theorem-for-complexes` · theorem — The first isomorphism theorem for complexes
- `prop-finite-biproducts-of-complexes-are-computed-degreewise` · proposition — Finite biproducts of complexes are computed degreewise
- `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials` · proposition — Products and coproducts of complexes are degreewise when they exist and preserve differentials
- `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps` · proposition — An additive functor applies degreewise to complexes and chain maps
- `thm-an-exact-functor-commutes-with-homology` · theorem — An exact functor commutes with homology
- `cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative` · corollary — An exact functor preserves quasi-isomorphisms and reflects them when it is conservative
- `def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups` · definition — Euler characteristic of a finite complex of finite-rank free abelian groups
- `thm-euler-poincare-formula-for-finite-free-complexes` · theorem — Euler-Poincare formula for finite free complexes
- `fs-any-sequence-of-morphisms-is-a-chain-complex` · false-statement — FALSE: any sequence of morphisms is a chain complex
- `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles` · false-statement — FALSE: the boundaries of a complex are a quotient of its cycles
- `fs-a-chain-map-is-determined-by-its-maps-on-homology` · false-statement — FALSE: a chain map is determined by its maps on homology
- `fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes` · false-statement — FALSE: every quasi-isomorphism is an isomorphism of complexes
- `fs-an-additive-functor-commutes-with-homology` · false-statement — FALSE: an additive functor commutes with homology
- `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category` · false-statement — FALSE: every infinite coproduct of complexes has homology equal to the coproduct of their homologies

### `chain-complexes-and-homology-examples` — Chain Complexes and Homology — Examples (10 item(s))

- `ex-the-zero-differential-complex-has-homology-equal-to-each-term` · example — A zero-differential complex has homology equal to each term
- `ex-a-two-term-complex-and-its-kernel-and-cokernel-homology` · example — A two-term complex has kernel and cokernel homology
- `ex-the-multiplication-by-m-complex-computes-a-cyclic-group` · example — The multiplication-by-m complex computes a cyclic group
- `ex-an-exact-short-sequence-as-an-acyclic-three-term-complex` · example — An exact short sequence as an acyclic three-term complex
- `ex-a-split-exact-complex-contracts-degree-by-degree` · example — A split exact complex contracts degree by degree
- `ex-a-chain-map-computed-on-cycles-boundaries-and-homology` · example — A chain map computed on cycles, boundaries, and homology
- `cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes` · counterexample — A quasi-isomorphism that is not an isomorphism of complexes
- `cex-two-distinct-chain-maps-inducing-the-same-homology-map` · counterexample — Two distinct chain maps inducing the same homology map
- `ex-a-subcomplex-and-its-quotient-complex` · example — A subcomplex and its quotient complex
- `ex-euler-poincare-for-a-finite-complex` · example — Euler-Poincare for a finite complex

### `smooth-partitions-of-unity-and-exhaustions` — Smooth Partitions of Unity and Exhaustions (33 item(s))

- `def-the-standard-flat-function` · definition — The standard flat function
- `lem-exponential-decay-dominates-every-inverse-power` · lemma — Exponential decay dominates every inverse power near zero
- `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` · theorem — The standard flat function is smooth and flat at zero
- `def-the-standard-smooth-step-function` · definition — The standard smooth step function
- `lem-smooth-bump-between-concentric-euclidean-balls` · lemma — A smooth bump between concentric Euclidean balls
- `lem-euclidean-bump-for-a-compact-set-inside-an-open-set` · lemma — A Euclidean bump for a compact set inside an open set
- `lem-chart-bump-at-a-point-with-prescribed-support` · lemma — A chart bump at a point with prescribed support
- `lem-manifold-bump-for-a-compact-set-inside-an-open-set` · lemma — A manifold bump for a compact set inside an open set
- `lem-locally-finite-families-of-supports-have-locally-finite-cozero-families` · lemma — Locally finite supports have locally finite cozero sets
- `thm-a-locally-finite-sum-of-smooth-functions-is-smooth` · theorem — A locally finite sum of smooth functions is smooth
- `lem-normalizing-a-locally-finite-positive-smooth-family` · lemma — A locally finite positive smooth family normalizes to a partition of unity
- `def-smooth-partition-of-unity-subordinate-to-an-open-cover` · definition — Smooth partitions of unity subordinate to an open cover
- `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` · lemma — Every open cover of a manifold has a countable relatively compact coordinate-ball subcover
- `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` · lemma — A countable coordinate-ball cover has a countable locally finite shrinking
- `thm-smooth-partitions-of-unity-exist-on-manifolds` · theorem — Smooth partitions of unity exist on manifolds
- `cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover` · corollary — Smooth partitions subordinate to a countable coordinate cover
- `rem-smooth-and-topological-partition-theorems-have-different-proof-costs` · remark — Smooth and topological partition theorems have different proof costs
- `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set` · theorem — A smooth Urysohn lemma for a closed set in an open set
- `cor-smooth-functions-separate-points-from-closed-sets` · corollary — Smooth functions separate points from closed sets
- `lem-smooth-extension-from-a-closed-neighbourhood` · lemma — Smooth extension from a closed neighbourhood
- `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity` · theorem — Smooth locally defined functions can be glued by a partition of unity
- `def-compact-exhaustion-of-a-manifold` · definition — Compact exhaustions of a manifold
- `lem-every-manifold-has-a-compact-exhaustion` · lemma — Every manifold has a compact exhaustion
- `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` · theorem — Every smooth manifold admits a smooth proper exhaustion function
- `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function` · corollary — Every closed subset of a manifold is the zero set of a smooth nonnegative function
- `cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function` · corollary — Every open subset of a manifold is the cozero set of a smooth function
- `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains` · proposition — Every smooth manifold admits a countable smooth atlas with relatively compact domains
- `fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero` · false-statement — The standard flat function is analytic at zero
- `fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth` · false-statement — Every continuous partition of unity on a smooth manifold is smooth
- `fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth` · false-statement — An arbitrary pointwise sum of smooth functions is smooth
- `fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff` · false-statement — Every smooth function defined near a closed set extends globally without a cutoff
- `fs-every-smooth-manifold-is-compact` · false-statement — Every smooth manifold is compact
- `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums` · false-statement — A partition of unity can glue manifold-valued maps by weighted sums

### `smooth-partitions-of-unity-and-exhaustions-examples` — Smooth Partitions of Unity and Exhaustions — Examples (9 item(s))

- `ex-the-standard-compactly-supported-bump-on-the-line` · example — The standard compactly supported bump on the line
- `ex-a-radial-bump-on-euclidean-space` · example — A radial bump on Euclidean space
- `ex-a-two-function-smooth-partition-on-the-circle` · example — A two-function smooth partition on the circle
- `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` · example — A smooth partition on real space subordinate to two half-spaces
- `ex-a-proper-smooth-exhaustion-of-euclidean-space` · example — A proper smooth exhaustion of Euclidean space
- `ex-a-proper-smooth-exhaustion-of-the-open-unit-ball` · example — A proper smooth exhaustion of the open unit ball
- `ex-a-smooth-function-with-a-prescribed-closed-zero-set` · example — A smooth function with a prescribed closed zero set
- `cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous` · counterexample — A pointwise-finite smooth family whose sum is not continuous
- `cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth` · counterexample — Extension by zero without support away from the boundary is not smooth

### `tangent-cotangent-and-the-differential` — Tangent Cotangent and the Differential (49 item(s))

- `def-germ-of-a-smooth-function-at-a-point` · definition — The germ of a smooth function at a point
- `lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions` · lemma — Equality near a point is an equivalence relation on local smooth functions
- `def-the-local-algebra-of-smooth-function-germs` · definition — The local algebra of smooth function germs
- `lem-algebra-operations-on-smooth-germs-are-representative-independent` · lemma — Algebra operations on smooth germs are representative-independent
- `def-derivation-at-a-point-and-tangent-space` · definition — A derivation at a point and the tangent space
- `lem-a-derivation-annihilates-constant-germs` · lemma — A derivation annihilates constant germs
- `def-coordinate-derivations-at-a-point` · definition — Coordinate derivations at a point
- `lem-coordinate-derivations-are-well-defined-derivations` · lemma — Coordinate derivations are well-defined derivations
- `lem-first-order-hadamard-factorization-near-a-point` · lemma — First-order Hadamard factorization near a point
- `thm-coordinate-derivations-form-a-basis-of-the-tangent-space` · theorem — Coordinate derivations form a basis of the tangent space
- `cor-the-tangent-space-of-an-n-manifold-has-dimension-n` · corollary — The tangent space of an n-manifold has dimension n
- `thm-change-of-coordinate-formula-for-tangent-bases` · theorem — Change-of-coordinate formula for tangent bases
- `def-contact-equivalence-of-smooth-curves-at-a-point` · definition — Contact equivalence of smooth curves at a point
- `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation` · lemma — Contact equivalence is chart-independent and an equivalence relation
- `def-velocity-derivation-of-a-smooth-curve` · definition — The velocity derivation of a smooth curve
- `lem-curve-velocity-depends-only-on-the-contact-class` · lemma — Curve velocity depends only on the contact class
- `thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors` · theorem — Curve contact classes are canonically isomorphic to derivation tangent vectors
- `cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve` · corollary — Every tangent vector is the velocity of a smooth curve
- `def-differential-of-a-smooth-map` · definition — The differential of a smooth map
- `lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ` · lemma — Pullback of a target germ by a smooth map is a well-defined source germ
- `lem-the-differential-sends-derivations-to-derivations-and-is-linear` · lemma — The differential sends derivations to derivations and is linear
- `thm-coordinate-formula-for-the-differential` · theorem — Coordinate formula for the differential
- `thm-the-differential-sends-curve-velocities-to-composite-curve-velocities` · theorem — The differential sends curve velocities to composite curve velocities
- `thm-chain-rule-for-differentials-of-smooth-maps` · theorem — Chain rule for differentials of smooth maps
- `cor-the-differential-of-a-diffeomorphism-is-an-isomorphism` · corollary — The differential of a diffeomorphism is an isomorphism
- `def-differential-of-a-smooth-real-valued-function` · definition — The differential of a smooth real-valued function
- `thm-coordinate-formula-for-the-differential-of-a-function` · theorem — Coordinate formula for the differential of a function
- `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component` · proposition — A smooth function with zero differential is constant on each connected component
- `def-tangent-bundle-as-a-disjoint-union` · definition — The tangent bundle as a disjoint union
- `def-induced-tangent-bundle-chart` · definition — An induced tangent-bundle chart
- `lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses` · lemma — Tangent-bundle chart transitions are smooth with smooth inverses
- `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` · theorem — The tangent bundle has a canonical smooth 2n-manifold structure
- `prop-the-tangent-bundle-projection-and-zero-section-are-smooth` · proposition — The tangent-bundle projection and zero section are smooth
- `def-global-differential-or-tangent-map` · definition — The global differential or tangent map
- `thm-the-global-differential-of-a-smooth-map-is-smooth` · theorem — The global differential of a smooth map is smooth
- `prop-the-tangent-bundle-construction-is-functorial` · proposition — The tangent-bundle construction is functorial
- `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union` · definition — The cotangent space and cotangent bundle as a disjoint union
- `thm-coordinate-differentials-form-the-dual-cotangent-basis` · theorem — Coordinate differentials form the dual cotangent basis
- `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian` · lemma — Cotangent coordinate changes use the inverse-transpose Jacobian
- `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` · theorem — The cotangent bundle has a canonical smooth 2n-manifold structure
- `def-pullback-of-a-cotangent-vector` · definition — Pullback of a cotangent vector
- `prop-cotangent-pullback-is-contravariantly-functorial` · proposition — Cotangent pullback is contravariantly functorial
- `thm-canonical-tangent-and-cotangent-splittings-for-products` · theorem — Canonical tangent and cotangent splittings for products
- `fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p` · false-statement — A tangent vector at p is a vector whose tail is drawn at p
- `fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space` · false-statement — The tangent space is defined only after embedding the manifold in Euclidean space
- `fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector` · false-statement — Every linear functional on smooth germs is a tangent vector
- `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple` · false-statement — Curve velocity coordinates depend on the chart
- `fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix` · false-statement — The differential of a smooth map is its Jacobian matrix
- `fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle` · false-statement — The cotangent bundle uses the same transition matrices as the tangent bundle

### `tangent-cotangent-and-the-differential-examples` — Tangent Cotangent and the Differential — Examples (10 item(s))

- `ex-the-tangent-space-of-euclidean-space` · example — The tangent space of Euclidean space
- `ex-tangent-basis-change-between-cartesian-and-polar-coordinates` · example — Tangent basis change between cartesian and polar coordinates
- `ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates` · example — The differential of a map between spheres in stereographic coordinates
- `ex-the-tangent-space-of-the-sphere-from-curve-velocities` · example — The tangent space of the sphere from curve velocities
- `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` · example — The tangent bundle of the circle is a cylinder
- `ex-the-tangent-bundle-of-euclidean-space-is-trivial` · example — The tangent bundle of Euclidean space is trivial
- `ex-the-cotangent-pullback-of-a-coordinate-one-form` · example — The cotangent pullback of a coordinate one-form
- `ex-the-differential-of-a-constant-map-is-zero` · example — The differential of a constant map is zero
- `cex-polar-coordinates-do-not-give-a-chart-at-the-origin` · counterexample — Polar coordinates do not give a chart at the origin
- `cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector` · counterexample — A chart-dependent coordinate vector is not an intrinsic tangent vector

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
| `cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `311f6e9f92797b7bd464dece402c028c4f042e3d356819e322a6803410caf1ce` |
| `cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `845dd1466a98abc23ae0da6b41d06c3ee67373ee3440e63d2882419d406a80e1` |
| `cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `0a6c52ca492756568106f2924d9f2d555c58f80ed3927cddfeebde05b168fd50` |
| `cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot` | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | gpt-5.6-terra | `bdd0ef0f50bbc5bdf1f4ef90da9d134b956b50602a5a5bb2beef36594642c581` |
| `cex-two-distinct-chain-maps-inducing-the-same-homology-map` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `5d84e717f7a08d32a95142dbde28fe9f3df5015ea1c4c098f364e3feafe108b2` |
| `cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `ba203e88e116f76ce2ff77e8ec8be095a89819ad927de937d5d51d034b227bd4` |
| `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `453bc95f60a1adf3192e8efb821af25757a5e19ca370982ff6134ec68f8c88f0` |
| `cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `406ace7704c8cec2511bc26d7d9190f582e7640825fee54edad1b174b5782653` |
| `cor-smooth-functions-separate-points-from-closed-sets` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `a9b9f6726866b84a4234f281cc3570236753427d653ecbbb6f972480fa7e2174` |
| `cor-the-differential-of-a-diffeomorphism-is-an-isomorphism` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `1f6d21111f03468bf602a10a17da72d535db8d0671702bbc9c33b0b96c3388d0` |
| `cor-the-tangent-space-of-an-n-manifold-has-dimension-n` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `db838a9a330eeda312bd542ba4489c869f3264ae6f6a8691dcd253363588eeff` |
| `def-cholesky-factorisation-with-positive-diagonal` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `76f9a43d1d2a1bbe886e307919b28391300fc7713ed722b73223146def251a69` |
| `def-contact-equivalence-of-smooth-curves-at-a-point` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `b9f6d9555fb4ba2213673f3379d88f74d9dc0312ef20cff418f8605912346842` |
| `def-coordinate-derivations-at-a-point` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `caa8dbbbe0e9e3777978e57126923a38d1e98f66f52bd1d8dfbe6c4262dc9d29` |
| `def-differential-of-a-smooth-real-valued-function` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `e05c2d3b15bde73101d3d6a0d5b7003683e9a4b87603f4640ba71f444080f882` |
| `def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups` | `chain-complexes-and-homology` | gpt-5.6-terra | `2bf4a932643bcdebcc7c42112915abddc2021d80072008ae67783bbe62617872` |
| `def-full-reduced-and-column-pivoted-computational-qr-factorisations` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `485218946c31eedcdf76131bb47e95117514f35435f805235b49405d50e86757` |
| `def-ldu-factorisation` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `b28e6f9bf98c15a03cb94b93186c8377c63cb8b4df8e20ef101af485aac71b7d` |
| `def-normalised-lu-factorisation` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `c68f8b6b9423b8dcb267a059de640dfa7bc9116e8bf5c5ce31f23e3cfb4a99c7` |
| `def-permutation-matrix-partial-pivoting-and-pivot-growth` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `27a1e0fb813ad70cbc6bad8ec671968ca7103951ad2f5edf83be8972527d9713` |
| `def-real-and-complex-givens-transformations` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `79c41fee4c1494a7a93ad4db0bb757933af5b20f06defdb23735f8812eb71312` |
| `def-subcomplex` | `chain-complexes-and-homology` | gpt-5.6-terra | `059aac9b14c85af16c308221a68598df341a556f23e5e9a7e0d6798f7009bda1` |
| `def-the-local-algebra-of-smooth-function-germs` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `6debb284e9a597022ca62488788644433aec5aa87cd5e02e4f9439237b7fdae5` |
| `def-the-standard-flat-function` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `5527e38110442d6f3502a91e86ea4ed94558e16704913d6aefa6d3ed64c967ec` |
| `def-the-standard-smooth-step-function` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `db13c8c3027636e5dfeb9860d40bebe7e32aa203433a739576e5170c9cd2799e` |
| `def-velocity-derivation-of-a-smooth-curve` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `7f5e3bb2131b8269f1114e56a4682197ae621ec817dc71e50bac5b032e5827d8` |
| `ex-a-chain-map-computed-on-cycles-boundaries-and-homology` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `58f2f320017394ab061c80db202175483cdf3cacc55c0123b46706dd16924606` |
| `ex-a-proper-smooth-exhaustion-of-euclidean-space` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `4a28d8f5f03ebf0b2cebeaf638d3c3d52055dbe1ebfa2259beda9519badca349` |
| `ex-a-proper-smooth-exhaustion-of-the-open-unit-ball` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `bb039bc2f5da8cbff537bf9e9649f6682ba0e5c041513b57fbb3cc512c4d3e11` |
| `ex-a-radial-bump-on-euclidean-space` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `82fe3dd23b6832034e80e842f42e5de5c2fabba186ad0a80d4a2ab218f81a4b4` |
| `ex-a-smooth-function-with-a-prescribed-closed-zero-set` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `c28e726b48599fc32cb80c546e0eca0cec1c71a742c405446127a045304a0bd4` |
| `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `c92ec2a9e4a318c6e3e99dd69d600155dd0249b296df5bd0acb4e9a1fb9bd465` |
| `ex-a-split-exact-complex-contracts-degree-by-degree` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `5773870de3ef54a44bc9f8d4946daacde9adbd5bf66d6e2a5efc49ffec5d480b` |
| `ex-a-subcomplex-and-its-quotient-complex` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `8b78037976e5bd866b163942686d83d4cfcbf529ec7e4f8b4f188a86ff50c569` |
| `ex-an-exact-short-sequence-as-an-acyclic-three-term-complex` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `313a9c40936badb375141f280d975d0a918003926c17de2a67b4a428dc1f0646` |
| `ex-block-lu-factorisation-and-a-schur-complement-solve` | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | gpt-5.6-terra | `b3259c98f58f5875f018e15cb4aca265e9c989528c583a170c3bff1d03ff3fba` |
| `ex-euler-poincare-for-a-finite-complex` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `73b2f3d4ad4bc55a4747d511bf451c311701e4a05fca03979b2efb8684c065aa` |
| `ex-givens-qr-on-a-sparse-matrix` | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | gpt-5.6-terra | `3ffef117e74049be80611d5a7a3943d551a6f74976572d25145264b3d776d129` |
| `ex-sparse-gaussian-elimination-can-create-fill-in` | `direct-matrix-factorisations-lu-cholesky-and-qr-examples` | gpt-5.6-terra | `52ecf68cefef8d1c7b7db53f53479c0ee5abca5d2ce42a791482719985df2faa` |
| `ex-tangent-basis-change-between-cartesian-and-polar-coordinates` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `de2c0577a03b122a5d7315bd24810cc85b859afc88b114fa31ebf669285de17b` |
| `ex-the-cotangent-pullback-of-a-coordinate-one-form` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `b0f3a8c4db5828051b2126201533778c26a86d2a49a8733e0d2f77462c4d3873` |
| `ex-the-differential-of-a-constant-map-is-zero` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `4b7563edd85f6d901e5c4131287790690b3a2d3ab335386ed86d9475281be669` |
| `ex-the-standard-compactly-supported-bump-on-the-line` | `smooth-partitions-of-unity-and-exhaustions-examples` | gpt-5.6-terra | `8bf1eae64cdeb274f24315d063dc21ca233906509d0cd499986acf30053bf888` |
| `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `422ba79793788a6d2d880bd3f1b52ee660fae5132e7c0054018086a834b82307` |
| `ex-the-tangent-space-of-the-sphere-from-curve-velocities` | `tangent-cotangent-and-the-differential-examples` | gpt-5.6-terra | `a2d6035521310a47207f6a8c63e8b474c0fb25fc856c23b7c35943a5e0aeb3d9` |
| `ex-the-zero-differential-complex-has-homology-equal-to-each-term` | `chain-complexes-and-homology-examples` | gpt-5.6-terra | `b3309766db97aa6c9a6d8f6cb6e3a3629c052cb0bb5ef12a8b3c1085bb14e542` |
| `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `d13b2fa48888ba1c9bd311b8cac88456821b5bf0f74fcf0605c819227c89d874` |
| `fs-an-additive-functor-commutes-with-homology` | `chain-complexes-and-homology` | gpt-5.6-terra | `2fa66b6854e794b95d83fffa2361a0dbc22d6e8735a9e8a4a1860406fd176a10` |
| `fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `f11aec5695d45889264f55c23a85f5e48a145c1ec3f94551b89f2cc44e3c74db` |
| `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category` | `chain-complexes-and-homology` | gpt-5.6-terra | `981184b7c0a930365d574cc9cf1df8cb8a0b7172ae978436911ab71388dc3ca7` |
| `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `7d3d58c42422f8345f79ac767d0adec4573e56274bb70ca54574081e936f2c22` |
| `fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `8c038c37ed47abccc16274e98b8fe14752ea8b26b56a2dd3a52b623bf2b0a1b1` |
| `fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `a7f2a0beeba9514f28ae762cf5d14f144f3392a289f81100d56fcd82be4c381e` |
| `fs-every-smooth-manifold-is-compact` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `033367c775b9f8c026e6bf3aed1468f7d868f0087af2d22e700bad3352ba5872` |
| `fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `e18ac38ae9037bf71587343f8dd5db2af3785be13890a825eb0418e08cc14ab9` |
| `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries` | `chain-complexes-and-homology` | gpt-5.6-terra | `eb81ebe9e1de466aa1499a8b538e9ad3344e6dfee494fcca9e33a5af3af88a74` |
| `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `304547d3405b969933daa55411c36747c39e15c1dfef6a0c48392ca8643037f4` |
| `lem-chart-bump-at-a-point-with-prescribed-support` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `a0841294232e5ba20224a73186732a0030793606e5679b1a1b91ef62dee5b6bc` |
| `lem-coordinate-derivations-are-well-defined-derivations` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `3cfe66c3785d25601f39772d36757d5e31d240abb21ec3d59646099d63fa0439` |
| `lem-euclidean-bump-for-a-compact-set-inside-an-open-set` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `a7d990de27227cdafe7ef1fcfa2f7cab918a1a5f8fb7a2c43dd6a66581954844` |
| `lem-every-manifold-has-a-compact-exhaustion` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `7ba6f3c0d80d635ff30883fe9016d6c1cc1b222684f2bc25729e0c0af87013c2` |
| `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `79f77bf39b30d153977ae26d1e2141c245ff6d643648cc9224ec3cecd241085b` |
| `lem-exponential-decay-dominates-every-inverse-power` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `5bf66a82a13b592ce4ffc241b4e2548485b95fc48994a038d0b83c8bb7954067` |
| `lem-first-order-hadamard-factorization-near-a-point` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `39e8cc8126e0415b1f52d74a78645eae67bf3d8c5ae5125ad43e3e2c6beb0579` |
| `lem-manifold-bump-for-a-compact-set-inside-an-open-set` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `cefed6bd9b79f7824ed7e443da16b6cfc50335bd053fcdb420e1b28fc03358e3` |
| `lem-normalizing-a-locally-finite-positive-smooth-family` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `f7ae2c77b463b484549077e25e5cf58db9c64a3caa41119cd1633f1c8c9b3b7e` |
| `lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `1447ea5d49f90352db37159bf8d6f2a53b8b225272a154c8e9f2afb809d75b5a` |
| `lem-smooth-bump-between-concentric-euclidean-balls` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `e4a4e1e8a9f2c71fa3055a9cb9111a4028b751a26f1f682eee5671ff824aaeb6` |
| `lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `679913a6e62d34ab61dc10d1825d2c7159d0693f9665c9c33b7a86c936c8f29c` |
| `lem-the-boundary-subobject-factors-through-the-cycle-subobject` | `chain-complexes-and-homology` | gpt-5.6-terra | `673d201e11b9469db5aef711c95e2afb95b81adbac2380e9009ba04a4274ff51` |
| `lem-the-cokernel-of-a-chain-map-is-computed-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `64247d1960e71be840ebf76ec7ffeaa32a7d3aa629884b28e7d38e3544906d34` |
| `lem-the-differential-descends-to-a-quotient-complex` | `chain-complexes-and-homology` | gpt-5.6-terra | `e6eb3790aae371c734a07024e367766d635250736717b436ba3f4f1f37b6c916` |
| `lem-the-kernel-of-a-chain-map-is-computed-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `a88ca53c1e7cccbef450c89b39711d5f73b6eae6b0b8c9684cd5ae23d12f7238` |
| `prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is` | `chain-complexes-and-homology` | gpt-5.6-terra | `d2575673b7a86283a48eed5c8877c079df846e3fa486f5e06f709ac6b4246270` |
| `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `466185fa3f1108f4375f29d998783886d39b3ff86579c7dda9ac0f0fb349e432` |
| `prop-a-subcomplex-is-the-kernel-of-its-quotient-map` | `chain-complexes-and-homology` | gpt-5.6-terra | `c9a55a29204d96f7e08c01a4019d70f9f701a4930abc7bee24022ad4529ef58c` |
| `prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees` | `chain-complexes-and-homology` | gpt-5.6-terra | `a2f626c42f10788b6872374e0cc0615f306fd0e05c3d58ffc7afbec83932b4c0` |
| `prop-cotangent-pullback-is-contravariantly-functorial` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `00266c631943f034baf8d31eb3d4c15bef2015ca8550bb5ff0dd046dcac9bfdf` |
| `prop-finite-biproducts-of-complexes-are-computed-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `d58603445438b69647c963445abd27dfff7e72349aa49dd7e85a25eb3aae05e0` |
| `prop-homology-respects-identities-and-composition` | `chain-complexes-and-homology` | gpt-5.6-terra | `e5fabd54522a86ba56f2638eb685f71bdfa07697d2954b48cb34df4b2202b48e` |
| `prop-images-and-coimages-of-chain-maps-are-computed-degreewise` | `chain-complexes-and-homology` | gpt-5.6-terra | `a7c3fcd9d33878b2259fb95825636555bfd5e457632dc122673f25347fc72b4e` |
| `prop-the-tangent-bundle-construction-is-functorial` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `a5c9ba089836bb9a82c79ed0d6888b9e7edb2c90ac072ff78df3a9b838320fa7` |
| `rem-smooth-and-topological-partition-theorems-have-different-proof-costs` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `06da19621008691a456fb33abdd2eeab501c4f35b99443e1b327f3f0f61732af` |
| `thm-a-locally-finite-sum-of-smooth-functions-is-smooth` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `aa416cb39639bd0c576c68d159cc8912cb8f2608672f40dd607050767ce2481d` |
| `thm-an-exact-functor-commutes-with-homology` | `chain-complexes-and-homology` | gpt-5.6-terra | `c8ec438e557667047b2e24731a532206d162db603dd43a5cd996cd7afc8ca5cd` |
| `thm-block-lu-factorisation-via-an-invertible-leading-block` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `7e6735262eef1e80f2e47e5c93bc0c77b5ffa2dcb6ed68368fc36d71b0cccb45` |
| `thm-canonical-tangent-and-cotangent-splittings-for-products` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `347cd8f30805a6fa446d007d930b51b4ea550204f5e335076a18990c3b528fd4` |
| `thm-change-of-coordinate-formula-for-tangent-bases` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `02624d4baa34172a3d57b6f131ee93e07ff3073e6d7b81e114f123b1667ef0ab` |
| `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `431c24920a27c33de2b5aaef48b8c9b4cf550a72ef46d8cacb1f45e85ef5af38` |
| `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `b3af199a2a27224f8fb541508e03f744a88716938398ef385067ec5744aceec6` |
| `thm-coordinate-derivations-form-a-basis-of-the-tangent-space` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `2b3ab840159dea580079096d0d49756b13973454e7cf905ffcc0cd7599bf913e` |
| `thm-coordinate-differentials-form-the-dual-cotangent-basis` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `6c91f24b4834e15c9328a87f07c707900f915a4d9a436189ec8630cf72b3df86` |
| `thm-coordinate-formula-for-the-differential` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `41690be3ff07b7adbeb5caef650027fbf706c7f55823f32c12f76bba225a6ac0` |
| `thm-coordinate-formula-for-the-differential-of-a-function` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `b8b3d56773e1c39578ece9f5bf038f9261beb45f91438c7e87a371f036c72a9f` |
| `thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `a7cfdfdce7145b35e1e1e3d59d4280d0d9bfe7a462719ce11848a7754ecc248c` |
| `thm-euler-poincare-formula-for-finite-free-complexes` | `chain-complexes-and-homology` | gpt-5.6-terra | `b79c20b025a31b58c10a0df3f8a129137f4345156629637b15a7f9aa16731d7c` |
| `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `6727baf30d7ea1afd46a879e218a137b6ba175a87d00c7c673e248e98afc6b77` |
| `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `9854ebf024f7839a2d6a365b05b40bdcc5965fa54c43554d9a750b9abf5b8b66` |
| `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `275c552ee222b4b18d56e85eeb8bf4bd8323a282f02b805af22f14d551801acb` |
| `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `bc8038aba55fa568aa354f5747b5137622363adec72b429bff5e01e672c54d5c` |
| `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `c7f28745a7d20a86f313c8d5ed4435d851fa0da3db34942ce417dabde1a6c3a7` |
| `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `de3b35b66982f6d369db207ddb6f0007ff5ca608ac58dd6a703731a25c7a7b3b` |
| `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `91e39b6a4eaae6404c6137a4ae27978d62b686f18ce1c20958d3d3abd645d4a7` |
| `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `8535d358acf78d83220674190c01cf7d51601ac9ab35031ef9eeee3b67439c87` |
| `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `386f2e60f4243c98790d9bb0f11c78babb66ff77796ada0d3d7063ad6487b13c` |
| `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `9522d1ded468208e2daa6fadaadef8ba006d2de3b38b0cf9cc8fef92af9d5c79` |
| `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `969873a5fd85ab91b997ab8f7165a9bcc3a14af5cbfd5429849b5979cf1954d2` |
| `thm-smooth-partitions-of-unity-exist-on-manifolds` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `8f0a13657f1e5b956f036a22d07691893348c9d87349e6c5e9789b8d1c3ec81d` |
| `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `1927d28a499d83b2b598c7d382c1e0b6e1e32dfa0ceb32317d07f651cb3b20eb` |
| `thm-the-category-of-complexes-in-an-abelian-category-is-abelian` | `chain-complexes-and-homology` | gpt-5.6-terra | `29f47c689bf7f184d3677523db3a3bf379cdc2a7fb14418cc94c9cd9fb627259` |
| `thm-the-category-of-complexes-in-an-additive-category-is-additive` | `chain-complexes-and-homology` | gpt-5.6-terra | `f828d7555cd30a4f81847437875360eacee807b91755d467905b2746c90b6095` |
| `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `245f30670c3bbd80e38d95a929a14ff9c139cf45af9de5412c812795373552b4` |
| `thm-the-first-isomorphism-theorem-for-complexes` | `chain-complexes-and-homology` | gpt-5.6-terra | `bd062338462ba02b037091aadc96aaa8d0e080c0a2688c7afe9ad94d70d54f35` |
| `thm-the-global-differential-of-a-smooth-map-is-smooth` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `277a97507a849b41ace0863cce0bc413915408337f7524b1c5595e1a2694e6d1` |
| `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` | `smooth-partitions-of-unity-and-exhaustions` | gpt-5.6-terra | `e9ade857dd86c91fa98fb9f1931fe4065ddd5286ea592d8815ef837504f9c4c7` |
| `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `tangent-cotangent-and-the-differential` | gpt-5.6-terra | `23d8bd8207cbf51c449a753421b0cf713b16555c2d43b6993b54c890c9a1ffce` |
| `thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero` | `direct-matrix-factorisations-lu-cholesky-and-qr` | gpt-5.6-terra | `3ff77c08ccad587f5c71dc353c465c08caa4eade88ce8df050383c6a7e856b0a` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-24`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-24-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-24-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-24-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-24-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
