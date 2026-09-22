# Step 7 adjudication — group **c**, run `phase-2-remaining-27`

You are the group Alpha for batches **1**, **2**, **5**: 6 A/B pair(s), 12 page(s), 167 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-remaining-27-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `hilbert-space-geometry-and-riesz-representation` | A | functional-analysis | 288.071 | `banach-valued-integration-and-the-radon-nikodym-property`, `weak-mixing-and-the-chacon-transformation` |
| 1 | `hilbert-space-geometry-and-riesz-representation-examples` | B | functional-analysis | 288.072 | `hilbert-space-geometry-and-riesz-representation` |
| 1 | `orthonormal-bases-parseval-and-fourier-series` | A | functional-analysis | 288.073 | `hilbert-space-geometry-and-riesz-representation`, `measure-preserving-systems-and-mixing-criteria` |
| 1 | `orthonormal-bases-parseval-and-fourier-series-examples` | B | functional-analysis | 288.074 | `orthonormal-bases-parseval-and-fourier-series` |
| 2 | `compact-operators-and-riesz-schauder-theory` | A | functional-analysis | 288.075 | `orthonormal-bases-parseval-and-fourier-series` |
| 2 | `compact-operators-and-riesz-schauder-theory-examples` | B | functional-analysis | 288.076 | `compact-operators-and-riesz-schauder-theory` |
| 2 | `square-integrable-kernels-and-hilbert-schmidt-compactness` | A | functional-analysis | 288.0752 | `compact-operators-and-riesz-schauder-theory`, `orthonormal-bases-parseval-and-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `measure-preserving-systems-and-mixing-criteria` |
| 2 | `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` | B | functional-analysis | 288.0754 | `square-integrable-kernels-and-hilbert-schmidt-compactness` |
| 5 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | A | functional-analysis | 288.083 | `gelfand-theory-and-commutative-c-star-algebras` |
| 5 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | B | functional-analysis | 288.084 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |
| 5 | `spectral-measures-and-borel-functional-calculus` | A | functional-analysis | 288.085 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |
| 5 | `spectral-measures-and-borel-functional-calculus-examples` | B | functional-analysis | 288.086 | `spectral-measures-and-borel-functional-calculus` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hilbert-space-geometry-and-riesz-representation` — Hilbert Space Geometry and Riesz Representation (26 item(s))

- `def-real-and-complex-inner-product-space` · definition — Real and complex inner-product spaces
- `thm-cauchy-schwarz-in-an-inner-product-space` · theorem — Cauchy–Schwarz in an inner-product space
- `cor-inner-product-induces-a-norm` · corollary — An inner product induces a norm
- `thm-parallelogram-law` · theorem — The parallelogram law
- `thm-jordan-von-neumann-polarization` · theorem — Jordan–von Neumann polarization
- `def-hilbert-space` · definition — Hilbert space
- `lem-inner-product-is-jointly-continuous` · lemma — The inner product is jointly continuous
- `thm-completion-of-an-inner-product-space-is-hilbert` · theorem — Completion of an inner-product space is Hilbert
- `def-orthogonality-and-orthogonal-complement` · definition — Orthogonality and orthogonal complement
- `lem-pythagorean-theorem-and-finite-orthogonal-sums` · lemma — Pythagoras and finite orthogonal sums
- `lem-orthogonal-complement-is-closed` · lemma — Orthogonal complements are closed
- `lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy` · lemma — A minimizing sequence in a closed convex set is Cauchy
- `thm-projection-onto-a-nonempty-closed-convex-set` · theorem — Projection onto a nonempty closed convex set
- `thm-hilbert-projection-variational-characterization` · theorem — Variational characterization of Hilbert projection
- `thm-orthogonal-decomposition-by-a-closed-subspace` · theorem — Orthogonal decomposition by a closed subspace
- `def-hilbert-orthogonal-projection` · definition — Hilbert orthogonal projection
- `lem-orthogonal-projection-is-linear-self-adjoint-contractive` · lemma — Hilbert orthogonal projections are linear, symmetric and contractive
- `thm-double-orthogonal-complement-is-closure` · theorem — Double orthogonal complement is closure
- `thm-riesz-representation-for-hilbert-space` · theorem — Riesz representation for Hilbert spaces
- `cor-hilbert-spaces-are-reflexive` · corollary — Hilbert spaces are reflexive
- `def-hilbert-space-adjoint` · definition — Hilbert-space adjoint
- `thm-hilbert-adjoint-properties` · theorem — Hilbert-adjoint identities
- `def-self-adjoint-positive-unitary-and-normal-operator` · definition — Self-adjoint, positive, unitary and normal operators
- `lem-kernel-range-orthogonality-for-hilbert-adjoints` · lemma — Kernel–range orthogonality for Hilbert adjoints
- `rem-l2-projection-agreement` · remark — Agreement with concrete L2 projection
- `rem-lax-milgram-owned-by-pde` · remark — Lax–Milgram is owned by the PDE track

