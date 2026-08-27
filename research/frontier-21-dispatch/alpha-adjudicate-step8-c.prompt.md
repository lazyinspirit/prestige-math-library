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
group work, `research/frontier-21-alpha-groups.json` is the assignment: it permits at
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

run: frontier-21
role: alpha-adjudicate
label: step8-c
covers: 4, 7, 8

# Step 8 — group **c**, run `frontier-21`

You are the group Alpha for batches **4**, **7**, **8**: 4 A/B pair(s), 8 page(s), 129 item(s), 95 open rejection(s) over 95 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-spectral-theorem-and-singular-value-decomposition` | A | linear-algebra | 141 | `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`, `triangularisation-and-jordan-canonical-form` |
| 4 | `the-spectral-theorem-and-singular-value-decomposition-examples` | B | linear-algebra | 142 | `the-spectral-theorem-and-singular-value-decomposition` |
| 7 | `the-lebesgue-and-riemann-integrals-compared` | A | measure-theory | 288.017 | `the-lebesgue-integral-and-the-convergence-theorems-examples`, `improper-integrals` |
| 7 | `the-lebesgue-and-riemann-integrals-compared-examples` | B | measure-theory | 288.018 | `the-lebesgue-and-riemann-integrals-compared` |
| 8 | `the-argument-principle-and-rouche` | A | complex-analysis | 321 | `the-residue-theorem` |
| 8 | `the-argument-principle-and-rouche-examples` | B | complex-analysis | 322 | `the-argument-principle-and-rouche` |
| 8 | `domains-of-holomorphy-and-pseudoconvexity` | A | complex-analysis | 355 | `the-hartogs-phenomena`, `holomorphic-functions-of-several-variables`, `subharmonic-functions-and-the-dirichlet-problem`, `convexity`, `convex-and-semicontinuous-functions-on-rn` |
| 8 | `domains-of-holomorphy-and-pseudoconvexity-examples` | B | complex-analysis | 356 | `domains-of-holomorphy-and-pseudoconvexity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-spectral-theorem-and-singular-value-decomposition` — The Spectral Theorem, Positive Operators and Singular Value Decomposition (34 item(s))

- `def-self-adjoint-and-normal-endomorphism` · definition — Self-adjoint and normal endomorphisms of a finite-dimensional real or complex inner product space
- `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases` · proposition — In an orthonormal basis, self-adjoint means conjugate-transpose symmetry and normal means commuting with the conjugate transpose
- `thm-schur-triangularisation` · theorem — If the characteristic polynomial of an endomorphism splits, some orthonormal basis makes its matrix upper triangular
- `lem-normal-upper-triangular-matrix-is-diagonal` · lemma — A normal upper-triangular matrix is diagonal
- `thm-complex-spectral-theorem-for-normal-endomorphisms` · theorem — Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely
- `thm-real-normal-endomorphism-classification` · theorem — A real normal endomorphism is orthogonally block-diagonalisable with 1x1 real blocks and 2x2 rotation-scaling blocks
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` · corollary — Real spectral theorem: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis
- `thm-spectral-resolution-and-polynomial-spectral-projections` · theorem — A normal endomorphism is a sum of its eigenvalues times pairwise orthogonal projections, and each spectral projection is a polynomial in the endomorphism
- `def-functional-calculus-for-a-normal-endomorphism` · definition — The spectral functional calculus f(T) for a normal endomorphism
- `prop-functional-calculus-for-normal-endomorphisms` · proposition — For normal endomorphisms, the spectral functional calculus respects sums, products, adjoints, and composition of scalar functions
- `def-semisimple-and-nilpotent-endomorphisms` · definition — Semisimple endomorphisms as endomorphisms diagonalisable over an algebraic closure, and nilpotent endomorphisms
- `thm-additive-jordan-chevalley-decomposition` · theorem — Over a perfect field, every endomorphism has a unique commuting semisimple-plus-nilpotent decomposition, polynomial in the endomorphism
- `def-non-negative-and-positive-operator` · definition — Non-negative and positive operators
- `prop-operator-positivity-agrees-with-form-positivity-over-the-reals` · proposition — Over the reals, non-negative and positive operators correspond exactly to positive semidefinite and positive definite symmetric forms
- `thm-non-negative-operator-characterisations` · theorem — A non-negative operator is equivalently self-adjoint with nonnegative eigenvalues, a positive semidefinite matrix in an orthonormal basis, or an operator of the form S^*S
- `thm-non-negative-square-root-exists-and-is-unique` · theorem — A non-negative operator has a unique non-negative square root
- `prop-non-negative-square-root-is-a-polynomial-in-the-operator` · proposition — The non-negative square root of a non-negative operator is a polynomial in the operator
- `def-singular-values-of-an-endomorphism` · definition — The singular values of an endomorphism as the eigenvalues of the positive square root of T^*T
- `prop-singular-values-are-well-defined` · proposition — Singular values are well defined because the positive square root of T^*T is unique
- `thm-singular-value-decomposition` · theorem — Every endomorphism of a finite-dimensional real or complex inner product space admits a singular value decomposition
- `cor-rank-equals-number-of-nonzero-singular-values` · corollary — The rank of an endomorphism is the number of its nonzero singular values
- `cor-adjoint-has-the-same-singular-values` · corollary — An endomorphism and its adjoint have the same singular values
- `thm-polar-decomposition` · theorem — Every endomorphism has a polar decomposition T = SU with U non-negative and S an isometry on the orthogonal complement of ker T, and S is unique exactly when T is invertible
- `def-operator-norm-on-a-finite-dimensional-inner-product-space` · definition — The operator norm ||T|| = max_{||v||=1} ||Tv|| in finite dimension
- `thm-operator-norm-is-the-largest-singular-value` · theorem — The operator norm equals the largest singular value and is attained at a first right-singular vector
- `cor-operator-norm-submultiplicative-and-t-star-t-identity` · corollary — The operator norm is submultiplicative and satisfies ||T^*T|| = ||T||^2
- `thm-eckart-young-best-rank-k-approximation` · theorem — The best rank-at-most-k approximation in operator norm is the rank-k truncation of a singular value decomposition
- `def-rayleigh-quotient` · definition — The Rayleigh quotient of a nonzero vector for a self-adjoint endomorphism
- `thm-courant-fischer-min-max-principle` · theorem — Courant-Fischer min-max principle for self-adjoint endomorphisms on finite-dimensional real inner product spaces
- `cor-rayleigh-quotient-extreme-eigenvalue-characterisation` · corollary — The smallest and largest eigenvalues of a self-adjoint endomorphism are the minimum and maximum Rayleigh quotients
- `thm-cauchy-interlacing-for-self-adjoint-compressions` · theorem — The eigenvalues of the orthogonal compression of a self-adjoint endomorphism to a hyperplane interlace those of the original endomorphism
- `thm-weyl-inequalities-for-self-adjoint-sums` · theorem — Weyl inequalities bound the eigenvalues of a sum of self-adjoint endomorphisms
- `def-gershgorin-disks` · definition — The Gershgorin disks of an endomorphism with respect to an ordered basis
- `thm-gershgorin-disk-theorem` · theorem — Every eigenvalue lies in some Gershgorin disk

