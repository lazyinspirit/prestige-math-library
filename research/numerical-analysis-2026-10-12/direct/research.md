# Direct numerical foundations and numerical linear algebra

**Research date:** 2026-10-12
**Scope:** floating-point foundations, conditioning and stability, direct linear-system factorizations, least squares, and spectral/SVD foundations. This is a research and coverage dossier; it authors no library items.

## Finding

The requested direct-numerical route is already present as five published Linear Algebra A-pages, with five published example companions, 118 unique published items, and 58 unique published examples. The existing route is the one in `research/plan-spec.json`; it should be reused as the Numerical Analysis prerequisite spine rather than duplicated. The direct library coverage is unusually complete for exact algebraic contracts. Its material gaps are narrower: a conditional local Householder rounding lemma, a Cholesky recurrence algorithm and stability proof, a computed least-squares solution stability contract, and (only if the scope promises it) a numerical SVD algorithm/stability theorem. These are gaps in local suppliers for established results, not unsolved mathematical problems.

The controlling repository schema is the current one: use an `algorithm` item for a separately specified computational procedure, and prove correctness, cost, and finite-precision behavior in the appropriate separate results. No existing item has the `alg-` prefix; several `def-` items describe procedures, but the Cholesky page in particular defines the factorization, not its computational recurrence. This dossier does not reserve or author `op-` claims.

## Source reading record

Full source identities, access notes, URLs, cache paths, byte counts, SHA-256 hashes, and proof/read-status limits are recorded in [sources.json](sources.json). Full source caches and extracted text are under the ignored `scratchpad/numerical-analysis-2026-10-12/sources/direct/` tree only.

### Core textbook pages read in full

I read the complete extracted page body for each of these author-hosted sections of Tobin A. Driscoll and Richard J. Braun, *Fundamentals of Numerical Computation*, SIAM, 2017. “Complete” here means the full extracted body of that named online textbook page, including its displayed examples and exercises; it does not mean that the rest of the textbook was read.