### `hilbert-space-geometry-and-riesz-representation-examples` — Hilbert Space Geometry and Riesz Representation — Examples (8 item(s))

- `ex-standard-inner-products-on-kn-ell-two-and-l-two` · example — Standard Hilbert-space inner products
- `ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix` · example — Finite-dimensional projection by a Gram matrix
- `ex-projection-onto-constants-is-the-mean` · example — Projection onto constants is the mean
- `ex-distance-to-a-closed-subspace` · example — Distance to a closed subspace
- `cex-an-inner-product-space-need-not-be-complete` · counterexample — An inner-product space need not be complete
- `cex-a-norm-need-not-satisfy-the-parallelogram-law` · counterexample — A norm need not satisfy the parallelogram law
- `cex-nearest-point-map-to-a-convex-set-need-not-be-linear` · counterexample — Nearest-point maps to convex sets need not be linear
- `ex-adjoints-of-shifts-multiplication-and-integral-operators` · example — Adjoints of shifts, multiplication and integral operators

### `orthonormal-bases-parseval-and-fourier-series` — Orthonormal Bases Parseval and Fourier Series (24 item(s))

- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` · definition — Orthonormal family complete orthonormal system and hilbert basis
- `lem-finite-bessel-inequality` · lemma — Finite bessel inequality
- `def-square-summable-family-on-an-arbitrary-index-set` · definition — Square summable family on an arbitrary index set
- `thm-bessel-inequality-for-an-arbitrary-orthonormal-family` · theorem — Bessel inequality for an arbitrary orthonormal family
- `lem-only-countably-many-fourier-coefficients-are-nonzero` · lemma — Only countably many fourier coefficients are nonzero
- `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums` · lemma — Square summable orthogonal families have norm convergent finite sums
- `thm-parseval-equivalences-for-a-complete-orthonormal-family` · theorem — Parseval equivalences for a complete orthonormal family
- `thm-hilbert-space-fourier-expansion` · theorem — Hilbert space fourier expansion
- `thm-existence-of-a-maximal-orthonormal-family` · theorem — Existence of a maximal orthonormal family
- `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set` · theorem — Hilbert space with a given orthonormal basis is ell two of the index set
- `thm-separable-hilbert-space-has-a-countable-orthonormal-basis` · theorem — Separable hilbert space has a countable orthonormal basis
- `cor-separable-infinite-dimensional-hilbert-space-is-ell-two` · corollary — Separable infinite dimensional hilbert space is ell two
- `lem-l-two-with-the-integral-pairing-is-a-hilbert-space` · lemma — L two with the integral pairing is a hilbert space
- `def-the-one-dimensional-torus-and-normalized-haar-integral` · definition — The one dimensional torus and normalized haar integral
- `lem-finite-tori-are-compact-hausdorff-character-spaces` · lemma — Finite tori are compact Hausdorff spaces separated by characters
- `def-fourier-coefficients-and-trigonometric-polynomials` · definition — Fourier coefficients and trigonometric polynomials
- `lem-trigonometric-characters-are-orthonormal` · lemma — Trigonometric characters are orthonormal
- `cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions` · corollary — Trigonometric polynomials are dense in continuous periodic functions
- `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori` · lemma — Continuous periodic functions are dense in l p of finite tori
- `thm-trigonometric-system-is-complete-in-l-two-of-the-torus` · theorem — Trigonometric system is complete in l two of the torus
- `thm-l-two-fourier-series-converges-in-mean-square` · theorem — L two fourier series converges in mean square
- `thm-parseval-identity-for-fourier-series` · theorem — Parseval identity for fourier series
- `thm-riesz-fischer-for-fourier-coefficients` · theorem — Riesz fischer for fourier coefficients
- `thm-fourier-basis-and-parseval-on-the-n-torus` · theorem — Fourier basis and parseval on the n torus

### `orthonormal-bases-parseval-and-fourier-series-examples` — Orthonormal Bases Parseval and Fourier Series — Examples (5 item(s))

- `ex-standard-basis-of-ell-two` · example — Standard basis of ell two
- `ex-legendre-polynomials-from-gram-schmidt` · example — Legendre polynomials from gram schmidt
- `ex-haar-orthonormal-basis-of-l-two-zero-one` · example — Haar orthonormal basis of l two zero one
- `ex-fourier-series-of-a-sawtooth` · example — Fourier series of a sawtooth
- `ex-fourier-series-of-a-square-wave` · example — Fourier series of a square wave

### `compact-operators-and-riesz-schauder-theory` — Compact Operators and Riesz Schauder Theory (26 item(s))

- `def-compact-linear-operator` · definition — Compact linear operator
- `lem-dependent-choice-implies-countable-choice` · lemma — Dependent choice implies countable choice
- `thm-sequential-characterization-of-compact-operators` · theorem — Sequential characterization of compact operators
- `lem-finite-rank-operators-are-compact` · lemma — Finite rank operators are compact
- `lem-compositions-with-a-compact-operator-are-compact` · lemma — Compositions with a compact operator are compact
- `lem-linear-combinations-of-compact-operators-are-compact` · lemma — Linear combinations of compact operators are compact
- `thm-norm-limit-of-compact-operators-is-compact` · theorem — Norm limit of compact operators is compact
- `def-approximable-operator` · definition — Approximable operator
- `thm-schauder-compact-adjoint-theorem` · theorem — Schauder compact adjoint theorem
- `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences` · theorem — Compact operator sends weakly convergent sequences to norm convergent sequences
- `lem-kernel-of-identity-minus-compact-is-finite-dimensional` · lemma — Kernel of identity minus compact is finite dimensional
- `lem-range-of-identity-minus-compact-is-closed` · lemma — Range of identity minus compact is closed
- `lem-riesz-schauder-ascent-and-descent-stabilize` · lemma — Riesz schauder ascent and descent stabilize
- `thm-fredholm-alternative-for-identity-minus-compact` · theorem — Fredholm alternative for identity minus compact
- `lem-neumann-series-and-small-perturbations-of-bounded-inverses` · lemma — Neumann series and small perturbations of bounded inverses
- `def-spectrum-and-resolvent-of-a-bounded-operator` · definition — Spectrum and resolvent of a bounded operator
- `thm-riesz-schauder-spectrum-of-a-compact-operator` · theorem — Riesz schauder spectrum of a compact operator
- `cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation` · corollary — Spectrum of a compact operator is countable with only zero as possible accumulation
- `def-fredholm-operator-cokernel-and-index` · definition — Fredholm operator cokernel and index
- `lem-fredholm-splitting-and-parametrix` · lemma — Fredholm splitting and parametrix
- `lem-a-compact-remainder-estimate-forces-closed-range` · lemma — A compact remainder estimate forces closed range
- `thm-atkinson` · theorem — Atkinson
- `thm-fredholm-index-is-additive` · theorem — Fredholm index is additive
- `thm-fredholm-index-is-locally-constant` · theorem — Fredholm index is locally constant
- `thm-fredholm-index-is-stable-under-compact-perturbations` · theorem — Fredholm index is stable under compact perturbations
- `cor-lambda-identity-minus-compact-has-index-zero` · corollary — Lambda identity minus compact has index zero

### `compact-operators-and-riesz-schauder-theory-examples` — Compact Operators and Riesz Schauder Theory — Examples (7 item(s))

- `ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero` · example — Diagonal operator on ell p is compact iff diagonal tends to zero
- `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval` · example — Continuous kernel integral operator is compact on c of an interval
- `cex-identity-is-compact-iff-the-space-is-finite-dimensional` · counterexample — Identity is compact iff the space is finite dimensional
- `cex-a-compact-operator-can-have-nondense-range` · counterexample — A compact operator can have nondense range
- `ex-fredholm-alternative-for-an-integral-equation` · example — Fredholm alternative for an integral equation
- `cex-compactness-is-not-preserved-by-strong-operator-limits` · counterexample — Compactness is not preserved by strong operator limits
- `rem-approximation-property-controls-finite-rank-density-in-compact-operators` · remark — Approximation property controls finite rank density in compact operators

### `square-integrable-kernels-and-hilbert-schmidt-compactness` — Square-Integrable Kernels and Hilbert–Schmidt Compactness (5 item(s))

- `def-hilbert-schmidt-operator` · definition — Hilbert–Schmidt operator and Hilbert–Schmidt norm
- `thm-hilbert-schmidt-norm-is-basis-independent` · theorem — The Hilbert–Schmidt norm is basis independent
- `thm-hilbert-schmidt-operators-are-compact` · theorem — Hilbert–Schmidt operators are compact
- `lem-product-rectangle-kernels-are-dense-in-product-l-two` · lemma — Product rectangle kernels are dense in product L two
- `thm-l-two-kernels-give-hilbert-schmidt-operators` · theorem — L two kernels give Hilbert–Schmidt operators

### `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` — Square-Integrable Kernels and Hilbert–Schmidt Compactness: Examples (4 item(s))

- `ex-square-integrable-separable-product-kernel` · example — A square-integrable separable product kernel
- `ex-square-integrable-kernel-without-continuous-representative` · example — A square-integrable kernel without a continuous representative
- `ex-square-integrable-kernel-finite-rank-truncations` · example — Finite-rank truncations of a square-integrable kernel
- `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two` · example — A Hilbert–Schmidt kernel operator is compact on L two

### `continuous-functional-calculus-for-self-adjoint-and-normal-operators` — Continuous Functional Calculus for Self Adjoint and Normal Operators (26 item(s))

- `lem-bounded-hilbert-operators-form-a-c-star-algebra` · lemma — Bounded Hilbert operators form a C star algebra
- `lem-spectrum-of-a-self-adjoint-operator-is-real` · lemma — Spectrum of a self adjoint operator is real
- `lem-spectrum-of-a-positive-operator-is-nonnegative` · lemma — Spectrum of a positive operator is nonnegative
- `def-order-on-bounded-self-adjoint-operators` · definition — Order on bounded self adjoint operators
- `def-c-star-algebra-generated-by-a-normal-operator` · definition — C star algebra generated by a normal operator
- `cor-normal-operator-norm-equals-spectral-radius` · corollary — Normal operator norm equals spectral radius
- `cor-normal-operator-with-zero-spectrum-is-zero` · corollary — Normal operator with zero spectrum is zero
- `def-isometry-coisometry-and-partial-isometry` · definition — Isometry coisometry and partial isometry
- `thm-partial-isometry-characterizations` · theorem — Partial isometry characterizations
- `def-numerical-range-and-numerical-radius` · definition — Numerical range and numerical radius
- `thm-numerical-radius-is-an-equivalent-operator-norm` · theorem — Numerical radius is an equivalent operator norm
- `lem-polynomial-calculus-is-isometric-for-self-adjoint-operators` · lemma — Polynomial calculus is isometric for self adjoint operators
- `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators` · theorem — Continuous functional calculus for bounded self adjoint operators
- `lem-spectral-permanence-for-unital-c-star-subalgebras` · lemma — Spectral permanence for unital c star subalgebras
- `lem-character-space-of-generated-normal-algebra-is-operator-spectrum` · lemma — Character space of generated normal algebra is operator spectrum
- `thm-continuous-functional-calculus-for-bounded-normal-operators` · theorem — Continuous functional calculus for bounded normal operators
- `thm-spectral-mapping-for-continuous-normal-functional-calculus` · theorem — Spectral mapping for continuous normal functional calculus
- `thm-continuous-functional-calculus-properties` · theorem — Continuous functional calculus properties
- `thm-self-adjoint-norm-and-spectrum-extrema` · theorem — Self adjoint norm and spectrum extrema
- `thm-positive-square-root` · theorem — Positive square root
- `def-absolute-value-of-a-bounded-operator` · definition — Absolute value of a bounded operator
- `thm-polar-decomposition-for-bounded-operators` · theorem — Polar decomposition for bounded operators
- `thm-bounded-normal-operator-abstract-spectral-theorem` · theorem — Bounded normal operator abstract spectral theorem
- `rem-positive-square-root-and-covariance-matrices` · remark — Positive square root and covariance matrices
- `lem-two-dimensional-numerical-range-is-convex` · lemma — Two dimensional numerical range is convex
- `thm-toeplitz-hausdorff` · theorem — Toeplitz hausdorff

### `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` — Continuous Functional Calculus for Self Adjoint and Normal Operators — Examples (7 item(s))

- `ex-functional-calculus-for-a-diagonal-operator` · example — Functional calculus for a diagonal operator
- `ex-functional-calculus-for-a-multiplication-operator` · example — Functional calculus for a multiplication operator
- `ex-square-root-and-absolute-value-of-a-matrix` · example — Square root and absolute value of a matrix
- `ex-polar-decomposition-of-the-unilateral-shift` · example — Polar decomposition of the unilateral shift
- `cex-a-quasinilpotent-operator-need-not-be-zero` · counterexample — A quasinilpotent operator need not be zero
- `cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections` · counterexample — Continuous calculus does not contain discontinuous spectral projections
- `cex-self-adjointness-cannot-be-dropped-from-the-order-calculus` · counterexample — Self adjointness cannot be dropped from the order calculus

### `spectral-measures-and-borel-functional-calculus` — Spectral Measures and Borel Functional Calculus (21 item(s))

- `def-projection-valued-measure` · definition — Projection valued measure
- `lem-weak-and-strong-additivity-of-orthogonal-projections` · lemma — Weak and strong additivity of orthogonal projections
- `lem-scalar-and-complex-measures-from-a-pvm` · lemma — Scalar and complex measures from a pvm
- `def-integral-of-a-simple-function-against-a-pvm` · definition — Integral of a simple function against a pvm
- `lem-simple-pvm-integral-is-representation-independent` · lemma — Simple pvm integral is representation independent
- `thm-bounded-borel-pvm-integral` · theorem — Bounded borel pvm integral
- `thm-pvm-integral-is-a-star-homomorphism` · theorem — Pvm integral is a star homomorphism
- `lem-continuous-functional-calculus-produces-a-regular-pvm` · lemma — Continuous functional calculus produces a regular PVM
- `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` · theorem — Spectral theorem for bounded normal operators pvm form
- `def-borel-functional-calculus-for-a-bounded-normal-operator` · definition — Borel functional calculus for a bounded normal operator
- `thm-borel-functional-calculus-for-bounded-normal-operators` · theorem — Borel functional calculus for bounded normal operators
- `cor-spectral-projections-and-resolution-of-the-identity` · corollary — Spectral projections and resolution of the identity
- `thm-support-and-uniqueness-of-the-spectral-measure` · theorem — Support and uniqueness of the spectral measure
- `def-cyclic-vector-and-cyclic-normal-operator` · definition — Cyclic vector and cyclic normal operator
- `thm-cyclic-spectral-representation` · theorem — Cyclic spectral representation
- `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces` · lemma — Maximal orthogonal family of cyclic reducing subspaces
- `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem` · theorem — Multiplication operator form of the bounded normal spectral theorem
- `def-spectral-multiplicity-function-in-the-separable-case` · definition — Spectral multiplicity function in the separable case
- `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension` · lemma — Unitary intertwiners preserve direct-integral fiber dimension
- `thm-unitary-equivalence-classified-by-measure-class-and-multiplicity` · theorem — Unitary equivalence classified by measure class and multiplicity
- `thm-stone-resolvent-formula-for-spectral-projections` · theorem — Stone resolvent formula for spectral projections

### `spectral-measures-and-borel-functional-calculus-examples` — Spectral Measures and Borel Functional Calculus — Examples (8 item(s))

- `ex-pvm-of-a-diagonal-normal-operator` · example — Pvm of a diagonal normal operator
- `ex-pvm-of-a-multiplication-operator` · example — Pvm of a multiplication operator
- `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` · example — Spectral projection of an isolated eigenvalue agrees with the riesz projection
- `ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator` · example — Sign and positive negative parts of a self adjoint operator
- `ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function` · example — Borel functional calculus defines a discontinuous characteristic function
- `cex-continuous-functional-calculus-cannot-produce-every-spectral-projection` · counterexample — Continuous functional calculus cannot produce every spectral projection
- `cex-a-normal-operator-need-not-have-any-eigenvectors` · counterexample — A normal operator need not have any eigenvectors
- `rem-direct-integrals-and-general-multiplicity-theory` · remark — Direct integrals and general multiplicity theory

## Your seams

Your pages depend on another group's:

- `continuous-functional-calculus-for-self-adjoint-and-normal-operators` requires `gelfand-theory-and-commutative-c-star-algebras` (group b, batch 4)

Another group's pages depend on yours:

- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (group a) requires your `hilbert-space-geometry-and-riesz-representation`
- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (group a) requires your `orthonormal-bases-parseval-and-fourier-series`
- `unbounded-self-adjoint-operators-and-stones-theorem` (group d) requires your `spectral-measures-and-borel-functional-calculus`
- `banach-space-differential-calculus-and-banach-manifolds` (group e) requires your `compact-operators-and-riesz-schauder-theory`
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (group e) requires your `compact-operators-and-riesz-schauder-theory`
- `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (group e) requires your `square-integrable-kernels-and-hilbert-schmidt-compactness`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-remaining-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `phase-2-remaining-27`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow WORKFLOW.md's 7.1–7.10 protocol
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