### `the-spectral-theorem-and-singular-value-decomposition-examples` — The Spectral Theorem and SVD: Examples and Counterexamples (19 item(s))

- `ex-real-symmetric-three-by-three-orthogonal-diagonalisation` · example — An explicit real symmetric 3x3 matrix is orthogonally diagonalised
- `ex-hermitian-two-by-two-unitary-diagonalisation` · example — An explicit Hermitian 2x2 matrix is unitarily diagonalised
- `ex-quarter-turn-real-normal-form` · example — The real quarter-turn is normal and appears as a single 2x2 block in the real normal classification
- `ex-complex-symmetric-nilpotent-matrix` · example — A complex symmetric matrix can be nonzero, square to zero, and fail to be normal
- `ex-non-negative-square-root-as-a-polynomial-in-a-matrix` · example — The non-negative square root of an explicit matrix is exhibited as a polynomial in the matrix
- `ex-polar-decomposition-of-an-invertible-matrix` · example — A worked polar decomposition of an invertible matrix
- `ex-polar-decomposition-of-a-singular-matrix` · example — A singular matrix has a polar decomposition with visibly nonunique isometric factors
- `ex-singular-value-decomposition-of-a-two-by-three-matrix` · example — The singular value decomposition of an explicit 2x3 matrix
- `ex-rank-one-svd-truncation` · example — The rank-one truncation of an SVD realises the Eckart-Young minimiser
- `ex-courant-fischer-on-a-three-by-three-symmetric-matrix` · example — Courant-Fischer is checked on an explicit 3x3 symmetric matrix
- `ex-principal-submatrix-interlacing` · example — The eigenvalues of a principal 2x2 submatrix interlace those of a 3x3 symmetric matrix
- `ex-gershgorin-disks-and-spectrum` · example — Gershgorin disks for an explicit 3x3 matrix contain the true spectrum
- `fs-normal-operators-are-diagonalisable-over-the-base-field` · false-statement — FALSE: Every normal operator is diagonalisable over its base field
- `fs-complex-symmetric-matrices-are-unitarily-diagonalizable` · false-statement — FALSE: Every complex symmetric matrix is unitarily diagonalisable
- `fs-nonnegative-quadratic-values-force-self-adjointness` · false-statement — FALSE: If <Tv,v> is nonnegative for every v, then T is automatically self-adjoint
- `fs-square-roots-of-a-non-negative-operator-are-unique` · false-statement — FALSE: A non-negative operator has a unique square root among all operators
- `fs-polar-isometry-is-unique-for-singular-operators` · false-statement — FALSE: The isometry in the polar decomposition is unique even for singular operators
- `fs-singular-values-are-absolute-values-of-the-eigenvalues` · false-statement — FALSE: The singular values of an operator are the absolute values of its eigenvalues
- `fs-operator-norm-is-the-largest-eigenvalue-modulus` · false-statement — FALSE: The operator norm is always the largest modulus of an eigenvalue

