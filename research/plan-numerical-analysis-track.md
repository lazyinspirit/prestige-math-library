# Numerical Analysis — prose scaffold plan

**Status:** draft design, derived from the six completed research packets dated 2026-10-12. This file is not a production item inventory and is not added to the canonical plan spec. It specifies A-page teaching scopes and B-page example scopes only.

**Category:** numerical-analysis, at library/numerical-analysis/. Each numbered NA pair has one A page and a companion B examples page with the same slug plus -examples. Pages are ordered so every in-category prerequisite precedes its consumer. The B companion contains worked examples and counterexamples; it is never a supplier.

**Supplier policy:** reuse the published Linear Algebra pages for spectral/SVD theory, condition numbers and roundoff vocabulary, direct factorizations, pseudoinverses and regularization, eigenvalue iterations, Krylov methods, CG/MINRES and preconditioning. New pages add only missing numerical-analysis contracts and interfaces; they do not copy existing item IDs or claim that exact-arithmetic results prove computed-method stability. Reuse published PDE and functional-analysis suppliers under their actual hypotheses. The planned P-NUM-ODE-01/02 and P-NUM-SDE-01/02 pages in research/plan-machine-learning-track.md are independent pre-category suppliers. Numerical Analysis may consume these generic solver contracts, but no numerical-analysis pair depends on Category 4 or any ML consumer.

**Proof and error policy:** separate exact-arithmetic identities, finite-precision roundoff, continuous-problem well-posedness, discretization/approximation, algebraic solver residual, sampling/randomization, and model error. A named scheme, CFL inequality, small residual, estimator, or observed rate does not itself prove convergence or accuracy. State the norm, mesh/method family, regularity, boundary/interface conditions, and uniform constants. Every mathematical theorem receives local proof dependencies; sources guide proof design but do not act as logical suppliers. Established results whose proof is absent locally remain authoring obligations. Only NA-46 is an open-problem candidate; it has no downstream logical use. The existing drafted periodic Navier–Stokes open problem is contextual only.

**Pair fields:** each entry gives Pages, Scope and proposed kinds/interfaces, Proof route, Examples, Requires, and Sources. Requires lists only earlier NA pairs, exact existing page/item suppliers, or the independent planned P-NUM pages. Source read ranges and proof limitations are given inline and in the linked packet records.

### NA-01 — Floating-point arithmetic, conditioning, and error propagation

**Pages:** floating-point-arithmetic-and-error-propagation / floating-point-arithmetic-and-error-propagation-examples.

**Scope:** Reuse, without reissuing, the published definitions of the standard relative floating-point model and unit roundoff, γ_n accumulation, dot-product error, conditioning, backward stability, and residual-to-forward-error bounds. Organize their interface as exact problem → computed quantity → backward perturbation → condition-amplified forward error. State the normal-range premise for each rounded operation and keep overflow, underflow, subnormals, invalid operations, cancellation, and exceptional results visible. Proposed interfaces are a page-level error taxonomy and, only if a new item is needed, a proved triangle-inequality error ledger; the existing local definitions remain canonical.

**Proof route:** Point to the published Linear Algebra contracts for every numerical inequality. For a new total-error lemma, insert intermediate targets and apply the norm triangle inequality; do not combine variances without centering and covariance/independence hypotheses. Examples and page prose must distinguish model sensitivity from algorithm instability.

**Examples:** cancellation in the quadratic formula; a small linear-system residual with a large forward error when the condition number is large; a dot product at the edge of the normal-range hypothesis.

**Requires:** published Linear Algebra page matrix-norms-condition-numbers-and-numerical-stability, especially def-standard-relative-floating-point-model-and-unit-roundoff, lem-product-of-one-plus-deltas-gives-theta-n, thm-floating-point-dot-product-componentwise-and-normwise-error-bounds, def-forward-and-backward-stability-for-a-problem-family, thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order, and thm-residual-to-forward-error-bounds-for-linear-systems.

**Sources:** Driscoll–Braun, FNC §§1.1–1.4, full extracted pages read: https://fncbook.com/floating-point/, https://fncbook.com/conditioning/, https://fncbook.com/algorithms/, https://fncbook.com/stability/; packet record research/numerical-analysis-2026-10-12/direct/sources.json, source_id driscoll-braun-fnc-2017. Goldberg, §1 and §2 at extracted lines 12–497 and “The Details, Rounding Error” lines 559–779, read in those ranges: https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html; packet source_id goldberg-1991-oracle-reprint. The library’s binary64 unit roundoff is 2^-53; do not copy the FNC/Goldberg machine-epsilon naming as if it were the same constant.

### NA-02 — Finite-precision direct factorizations and least squares

**Pages:** finite-precision-direct-factorizations / finite-precision-direct-factorizations-examples.

**Scope:** Add alg-cholesky-factorisation-with-positive-diagonal with the Hermitian positive-definite recurrence d_j=a_jj−Σ_{k<j}|l_jk|², l_jj=√d_j>0, and l_ij=(a_ij−Σ_{k<j}l_ik conjugate(l_jk))/l_jj. Prove pivot admissibility and exact correctness. Add a computed-Cholesky backward-error theorem with explicit componentwise/normwise constants, and a Householder local-step lemma only under the published standard relative model and stated range conditions. If computed least-squares stability is promised, add a separate full-column-rank computed-solution theorem covering reflector formation, Q*b, triangular substitution, and the nearby (A,b) perturbation. Preserve the existing Householder theorem’s explicit A1 premise until that premise is proved and integrated with a fresh dependency/consumer review; it remains conditional here. Do not add a numerical-SVD algorithm: the direct packet has no read full-text algorithm/stability source.

**Proof route:** Derive each Cholesky pivot from the positive-definite Schur complement; bound every rounded sum, square root, and division; assemble the Hermitian residual A+E=Lhat Lhat*. For Householder QR, prove stable scaling and reflector construction, then the rank-one update perturbation, including the zero-vector case; aggregate local errors by exact orthogonality. For computed least squares, add the Q*b and triangular-solve residuals before applying the least-squares condition bound. Derive flop costs only under an explicit operation convention.

**Examples:** positive-definite 2×2 Cholesky recurrence and a computed residual; a full-rank least-squares problem comparing normal equations with reduced QR; an ill-conditioned design matrix showing why stability does not imply small forward error.

**Requires:** NA-01; published Linear Algebra pages direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, the-spectral-theorem-and-singular-value-decomposition, and the-moore-penrose-pseudoinverse-and-regularised-least-squares. Reuse thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots, thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model only with A1 retained, thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost, and thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number.

**Sources:** FNC §2.9 https://fncbook.com/structure/, §§2.3–2.8 https://fncbook.com/linear-systems/, https://fncbook.com/lu/, https://fncbook.com/efficiency/, https://fncbook.com/pivoting/, https://fncbook.com/norms/, https://fncbook.com/condition-number/, and §§3.1–3.4 https://fncbook.com/fitting/, https://fncbook.com/normaleqns/, https://fncbook.com/qr/, https://fncbook.com/house/; complete extracted named pages read, with no local computed-Cholesky or computed-LS proof imported. See direct/sources.json source_id driscoll-braun-fnc-2017 and direct/research.md §“Prerequisite route and missing local suppliers.”

### NA-03 — Sparse matrix models and kernel costs

**Pages:** sparse-matrix-models-and-kernel-costs / sparse-matrix-models-and-kernel-costs-examples.

**Scope:** Define a fixed CSR access model, including dimensions, row pointers, values, column indices, and duplicate/empty-row conventions; define CSR matrix–vector multiplication; prove storage O(nnz(A)+m) and operation count O(m+nnz(A)). For square patterns with at least one stored entry per row, state the O(nnz(A)) specialization. Distinguish sparse matvec/vector-kernel costs from convergence and from sparse direct-factorization fill, which depends on the graph and ordering. Do not state a universal factorization cost from matrix dimension alone.

**Proof route:** Count stored values, column indices, row pointers, and loop iterations under the declared format. Treat algorithmic costs as arithmetic/storage counts, not runtime or memory-bandwidth claims. Use a concrete elimination graph to show fill without asserting a general fill bound.

**Examples:** CSR for a one-dimensional tridiagonal matrix; one matvec count; a sparse elimination ordering that creates fill.

**Requires:** NA-01; published Linear Algebra page direct-matrix-factorisations-lu-cholesky-and-qr for triangular kernels and exact factorization context.

**Sources:** Saad, Iterative Methods for Sparse Linear Systems, 2e, Ch. 3, printed pp. 75–104 (complete chapter read): https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf; Cornell notes 31–33, complete PDFs, course index https://www.cs.cornell.edu/~bindel/class/cs6210-f12/lectures.html. Exact source ranges and limitations are in iterative/sources.json, source_ids saad-iterative-methods-2e and cornell-cs6210-f12-lecture-notes.

### NA-04 — Stationary iterations and relaxation

**Pages:** stationary-iterations-and-relaxation / stationary-iterations-and-relaxation-examples.

**Scope:** Define a matrix splitting A=M−N and the stationary update x_{j+1}=M^-1Nx_j+M^-1b; supply Richardson, Jacobi, Gauss–Seidel, and SOR as exact algorithms with their admissible diagonal/pivot rules. State the all-start/all-right-hand-side convergence equivalence ρ(M^-1N)<1. Prove only the source-backed sufficient tests: strict or irreducible diagonal dominance for Jacobi/Gauss–Seidel; for symmetric A with positive diagonal, SOR converges for every start iff A is positive definite and 0<ω<2. Keep ordering assumptions on any optimal-ω formula.

**Proof route:** Reduce the error to G^j e_0; use Jordan form/spectral radius for the all-start equivalence and norm contraction only as a sufficient condition. Explicitly permit transient nonnormal growth and polynomial factors from defective dominant roots. Prove named matrix-class criteria separately from the general theorem.

**Examples:** diagonally dominant Jacobi; SPD SOR for 0<ω<2; a splitting with ρ(G)≥1 and an initial error that misses the unstable eigenspace.

**Requires:** NA-03; published Linear Algebra pages krylov-subspaces-arnoldi-and-gmres and matrix-norms-condition-numbers-and-numerical-stability, including def-stationary-iteration-from-a-matrix-splitting and thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one.

**Sources:** Saad Ch. 4 §§4.1–4.2, printed pp. 105–126, read in full; Cornell lecture 31 complete PDF; URLs as in NA-03 and exact read records in iterative/sources.json. Convergence factors do not follow from a method name.

