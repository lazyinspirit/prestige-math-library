# Numerical Linear Algebra and Approximation

Status: prose contract repaired and audited in [linear-audit.md](numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md). Its per-pair repaired contracts and disposition are controlling wherever this generated intake text is vague or conflicts with the repairs below. Not an executable frontier or proof-acceptance record; local theorem/algorithm proof bodies and source reading remain future work as recorded there.

This category contains 51 proposed A/B pairs. Reuse canonical published statistics and linear algebra suppliers; do not duplicate their methods. Every unmet prerequisite belongs to this four-category design. Sources remain acquisition targets unless actual reading is documented.

`requires` is namespace-normalized below: a key in the 178-pair inventory is an internal proposed A-page edge, while a current library page ID is page context until its exact item contract is named. Preserved raw amendment records are historical provenance, not executable edges. In particular, the raw `NA-01` amendment entry is resolved by its own integration disposition: the fully covered original scope stays external and only its new compensated-arithmetic delta is assigned to NA-02; there is no new NA-01 pair edge.

## Pair index

| Key | A page |
| --- | --- |
| NA-02 | `finite-precision-direct-factorizations` |
| NA-03 | `sparse-matrix-models-and-kernel-costs` |
| NA-10 | `polynomial-interpolation-and-remainder` |
| NA-46 | `optimal-star-discrepancy-order-in-dimension-at-least-three` |
| APP-RBF | `radial-basis-and-kernel-interpolation` |
| APP-SPLINE | `spline-evaluation-and-interpolation-algorithms` |
| LIN-FFT | `computed-fast-transforms-and-convolution` |
| LIN-SPARSE | `sparse-direct-elimination-and-ordering` |
| LIN-SVD | `computed-singular-values-and-rank-revealing-factorizations` |
| NA-04 | `stationary-iterations-and-relaxation` |
| NA-11 | `polynomial-approximation-and-chebyshev-interpolation` |
| NA-12 | `composite-quadrature-rules` |
| VAL-INTERVAL | `outward-rounded-interval-and-ball-arithmetic` |
| APP-MINIMAX | `minimax-approximation-and-remez-algorithms` |
| APP-SHAPE | `shape-preserving-piecewise-polynomial-interpolation` |
| APP-WAVELET | `wavelet-transforms-and-nonlinear-approximation` |
| GEO-PRED | `certified-geometric-predicates` |
| LIN-NUFFT | `nonuniform-fast-fourier-transforms` |
| LIN-SCHUR | `computed-schur-decompositions-and-nonnormal-spectra` |
| LIN-STRUCT | `toeplitz-circulant-and-displacement-structured-solvers` |
| LIN-TT | `tensor-train-compression-and-truncation-error` |
| NA-05 | `krylov-methods-and-lanczos-convergence` |
| NA-08 | `randomized-low-rank-approximation` |
| PC-EWALD | `ewald-periodic-potentials-and-particle-mesh-error` |
| QUAD-EXTRAP | `clenshaw-curtis-and-extrapolation-quadrature` |
| QUAD-OSC | `oscillatory-filon-and-levin-quadrature` |
| APP-RATIONAL | `barycentric-rational-and-aaa-approximation` |
| GEO-DEL | `delaunay-triangulations-and-voronoi-computation` |
| LIN-HIER | `hierarchical-low-rank-matrices-and-error-propagation` |
| LIN-QZ | `generalized-eigenvalue-pencils-and-qz-methods` |
| LIN-SKETCH | `sketched-least-squares-and-subspace-embeddings` |
| LIN-SYL | `sylvester-and-lyapunov-matrix-equations` |
| NA-06 | `preconditioner-algorithms-and-residual-metrics` |
| NA-14 | `adaptive-quadrature-and-error-indicators` |
| VAL-LINEAR | `verified-linear-systems-and-spectral-enclosures` |
| LIN-CUR | `interpolative-cur-and-nystrom-decompositions` |
| LIN-EIGITER | `restarted-and-block-eigensolvers` |
| LIN-FMM | `fast-multipole-expansions-and-error` |
| LIN-MFUN | `matrix-functions-and-scaling-squaring` |
| NA-07 | `multigrid-methods-and-complexity` |
| VAL-ROOT | `interval-newton-krawczyk-and-polynomial-root-isolation` |
| LIN-DMRG | `alternating-tensor-optimization-and-effective-eigenproblems` |
| LIN-EXPA | `matrix-exponential-and-phi-function-actions` |
| LIN-POLYEIG | `polynomial-eigenproblems-and-linearization` |
| LIN-RIC | `numerical-algebraic-riccati-equations-and-stabilizing-branches` |
| NA-13 | `gaussian-quadrature` |
| LIN-SQRTFILTER | `square-root-covariance-update-error-and-stability` |
| PC-SFUN | `stable-special-function-recurrences-and-certified-evaluation` |
| QUAD-SING | `singular-and-infinite-interval-quadrature` |
| QUAD-SMOL | `sparse-grid-cubature-and-mixed-regularity` |
| PC-GINT | `gaussian-basis-integral-recurrences-and-boys-error` |

## NA-02 — Finite-precision direct factorizations and least squares

A: `finite-precision-direct-factorizations`. B: `finite-precision-direct-factorizations-examples`.

### Scope

Only missing finite-precision contracts: successful/failed-pivot rounded real/complex Cholesky with declared sqrt arithmetic; componentwise/normwise backward error; genuine reflector-formation/local-action error proving the current QR A1 premise; computed Q*b/triangular solve/full-rank least-squares backward theorem. A bounded failure-aware Cholesky execution wrapper is allowed because existing canonical definition only defines factorisation; reuse factorisation/Householder/QR methods and existing exact correctness/cost rather than reissue them.

### Proof construction

Derive each Cholesky pivot from the positive-definite Schur complement; bound every rounded sum, square root, and division; assemble the Hermitian residual A+E=Lhat Lhat*. For Householder QR, prove stable scaling and reflector construction, then the rank-one update perturbation, including the zero-vector case; aggregate local errors by exact orthogonality. For computed least squares, add the Q*b and triangular-solve residuals before applying the least-squares condition bound. Derive flop costs only under an explicit operation convention.

### Examples

positive-definite 2×2 Cholesky recurrence and a computed residual; a full-rank least-squares problem comparing normal equations with reduced QR; an ill-conditioned design matrix showing why stability does not imply small forward error.

### Prerequisite interfaces (namespace-normalized)

No same-frontier pair-key edge is declared in this record.

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` → `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items inspected: `def-standard-relative-floating-point-model-and-unit-roundoff`, `lem-product-of-one-plus-deltas-gives-theta-n`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, `def-normwise-and-componentwise-backward-error-for-linear-systems`, `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, `def-cholesky-factorisation-with-positive-diagonal`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `def-householder-reflector`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`, `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots`, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-02** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-02` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-02** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-01",
    "resolved_owner": "NA-02",
    "design": {
      "owner": "NA-01",
      "change": "Add compensated summation (Kahan/Neumaier), pairwise summation and error-free transforms as algorithm definitions, distinct from plain gamma_n dot-product theorem. Prove pairwise depth bound gamma_ceil(log2 n) sum|x_i|, and compensation bound with explicit constant/higher-order term, overflow/range and final-rounding premises. Dot-product/FMA exact-transform assumptions named. Exact cancellation and subnormal counterexamples in B. All two-sum/two-product lemmas owned here; GEO-PRED consumes rather than duplicates. GEO-PRED must consume these error-free transform lemmas rather than reauthor them.",
      "sources": [
        "higham"
      ],
      "requires": [],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "higham",
          "title_and_locator": "Nicholas Higham, Accuracy and Stability of Numerical Algorithms, 2e, SIAM, https://doi.org/10.1137/1.9780898718027 ; Chapters 3–4, 8–10, 16, 18–20, 24 as appropriate.",
          "urls": [
            "https://doi.org/10.1137/1.9780898718027"
          ]
        }
      ],
      "integration_disposition": "NA-01 original fully existing-covered: assign this NEW compensation/error-free delta to earliest retained NA-02 finite-precision extension, not a reintroduced NA-01 pair."
    },
    "reason": "New compensated/pairwise/error-free transform mathematics lives in finite-precision extension NA02; fully-covered NA01 stays external."
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-02",
    "resolved_owner": "NA-02",
    "design": {
      "owner": "NA-02",
      "change": "Add iterative refinement/mixed precision: residual precision u_r, factor/solve precision u_f, working updates u_w. Prove correction iteration error recurrence ||e_(k+1)|| <= q||e_k||+eta with q<1 established from factor/preconditioner error and kappa(A); derive attainable residual/forward floor. Define finite budget, failure and successful-stagnation statuses. Mixed precision cannot inherit exact refinement convergence. Rank-deficient/minimum-norm LS numerical delta is owned by LIN-SVD; keep NA-02 -> LIN-SVD out of the prerequisite graph because LIN-SVD consumes the stable reflector suppliers in NA-02.",
      "sources": [
        "higham"
      ],
      "requires": [
        "NA-01"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "higham",
          "title_and_locator": "Nicholas Higham, Accuracy and Stability of Numerical Algorithms, 2e, SIAM, https://doi.org/10.1137/1.9780898718027 ; Chapters 3–4, 8–10, 16, 18–20, 24 as appropriate.",
          "urls": [
            "https://doi.org/10.1137/1.9780898718027"
          ]
        }
      ]
    },
    "reason": "approved scope extension"
  }
]


## NA-03 — Sparse matrix models and kernel costs

A: `sparse-matrix-models-and-kernel-costs`. B: `sparse-matrix-models-and-kernel-costs-examples`.

### Scope

New CSR representation/access and bounded matvec algorithm, duplicate/explicit-zero conventions, exact stored-entry O(m+s) arithmetic/storage; elimination fill/order examples. Matrix-free access and triangular kernels remain canonical imports.

### Proof construction

Count stored values, column indices, row pointers, and loop iterations under the declared format. Treat algorithmic costs as arithmetic/storage counts, not runtime or memory-bandwidth claims. Use a concrete elimination graph to show fill without asserting a general fill bound.

### Examples

CSR for a one-dimensional tridiagonal matrix; one matvec count; a sparse elimination ordering that creates fill.

### Prerequisite interfaces (namespace-normalized)

No same-frontier pair-key edge is declared in this record.

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.
- `krylov-subspaces-arnoldi-and-gmres` → `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md` (exact imported definition below; required page binding for native Step-1 drift E1).

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-matrix-free-access-model-for-krylov-methods`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`.

The published matrix-free definition permits applying `v↦Av`, vector additions/scalar multiples, and inner products/norms when orthogonalization or residual measurement needs them; it permits Arnoldi/GMRES implementation without assembling A. Reuse that definition from its owning Krylov page. It supplies no CSR representation, sparse operation count, finite-precision guarantee or convergence theorem: those claims keep their existing local/canonical owners. Add this one published page to NA-03’s `requires`; indirect consumers inherit the routing edge without new method definitions or changed mathematical claims.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-03** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-03` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-03** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-10 — Polynomial interpolation and remainder

A: `polynomial-interpolation-and-remainder`. B: `polynomial-interpolation-and-remainder-examples`.

### Scope

New distinct-node polynomial/barycentric interpolation construction, exact denominator identity and Rolle remainder; finite arithmetic node/range failure wrapper. Published natural cubic interpolation/spline quasi-interpolation is a different method and must not be reintroduced.

### Proof construction

Verify cardinal values for existence; the difference of two interpolants has n+1 roots, so polynomial root count gives uniqueness. For the remainder, use an auxiliary multiple of the node product and repeated Rolle. Use the inspected published `lem-higher-order-rolle` under its stated ordered-zero and differentiability hypotheses; its body is an actual supplier, so do not duplicate it. Source samples that merely state interpolation uniqueness still do not discharge the cardinal-polynomial proof.

### Examples

quadratic interpolation at three nodes; a pointwise remainder estimate; equispaced nodes with Runge growth despite polynomial density.

### Prerequisite interfaces (namespace-normalized)

No same-frontier pair-key edge is declared in this record.

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `fundamental-trigonometric-identities` → `library/real-analysis/fundamental-trigonometric-identities.md`.
- `the-derivative-and-mean-value-theorems` → `library/real-analysis/the-derivative-and-mean-value-theorems.md`.
- `darboux-lhopital-and-taylor` → `library/real-analysis/darboux-lhopital-and-taylor.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `cor-mean-value-theorem`, `lem-higher-order-rolle`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `thm-rolle`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-10** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-10` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-10** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-46 — Optimal star-discrepancy order in dimension at least three

A: `optimal-star-discrepancy-order-in-dimension-at-least-three`. B: `optimal-star-discrepancy-order-in-dimension-at-least-three-examples`.

### Scope

New dated open-problem formulation/status carrier for fixed d>=3 optimal star-discrepancy order; use canonical star-discrepancy definition, never a logical supplier.

### Proof construction

None is claimed. Future authoring is source/status review only: kind open-problem and op- ID; sections Open problem and Status; provenance.proof: not-applicable; no Proof, Refutation, Verification, counterexample, proof strategy or proof stamp. Its only prerequisite may be the earlier star-discrepancy definition. It is never a dependency or premise for any other pair.

### Examples

compare the known planar order with mismatched d≥3 upper/lower bounds; no proposed example is a counterexample to the open question.

### Prerequisite interfaces (namespace-normalized)