### `the-lebesgue-and-riemann-integrals-compared` — The Lebesgue and Riemann Integrals Compared (6 item(s))

- `lem-riemann-integrable-function-has-borel-darboux-envelopes` · lemma — A bounded Riemann integrable function admits Borel Darboux envelopes with zero integral gap
- `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral` · theorem — A bounded Riemann integrable function on a closed bounded interval is Lebesgue measurable and has the same integral
- `cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function` · corollary — A Riemann integrable function on a closed bounded interval is almost everywhere equal to a Borel function
- `thm-arzela-bounded-convergence-for-riemann-integrals` · theorem — Arzela's bounded convergence theorem for Riemann integrals
- `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line` · theorem — A nonnegative improper Riemann integral on a half-line agrees with the Lebesgue integral
- `thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral` · theorem — For a continuous integrand, the Riemann-Stieltjes and Lebesgue-Stieltjes integrals agree

### `the-lebesgue-and-riemann-integrals-compared-examples` — The Lebesgue and Riemann Integrals Compared — Examples (6 item(s))

- `ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable` · example — The indicator of the rationals in $[0,1]$ is Lebesgue integrable with integral $0$ and not Riemann integrable
- `fs-every-riemann-integrable-function-is-borel-measurable` · false-statement — FALSE: every Riemann integrable function on a closed bounded interval is Borel measurable
- `ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable` · example — An open dense set of measure less than $1$ is the monotone $L^1$-limit of Riemann integrable indicators, but its indicator is not Riemann integrable
- `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable` · counterexample — The sine integral is improperly Riemann integrable and not Lebesgue integrable
- `cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function` · counterexample — The indicator of a fat Cantor set is upper semicontinuous and equal almost everywhere to no Riemann integrable function
- `cex-a-null-set-that-is-no-functions-discontinuity-set` · counterexample — A null set can fail to be the discontinuity set of any function

### `the-argument-principle-and-rouche` — The Argument Principle and Rouché's Theorem (16 item(s))

- `def-logarithmic-derivative-meromorphic-function` · definition — The logarithmic derivative of a meromorphic function
- `def-weighted-zero-and-pole-counts-on-cycle` · definition — Zero and pole counts weighted by multiplicity and winding number
- `lem-logarithmic-derivative-order-residue` · lemma — The logarithmic derivative has residue equal to local order
- `thm-argument-principle-null-homologous-cycle` · theorem — The argument principle for an admissible null-homologous cycle
- `thm-argument-principle-as-image-winding-number` · theorem — The argument-principle integral is the winding number of the image cycle
- `cor-argument-principle-counts-preimages` · corollary — The argument principle counts preimages of a target value
- `thm-weighted-argument-principle` · theorem — The weighted argument principle
- `thm-rouche-theorem` · theorem — Rouche's theorem in the classical strict-inequality form
- `rem-fundamental-theorem-of-algebra-via-rouche` · remark — Rouche gives the standard leading-term proof of the fundamental theorem of algebra
- `cor-local-zero-count-via-rouche` · corollary — Small perturbations preserve the total local zero multiplicity
- `thm-continuity-of-zeros-locally-uniform-convergence` · theorem — Locally uniform convergence preserves the total multiplicity near an isolated zero
- `thm-hurwitz-zero-free-limit` · theorem — Hurwitz's zero-free limit theorem
- `thm-hurwitz-injective-limit` · theorem — A locally uniform limit of injective holomorphic functions is injective or constant
- `rem-open-mapping-theorem-via-argument-principle` · remark — The argument principle recovers the open mapping theorem
- `rem-local-degree-argument-principle-agreement` · remark — Argument-principle multiplicity agrees with the earlier local degree
- `thm-holomorphic-inverse-contour-formula` · theorem — A contour formula for a locally single-valued holomorphic inverse

