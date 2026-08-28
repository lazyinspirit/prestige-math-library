# Algebra track expansion v2: exterior algebra, numerical linear algebra and matrix perturbation theory

Prose scaffold, owner-commissioned 2026-08-28. Sibling to
`research/plan-algebra-track-expansion.md`, which expands `abstract-algebra`;
this file expands `linear-algebra`. Machine-readable half:
`research/plan-spec.json`.

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

---

# SUMMARY FOR THE ORCHESTRATOR — `linear-algebra` expansion lane, 2026-08-28

**Pairs scaffolded here.** Nine new A/B pairs, all outside the published
linear-algebra spine. Relative labels are local to this file; page ids are
authoritative.

| label | page id | § | size |
|---|---|---|---|
| LA-14 | `complexification-realification-and-real-structures` | §11 | A 18 / B 8 |
| LA-15 | `exterior-powers-orientation-and-hodge-duality` | §11 | A 28 / B 10 |
| LA-16 | `matrix-norms-condition-numbers-and-numerical-stability` | §11 | A 23 / B 10 |
| LA-17 | `direct-matrix-factorisations-lu-cholesky-and-qr` | §11 | A 24 / B 10 |
| LA-18 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | §11 | A 19 / B 9 |
| LA-19 | `eigenvalue-iterations-and-the-qr-algorithm` | §11 | A 21 / B 9 |
| LA-20 | `krylov-subspaces-arnoldi-and-gmres` | §11 | A 18 / B 8 |
| LA-21 | `matrix-differentiation-and-first-order-spectral-perturbation` | §11 | A 22 / B 9 |
| LA-22 | `conjugate-gradients-minres-and-preconditioning` | §11 | A 21 / B 9 |

**Authority boundary.** This file owns only those nine new A pages and their
nine new B companions. It does not own, amend, rehome, rename or enrich any
published page or existing item. The thirteen published linear-algebra pairs
are immutable inputs. The apparent placement of generic quotient-space material
inside the published Jordan page is accepted as disk state and is not a task in
this expansion. No rehome receipt is proposed.

**The headline gap.** The library already has a rigorous finite-dimensional
pure core through Jordan form, the real and complex spectral theorems, SVD,
polar decomposition, min--max theory and perturbation inequalities. It does not
yet have the algebraic structures needed for differential forms and classical
field theory (complexification, exterior powers, orientation and Hodge duality),
nor the deterministic numerical and differentiable theory needed to use its
matrix results responsibly (conditioning, stability, direct factorisations,
pseudoinverses, iterative algorithms and first-order spectral perturbation).
LA-14--LA-22 supply those layers without duplicating the published spine.

**Placement.** Four relative splices are binding. LA-14/LA-15 follow
`tensor-products-of-modules-examples`; LA-16--LA-20 follow
`rn-as-a-normed-space-examples`; LA-21 follows
`the-inverse-function-theorem-completed-examples`; LA-22 follows
`convex-and-semicontinuous-functions-on-rn-examples`. Absolute orders are
intentionally not frozen in prose. The live spec determines the fractional
orders between each anchor and its next neighbour, and no published page is
renumbered.

**Build frontier.** Against publication state verified 2026-08-28, LA-14,
LA-15 and LA-16 are the first buildable A pages. LA-17 follows LA-16; LA-18 and
LA-19 follow LA-17; LA-20 follows LA-19; LA-21 follows LA-18 and the already
published inverse-function theorem; LA-22 follows LA-20 and the already
published convexity page. Expected A dependency levels are respectively 22,
22, 31, 32, 33, 33, 34, 34 and 35. These are audit expectations, not a
substitute for recomputing from the live graph.

**Full texts obtained.** Axler, *Linear Algebra Done Right*, 4e; Hefferon,
*Linear Algebra*; Treil, *Linear Algebra Done Wrong*; Driscoll--Braun,
*Fundamentals of Numerical Computation*; all eighteen Cornell CS 4220 Spring
2022 lecture-note PDFs; the complete Cambridge Part IB notes; Conrad's complete
notes on complexification and exterior powers; Eliashberg's complete
multilinear-algebra/differential-forms notes; Greenbaum--Li--Overton;
Edelman--Arias--Smith; and Martinsson--Tropp. Each source was compared with the
library separately before the next source was used. Exact URLs, read ranges and
dispositions are in §13.

**Two-treatment gate.** Every immediate pair has two independent proof-capable
treatments and at least one complete textbook, monograph or full lecture-note
set. LA-14 uses Conrad plus Treil; LA-15 uses Conrad plus Eliashberg;
LA-16--LA-20 and LA-22 use Driscoll--Braun plus Cornell, with Axler and Treil
where relevant; LA-21 uses Greenbaum--Li--Overton plus Driscoll--Braun and the
published analysis pages.

**Seams consumed.** `tensor-products-of-modules` supplies generic tensor
products, product bases, Hom--tensor and contraction. The published determinant
and inner-product pages supply top-wedge and metric inputs. The published
spectral/SVD page supplies singular values, the operator norm, polar
decomposition and min--max theory. `rn-as-a-normed-space`,
`the-total-derivative`, `mixed-partials-taylor-and-extrema`,
`the-inverse-function-theorem-completed` and
`convex-and-semicontinuous-functions-on-rn` supply every finite-dimensional
analytic prerequisite used here. `modules-over-a-pid-and-canonical-forms`
already owns Smith and rational canonical forms; they are not re-minted.

**Scope denials.** Stiefel/Grassmann optimisation is deferred until Riemannian
geometry; randomized numerical linear algebra until probability and
concentration; full Perron--Frobenius until n-dimensional Brouwer or two
complete algebraic proofs; pseudospectra and general matrix functions until a
dedicated two-source harvest; infinite-dimensional spectral theory until
functional analysis. None is used load-bearingly below.

**Unresolved forward references: none load-bearing. Blockers: none.** Every
direct existing prerequisite was verified published, every proposed A page is
below the 60-item ceiling, and every B page is a leaf. Proposed page ids were
checked free against the live repository on 2026-08-28; exact item ids remain a
step-1 responsibility when each pair is commissioned.

**NOTHING IN `items/`, `library/` OR `research/plan-spec.json` WAS TOUCHED BY
THIS FILE.**

---

## 1. What was commissioned, and the reconciliation against disk

The commission is to enrich the completed linear-algebra category after reading
every published A/B pair, comparing it one complete source at a time with at
least three rigorous textbooks plus complete lecture notes and relevant arXiv
articles, and verifying that multivariable-calculus prerequisites are already
available. The result must be a page plan whose build order is justified by the
live dependency graph, not by textbook chapter order.

The disk reconciliation gives a strong baseline rather than an empty category.
The thirteen published A pages, each with a published B companion, are:

| page id | what is already established and is therefore cited |
|---|---|
| `vector-spaces-and-subspaces` | vector spaces over arbitrary fields; subspaces, spans, sums and direct sums |
| `linear-independence-bases-and-dimension` | linear independence, bases, Steinitz, finite dimension, infinite Hamel bases and the recorded choice cost |
| `linear-maps-rank-nullity-and-quotient-spaces` | linear maps, kernels, images, rank--nullity and the published quotient-space interface |
| `matrices-and-the-matrix-of-a-linear-map` | coordinate matrices, multiplication, change of basis, similarity and trace |
| `gaussian-elimination-and-row-reduction` | elementary matrices, RREF, solution sets, row/column rank and invertibility tests |
| `determinants-of-matrices-over-a-commutative-ring` | multilinear/alternating construction, Leibniz formula and multiplicativity over a commutative ring |
| `the-determinant-of-a-linear-operator` | basis independence, cofactors, adjugate and Cramer's rule |
| `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | spectrum, characteristic polynomial, multiplicities, polynomial evaluation, Cayley--Hamilton and polynomial spectral mapping |
| `diagonalisation-and-the-minimal-polynomial` | annihilating/minimal polynomial, primary decomposition, spectral projections and diagonalisation criteria |
| `triangularisation-and-jordan-canonical-form` | invariant flags, generalised eigenspaces and existence/uniqueness of Jordan form |
| `dual-spaces-bilinear-forms-and-inertia` | dual bases, transpose, bilinear/sesquilinear forms, inertia and Schur complements |
| `inner-product-spaces-and-orthogonality` | Cauchy--Schwarz, Gram--Schmidt, orthogonal projections, adjoints, abstract QR existence and least squares |
| `the-spectral-theorem-and-singular-value-decomposition` | Schur, real/complex spectral theorems, positivity, SVD, polar decomposition, operator norm, Eckart--Young, Courant--Fischer, interlacing, Weyl and Gershgorin |

The live pages are stronger than the older prose descriptions in
`plan-algebra-track.md`. Cayley--Hamilton, polynomial spectral mapping, QR
existence, least-squares normal equations, operator norm, SVD and
Eckart--Young are published and must not be planned again.

Generic tensor products and finite multilinear representation are published on
`tensor-products-of-modules`; Smith normal form, invariant factors and rational
canonical form are published on `modules-over-a-pid-and-canonical-forms`.
Exterior powers are still genuinely absent: their alternating quotient and
universal property are new structures, not synonyms for the generic tensor
product.

The reconciliation found no reason to edit a published page. This v2 expansion
therefore adds new pairs only.

---

## 2. What the spec already contains, band by band

Absolute orders below describe the live snapshot read on 2026-08-28 and are not
placement commitments for the new splice.

### Algebraic suppliers

| order | page id | material consumed here |
|---:|---|---|
| 54 | `field-extensions-and-the-complex-numbers` | the field `C`, conjugation, modulus and the real/complex scalar interface |
| 76 | `linear-maps-rank-nullity-and-quotient-spaces` | kernels, images, quotients, rank--nullity and the first isomorphism interface |
| 82 | `the-determinant-of-a-linear-operator` | determinant, adjugate and invertibility |
| 88 | `diagonalisation-and-the-minimal-polynomial` | minimal polynomials and primary decomposition |
| 90 | `triangularisation-and-jordan-canonical-form` | Jordan form and defective examples |
| 92 | `dual-spaces-bilinear-forms-and-inertia` | adjoint/form conventions and Schur complements |
| 94 | `inner-product-spaces-and-orthogonality` | orthogonality, adjoints, projections, QR existence and least squares |
| 106 | `tensor-products-of-modules` | tensor universal property, bases, finite multilinear representation and contraction |
| 112 | `modules-over-a-pid-and-canonical-forms` | Smith, invariant factors and rational canonical form; cited, never duplicated |
| 141 | `the-spectral-theorem-and-singular-value-decomposition` | spectral/SVD/positive-operator and finite perturbation spine |

### Real-analysis and multivariable-calculus suppliers

| order | page id | material consumed here |
|---:|---|---|
| 167 | `rn-as-a-normed-space` | Euclidean and p-norms, norm equivalence, completeness/compactness and vector-valued calculus |
| 229 | `the-total-derivative` | Fréchet derivative, Jacobian, gradient, chain rule and C1 criterion |
| 231 | `mixed-partials-taylor-and-extrema` | Hessian, mixed partials, Taylor theory and finite-dimensional extrema |
| 288.00001 | `the-inverse-function-theorem-completed` | real finite-dimensional inverse and implicit function theorems |
| 288.00005 | `convex-and-semicontinuous-functions-on-rn` | strict convexity and finite-dimensional minimisation used by conjugate gradients |

These analytic pages were read in full. They are sufficient for deterministic
finite-dimensional numerical linear algebra and first-order matrix perturbation.
They are not sufficient for Riemannian optimisation or random-matrix
concentration.

### The dependency answer, stated plainly

- **LA-14 needs** the tensor-product page. Its closure already includes fields,
  complex numbers, linear maps, duality, determinant theory and finite counting.
- **LA-15 needs** tensor products and inner products. Their union already
  supplies determinants and finite counting.
- **LA-16 needs** the Euclidean normed-space page and the spectral/SVD page;
  neither contains the other.
- **LA-17 needs** LA-16. Through it, the spectral, inner-product, elimination
  and numerical-error vocabulary is available.
- **LA-18 and LA-19 need** LA-17. It carries LA-16 and the published spectral
  and computational-QR closure.
- **LA-20 needs** LA-19. Through it, direct QR, eigenvalue algorithms and the
  published minimal-polynomial theory are available.
- **LA-21 needs** LA-18 and the completed inverse-function theorem. Their union
  contains SVD/pseudoinverse/norms plus total derivative, Taylor theory,
  determinants and Euclidean topology.
- **LA-22 needs** LA-20 and the published convexity page. Their union contains
  Krylov/Arnoldi/GMRES, spectral theory and strict convexity.

Those lists are transitive reductions. Adding a lower page already in another
direct prerequisite's closure is redundant and obscures the binding edge.

---

## 3. The owner decisions this file proposes (LA-D1 … LA-D8)

### LA-D1. Published linear algebra is frozen

The expansion adds pages. It does not repair or enrich old ones. No existing
item id changes home, no old page gets an appended example and no category
metadata is part of the commission.

### LA-D2. Four relative anchors, no renumber

LA-14/LA-15 sit immediately after the tensor-product companion; LA-16--LA-20
immediately after the `R^n` normed-space companion; LA-21 immediately after the
completed inverse-function companion; LA-22 immediately after the convexity
companion. Fractional orders preserve every published order. Relative order
within each block is binding.

### LA-D3. Algebraic structures precede physical use

Complexification and exterior/Hodge algebra are built as linear algebra, not
introduced informally inside electromagnetism, relativity or differential
forms. Later physics pages may cite them. LA-15 stops before exterior derivative
and manifold integration.

### LA-D4. Conditioning belongs to problems; stability belongs to algorithms

LA-16 fixes the problem map, norm, scaling and perturbation model before it
defines a condition number. It fixes a floating-point model before it proves an
algorithmic error theorem. Later pages cite those notions.

### LA-D5. Exact arithmetic and floating point are separate theorem scopes

Factorisation existence, Krylov termination and CG conjugacy are exact
algebraic results. Backward stability, loss of orthogonality and computed-error
bounds are conditional on LA-16's arithmetic model.

### LA-D6. Computational QR is new; abstract QR is not

The published inner-product page already proves QR existence. LA-17 owns
Householder/Givens constructions, pivoting, operation counts and stability, and
proves agreement with the old notion.

### LA-D7. Matrix differentiation is real Fréchet calculus

Complex matrix spaces are treated as finite-dimensional real spaces unless
complex differentiability is separately proved. Eigenvector derivatives carry
a gauge; simple-eigenvalue hypotheses appear in Statements; determinant
differentiation uses the adjugate at singular matrices and Jacobi's inverse
formula only on the invertible locus.

### LA-D8. Deferred breadth is recoverable and non-load-bearing

Every denied topic names its missing prerequisite and future destination.
Remarks may point forward, but no immediate theorem cites a deferred result.

---

## 4. The placement table

Each A page is immediately followed by its B companion. Exact fractional values
come from the live neighbouring orders.

| relative position | A page | direct `requires` | expected level |
|---|---|---|---:|
| after `tensor-products-of-modules-examples`, first | `complexification-realification-and-real-structures` | `tensor-products-of-modules` | 22 |
| same splice, second | `exterior-powers-orientation-and-hodge-duality` | `tensor-products-of-modules`, `inner-product-spaces-and-orthogonality` | 22 |
| after `rn-as-a-normed-space-examples`, first | `matrix-norms-condition-numbers-and-numerical-stability` | `rn-as-a-normed-space`, `the-spectral-theorem-and-singular-value-decomposition` | 31 |
| same splice, second | `direct-matrix-factorisations-lu-cholesky-and-qr` | `matrix-norms-condition-numbers-and-numerical-stability` | 32 |
| same splice, third | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | `direct-matrix-factorisations-lu-cholesky-and-qr` | 33 |
| same splice, fourth | `eigenvalue-iterations-and-the-qr-algorithm` | `direct-matrix-factorisations-lu-cholesky-and-qr` | 33 |
| same splice, fifth | `krylov-subspaces-arnoldi-and-gmres` | `eigenvalue-iterations-and-the-qr-algorithm` | 34 |
| after `the-inverse-function-theorem-completed-examples` | `matrix-differentiation-and-first-order-spectral-perturbation` | `the-inverse-function-theorem-completed`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | 34 |
| after `convex-and-semicontinuous-functions-on-rn-examples` | `conjugate-gradients-minres-and-preconditioning` | `krylov-subspaces-arnoldi-and-gmres`, `convex-and-semicontinuous-functions-on-rn` | 35 |

### The eighteen pages at a glance

| pair | A title | B role |
|---|---|---|
| LA-14 | Complexification, Realification and Real Structures | scalar restriction/extension, real forms and conjugate eigenpairs |
| LA-15 | Exterior Powers, Orientation and Hodge Duality | wedges, volumes, Hodge star and characteristic-two failures |
| LA-16 | Matrix Norms, Condition Numbers and Numerical Stability | ill-conditioning, backward error and floating-point examples |
| LA-17 | Direct Matrix Factorisations: LU, Cholesky and QR | pivot failures, worked factorisations, least squares and fill-in |
| LA-18 | The Moore--Penrose Pseudoinverse and Regularised Least Squares | rank-deficient systems, minimum norm, ridge and truncated SVD |
| LA-19 | Eigenvalue Iterations and the QR Algorithm | convergence/failure examples, Hessenberg reduction, shifts and deflation |
| LA-20 | Krylov Subspaces, Arnoldi and GMRES | grade, Arnoldi/Ritz calculations, stagnation and restart |
| LA-21 | Matrix Differentiation and First-order Spectral Perturbation | inverse/determinant derivatives and defective boundaries |
| LA-22 | Conjugate Gradients, MINRES and Preconditioning | SPD/indefinite contrasts and preconditioning failures |

---

## 5. Well-definedness obligations

Each numbered obligation is a proof obligation, not a prose caveat.

| # | page | obligation |
|---:|---|---|
| 1 | LA-14 | `C tensor_R V` carries the stated complex scalar action, and the canonical map from `V` is real-linear and injective |
| 2 | LA-14 | the tensor and `V direct-sum iV` constructions are canonically isomorphic, not merely basiswise equivalent |
| 3 | LA-14 | extension of a real-linear map is unique and functorial; every later use of “the complexification” cites this |
| 4 | LA-14 | a conjugation's fixed points recover the complex space, and an operator descends exactly when it commutes with the conjugation |
| 5 | LA-15 | exterior power is a quotient of tensor power; wedge formulas descend through the alternating relations |
| 6 | LA-15 | increasing-index wedges are spanning and independent, including `k=0`, `k=n`, `k>n` and zero dimension |
| 7 | LA-15 | $\Lambda^kT$, multiplication and the Gram pairing are independent of representatives and coordinates |
| 8 | LA-15 | Hodge star depends on orientation and inner product; existence, uniqueness, sign and square use one convention |
| 9 | LA-16 | every condition number names a problem map, input/output norms and perturbation model |
| 10 | LA-16 | numerical rank names scaling and tolerance and is not confused with exact rank |
| 11 | LA-16 | the floating-point model states excluded exceptional cases before any `gamma_n` theorem uses it |
| 12 | LA-17 | unpivoted LU, PLU and block LU have distinct hypotheses |
| 13 | LA-17 | Cholesky's positive diagonal yields uniqueness, and positive definiteness uses the fixed Hermitian convention |
| 14 | LA-17 | computational QR agrees with published QR; pivoted “rank revealing” is exact only in the exact-rank theorem |
| 15 | LA-18 | the four Moore--Penrose equations yield uniqueness and projector identities before least-squares consequences |
| 16 | LA-18 | least residual and minimum norm are different predicates and both are proved where claimed |
| 17 | LA-18 | Tikhonov and truncated SVD alter the inverse problem; filters and limits are explicit |
| 18 | LA-19 | every eigenvalue iteration states spectral-separation and starting-vector hypotheses |
| 19 | LA-19 | QR iteration is proved similarity-preserving before any convergence statement |
| 20 | LA-20 | exact Arnoldi breakdown, numerical loss of orthogonality and GMRES stagnation are distinct |
| 21 | LA-20 | unrestarted and restarted GMRES have different monotonicity and termination guarantees |
| 22 | LA-21 | complex matrix differentiation is real Fréchet differentiation and every linearity type is stated |
| 23 | LA-21 | eigenvectors have gauge; eigenvalue/projector derivatives are invariant while vector derivatives depend on normalisation |
| 24 | LA-22 | CG's SPD, MINRES's Hermitian and GMRES's general-square settings are never interchanged |
| 25 | LA-22 | exact termination and finite precision are separate; preconditioning tracks transformed norms and residuals |

---

## 6. Ownership seams with the published library

### Tensor products and contraction

`tensor-products-of-modules` owns generic tensor products, their universal
property, tensor bases, finite multilinear representation, Hom--tensor and
trace contraction. LA-14 specialises scalar extension to `C/R`; LA-15 forms an
alternating quotient. Neither repeats the generic construction.

### Determinants and top exterior powers

The determinant pages own determinant existence, uniqueness, multiplicativity
and operator basis-independence. LA-15 proves that the induced action on the top
exterior power is the already-published determinant and may recover
multiplicativity as an agreement corollary, not as a new determinant theory.

### QR and least squares

`inner-product-spaces-and-orthogonality` owns Gram--Schmidt, QR existence,
orthogonal projection and normal equations. LA-17 owns computational
Householder/Givens QR and stability. LA-18 owns minimum-norm rank-deficient
least squares and regularisation. LA-21 owns differentiation of the objective.

### Norms and singular values

`rn-as-a-normed-space` owns vector p-norms and finite-dimensional norm
equivalence. The spectral/SVD page owns the operator 2-norm, singular values,
submultiplicativity and Eckart--Young. LA-16 owns induced 1/infinity matrix
norms, Frobenius norm, conditioning, backward error and numerical rank.

### Canonical forms

Jordan form remains on the published linear-algebra page. Smith and rational
canonical forms remain on `modules-over-a-pid-and-canonical-forms`. LA-20 uses
the relative minimal polynomial of a starting vector but does not rebuild the
canonical-form classification.

### Differentiability

The real-analysis pages own the Fréchet derivative, chain rule, Hessian, Taylor
theory and inverse/implicit function theorems. LA-21 instantiates them on finite
matrix spaces and adds matrix- and eigenpair-specific formulas.

---

## 7. Scope denials

Dropped from the immediate scaffold under the self-contained-scope rule. A
dropped result is deferred, not deleted.

1. **Differential forms on manifolds, exterior derivative, de Rham theory and
   Stokes on manifolds.** LA-15 supplies pointwise multilinear algebra only.
   **Licensed by:** smooth manifolds, tangent/cotangent bundles, partitions of
   unity and integration on manifolds.
2. **Stiefel and Grassmann geometry and orthogonality-constrained
   optimisation.** Edelman--Arias--Smith was obtained in full, but its tangent
   bundles, Riemannian metrics, connections and geodesics are not below this
   track. **Licensed by:** a differential/Riemannian-geometry block.
3. **Randomized range finding, sketching and randomized SVD.** Martinsson--Tropp
   was obtained in full. The live library does not yet provide the full random
   vector/matrix, tail-bound, concentration and matrix-concentration chain.
   **Licensed by:** a completed probability/concentration block.
4. **Full Perron--Frobenius theory.** The harvested proof route uses Brouwer on
   an n-simplex, while the published library has the disk case only. The
   alternate algebraic route has not passed the two-complete-treatment gate.
   **Licensed by:** n-dimensional Brouwer or two full algebraic proofs.
5. **Pseudospectra and full nonnormal resolvent theory.** Eigenvalue condition
   numbers and first-order simple-eigenvalue perturbation remain. **Licensed
   by:** a dedicated two-source harvest and an audit of complex-analysis needs.
6. **General matrix functions, matrix logarithms and fractional powers.** The
   finite spectral functional calculus for normal operators is published;
   branch-dependent functions of nonnormal matrices are not. **Licensed by:** a
   matrix-functions page with the required complex branch theory.
7. **Sparse-direct theory beyond a finite fill-in example.** Elimination trees,
   nested dissection, sparse Cholesky complexity and fill-reducing orderings are
   a computational track. **Licensed by:** graph separators plus a dedicated
   sparse numerical-linear-algebra harvest.
8. **Strong rank-revealing QR.** LA-17 states exact column-pivoted block form and
   numerical cautions only. **Licensed by:** a full strong-RRQR proof source and
   an independent treatment.
9. **Multigrid, domain decomposition and incomplete-factorisation convergence.**
   LA-22 permits elementary preconditioning definitions and examples only.
   **Licensed by:** numerical PDE and sparse-matrix prerequisites.
10. **Infinite-dimensional operator and spectral theory.** Banach/Hilbert
    operators, compact/unbounded operators, spectral measures and continuous
    spectrum belong to functional analysis and mathematical physics.
11. **Open-ended matrix decompositions.** Schur, Jordan, SVD, polar, LU, LDU,
    Cholesky and QR are in scope. CS, generalized SVD, QZ, Takagi, Autonne and
    canonical matrix pencils require separate motivation and source gates.
12. **Applications that introduce undeclared mathematics.** Markov chains,
    PageRank, network flow, mechanics and electromagnetism may appear later
    only when their own A-page prerequisites exist. A B page cannot silently
    define an external subject.

---

## 8. Amendments to other scaffolds

**None.** This file consumes published pages and creates new pages. It proposes
no amendment to `research/plan-algebra-track.md`,
`research/plan-algebra-track-expansion.md`, any real-analysis scaffold or any
published page. If the live spec differs from the snapshot described here, the
conflict is design-versus-spec drift; it is not permission to change an old
owner silently.

---

## 9. What this file provides to future physics and analysis tracks

Everything below is on an A page and therefore citable. No B-page example is a
supplier.

| downstream need | supplying page |
|---|---|
| restriction/extension of real and complex scalars; conjugate eigenpairs; real forms | `complexification-realification-and-real-structures` |
| alternating tensors, oriented volume, top-wedge determinant, Hodge dual and contraction | `exterior-powers-orientation-and-hodge-duality` |
| matrix norm vocabulary, conditioning, residual/backward error and floating-point model | `matrix-norms-condition-numbers-and-numerical-stability` |
| stable finite linear solves and computational orthogonal factorisation | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| general finite least squares, minimum-norm solution and regularised inverse | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| deterministic eigenvalue computation, shifts, Hessenberg form and QR iteration | `eigenvalue-iterations-and-the-qr-algorithm` |
| matrix-free nonsymmetric solves and projected eigenvalue approximations | `krylov-subspaces-arnoldi-and-gmres` |
| derivatives of inverse/determinant/eigenvalues/eigenvectors/projectors/singular values | `matrix-differentiation-and-first-order-spectral-perturbation` |
| SPD energy minimisation, CG, Hermitian-indefinite MINRES and preconditioning | `conjugate-gradients-minres-and-preconditioning` |

The linear-algebra contribution is necessary but not sufficient for a complete
physics track. Newtonian mechanics and classical electromagnetism still need
ODE/PDE, vector calculus and continuum modelling; relativity needs differential
geometry; quantum mechanics ultimately needs functional analysis and operator
theory. This table records only what the present expansion promises.

---

## 10. Choice-strength ledger

The published baseline already records the AC cost of arbitrary Hamel bases.
The new finite-dimensional content introduces no additional choice scheme.

| result family | cost |
|---|---|
| finite-dimensional complexification, realification and real-form calculations | ZF once finite bases/data are supplied |
| exterior powers, orientation, Gram volume and Hodge star in finite dimension | ZF; an orientation is specified, not canonically chosen |
| finite matrix norm and conditioning theorems | ZF |
| LU, Cholesky, Householder/Givens QR and finite operation counts | ZF |
| SVD pseudoinverse, finite least squares and regularisation | ZF |
| finite eigenvalue, Krylov, GMRES, CG and MINRES algorithms | ZF in exact arithmetic |
| matrix differentiation and finite-dimensional inverse-function arguments | ZF, inheriting only the published finite-dimensional analysis assumptions |
| floating-point stability statements | conditional on the explicit arithmetic model, not on a choice principle |

The arbitrary-dimensional universal constructions may cite the published tensor
and basis infrastructure and inherit its recorded foundation tags; this file
does not reprove or strengthen those claims.

---

# 11. The pages

Format per page: relative placement, id, title, category, `requires` (direct, as
page ids; the closure is computed from the spec), then **DEFS / THMS / FS / B**,
traps, and an explicit forward-reference statement. Candidate item ids are
suggestions for scaffolding, not commitments. Every A page has its `-examples`
companion; **B pages are leaves**. The 60-item A-page ceiling is binding.

---

## LA-14. Complexification, Realification and Real Structures

- **placement** immediately after `tensor-products-of-modules-examples`
- **id** `complexification-realification-and-real-structures`
- **category** `linear-algebra`
- **`requires`** `tensor-products-of-modules`
- **estimate** A 18, B 8

**DEFS.** realification of a complex vector space by restriction of scalars;
complexification $\mathbb C\otimes_{\mathbb R}V$ with its canonical real-linear
embedding; the concrete $V\oplus iV$ model; complexification $T_{\mathbb C}$ of
a real-linear map; conjugation / real structure on a complex vector space; the
fixed real form.

**THMS.** the tensor and direct-sum models are canonically complex-linearly
isomorphic (**well-definedness #1/#2**); the universal property of
complexification and uniqueness up to unique isomorphism (#3); a real basis
becomes a complex basis, so finite-dimensional complexification preserves
numerical dimension; realification doubles finite dimension; complexification
is functorial and preserves isomorphisms, kernels, images, finite rank, nullity
and short exact sequences; fixed points of a conjugation form a real space whose
complexification recovers the original complex space; real forms correspond to
conjugations (#4); a complexified operator commutes with canonical conjugation,
and an operator commuting with a specified conjugation descends to the fixed
real form; characteristic and minimal polynomials of a finite real operator are
unchanged under extension to $\mathbb C$; nonreal (generalised) eigenspaces occur
in conjugate pairs; a nonreal eigenvector yields the standard invariant real
two-plane and rotation-scaling block.

**FS.** complexification doubles dimension (realification does); every complex
space has a preferred real form; every complex-linear operator descends to any
chosen real form; complexification creates a real eigenvector whenever it
creates a complex one; $\mathbb C\otimes_{\mathbb R}\mathbb C$ is canonically a
single copy of $\mathbb C$ as a complex algebra (the published tensor example
records the split behaviour, so this page cites it and does not duplicate it).

**B.** $\mathbb R^n$ to $\mathbb C^n$ with the canonical embedding; bounded
real polynomial spaces; realification of $\mathbb C^n$ with an explicit real
basis; the quarter-turn diagonalised after complexification; reconstruction of
the real invariant plane from one complex eigenvector; two distinct
conjugations and their fixed real forms; a complex operator that fails to
commute with a fixed conjugation; a complexified operator with no original real
eigenvector.

**Traps.** The tensor product is over $\mathbb R$. The construction is
basis-independent. Realification and complexification have opposite dimension
behaviour. A complex vector space without a specified conjugation has no
preferred real form. Every map is labelled real-linear, complex-linear or
conjugate-linear.

**Forward references: NONE.**

---

## LA-15. Exterior Powers, Orientation and Hodge Duality

- **placement** immediately after LA-14's B companion
- **id** `exterior-powers-orientation-and-hodge-duality`
- **category** `linear-algebra`
- **`requires`** `tensor-products-of-modules`,
  `inner-product-spaces-and-orthogonality`
- **estimate** A 28, B 10

**DEFS.** alternating $k$-linear map; $\Lambda^kV$ as the quotient of the
$k$-fold tensor power by the repeated-vector relations; pure/decomposable
$k$-vector and wedge product; the graded exterior algebra $\Lambda V$;
$\Lambda^kT$; orientation of a finite-dimensional real vector space; induced
Gram inner product on $\Lambda^kV$; oriented unit volume form; Hodge star;
contraction/interior product as the adjoint of exterior multiplication by a
vector.

**THMS.** the universal property of exterior powers and uniqueness up to unique
isomorphism (#5); wedge is multilinear and alternating; increasing-index wedges
of a basis form a basis (#6), hence
$\dim\Lambda^kV=\binom{\dim V}{k}$ and $\Lambda^kV=0$ above the dimension; a pure
wedge is nonzero iff its vectors are independent; exterior multiplication is
well defined, graded, associative, unital and graded-commutative, with the
characteristic-two formulation stated through alternation; exterior powers are
functorial (#7); the matrix of $\Lambda^kT$ consists of signed $k$-minors; the
top exterior power acts by the published determinant; determinant
multiplicativity follows as an agreement corollary; determinant sign controls
orientation change; the Gram formula gives a well-defined positive-definite
inner product and pure-wedge norm squared equal to the Gram determinant; Hodge
star exists uniquely, is an isometry, has the oriented-orthonormal-basis formula
and satisfies $\star^2=(-1)^{k(n-k)}$ (#8); exterior multiplication and
contraction are adjoint and satisfy the graded anticommutation identity; the
cross product in oriented Euclidean three-space is recovered from wedge and
Hodge star.

**FS.** $\Lambda^kV$ is canonically a subspace of $V^{\otimes k}$ over every
field; skew-symmetric and alternating are identical in characteristic two; an
inner product chooses an orientation; an orientation chooses an inner product;
Hodge star requires only the vector-space structure; every bivector is
decomposable (false in dimension four).

**B.** bases and dimensions of exterior powers of $\mathbb R^2,\mathbb R^3$ and
$\mathbb R^4$; wedge detection of dependence; all exterior powers of a diagonal
map; a second exterior-power matrix matched to its minors; oriented area and
volume from wedges and Gram determinants; Hodge star in dimensions two, three
and four; cross product from $\star(u\wedge v)$; orientation reversal with
fixed metric; a nondecomposable bivector in dimension four; a
characteristic-two witness separating alternation from the unsafe sign-only
definition.

**Traps.** Construct the quotient before manipulating wedge symbols. Do not
divide by $k!$ without a characteristic hypothesis. Orientation and Hodge star
are restricted here to finite-dimensional real inner-product spaces. Do not
introduce differential forms, manifolds, de Rham theory or Maxwell's equations
on this page.

**Forward references: NONE load-bearing.** A Remarks-only pointer to future
differential forms and electromagnetism is permitted and supplies no premise.

---

## LA-16. Matrix Norms, Condition Numbers and Numerical Stability

- **placement** immediately after `rn-as-a-normed-space-examples`
- **id** `matrix-norms-condition-numbers-and-numerical-stability`
- **category** `linear-algebra`
- **`requires`** `rn-as-a-normed-space`,
  `the-spectral-theorem-and-singular-value-decomposition`
- **estimate** A 23, B 10

**DEFS.** absolute and relative forward error; absolute and relative local
condition number of a problem map; matrix norm induced by a published vector
$p$-norm; Frobenius norm; condition number
$\kappa_p(A)=\lVert A\rVert_p\lVert A^{-1}\rVert_p$ of a nonsingular linear
system; normwise and componentwise backward error; forward and backward
stability for an explicit problem family and arithmetic model; standard
relative floating-point model and unit roundoff; numerical rank relative to a
declared norm, scaling and tolerance.

**THMS.** induced norms are compatible with matrix-vector multiplication,
submultiplicative and normalised; the induced $1$-norm is maximum column sum and
the induced infinity-norm maximum row sum; spectral and Frobenius norms are
unitarily invariant and have singular-value formulas and sharp finite-rank
comparisons; first-order perturbation bounds for right-hand-side and matrix
perturbations of $Ax=b$; reciprocal spectral condition number is relative
distance to singularity; residual-to-forward-error bounds; conditioning times
backward error controls forward error to first order (#9); the product lemma
$(1+\delta_1)\cdots(1+\delta_n)=1+\theta_n$ with
$|\theta_n|\le\gamma_n$ under its $nu<1$ hypothesis; componentwise and normwise
floating-point dot-product bounds (#11); normal equations square the spectral
condition number for full-column-rank $A$; exact rank is locally constant at
maximal-rank matrices and discontinuous at nonmaximal-rank matrices; numerical
rank depends on the declared threshold (#10).

**FS.** a small residual guarantees a small solution error; an ill-conditioned
problem proves the algorithm is unstable; a backward-stable algorithm is
forward accurate on every problem; condition number is independent of norm,
coordinates and scaling; numerical rank is an exact invariant; the relative
floating-point model describes overflow, underflow and every exceptional
hardware event without qualification.

**B.** well- and ill-conditioned $2\times2$ systems; low-order Hilbert matrices;
Vandermonde conditioning and node scaling; diagonal rescaling of equivalent
equations; a tiny residual with large forward error; a backward-stable solution
of an ill-conditioned problem; catastrophic cancellation and a stable
reformulation; a numerical dot-product error bound; normal equations versus QR
conditioning; one matrix assigned different numerical ranks under two declared
tolerances.

**Traps.** Cite the published vector $p$-norms, operator $2$-norm, singular
values and submultiplicativity. Do not re-mint them. The floating-point model is
an explicit mathematical assumption with excluded cases. Conditioning belongs
to the problem and stability to the algorithm.

**Forward references: NONE.**

---

## LA-17. Direct Matrix Factorisations: LU, Cholesky and QR

- **placement** immediately after LA-16's B companion
- **id** `direct-matrix-factorisations-lu-cholesky-and-qr`
- **category** `linear-algebra`
- **`requires`** `matrix-norms-condition-numbers-and-numerical-stability`
- **estimate** A 24, B 10

**DEFS.** forward and back substitution; normalised LU and LDU; permutation
matrix, partial pivoting and pivot growth; block LU and Schur complement by
reference to the published form page; Cholesky factorisation $A=LL^*$ with
positive diagonal; Householder reflector; real/complex Givens transformation;
full and reduced computational QR; column-pivoted QR.

**THMS.** triangular substitution correctness, uniqueness and quadratic scalar
operation count; an invertible matrix has unpivoted unit-lower LU iff every
leading principal minor is nonzero (#12); uniqueness of normalised LU/LDU;
elimination multipliers produce the factors; block LU through an invertible
leading block and its Schur complement; every square matrix admits a PLU
factorisation, with the singular boundary stated; computed pivoted LU is a
nearby factorisation under LA-16's model, with unit roundoff and pivot growth
visible; Cholesky exists iff the matrix is Hermitian positive definite and is
unique with positive diagonal (#13); equivalence with positive leading
principal minors and Cholesky pivots; solve/cost theorem; Householder reflectors
and Givens transformations are unitary and annihilate targeted entries;
successive transformations produce full/reduced QR and the stated operation
counts; Householder QR is backward stable under LA-16's model; exact
column-pivoted QR of a rank-$r$ matrix has an invertible leading $r\times r$
triangular block and zero trailing block; reduced QR solves full-column-rank
least squares without squaring the condition number (#14).

**FS.** every invertible matrix has unpivoted LU; PLU factors are unique without
normalisation/pivot conventions; every Hermitian matrix has Cholesky;
semidefinite is enough for a positive-diagonal Cholesky factor; abstract QR
existence proves Householder stability; partial pivoting has a uniformly small
worst-case growth factor; greedy column pivoting automatically supplies every
strong rank-revealing bound.

**B.** an invertible matrix whose first unpivoted pivot is zero; a full PLU
calculation; an LDU calculation and uniqueness check; block LU and Schur solve;
Cholesky factorisation and solve; indefinite and semidefinite Cholesky failures;
Householder QR by hand; Givens QR on a sparse matrix; QR least squares compared
with normal equations; fill-in in a finite sparse elimination.

**Traps.** Do not reprove RREF. Keep LU without pivoting, PLU and block LU
hypotheses separate. QR existence is old; computational construction and
stability are new. Operation counts name the scalar-operation model. “Rank
revealing” is not promoted from a heuristic to a theorem.

**Forward references: NONE.**

---

## LA-18. The Moore--Penrose Pseudoinverse and Regularised Least Squares

- **placement** immediately after LA-17's B companion
- **id** `the-moore-penrose-pseudoinverse-and-regularised-least-squares`
- **category** `linear-algebra`
- **`requires`** `direct-matrix-factorisations-lu-cholesky-and-qr`
- **estimate** A 19, B 9

**DEFS.** Moore--Penrose pseudoinverse by its four equations; Tikhonov/ridge
objective $\lVert Ax-b\rVert_2^2+\lambda\lVert x\rVert_2^2$ for $\lambda>0$;
truncated singular-value pseudoinverse tied to LA-16's numerical rank.

**THMS.** every finite real/complex matrix has a pseudoinverse by SVD and it is
unique (#15); involution, adjoint compatibility and unitary covariance;
$AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and
$\operatorname{im}A^*$; all image/kernel identities; full-column/full-row-rank
formulas; $A^+b$ is the unique minimum-norm least-squares solution (#16); every
least-squares solution is $A^+b+(I-A^+A)z$, with the consistent exact-solution
specialisation; full-rank pseudoinverse formulas through reduced QR; the
Tikhonov objective is strictly convex with unique minimiser
$(A^*A+\lambda I)^{-1}A^*b$; its singular filter factors are
$\sigma/(\sigma^2+\lambda)$; regularised solutions converge to $A^+b$ as
$\lambda\downarrow0$; hard truncated-SVD and smooth Tikhonov filters are
compared (#17); pseudoinversion is continuous on each fixed-rank stratum and
not continuous across rank loss.

**FS.** the pseudoinverse is an ordinary two-sided inverse; $(AB)^+=B^+A^+$
without hypotheses; all least-squares minimisers have minimum norm; normal
equations preserve the condition number; regularisation reconstructs lost
singular directions without changing the problem; pseudoinversion is continuous
on the whole matrix space.

**B.** diagonal pseudoinverse and both projections; overdetermined inconsistent
least squares; underdetermined minimum-norm exact solution; a rank-deficient
family of minimisers; pseudoinverse from reduced QR; ridge filtering of a
diagonal problem; truncated-SVD denoising; a counterexample to reverse-order
pseudoinversion; blow-up at a rank-changing diagonal family.

**Traps.** Projection geometry precedes least squares. Keep least residual and
minimum norm separate. Regularisation changes the inverse problem. Numerical
rank always carries a threshold. The discontinuity boundary is an A-page
result because LA-21 may cite it.

**Forward references: NONE.**
---

## LA-19. Eigenvalue Iterations and the QR Algorithm

- **placement** immediately after LA-18's B companion
- **id** `eigenvalue-iterations-and-the-qr-algorithm`
- **category** `linear-algebra`
- **`requires`** `direct-matrix-factorisations-lu-cholesky-and-qr`
- **estimate** A 21, B 9

**DEFS.** eigenpair residual and normwise backward error; power iteration;
inverse and shifted inverse iteration; Rayleigh-quotient iteration;
simultaneous/subspace iteration; upper-Hessenberg and real symmetric
tridiagonal forms; unshifted/shifted QR iteration, deflation and Wilkinson shift.

**THMS.** the eigenpair residual constructs a minimum-norm perturbation making
the approximate pair exact; power iteration converges projectively at the
eigenvalue-ratio rate under a simple strictly dominant eigenvalue,
diagonalisability and nonzero initial component (#18); residual and Rayleigh
estimate convergence; shifted inverse iteration under a unique nearest
eigenvalue; eigenvectors are stationary points of the Hermitian Rayleigh
quotient and the residual is its constrained gradient; local cubic convergence
of Hermitian Rayleigh iteration near a simple eigenvector; subspace iteration
converges to the dominant invariant subspace under a spectral gap and
nondegenerate initial projection; Householder similarity reduces a general
matrix to Hessenberg and a Hermitian matrix to tridiagonal form; every QR
iterate is unitarily similar to the original; unshifted QR converges under the
explicit diagonalizability, leading-minor and separated-modulus hypotheses;
shifted QR preserves Hessenberg form; away from the tie case, Wilkinson-shifted
symmetric tridiagonal QR has the stated local deflation rate; residual thresholds
give backward-error stopping rules (#19).

**FS.** power iteration converges whenever an eigenvalue of largest modulus
exists; the start vector is irrelevant; equal dominant moduli are harmless;
Rayleigh iteration is globally cubic for arbitrary matrices; every QR iteration
converges to a diagonal matrix; QR produces an eigenbasis for every nonnormal
matrix; small iterate differences are a stronger stopping certificate than the
eigenpair residual.

**B.** power iteration and its rate; equal-modulus cycling; a start orthogonal
to the dominant left eigendirection; shifted inverse iteration targeting a
non-dominant eigenvalue; Hermitian Rayleigh iteration in dimension two;
Householder Hessenberg reduction; unshifted versus shifted QR steps; Wilkinson
shift and deflation; defective Jordan sensitivity.

**Traps.** State every convergence hypothesis. Projective convergence handles
sign/phase alternation. Rayleigh cubic convergence is local and Hermitian.
Schur information can exist without an eigenbasis. Do not assert global
nonsymmetric QR convergence.

**Forward references: NONE.**

---

## LA-20. Krylov Subspaces, Arnoldi and GMRES

- **placement** immediately after LA-19's B companion
- **id** `krylov-subspaces-arnoldi-and-gmres`
- **category** `linear-algebra`
- **`requires`** `eigenvalue-iterations-and-the-qr-algorithm`
- **estimate** A 18, B 8

**DEFS.** Krylov subspace $K_m(A,b)$; grade of $b$ relative to $A$ and relative
minimal polynomial; Arnoldi process; Ritz values/vectors; GMRES iterate as
residual minimisation over an affine Krylov space; restarted GMRES$(m)$;
matrix-free access model.

**THMS.** $K_m(A,b)=\{p(A)b:\deg p<m\}$; its dimensions grow by one until the
grade and then stabilise; for invertible $A$ the exact solution enters the
Krylov space at that grade; before breakdown Arnoldi gives an orthonormal basis
and $AQ_m=Q_{m+1}\bar H_m$; exact lucky breakdown is equivalent to invariance
of the current Krylov space (#20); the Ritz residual formula; Arnoldi reduces
GMRES to a small Hessenberg least-squares problem; GMRES residual norms minimise
over the affine space and are nonincreasing before restart; residual-polynomial
characterisation with $p(0)=1$; exact termination no later than the relative
grade in exact arithmetic; the diagonalizable-matrix residual bound retains the
eigenvector condition factor; restart preserves cyclewise minimisation but not
full finite termination or convergence guarantees (#21).

**FS.** Krylov dimension always equals the iteration number; Ritz values are
exact eigenvalues; GMRES error is monotone because residual is; eigenvalues
alone determine nonnormal convergence; unrestarted and restarted GMRES have the
same termination theorem; exact Arnoldi breakdown and finite-precision loss of
orthogonality are the same event.

**B.** a Krylov chain with early stabilisation and its relative minimal
polynomial; Arnoldi factorisation by hand; lucky breakdown; Ritz pairs and
residuals; GMRES on a small nonsymmetric system; stagnation for a nonnormal
matrix; full versus restarted GMRES; matrix-free GMRES for a sparse operator.

**Traps.** The relative minimal polynomial, not matrix size alone, controls
exact termination. Residual monotonicity is not error monotonicity. Nonnormal
convergence retains eigenvector conditioning. Every finite-termination claim
says exact arithmetic.

**Forward references: NONE.**

---

## LA-21. Matrix Differentiation and First-order Spectral Perturbation

- **placement** immediately after
  `the-inverse-function-theorem-completed-examples`
- **id** `matrix-differentiation-and-first-order-spectral-perturbation`
- **category** `linear-algebra`
- **`requires`** `the-inverse-function-theorem-completed`,
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`
- **estimate** A 22, B 9