No same-frontier pair-key edge is declared in this record.

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `quasi-monte-carlo-discrepancy-and-rules` → `library/bayesian-computational-statistics/quasi-monte-carlo-discrepancy-and-rules.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-star-discrepancy-and-digital-net`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-46** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-46` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-46** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-RBF — Radial basis and kernel interpolation

A: `radial-basis-and-kernel-interpolation`. B: `radial-basis-and-kernel-interpolation-examples`.

### Scope

[
  "Define positive-definite radial kernel interpolation at distinct sites, and conditionally positive-definite augmented system with polynomial side conditions and unisolvent sites.",
  "Prove uniqueness via quadratic form and polynomial unisolvence; define native-space interpolant and power function P_X(x), prove |f(x)-s_X f(x)| <= P_X(x)||f||_H for f in the native space.",
  "For one fixed Wendland or Matérn kernel prove native Sobolev equivalence and fill-distance/separation error estimate on an explicit regular domain; Gaussian flat-shape illconditioning and stable RBF-QR are separate numerical claims, with a defined stable basis algorithm and proved change-of-basis before promising stability.",
  "Define RBF-FD weights by augmented local moment solve; prove polynomial reproduction/local truncation only. PDE stability is owned by PDE consumer."
]

### Proof construction

RKHS projection/Cauchy-Schwarz and saddle-system nullspace argument; Fourier characterization/local zeros lemma is fully local prerequisite; finite moment expansion for RBF-FD.

### Examples

[
  "Scattered interpolation of smooth surface",
  "Duplicate-site singularity",
  "Small fill distance versus bad separation/conditioning"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-RBF** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-RBF` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-RBF** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-SPLINE — Spline evaluation and interpolation algorithms

A: `spline-evaluation-and-interpolation-algorithms`. B: `spline-evaluation-and-interpolation-algorithms-examples`.

### Scope

[
  "Reuse def-b-spline-space-and-basis including its Cox-de Boor recurrence, zero-denominator and endpoint conventions. Define ONLY de Boor coefficient evaluation (distinct from evaluating all basis functions), returning value on a specified nonempty knot span with p-degree loop and range/rounding status.",
  "Reuse thm-spline-polynomial-reproduction for support, partition of unity, nonnegativity, basis and derivative facts. Prove ONLY evaluation equivalence, O(p²) work and knot-insertion preservation for new de Boor/knot insertion algorithms.",
  "Reuse published natural-cubic tridiagonal system and unique solution; do not redefine natural cubic interpolation as a new method. Add clamped boundary variant only, and a numerical theorem for executing the canonical natural system through existing tridiagonal factor/solve. Prove qualified max-error O(h^4)||f^(4)|| for boundary-compatible cubic interpolation, explicitly treating natural-boundary endpoint degradation.",
  "Prove convex-combination forward evaluation bound under nonnegative knot ratios, with arithmetic/range model. Reuse published uniform-full-multiplicity quasiinterpolation rate without expanding its scope."
]

### Proof construction

Induction on degree and local knot-span identities; cubic second-derivative equations; Peano-kernel or local Hermite error plus inverse tridiagonal estimate with actual boundary conditions.

### Examples