### `the-argument-principle-and-rouche-examples` — The Argument Principle and Rouché's Theorem — Examples (11 item(s))

- `ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc` · example — The polynomial z^5 + 3z + 1 has one zero in the unit disc
- `ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two` · example — The same polynomial has four zeros in the annulus 1 < |z| < 2
- `ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc` · example — The equation e^z = 3z has exactly one solution in the unit disc
- `ex-a-cubic-image-curve-has-winding-number-three-about-the-origin` · example — A cubic image curve winds three times around the origin
- `ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence` · example — Hurwitz preserves a simple zero under local uniform convergence
- `ex-the-inverse-contour-formula-recovers-a-local-inverse-value` · example — The inverse contour formula recovers a local inverse value
- `cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause` · counterexample — The sequence z/n shows why the injective-limit theorem needs the constant escape clause
- `cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle` · counterexample — The function e^(1/z) shows that essential singularities lie outside the argument principle
- `cex-weak-boundary-inequality-does-not-suffice-for-rouche` · counterexample — The weak inequality |f-g| <= |g| does not suffice in Rouche
- `fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective` · false-statement — FALSE: a locally uniform limit of injective holomorphic functions is always injective
- `fs-the-argument-principle-counts-zeros-without-multiplicity` · false-statement — FALSE: the argument principle ignores multiplicity

### `domains-of-holomorphy-and-pseudoconvexity` — Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity (27 item(s))

- `def-holomorphically-convex-hull-and-domain` · definition — Holomorphic hulls and holomorphic convexity
- `lem-basic-properties-of-the-holomorphic-hull` · lemma — Basic properties of the holomorphic hull
- `def-polydisc-boundary-radius` · definition — The equal-radius polydisc boundary function
- `lem-cauchy-estimates-propagate-to-holomorphic-hulls` · lemma — Cauchy estimates propagate from a compact set to its hull
- `thm-cartan-thullen-boundary-radius-theorem` · theorem — Cartan-Thullen boundary-radius theorem
- `thm-cartan-thullen-theorem` · theorem — Cartan-Thullen theorem
- `lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point` · lemma — A compact convex set and an exterior point admit a complex-linear separator
- `thm-convex-domains-are-holomorphically-convex` · theorem — Convex domains are holomorphically convex
- `cor-convex-domains-are-domains-of-holomorphy` · corollary — Convex domains are domains of holomorphy
- `def-plurisubharmonic-function` · definition — Plurisubharmonic functions
- `lem-affine-line-independence-in-the-definition-of-plurisubharmonicity` · lemma — Affine reparametrization does not change the line-test definition
- `def-levi-form-and-strict-plurisubharmonicity` · definition — The Levi form and strict plurisubharmonicity
- `thm-c-two-levi-criterion-for-plurisubharmonicity` · theorem — The C^2 Levi criterion for plurisubharmonicity
- `thm-decreasing-limits-of-plurisubharmonic-functions` · theorem — Decreasing limits of plurisubharmonic functions
- `thm-holomorphic-pullback-of-plurisubharmonic-functions` · theorem — Holomorphic pullbacks of C^2 plurisubharmonic functions are plurisubharmonic
- `thm-stability-operations-for-plurisubharmonic-functions` · theorem — Basic stability operations for plurisubharmonic functions
- `thm-upper-envelope-theorem-for-plurisubharmonic-functions` · theorem — Upper envelopes of locally upper-bounded plurisubharmonic families
- `thm-maximum-principle-for-plurisubharmonic-functions` · theorem — Maximum principle for plurisubharmonic functions
- `cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic` · corollary — The logarithm of the modulus of a holomorphic function is plurisubharmonic
- `def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity` · definition — Plurisubharmonic exhaustions and Hartogs pseudoconvexity
- `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity` · theorem — Hartogs pseudoconvexity yields a continuous plurisubharmonic exhaustion
- `def-levi-pseudoconvex-domain` · definition — Levi pseudoconvex domains
- `lem-levi-pseudoconvexity-is-independent-of-defining-function` · lemma — Levi pseudoconvexity does not depend on the defining function
- `def-continuous-family-of-analytic-discs` · definition — Continuous families of analytic discs
- `thm-continuity-principle-for-domains-of-holomorphy` · theorem — Continuity principle for domains of holomorphy
- `thm-domains-of-holomorphy-are-hartogs-pseudoconvex` · theorem — Domains of holomorphy are Hartogs pseudoconvex
- `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` · theorem — Hartogs pseudoconvexity implies Levi pseudoconvexity for C^2 domains