### NA-05 — Krylov methods and Lanczos convergence

**Pages:** krylov-methods-and-lanczos-convergence / krylov-methods-and-lanczos-convergence-examples.

**Scope:** Reuse the published exact-arithmetic Krylov, Arnoldi, GMRES, CG, MINRES, residual, grade, and termination contracts without copying their items. Add a separate sparse CSR cost proposition for m-step unrestarted Arnoldi/GMRES: O(m nnz(A)+m²n) arithmetic and O(mn) basis storage under the square nonempty-row pattern assumption, plus the small least-squares solve. Add an extremal Lanczos Ritz-value theorem for real symmetric A with λ₁>λ₂≥…≥λ_n, a unit starting vector with nonzero dominant component, and explicit starting-angle and spectral-gap factors. Do not imply computed finite-precision CG/Lanczos terminates in the exact grade.

**Proof route:** Count matvecs and orthogonalization separately. For Lanczos, combine the Ritz residual identity with Chebyshev polynomial approximation on the unwanted spectral interval; retain the start-angle denominator and gap in the bound. State ghost Ritz values/loss of orthogonality as finite-precision behavior, not as a contradiction to the exact theorem.

**Examples:** unrestarted versus restarted GMRES; CG energy convergence for SPD A versus MINRES for indefinite Hermitian A; a Lanczos Ritz sequence with a poorly aligned initial vector.

**Requires:** NA-03 and NA-04; published Linear Algebra pages krylov-subspaces-arnoldi-and-gmres, conjugate-gradients-minres-and-preconditioning, eigenvalue-iterations-and-the-qr-algorithm, matrix-norms-condition-numbers-and-numerical-stability, and the-spectral-theorem-and-singular-value-decomposition.

**Sources:** Saad Ch. 6 §§6.1–6.12, printed pp. 157–228, complete; Cornell notes 34–35, 37–39, complete PDFs, course index https://www.cs.cornell.edu/~bindel/class/cs6210-f12/lectures.html. Saad’s Gaussian elimination fill and exact Krylov claims are not finite-precision convergence guarantees. See iterative/sources.json for the exact note list and read limits.

### NA-06 — Preconditioner algorithms and residual metrics

**Pages:** preconditioner-algorithms-and-residual-metrics / preconditioner-algorithms-and-residual-metrics-examples.

**Scope:** Reuse the published left/right/symmetric preconditioning maps, residual identities, SPD-preconditioned CG transformation, flexible-GMRES condition, and counterexample to universal improvement. Add a precisely defined zero-fill incomplete LU procedure for a fixed ordering and sparsity pattern: return either the factors or an explicit zero-pivot failure; prove its retained pattern and count storage/application work in terms of nnz(L)+nnz(U). Keep setup cost, application cost, and Krylov convergence separate. Do not claim ILU improves conditioning or iteration count for arbitrary A.

**Proof route:** Show algebraically that left and right preconditioning preserve the exact solution set but minimize different residuals. For the ILU procedure, specify the recurrence, stored positions, and failure branch, then count operations under the input graph. For variable right preconditioners, use the actual preconditioned-vector span in flexible GMRES; do not reuse fixed-preconditioner spectral claims.

**Examples:** a left-preconditioned residual that is small while the physical residual is not; ILU(0) on a tridiagonal matrix; an invertible preconditioner that worsens the condition number.

**Requires:** NA-03, NA-04, and NA-05; published Linear Algebra page conjugate-gradients-minres-and-preconditioning, including def-left-right-and-symmetric-positive-definite-preconditioning, prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps, thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem, and cex-a-preconditioner-can-worsen-the-preconditioned-condition-number.

**Sources:** Saad Ch. 9 §§9.1–9.6, printed pp. 275–296, and Ch. 10 §§10.1–10.8, pp. 297–368, both read in full: https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf. The chapter supports algorithm design, not universal quality guarantees; see iterative/sources.json source_id saad-iterative-methods-2e.

### NA-07 — Multigrid methods and complexity

**Pages:** multigrid-methods-and-complexity / multigrid-methods-and-complexity-examples.

**Scope:** Define fine/coarse spaces, prolongation P, restriction R, Galerkin operator A_H=RA_hP, smoothing step, two-grid error operator, and one stated V-cycle. Prove the Galerkin coarse correction is an A_h-orthogonal projector for SPD A_h under the stated transfer identities. Prove the two-grid contraction from smoothing and approximation inequalities with constants 0<α≤β uniform in mesh level; keep convergence separate from cycle work. State the recursion T(N)=cN+γT(N/2^d) with its three Master-theorem regimes. FMG order and AMG selection are separate conditional claims; no arbitrary algebraic coarsening is declared convergent.

**Proof route:** Derive the projector identity, then use the exact smoothing and approximation estimates to obtain the one-sided bound sqrt(1−α/β); for symmetric pre/post smoothing use the A_h-adjoint relation. Prove work by recursion-tree counting. A mesh-independent rate requires level-uniform α,β; a rediscretized operator is not identified with the Galerkin operator without an equality proof.

**Examples:** 1D Poisson with linear interpolation; one coarse correction on a smooth error; V-cycle and W-cycle costs under γ=1 and γ=2 in d=2.

**Requires:** NA-03 and NA-06; published Linear Algebra matrix norm and SPD suppliers. For PDE model examples also use published PDE page lax-milgram-and-weak-elliptic-solutions.

**Sources:** Saad Ch. 13 §§13.1–13.7, printed pp. 423–468, read in full, including Lemma 13.1, Theorems 13.2–13.3 and their proof routes: https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf; Cornell notes 32–33, complete PDFs, https://www.cs.cornell.edu/~bindel/class/cs6210-f12/lectures.html. Source proof limits and the heuristic scope of AMG are in iterative/sources.json.

### NA-08 — Randomized low-rank approximation

**Pages:** randomized-low-rank-approximation / randomized-low-rank-approximation-examples.

**Scope:** Define the real Gaussian range finder for fixed A∈R^{m×n}, k≥2, p≥2, k+p≤min(m,n): draw Ω with iid N(0,1) entries, form Y=AΩ, compute an orthonormal basis Q for Ran(Y), and return QQ*A. Prove the expected spectral error bound E||A−QQ*A||₂ ≤ (1+√(k/(p−1)))σ_{k+1} + e√(k+p)/p (Σ_{j>k}σ_j²)^{1/2}. The expectation is over Ω and the theorem assumes exact arithmetic. Do not add SRFT embedding or a-posteriori estimator claims whose proofs were omitted by the read source.

**Proof route:** Establish the deterministic SVD-partition bound first; then supply local Gaussian pseudoinverse-moment, pseudoinverse-tail, spectral-norm, and concentration lemmas before taking expectations. Use independence of Ω₁,Ω₂ and local Eckart–Young for the optimal baseline. For a power scheme, prove its power inequality separately and insert QR orthonormalization between A and A* applications in any floating-point discussion.

**Examples:** rank-k matrix with zero error; slowly decaying singular values where the tail-Frobenius term matters; a power iteration that loses small modes without reorthogonalization.

**Requires:** NA-01 and NA-03; published Linear Algebra pages the-spectral-theorem-and-singular-value-decomposition and matrix-norms-condition-numbers-and-numerical-stability, including thm-singular-value-decomposition and thm-eckart-young-best-rank-k-approximation.

**Sources:** Halko–Martinsson–Tropp, “Finding Structure with Randomness,” arXiv:0909.4061v2, full 74-page preprint read: https://arxiv.org/abs/0909.4061v2. The expected/high-probability derivations in §§10 and Appendix A use Gaussian matrix estimates stated or cited without full proofs; their local derivations remain prerequisites. Source details and exact theorem limits are in iterative/sources.json, source_id halko-martinsson-tropp-2011.

### NA-09 — Nonlinear equations and Newton methods

**Pages:** nonlinear-equations-and-newton-methods / nonlinear-equations-and-newton-methods-examples.

**Scope:** Define fixed-point iteration, damped Newton and a finite-difference Jacobian variant with explicit input/output and stopping status. Prove local quadratic convergence of ordinary variable-Jacobian Newton only for F∈C³, DF invertible in a neighborhood of a root, and a sufficiently close initial point. Reuse the local frozen-Jacobian contraction only for its stated map; it is not ordinary Newton. No arbitrary-start or global convergence theorem is claimed.

**Proof route:** Taylor-expand F(x_j) at the root, use a uniform local inverse-Jacobian bound and a local invariant ball to derive ||e_{j+1}||≤C||e_j||², then prove the iterate remains in that ball. For line search, prove only the stated accepted-step decrease under its assumptions; distinguish convergence of the nonlinear solve from discretization accuracy.

**Examples:** scalar Newton near a simple root; double root with reduced order; a starting point outside the local basin; frozen versus updated Jacobian.

**Requires:** published thm-banach-fixed-point, cor-banach-error-estimates, lem-newton-contraction-near-an-invertible-derivative, thm-multivariable-taylor-formula-with-lagrange-remainder, and the exact ODE IVP page when the nonlinear equation is a shooting residual.

**Sources:** Hairer–Wanner, Ch. VI §VI.3, PDF pp. 6–8 / printed pp. 139–141, read by the recovery reader: https://www.unige.ch/~hairer/poly/chap6.pdf; FNC Ch. 4 selected files rootproblem.md, newton.md, newtonsys.md read at commit a280ed1a013393ee0a184dcbaa866522f35a3516: https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516. Hairer distinguishes the close-start local theorem from global convergence; exact recovered ranges are in ode/sources.json.

### NA-10 — Polynomial interpolation and remainder

**Pages:** polynomial-interpolation-and-remainder / polynomial-interpolation-and-remainder-examples.

**Scope:** For distinct real nodes x₀,…,x_n in [a,b], define cardinal polynomials ℓ_j and I_nf=Σf(x_j)ℓ_j; prove I_nf is the unique degree-at-most-n interpolant. For f∈C^{n+1}[a,b], prove the pointwise Lagrange remainder at every non-node x. State the barycentric evaluation formula as an algebraically equivalent procedure, with its finite-precision conditioning kept separate. Do not infer uniform convergence without node and function-class bounds.

**Proof route:** Verify cardinal values for existence; the difference of two interpolants has n+1 roots, so polynomial root count gives uniqueness. For the remainder, use an auxiliary multiple of the node product and repeated Rolle. Add the local higher-order Rolle intermediate explicitly; source samples that state uniqueness as known do not discharge this proof.