| Section read in full | Main use in this dossier |
|---|---|
| [§1.1 Floating-point numbers](https://fncbook.com/floating-point/) | finite representation, relative rounding, machine epsilon, IEEE range and exceptions |
| [§1.2 Problems and conditioning](https://fncbook.com/conditioning/) | local conditioning, cancellation, sensitivity versus algorithm quality |
| [§1.3 Algorithms](https://fncbook.com/algorithms/) | computational procedures and operation-count framing |
| [§1.4 Stability](https://fncbook.com/stability/) | backward error and stable/unstable reformulations |
| [§2.3 Linear systems](https://fncbook.com/linear-systems/) | triangular recurrences and residuals |
| [§2.4 LU factorization](https://fncbook.com/lu/) | elimination, LU recurrences, exact-arithmetic caveats |
| [§2.5 Efficiency of matrix computations](https://fncbook.com/efficiency/) | flop model and dense solve/factorization counts |
| [§2.6 Row pivoting](https://fncbook.com/pivoting/) | partial pivot selection, PLU, pivot growth and stability discussion |
| [§2.7 Vector and matrix norms](https://fncbook.com/norms/) | induced norms and compatibility |
| [§2.8 Conditioning of linear systems](https://fncbook.com/condition-number/) | matrix/RHS perturbations, residual interpretation, condition numbers |
| [§2.9 Exploiting matrix structure](https://fncbook.com/structure/) | structured elimination, positive definiteness, Cholesky existence and cost |
| [§3.1 Fitting functions to data](https://fncbook.com/fitting/) | least-squares formulation |
| [§3.2 The normal equations](https://fncbook.com/normaleqns/) | normal equations, conditioning penalty, count and pseudoinverse relation |
| [§3.3 The QR factorization](https://fncbook.com/qr/) | thin/full QR and the exact least-squares solution |
| [§3.4 Computing QR factorizations](https://fncbook.com/house/) | Householder construction, sign choice, and QR cost |
| [§7.2 Eigenvalue decomposition](https://fncbook.com/evd/) | EVD, Bauer–Fike conditioning, QR iteration context |
| [§7.3 Singular value decomposition](https://fncbook.com/svd/) | exact SVD consequences; the text defers its existence proof and gives no numerical SVD algorithm |
| [§7.4 Symmetry and definiteness](https://fncbook.com/symm-eig/) | Hermitian spectral theorem, Rayleigh quotient, definiteness |
| [§8.2 Power iteration](https://fncbook.com/power/) | iteration definition and dominant-eigenvalue convergence conditions |
| [§8.3 Inverse iteration](https://fncbook.com/inviter/) | shifted iteration and nearest-eigenvalue targeting |

The FNC Chapter 8 §8.4 subspace page was downloaded incidentally, cached, and deliberately not read. The rest of FNC was not read. In particular, FNC describes Householder QR as more stable but does not prove the local computed-reflector bound needed by the library theorem; its pivoted-LU proof is beyond its stated scope; and its SVD proof is deferred. Those pages were read as context, not substituted for local proof obligations.

### Floating-point reference read by section

I read these portions of David Goldberg, “What Every Computer Scientist Should Know About Floating-Point Arithmetic,” *ACM Computing Surveys* 23(1), March 1991, DOI [10.1145/103162.103163](https://doi.org/10.1145/103162.103163), using Oracle’s public reprint, which notes ACM reprint permission:

- The article introduction and all of §1 “Rounding Error” (floating-point formats, relative error and ulps, guard digits, cancellation, exactly rounded operations), extracted text lines 12–211. This includes the displayed proofs of Theorems 1, 5, and 7 in that section.
- All of §2 “The IEEE Standard” (formats and operations, special values, infinities, signed zero, denormalized numbers/gradual underflow, exceptions and flags, and rounding modes), lines 212–497.
- “The Details: Rounding Error,” lines 559–779, including the relevant one-operation rounding/cancellation estimates and quadratic-formula discussion. The extraction renders some equations imperfectly; I read the surrounding proof routes and did not rely on this extraction as a line-perfect source.
- “The Details: Errors In Summation,” lines 794–803, for qualitative error-accumulation context. It is not the proof source for the library dot-product theorem.

I did not read the binary-to-decimal conversion detail (lines 779–793), the summary/references and remaining details (lines 804–949, including the Kahan-summation proof), or later systems, language/compiler, and extended-precision sections (lines 950–1123). The article’s machine-epsilon notation is not imported into the library: the library uses unit roundoff (u=2^{-53}) for binary64, while the FNC text calls (2^{-52}) machine epsilon and uses half of that as its relative-rounding bound.

## Existing library coverage and proof routes

The complete published inventories and per-item statement metadata are in [coverage.json](coverage.json). I inspected the item statements across the five relevant pages and read the 33 load-bearing item proofs enumerated there in full. The summaries below record the hypotheses and proof architecture that matter when extending or reusing them.

### Floating-point model, conditioning, and backward error

The page `matrix-norms-condition-numbers-and-numerical-stability` supplies the core definitions and results:

- `def-standard-relative-floating-point-model-and-unit-roundoff` states the standard relative model for represented operations, with operation-specific range conditions. The model does not silently cover overflow, underflow, invalid operations, or arbitrary exceptional results; the dot-product theorem explicitly assumes all products and partial sums remain in the normal range.
- `lem-product-of-one-plus-deltas-gives-theta-n` establishes γₙ = (nu/(1-nu)) for (nu<1), bounding products of factors (1+δ_j) using binomial/geometric-series estimates. This is the reusable accumulation lemma.
- `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` analyzes left-to-right products and summation. It gives a componentwise coefficient perturbation controlled by γₙ and the normwise bound γₙ ∑|xⱼ yⱼ| ≤ γₙ||x||₁||y||₁, subject to the stated operation/range hypotheses.
- `def-forward-and-backward-stability-for-a-problem-family` keeps the problem map’s conditioning separate from an algorithm’s stability. `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order` composes a small backward perturbation with a local condition number, with the required local differentiability and perturbation-size assumptions.
- `def-normwise-and-componentwise-backward-error-for-linear-systems` and `prop-explicit-formulas-for-normwise-and-componentwise-backward-error` define and compute the two system residual scalings. `thm-residual-to-forward-error-bounds-for-linear-systems` translates a residual into forward error with condition-number dependence. A small residual alone is not a small forward error without conditioning information.
- For nonsingular (A), the RHS and matrix perturbation theorems make the conditioning hypotheses explicit. `thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity` proves the exact 2-norm distance characterization, not just an inequality.
- `thm-normal-equations-square-the-spectral-condition-number` uses the singular-value/eigenvalue relationship to prove κ₂((A^*A))=κ₂((A))² for full-column-rank (A).

This page already supports the standard numerical-analysis argument “algorithm backward error + problem conditioning → forward error.” It correctly prevents a stability assertion from being read as a guarantee of accurate answers on ill-conditioned inputs.

### Triangular solves and LU/partial pivoting

On `direct-matrix-factorisations-lu-cholesky-and-qr`, `def-forward-and-back-substitution-for-triangular-systems` gives the recurrences and `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` proves existence/uniqueness, substitution correctness, and quadratic cost.

For exact LU, the proof chain is:

1. `thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero` characterizes the no-pivot factorization condition using nonzero leading principal minors.
2. `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` proves elimination’s multipliers produce the declared normalized factors.
3. The pivoted route defines (P), multipliers, and the growth factor in `def-permutation-matrix-partial-pivoting-and-pivot-growth`; `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity` supplies the all-square-matrix existence/singularity contract.
4. `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound` is a floating-point result with an explicit pivot-growth-dependent backward bound, |ΔA| ≤ γₙ (P^T(|L||U|)), and a corresponding infinity-norm estimate bounded by (n^2γ_nρ(A)\max|A|). It does not assert a uniform constant independent of growth.

The statement keeps exact factorization existence, computed factorization error, and conditioning logically distinct. Do not simplify the pivot-growth factor out of the GEPP theorem.

### Cholesky

`def-cholesky-factorisation-with-positive-diagonal` fixes the positive-diagonal convention. `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique` proves exact existence iff the matrix is Hermitian positive definite and proves uniqueness. Its proof uses block induction and the positive-definite Schur complement for existence; positivity of (L^*L) and a lower-triangular unitary quotient for uniqueness. `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots` relates Sylvester’s criterion to positive pivots. `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost` gives the exact solve via two triangular substitutions and dense factorization cost.

The current page has no separately stated Cholesky computational recurrence and no finite-precision Cholesky backward-error theorem. The distinction is substantive: an exact existence-and-cost theorem does not establish rounded recurrence stability.

### QR and least squares

`def-householder-reflector` and `def-real-and-complex-givens-transformations` feed `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`. The exact QR procedure is defined in `def-full-reduced-and-column-pivoted-computational-qr-factorisations`; `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts` proves the factorization and its operation counts.

The published `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` must be carried with its explicit premise [A1]: each computed reflector is orthogonal and its local transformation is an exact transformation of a nearby active block, with ‖Eₖ‖F ≤ 3γₘ‖A⁽ᵏ⁾‖F. The theorem’s global proof transports and sums these local perturbations by exact orthogonality, yielding a nearby-matrix factorization bound. The proof does not derive [A1] from the standard model. A scaffold or later author must not restate the theorem as unconditional standard-model stability.

For least squares, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number` proves that for full-column-rank (A), reduced QR yields the unique exact minimizer and κ₂((R))=κ₂((A)); it contrasts this with normal equations’ squared condition number. `thm-least-squares-solutions-and-normal-equation` supplies the general exact normal-equation characterization. The published local stability statement concerns the computed QR factorization under [A1], not the full computed solution after applying (Q^*b) and solving a rounded triangular system. That solution-level backward-error contract remains a local supplier gap if promised by the eventual scope.

### SVD, pseudoinverse, and eigenvalue foundations

The spectral page’s `thm-complex-spectral-theorem-for-normal-endomorphisms` route is Schur triangularization followed by the fact that a normal upper-triangular matrix must be diagonal. The real self-adjoint result follows by real-normal classification. The local `thm-singular-value-decomposition` proof constructs |T|=√(T*T) from the nonnegative square-root theorem and spectral resolution, chooses an orthonormal right singular basis, and sets left singular vectors to (Te_j/s_j) for positive singular values, extending a basis across the nullspace. Thus the library has a real local existence proof even though FNC §7.3 defers it. The same page proves the operator norm is the largest singular value and includes Eckart–Young; it contains no numerical SVD algorithm.

The pseudoinverse page proves the Penrose object exists uniquely, (AA^+) and (A^+A) are orthogonal projections, and (A^+b) is the unique minimum-norm least-squares solution with all minimizers (A^+b+\ker A). Full-rank formulas, reduced-QR formulas, Tikhonov regularization, and truncated-SVD filters are exact algebraic contracts. These are not claims about the finite-precision algorithm used to compute an SVD or pseudoinverse.

The eigenvalue page proves the residual identity `thm-eigenpair-residual-realises-the-minimum-norm-backward-error`: for a unit vector (x), the residual ‖(Ax-μ x)‖ is the minimum spectral-norm matrix perturbation making ((μ,x)) an exact eigenpair. Power-iteration convergence requires diagonalizability, a simple strictly dominant eigenvalue in modulus, and a start vector with nonzero coefficient in its dominant eigendirection. Shifted inverse iteration requires a simple eigenvalue nearest the shift and invertibility away from it. QR iteration items state exact-arithmetic convergence/deflation hypotheses, including separated moduli and leading-minor or non-tie conditions where specified. No finite-precision QR eigenvalue-stability theorem was found in this direct coverage; finite-precision QR iteration may belong to the iterative-methods scope.

## Arithmetic cost versus numerical error

The FNC efficiency page defines a flop as one scalar addition, subtraction, multiplication, division, or square root. Under that declared arithmetic model, dense LU costs (2n^3/3+O(n^2)), Cholesky costs (n^3/3+O(n^2)), and triangular solve costs (2n^2+O(n)). Householder/Givens QR counts are supplied by the local factorization theorem. FNC §3.2 gives the leading dense normal-equations count (mn^2+n^3/3) for the stated convention and implementation; the local library does not package the complete count as a theorem. A proposed local cost item should state whether it forms one triangle of (A^*A), includes (A^*b), and includes the Cholesky and substitutions. Flops estimate arithmetic work; they do not prove runtime, stability, or memory traffic.

Error analysis uses a separate model: each permitted rounded operation is compared with an exact real operation, and chains of local errors are bounded under explicit normal-range assumptions. Operation counts do not imply small backward error; a backward-error bound does not by itself imply small forward error unless conditioning is controlled. These distinctions should remain visible in any page design.

## Prerequisite route and missing local suppliers

The full machine-readable route and supplier designs are in [prerequisites.json](prerequisites.json). In canonical plan order:

1. **The Spectral Theorem, Positive Operators and Singular Value Decomposition** depends on the fundamental theorem of algebra, inner-product spaces and orthogonality, and triangularisation/Jordan form.
2. **Matrix Norms, Condition Numbers and Numerical Stability** depends on (\mathbb R^n) as a normed space and the spectral/SVD page.
3. **Direct Matrix Factorisations: LU, Cholesky and QR** depends on norms, conditioning, and stability.
4. **The Moore–Penrose Pseudoinverse and Regularised Least Squares** depends on direct factorisations.
5. **Eigenvalue Iterations and the QR Algorithm** depends on direct factorisations.

The repository already marks all five A-pages and all five companion B-pages published. Relevant plans reuse them; no separate numerical-analysis plan or duplicate page is needed to represent the existing coverage.

The following are the missing local supplier contracts, not conjectures:

| Local supplier to author if in scope | Existing carrier and exact gap | Recommended proof route |
|---|---|---|
| `lem-householder-qr-local-backward-step-bound` | The published Householder QR stability theorem assumes [A1], including an exact orthogonal computed reflector and a (3\gamma_m) local perturbation bound; it does not discharge that premise. | Bound stable norm/scaling and reflector construction, derive the rank-one trailing-block update error from the floating-point dot-product lemma, handle zero/no-op reflectors, then aggregate. If exact orthogonality cannot be maintained for the chosen representation, revise the global theorem to account for reflector norm growth. |
| `alg-cholesky-factorisation-with-positive-diagonal` | The exact Cholesky page has the factorization contract and consequences but no recurrence as a procedure item. | Specify Hermitian positive-definite input; for each pivot compute (d_j=a_{jj}-\sum_{k<j}|l_{jk}|^2), (l_{jj}=\sqrt{d_j}>0), then (l_{ij}=(a_{ij}-\sum_{k<j}l_{ik}\overline{l_{jk}})/l_{jj}). Prove pivot admissibility and correctness from the Schur-complement/positive-pivot theorems, and state exact arithmetic cost separately. |
| `thm-computed-cholesky-is-backward-stable` | No rounded Cholesky recurrence error theorem is published locally. | Bound each diagonal/off-diagonal sum, include square-root and division rounding, assemble a Hermitian residual (E) in (A+E=\widehat L\widehat L^*), and derive explicit componentwise then normwise constants from the standard model. |
| `thm-householder-qr-least-squares-backward-stability` | Exact full-rank QR solves LS and QR factorization has the conditional [A1] stability theorem, but no computed (x\)-solution error contract covers projection and back substitution. | Discharge the local reflector lemma; bound computed (Q^*b), triangular substitution, and composition into a nearby-((A,b)) least-squares problem; state a condition measure for forward-error consequences. Include only if computed LS stability is promised. |
| `alg-bidiagonal-svd` and `thm-computed-svd-backward-stability` | The SVD, pseudoinverse, and truncation results are exact; there is no local numerical SVD method or stability statement. | If numerical computation is in scope, first read a full-text authoritative algorithm/stability source. Specify left/right Householder bidiagonal reduction and bidiagonal QR/deflation, then prove exact reduction, convergence under declared conditions, and a finite-precision nearby-factorization bound by composing unitary-step errors. |
| `thm-normal-equations-dense-flop-count` | FNC §3.2 gives (mn^2+n^3/3) under its convention, but the local page does not package a count theorem. | Define flop precisely; count symmetry-aware (A^*A) and (A^*b), Cholesky, and substitutions separately, and label lower-order terms. Optional if the eventual plan promises this comparison. |

All six designs are tagged `open_problem: false` in the prerequisite map. The Householder lemma and Cholesky/LS/SVD stability theorems are established numerical-analysis results whose derivations/suppliers are absent from this library slice. The Cholesky recurrence and operation count are standard computational contracts. They are not mathematical unknowns. The numerical SVD branch additionally needs a full-text algorithm/stability source before authoring; the exact SVD proof alone is not a substitute.

## Scope boundary

This dossier covers direct dense factorizations and direct spectral/least-squares foundations. It does not claim finite-precision convergence/stability of shifted QR eigenvalue algorithms, Krylov methods, CG/GMRES, preconditioners, iterative linear solvers, or stationary iterative methods. The FNC subspace page was cached but unread, and the source-reading record makes that limit explicit. Root/scaffold work should route such claims to the relevant iterative-methods researcher rather than imply they follow from exact-arithmetic convergence statements.
