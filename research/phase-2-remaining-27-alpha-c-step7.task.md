# Step 7 adjudication — group **c**, run `phase-2-remaining-27`

You are the group Alpha for batches **1**, **2**, **5**: 6 A/B pair(s), 12 page(s), 167 item(s), 95 open rejection(s) over 95 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-remaining-27-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

8 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-dec329ad2223a8dab75d6eb1 · `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`** (from group a, presentation) — The numbered claims in the Statement are not rendered as a list: claim 1 is run into the lead sentence ('...; with it $L^2(\mu)$ is a real Hilbert space ([[def-hilbert-space]]). 2. On **complex** $L^2(\mu;\mathbb C)$ ...'), so the first item has no marker and the second is inline. Purely presentational, but the statement does not read as the intended two-part claim.
- **s8a-cd3570ad251db24d3fb862cd · `ex-standard-basis-of-ell-two`** (from group c, gap-a-reader-closes) — The example claims that l^2(N,F) is complete and points to the inline fact [A3], but [A3] is conditional on the Cauchy sequence already having coordinate-wise limits; the completeness of the scalar field F that produces those limits, hence the completeness of l^2, is not supplied by any cited item (the dependency list omits the completeness/Riesz-Fischer supplier that the sibling example ex-standard-inner-products-on-kn-ell-two-and-l-two cites for exactly this claim).
- **s8a-740bb14ed6917643818a401c · `def-square-summable-family-on-an-arbitrary-index-set`** (from group c, gap-a-reader-closes) — In the proof that every absolutely summable family is summable, the justification sentence says that taking F = G = F_0 in relation (2) gives B_{F_0} - A_{F_0} <= epsilon. Relation (2) at F = G = F_0 gives 0 <= S - S_{F_0}, not the diameter bound; the intended bound follows from (2) for arbitrary finite F,G containing F_0. The argument is correct but the displayed justification is not.
- **s8a-ec4bab00c6600c72eca519a1 · `lem-two-dimensional-numerical-range-is-convex`** (from group c, gap-a-reader-closes) — The statement covers complex subspaces of dimension at most two, so V = {0} is included, but step 1.1 asserts that for dim V <= 1 the numerical range is a single scalar; for dim V = 0 the unit sphere is empty, so that numerical range is empty (convex, but not a singleton), and the boundary case is not addressed.
- **s8a-dd636e0bfc93c0663492b8c6 · `def-cyclic-vector-and-cyclic-normal-operator`** (from group c, presentation) — The sentence 'cyclicity uses the unitary operator T together with its adjoint, never only the nonnegative powers of T' is inaccurate: T is only assumed normal, not unitary; the intended content is that the adjoint pair (T,T*) generates the algebra.
- **s8a-40965c6dceb6f12bd4527b4b · `def-hilbert-space-adjoint`** (from group c, presentation) — The closing sentence 'it is a different operator from T' whenever the Riesz maps are conjugate-linear' compares T*: K to H with T': K* to H*, which have different domains and codomains, so the stated criterion is not a meaningful distinction.
- **s8a-c5897e92e6f8d22700af2267 · `thm-hilbert-projection-variational-characterization`** (from group c, presentation) — The statement carries 'Assume the Axiom of Countable Choice' although the equivalence is choice-free once p in C is given, and the proof itself says the hypothesis is used only to invoke the existence theorem for nearest points; a consumer may wrongly read the equivalence as requiring AC_w.
- **s8a-8e970f8ab86eae17d8bfa11a · `def-spectral-multiplicity-function-in-the-separable-case`** (from group c, presentation) — The definition fixes multiplicity data from a chosen cyclic decomposition and asserts that the measure class of mu and the a.e. class of m are independent of that choice, while locating the justification in items later on the same page; a judge should confirm the classification theorem, which is stated through these data, does not presuppose the independence it is invoked to justify (I found no circular use, but the organisation invites the objection).