**Examples:** quadratic interpolation at three nodes; a pointwise remainder estimate; equispaced nodes with Runge growth despite polynomial density.

**Requires:** published thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, thm-rolle, lem-higher-order-rolle, and cor-mean-value-theorem.

**Sources:** Trefethen, Approximation Theory and Approximation Practice, author-hosted Ch. 2, printed pp. 14–22, and Ch. 5 barycentric formula, within the complete substantive read of Chs. 2–6, physical PDF pp. 14–55: https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf. The sample states uniqueness as known and omits the general remainder proof; see statistics/sources.json source_id trefethen-atap-2013-sample.

### NA-11 — Polynomial approximation and Chebyshev interpolation

**Pages:** polynomial-approximation-and-chebyshev-interpolation / polynomial-approximation-and-chebyshev-interpolation-examples.

**Scope:** Define the best degree-n uniform approximation error E_n(f) and the interpolation operator norm Λ_n=||I_n||_{C→C}. For Chebyshev-root or Chebyshev–Lobatto nodes, prove Λ_n=O(log n), then prove ||f−I_nf||∞≤(1+Λ_n)E_n(f). Use existing Weierstrass density only to show best polynomial errors tend to zero; do not infer that arbitrary-node interpolation converges. Barycentric evaluation is an algorithmic interface, not a stability theorem.

**Proof route:** Reduce the Chebyshev cardinal sum to the relevant trigonometric sum and establish the logarithmic estimate locally; then use I_np=p for p∈P_n and take the infimum. Record the node family, boundary convention, norm, and source-specific hypotheses. Equispaced divergence is a counterexample, not a conflict with Weierstrass.

**Examples:** Chebyshev nodes and logarithmic growth; a best approximant bound transferred to interpolation; Runge’s function on equispaced nodes.

**Requires:** NA-10; published def-chebyshev-polynomials-first-and-second-kind, cor-weierstrass-approximation-on-the-unit-interval, cor-weierstrass-approximation-on-a-closed-interval, and cor-runge-polynomial-approximation.

**Sources:** Trefethen, ATAP Chs. 2–6, read in full for the substantive sample, https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf; FNC polynomial interpolation https://fncbook.com/polyinterp/ and conditioning https://fncbook.com/conditioning/, complete extracted pages read. Neither source proves the general Lebesgue-constant theorem; the trigonometric-sum proof is a local obligation. Exact limits are in statistics/sources.json and direct/sources.json.

### NA-12 — Composite quadrature rules

**Pages:** composite-quadrature-rules / composite-quadrature-rules-examples.

**Scope:** Define uniform-panel midpoint, trapezoid, and composite Simpson algorithms. For f∈C²[a,b] and h=(b−a)/n, prove midpoint error ≤(b−a)h²||f''||∞/24 and trapezoid error ≤(b−a)h²||f''||∞/12. For even n and f∈C⁴[a,b], prove composite Simpson error ≤(b−a)h⁴||f⁽⁴⁾||∞/180 and exactness through cubic degree. Keep smoothness and panel-count hypotheses in every claim.

**Proof route:** Integrate the panelwise Taylor remainder for midpoint, the piecewise-linear interpolation error for trapezoid, and the fourth-order Peano/Taylor remainder for Simpson; explicitly show the cubic cancellation. Prove procedure definitions separately from error estimates.

**Examples:** convex f with midpoint/trapezoid bracketing; a quadratic exact for Simpson; a cubic demonstrating the full-panel exactness.

**Requires:** NA-10 and published thm-first-fundamental-theorem-of-calculus-for-l-one and thm-continuous-on-a-rectangle-is-riemann-integrable.

**Sources:** Owen, Monte Carlo Theory, Methods and Examples, Ch. 7, complete 36-page extracted chapter read, including notes/exercises: https://artowen.su.domains/mc/Ch-quadrature.pdf; FNC integration https://fncbook.com/integration/, complete extracted article page read. Owen develops midpoint/composite rules; the packet’s exact ranges and proof boundaries are in statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

### NA-13 — Gaussian quadrature

**Pages:** gaussian-quadrature / gaussian-quadrature-examples.

**Scope:** For positive dμ=w(x)dx on [a,b], finite moments through degree 2m for the remainder integral (degree 2m−1 suffices for rule exactness), and a positive-definite polynomial inner product through degree m, construct the monic orthogonal polynomial p_m. Prove it has m simple roots in (a,b); the m-node Gauss rule at those roots has positive weights and exactness through degree 2m−1. For f∈C^{2m}[a,b], prove the remainder f^{(2m)}(ξ)/(2m)! ∫p_m²dμ. Tensor products preserve coordinatewise exactness but cost exponentially in dimension.

**Proof route:** Use Gram–Schmidt; prove root count by sign changes; divide q=p_mr+s and use orthogonality for exactness; apply exactness to ℓ_i² for positive weights; use Hermite interpolation at double nodes and repeated Rolle for the remainder. Each intermediate theorem is an explicit local proof obligation.

**Examples:** two-node Gauss–Legendre exact through degree three; positive weights from ℓ_i²; a tensor-product node-count calculation.

**Requires:** NA-10 and published Linear Algebra page inner-product-spaces-and-orthogonality.

**Sources:** Owen, Ch. 7, complete extracted chapter read, https://artowen.su.domains/mc/Ch-quadrature.pdf. It states Gaussian exactness and error but points to outside proofs; no proof is imported from that chapter. See statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

### NA-14 — Adaptive quadrature and error indicators

**Pages:** adaptive-quadrature-and-error-indicators / adaptive-quadrature-and-error-indicators-examples.

**Scope:** Define a terminating adaptive Simpson procedure with a finite depth/panel cap, nested estimates, accept/reject rule, and explicit “cap reached” output. Define embedded-rule differences as indicators only. Do not report the requested tolerance as a certified true-error bound. A certificate theorem is optional and remains outside the promised scope until an a-posteriori remainder bound, stability propagation, regularity, and controlled-arithmetic premise are each supplied.

**Proof route:** Prove termination from the finite cap and correctness of returned arithmetic outputs, not accuracy from the indicator. Any later certificate must bound each accepted panel’s true defect and propagate defects with the integral/ODE stability operator, including roundoff. Preserve the source’s counterexample to estimator reliability.

**Examples:** adaptive Simpson whose actual error exceeds the requested tolerance; cancellation of the leading embedded-rule defect; cap-reached output on a difficult integrand.

**Requires:** NA-12.

**Sources:** FNC adaptive integration https://fncbook.com/adaptive/, complete page read, with explicit tolerance-failure example; FNC integration https://fncbook.com/integration/, complete page read. See statistics/sources.json source_id driscoll-braun-fnc-2017-selected-pages; no generic adaptive guarantee is present.

### NA-15 — Runge–Kutta methods and order

**Pages:** runge-kutta-methods-and-order / runge-kutta-methods-and-order-examples.

**Scope:** Define explicit Runge–Kutta tableaux and their one-step maps. Derive the method-specific order conditions for Euler, explicit midpoint, and the classical fourth-order method. Define the stability function R(z) by applying the method to y'=λy. Keep order, stability region, and stiffness separate. The generic local-defect and fixed-step global-error contracts remain P-NUM-ODE-01/02; this pair supplies the concrete tableau/order-condition interface, not duplicate generic error claims.

**Proof route:** Expand the exact flow and the three selected stage updates by multivariable Taylor, match the rooted-tree coefficients through each stated order, and identify the method-specific local order conditions. P-NUM-ODE-01 owns the generic defect/stability theorem that consumes these conditions; this pair states no separate fixed-interval error theorem. Prove the stability function by algebra on the scalar test equation. A method name or observed order plot does not prove the method-specific conditions.

**Examples:** Euler and explicit midpoint; classical RK4 tableau and local/global slopes; a nonsmooth field where nominal order fails.

**Requires:** independent planned P-NUM-ODE-01 and P-NUM-ODE-02 in research/plan-machine-learning-track.md; published def-first-order-ode-initial-value-problem-and-solution and thm-multivariable-taylor-formula-with-lagrange-remainder.

**Sources:** Hairer–Wanner, Ch. III §§III.2–III.5, PDF pp. 4–11 / printed pp. 60–67, independently reread in the recovery role: https://www.unige.ch/~hairer/poly/chap3.pdf. FNC source files euler.md and selected chapter-6 material are in the immutable author-source revision: https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516. The recovery reread was bounded; see ode/sources.json for exact ranges and prior-reader reports.

### NA-16 — Linear multistep methods and Dahlquist equivalence

**Pages:** linear-multistep-methods-and-dahlquist-equivalence / linear-multistep-methods-and-dahlquist-equivalence-examples.

**Scope:** Define a fixed-step k-step recurrence, generating polynomials ρ and σ, local truncation error from inserting the exact solution, consistency conditions ρ(1)=0 and ρ'(1)=σ(1), and order p. Define the root condition as roots in |ζ|≤1 with simple unit-modulus roots; repeated roots strictly inside are permitted. Prove equal-step convergence order p from consistency, root condition, O(h^p) starting values, a fixed solution tube, and a well-defined selected implicit branch. Prove the converse in the stated Dahlquist equivalence class.

**Proof route:** Complete the repeated-root proof; rewrite the recurrence as a companion system; prove uniformly bounded powers from the root condition; use variation of constants to propagate O(h^{p+1}) residuals over O(h^-1) steps. For necessity, use the consistency defect and unstable/parasitic homogeneous modes. Do not use one-step discrete Grönwall as a substitute for the root condition, and do not extend the equal-step proof to variable steps without new hypotheses.

**Examples:** zero-stable BDF2 with consistent starts; repeated interior root with bounded powers; repeated unit root with parasitic growth.

**Requires:** published def-first-order-ode-initial-value-problem-and-solution, thm-multivariable-taylor-formula-with-lagrange-remainder, and abstract-algebra/thm-fundamental-theorem-of-algebra-minimum-modulus-proof.

**Sources:** Hairer–Wanner Ch. III §§III.6–III.8, PDF pp. 15–19 / printed pp. 71–75, recovery reread: https://www.unige.ch/~hairer/poly/chap3.pdf; FNC multistep.md and zerostability.md at commit a280ed1a013393ee0a184dcbaa866522f35a3516: https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516. FNC’s printed proof omits repeated roots and states equivalence without proving it; Hairer’s equal-step proof is not a variable-step theorem. Exact recovered read records are in ode/sources.json.