[
  "Repeated-knot de Boor evaluation",
  "Natural interpolant of x² showing endpoint caveat",
  "Knot insertion leaves curve fixed"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `splines-series-and-approximation-rates` → `library/mathematical-statistics/splines-series-and-approximation-rates.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-b-spline-space-and-basis`, `def-local-spline-quasi-interpolant`, `def-natural-cubic-spline`, `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots`, `thm-sobolev-spline-quasi-interpolant-rate`, `thm-spline-polynomial-reproduction`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-SPLINE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-SPLINE` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-SPLINE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-FFT — Computed fast transforms and convolution

A: `computed-fast-transforms-and-convolution`. B: `computed-fast-transforms-and-convolution-examples`.

### Scope

[
  "Prove unitary-stage computed radix-two FFT normwise error <= ((1+eta)^m-1)||x||_2 where eta bounds each rounded butterfly/twiddle stage; derive eta=C u+C_twiddle eps_tw under declared complex/range model. This is O(u log N) only with controlled twiddle errors and u log N small.",
  "Define mixed-radix Cooley-Tukey and Bluestein chirp-z arbitrary-length reduction with padding >=2N-1; prove exact conversion and O(M log M) count for chosen supported M, including chirp rounding separately.",
  "Define DCT/DST via even/odd extension with precise endpoint normalization; prove orthogonality/inverse and cosine coefficient extraction. Define FFT linear convolution with padding and error bound from transform/product/inverse errors."
]

### Proof construction

Product of near-unitary stages; existing DFT/FFT correctness/cost; modular index identities and chirp square identity; combine multiplication errors by norm inequalities.

### Examples

[
  "Prime-length transform through Bluestein",
  "Circular aliasing without padding",
  "DCT Chebyshev coefficients"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item; added for certified twiddle enclosures).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `finite-fourier-analysis-and-the-fast-fourier-transform` → `library/fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-recursive-radix-two-fast-fourier-transform`, `def-unitary-discrete-fourier-transform-on-z-mod-n`, `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`, `thm-radix-two-fft-arithmetic-complexity`, `thm-radix-two-fft-correctness`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-FFT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-FFT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-FFT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-SPARSE — Sparse direct elimination and ordering

A: `sparse-direct-elimination-and-ordering`. B: `sparse-direct-elimination-and-ordering-examples`.

### Scope

[
  "Define symbolic symmetric elimination graph, ordering, filled graph and elimination tree; numerical sparse Cholesky returns factors or invalid-pivot status. Prove the filled-neighbor clique invariant and exact correspondence with structural Cholesky fill absent numerical cancellation.",
  "Define multifrontal assembly and triangular solves through that graph; prove equivalence to scalar elimination and work O(sum_j (ell_j+1)^2), factor storage O(sum_j(ell_j+1)) for column counts ell_j.",
  "For explicitly ordered k-by-k and k-by-k-by-k regular grid SPD stencils prove nested-dissection recurrence and bounds: 2D n=k² gives O(n^(3/2)) work/O(n log n) storage; 3D n=k³ gives O(n²) work/O(n^(4/3)) storage. No universal graph bound.",
  "Define threshold partial-pivot sparse LU and symmetric-indefinite block LDL* with stated 1x1/2x2 pivot tests, permutations, fill and failure; residual bound includes actual factor growth, never a universal small-growth theorem."
]

### Proof construction

Induct Schur-complement sparsity and frontal assembly; count dense frontal updates; prove geometric grid separator sizes directly, avoiding an unproved arbitrary planar separator; transfer explicitly bounded local rounding errors through permutations.

### Examples

[
  "Star graph orderings with radically different fill",
  "2D five-point Poisson nested dissection",
  "Nonsingular indefinite matrix needing a 2x2 pivot"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-cholesky-factorisation-with-positive-diagonal`, `def-permutation-matrix-partial-pivoting-and-pivot-growth`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SPARSE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SPARSE` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SPARSE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-SVD — Computed singular values and rank revealing factorizations

A: `computed-singular-values-and-rank-revealing-factorizations`. B: `computed-singular-values-and-rank-revealing-factorizations-examples`.

### Scope

[
  "Define Householder bidiagonalization and bidiagonal implicit shifted QR with deflation, finite budget, zero/near-zero pivot branches; computed singular triplets are returned with residual/orthogonality reports.",
  "Prove exact reduction/unitary equivalence and aggregate backward error under NA-02 stable reflector arithmetic; derive singular-value absolute errors <= ||E|| by local Weyl/minmax proof. Relative accuracy of tiny singular values is a separate theorem under stronger bidiagonal algorithm assumptions.",
  "Reuse canonical column-pivoted QR definition and exact rank-r structural theorem. Add ONLY strong rank-revealing QR with finite swap rule; prove declared block residual/singular-value comparison and actual termination bound; plain CPQR is not asserted to be strongly rank revealing. Add rank-deficient LS using this/SVD as a composition of canonical solvers, with residual and rank-threshold interpretation."
]

### Proof construction

Bidiagonal bulge chase identities, controlled rounding residual and finite singular-value variational argument; prove swap potential growth for strong RRQR, handling rank deficiency separately.

### Examples

[
  "Nearly rank-deficient design matrix",
  "Absolute versus relative small singular-value accuracy",
  "CPQR rank-revelation limitation"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `thm-eckart-young-best-rank-k-approximation`, `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block`, `thm-singular-value-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SVD** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SVD` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SVD** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-04 — Stationary iterations and relaxation

A: `stationary-iterations-and-relaxation`. B: `stationary-iterations-and-relaxation-examples`.

### Scope

Add named Richardson/Jacobi/GS/SOR bounded procedures as explicit instances of canonical splitting, diagonal/pivot failure branches; strict/irreducible weak diagonal dominance criteria and SPD/omega SOR iff theorem. Do not reauthor the splitting definition or spectral-radius equivalence; Jordan bounds only as genuinely missing supplier.

### Proof construction

Reduce the error to G^j e_0; use Jordan form/spectral radius for the all-start equivalence and norm contraction only as a sufficient condition. Explicitly permit transient nonnormal growth and polynomial factors from defective dominant roots. Prove named matrix-class criteria separately from the general theorem.

### Examples

diagonally dominant Jacobi; SPD SOR for 0<ω<2; a splitting with ρ(G)≥1 and an initial error that misses the unstable eigenspace.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `krylov-subspaces-arnoldi-and-gmres` → `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`.
- `conjugate-gradients-minres-and-preconditioning` → `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-stationary-iteration-from-a-matrix-splitting`, `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison`, `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-04** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-04` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-04** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-11 — Polynomial approximation and Chebyshev interpolation

A: `polynomial-approximation-and-chebyshev-interpolation`. B: `polynomial-approximation-and-chebyshev-interpolation-examples`.

### Scope

New Chebyshev-root/Lobatto cardinal-sum logarithmic Lebesgue bound and best-approximation transfer with actual rates; use existing Chebyshev polynomials and real Weierstrass. No duplicate density theorem. Complex Runge is optional context.

### Proof construction

Reduce the Chebyshev cardinal sum to the relevant trigonometric sum and establish the logarithmic estimate locally; then use I_np=p for p∈P_n and take the infimum. Record the node family, boundary convention, norm, and source-specific hypotheses. Equispaced divergence is a counterexample, not a conflict with Weierstrass.

### Examples

Chebyshev nodes and logarithmic growth; a best approximant bound transferred to interpolation; Runge’s function on equispaced nodes.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `fundamental-trigonometric-identities` → `library/real-analysis/fundamental-trigonometric-identities.md`.
- `approximation-and-compactness-in-ck` → `library/real-analysis/approximation-and-compactness-in-ck.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `cor-runge-polynomial-approximation`, `cor-weierstrass-approximation-on-a-closed-interval`, `cor-weierstrass-approximation-on-the-unit-interval`, `def-chebyshev-polynomials-first-and-second-kind`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-11** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-11` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-11** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-12 — Composite quadrature rules

A: `composite-quadrature-rules`. B: `composite-quadrature-rules-examples`.

### Scope

New composite midpoint/trapezoid/Simpson procedures with finite grid/parity conventions and derivative-norm error; floating summation bound imported, not reproved.

### Proof construction

Integrate the panelwise Taylor remainder for midpoint, the piecewise-linear interpolation error for trapezoid, and the fourth-order Peano/Taylor remainder for Simpson; explicitly show the cubic cancellation. Prove procedure definitions separately from error estimates.

### Examples

convex f with midpoint/trapezoid bracketing; a quadratic exact for Simpson; a cubic demonstrating the full-panel exactness.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `properties-of-the-integral-and-the-working-ftc` → `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`.
- `the-riemann-integral-in-rn-and-jordan-content` → `library/real-analysis/the-riemann-integral-in-rn-and-jordan-content.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-first-fundamental-theorem-of-calculus-for-l-one`, `thm-ftc-second-part`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-12** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-12` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-12** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## VAL-INTERVAL — Outward rounded interval and ball arithmetic

A: `outward-rounded-interval-and-ball-arithmetic`. B: `outward-rounded-interval-and-ball-arithmetic-examples`.

### Scope

[
  "Define closed bounded real intervals/complex rectangles and midpoint-radius balls, inclusion order, empty/entire status; interval division by interval containing0 returns split-domain or undefined/entire status, never an unsound finite result.",
  "Define outward-rounded +,-,*,/,sqrt and elementary exp/log/trig extensions with endpoint/range/domain tests; prove inclusion isotony and structural inclusion of every exact evaluation by induction through finite expression DAG.",
  "Define directed dyadic rounding and exact rational fallback; prove endpoint enclosures and explicit absolute error including subnormal/overflow statuses. Elementary functions require locally proved range reduction plus Taylor/rational tail, not trusted libm accuracy.",
  "Prove natural extension dependency overestimation example, centered/Taylor-model enclosure with remainder and derivative interval; precision/width stopping has finite budget and inconclusive status."
]

### Proof construction

Endpoint extrema, monotonicity, exact integer dyadic operations and explicit analytic remainders; expression-tree induction. General enclosures carry input uncertainty separately from rounding.

### Examples

[
  "x-x on interval loses correlation",
  "Division by interval crossing0",
  "Certified sin near multiple of pi"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **VAL-INTERVAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `VAL-INTERVAL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **VAL-INTERVAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-MINIMAX — Minimax approximation and remez algorithms

A: `minimax-approximation-and-remez-algorithms`. B: `minimax-approximation-and-remez-algorithms-examples`.

### Scope

[
  "Define polynomial best uniform approximation in P_n and prove existence/uniqueness and n+2 alternating-extrema criterion for continuous real f on compact interval.",
  "Define finite/budgeted polynomial Remez exchange with ordered distinct alternation set, well-defined linear solve and extrema oracle certification; prove exact equioscillation residual is a posteriori optimality certificate. Any iterative convergence theorem needs extra hypotheses and actual proof.",
  "Define rational minimax family p_m/q_n with denominator nonvanishing/normalized and defect convention; prove alternation characterization only for normal admissible rational approximants, not copied n+m+2 formula across defective cases. Include weighted positive continuous weight."
]

### Proof construction

Compactness/coercivity of coefficient norms and Haar zero counting; alternating sign contradiction and interpolation dual weights; rational numerator difference with pole exclusion and actual defect count.

### Examples

[
  "Degree1 minimax of x² on [-1,1]",
  "Equioscillation certificate",
  "Defective rational approximant violating naive count"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-11` → `polynomial-approximation-and-chebyshev-interpolation` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-MINIMAX** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-MINIMAX` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-MINIMAX** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-SHAPE — Shape preserving piecewise polynomial interpolation

A: `shape-preserving-piecewise-polynomial-interpolation`. B: `shape-preserving-piecewise-polynomial-interpolation-examples`.

### Scope

[
  "Define piecewise cubic Hermite interpolant with explicit values/slopes; prove interval monotonicity sufficient region in normalized endpoint slopes.",
  "Define finite PCHIP slope selection (including flat intervals, sign changes and one-sided endpoints) and prove monotonicity for monotone data, no overshoot on each monotone segment, and local order only under declared smoothness/nonvanishing derivative conditions.",
  "Define piecewise Bernstein representation and prove convex-hull/positivity preservation for nonnegative controls; distinguish sample positivity from interpolant positivity."
]

### Proof construction

Derivative quadratic sign on [0,1], algebraic slope cases and Taylor expansion; Bernstein basis partition/nonnegativity.

### Examples

[
  "Nonnegative chemistry table with cubic-spline undershoot",
  "Flat monotone data",
  "Smooth extremum where limiter lowers order"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `APP-SPLINE` → `spline-evaluation-and-interpolation-algorithms` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-SHAPE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-SHAPE` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-SHAPE** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-WAVELET — Wavelet transforms and nonlinear approximation

A: `wavelet-transforms-and-nonlinear-approximation`. B: `wavelet-transforms-and-nonlinear-approximation-examples`.

### Scope

[
  "Define finite periodic Haar transform first, then orthogonal compact-filter DWT with explicit length/padding/boundary convention; prove analysis/synthesis inverse and Parseval from filter conditions.",
  "Define hard/soft thresholding and best m-term coefficient retention; prove exact l2 discarded-tail error and best m-term optimality for orthonormal basis.",
  "For Haar prove approximation bound for an explicit Sobolev/BV class using cell averages; for higher-order wavelets prove vanishing-moment/local regularity coefficient estimate and Besov-tail rate with exact norm conventions. Biorthogonal transforms require Riesz constants in error bounds."
]

### Proof construction

Finite orthogonal filter-bank algebra; orthogonal projection; cell Poincare and vanishing-moment Taylor cancellation; no use of an unproved general wavelet-basis theorem.

### Examples

[
  "Haar compression of step function",
  "Boundary extension changes coefficients",
  "Soft threshold bias versus best-m hard threshold"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-11` → `polynomial-approximation-and-chebyshev-interpolation` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-WAVELET** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-WAVELET` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-WAVELET** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## GEO-PRED — Certified geometric predicates

A: `certified-geometric-predicates`. B: `certified-geometric-predicates-examples`.

### Scope

[
  "Define orientation2d/3d and incircle/insphere determinant predicates with exact zero outcome; finite IEEE inputs are exact dyadics, real input uncertainty remains an interval ambiguity.",
  "Define floating-point error filter with proven forward determinant bound, followed by exact dyadic expansion/integer fallback; prove every nonzero returned sign is exact and fallback terminates for finite encoded dyadics.",
  "Define deterministic symbolic-perturbation tie ordering only for declared algorithms, prove consistency of perturbed orientation signs; no arbitrary epsilon threshold may replace exact zero topology."
]

### Proof construction

Expansion error-free transforms under explicit range/rounding, or exact integer arithmetic fallback; determinant multilinearity and error bounds; finite lexicographic infinitesimal polynomial signs.

### Examples

[
  "Nearly collinear triangle",
  "Nearly cocircular sites",
  "Uncertain coordinate interval with no decidable sign"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `determinants-of-matrices-over-a-commutative-ring` → `library/linear-algebra/determinants-of-matrices-over-a-commutative-ring.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **GEO-PRED** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `GEO-PRED` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **GEO-PRED** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-NUFFT — Nonuniform fast fourier transforms

A: `nonuniform-fast-fourier-transforms`. B: `nonuniform-fast-fourier-transforms-examples`.

### Scope

[
  "Define type1 F_k=sum_j c_j exp(-ik x_j), type2 values sum_k f_k exp(ik x_j), and type3 nonuniform frequencies; domains, integer mode convention and coordinate wrapping are fixed.",
  "Define oversampled gridding/spreading, periodic kernel, width w, deconvolution factors, FFT and interpolation; return failure when denominator enclosure contains0 or truncation/range criterion fails.",
  "Prove exact infinite-kernel Poisson/aliasing identity then finite-width approximation bound ||Fhat-F||_infty <= eps ||c||_1 + rounding_bound with eps from explicitly proved kernel Fourier/tail estimates; type2 is adjoint under matching scaling. Complexity O(M log M+N w^d) needs fixed d and bounded oversampling; type3 includes frequency-space scale/product and cannot inherit type1 cost blindly."
]

### Proof construction

Poisson summation under explicitly owned absolute convergence hypotheses; derive kernel tail and alias sum, propagate deconvolution lower bound and FFT error.

### Examples

[
  "Nonuniform MRI Fourier samples",
  "Clustered points and l1 absolute error",
  "Near-zero mode deconvolution failure"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item; added for certified Gaussian tails and arithmetic bounds).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-NUFFT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-NUFFT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-NUFFT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-SCHUR — Computed schur decompositions and nonnormal spectra

A: `computed-schur-decompositions-and-nonnormal-spectra`. B: `computed-schur-decompositions-and-nonnormal-spectra-examples`.

### Scope

[
  "Define real/complex Hessenberg Francis single/double-shift QR bulge chasing, deflation tests, exceptional-shift/budget statuses; output Schur residual and orthogonality bounds, without unconditional convergence of every shift strategy.",
  "Prove exact similarity preservation and normwise computed backward error under explicit reflector/twiddle/range assumptions.",
  "Define closed epsilon-pseudospectrum for epsilon>0 by eigenvalues of A+E with ||E||_2<=epsilon; prove resolvent/smallest-singular-value/perturbation equivalence with matching closed boundary convention, plus Bauer-Fike retaining eigenvector condition. Reuse existing simple-eigenvalue derivative and condition-number formulas verbatim."
]

### Proof construction

Bulge-chase algebra, accumulated unitary rounding residual; singular-vector rank-one perturbation proves pseudospectrum characterization; diagonalization plus Neumann invertibility proves Bauer-Fike. Existing Schur theorem reused.

### Examples

[
  "Jordan block pseudospectrum",
  "Small backward residual with unstable eigenvalues",
  "Real conjugate-pair Schur block"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `eigenvalue-iterations-and-the-qr-algorithm` → `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md`.
- `matrix-differentiation-and-first-order-spectral-perturbation` → `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-condition-number-of-a-simple-eigenvalue`, `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift`, `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x`, `thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x`, `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form`, `thm-schur-triangularisation`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SCHUR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SCHUR` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SCHUR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-STRUCT — Toeplitz circulant and displacement structured solvers

A: `toeplitz-circulant-and-displacement-structured-solvers`. B: `toeplitz-circulant-and-displacement-structured-solvers-examples`.

### Scope

[
  "Define circulant diagonalization by canonical DFT and FFT Toeplitz product via zero-padding of length at least m+n-1; prove exact convolution and O(N log N) count using published FFT.",
  "Reuse alg-durbin-levinson-forecast-recursion and its prediction-equation correctness for admissible real covariance input. Add ONLY a general-RHS Hermitian Toeplitz solve using the canonical reflection recursion as supplier, with explicit complex extension/back-substitution and failure branches; prove O(n²) work and actual storage, and a separate residual/growth theorem. Do not reissue the covariance prediction recurrence under a new alg-ID.",
  "Define displacement rank A-ZAZ* = GH*, generator representation and a single structured elimination update; prove generator rank evolution and separate conditioning/growth from exact speed. Include Gohberg-Semencul inverse application only after nonzero denominators are verified."
]

### Proof construction

DFT convolution identity, block inverse Schur complements and positive pivots; count recursions. Do not label generic Levinson backward stable; state and prove restricted residual theorem or exhibit growth counterexample.

### Examples

[
  "AR covariance Toeplitz solve",
  "Circulant periodic Poisson with zero-mode compatibility",
  "Toeplitz nonpositive pivot failure"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SPARSE` → `sparse-direct-elimination-and-ordering` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `linear-prediction-for-dependent-data` → `library/statistical-models-and-experiments/linear-prediction-for-dependent-data.md`.
- `finite-fourier-analysis-and-the-fast-fourier-transform` → `library/fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `alg-durbin-levinson-forecast-recursion`, `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`, `thm-durbin-levinson-solves-the-prediction-equations`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-STRUCT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-STRUCT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-STRUCT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-TT — Tensor train compression and truncation error

A: `tensor-train-compression-and-truncation-error`. B: `tensor-train-compression-and-truncation-error-examples`.

### Scope

[
  "Define finite tensor unfoldings, Tucker/HOSVD, TT cores/bond ranks, canonical gauges and contraction.",
  "Define sequential TT-SVD and rounding with explicit rank or tolerance and zero-rank conventions; prove exact representation absent truncation and Frobenius error <= sqrt(sum discarded unfolding singular-value tails squared).",
  "Prove HOSVD quasioptimal error <= sqrt(d) times best multilinear-rank error, TT contraction/storage and arithmetic costs from actual mode sizes/ranks; CP alternating least squares is a budgeted algorithm with rank-deficient LS branch and monotone objective only for exact block minimization. No best CP rank existence claim."
]

### Proof construction

Use existing SVD/Eckart-Young plus orthogonal tensor projections; telescope pairwise orthogonal discarded terms for TT and apply projection union bound for HOSVD; exhibit rank-jump/illposed CP boundary.

### Examples

[
  "Rank-one separable grid tensor",
  "Two TT truncations with root-sum-square bound",
  "Large exact TT ranks for a deliberately entangled tensor"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-eckart-young-best-rank-k-approximation`, `thm-singular-value-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-TT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-TT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-TT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-05 — Krylov methods and Lanczos convergence

A: `krylov-methods-and-lanczos-convergence`. B: `krylov-methods-and-lanczos-convergence-examples`.

### Scope

Only sparse Arnoldi/GMRES work/storage with declared orthogonalization/Givens implementation and extremal Lanczos Ritz Chebyshev convergence with start-angle/gap/degenerate cases. No duplicate Arnoldi, GMRES, restart, CG, MINRES or Lanczos definitions/exact termination/convergence-baseline results.

### Proof construction

Count matvecs and orthogonalization separately. For Lanczos, combine the Ritz residual identity with Chebyshev polynomial approximation on the unwanted spectral interval; retain the start-angle denominator and gap in the bound. State ghost Ritz values/loss of orthogonality as finite-precision behavior, not as a contradiction to the exact theorem.

### Examples

unrestarted versus restarted GMRES; CG energy convergence for SPD A versus MINRES for indefinite Hermitian A; a Lanczos Ritz sequence with a poorly aligned initial vector.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-04` → `stationary-iterations-and-relaxation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `eigenvalue-iterations-and-the-qr-algorithm` → `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md`.
- `krylov-subspaces-arnoldi-and-gmres` → `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`.
- `conjugate-gradients-minres-and-preconditioning` → `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-arnoldi-process`, `def-conjugate-gradient-recurrence`, `def-gmres-iterate`, `def-lanczos-process-as-hermitian-arnoldi`, `def-minres-iterate-from-the-lanczos-tridiagonalization`, `def-restarted-gmres-m`, `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair`, `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-05** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-05` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-05** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-05",
    "resolved_owner": "NA-05",
    "design": {
      "owner": "NA-05",
      "change": "Add finite-precision Arnoldi/MGS/reorthogonalization local relation A Vhat=Vhat Hhat+f e_m*+E and quantified orthogonality loss under rank/conditioning hypotheses; true residual recomputation/residual-gap bound. Add finite CG attainable-accuracy/residual-gap contract without exact-grade termination or unconditional monotone true residual. Orthogonalization and rounding lemmas owned NA-05.",
      "sources": [
        "higham",
        "golub"
      ],
      "requires": [
        "NA-01",
        "NA-02"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "higham",
          "title_and_locator": "Nicholas Higham, Accuracy and Stability of Numerical Algorithms, 2e, SIAM, https://doi.org/10.1137/1.9780898718027 ; Chapters 3–4, 8–10, 16, 18–20, 24 as appropriate.",
          "urls": [
            "https://doi.org/10.1137/1.9780898718027"
          ]
        },
        {
          "key": "golub",
          "title_and_locator": "Golub and Van Loan, Matrix Computations, 4e, Johns Hopkins, https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm ; sparse/direct, eigen/SVD, generalized eigen and tensor chapters; fetch exact sections before authoring.",
          "urls": [
            "https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm"
          ]
        }
      ]
    },
    "reason": "approved scope extension"
  }
]


## NA-08 — Randomized low-rank approximation

A: `randomized-low-rank-approximation`. B: `randomized-low-rank-approximation-examples`.

### Scope

New exact Gaussian range-finder procedure and deterministic SVD partition error + Gaussian matrix moment/pseudoinverse estimates yielding the exact promised expected spectral bound. Exact PCA eigenspace/statistical stability, SVD and Eckart-Young are imports, not randomized solver proofs.

### Proof construction

Establish the deterministic SVD-partition bound first; then supply local Gaussian pseudoinverse-moment, pseudoinverse-tail, spectral-norm, and concentration lemmas before taking expectations. Use independence of Ω₁,Ω₂ and local Eckart–Young for the optimal baseline. For a power scheme, prove its power inequality separately and insert QR orthonormalization between A and A* applications in any floating-point discussion.

### Examples

rank-k matrix with zero error; slowly decaying singular values where the tail-Frobenius term matters; a power iteration that loses small modes without reorthogonalization.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-numerical-rank-relative-to-a-norm-scale-and-tolerance`, `thm-eckart-young-best-rank-k-approximation`, `thm-singular-value-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-08** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-08` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-08** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-08",
    "resolved_owner": "NA-08",
    "design": {
      "owner": "NA-08",
      "change": "Add randomized power/subspace iteration with intermediate orthogonalization, actual deterministic power-error inequality and flop count. Randomized sketch LS/OSE/leverage sampling is explicitly owned LIN-SKETCH and column/row/Nystrom reconstruction LIN-CUR; consume LIN-SVD and LIN-TT for deterministic rank/truncation primitives. Any high-probability estimator needs its own Gaussian/test-vector proof and failure probability. Existing Gaussian moment obligations remain NA-08.",
      "sources": [
        "golub"
      ],
      "requires": [
        "LIN-SVD"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "golub",
          "title_and_locator": "Golub and Van Loan, Matrix Computations, 4e, Johns Hopkins, https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm ; sparse/direct, eigen/SVD, generalized eigen and tensor chapters; fetch exact sections before authoring.",
          "urls": [
            "https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm"
          ]
        }
      ]
    },
    "reason": "approved scope extension"
  }
]


## PC-EWALD — Ewald periodic potentials and particle mesh error

A: `ewald-periodic-potentials-and-particle-mesh-error`. B: `ewald-periodic-potentials-and-particle-mesh-error-examples`.

### Scope

genuinely-new periodic lattice-sum algorithm and error separation

A: `ewald-periodic-potentials-and-particle-mesh-error`.

On a specified 3D torus, finitely many distinct positions x_i and real charges q_i with sum q_i=0 define the mean-zero periodic Poisson distribution -Delta u=4pi(sum q_i delta_xi). Prove the Fourier distribution solution with zero mode fixed and the Gaussian Ewald decomposition of its off-source values/renormalized self energy. Specify the lattice shape, self subtraction, Gaussian parameter alpha, real/reciprocal cutoffs, output convention and arithmetic model. The naive Coulomb lattice sum is conditional; the periodic mean-zero definition controls the summation convention. Prove absolute convergence of the split sums, alpha independence, explicit Gaussian real-tail/reciprocal-tail bounds using lattice shell counts, and differentiated force bounds away from collisions. Include other boundary conventions only by separate explicit formula/proof.

For particle-mesh Ewald specify charge assignment degree/window, periodic grid, discrete Fourier solver, deconvolution restrictions, force differentiation and self correction. Prove error as real cutoff + reciprocal cutoff + assignment/aliasing + mesh differentiation + arithmetic, with actual window Fourier-decay/smoothness assumptions; O(N log N) FFT work alone is not an accuracy theorem. Point-source potentials are singular: any uniform field error is on a collision-free evaluation set, or is stated for a regularized source norm. N-body time integration, thermodynamic limits and singular mean-field limits remain separate.

Same-frontier PC-EWALD suppliers: Gaussian Poisson summation (reuse canonical Poisson theorem if its hypotheses fit), torus distribution Green function and zero mode, lattice shell Gaussian estimates, self limit, assignment Fourier aliases and force derivative bounds. Linear owner FFT; PDE owner periodic Poisson if it supplies the exact torus distribution interface; biology owner PIC consumes only the solver guarantee under matching regularization. B: neutral dipole cell, nonneutral zero-mode obstruction, alpha tradeoff at fixed tolerance, source collision, energy/force consistency. Sources: Ewald 1921 https://doi.org/10.1002/andp.19213690304 ; Darden–York–Pedersen PME https://doi.org/10.1063/1.464397 ; Essmann et al smooth PME https://doi.org/10.1063/1.470117 . Reading pending.

### Proof construction

[
  "On a specified 3D torus, finitely many distinct positions x_i and real charges q_i with sum q_i=0 define the mean-zero periodic Poisson distribution -Delta u=4pi(sum q_i delta_xi). Prove the Fourier distribution solution with zero mode fixed and the Gaussian Ewald decomposition of its off-source values/renormalized self energy. Specify the lattice shape, self subtraction, Gaussian parameter alpha, real/reciprocal cutoffs, output convention and arithmetic model. The naive Coulomb lattice sum is conditional; the periodic mean-zero definition controls the summation convention. Prove absolute convergence of the split sums, alpha independence, explicit Gaussian real-tail/reciprocal-tail bounds using lattice shell counts, and differentiated force bounds away from collisions. Include other boundary conventions only by separate explicit formula/proof.",
  "For particle-mesh Ewald specify charge assignment degree/window, periodic grid, discrete Fourier solver, deconvolution restrictions, force differentiation and self correction. Prove error as real cutoff + reciprocal cutoff + assignment/aliasing + mesh differentiation + arithmetic, with actual window Fourier-decay/smoothness assumptions; O(N log N) FFT work alone is not an accuracy theorem. Point-source potentials are singular: any uniform field error is on a collision-free evaluation set, or is stated for a regularized source norm. N-body time integration, thermodynamic limits and singular mean-field limits remain separate.",
  "Same-frontier PC-EWALD suppliers: Gaussian Poisson summation (reuse canonical Poisson theorem if its hypotheses fit), torus distribution Green function and zero mode, lattice shell Gaussian estimates, self limit, assignment Fourier aliases and force derivative bounds. Linear owner FFT; PDE owner periodic Poisson if it supplies the exact torus distribution interface; biology owner PIC consumes only the solver guarantee under matching regularization. B: neutral dipole cell, nonneutral zero-mode obstruction, alpha tradeoff at fixed tolerance, source collision, energy/force consistency. Sources: Ewald 1921 https://doi.org/10.1002/andp.19213690304 ; Darden–York–Pedersen PME https://doi.org/10.1063/1.464397 ; Essmann et al smooth PME https://doi.org/10.1063/1.470117 . Reading pending."
]

### Examples

neutral dipole cell, nonneutral zero-mode obstruction, alpha tradeoff at fixed tolerance, source collision, energy/force consistency.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **PC-EWALD** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `PC-EWALD` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **PC-EWALD** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## QUAD-EXTRAP — Clenshaw curtis and extrapolation quadrature

A: `clenshaw-curtis-and-extrapolation-quadrature`. B: `clenshaw-curtis-and-extrapolation-quadrature-examples`.

### Scope

[
  "Define Clenshaw-Curtis weights via DCT of Chebyshev interpolation with endpoint/n=0 conventions; prove integration of interpolant, exact polynomial degree and error <= (b-a)(1+Lambda_n)E_n(f).",
  "Define Romberg extrapolation on nested trapezoid levels with table recurrence and finite levels; prove cancellation of even error powers from locally proved Euler-Maclaurin with remainder. Richardson requires an actual asymptotic expansion, not observed ratio.",
  "Define Peano kernel for linear quadrature functional annihilating P_(r-1), prove remainder representation and error <= ||K||_1 ||f^(r)||_infty; use for explicit high-order Newton-Cotes rules and show negative weights affect roundoff amplification."
]

### Proof construction

Existing interpolation/integration error, DCT coefficient integration; integration-by-parts Bernoulli recursion including boundary remainder; Taylor integral remainder/Fubini proves Peano kernel.

### Examples

[
  "Endpoint singularity breaks naive Romberg order",
  "Clenshaw-Curtis integrates low-degree polynomial",
  "High-degree Newton-Cotes negative weights"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-11` → `polynomial-approximation-and-chebyshev-interpolation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **QUAD-EXTRAP** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `QUAD-EXTRAP` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **QUAD-EXTRAP** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## QUAD-OSC — Oscillatory integrals and filon levin methods

A: `oscillatory-filon-and-levin-quadrature`. B: `oscillatory-filon-and-levin-quadrature-examples`.

### Scope

[
  "Define Filon-type interpolation of amplitude for integral f(x) exp(i omega g(x)) dx on finite interval with omega!=0 and nonstationary g prime bounded away0; exact oscillatory moments are an explicitly computed supplier.",
  "Prove repeated integration-by-parts endpoint expansion and remainder O(|omega|^-r) with constants from derivatives of f/g prime; stationary points require separate subdivision/local stationary-phase expansion.",
  "Define Levin collocation p prime+i omega g prime p=f and endpoint formula; prove residual integral bounds using same nonstationary estimates and condition of collocation solve, not residual size alone.",
  "Add simple nondegenerate stationary-point quadratic scaling with Fresnel moment/remainder and declared smoothness; endpoint stationary and coalescing cases need separate Airy/uniform treatment, assigned here if consumed."
]

### Proof construction

Explicit derivative recurrence for oscillatory IBP; polynomial exact moments; ODE endpoint identity; local Morse coordinate with controlled remainder and Fresnel tail.

### Examples

[
  "Large-frequency Fourier integral",
  "Interior stationary phase missed by nonstationary bound",
  "Levin residual plus illconditioned solve"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **QUAD-OSC** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `QUAD-OSC` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **QUAD-OSC** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## APP-RATIONAL — Barycentric rational and aaa approximation

A: `barycentric-rational-and-aaa-approximation`. B: `barycentric-rational-and-aaa-approximation-examples`.

### Scope

[
  "Define barycentric rational quotient with support nodes, weights, interpolation-at-support and removable-singularity convention; poles occur at zeros of denominator after cancellation.",
  "Define AAA on a finite distinct sample set: greedy max-residual support, Loewner matrix, minimum-singular-vector weights, tie and zero/rank-deficient branches, budget and residual stopping. Prove support interpolation and finite-sample termination/best small LS residual statements, not uniform off-grid convergence.",
  "Define Floater-Hormann rational interpolation on ordered real nodes with degree parameter and prove no real poles under the exact admissible construction; state an error bound with mesh ratio/smoothness constants.",
  "Define Padé coefficient matching with singular-system/defect branch; prove Taylor order only when moment system solvable, with no analytic-continuation/pole-location guarantee."
]

### Proof construction

Barycentric numerator/denominator algebra; SVD least-squares characterization; alternating denominator sign proof for Floater-Hormann; finite series coefficient matching.

### Examples

[
  "AAA transfer-function poles",
  "Small sample residual but large off-grid error",
  "Padé denominator failure and Froissart doublet"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `APP-MINIMAX` → `minimax-approximation-and-remez-algorithms` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **APP-RATIONAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `APP-RATIONAL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **APP-RATIONAL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## GEO-DEL — Delaunay triangulations and voronoi computation

A: `delaunay-triangulations-and-voronoi-computation`. B: `delaunay-triangulations-and-voronoi-computation-examples`.

### Scope

[
  "Define planar finite point set, triangulation, empty-circle Delaunay and Voronoi dual, duplicates/collinear/cocircular cases and hull treatment.",
  "Define incremental insertion plus exact-predicate edge flips with deterministic cocircular convention; prove invariant, termination by lifted paraboloid functional and empty-circle correctness.",
  "Prove planar O(n) triangulation size by Euler count and expected O(n log n) randomized incremental location only with explicit uniform random permutation/history DAG assumptions; worst-case cost stated separately.",
  "Define barycentric point location/interpolation and nearest-neighbor Voronoi query with outside-hull status; no guaranteed mesh minimum angle without quality refinement proof from PDE owner.",
  "Add dimension3 Delaunay tetrahedralization and weighted regular triangulation via lifted convex hull with exact orientation/insphere or power predicate, finite insertion/cavity repair and degeneracy statuses. Prove geometric coverage/empty-sphere invariant and finite termination with lexicographic lifting; worst-case output size O(n²), not planar O(n). Tetrahedral quality/sliver elimination requires separate PDE-owned refinement theorem; Delaunay alone gives no minimum dihedral bound."
]

### Proof construction

Exact orientation/incircle, convex lifted hull identity, flip potential and planar Euler induction; backward analysis for expected insertion work and location structure.

### Examples

[
  "Cocircular four-point tie",
  "Collinear input lower-dimensional output",
  "Scattered linear interpolant over Delaunay cells"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `GEO-PRED` → `certified-geometric-predicates` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **GEO-DEL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `GEO-DEL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **GEO-DEL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-HIER — Hierarchical low rank matrices and error propagation

A: `hierarchical-low-rank-matrices-and-error-propagation`. B: `hierarchical-low-rank-matrices-and-error-propagation-examples`.

### Scope

[
  "Define finite cluster/block trees, geometric admissibility, H block ranks and nested H2 bases; specify dense near blocks and compressed far blocks.",
  "Define bottom-up low-rank recompression and block matvec/add/product; prove error bounds by block norm sums and orthogonal projection. Storage/work O(k n log n), matvec O(k n log n) for declared balanced bounded-partition H tree; O(k n) H2 requires nested bases and bounded interaction lists.",
  "Define approximate block factorization with explicit local truncation tolerances; prove global residual and inverse-error certificate when ||A^-1|| ||E||<1. Low numerical rank is an assumption or separately kernel-proved theorem."
]

### Proof construction

Induct tree representation, bound each omitted block/truncation and sum overlap; use Neumann-series perturbation. Derive rank estimates for one separated analytic kernel by convergent Taylor expansion.

### Examples

[
  "1D separated Cauchy blocks",
  "Near-field diagonal blocks left dense",
  "Accumulated truncation can spoil definiteness"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-08` → `randomized-low-rank-approximation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SPARSE` → `sparse-direct-elimination-and-ordering` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-eckart-young-best-rank-k-approximation`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-HIER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-HIER` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-HIER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-QZ — Generalized eigenvalue pencils and qz methods

A: `generalized-eigenvalue-pencils-and-qz-methods`. B: `generalized-eigenvalue-pencils-and-qz-methods-examples`.

### Scope

[
  "Define regular finite square pencil A-lambda B, homogeneous eigenvalue pairs (alpha,beta), beta=0 infinity, generalized Schur form; singular pencils explicitly outside this QZ contract.",
  "Define Hessenberg-triangular reduction and finite-budget QZ iteration with singular-B deflation and residual output; prove unitary equivalence and computed backward error in (A,B).",
  "For Hermitian A and SPD B define Cholesky reduction L^-1 A L^-* and prove real spectrum/B-orthogonality and residual-based eigenvalue enclosures in B metric. QZ does not silently solve singular-pencil Kronecker structure."
]

### Proof construction

Prove generalized Schur existence with a local regular-pencil induction rather than citation-only; chase pairs of left/right unitary transformations; SPD case reduces to canonical Hermitian spectral theorem.

### Examples

[
  "Mass/stiffness eigenproblem",
  "Infinite eigenvalue from singular B",
  "Regular versus identically singular determinant pencil"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-QZ** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-QZ` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-QZ** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-SKETCH — Sketched least squares and subspace embeddings

A: `sketched-least-squares-and-subspace-embeddings`. B: `sketched-least-squares-and-subspace-embeddings-examples`.

### Scope

[
  "Define an (epsilon,delta) oblivious l2 subspace embedding S with 0<epsilon<1 for fixed finite-dimensional subspace; distinguish fixed-subspace probability from a single S preserving all subspaces.",
  "Define sketch-and-solve LS xhat minimizing ||S(Ax-b)||, computed through canonical QR/SVD with rank/failure status. If S preserves all vectors in span(A,b) within squared norms (1±epsilon), prove ||Axhat-b||² <= ((1+epsilon)/(1-epsilon)) min_x||Ax-b||². A guarantee only on Ran(A) is insufficient for this unqualified residual theorem.",
  "Define iid Gaussian embedding with declared m and prove m>=C epsilon^-2(d+log(1/delta)) suffices by chi-square tail, finite net and operator norm transfer, all locally proved.",
  "Define leverage-score row sampling with probabilities p_i>=beta ell_i/d, rescale selected rows, specify zero leverage rows and replacement; prove embedding with m>=C d log(d/delta)/(beta epsilon²) by locally proved matrix concentration. Sparse CountSketch/SRHT are separate optional algorithm variants and require their actual dimension/coherence theorem, owned here if promised.",
  "Define sketch-based right preconditioner and prove conditioned spectrum after embedded QR and exact span/rank premises; retain physical residual and computed solve errors separately."
]

### Proof construction

Embedding inequalities sandwich original/sketched objective; Gaussian quadratic mgf plus net; derive matrix Chernoff/Bernstein needed by leverage sampling instead of citing as external proof. QR preconditioner singular values follow norm embedding.

### Examples

[
  "Overdetermined regression sketch",
  "Embedding Ran(A) but missing residual direction",
  "Leverage-zero rows and highly coherent design"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-08` → `randomized-low-rank-approximation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, `thm-singular-value-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SKETCH** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SKETCH` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SKETCH** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-SYL — Sylvester and lyapunov matrix equations

A: `sylvester-and-lyapunov-matrix-equations`. B: `sylvester-and-lyapunov-matrix-equations-examples`.

### Scope

[
  "Define AX+XB=C via Kronecker vectorization; prove unique solvability iff spectra(A) and spectra(-B) are disjoint and define sep(A,-B) as smallest singular value of Sylvester map.",
  "Define Bartels-Stewart Schur triangular/block substitution with pivot separation/failure and prove exact correctness, O(n³) square dense cost and residual-to-error <= ||R||_F/sep.",
  "For Hurwitz A prove continuous Lyapunov integral X=int_0^infty exp(tA)Q exp(tA*)dt and positivity for Q positive (strict under Q positive definite); define low-rank ADI with nonsingular shifts and prove residual factor identity, with convergence conditional on rational shift bounds."
]

### Proof construction

Kronecker triangularization for spectral criterion; finite substitution and norm inverse; semigroup decay for integral; algebraic ADI residual induction.

### Examples

[
  "Nearly colliding eigenvalue sums",
  "Stable linear noise covariance",
  "Lowrank Lyapunov residual certificate"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SYL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SYL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SYL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-06 — Preconditioner algorithms and residual metrics

A: `preconditioner-algorithms-and-residual-metrics`. B: `preconditioner-algorithms-and-residual-metrics-examples`.

### Scope

Only fixed-order/fixed-pattern ILU(0) bounded procedure with absent/zero pivot failure, pattern preservation and pattern-intersection setup versus stored-factor application/storage counts; variable-preconditioner/flexible-GMRES interface only if promised and not already covered. No duplicate residual-map/SPD-CG/preconditioner-worsening items.

### Proof construction

Show algebraically that left and right preconditioning preserve the exact solution set but minimize different residuals. For the ILU procedure, specify the recurrence, stored positions, and failure branch, then count operations under the input graph. For variable right preconditioners, use the actual preconditioned-vector span in flexible GMRES; do not reuse fixed-preconditioner spectral claims.

### Examples

a left-preconditioned residual that is small while the physical residual is not; ILU(0) on a tridiagonal matrix; an invertible preconditioner that worsens the condition number.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-04` → `stationary-iterations-and-relaxation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-05` → `krylov-methods-and-lanczos-convergence` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `conjugate-gradients-minres-and-preconditioning` → `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`, `def-left-right-and-symmetric-positive-definite-preconditioning`, `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps`, `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-06** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-06` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-06** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-14 — Adaptive quadrature and error indicators

A: `adaptive-quadrature-and-error-indicators`. B: `adaptive-quadrature-and-error-indicators-examples`.

### Scope

New finite-depth adaptive Simpson estimator procedure, /15 Richardson derivation and reliability limits/cap/error status; no universal error guarantee from indicator.

### Proof construction

Prove termination from the finite cap and correctness of returned arithmetic outputs, not accuracy from the indicator. Any later certificate must bound each accepted panel’s true defect and propagate defects with the integral/ODE stability operator, including roundoff. Preserve the source’s counterexample to estimator reliability.

### Examples

adaptive Simpson whose actual error exceeds the requested tolerance; cancellation of the leading embedded-rule defect; cap-reached output on a difficult integrand.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `QUAD-EXTRAP` → `clenshaw-curtis-and-extrapolation-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-14** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-14` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-14** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-14",
    "resolved_owner": "NA-14",
    "design": {
      "owner": "NA-14",
      "change": "Add rigorous adaptive integration mode with interval/Taylor derivative enclosures or Peano-kernel bounds per leaf; global certified error is sum of absolute local bounds plus rounded summation. Simpson difference remains heuristic indicator unless asymptotic hypotheses establish efficiency/reliability. Budget/depth failure returns estimate and certified bound/inconclusive status, never tolerance success.",
      "sources": [
        "quad",
        "interval"
      ],
      "requires": [
        "QUAD-EXTRAP",
        "VAL-INTERVAL"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "quad",
          "title_and_locator": "Davis and Rabinowitz, Methods of Numerical Integration, 2e, Academic Press, https://www.sciencedirect.com/book/9780122063602/methods-of-numerical-integration ; Peano kernel, extrapolation, singular and multiple integrals.",
          "urls": [
            "https://www.sciencedirect.com/book/9780122063602/methods-of-numerical-integration"
          ]
        },
        {
          "key": "interval",
          "title_and_locator": "Moore, Kearfott and Cloud, Introduction to Interval Analysis, SIAM, https://doi.org/10.1137/1.9780898717716 ; interval extensions, outward rounding, interval Newton and Krawczyk.",
          "urls": [
            "https://doi.org/10.1137/1.9780898717716"
          ]
        }
      ]
    },
    "reason": "approved scope extension"
  }
]


## VAL-LINEAR — Verified linear systems and spectral enclosures

A: `verified-linear-systems-and-spectral-enclosures`. B: `verified-linear-systems-and-spectral-enclosures-examples`.

### Scope

[
  "Given point inverse approximation R and outward E=I-RA with ||E||<1 prove nonsingularity and inverse norm bound ||A^-1||<=||R||/(1-||E||); verified residual b-A xhat gives explicit enclosure, including interval A,b with uniformly valid E.",
  "Define interval linear Krawczyk enclosure using preconditioned fixed-point map and interval box; inclusion yields existence and contraction norm yields uniqueness for each admitted point system with quantified interpretation.",
  "For Hermitian A with interval residual and orthogonality certificates prove eigenvalue intervals from Rayleigh residual and full-spectrum ordered enclosures by verified LDL inertia at shifts; bisection stops with interval widths or inconclusive pivots.",
  "Define verified determinant/sign via exact pivot or interval exclusion; singularity cannot be certified from failed nonsingularity test."
]

### Proof construction

Neumann series and Banach contraction; Hermitian spectral residual distance and Sylvester inertia with interval pivots; outward arithmetic supplies exact inequalities.

### Examples

[
  "Certified illconditioned 2x2 solve",
  "Uncertain matrix family contains singular member",
  "Eigenvalue bisection via inertia"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SPARSE` → `sparse-direct-elimination-and-ordering` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `dual-spaces-bilinear-forms-and-inertia` → `library/linear-algebra/dual-spaces-bilinear-forms-and-inertia.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-courant-fischer-min-max-principle`, `thm-sylvesters-law-of-inertia`, `thm-weyl-inequalities-for-self-adjoint-sums`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **VAL-LINEAR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `VAL-LINEAR` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **VAL-LINEAR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-CUR — Interpolative cur and nystrom decompositions

A: `interpolative-cur-and-nystrom-decompositions`. B: `interpolative-cur-and-nystrom-decompositions-examples`.

### Scope

[
  "Define rank-k interpolative decomposition A(:,J)T from canonical strong RRQR, with T(:,J)=I, zero/rank-loss branches; prove error bound from trailing RRQR block and coefficient bound of chosen RRQR, no arbitrary selected-column guarantee.",
  "Define CUR reconstruction C W^dagger R or projected least-squares core C^dagger A R^dagger with explicit differing core choices. Prove exactness under rank(A)=rank(W)=k for skeleton CUR; for approximate case prove projection residual bound ||A-P_C A P_R||_F <= ||(I-P_C)A||_F+||A(I-P_R)||_F. Do not transfer this projection guarantee blindly to W^dagger core.",
  "For PSD A define Nystrom Atilde=A S (S* A S)^dagger S* A using canonical Moore-Penrose inverse. Prove 0<=Atilde<=A via A^(1/2) projector identity, exactness when sketch captures range(A), and deterministic residual bound using eigenpartition/sketch blocks under full-row-rank leading sketch.",
  "Random/leverage column selection may consume LIN-SKETCH/NA08 probability lemmas; any expected/high-prob spectral/trace rate needs its own derived theorem with gap/tail/rank premises. Return rank/conditioning diagnostics; no uniform relative spectral accuracy for arbitrary PSD input."
]

### Proof construction

Canonical RRQR/SVD block algebra; orthogonal row/column projections; Nystrom square-root projector factorization and deterministic block norm bound.

### Examples

[
  "Exactly rank2 matrix CUR from nonsingular cross",
  "Bad selected columns miss a dominant direction",
  "PSD Nystrom residual remains PSD"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SKETCH` → `sketched-least-squares-and-subspace-embeddings` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-08` → `randomized-low-rank-approximation` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` → `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`.
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-moore-penrose-pseudoinverse`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-singular-value-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-CUR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-CUR` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-CUR** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-EIGITER — Restarted and block eigensolvers

A: `restarted-and-block-eigensolvers`. B: `restarted-and-block-eigensolvers-examples`.

### Scope

[
  "Define thick/implicitly restarted Arnoldi with locking, residual acceptance, dimension/budget and breakdown handling; prove restart polynomial subspace relation and residual identities, without blanket convergence of arbitrary shifts.",
  "Reuse canonical subspace iteration definition and spectral-gap theorem. Add ONLY block LOBPCG for Hermitian A with SPD metric/preconditioner, including rank-loss orthogonalization and finite Rayleigh-Ritz updates; prove variational nonincrease of selected Ritz values when old trial space is retained.",
  "Define shift-invert and harmonic Ritz extraction with invertibility/solve residual; prove transformed eigenvalue map and propagate inexact linear-solve residual into original eigenpair residual."
]

### Proof construction

Existing Arnoldi factorization plus QR polynomial filtering; minmax on nested trial spaces; block residual algebra. Quantified gap-dependent rate needs separately owned angle/subspace perturbation lemma.

### Examples

[
  "Interior vibration mode using shift invert",
  "Clustered eigenvalues requiring block methods",
  "Restart shifts that stagnate"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-05` → `krylov-methods-and-lanczos-convergence` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-06` → `preconditioner-algorithms-and-residual-metrics` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-QZ` → `generalized-eigenvalue-pencils-and-qz-methods` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `krylov-subspaces-arnoldi-and-gmres` → `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`.
- `eigenvalue-iterations-and-the-qr-algorithm` → `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-arnoldi-process`, `def-ritz-values-and-ritz-vectors-from-arnoldi`, `def-subspace-iteration-and-the-dominant-invariant-subspace`, `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-EIGITER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-EIGITER` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-EIGITER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-FMM — Fast multipole expansions and error

A: `fast-multipole-expansions-and-error`. B: `fast-multipole-expansions-and-error-examples`.

### Scope

[
  "Define finite quadtree 2D Laplace FMM with complex log kernel, direct near pairs, P2M/M2M/M2L/L2L/L2P lists and fixed expansion order p; self interactions are excluded and coincident distinct singular charges return failure.",
  "Prove each translation identity and far-field tail bound C (sum|q_j|) rho^(p+1)/(1-rho) for separated radii with rho<1, using a fixed branch for potential and branch-independent force.",
  "Prove global error by summing finite interaction bounds and O(N p²) work for bounded-occupancy level-restricted tree and bounded lists; adaptive highly clustered data require actual depth/interaction counts. Add 3D Laplace spherical-harmonic expansion with its own addition theorem, truncation and cost rather than assume the 2D proof transfers."
]

### Proof construction

Expand log(1-z) and geometric derivatives; prove finite translations coefficient by coefficient; count tree nodes/list entries; derive 3D addition theorem as owned lemma.

### Examples

[
  "Two separated charge clusters",
  "Force error with near/far split",
  "Clusters violating claimed linear complexity without tree restrictions"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-HIER` → `hierarchical-low-rank-matrices-and-error-propagation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-FFT` → `computed-fast-transforms-and-convolution` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-FMM** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-FMM` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-FMM** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-MFUN — Matrix functions and scaling squaring

A: `matrix-functions-and-scaling-squaring`. B: `matrix-functions-and-scaling-squaring-examples`.

### Scope

[
  "Reuse canonical normal-operator functional calculus, nonnegative square-root existence and polar decomposition. Add analytic primary f(A) for general nonnormal A by Schur/Jordan/contour calculus with spectral branch domain; prove agreement and repeated-eigenvalue derivative rules. New content is numerical computation/conditioning and nonnormal calculus, not duplicate normal/sqrt/polar existence.",
  "Define Padé scaling-and-squaring exponential with finite order/scaling, solve failure and range statuses; prove rational approximation tail bound at scaled A and squared error propagation. Adaptive Higham parameter choices require their actual local backward-error bounds.",
  "Define Schur-Parlett recurrence for separated diagonal blocks and block merging; log/sqrt principal branches require spectrum off negative-real cut and correct Sylvester solve. Define polar Newton/sign iterations with invertibility/branch hypotheses and prove quadratic convergence under stated norm/spectral conditions.",
  "Prove Frechet derivative integral for exp and block upper-triangular f identity; condition estimates remain estimates unless certified."
]

### Proof construction

Absolute power series/Cauchy integral plus local scalar Padé remainder; telescope squaring errors; solve commutator block equations; branch-specific existence is owned. Reuse existing bounded-operator exponential.

### Examples

[
  "Nonnormal exponential with large transient norm",
  "Rotation logarithm branch cut",
  "SPD square root and polar factor"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SYL` → `sylvester-and-lyapunov-matrix-equations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-LINEAR` → `verified-linear-systems-and-spectral-enclosures` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- `strongly-continuous-semigroups-and-hille-yosida` → `library/pde/strongly-continuous-semigroups-and-hille-yosida.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-functional-calculus-for-a-normal-endomorphism`, `lem-exponential-series-of-a-bounded-operator`, `prop-functional-calculus-for-normal-endomorphisms`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-polar-decomposition`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-MFUN** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-MFUN` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-MFUN** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-07 — Multigrid methods and complexity

A: `multigrid-methods-and-complexity`. B: `multigrid-methods-and-complexity-examples`.

### Scope

New Galerkin coarse correction/SPD projector, uniform smoothing+approximation two-grid contraction, specified finite V-cycle and hierarchy work recurrence.

### Proof construction

Use the linked repaired theorem: for full-rank P, prove the Galerkin projector identities and define the two-grid map `E=S^{*_{A_h}}CS`; its energy norm is `sup ||CSx||_{A_h}²/||x||_{A_h}²`. Contraction follows from the explicitly assumed/proved joint estimate with ρ<1. No α/β rate is claimed without a separate compatible smoothing/approximation theorem. Count V-cycle work by the stated recursion tree; mesh-independent rate requires level-uniform ρ and work constants.

### Examples

1D Poisson with linear interpolation; one coarse correction on a smooth error; V-cycle and W-cycle costs under γ=1 and γ=2 in d=2.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-03` → `sparse-matrix-models-and-kernel-costs` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-06` → `preconditioner-algorithms-and-residual-metrics` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `lax-milgram-and-weak-elliptic-solutions` → `library/pde/lax-milgram-and-weak-elliptic-solutions.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-07** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-07` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-07** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-07",
    "resolved_owner": "NA-07",
    "design": {
      "owner": "NA-07",
      "change": "Promote actual AMG and domain decomposition beyond conditional names: define strength graph, aggregation/prolongation, fixed Galerkin hierarchy and status; prove one concrete 1D Poisson level-uniform approximation+smoothing constants. General AMG stays conditional on the declared constants. Add overlapping additive Schwarz SPD preconditioner and condition bound C_stable C_overlap from fully proved stable decomposition/local energy estimates (or PDE-owned concrete domain-decomposition pair). Coordinate single ownership with PDE agent.",
      "sources": [
        "davis"
      ],
      "requires": [
        "NA-06",
        "NA-28"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "davis",
          "title_and_locator": "Timothy Davis, Direct Methods for Sparse Linear Systems, SIAM, https://doi.org/10.1137/1.9780898718881 ; elimination trees, Cholesky, ordering, multifrontal and unsymmetric factorizations.",
          "urls": [
            "https://doi.org/10.1137/1.9780898718881"
          ]
        }
      ]
    },
    "reason": "approved scope extension",
    "scope_reassignment": {
      "moved_to": "PE25",
      "clauses": "Overlapping additive Schwarz and its stable-decomposition/local-energy condition theorem. Not authored a second time in NA07.",
      "retained_here": "Algebraic multigrid hierarchy, actual concrete uniform smoothing/approximation and cycle costs."
    }
  }
]


## VAL-ROOT — Interval newton krawczyk and polynomial root isolation

A: `interval-newton-krawczyk-and-polynomial-root-isolation`. B: `interval-newton-krawczyk-and-polynomial-root-isolation-examples`.

### Scope

[
  "Define interval Newton on scalar box and multidimensional Krawczyk map with interval Jacobian, preconditioner, intersection, branch/bisect/budget; exclusion and inclusion statuses are proved, not inferred from failed contraction.",
  "Prove F C1 on convex box and strict Krawczyk inclusion yield a root via Brouwer, plus uniqueness under a verified contraction/Jacobian criterion; carry full Brouwer supplier if not already published under needed finite-dimensional version.",
  "Define exact rational polynomial squarefree/Sturm sequence and dyadic isolating intervals; prove sign-variation root count and finite isolation for squarefree polynomials with root separation bound. Multiple roots handled by gcd/squarefree decomposition, not sign-change alone.",
  "Define interval root isolation for smooth functions with derivative exclusion/transversality and finite exhaustion; output certified boxes plus unresolved boxes; finite sampling cannot prove all roots without an inclusion/exclusion cover."
]

### Proof construction

Mean-value Jacobian enclosure, fixed-point theorem and interval arithmetic; Euclidean polynomial division/Sturm variation at roots and endpoints; algebraic root separation for termination.

### Examples

[
  "No sign change at double polynomial root",
  "Validated nonlinear chemical equilibrium",
  "Event root with derivative bounded away0"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-09` → `nonlinear-equations-and-newton-methods` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-LINEAR` → `verified-linear-systems-and-spectral-enclosures` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **VAL-ROOT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `VAL-ROOT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **VAL-ROOT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-DMRG — Alternating tensor optimization and effective eigenproblems

A: `alternating-tensor-optimization-and-effective-eigenproblems`. B: `alternating-tensor-optimization-and-effective-eigenproblems-examples`.

### Scope

[
  "Define normalized finite MPS/TT state and Hermitian finite Hamiltonian supplied by physics; canonical QR gauge, one-site/two-site environment contractions, exact local eigenproblem, SVD split/truncate and finite sweeps/status.",
  "Prove mixed canonical gauge makes local norm Euclidean, environment defines Hermitian effective Hamiltonian, and exact local ground-state solve weakly decreases Rayleigh energy before truncation.",
  "Prove normalized-state energy difference <= 2||H|| ||psi-phi|| and use TT discarded weight to bound possible posttruncation increase. State stationarity conditional on bounded convergent exact sweeps; no universal global minimum, polynomial efficiency or spectral-gap promise."
]

### Proof construction

Finite tensor contraction and isometry identities; Rayleigh variational inequality; Cauchy-Schwarz perturbation; distinguish bond adaptation from ideal fixed-bond block optimization.

### Examples

[
  "Two-site spin-chain local solve",
  "Energy rises after aggressive truncation",
  "Degenerate local eigenspace with deterministic tie choice"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-TT` → `tensor-train-compression-and-truncation-error` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-EIGITER` → `restarted-and-block-eigensolvers` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-courant-fischer-min-max-principle`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-DMRG** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-DMRG` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-DMRG** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-EXPA — Matrix exponential and phi function actions

A: `matrix-exponential-and-phi-function-actions`. B: `matrix-exponential-and-phi-function-actions-examples`.

### Scope

[
  "Define phi_k(z)=sum_(j>=0) z^j/(j+k)! for integer k>=0, including phi_0=exp and phi_k(0)=1/k!; prove recurrence and augmented-matrix action identities.",
  "Define Arnoldi approximation ||v|| V_m exp(tH_m)e1 and corresponding phi action by augmentation; happy breakdown is exact invariant-space evaluation and numerical breakdown is a status.",
  "Prove exponential-action defect/residual integral e(t)=int_0^t exp((t-s)A) r_m(s)ds and bound with supplied semigroup/logarithmic-norm control; include inexact matvec and reduced-exponential errors additively.",
  "Define scaled Taylor exp-action finite procedure, tail/order criterion and budget; prove normwise truncation+roundoff certificate and actual matvec count. No claimed mesh-uniform bound from finite-dimensional exactness."
]

### Proof construction

Entire series recurrence; existing Arnoldi identity differentiates projected solution; variation-of-constants and matrix log-norm Gronwall; Taylor tail and squaring/stepping propagation.

### Examples

[
  "Stiff diagonal action",
  "Nonnormal transient action certificate",
  "phi_1 at zero with no division cancellation"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-05` → `krylov-methods-and-lanczos-convergence` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-MFUN` → `matrix-functions-and-scaling-squaring` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `krylov-subspaces-arnoldi-and-gmres` → `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`.
- `strongly-continuous-semigroups-and-hille-yosida` → `library/pde/strongly-continuous-semigroups-and-hille-yosida.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-arnoldi-process`, `lem-exponential-series-of-a-bounded-operator`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-EXPA** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-EXPA` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-EXPA** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-POLYEIG — Polynomial eigenproblems and linearization

A: `polynomial-eigenproblems-and-linearization`. B: `polynomial-eigenproblems-and-linearization-examples`.

### Scope

[
  "For regular P(lambda)=sum_(j=0)^m A_j lambda^j define first companion pencil, homogeneous eigenvalues and eigenvector recovery; prove determinant equivalence and finite/infinite eigenvalue handling under stated leading-coefficient cases.",
  "Define polynomial eigenpair residual/backward error with coefficientwise weights and derive exact minimum weighted norm formula for fixed vector; prove how pencil residual transfers to P(lambda)x and warn against unscaled linearization conditioning.",
  "Define rational eigenproblem clearing denominators only away from poles; poles/spurious roots are explicitly excluded and checked."
]

### Proof construction

Block elimination establishes strong finite linearization identity; homogeneous reversal handles infinity with explicit rank hypotheses; minimum perturbation follows rank-one coefficient updates.

### Examples

[
  "Quadratic damped vibration pencil",
  "Singular leading coefficient/infinite mode",
  "Rational transfer-function pole mistaken for eigenvalue"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-QZ` → `generalized-eigenvalue-pencils-and-qz-methods` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-EIGITER` → `restarted-and-block-eigensolvers` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-POLYEIG** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-POLYEIG` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-POLYEIG** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## LIN-RIC — Numerical algebraic riccati equations and stabilizing branches

A: `numerical-algebraic-riccati-equations-and-stabilizing-branches`. B: `numerical-algebraic-riccati-equations-and-stabilizing-branches-examples`.

### Scope

[
  "Fix finite real/complex A (n by n), B (n by m), Q=C* C positive semidefinite and R positive definite. Define continuous stabilizability by existence of K with A-BK Hurwitz and continuous detectability by existence of L with A-LC Hurwitz; discrete versions replace Hurwitz by Schur stability. Prove equivalent PBH rank tests with Re(lambda)>=0 or |lambda|>=1, including eigenvalues on the boundary. Stabilizability/detectability are exact hypotheses or certified rank/stability inputs; they are not inferred from an observed small residual.",
  "CARE is A*X+XA-XGX+Q=0 with G=B R^-1 B*. Under continuous stabilizability/detectability prove existence and uniqueness of positive semidefinite stabilizing X, A-GX Hurwitz, and that H=[[A,-G],[-Q,-A*]] has no imaginary-axis eigenvalues and its n-dimensional stable invariant space is a graph Ran([I;X]). Include infinite-horizon quadratic-cost characterization only as the necessary local existence/uniqueness proof, with square-integrable controls, finite cost and transversality/terminal decay justified. CTRL1 may consume this; LIN-RIC does not consume CTRL1.",
  "DARE is X=Q+A*XA-A*XB(R+B*XB)^-1B*XA. Under discrete stabilizability/detectability prove unique positive semidefinite stabilizing X with R+B*XB positive definite and Ac=A-B(R+B*XB)^-1 B*XA Schur. Define N=[[A,0],[-Q,I]], M=[[I,G],[0,A*]], prove regularity and stable deflating graph N[I;X]=M[I;X] Ac, n stable eigenvalues and no unit-circle eigenvalues. Singular A is allowed; infinite generalized eigenvalues are handled homogeneously. Do not use inverse(A).",
  "Define finite-budget ordered Schur CARE and ordered-QZ DARE numerical procedures, stable/unstable selection with explicit certified half-plane/unit-circle separation, graph block U1 inversion, X=U2 U1^-1, Hermitian symmetrization, factor/conditioning/range and inconclusive statuses. Prove exact graph-to-ARE identity. Computed Schur/QZ backward errors are generally unstructured: report actual Riccati residual and symmetry defect, and do not claim nearby positive Q/R or preserved Hamiltonian structure from an arbitrary nearby pencil.",
  "For CARE candidate Xhat Hermitian let Ac=A-GXhat be certified Hurwitz and L(E)=Ac*E+E Ac. With kappa>=||L^-1||_(F->F), r>=||F(Xhat)||_F, g>=||G||2, find rho>0 with kappa(r+g rho²)<=rho and 2 kappa g rho<1. Prove unique Hermitian exact root in the closed Frobenius rho-ball by E=-L^-1 F(Xhat)+L^-1(EGE). To certify the stabilizing branch, additionally provide W positive definite with Ac*W+W Ac negative definite and 2||W||2 g rho smaller than its negative-definiteness margin. Norm/spectral inequalities are outward-certified by VAL owners; a residual alone is insufficient.",
  "For DARE candidate Xhat Hermitian require R+B*Xhat B positive definite, Ac(Xhat) Schur, and Stein derivative D(E)=Ac* E Ac-E invertible. Derive an explicit Lipschitz bound L_D for the derivative on a radius rho-ball using a verified positive lower bound for R+B*X B there. With kappa>=||D^-1||, require kappa(r+L_D rho²/2)<=rho and kappa L_D rho<1. Prove unique root in that ball and a separate Schur-stability certificate from W-Ac*W Ac positive definite plus the explicit Ac perturbation bound. Do not transplant CARE residual constants to DARE.",
  "Define finite-budget continuous Newton-Kleinman policy iteration from supplied stabilizing K0: solve (A-BKj)* Xj+Xj(A-BKj)=-(Q+Kj*R Kj), then Kj+1=R^-1B*Xj. Under the stated continuous standard hypotheses and exact solves prove every new closed loop stabilizing, Xj positive semidefinite and nonincreasing, convergence to stabilizing X, and local quadratic rate using a uniformly bounded local Lyapunov inverse. For inexact solves require a separate residual/descent/stability safeguard with line search and certified margins; arbitrary approximate solves inherit none of these guarantees.",
  "Define discrete structure-preserving doubling A0=A,G0=G,H0=Q; Aj+1=Aj(I+GjHj)^-1Aj, Gj+1=Gj+Aj(I+GjHj)^-1Gj Aj*, Hj+1=Hj+Aj*Hj(I+GjHj)^-1Aj. Prove inverses exist from PSD Gj,Hj; prove symmetry/PSD via equivalent factored identities and the doubled graph/pencil relation. Under standard stabilizability/detectability/no-unit-circle hypotheses prove Hj tends to stabilizing DARE solution and a quantified eventual quadratic rate with constants depending on closed-loop spectral separation. Critical/unit-circle cases and finite-precision structure loss are excluded or explicit failure/inconclusive outcomes, not covered by this theorem.",
  "Local condition number is inverse Lyapunov/Stein derivative; prove sensitivity and graph-subspace perturbation bounds retaining spectral sep and ||U1^-1||. Dense operation counts use actual Schur/QZ/Lyapunov arithmetic; numerical acceptance requires returned Riccati residual, positive R+B*XB where applicable, symmetry defect and closed-loop stability certificate."
]

### Proof construction

Build PBH/stabilizability/detectability and semigroup/Stein decay first. Prove finite-horizon value matrices monotone/bounded via a supplied stabilizing feedback, pass to infinite horizon with exact finite-energy/transversality estimates, and derive ARE; detectability rules out nonstable unobserved directions and gives stable graph plus uniqueness. Prove Hamiltonian/symplectic graph identities algebraically, then reuse LIN-SCHUR/QZ and Sylvester machinery for computation. Kleinman uses Lyapunov energy identity with nonnegative gain-difference term; doubling uses exact rational squaring of stable/unstable graph maps plus separated spectrum. Residual certificates use contraction on the explicit matrix ball and independent Lyapunov stability margins. All are local complete proof obligations, not source-only suppliers.

### Examples

[
  "Scalar CARE with two roots and only one stabilizing branch",
  "DARE with singular A and infinite generalized pencil eigenvalue",
  "Nearly imaginary-axis/unit-circle closed-loop mode inflates sep inverse and makes tiny residual inconclusive",
  "Unstabilizable unstable mode or undetectable unstable mode violates promised existence",
  "Scalar exact Newton-Kleinman steps versus an inexact Lyapunov solve losing stability",
  "SDA PSD blocks and reported finite precision symmetry defect"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `LIN-SCHUR` → `computed-schur-decompositions-and-nonnormal-spectra` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-QZ` → `generalized-eigenvalue-pencils-and-qz-methods` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SYL` → `sylvester-and-lyapunov-matrix-equations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-MFUN` → `matrix-functions-and-scaling-squaring` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-LINEAR` → `verified-linear-systems-and-spectral-enclosures` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-schur-triangularisation`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-RIC** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-RIC` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-RIC** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## NA-13 — Gaussian quadrature

A: `gaussian-quadrature`. B: `gaussian-quadrature-examples`.

### Scope

New positive-measure Gaussian quadrature node/weight construction, orthogonal zero/location/positivity/exactness and Hermite/mean-value remainder under exact moment hypotheses. Existing Legendre Gram-Schmidt example does not supply this numerical method.

### Proof construction

Use Gram–Schmidt; prove root count by sign changes; divide q=p_mr+s and use orthogonality for exactness; apply exactness to ℓ_i² for positive weights; use Hermite interpolation at double nodes and repeated Rolle for the remainder. Each intermediate theorem is an explicit local proof obligation. To retain the exactness-only degree-2m−1 moment variant, construct p_m from its m orthogonality equations using the degree-(m−1) positive moment matrix and nonzero density support; do not pretend a degree-m quadratic norm is defined without the degree-2m moment.

### Examples

two-node Gauss–Legendre exact through degree three; positive weights from ℓ_i²; a tensor-product node-count calculation.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-10` → `polynomial-interpolation-and-remainder` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-EIGITER` → `restarted-and-block-eigensolvers` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-LINEAR` → `verified-linear-systems-and-spectral-enclosures` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `inner-product-spaces-and-orthogonality` → `library/linear-algebra/inner-product-spaces-and-orthogonality.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **NA-13** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `NA-13` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **NA-13** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "original_owner": "NA-13",
    "resolved_owner": "NA-13",
    "design": {
      "owner": "NA-13",
      "change": "Replace node oracle hold by Golub-Welsch executable Jacobi-matrix eigenprocedure and computed node/weight enclosure. Prove three-term recurrence, positive offdiagonals, simple roots/interlacing and weights mu0 |v_1|². Reuse LIN-SCHUR/LIN-EIGITER or symmetric eigensolver with explicit residual and VAL-LINEAR for certified nodes; carry actual weighted-measure moment assumptions. Do not claim root oracle is finite algorithm.",
      "sources": [
        "golub",
        "quad"
      ],
      "requires": [
        "LIN-EIGITER",
        "VAL-LINEAR"
      ],
      "reuse_disposition": "extend-existing",
      "source_references": [
        {
          "key": "golub",
          "title_and_locator": "Golub and Van Loan, Matrix Computations, 4e, Johns Hopkins, https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm ; sparse/direct, eigen/SVD, generalized eigen and tensor chapters; fetch exact sections before authoring.",
          "urls": [
            "https://www.cs.cornell.edu/cv/GVL4/golubandvanloan.htm"
          ]
        },
        {
          "key": "quad",
          "title_and_locator": "Davis and Rabinowitz, Methods of Numerical Integration, 2e, Academic Press, https://www.sciencedirect.com/book/9780122063602/methods-of-numerical-integration ; Peano kernel, extrapolation, singular and multiple integrals.",
          "urls": [
            "https://www.sciencedirect.com/book/9780122063602/methods-of-numerical-integration"
          ]
        }
      ]
    },
    "reason": "approved scope extension"
  }
]


## LIN-SQRTFILTER — Square root covariance update error and stability

A: `square-root-covariance-update-error-and-stability`. B: `square-root-covariance-update-error-and-stability-examples`.

### Scope

[
  "Reuse alg-kalman-filter, def-linear-gaussian-state-space-model-with-independent-noises, lem-one-step-kalman-gaussian-conditioning (which already proves Joseph identity) and thm-kalman-filter-is-exact-posterior. Do not restate Gaussian filtering, Joseph algebra or posterior exactness as new items. New algorithm is an explicitly numerical factor implementation of that canonical covariance/mean map, with finite horizon and arithmetic/factorization statuses.",
  "Inputs are rectangular factors L0,LQk,LRk of PSD P0,Qk,Rk, exact finite Fk,Hk and data, with canonical innovation Sk positive definite. Factors may have zero columns/rank. Prediction QR on [Fk Lplus, LQk]* returns lower factor Lminus whose product is Fk Pplus Fk*+Qk. For fixed square storage zero-pad rectangular factors; zero state/noise pivots are permitted, innovation block must be full rank.",
  "For measurement update form Z=[[LR,H Lminus],[0,Lminus]], padded with zero columns as necessary, and compute QR of Z* so its adjoint factor is lower block triangular [[L11,0],[L21,L22]]. Prove L11 L11*=S, L21 L11*=Pminus H*, L22 L22*=canonical posterior covariance. Mean update is mplus=mminus+L21 z with L11 z=innovation; gain if needed is L21 L11^-1 through triangular solves. Only innovation factor requires positive diagonal; singular L22 is admissible. No subtractive covariance downdate is needed.",
  "Prove with stable Householder QR under NA-02 completed local reflector/range premises: computed lower factor is exact triangular factor of (Z+DeltaZ)(Z+DeltaZ)* with ||DeltaZ||_F<=eta ||Z||_F for an explicit eta=C(dim)u/(1-C(dim)u), plus separately accounted product/input-factor errors. Hence nearby joint covariance error <=(2eta+eta²)||Z||_F². The represented posterior covariance L22 L22* is PSD exactly as a product. This nearby joint covariance may introduce correlations or perturb model blocks: do not claim backward stability within the original independent-noise state-space model without a separate structured perturbation proof.",
  "Prove innovation triangular-solve residual/forward bounds with sigma_min(L11)>0, and perturbation bounds for the block Schur complement/conditional mean retaining ||S^-1||, ||Pminus H*|| and data scale. Positive innovation lower bound must dominate joint perturbation to identify nearby covariance update. Finite-horizon propagation sums per-step factor/product/solve errors with explicitly derived Lipschitz factors; no uniform-in-time stability or accuracy follows without detectability/stability/conditioning assumptions proved here if advertised.",
  "Compare the canonical subtractive update and existing Joseph identity only as algebraic context: numerical cancellation can make a directly rounded Pminus-KSK* indefinite, whereas L22 product is PSD. Do not promise a stored rounded covariance matrix formed from L22 is PSD in exact represented entries unless formed/rounded with an additional certified symmetric factor interpretation. Posterior statistics remain inherited with the original AC assumptions; numerical matrix identities alone require no new choice."
]

### Proof construction

Use canonical one-step block covariance and Gaussian/Joseph supplier. Gram-matrix block multiplication plus QR gives exact numerical equivalence, including semidefinite rank loss. Use NA-02 exact orthogonal representative/backward QR error to obtain a nearby prearray, then algebraic Gram perturbation and Schur-complement resolvent identity. Triangular residual bounds and explicitly conditioned finite-horizon recursion supply actual error guarantees, with input uncertainty and arithmetic error separated.

### Examples

[
  "Canonical ex-kalman-filter-singular-prior-positive-innovation rerun through rectangular square roots without new statistical example claim",
  "Nearly noiseless observation amplifies innovation solve error",
  "Two-scale covariance where subtractive floating update loses PSD",
  "Nonzero factor residual and PSD represented L22 product with perturbed joint covariance"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-02` → `finite-precision-direct-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SVD` → `computed-singular-values-and-rank-revealing-factorizations` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-LINEAR` → `verified-linear-systems-and-spectral-enclosures` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-RIC` → `numerical-algebraic-riccati-equations-and-stabilizing-branches` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `kalman-filtering` → `library/bayesian-computational-statistics/kalman-filtering.md`.
- `state-space-models-as-probability-laws` → `library/statistical-models-and-experiments/state-space-models-as-probability-laws.md`.
- `direct-matrix-factorisations-lu-cholesky-and-qr` → `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `alg-kalman-filter`, `def-forward-and-back-substitution-for-triangular-systems`, `def-linear-gaussian-state-space-model-with-independent-noises`, `lem-one-step-kalman-gaussian-conditioning`, `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`, `thm-kalman-filter-is-exact-posterior`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-SQRTFILTER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-SQRTFILTER` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-SQRTFILTER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## PC-SFUN — Stable special function recurrences and certified evaluation

A: `stable-special-function-recurrences-and-certified-evaluation`. B: `stable-special-function-recurrences-and-certified-evaluation-examples`.

### Scope

genuinely-new stable special-function algorithms

A: `stable-special-function-recurrences-and-certified-evaluation`.

Reuse `def-euler-gamma-function`, `thm-stirling-formula-gamma`, and `thm-gamma-functional-equation` only within their inspected domains. The repaired branch contracts in the linked audit fix integer-order Bessel series, Airy initial-value series, Fresnel/erf/hypergeometric series with geometric tails, a finite Miller contamination enclosure, an erfcx continued-fraction interval and asymptotic remainder, and the Gamma product/Stirling bounds. Each evaluator has finite work/precision budgets and success, inconclusive, domain and range branches; it promises absolute enclosures and relative tolerance only when the result interval excludes zero. Certified function enclosures use VAL-INTERVAL. The finite Miller certificate does not assume convergence as terminal index increases; source locators remain pending and no external source reading is claimed.

Examples retain forward recurrence losing small J_n, cancellation in `1−erf`, scaled I_n overflow avoidance, relative error near an Airy zero, asymptotic truncation, and branch-cut mismatch. Sources: NIST DLMF computation chapters https://dlmf.nist.gov/3 , https://dlmf.nist.gov/10.74 , https://dlmf.nist.gov/9.17 , https://dlmf.nist.gov/8.25 ; Temme Numerical Methods for Special Functions https://doi.org/10.1002/9781118833050 . Reading pending.

### Proof construction

[
  "The linked repaired audit defines the recurrence identities and finite certificates consumed here: Bessel J_n/I_n integer-order series and Miller Wronskian error enclosure; Airy coefficient recurrence; Fresnel/erf/hypergeometric series with explicit geometric tails; erfcx continued-fraction interval and signed asymptotic remainder; Gamma product tail and a derived sectorial Stirling constant. VAL-INTERVAL supplies outward rounding. Miller accepts only a finite error certificate and makes no terminal-index convergence claim.",
  "The examples remain forward recurrence losing small J_n, 1−erf cancellation, scaled I_n, relative error near an Airy zero, asymptotic truncation, and branch mismatch. Exact sources remain acquisition locators and have not been read."
]

### Examples

forward recurrence loses small J_n; backward recurrence plus normalization; erfc cancellation from 1-erf; overflow avoided by scaled I_n; relative error near an Airy zero; asymptotic optimal truncation; complex branch-cut mismatch.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-13` → `gaussian-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `VAL-INTERVAL` → `outward-rounded-interval-and-ball-arithmetic` (numerical-analysis; proposed same-frontier supplier, not a current library item; added for certified function enclosures).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.
- `the-gamma-function` → `library/complex-analysis/the-gamma-function.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `def-euler-gamma-function`, `thm-gamma-functional-equation`, `thm-stirling-formula-gamma`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **PC-SFUN** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `PC-SFUN` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **PC-SFUN** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## QUAD-SING — Singular and infinite interval quadrature

A: `singular-and-infinite-interval-quadrature`. B: `singular-and-infinite-interval-quadrature-examples`.

### Scope

[
  "Define algebraic/log weighted Gauss-Jacobi rules and substitutions for integrable endpoints alpha,beta>-1; prove exact weighted degree and transformed error under explicit derivative/weight hypotheses, reusing NA-13 orthogonal-polynomial interface.",
  "Define tanh-sinh and exp-sinh/sinh-sinh finite truncated trapezoid procedures with separate discretization and tail cutoffs; prove error by analytic-strip trapezoidal remainder plus double-exponential tail under explicit transformed bounds, not for every integrable f.",
  "Define Cauchy principal-value subtraction for integral_a^b f(x)/(x-c) dx, a<c<b, f C1: ordinary integral of (f(x)-f(c))/(x-c) plus f(c) log((b-c)/(c-a)); prove identity and regularity required by subsequent rule.",
  "Define reference-triangle Duffy transform for weak singularity |x-x0|^-alpha, alpha<2, vertex x0; prove Jacobian cancels radial power to r^(1-alpha), yielding a weighted product quadrature error. Curved/surface BEM mappings remain PDE-owner obligations."
]

### Proof construction

Change-of-variable dominated convergence with explicit integrable majorants; contour strip trapezoid lemma; finite tail integration; PV symmetric cancellation; elementary triangle Jacobian.

### Examples

[
  "Integral x^-1/2 log x",
  "Gaussian integral on infinite line",
  "PV integral with c interior",
  "Weakly singular triangle integral"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-13` → `gaussian-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `QUAD-EXTRAP` → `clenshaw-curtis-and-extrapolation-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **QUAD-SING** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `QUAD-SING` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **QUAD-SING** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## QUAD-SMOL — Sparse grid cubature and mixed regularity

A: `sparse-grid-cubature-and-mixed-regularity`. B: `sparse-grid-cubature-and-mixed-regularity-examples`.

### Scope

[
  "Define tensor-product quadrature and nested 1D levels Q_l, Q_-1=0, differences Delta_l; Smolyak sum over finite downward-closed multi-index set, deterministic node deduplication and combined signed weights.",
  "Prove telescoping exactness and polynomial multi-degree exactness from actual 1D levels; total work counts actual node union, not product-level sum after deduplication.",
  "Prove |I(f)-Q_Lambda(f)| <= sum_(ell notin Lambda)|tensor Delta_ell(f)| under absolute detail summability; derive explicit isotropic mixed-smoothness work/error rate only after proving detail decay and level cardinalities for chosen 1D rule.",
  "Define dimension-adaptive surplus selection with finite budget and admissible index set; surplus is an indicator unless rigorous omitted-tail bounds are provided. Weighted anisotropic tractability claims carry dimension-dependent norms/constants explicitly."
]

### Proof construction

Finite/infinite absolute telescoping and triangle inequality; count compositions and nested point increments; derive mixed derivative coefficients by tensor Peano kernels; adaptive stopping is budget termination, not automatic accuracy.

### Examples

[
  "4D product integrand",
  "Mixed-smoothness failure across diagonal ridge",
  "PCE coefficient integration with signed weights"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-13` → `gaussian-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `QUAD-EXTRAP` → `clenshaw-curtis-and-extrapolation-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).

No external library page token is recorded in `requires`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **QUAD-SMOL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `QUAD-SMOL` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **QUAD-SMOL** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

## PC-GINT — Gaussian basis integral recurrences and boys error

A: `gaussian-basis-integral-recurrences-and-boys-error`. B: `gaussian-basis-integral-recurrences-and-boys-error-examples`.

### Scope

genuinely-new finite Gaussian integral algorithms

A: `gaussian-basis-integral-recurrences-and-boys-error`.

Input finitely many Cartesian Gaussian primitives (polynomial times exp(-a|x-A|²), a>0), real centers and contraction coefficients. Define overlap, kinetic, attraction and two-electron Coulomb integrals as mathematical integrals. Prove absolute convergence including Coulomb singularities; Gaussian product theorem by completing squares; polynomial derivative/raising recurrences by differentiation under an explicit integrable dominating function. Reduce Coulomb integrals using 1/r=(2/sqrt(pi)) integral_0^infinity exp(-t²r²)dt with justified Tonelli and a change of variables to Boys F_m(T)=integral_0^1 t^(2m) exp(-Tt²)dt, m>=0,T>=0. Define finite primitive/contracted integral procedure with a declared recurrence ordering, memoization/work model and error budget. Establish Boys Taylor remainder for small T, positive quadrature enclosure on bounded T, and scaled incomplete-gamma/large-T tail bounds. Prove upward/downward recurrence error amplification and domain-based direction switch. Screening skips a block only with a proved bound (e.g. Coulomb Cauchy–Schwarz), and reports total discarded integral/energy bound rather than claiming exact sparsity.

New suppliers owned PC-GINT: Gaussian moment integrals with parameter derivatives; integral representation and recurrence identities; Boys stable-branch error; positive Coulomb bilinear form/Cauchy–Schwarz; tensor contraction error propagation into PC-VAR energy/gradient, with n/r norms explicit. Reuse canonical quadrature and NA01 arithmetic; no HF postulate used. B: same-center s-orbitals exact formula; small-T cancellation in upward recurrence; highly contracted coefficients; overlap near dependence; screening bound accumulated over all discarded blocks. Sources: Obara–Saika recurrence https://doi.org/10.1063/1.450106 ; McMurchie–Davidson https://doi.org/10.1016/0021-9991(78)90092-X ; Helgaker–Jørgensen–Olsen Molecular Electronic-Structure Theory https://doi.org/10.1002/9781119019572 . Reading pending.

### Proof construction

[
  "Input finitely many Cartesian Gaussian primitives (polynomial times exp(-a|x-A|²), a>0), real centers and contraction coefficients. Define overlap, kinetic, attraction and two-electron Coulomb integrals as mathematical integrals. Prove absolute convergence including Coulomb singularities; Gaussian product theorem by completing squares; polynomial derivative/raising recurrences by differentiation under an explicit integrable dominating function. Reduce Coulomb integrals using 1/r=(2/sqrt(pi)) integral_0^infinity exp(-t²r²)dt with justified Tonelli and a change of variables to Boys F_m(T)=integral_0^1 t^(2m) exp(-Tt²)dt, m>=0,T>=0. Define finite primitive/contracted integral procedure with a declared recurrence ordering, memoization/work model and error budget. Establish Boys Taylor remainder for small T, positive quadrature enclosure on bounded T, and scaled incomplete-gamma/large-T tail bounds. Prove upward/downward recurrence error amplification and domain-based direction switch. Screening skips a block only with a proved bound (e.g. Coulomb Cauchy–Schwarz), and reports total discarded integral/energy bound rather than claiming exact sparsity.",
  "New suppliers owned PC-GINT: Gaussian moment integrals with parameter derivatives; integral representation and recurrence identities; Boys stable-branch error; positive Coulomb bilinear form/Cauchy–Schwarz; tensor contraction error propagation into PC-VAR energy/gradient, with n/r norms explicit. Reuse canonical quadrature and NA01 arithmetic; no HF postulate used. B: same-center s-orbitals exact formula; small-T cancellation in upward recurrence; highly contracted coefficients; overlap near dependence; screening bound accumulated over all discarded blocks. Sources: Obara–Saika recurrence https://doi.org/10.1063/1.450106 ; McMurchie–Davidson https://doi.org/10.1016/0021-9991(78)90092-X ; Helgaker–Jørgensen–Olsen Molecular Electronic-Structure Theory https://doi.org/10.1002/9781119019572 . Reading pending."
]

### Examples

same-center s-orbitals exact formula; small-T cancellation in upward recurrence; highly contracted coefficients; overlap near dependence; screening bound accumulated over all discarded blocks.

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `PC-SFUN` → `stable-special-function-recurrences-and-certified-evaluation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-12` → `composite-quadrature-rules` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `NA-13` → `gaussian-quadrature` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `matrix-norms-condition-numbers-and-numerical-stability` → `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
No external canonical item is consumed as a proof premise in this pair. The linked repaired contract defines the needed local interfaces and gives their proof design; any same-frontier supplier is listed explicitly above.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **PC-GINT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `PC-GINT` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **PC-GINT** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