Append one owning-group disposition per warning to `research/phase-2-remaining-27-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-normal-operator-need-not-have-any-eigenvectors` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `399007ad318a682a5d1345937bc11e0f984b86e2fdbca62b59e5b538cd687096` |
| `cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | gpt-5.6-terra | `4fedcf64661ea005c77a90eba49d91f17989b4b005567f8afcb94007cc3ccda9` |
| `cex-identity-is-compact-iff-the-space-is-finite-dimensional` | `compact-operators-and-riesz-schauder-theory-examples` | gpt-5.6-terra | `c7be5b98eb9eb90a9ba6e9479e3f44a17abd86ef009efd762a3974896b5e82fa` |
| `cex-self-adjointness-cannot-be-dropped-from-the-order-calculus` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | gpt-5.6-terra | `4a3c829b873271e99eeffe07e756fed4daf216b38fabf6fdce0456f1fac0c4a5` |
| `cor-spectral-projections-and-resolution-of-the-identity` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `a4bd82c1883f4c08709e01f3594dbdfa20e91138d0483a2261a735990069e0a3` |
| `def-borel-functional-calculus-for-a-bounded-normal-operator` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `d0eda8ff5bcdd281fde7a8c47621199d3d43bec0ee42022780abfb3173e23985` |
| `def-c-star-algebra-generated-by-a-normal-operator` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `6c787256818820f3549333e2a22aa7f792ac6b7c665489324e4c0856ea76359b` |
| `def-cyclic-vector-and-cyclic-normal-operator` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `c9e8ad34e68faa6b0ffe0b500c55c3ab2de750a7477d7919fdff802d88b694ab` |
| `def-fredholm-operator-cokernel-and-index` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `6c57d6da737f212e7b412f255a4a8c783c40e09409480832404d6a7cdba88f78` |
| `def-integral-of-a-simple-function-against-a-pvm` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `fc9f8e802fdacd9f9bf1c52e6c145c11c66dc4f2780ef60c4298231bf3489445` |
| `def-order-on-bounded-self-adjoint-operators` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `4bd534d52e790b19b6cf7f9519aa11a8e0f634c34676ba85b8e65778bbab89bf` |
| `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `9552c5ef5c423a9c89a8bca21dd67461de43e5a1bedc864e00d6894744801f24` |
| `def-projection-valued-measure` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `48ada29d868e38ef4205a34bd467f26055ef47ab7393a044cc0f687e24cfc0d8` |
| `def-spectrum-and-resolvent-of-a-bounded-operator` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `85d771d4c96844a8df2d2409d48c2ec2f92bd655dc2eb189ed8fe43c4424c298` |
| `def-square-summable-family-on-an-arbitrary-index-set` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `9f5c9333849e616d8da8e000dc9fd47d79a3ea964fc1446ca6259c15796d95aa` |
| `def-the-one-dimensional-torus-and-normalized-haar-integral` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `764394ac8f629e1ebf7297309b92d4c4740ece4781953f35975e5148f3e673c0` |
| `ex-adjoints-of-shifts-multiplication-and-integral-operators` | `hilbert-space-geometry-and-riesz-representation-examples` | gpt-5.6-terra | `b1a3dcabe38f73ab3b11b8dcff0833ef6ae8aa6597f28e9cb4a19472416985f8` |
| `ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `d905cbf9a59e71d849888adfaa4db984828b0bafec5d5a7c6d6c6d427a05c003` |
| `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval` | `compact-operators-and-riesz-schauder-theory-examples` | gpt-5.6-terra | `34b1b40518e394ff0af9bb762a10a87b73bc4e6d4cfe079ae4fc43f774f8136e` |
| `ex-fourier-series-of-a-sawtooth` | `orthonormal-bases-parseval-and-fourier-series-examples` | gpt-5.6-terra | `2a5945e914f648a40c7891da1685d16e3cacf3436a1df57e41ef60d444c62c4c` |
| `ex-fourier-series-of-a-square-wave` | `orthonormal-bases-parseval-and-fourier-series-examples` | gpt-5.6-terra | `e6aca50aba2b354e5831e0977544dc8eeca229588cb4f42e4a72434630d32014` |
| `ex-fredholm-alternative-for-an-integral-equation` | `compact-operators-and-riesz-schauder-theory-examples` | gpt-5.6-terra | `b39dfec6245dc7b0305c98d5d4ead3818fd068f4e1387c40d5d40c4eee19ebcf` |
| `ex-functional-calculus-for-a-multiplication-operator` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | gpt-5.6-terra | `1f00d523a0b38516e7467b4c83a3f0059835359989297ffd98aac74984d98e1c` |
| `ex-haar-orthonormal-basis-of-l-two-zero-one` | `orthonormal-bases-parseval-and-fourier-series-examples` | gpt-5.6-terra | `5ebdaf1985d60f18a5cea8f29f781cb3f81e73a79bd0e1dd434c64d0700cbf23` |
| `ex-legendre-polynomials-from-gram-schmidt` | `orthonormal-bases-parseval-and-fourier-series-examples` | gpt-5.6-terra | `d2de4614fe510272f815bfaa646397d4986ae0fa9e23444ccdfd6eea0d29ba13` |
| `ex-pvm-of-a-diagonal-normal-operator` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `44e32d16a3b3203de5a4ec0336ca560098830bba9981da01973314c7cd57e691` |
| `ex-pvm-of-a-multiplication-operator` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `031c7e14e590b7fd67d9599672824c008ef036a55b12eab14ef14478cc5d2d49` |
| `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `c63ca2db0f9d8e267ab149dd9ca52f52587d232f1d9bebe64fead92723f02327` |
| `ex-square-integrable-kernel-finite-rank-truncations` | `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` | gpt-5.6-terra | `4037dfa8783ae66b6b2d2de94ebb81235f84b004c012a49f1743ebec0ae0bca3` |
| `ex-square-integrable-kernel-without-continuous-representative` | `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` | gpt-5.6-terra | `767f30f1662ddc9c00541404f8e202cd33da46493027938d88c2755bb749a268` |
| `ex-square-integrable-separable-product-kernel` | `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` | gpt-5.6-terra | `6c05e722649d49a2eb589f71d8ca08f6f6af3ba05febe4a32f4d82aeb00ec995` |
| `ex-square-root-and-absolute-value-of-a-matrix` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | gpt-5.6-terra | `99f3da7612517ac6478f558ac2bd07421d96842f7b035b0e7c412235ec6e93ea` |
| `ex-standard-basis-of-ell-two` | `orthonormal-bases-parseval-and-fourier-series-examples` | gpt-5.6-terra | `e085e89cd3b4fac349be59956640ed9ce7efd61abad98107d6f9dfbe81d1a277` |
| `ex-standard-inner-products-on-kn-ell-two-and-l-two` | `hilbert-space-geometry-and-riesz-representation-examples` | gpt-5.6-terra | `167bb061844d54e30b003359a985cf2c2e14a6ab8817de7e9b542770089b0f82` |
| `lem-a-compact-remainder-estimate-forces-closed-range` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `2f5d26dfe8e1d18d19ba0d64e4e529a85e5a030b386c7ac40a97b8dc05932ffa` |
| `lem-character-space-of-generated-normal-algebra-is-operator-spectrum` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `76a58ca0784351dad775a6a98ad9f64e48724f5477a106146e3adc0344b89a7f` |
| `lem-compositions-with-a-compact-operator-are-compact` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `ffd4b149a709b7204295547c92b5ab09e975fba536e15aa05f0a4fa4b5fcd740` |
| `lem-continuous-functional-calculus-produces-a-regular-pvm` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `fd0c1789e2fcac1374dd1d738ba26801c8b29af3174e58e196ee1f1c62f51bee` |
| `lem-dependent-choice-implies-countable-choice` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `1b084946cf06e724c9abbcd8e42ef5de224ad4280cde78f4862ce486caa17d1f` |
| `lem-finite-bessel-inequality` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `4668b1e5bd72102d3119bda43521ceca022d5e0f26d8d5261e71c2cbc44c6198` |
| `lem-finite-tori-are-compact-hausdorff-character-spaces` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `031469b370307ea8395da49aabef37bd98b5811ce104099b2cde9f57dbab42fa` |
| `lem-inner-product-is-jointly-continuous` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `72003c2d80ba563161daf9a9195384bd801dc4cd3d62acfd67d992fa73dd7473` |
| `lem-kernel-of-identity-minus-compact-is-finite-dimensional` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `2b30fd0ce1464a70d334ef740b084c76a3ddc3f919a5039a9cc83968a176d810` |
| `lem-linear-combinations-of-compact-operators-are-compact` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `dee97965e820a9947c2dc77fa4e0fddc897f169047711b73b71a072bc74bc6c7` |
| `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `1676b04e8e16a30ff62edf553512156a126a5b14fc20390737a9158968004eee` |
| `lem-neumann-series-and-small-perturbations-of-bounded-inverses` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `bd49808b535ef0ade64b33b32c91694165f4eb75ad1d37c288c9fc3e23dfe5ed` |
| `lem-orthogonal-projection-is-linear-self-adjoint-contractive` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `df68f99ab8ce88b7807f8ec7fde63812ce99bf1936489f1b562591996f511580` |
| `lem-product-rectangle-kernels-are-dense-in-product-l-two` | `square-integrable-kernels-and-hilbert-schmidt-compactness` | gpt-5.6-terra | `c97986209fe599c9e669b6aa241b2735c9bc065a621365ceb88c4bbaf9cf6940` |
| `lem-range-of-identity-minus-compact-is-closed` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `8056ee1ef44385344583c4a69494867ef09f9d41c4ec35fca67f2282aa793a2e` |
| `lem-riesz-schauder-ascent-and-descent-stabilize` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `36263ee3802e6dbb94687e2a47aaf25cec7eeef5e95682d78d44e66f69683e4d` |
| `lem-scalar-and-complex-measures-from-a-pvm` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `68c960529e78293e932e5b173d3738449b1d8b31cc72f027267e8ea04e7cacc3` |
| `lem-simple-pvm-integral-is-representation-independent` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `bb467aa7f3f7735de8c0fe7d21c12ff0275e5e69bf62cfd8a3ff62391bca1c8a` |
| `lem-spectral-permanence-for-unital-c-star-subalgebras` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `967dedbe8626752f24523864b9e65b431b64f7da5f7dfe0e278aff9294787531` |
| `lem-spectrum-of-a-positive-operator-is-nonnegative` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `07658c0ada61e007903511ea00a4e92ec0a3ba617d6216986f0507bde554af7e` |
| `lem-trigonometric-characters-are-orthonormal` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `c213f81df6b1a19d449865f3a013b2302de4e9c6ba03bde6e0b9fb4a241d85f4` |
| `lem-two-dimensional-numerical-range-is-convex` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `3060c9bfa13a657458569f6b629a8a6c873c0ad6f8d932803828bdc8046f076c` |
| `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `88164ff002d6e5e6eed413f4de8087ab042c8c2571a60fda2a1875f1b1e104a0` |
| `lem-weak-and-strong-additivity-of-orthogonal-projections` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `3787d036d00d1e2448d03784db278e8cebd6df80a2dacdfddaf920105cf3d947` |
| `rem-direct-integrals-and-general-multiplicity-theory` | `spectral-measures-and-borel-functional-calculus-examples` | gpt-5.6-terra | `c06c53cd6eff0a933aa4098d0f0671dc063eaf029e8e48202e09c109dfc39804` |
| `thm-bessel-inequality-for-an-arbitrary-orthonormal-family` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `d23e2370275adc06103f4d2fb3a00bfadae9bd48fc0b7a569e3f09f0b372e4f3` |
| `thm-borel-functional-calculus-for-bounded-normal-operators` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `bf66ab42e6c143458a54c7e1171c805767c19e360a67a12bea093aca190003ef` |
| `thm-bounded-borel-pvm-integral` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `0691122195703d12b1d5f2495a072b65cd70556d52e91700f2deec514ec66ec7` |
| `thm-bounded-normal-operator-abstract-spectral-theorem` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `2c4fe191a52eef1c5c3b7804a4a358de40e5624ef2f01036b97179c534064256` |
| `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `a4d70affcda7ab9be2b10f9d01e20e5e95096e243f5bf63c631b4df4937a565b` |
| `thm-completion-of-an-inner-product-space-is-hilbert` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `e15f4396021c884845740ae1ca77d3a896f10d8df02c3b09827b959297210df6` |
| `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `b78232d0944dd3bbe3482ece7d3bded89cb18e027160c2d6afbcaf134cb26664` |
| `thm-cyclic-spectral-representation` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `535bd1624e7049fc686067284d1bd3784a43db2a5a7d18120aa81702bda04986` |
| `thm-double-orthogonal-complement-is-closure` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `31e0d24ccb0b21026649477cf7201fa261a74ccff549174dc70046320d02e6fe` |
| `thm-existence-of-a-maximal-orthonormal-family` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `1a504db4ee8b4cebe0c0ff7d1edc69418c11b8e15445475ed63a3ba0edbb279f` |
| `thm-fourier-basis-and-parseval-on-the-n-torus` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `b93fe2f0d7efed65db872f3d73f3f2318f31f8d63aa130e2c0bbf1a97bb52749` |
| `thm-fredholm-alternative-for-identity-minus-compact` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `c4ce4cfd8c3a3e8443c78cd621efa0cb6aecf08fa0e82b0fb71aca9f5f7a080f` |
| `thm-fredholm-index-is-locally-constant` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `434c0dd801c68ad85f051ffcf4b8844173b540bc62761ff1e5f0c0ca2b910f9f` |
| `thm-fredholm-index-is-stable-under-compact-perturbations` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `12edbd8abd41588c2fcfb2a15ccee21d8e5a122261eefd0fd34da6f5bd6fe8b4` |
| `thm-hilbert-adjoint-properties` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `e873c46e8625fae4df61c2578b09d7b71880e62dfb1cdfdc8e798a5d517c68a0` |
| `thm-hilbert-schmidt-norm-is-basis-independent` | `square-integrable-kernels-and-hilbert-schmidt-compactness` | gpt-5.6-terra | `f7e8134e6644c7113ad3234c1a021ea2b5db8a23f597f3e40173b990f4a169d1` |
| `thm-hilbert-space-fourier-expansion` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `47f7d0fd29fb55cd0ae23fed877ab302a844d0a5709321b45600a0229a91e74f` |
| `thm-jordan-von-neumann-polarization` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `5f54217d4fda7f7672d5b171a776a8dfaf482d58d743f0c10da33ef2734fd656` |
| `thm-l-two-fourier-series-converges-in-mean-square` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `ef2e821e979bdc84c4c5eae1fd64e190e567d0b071142cd508a3251f639ebfe2` |
| `thm-l-two-kernels-give-hilbert-schmidt-operators` | `square-integrable-kernels-and-hilbert-schmidt-compactness` | gpt-5.6-terra | `27d3dc76a56430058ac92f47bbb09d34e20113251834c1eb508fbb23293dca57` |
| `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `6d42238d9efe075125e195b3d610f20ef48dbc9c15107e5643c4bd8636c493b8` |
| `thm-numerical-radius-is-an-equivalent-operator-norm` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `47a1e7e35bb4e4ef3a5dae8682cd8239a454b09b68546f5106fcf6aedf9fa15d` |
| `thm-orthogonal-decomposition-by-a-closed-subspace` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `505f010eadb7546fbe674ea3d51cb4011fc6423a9d4457fc948dc8b723bf9307` |
| `thm-parseval-equivalences-for-a-complete-orthonormal-family` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `2bfa9f75bc1cad05b1c035ed28782f885fb972f7950422f0e6e9c4a59da9796e` |
| `thm-partial-isometry-characterizations` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `30cf6530ae947701fb6c8a72a2e041d3e3f7ddc0b33640591f382381ab24d9f1` |
| `thm-positive-square-root` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `7149632da086c6a52008137e4e5b30df3a1cddd654053fb80baa79fa1288a21f` |
| `thm-projection-onto-a-nonempty-closed-convex-set` | `hilbert-space-geometry-and-riesz-representation` | gpt-5.6-terra | `6175571e6dc5f525d4f18ec9035061e1fad486bf8276a9e82ba87f671b33d88c` |
| `thm-pvm-integral-is-a-star-homomorphism` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `213aeb6fec7c206b4f62a62269378a81681b88c485e2b0723b1070a23bc22626` |
| `thm-riesz-fischer-for-fourier-coefficients` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `f259664bac6ffeb8b50debab9c6d4293f582d87a009a022d155f44bf0fe6d205` |
| `thm-riesz-schauder-spectrum-of-a-compact-operator` | `compact-operators-and-riesz-schauder-theory` | gpt-5.6-terra | `4592fdd1ef380542244152c7b86a8042e046ee4b90c2d83c991bec7dae2c9df4` |
| `thm-self-adjoint-norm-and-spectrum-extrema` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `541a65542dcb8fbb9f7d4cb6a23dc3fd92c3e46a1b92f452471d4d255ee39be3` |
| `thm-separable-hilbert-space-has-a-countable-orthonormal-basis` | `orthonormal-bases-parseval-and-fourier-series` | gpt-5.6-terra | `c5d2865efe1a6022f0a611ca255ae0be729e17352ff150e6f3977ed18541e58e` |
| `thm-spectral-mapping-for-continuous-normal-functional-calculus` | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | gpt-5.6-terra | `ccd0a619be47526661df0e1c3d9286c0a7278aa4d3780b060c9c94e42ef2e171` |
| `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `c7529e367ba4f34441b209c85b7892f53a9643e932a903ac1179184b08a8e520` |
| `thm-stone-resolvent-formula-for-spectral-projections` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `c53eb20b34e8d77ca71da527e5eaa0d9429e2fb8904aaa589703ca7761295335` |
| `thm-support-and-uniqueness-of-the-spectral-measure` | `spectral-measures-and-borel-functional-calculus` | gpt-5.6-terra | `4aaf1827f3daf8e9780781d27dd914e8cd549e507e2b68725f18dc6c5c65817b` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-remaining-27`

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

Append one row per rejection to `research/phase-2-remaining-27-judge-adjudications.jsonl`
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
decision in `research/phase-2-remaining-27-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-remaining-27-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-remaining-27-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-remaining-27-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