### NA-17 — Stability regions and stiff equations

**Pages:** stability-regions-and-stiff-equations / stability-regions-and-stiff-equations-examples.

**Scope:** Define R(z) and the one-step absolute-stability region for y'=λy; define multistep stability by roots of ρ(ζ)−zσ(ζ). Define A-stability as inclusion of the closed left half-plane and L-stability, for a rational one-step function, as A-stability plus decay R(z)→0 at infinity in that half-plane. Prove backward Euler is A- and L-stable, while trapezoidal is A-stable but not L-stable. Stability is a scalar test-equation property, not an accuracy theorem or universal definition of stiffness.

**Proof route:** Compute the stability functions and their regions; for multistep methods apply the root condition at each z and keep unit-root simplicity. Prove the limiting condition separately from half-plane inclusion. Treat stiff behavior as an application-dependent reason for implicit stepping, not as an unproved scalar classification.

**Examples:** explicit Euler’s bounded disk; backward Euler’s whole left half-plane and zero limit; trapezoidal rule’s unit-modulus limit for large negative z.

**Requires:** NA-15 and NA-16; the multistep root-condition theorem remains the controlling prerequisite for multistep regions.

**Sources:** Hairer–Wanner Ch. III §III.9, PDF pp. 20–23 / printed pp. 76–79, recovery reread: https://www.unige.ch/~hairer/poly/chap3.pdf. A/L-stability is derived locally; L-stability was not named in that read section. See ode/sources.json for the independent range and proof limit.

### NA-18 — Adaptive ODE solvers and error estimation

**Pages:** adaptive-ode-solvers-and-error-estimation / adaptive-ode-solvers-and-error-estimation-examples.

**Scope:** Define an embedded Runge–Kutta pair, local difference estimator, step acceptance/rejection, safety factor, norm scaling, and minimum/maximum step rules as an algorithm with finite stopping safeguards. State the asymptotic estimate E(h)≈Ch^{p+1} and controller exponent only as a model used to choose a step. Do not claim a global adaptive error certificate or infer stiffness from an estimator.

**Proof route:** Specify every branch and demonstrate algorithm termination under a finite step/depth budget. The estimator’s exponent follows only when its leading defect coefficient is present and the asymptotic regime holds. A global adaptive theorem requires estimator reliability, mesh-ratio regularity, and defect propagation; none is supplied here.

**Examples:** embedded pair with a vanishing leading estimator; a stiff problem rejected repeatedly; requested tolerance below roundoff.

**Requires:** NA-15 and independent planned P-NUM-ODE-01 for one-step local-error notation. P-NUM-ODE-02 covers a fixed mesh only and is not a supplier of adaptive global accuracy.

**Sources:** Hairer–Wanner Ch. III §§III.2–III.5, PDF pp. 4–11 / printed pp. 60–67, recovery reread https://www.unige.ch/~hairer/poly/chap3.pdf; FNC adaptive-rk.md at the source revision in NA-15. Both source records describe estimators/controllers, not certified global bounds; see ode/sources.json.

### NA-19 — Linear scheme stability and Lax equivalence

**Pages:** linear-scheme-stability-and-lax-equivalence / linear-scheme-stability-and-lax-equivalence-examples.

**Scope:** Define consistency, convergence, and finite-time stability for a well-posed linear IVP on one common Banach space, with bounded step operators S_k and a mesh function h(k). State Lax–Richtmyer only in that same-norm setting: for a consistent approximation to the declared well-posed problem, convergence iff uniform finite-time stability. State explicitly that Trefethen’s read chapter marks the proof unwritten; this row requires a complete local proof and a concrete mesh-to-common-space interface.

**Proof route:** For stability→convergence, write the Duhamel error sum on a smooth dense class, bound propagators uniformly, and then extend by density and continuous dependence. For convergence→stability, show pointwise boundedness of the operator family on each compact time interval and apply the published Banach–Steinhaus theorem. For mesh-dependent spaces, define reconstruction/projection and prove norm comparisons; do not silently apply the common-space theorem. A spectral-radius or CFL check alone is not the stability premise.

**Examples:** stable consistent heat step; a consistent but unstable explicit step; a mesh-dependent norm comparison failure.

**Requires:** published thm-uniform-boundedness-principle.

**Sources:** Trefethen, Finite Difference and Spectral Methods, Ch. 4, complete 40-page file read: https://people.maths.ox.ac.uk/trefethen/4all.pdf. It gives the exact Theorem 4.1 contract, but labels essential rigor and the proof “Not yet written”; the local proof route above is mandatory. See fd-fv/sources.json source_id trefethen-fdsm-chapter-4.

### NA-20 — Linear numerical boundary-value problems

**Pages:** numerical-boundary-value-problems / numerical-boundary-value-problems-examples.

**Scope:** Fix the one-dimensional Dirichlet problem −u''=g on (0,1), u(0)=u(1)=0, a uniform grid, centered second difference, and a declared maximum or energy norm. Under u∈C⁴[0,1], prove an O(h²) global error. Include both interior and boundary closure in the residual. A broader collocation theorem must separately state a mesh-uniform inverse or maximum-principle estimate.

**Proof route:** Taylor-expand with a uniform fourth-derivative bound; derive e_h=A_h^-1τ_h; prove ||A_h^-1|| uniformly bounded using the discrete maximum principle (or the exact discrete Green function); then transfer residual order to solution error. An interior stencil consistency calculation alone is insufficient.

**Examples:** exact quadratic solution; boundary closure that drops the convergence order; a matrix norm whose inverse bound is uniform in h.

**Requires:** NA-19.

**Sources:** FNC Ch. 10 files linear.md and boundary-condition portions at the read author-source revision https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516; selected MIT OCW lectures 5–6, each full PDF read, course page https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/. FNC Ch. 10 states e_h=A_h^-1τ_h but omits the stability proof; exact source limits are in ode/sources.json and fd-fv/sources.json.

### NA-21 — Nonlinear boundary-value solvers

**Pages:** nonlinear-boundary-value-solvers / nonlinear-boundary-value-solvers-examples.

**Scope:** Define shooting as an IVP-dependent residual root problem and nonlinear collocation as a finite-dimensional residual system. State local convergence only for a specified Newton/quasi-Newton algorithm with a locally invertible discrete Jacobian, consistent initial guess, and explicit basin assumptions. Separate continuous BVP conditioning, IVP integration error, mesh discretization error, and nonlinear algebraic solve error. Do not assert general mesh convergence or global solver convergence.

**Proof route:** Differentiate the shooting residual through the IVP sensitivity map; propagate IVP numerical error separately from the root residual; for collocation, show consistency and a uniform inverse bound on the chosen discrete branch before claiming an error rate. Reuse NA-09 local Newton only when its derivative hypotheses hold. FNC implementations/examples are not a convergence proof.

**Examples:** unstable shooting for a decaying mode; a collocation residual with two solution branches; Newton failure from an initial guess outside the local basin.

**Requires:** NA-09, NA-19, thm-existence-and-uniqueness-of-a-maximal-ode-solution, and thm-continuous-dependence-of-odes-on-initial-data-and-parameters.

**Sources:** FNC Ch. 10 shooting.md and nonlinear.md, selected files read at commit a280ed1a013393ee0a184dcbaa866522f35a3516: https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516. The source provides residual definitions and examples, not general solver or mesh-convergence results; see ode/sources.json source_id driscoll-braun-fundamentals-of-numerical-computation-chapters-4-6-10.

### NA-22 — Geometric numerical integration

**Pages:** geometric-numerical-integration / geometric-numerical-integration-examples.

**Scope:** Define symplectic Euler and Störmer–Verlet; prove the former is symplectic and first order, and the symmetric composition Störmer–Verlet is symplectic and second order. State the Runge–Kutta symplectic coefficient identity b_i a_ij+b_j a_ji=b_i b_j and prove preservation of quadratic first integrals under its hypotheses. State a finite-order near-energy theorem only for smooth H, a symplectic method with a globally defined truncated modified Hamiltonian on U, and an orbit in a compact K⊂U; do not present a formal divergent series as a convergent Hamiltonian.

**Proof route:** Reuse the published Hamiltonian flow’s symplecticity and conservation statements; verify discrete symplecticity by Jacobian pullback and derive order by Taylor/symmetry. For backward error, truncate at fixed N, bound the modified-energy defect per step and sum only over the stated time horizon; carry the compact-domain and globality assumptions.

**Examples:** symplectic Euler on a harmonic oscillator; Störmer–Verlet’s bounded oscillatory energy error; an A-stable method that is not symplectic.

**Requires:** published def-symplectic-form-and-symplectic-manifold, def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding, def-hamiltonian-vector-field-and-hamiltonian-function, prop-a-hamiltonian-is-conserved-along-its-own-flow, and prop-time-dependent-hamiltonian-evolution-is-symplectic; NA-15 for Runge–Kutta order context.

**Sources:** Hairer, Geometric Numerical Integration, lectures 1–3: https://www.unige.ch/~hairer/poly_geoint/week1.pdf (lecture 1, PDF pp. 6–9), week2.pdf (lecture 2, pp. 2–6), week3.pdf (lecture 3, pp. 1–2, 6–7); these exact ranges were read. The modified-equation series may diverge and the analytic/exponential refinement was not read; see ode/sources.json source_id hairer-geometric-numerical-integration-lectures-1-to-3-2010.



### NA-23 — Elliptic finite-difference methods

**Pages:** elliptic-finite-difference-methods / elliptic-finite-difference-methods-examples.

**Scope:** On a rectangular uniform grid, define the five-point Dirichlet Laplacian and a divergence-form variable-coefficient flux stencil. Prove second-order consistency for a C⁴ solution with an explicit derivative bound; for variable coefficients, require matching coefficient and face-value regularity sufficient for the flux-stencil Taylor remainder and state those bounds in the theorem. Prove a mesh-uniform inverse bound in either the discrete energy norm (summation by parts plus discrete Poincaré) or maximum norm (discrete maximum principle). Derive the error estimate from the complete interior and boundary residual. A formally second-order interior stencil alone is not a convergence theorem.

**Proof route:** State the grid inner product and boundary closure; prove the discrete summation-by-parts identity including boundary terms. Establish coercivity/Poincaré or the sign pattern needed for the maximum principle, then bound A_h^-1 uniformly and apply e_h=A_h^-1τ_h. For nonsmooth weak solutions, replace pointwise Taylor estimates with a separately justified weak approximation theorem.