### `domains-of-holomorphy-and-pseudoconvexity-examples` — Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity — Examples (10 item(s))

- `ex-the-bidisc-is-holomorphically-convex` · example — The bidisc is holomorphically convex
- `ex-the-ball-is-levi-pseudoconvex` · example — The unit ball is Levi pseudoconvex
- `ex-a-convex-domain-is-a-domain-of-holomorphy` · example — A convex domain is a domain of holomorphy
- `ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc` · example — The holomorphic hull of a circle in C is the filled disc
- `ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc` · example — The holomorphic hull of a product torus in the bidisc is the closed polydisc it bounds
- `ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space` · example — Minus log boundary distance is plurisubharmonic on a half-space
- `cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex` · counterexample — The bidisc minus the origin is not holomorphically convex
- `cex-a-domain-of-holomorphy-need-not-be-convex` · counterexample — A domain of holomorphy need not be convex
- `fs-every-domain-in-c-n-is-a-domain-of-holomorphy` · false-statement — FALSE: every domain in C^n is a domain of holomorphy
- `fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy` · false-statement — FALSE: the union of two domains of holomorphy is always a domain of holomorphy

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
| `cex-a-domain-of-holomorphy-need-not-be-convex` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `d83b23fa6c669945073cb49ed401ac264672d14b85d883383f407b792fac2cbb` |
| `cex-a-null-set-that-is-no-functions-discontinuity-set` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `ddc044a5b40dc7a12a633cf986cbbb237dc5b2f2cff8640a36a1f7f773d8e038` |
| `cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `e6853be4044975fd26b23979d1d0ebcb426c1d54cdb1b7b671bda05a3e1f1497` |
| `cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `85b21d1c2ca1c7f0b80deda36f0f9fe23a5fbc22822f700f0cd3854c21275806` |
| `cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `5ff3cee448c22a88f7add517fdd38b5bd01ba542c2773fc862a5e7ce0e9c1c4f` |
| `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `55a6392d21e5f5a202ef62b1c05818b73c86b67a8a2171a62897a7b4fc996f4d` |
| `cex-weak-boundary-inequality-does-not-suffice-for-rouche` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `178021a0895b88db3c78cde7893f72480333464ea27562d905188dd22ca8e587` |
| `cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `e7d3ca28016c73e8a061e4f02dfd6d9a855ac1f0f963872f044fc409031bf685` |
| `cor-adjoint-has-the-same-singular-values` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `7f4c04c3f5db44247be14d46c09c790d9ae862578767776f7040a462ba5f0515` |
| `cor-argument-principle-counts-preimages` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `2f66f00a00b7f8cdb321fc084faf817f26820b2bb97e50682c53d48f03a268fc` |
| `cor-local-zero-count-via-rouche` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `9d8e13cc37ab42cbd67b15460f1f330028e9d07ce8b23d4441ca3a738e04215e` |
| `cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `5d438c64927e0601d0d480903986f396aed1de8c39b697693824914e5469d437` |
| `cor-operator-norm-submultiplicative-and-t-star-t-identity` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `5972975c7cadd5ad5fb898b7a379c7fa400dcbd2ade8055e4cdb1cea2c932fa0` |
| `cor-rayleigh-quotient-extreme-eigenvalue-characterisation` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `cd5cd19def3c8202fbdb4655558995c0a689543b1fdf7a13ecd2d1a6b91161e2` |
| `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `336cfdaa428431d128cfebd6096c274e77f94b36eb1ae0ffb878386277c7fa06` |
| `def-levi-pseudoconvex-domain` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `65c9a5fcd826e721127677ebeb3b01e59de771acc34edb7b9a546572f70ac83c` |
| `def-logarithmic-derivative-meromorphic-function` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `aac936a367f8d07410635516ddf2fa171c11ae15b195d67e502c6066abed5316` |
| `def-operator-norm-on-a-finite-dimensional-inner-product-space` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `3a5ae0930ac7140686cd18c5df099e434a158be821429a1f207a1f5c46ebc7ee` |
| `def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `7c28219dc072e0174f6b52b8a1f797c0b2734198e639440402a2e7bc1a0b4c30` |
| `def-polydisc-boundary-radius` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `93ea96e8e94eecda5044e76027d165df2adbb206a5f347de9d46778863393df5` |
| `def-self-adjoint-and-normal-endomorphism` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `eb09da4f2037aefeb0cea7cb81fe00c62b1920be5c8281551f2f8c3988537a48` |
| `def-semisimple-and-nilpotent-endomorphisms` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `8a72873cc6d7660dfd08eb88327b9ab5a719d60c578b22f57676fc1ad7993439` |
| `def-singular-values-of-an-endomorphism` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `e9292d07e0926bd268910da8f80dda2623fd2c8aadf9f24b46e82ee95def790d` |
| `def-weighted-zero-and-pole-counts-on-cycle` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `233533f5a00a5f8e374557f5b9fd3141b5ee1e3481231d52cef0ac84c71a7846` |
| `ex-a-convex-domain-is-a-domain-of-holomorphy` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `596b8797a9f0b1802063bae7a57e9d4d7c958d69a57651ef5bfdc713467d4447` |
| `ex-a-cubic-image-curve-has-winding-number-three-about-the-origin` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `1ed0adcf388ac047afa83d3e769b5c37de5a552b1c364ebbc8ee8111835cff97` |
| `ex-complex-symmetric-nilpotent-matrix` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `bda5bebe4049bd015fa316173f11b15f187f4327e0a748bd24e5892d574f7578` |
| `ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `62719bb7b8be63689ca365016ff28ff2b62026747caab74e1f1c85c8fc2b62b2` |
| `ex-hermitian-two-by-two-unitary-diagonalisation` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `846f2b6fda871ec3da0065523d028a3d8f14b9420ec11490a6f2d5f3bd4d5041` |
| `ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `b908d0400df4c3352f1f2bb3fd13a700cfd42b09b4b20bf6d56c1537b7141c8b` |
| `ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `c1d33191f7dfa29492e2f2fa1ef6c47cf70ffda15d3abf0ddcf2f4f1220b219d` |
| `ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `ff72bae394b1ad2d5772dcc5970684f642b2a360cfe443fc6393800fd6208caf` |
| `ex-non-negative-square-root-as-a-polynomial-in-a-matrix` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `4128e595c2b30e0a6f8179e01320e0f728d900fdfc0c422e5117368de93efa4f` |
| `ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `270e1596ad5e28a86dba9352f9f957cb038b5fbad79420854bcba58b494dc176` |
| `ex-principal-submatrix-interlacing` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `aeba3afd9fe265778a8a2bcc028e7ce7aba721a369d80d9a81be85566451ce15` |
| `ex-rank-one-svd-truncation` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `b7be482951171e29a7e28ab314a9ceefa2ee488ca5fb4e5abe87650d66692546` |
| `ex-the-bidisc-is-holomorphically-convex` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `497741d5c91a8a5f2ccf29f756d0a7cf6a25ab4eaecf9a9e04260cf30015af76` |
| `ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `ce0bcfcac079c33b6fdeb136c3cf74d30950ada27620f1087c441376d48a018d` |
| `ex-the-inverse-contour-formula-recovers-a-local-inverse-value` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `a1acafce601c80bda0e76c80ce2b3ee896080c8ac14b6752c61667116ae5b197` |
| `ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `75a0808fb0c8057d11f54fcc6ef86fc81a0404a775dd7afa3ff58b88519c0909` |
| `ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `f40b6684143ed3847b9a3baf8055915f72e0501f077500420dba5f11571187aa` |
| `fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `0eac11c10f26438375cf740eb30f82113014b65f56af07b5264292bd92e81fba` |
| `fs-every-domain-in-c-n-is-a-domain-of-holomorphy` | `domains-of-holomorphy-and-pseudoconvexity-examples` | gpt-5.6-terra | `7d92fb26f76f2a62dec6395a0d97f65a71b6de6b7210db907557b42f0f5676a5` |
| `fs-every-riemann-integrable-function-is-borel-measurable` | `the-lebesgue-and-riemann-integrals-compared-examples` | gpt-5.6-terra | `f525a7a8c6a9175a1d4c8b3b4e6b7e38e779206798b79d79f4ea1ac71e71afb2` |
| `fs-nonnegative-quadratic-values-force-self-adjointness` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `0460b0f66e863377140f6ef6973795b2fbf39266f316e551b7dc73849c49d5d7` |
| `fs-operator-norm-is-the-largest-eigenvalue-modulus` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `18826dd64f94cfa2b36eb616164a73c1262e30206eafd00e8e59a5a8294e5d36` |
| `fs-singular-values-are-absolute-values-of-the-eigenvalues` | `the-spectral-theorem-and-singular-value-decomposition-examples` | gpt-5.6-terra | `813894fca0224547ad9b6b47f0394383623e41f2540998fc78b48cc9031d098d` |
| `fs-the-argument-principle-counts-zeros-without-multiplicity` | `the-argument-principle-and-rouche-examples` | gpt-5.6-terra | `ab06d11bf29c85f9ea9507dbd0cb2e3b88b53b524acd3df05991712f611c6fd3` |
| `lem-affine-line-independence-in-the-definition-of-plurisubharmonicity` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `c77f78f8161f3e74ce50c643e3cdc6e8b47a43796f9d08e6bd9af6b86a7763c3` |
| `lem-basic-properties-of-the-holomorphic-hull` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `14cd7aadcba202685c94e415f53add3a3146782f165b37b15ba3f3703dc83eb3` |
| `lem-cauchy-estimates-propagate-to-holomorphic-hulls` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `e426273a2420d07423c934561f804bfb1c6ed3ccab1f7328759df1a0693503f1` |
| `lem-levi-pseudoconvexity-is-independent-of-defining-function` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `5927ccb5799d1e409f0292ee6bdce2c2484933f59930b252c89dfd6bf080828e` |
| `lem-logarithmic-derivative-order-residue` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `b9b88ec4f4424041a0508a549a11ef1e178688946de440d2a8ed5029e589f35e` |
| `lem-normal-upper-triangular-matrix-is-diagonal` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `9fdcb497c96d8e47a387396d3f446654fe469255934a1995d19ac0a31d83718a` |
| `lem-riemann-integrable-function-has-borel-darboux-envelopes` | `the-lebesgue-and-riemann-integrals-compared` | gpt-5.6-terra | `5661772c9870aa6dd36a0d5766acd1a68ee4ae0f8d18520b30c20e3437d05d7a` |
| `prop-functional-calculus-for-normal-endomorphisms` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `0152d0756f215473fcfa02197eaa09467149b0c6bdfadb8d1deb795050236c24` |
| `prop-non-negative-square-root-is-a-polynomial-in-the-operator` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `e24936f42962f654db47701d23069bab760792c1a6d822b307a9e8f764e294bd` |
| `prop-operator-positivity-agrees-with-form-positivity-over-the-reals` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `b3d841a2ce10f6872669d5e17e681731689d25d9264e81a16a4c0122a83cfeb1` |
| `rem-local-degree-argument-principle-agreement` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `66e01ac4602ba6623f36ec742ebc15da3e3577ff346fe9bffa72ac837c10bde0` |
| `rem-open-mapping-theorem-via-argument-principle` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `b355a53484d1d0a34f20bfed101f3debd9059a5e595b54bfac3f55818a7b811f` |
| `thm-additive-jordan-chevalley-decomposition` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `4b4bf01f12c395eadb9c81f9eda670ff754a6031337a50b4cc526bd5e5e6f284` |
| `thm-argument-principle-as-image-winding-number` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `6204f3c742cb66a40abff473032b6bc0d5934fbe3e1ffbc953f89f8ce25ac939` |
| `thm-argument-principle-null-homologous-cycle` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `4cc0bde0196186691933baf441ad4b0d076813cc0293b806e4287271657c78ac` |
| `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral` | `the-lebesgue-and-riemann-integrals-compared` | gpt-5.6-terra | `2b990860fa31c7e2c3b125059ca2339b5830c13abe4be38346fee6cfe038f9a9` |
| `thm-c-two-levi-criterion-for-plurisubharmonicity` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `3bd97e49a9c1fadd4976fa53856c499a1533f01c94e630fbadee1cabb6bb58fd` |
| `thm-cartan-thullen-boundary-radius-theorem` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `e9a8265609d1b874fd8859253aaf380d2817c883a060c626cc5834356f0ecfa8` |
| `thm-cartan-thullen-theorem` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `f72ca0a5ffbda0d3d74a43ce20afe5b1e2201cbc02c016184f5de86cd39d91f8` |
| `thm-continuity-of-zeros-locally-uniform-convergence` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `0c92ba27142aedd5870c7bdeed3fcd74e21e342f4b80fab7c18b2d0f42f0331c` |
| `thm-continuity-principle-for-domains-of-holomorphy` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `726c7801f5364886c11879c1234b0859403b0d326824790b0ad5054cbe586096` |
| `thm-convex-domains-are-holomorphically-convex` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `9d142fc7047c047c8e9fafb5e44920aea63a49125af1c974ecfd5f1072d5ab18` |
| `thm-courant-fischer-min-max-principle` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `a6f3342e196dc6fad4c588d7e43b4579f0f1e3a015ec2d448fbdeaca01b046ef` |
| `thm-decreasing-limits-of-plurisubharmonic-functions` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `a8748a286a7c72782fcd3fb83815c51399eb28375437251d5f0a649900c7a7db` |
| `thm-domains-of-holomorphy-are-hartogs-pseudoconvex` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `24e327ac8b70a98628e8b2cb4521da63f59964a716982f90bb9358cb9efc239f` |
| `thm-eckart-young-best-rank-k-approximation` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `32e9cce8b1bec055e758672337ea3438f27d574014044a15d7b7b779e930219e` |
| `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `389be0f39d96c044011bfe632509d5a9e094d54ee0c34b9133f2c871652ef6a9` |
| `thm-gershgorin-disk-theorem` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `9563d5cf0b668b9c2a0343ae24ebed5fd4caaa4f8732e0f2b1c2b7b01d1f2384` |
| `thm-holomorphic-inverse-contour-formula` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `c996db354a8f5125ed877a6ecd0931e5324bdc33f0e62fb9c6d23c559fa184d9` |
| `thm-holomorphic-pullback-of-plurisubharmonic-functions` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `0f787f1158db5a28f4dba176170cc1b258ab700497bebbd9c3c8a2968acdac11` |
| `thm-hurwitz-injective-limit` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `da2d5081679df64fa55a4261227eb71c1113f995a70c2946c4ce87a3dd372d89` |
| `thm-hurwitz-zero-free-limit` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `da02ae6bd00c07766d204ba51ac0a95932fc8fd9e9ad2b28b6f25c9e26b84a0c` |
| `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `33b634a002ac27a18a67f71b5626931fad46f00a6f421699637e71fa1d78e1ce` |
| `thm-maximum-principle-for-plurisubharmonic-functions` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `3330ebdb723e2a2dc810992ba114c9c716067c75892581501f7bb9c67b0a654c` |
| `thm-non-negative-operator-characterisations` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `f67f95d37f2b33049345c097e57c99349ac208bed6996fe0936662488a6ad641` |
| `thm-non-negative-square-root-exists-and-is-unique` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `3e66f1736a6e48c6655f7ea8318a0876dbb69961bdc26fa027517b8f0346824c` |
| `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line` | `the-lebesgue-and-riemann-integrals-compared` | gpt-5.6-terra | `35b58fcddd07d8825e13351c40d93a380a1852e132164ed828994ae3eb6f6ec2` |
| `thm-operator-norm-is-the-largest-singular-value` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `4b2288051a104c51f68a381fda42b46fec8ddf6fef834cfe0d7e6892ff61eb86` |
| `thm-polar-decomposition` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `24d0e59df68216903af45ec987359a4fb7d5ee4aa228b649688757605ac0a31f` |
| `thm-real-normal-endomorphism-classification` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `008e070b4c3b2f720e663a618d88cf6ba8da647b2a4e29fb6af7675c341383e2` |
| `thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral` | `the-lebesgue-and-riemann-integrals-compared` | gpt-5.6-terra | `41339cf0916aa50b8d1f00b9a9c40e89cebfe871fbab103cea1efde3866ebc37` |
| `thm-rouche-theorem` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `057781782f4f0a1e300ad95b1aac46beddd0f06b6b6562645e47f476c64293a4` |
| `thm-singular-value-decomposition` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `0966134e1fafb01d65d2276b24495a428f88c43eaeeafecf0d196915ecfbfcef` |
| `thm-stability-operations-for-plurisubharmonic-functions` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `5ec4a3328ec531907924ede9212cdbcba9b4fc3dce18860acd2cfbcd9c87dcfe` |
| `thm-upper-envelope-theorem-for-plurisubharmonic-functions` | `domains-of-holomorphy-and-pseudoconvexity` | gpt-5.6-terra | `12069f4e6c834bc12f5ded92dee929fa23e010aeb7329f5c99b6faf4e594b55b` |
| `thm-weighted-argument-principle` | `the-argument-principle-and-rouche` | gpt-5.6-terra | `a7e82a46ab36af5a79e8100a7fa390d5b18956d33349741ff712972a920942c2` |
| `thm-weyl-inequalities-for-self-adjoint-sums` | `the-spectral-theorem-and-singular-value-decomposition` | gpt-5.6-terra | `c740f4a3b9fa2f47348af5832e0f6006bc6e01f437401b84e5364ba29071eaa2` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-21-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-21-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-21-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
