# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-21",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "c",
  "failures": [
    {
      "id": "step8-published",
      "stage": "8-rejudge",
      "why": "`thm-dirichlet-and-thomae-continuity-sets`: gpt-5.6-terra rejected the repaired text and nothing adjudicated it",
      "output": "step8-scope --published: 1 problem(s):\n  `thm-dirichlet-and-thomae-continuity-sets`: gpt-5.6-terra rejected the repaired text and nothing adjudicated it\n",
      "named_ids": [
        "thm-dirichlet-and-thomae-continuity-sets"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets",
      "scope": "published",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets",
      "scope": "published",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "thm-dirichlet-and-thomae-continuity-sets",
      "model": "gpt-5.6-terra",
      "context_sha256": "52078f747726449339dc71cd5fda01a9771346ee16250e530d5de23db018a607",
      "scope": "published",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-21`

You are the group Alpha for batches **4**, **7**, **8**: 4 A/B pair(s), 8 page(s), 129 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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