**Examples:** 5-point Laplacian for a smooth Dirichlet solution; divergence-form variable coefficient versus independently expanded stencil; Neumann closure with first-order boundary residual.

**Requires:** NA-19; published PDE pages lax-milgram-and-weak-elliptic-solutions and sobolev-poincare-and-morrey-inequalities.

**Sources:** Süli, Numerical Solution of PDEs, complete §§1–6.7, PDF pp. 1–110: https://people.maths.ox.ac.uk/suli/nspdes.pdf. MIT OCW lectures 5–6, complete PDFs read, https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/. The latter develops model stencils, not a universal abstract theorem; ranges and proof limits are in fd-fv/sources.json source_ids suli-oxford-finite-difference-notes-2025 and mit-18-336-seibold-selected-lecture-notes.

### NA-24 — Parabolic finite-difference methods

**Pages:** parabolic-finite-difference-methods / parabolic-finite-difference-methods-examples.

**Scope:** Define forward-time centered-space heat stepping, backward Euler, and the θ-method with the initial and boundary rows stated. For the 1D standard heat stencil, prove the explicit condition μ=κΔt/h²≤1/2 for the stated Fourier/max-principle stability result; in d dimensions state ΔtΣ_i κ_i/h_i²≤1/2. Prove backward Euler and θ≥1/2 unconditional L² stability under the source’s setup. Keep L² stability distinct from a discrete maximum principle, whose θ-scheme restriction can be stricter.

**Proof route:** Derive the amplification symbol for periodic/infinite uniform grids or perform a discrete energy estimate for the declared boundary setup. Show that the norm and boundary rows match the consistency estimate. Use the common error identity to propagate the truncation residual; never infer finite-boundary or variable-coefficient stability from a modewise calculation alone.

**Examples:** forward Euler at and above μ=1/2; backward Euler damping high modes; Crank–Nicolson stability without comparable high-frequency damping.

**Requires:** NA-19 and NA-23; published PDE heat-equation-maximum-principles-duhamel-and-smoothing for the continuous model and boundary context.

**Sources:** Süli, complete note §§4–5, PDF pp. 54–75, within https://people.maths.ox.ac.uk/suli/nspdes.pdf; MIT OCW lecture 14, complete PDF pp. 1–3, course index https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/. Lecture 14 is a short Fourier-analysis note, not a general boundary stability theorem; see fd-fv/sources.json.

### NA-25 — Hyperbolic finite-difference methods

**Pages:** hyperbolic-finite-difference-methods / hyperbolic-finite-difference-methods-examples.

**Scope:** Define upwind, centered, Lax–Friedrichs and Lax–Wendroff schemes for the one-way advection equation and one centered explicit wave scheme, including boundary and initial rows. For the wave scheme prove a coercive energy estimate for 0<cΔt/h<1 under the declared grid energy. At cΔt/h=1 the standard modified energy may be semidefinite, so handle the Nyquist mode/repeated-root endpoint separately and claim uniform error only in a norm controlled by the stated initial and boundary premises. For advection, derive scheme-specific Fourier bounds only for periodic/infinite uniform grids; prescribe boundary data at inflow, and state that a CFL domain-of-dependence condition is necessary but not universally sufficient for stability.

**Proof route:** Prove discrete summation by parts with boundary terms, positivity of the discrete wave energy under the CFL restriction, and the scheme’s actual amplification-factor bound in the periodic case. For finite boundaries or nonnormal amplification matrices, require a separate power/energy estimate. Keep smooth-solution truncation from implying convergence at discontinuities.

**Examples:** upwind versus downwind advection; centered advection instability despite consistency; wave energy becoming indefinite beyond its CFL threshold.

**Requires:** NA-19 and NA-24 for shared stability/error definitions; published PDE wave-energy-finite-propagation-and-huygens and heat/advection model suppliers.

**Sources:** Süli, complete §6, PDF pp. 76–110, https://people.maths.ox.ac.uk/suli/nspdes.pdf; MIT OCW lectures 15 and 18, complete PDFs, course index https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/. The source distinguishes periodic Fourier checks from boundary energy proofs; exact lecture and read ranges are in fd-fv/sources.json.

### NA-26 — Conservative finite-volume weak limits

**Pages:** conservative-finite-volume-weak-limits / conservative-finite-volume-weak-limits-examples.

**Scope:** Define cell averages and a conservative consistent numerical-flux update for u_t+f(u)_x=0. Prove a Lax–Wendroff-type implication in the deliberately strong form: if reconstructed numerical states converge strongly in L¹_loc, are uniformly bounded on compact sets, and the flux is continuous and consistent, then summation by parts passes the conservative scheme to the weak conservation law. This yields a weak solution only; it does not select an entropy solution. State the exact reconstruction and time interpolation.

**Proof route:** Multiply each cell update by cell averages of a smooth compactly supported test function, sum over cells and time levels, telescope shared interface fluxes, and pass to the limit using strong L¹_loc convergence and continuity of f/F. Boundary/tail terms require their own control. Compactness is a premise here, not a consequence of conservation alone.

**Examples:** conservative Godunov flux passing a shock speed; a bounded sequence without convergence; a weak limit that violates entropy admissibility.

**Requires:** published scalar-conservation-laws-and-entropy-solutions for the weak formulation.

**Sources:** De Sterck–Ullrich, Ch. 3, PDF pp. 81–106, complete chapter read: https://climate.ucdavis.edu/AM452.pdf; MIT OCW lecture 19, complete PDF pp. 1–6, https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/. The Waterloo statement omits compactness hypotheses and proof; the short MIT note is illustrative only. This pair’s local strong-convergence proof is required; see fd-fv/sources.json.

### NA-27 — Monotone finite-volume entropy convergence

**Pages:** monotone-finite-volume-entropy-convergence / monotone-finite-volume-entropy-convergence-examples.

**Scope:** For scalar f∈C¹, u₀∈BV(R), and a consistent conservative locally Lipschitz monotone two-point flux satisfying the declared CFL bound and Δt/Δx≥c>0 along the family, prove the first-order scheme converges strongly in L¹_loc to the Kruzhkov entropy solution. Include an explicit numerical entropy flux and discrete entropy inequality. Global L¹ convergence requires uniform tail control. Do not extend the order argument to systems or the no-BV entropy-process route.

**Proof route:** Prove order preservation/range bounds and TVD; establish temporal translation estimates; supply the missing local Helly/BV compactness lemma by a rational-point diagonal argument (uniform local variation and bounds give L¹_loc subsequences). Pass the conservative update and discrete entropy inequality to the limit; use the published Kruzhkov uniqueness/contraction theorem to identify all subsequential limits. Carry the source theorem’s mesh-to-time ratio premise and the chosen piecewise-linear time interpolant.

**Examples:** Godunov and Lax–Friedrichs monotone flux under CFL; shock captured with correct Rankine–Hugoniot speed; a conservative but nonmonotone weak limit that is not entropy admissible.

**Requires:** NA-26; published PDE scalar-conservation-laws-and-entropy-solutions, especially thm-existence-of-bounded-kruzhkov-entropy-solutions and thm-kruzhkov-local-l1-contraction. Add a local compactness lemma; current local 1D BV items do not supply Helly selection.

**Sources:** Droniou, full 39-page note §§1–2.6 read: https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf; Mishra–Fjordholm–Abgrall, ETH notes, nonblank PDF pp. 1–105, 107–121, 123, 125 read: https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf. ETH Theorem 4.19 has Δt/Δx≥c and cites Helly; Droniou’s no-BV proof is a sketch. Exact limits are in fd-fv/sources.json source_ids droniou-beginner-scalar-fv-2008 and mishra-fjordholm-abgrall-eth-conservation-law-notes.

### NA-28 — Finite-element meshes and interpolation

**Pages:** finite-element-meshes-and-interpolation / finite-element-meshes-and-interpolation-examples.

**Scope:** Define matching affine mesh families, shape regularity, reference finite elements and unisolvent degrees of freedom, conforming and broken polynomial spaces. Prove local interpolation estimates |v−I_Kv|_{W^{m,p}(K)}≤Ch_K^{r−m}|v|_{W^{r,p}(K)} under polynomial reproduction, bounded reference functional and stated Sobolev regularity. Prove the chosen inverse and discrete-trace inequalities using finite-dimensional scaling and shape regularity. State point-evaluation Sobolev embedding thresholds and separate Clément/Scott–Zhang-type averaged operators when lower regularity is needed.

**Proof route:** Map each cell to a reference element; prove reference approximation by polynomial reproduction and Deny–Lions/Bramble–Hilbert; track Jacobian and shape-regularity constants under scaling. Derive inverse and trace estimates from finite-dimensional norm equivalence on the reference cell. State conformity and boundary trace assumptions before using V_h⊂V.

**Examples:** affine triangle and quadrilateral maps; a shape-regular versus sliver family; Lagrange point evaluation outside its Sobolev embedding range.

**Requires:** NA-10 as polynomial interpolation context; published Sobolev, zero-boundary closure, Poincaré, and trace suppliers: def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-poincare-inequality-for-w-one-p-zero, thm-sharp-trace-theorem-for-w-one-p.

**Sources:** Guermond, MATH 661 Fall 2025, Ch. 8 meshes (12 pages), Ch. 11 local interpolation (14 pages), Ch. 12 inverse/functional inequalities (10 pages), all full chapter PDFs read: https://people.tamu.edu/~guermond/M661_FALL_2025/; Guermond Fall 2019 Chs. 32–33, complete 17- and 20-page PDFs read: https://people.tamu.edu/~guermond/M661_FALL_2019/. Exact cache/read records are in fem-spectral/sources.json, source_ids guermond-math661-fall2025-fem-spectral-stokes and guermond-math661-fall2019-elliptic-fem.

### NA-29 — Céa and Aubin–Nitsche error estimates

**Pages:** ceas-lemma-and-aubin-nitsche-error-estimates / ceas-lemma-and-aubin-nitsche-error-estimates-examples.

**Scope:** For a bounded coercive variational form and a conforming Galerkin subspace, prove Galerkin orthogonality and Céa quasi-optimality ||u−u_h||_V≤(M/α)inf_{v_h}||u−v_h||_V. In a symmetric energy inner product state best approximation. Prove an L² Aubin–Nitsche estimate with explicit adjoint regularity index s∈(0,1]; the h^{r+1} rate requires full H² adjoint regularity and is not asserted on arbitrary Lipschitz domains.