**DEFS.** real Fréchet derivative on real and complex matrix spaces under the
Frobenius norm; compatible left/right eigenvectors for a simple eigenvalue and
normalisation $y^*x=1$; condition number of a simple eigenvalue; simple spectral
projector $P=xy^*/(y^*x)$; reduced resolvent/group inverse on the complementary
invariant subspace.

**THMS.** matrix sum, product and adjoint differential rules; derivative of
inversion $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$; determinant differential
$D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H)$ at every matrix and
Jacobi's inverse formula on the invertible locus; trace, quadratic-form and
least-squares gradient/Hessian formulas; left and right eigenvectors of a
simple eigenvalue pair nontrivially and can be normalised; the real inverse
function theorem supplies local $C^1$ branches of a simple eigenvalue and a
gauge-fixed eigenvector; $\lambda'=y^*A'x$; the normwise condition-number
formula; projector scale invariance; reduced-resolvent identities; first
derivative formulas for the simple spectral projector and gauge-fixed
eigenvector; the Hermitian simplification $y=x$; directional derivative
$\operatorname{Re}(u^*Hv)$ of a simple positive singular value; square-root
eigenvalue splitting at a defective point and failure of a unique differentiable
ordered eigenvector branch through a crossing (#22/#23).

**FS.** Jacobi's inverse formula is valid unchanged at singular matrices; complex
matrix calculus here is holomorphic by default; eigenvectors have a unique
derivative without a normalisation; the simple-eigenvalue formula survives a
defective eigenvalue; eigenprojector derivatives have the same gauge dependence
as eigenvectors; singular values are differentiable through every multiplicity
and rank change.

**B.** inverse derivative in dimension two; determinant differential at an
invertible and a singular matrix; least-squares gradient/Hessian; simple
nonnormal eigenvalue derivative using left/right vectors; Hermitian derivative;
two eigenvector gauges; square-root splitting at a Jordan block; derivative of
a simple singular value.

**Traps.** Work over the underlying real matrix space. The adjugate determinant
formula and Jacobi inverse formula have different domains. Simplicity is
load-bearing. Eigenvector phase/scale is a gauge. Do not differentiate through
a crossing, multiplicity or rank change without a separate theorem.

**Forward references: NONE.**

---

## LA-22. Conjugate Gradients, MINRES and Preconditioning

- **placement** immediately after
  `convex-and-semicontinuous-functions-on-rn-examples`
- **id** `conjugate-gradients-minres-and-preconditioning`
- **category** `linear-algebra`
- **`requires`** `krylov-subspaces-arnoldi-and-gmres`,
  `convex-and-semicontinuous-functions-on-rn`
- **estimate** A 21, B 9

**DEFS.** energy inner product and energy norm for Hermitian positive-definite
$A$; SPD quadratic energy; Krylov Galerkin iterate; conjugate-gradient
recurrence; Lanczos process as Hermitian Arnoldi; MINRES iterate; stationary
matrix-splitting iteration $A=M-N$; left, right and symmetric SPD
preconditioning.

**THMS.** $Ax=b$ is the unique minimiser of the strictly convex energy;
Galerkin orthogonality; before convergence every CG denominator is positive;
residuals are mutually orthogonal and search directions $A$-conjugate; the
$m$th iterate uniquely minimises energy/$A$-norm error over its affine Krylov
space; exact termination in at most $n$ steps and no later than the relative
grade; the Chebyshev condition-number bound; finite precision can lose exact
orthogonality, conjugacy and $n$-step termination (#25); Hermitian Arnoldi gives
the Lanczos three-term recurrence and symmetric tridiagonal projection; MINRES
minimises the $2$-norm residual over the Hermitian Krylov space, including
indefinite matrices; a stationary splitting converges for every start iff its
iteration matrix has spectral radius below one; invertible preconditioners give
equivalent systems with residual/norm transformations explicit; an SPD
preconditioner preserves a Hermitian positive-definite transformed problem; the
CG bound uses the condition number of the symmetrically preconditioned operator
(#24/#25).

**FS.** CG applies to every invertible matrix; positive semidefinite is enough;
CG and MINRES minimise the same quantity; exact $n$-step termination is a
floating-point theorem; every invertible preconditioner improves conditioning;
left, right and symmetric preconditioning preserve the same residual norm;
incomplete Cholesky automatically guarantees convergence acceleration.

**B.** CG on an SPD $2\times2$ system; termination at a relative grade smaller
than dimension; clustered versus spread eigenvalues; indefinite and
nonsymmetric CG failures; MINRES on a symmetric indefinite system; Jacobi and
Gauss--Seidel splitting matrices with spectral-radius tests; diagonal SPD
preconditioning; a preconditioner that worsens the relevant condition number.

**Traps.** CG requires SPD. MINRES requires Hermitian structure. GMRES is the
general nonsymmetric method developed earlier. Exact termination is not a
floating-point promise. Preconditioning changes the norm and residual
interpretation and must be analysed rather than praised generically.

**Forward references: NONE.**

---

## 12. Build-frontier note (for the orchestrator; order $\ne$ build order)

Computed from disk and the public site, 2026-08-28. All thirteen existing
`linear-algebra` A/B pairs are published. The relative order in §11 is a reading
order; a dependency level is the longest path in the live `requires` graph and
must be recomputed when this prose is applied to `research/plan-spec.json`.

- **Wave 1:** LA-14, LA-15 and LA-16. Each consumes only published pages. LA-14
  and LA-15 are independent siblings after the tensor-product examples; LA-16
  is the numerical-analysis root after the normed-space examples.
- **Wave 2:** LA-17, after LA-16.
- **Wave 3:** LA-18 and LA-19, independently after LA-17.
- **Wave 4:** LA-20 after LA-19; LA-21 after LA-18 and the published
  inverse-function theorem.
- **Wave 5:** LA-22 after LA-20 and the published finite-dimensional convexity
  page.
- **Every B companion is a leaf.** It requires only its A page and is never a
  prerequisite of another A page.
- **Nothing here changes the current frontier by fiat.** The live graph decides
  which eligible pair is next if other tracks have equal or lower dependency
  levels.

The expected A-page dependency levels at the verified snapshot are 22 for
LA-14/LA-15, 31 for LA-16, 32 for LA-17, 33 for LA-18/LA-19, 34 for
LA-20/LA-21 and 35 for LA-22. A mismatch after integration is a reason to audit
the splice and prerequisites, not to force these numbers into the spec.

---

## 13. Sources

Consulted one complete source at a time, 2026-08-28. “Complete” means that the
full book, note set or article—not a preview, table of contents or isolated
excerpt—was available for inspection. The comparisons below record what each
source added after the already-published thirteen-pair spine was treated as
fixed. Sources are evidence for coverage and theorem hypotheses; they do not
override the repository's ownership seams.

### 13.1 Complete rigorous textbooks

1. **Sheldon Axler, *Linear Algebra Done Right*, 4th ed.** Complete 390-page
   open-access author PDF. Chapters 1--8 confirm that the published spine
   already owns the pure finite-dimensional core; §§6C, 7E--7F and chapter 9
   supplied the pseudoinverse, SVD, operator-norm and alternating-multilinear
   comparison. Disposition: no repair of published articles; LA-18 receives
   the missing pseudoinverse geometry and LA-15 receives exterior powers rather
   than another determinant treatment.
   <https://linear.axler.net/LADR4e.pdf>
2. **Jim Hefferon, *Linear Algebra*.** Complete free author textbook and full
   exercise-answer volume. The systems, vector-space, determinant,
   eigenstructure and canonical-form progression confirmed that the library's
   elementary and proof-oriented core is already broad. Disposition: no new
   elementary pair; retain explicit counterexamples and computational examples
   in each B companion.
   <https://hefferon.net/linearalgebra/>
3. **Sergei Treil, *Linear Algebra Done Wrong*.** Complete nine-chapter honors
   text, accessible HTML and PDF supplied by the author. The duality,
   bilinear-form, tensor, Jordan and spectral treatments supplied an independent
   check of the published core and a second proof-capable treatment for LA-14.
   Disposition: no duplicate duality/Jordan pages; add complexification and
   real structures where the library has a genuine seam.
   <https://sites.google.com/a/brown.edu/sergei-treil-homepage/linear-algebra-done-wrong>
4. **Tobin A. Driscoll and Richard J. Braun, *Fundamentals of Numerical
   Computation*.** Complete open online textbook in Julia, MATLAB and Python
   editions. Chapters 1--3 and 7--8 supplied the problem/algorithm distinction,
   conditioning and stability, direct factorisations, least squares,
   eigenvalue iterations and Krylov methods. Disposition: LA-16--LA-20 and
   LA-22 form one dependency-stratified numerical lane; software demonstrations
   remain examples, while the A pages state mathematical algorithms and proofs.
   <https://fncbook.com/>

### 13.2 Complete lecture notes and focused author notes

5. **David Bindel, Cornell CS 4220, Spring 2022.** The course page exposes all
   eighteen lecture PDFs plus the background note, spanning floating point,
   perturbation, LU/QR/Cholesky, least squares, eigenproblems, Krylov methods,
   stationary iterations, CG and preconditioning. Read as a complete set, in
   date order. Disposition: independent numerical treatment for LA-16--LA-20
   and LA-22; its explicit failure modes populate FS and Traps.
   <https://www.cs.cornell.edu/courses/cs4220/2022sp/>
6. **Cambridge Part IB, *Linear Algebra*.** Complete 96-page lecture-note PDF.
   It independently checked the algebraic-to-inner-product ordering, quotient
   spaces, duality, canonical forms and spectral theory. Disposition: those
   topics are already published; no new page is minted from this source.
   <https://dec41.user.srcf.net/notes/IB_L/linear_algebra.pdf>
7. **Keith Conrad, “Complexification” and “Exterior Powers.”** Complete author
   PDFs from the author's expository-note index. They supply the universal
   constructions, conjugation/real-form cautions, exterior-power basis theorem,
   functoriality and determinant/top-wedge seam. Disposition: primary treatment
   for LA-14 and LA-15, with generic tensor products cited from the published
   algebra page rather than reproved.
   <https://kconrad.math.uconn.edu/blurbs/>
8. **Yakov Eliashberg, *Multilinear Algebra, Differential Forms and Stokes'
   Theorem*.** Complete 199-page Stanford notes; Part I was read for alternating
   algebra, orientation, volume and Hodge-star material. Disposition: second
   proof-capable treatment for LA-15. Differential forms, integration and
   Stokes are deliberately left to the differential-geometry track.
   <https://math.stanford.edu/~eliash/Public/math177/177-diff-forms.pdf>

### 13.3 Relevant full-text research articles

9. **Anne Greenbaum, Ren-Cang Li and Michael L. Overton, “First-order
   Perturbation Theory for Eigenvalues and Eigenvectors.”** Complete arXiv PDF;
   two proofs of the simple-eigenvalue/eigenvector formulas, normalisation,
   eigenprojectors and the multiple-eigenvalue boundary. Disposition: primary
   focused source for LA-21; the page uses the real Fréchet/implicit-function
   route because those prerequisites are already published.
   <https://arxiv.org/pdf/1903.00785>
10. **Alan Edelman, Tomás A. Arias and Steven T. Smith, “The Geometry of
    Algorithms with Orthogonality Constraints.”** Complete arXiv PDF.
    Disposition: inspected for matrix-manifold optimisation, then deferred: its
    Stiefel/Grassmann geometry needs a Riemannian-geometry owner and is not a
    prerequisite of any page here.
    <https://arxiv.org/pdf/physics/9806030>
11. **Per-Gunnar Martinsson and Joel A. Tropp, “Randomized Numerical Linear
    Algebra: Foundations and Algorithms.”** Complete arXiv monograph.
    Disposition: inspected, then deferred until probability, expectation,
    concentration and randomized-algorithm prerequisites are present.
    <https://arxiv.org/pdf/2002.01387>

### 13.4 Two-treatment coverage check

| pair | first proof-capable treatment | independent treatment | disposition |
|---|---|---|---|
| LA-14 | Conrad, “Complexification” | Treil, relevant scalar-extension/real-complex sections | build |
| LA-15 | Conrad, “Exterior Powers” | Eliashberg, Part I | build |
| LA-16 | Driscoll--Braun, ch. 1 and ch. 7 | Cornell perturbation/conditioning notes | build |
| LA-17 | Driscoll--Braun, chs. 2--3 | Cornell LU/QR/Cholesky notes | build |
| LA-18 | Axler, §6C and SVD chapters | Driscoll--Braun, ch. 3 | build |
| LA-19 | Driscoll--Braun, ch. 7 | Cornell eigenvalue notes | build |
| LA-20 | Driscoll--Braun, ch. 8 | Cornell Arnoldi/GMRES notes | build |
| LA-21 | Greenbaum--Li--Overton | Driscoll--Braun perturbation treatment plus the published IFT | build |
| LA-22 | Driscoll--Braun, ch. 8 | Cornell CG/MINRES/preconditioning notes | build |

The source-by-source comparison therefore changes the library only where two
independent complete treatments expose a genuine unowned layer. Perron--Frobenius,
matrix manifolds, randomized linear algebra, pseudospectra, general matrix
functions and infinite-dimensional operator theory remain explicit denials,
not hidden forward references.