**Proof route:** Subtract continuous/discrete equations for orthogonality; test error against u_h−v_h and use boundedness/coercivity. For L², solve the adjoint equation, use orthogonality and interpolation of the adjoint, and carry both primal and adjoint smoothness. Cite the local H² supplier only with its C²-domain and coefficient conditions.

**Examples:** symmetric Poisson best approximation; nonsymmetric coercive form with M/α factor; reentrant corner lowering the dual rate.

**Requires:** NA-28; published thm-lax-milgram, thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem, thm-global-h-two-dirichlet-regularity, and its uniqueness-dependent corollary with their exact domain hypotheses.

**Sources:** Guermond Fall 2025 Chs. 24–26, weak formulations, well-posedness, and basic error analysis, complete bounded PDFs read: https://people.tamu.edu/~guermond/M661_FALL_2025/; Guermond Fall 2019 Ch. 31 (21 pages), https://people.tamu.edu/~guermond/M661_FALL_2019/. The source’s rates depend on shape regularity and adjoint regularity; see fem-spectral/sources.json.

### NA-30 — Variational crimes and Strang lemmas

**Pages:** variational-crimes-and-strang-lemmas / variational-crimes-and-strang-lemmas-examples.

**Scope:** Define consistency defects when trial/test spaces are nonconforming or the discrete form uses quadrature/geometry approximation. Prove first and second Strang estimates under a declared comparison norm, uniform discrete stability, bounded consistency defect and approximability. For quadrature, state degree, exactness, coefficient smoothness, mesh threshold and polynomial degree; do not assert exact Galerkin orthogonality after replacing the form.

**Proof route:** Add/subtract a comparison function and the discrete bilinear form; apply stability, boundedness and approximation. Bound quadrature and geometry defects term-by-term using the specified cell scaling. Include data oscillation where unresolved coefficients/source terms enter.

**Examples:** exact integration versus underintegrated stiffness; quadrature error for a polynomial exactness degree; a nonconforming consistency term that prevents direct use of Céa.

**Requires:** NA-28 and NA-29; published Lax–Milgram/weak elliptic suppliers and local polynomial/quadrature definitions from NA-12/13 only where the chosen quadrature is explicitly used.

**Sources:** Guermond Fall 2025 Ch. 27, complete 14-page PDF read, “Error analysis with variational crimes”: https://people.tamu.edu/~guermond/M661_FALL_2025/. The cited chapter states its mesh-size and regularity thresholds; complete ranges and proof limitations are in fem-spectral/sources.json.

### NA-31 — Crouzeix–Raviart finite elements

**Pages:** crouzeix-raviart-finite-elements / crouzeix-raviart-finite-elements-examples.

**Scope:** Define the P₁ Crouzeix–Raviart broken-affine space by face-average continuity and zero boundary face means; prove its broken-gradient seminorm is a norm by a discrete Poincaré estimate. For Poisson, prove an energy error estimate via local interpolation, jump control, consistency and the Strang estimate. State the source’s u∈H^{1+r}, r>1/2 premise for normal-gradient traces and an adjoint smoothing index s>1/2 for its L² estimate.

**Proof route:** Construct the face-average interpolant, bound jumps by local Neumann liftings and trace estimates, then prove consistency and use NA-30. Apply adjoint duality only with the declared smoothing exponent.

**Examples:** one nonconforming face-average degree of freedom; broken-gradient norm; a solution below the trace regularity threshold.

**Requires:** NA-28, NA-29 and NA-30; published Sobolev trace/Poincaré suppliers under their exact domain assumptions.

**Sources:** Guermond Fall 2025 Ch. 36, complete 16-page PDF read: https://people.tamu.edu/~guermond/M661_FALL_2025/. The source’s H¹+r and dual-smoothing restrictions are carried into the claim; see fem-spectral/sources.json.

### NA-32 — Nitsche methods for weak boundary enforcement

**Pages:** nitsche-methods-for-weak-boundary-enforcement / nitsche-methods-for-weak-boundary-enforcement-examples.

**Scope:** Define symmetric and nonsymmetric Nitsche forms for Dirichlet data in an H¹-conforming space without imposing the essential trace strongly. Prove coercivity only when the penalty γ₀/h_F exceeds the inverse-trace threshold, then derive the energy error estimate. For symmetric Nitsche, prove the adjoint-consistent L² estimate under the source’s dual regularity; do not claim the same rate for a nonsymmetric form without its additional term.

**Proof route:** Establish element inverse/discrete-trace bounds, absorb boundary consistency terms with the selected penalty, and verify consistency by integration by parts. Use NA-30’s perturbation estimate, then duality for L² and track the half-order boundary term.

**Examples:** penalty below/above coercivity threshold; exact boundary data versus weak imposition; symmetric versus nonsymmetric L² behavior.

**Requires:** NA-28, NA-29 and NA-30; published trace, Poincaré, and elliptic regularity suppliers only under their stated hypotheses.

**Sources:** Guermond Fall 2025 Ch. 37, complete 8-page PDF read, “Nitsche boundary penalty method”: https://people.tamu.edu/~guermond/M661_FALL_2025/. Exact penalty assumptions and ranges are in fem-spectral/sources.json.

### NA-33 — Symmetric interior-penalty discontinuous Galerkin

**Pages:** discontinuous-galerkin-methods / discontinuous-galerkin-methods-examples.

**Scope:** Define the broken polynomial space, jumps/averages, symmetric interior penalty flux and face penalty γ₀/h_F. Prove coercivity for a sufficiently large penalty by elementwise integration by parts plus inverse trace bounds; prove consistency and energy quasi-optimality through Strang. Derive an L² estimate only with adjoint consistency and dual regularity. Treat equilibrated H(div) flux recovery as a separate interface, not an automatic consequence.

**Proof route:** Sum local Green identities; control face terms by discrete trace/inverse inequalities; choose γ₀ above the mesh-degree-dependent threshold; establish a bounded consistency residual and apply NA-30. For L², solve the adjoint problem and carry its regularity exponent.

**Examples:** one-dimensional interior jump penalty; coercivity loss for a too-small penalty; broken polynomial with no global continuity.

**Requires:** NA-28, NA-29 and NA-30; published Sobolev/trace/elliptic suppliers and locally proved inverse estimates.

**Sources:** Guermond Fall 2025 Ch. 38, complete 14-page PDF read, “Discontinuous Galerkin”: https://people.tamu.edu/~guermond/M661_FALL_2025/. No universal penalty constant is implied; see fem-spectral/sources.json.

### NA-34 — Mixed finite elements and Stokes stability

**Pages:** mixed-finite-elements-and-stokes-stability / mixed-finite-elements-and-stokes-stability-examples.

**Scope:** State the Babuška–Brezzi kernel-coercivity and constraint inf-sup conditions, prove the mixed Galerkin estimate, and define a Fortin operator with a uniform V-bound and constraint preservation. For Stokes on a declared bounded domain, use Korn and a continuous divergence right inverse; prove one concrete stable pair (mini or Taylor–Hood) with its exact dimension, mesh and polynomial hypotheses. Carry β_h into every pressure estimate and distinguish weakly from exactly divergence-free velocity spaces. Use periodic Navier–Stokes computation only as a numerical example; contextualize the existing draft item op-periodic-three-dimensional-navier-stokes-global-regularity without making it a supplier.

**Proof route:** Prove the abstract mixed theorem, Fortin transfer of inf-sup, then the chosen element-specific Fortin/macroelement construction. Apply the mixed estimate with explicit approximation rates. Stokes solvability, partial regularity, simulation, and CMI alternatives A–D remain logically separate.

**Examples:** mini-element bubble moment; Taylor–Hood pressure mode; checkerboard pressure mode in an unstable pair; discrete divergence-free versus weakly divergence-free velocity.

**Requires:** NA-28 and published Sobolev trace/Poincaré suppliers. Reuse published local thm-lax-milgram only for coercive subproblems; no current local mixed Babuška–Brezzi or stable-pair theorem is identified.

**Sources:** Guermond Fall 2025 Ch. 49 §49.4.2, PDF pp. 12–15 only, plus Ch. 50 pp. 1–16 and Chs. 53–55, complete stated ranges read: https://people.tamu.edu/~guermond/M661_FALL_2025/. CMI Fefferman statement PDF pp. 1–6 https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf, status https://www.claymath.org/millennium/Navier-Stokes-Equation/, announcement https://www.claymath.org/news/navier-stokes-announcement/: all source pages inspected, with status reviewed 2026-10-12. The official page says Active; the 2026-09-11 article reports an apparent settlement but gives no proof artifact, submitter, or A–D alternative. It is pending evaluation, not a library theorem. See fem-spectral/sources.json.

### NA-35 — Adaptive finite-element methods

**Pages:** adaptive-finite-element-methods / adaptive-finite-element-methods-examples.

**Scope:** Define element residuals, normal-flux jumps, data oscillation, Dörfler bulk marking and a conforming refinement algorithm with explicit closure and element-size reduction properties. For the symmetric model problem prove residual reliability, local efficiency up to oscillation, and linear error/oscillation contraction under the source’s assumptions. State optimal complexity only for P₁ Laplace, piecewise-constant data and the declared approximation class; the general coefficient-dependent complexity theorem is not proved in the read source.

**Proof route:** Use Galerkin orthogonality, local interpolation and trace bounds for reliability; bubble functions for local efficiency; prove estimator reduction, quasi-orthogonality and mesh closure before contraction. For nonsymmetric convection carry the source’s sufficiently fine initial-mesh requirement. Separate convergence from optimal work complexity.

**Examples:** Dörfler marking and marked-element refinement; coefficient jump adding oscillation; coarse mesh where nonsymmetric quasi-orthogonality is unavailable.

**Requires:** NA-28 through NA-30; published weak elliptic/Lax–Milgram suppliers and locally proved interpolation/trace estimates.

**Sources:** Nochetto, Adaptive FEM lectures 1–4, complete lectures and PDF/printed pp. 1–47 read: https://www.math.umd.edu/~rhn/lectures/. Lecture 4’s more general coefficient-dependent complexity proof is deferred elsewhere and is not imported; ranges are in fem-spectral/sources.json source_id nochetto-adaptive-fem-lecture-notes-1-to-4.

### NA-36 — Parabolic finite-element methods

**Pages:** parabolic-finite-element-methods / parabolic-finite-element-methods-examples.

**Scope:** Define the evolution triple V↪H≃H*↪V* and parabolic energy space W(0,T;V). Under measurable uniformly bounded/coercive a(t;·,·), state the trace u∈C([0,T];H), prove variational well-posedness and energy stability, then define spatial Galerkin/Ritz projection and prove its semidiscrete error equation. Fully discrete backward Euler, Crank–Nicolson, cG or dG rates are separate results with time regularity, initial projection and jump assumptions stated.

**Proof route:** Prove the time integration-by-parts/trace lemma and apply BNB to the space-time form; test by u for energy stability. Use the Ritz commuting identity to separate approximation and discrete error, then energy estimates; use a backward adjoint only for L² smoothing estimates. Do not use analytic-semigroup existence as a finite-element error theorem.

**Examples:** heat equation with initial projection error; semidiscrete Ritz error identity; time regularity loss that lowers Crank–Nicolson order.

**Requires:** NA-28 and NA-29; published heat semigroup suppliers are continuous context only. New evolution-triple trace and variational well-posedness lemmas are required.

**Sources:** Clason, Introduction to FEM, Chs. 11–12, printed pp. 96–112 / PDF pp. 100–115, complete: https://arxiv.org/abs/1709.08618v2; Long Chen, full 12-page parabolic FEM note: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf. Chen cites rather than proves continuous well-posedness; both read records and limitations are in fem-spectral/sources.json.

### NA-37 — Finite-element eigenvalue approximation

**Pages:** finite-element-eigenvalue-approximation / finite-element-eigenvalue-approximation-examples.

**Scope:** For a compact self-adjoint solution operator and conforming symmetric Galerkin spaces, prove the fixed-index min–max upper bound λ_{h,m}≥λ_m and bound eigenvalue error by the squared best energy approximation on the first m-dimensional eigenspace. For multiple eigenvalues compare invariant subspaces/gaps rather than arbitrary eigenvectors. A nonsymmetric/nonconforming Babuška–Osborn extension needs operator-norm convergence, uniform discrete stability, primal/adjoint approximation and generalized-eigenspace multiplicity hypotheses.

**Proof route:** Use the published continuous compact-resolvent spectral theorem and min–max. Apply the Galerkin min–max principle to the discrete form, then bound Rayleigh quotients by best approximation; derive eigenspace rates separately. For the nonsymmetric extension prove the compact-operator perturbation result before citing it.

**Examples:** conforming eigenvalue upper bound for Dirichlet Laplacian; repeated eigenvalue with converging eigenspace but unstable eigenvector choice; a nonconforming eigenvalue below the exact one.

**Requires:** NA-28 and NA-29; published thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-courant-fischer-minimax-for-elliptic-eigenvalues, and thm-spectral-theorem-for-compact-self-adjoint-operators.

**Sources:** Guermond Fall 2025 Chs. 46–48, complete stated PDFs, https://people.tamu.edu/~guermond/M661_FALL_2025/. The local source gives full symmetric conforming theory and additional nonnormal claims with stronger operator hypotheses; exact reviewed ranges are in fem-spectral/sources.json.

### NA-38 — Spectral collocation and Galerkin methods

**Pages:** spectral-collocation-and-galerkin-methods / spectral-collocation-and-galerkin-methods-examples.

**Scope:** Define Fourier and Chebyshev collocation differentiation matrices and one boundary-eliminated BVP algorithm; define compact orthogonal-polynomial Galerkin bases and weighted projection/interpolation errors. State algebraic spectral rates only under the matching weighted Sobolev regularity and exponential rates only for analytic data. Periodic Fourier methods require periodicity; endpoint clustering and O(N⁴) second-derivative spectral-radius growth are conditioning/stability facts for the cited setup, not general PDE convergence. Do not claim the source’s unavailable second-order pressure-splitting proof.

**Proof route:** Derive differentiation matrices from basis differentiation and interpolation; prove weighted approximation bounds from the named polynomial projection theorem; use a scheme-specific stability estimate for any BVP/PDE convergence claim. Separate aliasing/dealiasing and nonlinear products. No rigorous argument may infer 3D Navier–Stokes regularity from numerical behavior.

**Examples:** periodic Fourier derivative of a trigonometric polynomial; Chebyshev endpoint clustering; analytic versus nonsmooth coefficient decay; aliasing of a quadratic product.

**Requires:** NA-10, NA-11, NA-12, NA-13 and published def-chebyshev-polynomials-first-and-second-kind.

**Sources:** Shen–Tang, Ch. 2 collocation, printed pp. 68–104 / PDF pp. 74–110; Ch. 3 spectral Galerkin, pp. 105–142 / PDF pp. 111–148; §1.8, pp. 61–67 / PDF pp. 67–73; §7.3–7.4, pp. 276–288 / PDF pp. 282–294, each selected range read: https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf. The source says a rigorous proof for one pressure-splitting second-order estimate was unavailable at publication; this is a source-specific proof gap, not a current open problem. Read limits are in fem-spectral/sources.json.

### NA-39 — Monte Carlo integration and sampling error

**Pages:** monte-carlo-integration-and-sampling-error / monte-carlo-integration-and-sampling-error-examples.

**Scope:** For iid Y_i=f(X_i) with finite second moment, prove the sample mean is unbiased with variance σ²/n and RMSE σ/√n; prove the sample-variance identity under its stated n≥2 assumptions. Reuse the published iid CLT only for asymptotic distributional calibration with 0<σ²<∞. State clearly that Monte Carlo variance is not deterministic quadrature error and does not absorb model, solver, or data-sampling bias.

**Proof route:** Expand the centered sample sum and use independence to eliminate cross-covariances. Derive the variance and RMSE identity; cite the published Lindeberg–Lévy theorem for the CLT. Keep confidence interval calibration and inferential coverage in the statistical category.

**Examples:** unbiased sample mean with finite variance; infinite-variance outcome; estimator with discretization bias despite decreasing Monte Carlo standard error.

**Requires:** published probability pages probability-spaces-random-variables-and-expectation, independence-borel-cantelli-and-zero-one-laws, and central-limit-theorems; reuse def-independent-random-elements, thm-independent-random-elements-have-product-joint-law, def-moments-variance-and-covariance, and thm-lindeberg-levy-iid-central-limit-theorem.

**Sources:** Owen, Monte Carlo Theory, Methods and Examples, Ch. 2 §§2.1–2.3 and §2.9, printed pp. 15–21 and 35–36 / PDF pp. 16–22 and 36–37, read in those selected sections: https://artowen.su.domains/mc/Ch-intro.pdf. Owen cites an external proof for the CLT; the local probability theorem is the supplier. Exact read limits are in statistics/sources.json.

### NA-40 — Quasi-Monte Carlo and discrepancy bounds

**Pages:** quasi-monte-carlo-and-discrepancy-bounds / quasi-monte-carlo-and-discrepancy-bounds-examples.

**Scope:** Define star discrepancy D*_n for points in [0,1]^d and anchored-at-1 Hardy–Krause variation. State and locally prove Koksma–Hlawka for finite variation: |n^-1Σf(x_i)−∫f|≤D*_n V_HK(f). Distinguish this deterministic bound from an empirical error bar; both factors may be harder to know than the integral. Uniform distribution plus Riemann integrability can be a separate convergence theorem with its own proof.

**Proof route:** Prove the one-dimensional Stieltjes/summation-by-parts discrepancy bound; decompose anchored mixed variation into box indicators; bound each box error by star discrepancy and take the variation supremum. Fix the anchor and boundary convention throughout. Do not cite a source’s exercise as a completed proof.

**Examples:** low-discrepancy point set with known box counts; integrand with infinite HK variation; a bound whose discrepancy/variation terms are unavailable numerically.

**Requires:** NA-39.

**Sources:** Owen, Practical QMC Ch. 15, full main text §§15.1–15.8, PDF pp. 11–72, plus notes/exercises read: https://artowen.su.domains/mc/practicalqmc.pdf. The one-dimensional proof is present; multidimensional Koksma–Hlawka is cited to an exercise/external source, so its local proof route above is mandatory. See statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

### NA-41 — Randomized quasi-Monte Carlo

**Pages:** randomized-quasi-monte-carlo / randomized-quasi-monte-carlo-examples.

**Scope:** Define randomized point sets with each X_i marginally uniform; prove unbiasedness without assuming interpoint independence. For a nested uniform scramble of a (0,m,d)-net in base b≥max(d,2), n=b^m, and f∈L², prove Var(Î_n)≤(b/(b−1))^min(m,d−1) σ²/n≤eσ²/n. Keep the separate smooth-net O(n^-3(log n)^(d−1)) statement and scrambled-net CLT out of scope until their distinct smoothness and source proofs are locally supplied. Replicate variance estimates randomization variability, not data sampling or solver/model bias.

**Proof route:** Prove the scramble ANOVA variance decomposition, bound each component covariance by elementary interval occupancy, and sum the component bounds. State exact net, base, dimension, L² and randomization assumptions. Do not extend to arbitrary digital shifts or arbitrary randomizations.

**Examples:** uniform marginal unbiasedness with dependent points; a scrambled net versus independent uniforms; a replicate variance that misses a shared solver bias.

**Requires:** NA-39, NA-40, thm-tonelli-theorem-for-sigma-finite-product-spaces, and thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.

**Sources:** Owen, Practical QMC Ch. 17, full §§17.1–17.14, physical PDF pp. 103–157 plus endnotes/exercises pp. 155–160, read: https://artowen.su.domains/mc/practicalqmc.pdf. The nested-scramble theorem proof is cited to Owen (1997a), not supplied in this chapter; the ANOVA/occupancy proof remains a local prerequisite. See statistics/sources.json.

### NA-42 — Multilevel Monte Carlo

**Pages:** multilevel-monte-carlo / multilevel-monte-carlo-examples.

**Scope:** State Giles’s abstract MLMC theorem for h_l=M^-lT, independent level estimates, weak bias |E(P_l−P)|≤c₁h_l^α (α≥1/2), correction variance ≤c₂N_l^-1h_l^β (β>0), and work C_l≤c₃N_lh_l^-1. Prove work O(ε^-2) for β>1, O(ε^-2 log² ε^-1) for β=1, and O(ε^(-2−(1−β)/α)) for 0<β<1 at MSE ε². SDE rate hypotheses are separate inputs, not consequences of the abstract theorem.

**Proof route:** Choose the finest level from the squared-bias budget; minimize Σ C_lN_l subject to variance budget using N_l proportional to √(V_l/C_l); evaluate the geometric sums in the three regimes. A coupled Euler example uses shared Brownian increments and P-NUM-SDE suppliers only under their exact hypotheses. The adaptive rate/level stopping procedure remains heuristic.

**Examples:** allocations across levels for β>1, β=1, β<1; a coupled Euler correction with α=1/2 and β=1; a model bias that persists at the finest level.

**Requires:** NA-39. For the conditional Euler example only, independent planned P-NUM-SDE-01/02 and P-SDE-01 in research/plan-machine-learning-track.md.

**Sources:** Giles, “Multilevel Monte Carlo Path Simulation,” full 2008 paper, especially §2 and §3 Theorem 3.1 and proof, PDF pp. 1–11 read: https://people.maths.ox.ac.uk/gilesm/files/OPRE_2008.pdf. The theorem proves complexity from rates but does not prove general Euler–Maruyama rates; adaptive stopping is heuristic. See statistics/sources.json source_id giles-mlmc-2008.

### NA-43 — Numerical optimization for statistical computation

**Pages:** numerical-optimization-for-statistical-computation / numerical-optimization-for-statistical-computation-examples.

**Scope:** For C² f with mI≼∇²f≼MI on the initial sublevel set and an attained minimum, prove exact-line-search gradient descent objective-gap contraction 1−m/M and the stated Armijo linear rate. For damped Newton require a Lipschitz Hessian on that sublevel set and prove finite damped steps followed by accepted unit steps and quadratic convergence. Prove ||x̃−x*||≤η/μ for a μ-strongly convex f when ||∇f(x̃)||≤η; include computed-gradient error δ by replacing η with η+δ. Do not assert global optimization for nonconvex or multimodal likelihoods.

**Proof route:** Use the descent lemma, strong convexity, Armijo decrease and Hessian-Lipschitz Taylor remainder under the stated sublevel invariance. For the gradient residual, use strong monotonicity and Cauchy–Schwarz. Separate optimization residual from an approximate objective/integral and from a model’s statistical target.

**Examples:** strongly convex quadratic with exact rate; damped Newton phase before quadratic convergence; small gradient at a poorly conditioned minimizer.

**Requires:** NA-09; published thm-hessian-characterises-convexity, thm-multivariable-taylor-formula-with-lagrange-remainder, and thm-gradient-and-hessian-of-the-frobenius-least-squares-functional where the least-squares objective is used.

**Sources:** Boyd–Vandenberghe, Convex Optimization §§9.2 and 9.3.1, physical PDF pp. 477–483 / printed pp. 463–469, and §§9.5.1–9.5.3, physical pp. 498–506 / printed pp. 484–492, proofs read: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf. These are convex-regime results only; statistics/sources.json source_id boyd-vandenberghe-convex-optimization-2004.

### NA-44 — Numerical inverse problems and regularization error

**Pages:** numerical-inverse-problems-and-regularization-error / numerical-inverse-problems-and-regularization-error-examples.

**Scope:** Reuse published SVD, condition numbers, exact least-squares, pseudoinverse, Tikhonov objective/minimizer, and truncated-filter suppliers. Prove the decomposition x†−A^#_λb=(I−A^#_λA)x†−A^#_λe for b=Ax†+e. Keep operator discretization residual (before inversion), data perturbation, regularization/truncation bias, iterative stopping, and roundoff (after the solve) as separate terms. The convention is λ>0 in ||Ax−b||²+λ||x||²; do not import the lecture slides’ λ² notation without conversion.

**Proof route:** Substitute the data model and distribute A^#_λ; bound each term only under its own operator/condition assumptions. For an integral-operator discretization, retain the residual dropped by quadrature/collocation before the inverse step. Parameter-choice heuristics are not universal regularization theorems.

**Examples:** ill-conditioned inverse with noise amplification; Tikhonov bias/noise tradeoff; discretization error preceding matrix inversion.

**Requires:** NA-01 and NA-02; published pages the-spectral-theorem-and-singular-value-decomposition, matrix-norms-condition-numbers-and-numerical-stability, direct-matrix-factorisations-lu-cholesky-and-qr, and the-moore-penrose-pseudoinverse-and-regularised-least-squares.

**Sources:** Hansen, Introduction to Inverse Problems, Ch. 4 all 29 slides, Ch. 5 all 27 slides, and Ch. 3 pp. 1–6 read as context: https://www2.imm.dtu.dk/~pcha/DIP/. These are teaching context, not substitutes for the inspected local proofs; discrepancy, L-curve, GCV and residual-spectrum rules are not universal guarantees. See statistics/sources.json source_id hansen-dtu-discrete-inverse-problems-lecture-slides.

### NA-45 — Error budgets for computational inference

**Pages:** error-budgets-for-computational-inference / error-budgets-for-computational-inference-examples.

**Scope:** Define a target-to-computation path for an integral, likelihood, or SDE expectation and prove a pathwise triangle-inequality decomposition into deterministic quadrature/discretization, algebraic solve/optimization residual, finite-precision, Monte Carlo/randomization, approximation, data-sampling, and model error where each term is defined. State that some terms may be random and need their own mode (pathwise, in expectation, or probability). Root-sum-square requires covariance/independence premises. A solver rate that vanishes under refinement does not remove a fixed model/score bias. This page supplies numerical bookkeeping, not posterior calibration or inferential coverage.

**Proof route:** Insert intermediate exact targets and apply the triangle inequality along the computation path. For randomized terms, derive a variance sum only after proving centering and cross-covariance conditions; keep deterministic truncation/conditioning terms separate. Reuse P-NUM-ODE/SDE only for their exact solver contracts and do not infer model correctness.

**Examples:** quadrature plus optimizer residual in a likelihood normalizer; MC standard error shrinking while SDE time-discretization bias remains; numerical refinement with a nonzero learned-model bias.

**Requires:** NA-01, NA-12, NA-13, NA-14, NA-39, NA-40, NA-41, NA-42, NA-43, and NA-44; independent planned P-NUM-ODE-01/02 and P-NUM-SDE-01/02 only for the matching solver terms.

**Sources:** Owen, Simple Monte Carlo Ch. 2 §§2.1–2.3 and 2.9, printed pp. 15–21 and 35–36 / PDF pp. 16–22 and 36–37, selected sections read: https://artowen.su.domains/mc/Ch-intro.pdf; Practical QMC Chs. 15 and 17, complete main text/notes/exercises read at PDF pp. 11–72 and 103–160: https://artowen.su.domains/mc/practicalqmc.pdf; Giles, full §3 Theorem 3.1 and proof, PDF pp. 1–11: https://people.maths.ox.ac.uk/gilesm/files/OPRE_2008.pdf; Higham–Mao–Stuart, journal pp. 1041–1056 / PDF pp. 1–16 read, later pp. 1057–1063 unread: https://authors.library.caltech.edu/records/1wrtf-vyz04/files/s0036142901389530.pdf; Boyd–Vandenberghe §§9.2, 9.3.1 and 9.5.1–9.5.3 read at physical PDF pp. 477–483 and 498–506: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf; Hansen, Ch. 4 all 29 slides, Ch. 5 all 27 slides, and Ch. 3 pp. 1–6 read: https://www2.imm.dtu.dk/~pcha/DIP/. Exact proof limits are in statistics/sources.json. The triangle decomposition is proved locally from the norm inequality; it makes no inferential coverage claim.

### NA-46 — Optimal star-discrepancy order in dimension at least three

**Pages:** optimal-star-discrepancy-order-in-dimension-at-least-three / optimal-star-discrepancy-order-in-dimension-at-least-three-examples.

**Scope:** Optional genuine open-problem entry with candidate ID op-optimal-star-discrepancy-order-dimension-at-least-three: for each fixed integer d≥3, determine the exact asymptotic order as n→∞ of the minimum star discrepancy among n-point subsets of [0,1]^d. The statistics packet reports mismatched published lower and upper bounds as unresolved on 2026-10-12; it does not record a fresh authoritative status search for this scaffold. The planar case has a different settled order. A fresh source/status review is required before any later publication. The B page may illustrate known bounds and the dimension boundary but proves no resolution.

**Proof route:** None is claimed. Future authoring is source/status review only: kind open-problem and op- ID; sections Open problem and Status; provenance.proof: not-applicable; no Proof, Refutation, Verification, counterexample, proof strategy or proof stamp. Its only prerequisite may be the earlier star-discrepancy definition. It is never a dependency or premise for any other pair.

**Examples:** compare the known planar order with mismatched d≥3 upper/lower bounds; no proposed example is a counterexample to the open question.

**Requires:** NA-40 only for the definition of star discrepancy.

**Sources:** Owen, Practical QMC Ch. 15 discrepancy discussion, full main text §§15.1–15.8, PDF pp. 11–72 and endnotes/exercises read: https://artowen.su.domains/mc/practicalqmc.pdf. The packet records the fixed-d≥3 question as unresolved on 2026-10-12 and reports cited lower/upper bounds rather than a resolution; no newer status check is claimed here. A fresh authoritative status review remains a future publication requirement. See statistics/coverage.json open_problem_candidate and statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

## Source-proof and integration boundaries

The source registry in each Sources field is backed by the six actual records:
- research/numerical-analysis-2026-10-12/direct/sources.json
- research/numerical-analysis-2026-10-12/iterative/sources.json
- research/numerical-analysis-2026-10-12/ode/sources.json
- research/numerical-analysis-2026-10-12/fd-fv/sources.json
- research/numerical-analysis-2026-10-12/fem-spectral/sources.json
- research/numerical-analysis-2026-10-12/statistics/sources.json

Hairer–Wanner ODE claims cite only the recovery reader’s exact pages in ode/sources.json; earlier-worker reports remain distinct records, not reread claims. Trefethen’s Lax equivalence theorem and the finite-volume source theorem carry their proof/compactness limits explicitly. The HMT Gaussian and Owen QMC results have listed local intermediate obligations. The 2006 pressure-splitting remark remains a source-specific missing proof. The P-NUM-ODE/SDE contracts are planned, not published; the owner must ensure their final proof requirements are completed before treating them as suppliers. The 2026 CMI announcement is not a proof certificate or a change to the fetched Active status.
