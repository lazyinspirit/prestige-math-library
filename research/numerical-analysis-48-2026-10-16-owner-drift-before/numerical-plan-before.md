# Numerical Analysis — prose scaffold plan

**Status:** draft design, derived from the six completed research packets dated 2026-10-12. This file is not a production item inventory and is not added to the canonical plan spec. It specifies A-page teaching scopes and B-page example scopes only. The supplier-first prose audit dated 2026-10-14 adds binding contract completions below; these are authoring designs, not accepted proofs.

**Category:** numerical-analysis, at library/numerical-analysis/. Each numbered NA pair has one A page and a companion B examples page with the same slug plus -examples. Pages are ordered so every in-category prerequisite precedes its consumer. The B companion contains worked examples and counterexamples; it is never a supplier.

**Supplier policy:** reuse the published Linear Algebra pages for spectral/SVD theory, condition numbers and roundoff vocabulary, direct factorizations, pseudoinverses and regularization, eigenvalue iterations, Krylov methods, CG/MINRES and preconditioning. New pages add only missing numerical-analysis contracts and interfaces; they do not copy existing item IDs or claim that exact-arithmetic results prove computed-method stability. Reuse published PDE and functional-analysis suppliers under their actual hypotheses. The planned P-NUM-ODE-01/02 and P-NUM-SDE-01/02 pages in research/plan-machine-learning-track.md are independent pre-category suppliers. Numerical Analysis may consume these generic solver contracts, but no numerical-analysis pair depends on Category 4 or any ML consumer.

**Proof and error policy:** separate exact-arithmetic identities, finite-precision roundoff, continuous-problem well-posedness, discretization/approximation, algebraic solver residual, sampling/randomization, and model error. A named scheme, CFL inequality, small residual, estimator, or observed rate does not itself prove convergence or accuracy. State the norm, mesh/method family, regularity, boundary/interface conditions, and uniform constants. Every mathematical theorem receives local proof dependencies; sources guide proof design but do not act as logical suppliers. Established results whose proof is absent locally remain authoring obligations. Only NA-46 is an open-problem candidate; it has no downstream logical use. The existing drafted periodic Navier–Stokes open problem is contextual only.

**Pair fields:** each entry gives Pages, Scope and proposed kinds/interfaces, Proof route, Examples, Requires, and Sources. Requires lists only earlier NA pairs, exact existing page/item suppliers, or the independent planned P-NUM pages. Source read ranges and proof limitations are given inline and in the linked packet records. “Read” in existing Sources fields describes the 2026-10-12 packet reader; the present audit independently read only the bodies/ranges recorded in research/scaffold-audit-2026-10-14/numerical-analysis.md.


**Procedure policy:** every new procedure is an `alg-` definition with finite-dimensional inputs, an arithmetic/oracle model, outputs and explicit failure statuses. Bounded loops take an integer budget and return the last state with `budget-exhausted`; an infinite sequence is a mathematical iteration definition, not a terminating executable algorithm. Exact root finding, integration, random drawing and implicit solving are declared oracles or earlier subprocedures with their own admissible domains; no oracle is silently given finite bit cost. Tolerances, zero pivots/denominators, rank loss, failed implicit branches, nonfinite values and domain escape receive explicit branches. Correctness, termination, convergence, error and work are separate proved result items consuming the procedure, never claims embedded in its Definition. The 46 contract completions below belong to the corresponding A pages; B examples cannot supply them.

**Choice and geometry policy:** propagate the actual suppliers' assumptions: DC for Banach–Steinhaus/Lax necessity; Countable Choice for Sobolev, Lax–Milgram, entropy and elliptic regularity, with DC also for the imported entropy existence route; AC in addition for the named sharp trace, weak Poisson existence, elliptic min–max/compactness routes and iid CLT; the time-dependent Hamiltonian-flow supplier explicitly retains AC_ω. Read the chosen proof closure rather than assume finite-dimensional numerical data removes infinite-dimensional choice. The published sharp trace theorem is for bounded C¹ domains and cannot be applied to simplex/polyhedral cells. NA-28 first supplies local reference-cell trace/Green and scaling lemmas, with a separately proved Lipschitz-domain interface when needed. Physical postulates/theorems/experiments and physics remarks never become root logical premises. Mathematical proof designs already present beneath physics/ may guide proposed root mathematical suppliers; physical interpretations remain nonlogical examples/remarks.

### NA-01 — Floating-point arithmetic, conditioning, and error propagation

**Pages:** floating-point-arithmetic-and-error-propagation / floating-point-arithmetic-and-error-propagation-examples.

**Scope:** Reuse, without reissuing, the published definitions of the standard relative floating-point model and unit roundoff, γ_n accumulation, dot-product error, conditioning, backward stability, and residual-to-forward-error bounds. Organize their interface as exact problem → computed quantity → backward perturbation → condition-amplified forward error. State the normal-range premise for each rounded operation and keep overflow, underflow, subnormals, invalid operations, cancellation, and exceptional results visible. Proposed interfaces are a page-level error taxonomy and, only if a new item is needed, a proved triangle-inequality error ledger; the existing local definitions remain canonical.

**Proof route:** Point to the published Linear Algebra contracts for every numerical inequality. For a new total-error lemma, insert intermediate targets and apply the norm triangle inequality; do not combine variances without centering and covariance/independence hypotheses. Examples and page prose must distinguish model sensitivity from algorithm instability.

**Examples:** cancellation in the quadratic formula; a small linear-system residual with a large forward error when the condition number is large; a dot product at the edge of the normal-range hypothesis.

**Requires:** published Linear Algebra page matrix-norms-condition-numbers-and-numerical-stability, especially def-standard-relative-floating-point-model-and-unit-roundoff, lem-product-of-one-plus-deltas-gives-theta-n, thm-floating-point-dot-product-componentwise-and-normwise-error-bounds, def-forward-and-backward-stability-for-a-problem-family, thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order, and thm-residual-to-forward-error-bounds-for-linear-systems.

**Sources:** Driscoll–Braun, FNC §§1.1–1.4, full extracted pages read: https://fncbook.com/floating-point/, https://fncbook.com/conditioning/, https://fncbook.com/algorithms/, https://fncbook.com/stability/; packet record research/numerical-analysis-2026-10-12/direct/sources.json, source_id driscoll-braun-fnc-2017. Goldberg, §1 and §2 at extracted lines 12–497 and “The Details, Rounding Error” lines 559–779, read in those ranges: https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html; packet source_id goldberg-1991-oracle-reprint. The library’s binary64 unit roundoff is 2^-53; do not copy the FNC/Goldberg machine-epsilon naming as if it were the same constant.

### NA-02 — Finite-precision direct factorizations and least squares

**Pages:** finite-precision-direct-factorizations / finite-precision-direct-factorizations-examples.

**Scope:** Add alg-cholesky-factorisation-with-positive-diagonal with the Hermitian positive-definite recurrence d_j=a_jj−Σ_{k<j}|l_jk|², l_jj=√d_j>0, and l_ij=(a_ij−Σ_{k<j}l_ik conjugate(l_jk))/l_jj. Prove pivot admissibility and exact correctness. A rounded run may encounter a nonpositive computed pivot even for positive-definite input: return failure there, and state the backward theorem conditional on successful completion or prove a quantitative sufficient condition for success. The real four-operation rounding model supplies neither rounded square roots nor complex operations; add their explicit arithmetic models/results before using them. Add a computed-Cholesky backward-error theorem with explicit componentwise/normwise constants, and a Householder local-step lemma only under the published standard relative model and stated range conditions. If computed least-squares stability is promised, add a separate full-column-rank computed-solution theorem covering reflector formation, Q*b, triangular substitution, and the nearby (A,b) perturbation. Preserve the existing Householder theorem’s explicit A1 premise until that premise is proved and integrated with a fresh dependency/consumer review; it remains conditional here. Do not add a numerical-SVD algorithm: the direct packet has no read full-text algorithm/stability source.

**Proof route:** Derive each Cholesky pivot from the positive-definite Schur complement; bound every rounded sum, square root, and division; assemble the Hermitian residual A+E=Lhat Lhat*. For Householder QR, prove stable scaling and reflector construction, then the rank-one update perturbation, including the zero-vector case; aggregate local errors by exact orthogonality. For computed least squares, add the Q*b and triangular-solve residuals before applying the least-squares condition bound. Derive flop costs only under an explicit operation convention.

**Examples:** positive-definite 2×2 Cholesky recurrence and a computed residual; a full-rank least-squares problem comparing normal equations with reduced QR; an ill-conditioned design matrix showing why stability does not imply small forward error.

**Requires:** NA-01; published Linear Algebra pages direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, the-spectral-theorem-and-singular-value-decomposition, and the-moore-penrose-pseudoinverse-and-regularised-least-squares. Reuse thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots, thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model only with A1 retained, thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost, and thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number.

**Sources:** FNC §2.9 https://fncbook.com/structure/, §§2.3–2.8 https://fncbook.com/linear-systems/, https://fncbook.com/lu/, https://fncbook.com/efficiency/, https://fncbook.com/pivoting/, https://fncbook.com/norms/, https://fncbook.com/condition-number/, and §§3.1–3.4 https://fncbook.com/fitting/, https://fncbook.com/normaleqns/, https://fncbook.com/qr/, https://fncbook.com/house/; complete extracted named pages read, with no local computed-Cholesky or computed-LS proof imported. See direct/sources.json source_id driscoll-braun-fnc-2017 and direct/research.md §“Prerequisite route and missing local suppliers.”

### NA-03 — Sparse matrix models and kernel costs

**Pages:** sparse-matrix-models-and-kernel-costs / sparse-matrix-models-and-kernel-costs-examples.

**Scope:** Define a fixed CSR access model, including dimensions, row pointers, values, column indices, and duplicate/empty-row conventions; define CSR matrix–vector multiplication; prove storage O(s+m) and operation count O(m+s), where s counts stored entries. Only for a canonical representation with no duplicates or explicit zeros is s=nnz(A). For square patterns with at least one stored entry per row, state the O(s) specialization. Distinguish sparse matvec/vector-kernel costs from convergence and from sparse direct-factorization fill, which depends on the graph and ordering. Do not state a universal factorization cost from matrix dimension alone.

**Proof route:** Count stored values, column indices, row pointers, and loop iterations under the declared format. Treat algorithmic costs as arithmetic/storage counts, not runtime or memory-bandwidth claims. Use a concrete elimination graph to show fill without asserting a general fill bound.

**Examples:** CSR for a one-dimensional tridiagonal matrix; one matvec count; a sparse elimination ordering that creates fill.

**Requires:** NA-01; published Linear Algebra page direct-matrix-factorisations-lu-cholesky-and-qr for triangular kernels and exact factorization context.

**Sources:** Saad, Iterative Methods for Sparse Linear Systems, 2e, Ch. 3, printed pp. 75–104 (complete chapter read): https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf; Cornell notes 31–33, complete PDFs, course index https://www.cs.cornell.edu/~bindel/class/cs6210-f12/lectures.html. Exact source ranges and limitations are in iterative/sources.json, source_ids saad-iterative-methods-2e and cornell-cs6210-f12-lecture-notes.

### NA-04 — Stationary iterations and relaxation

**Pages:** stationary-iterations-and-relaxation / stationary-iterations-and-relaxation-examples.

**Scope:** Define a matrix splitting A=M−N and the stationary update x_{j+1}=M^-1Nx_j+M^-1b; supply Richardson, Jacobi, Gauss–Seidel, and SOR as exact algorithms with their admissible diagonal/pivot rules. State the all-start/all-right-hand-side convergence equivalence ρ(M^-1N)<1. Prove only the source-backed sufficient tests: strict diagonal dominance, or irreducible weak diagonal dominance with at least one strict row, for Jacobi/Gauss–Seidel; for symmetric A with positive diagonal, SOR converges for every start iff A is positive definite and 0<ω<2. Keep ordering assumptions on any optimal-ω formula.

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

**Requires:** NA-10 and published thm-ftc-second-part for evaluating polynomial/antiderivative integrals and thm-continuous-on-a-rectangle-is-riemann-integrable. The Lebesgue first-FTC supplier thm-first-fundamental-theorem-of-calculus-for-l-one has a distinct almost-everywhere differentiation role and carries Countable Choice when used.

**Sources:** Owen, Monte Carlo Theory, Methods and Examples, Ch. 7, complete 36-page extracted chapter read, including notes/exercises: https://artowen.su.domains/mc/Ch-quadrature.pdf; FNC integration https://fncbook.com/integration/, complete extracted article page read. Owen develops midpoint/composite rules; the packet’s exact ranges and proof boundaries are in statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

### NA-13 — Gaussian quadrature

**Pages:** gaussian-quadrature / gaussian-quadrature-examples.

**Scope:** For positive dμ=w(x)dx on [a,b], finite moments through degree 2m for the remainder integral (degree 2m−1 suffices for rule exactness), and a positive-definite polynomial inner product through degree m for the remainder branch, construct the monic orthogonal polynomial p_m. Prove it has m simple roots in (a,b); the m-node Gauss rule at those roots has positive weights and exactness through degree 2m−1. For f∈C^{2m}[a,b], prove the remainder f^{(2m)}(ξ)/(2m)! ∫p_m²dμ. Tensor products preserve coordinatewise exactness but cost exponentially in dimension.

**Proof route:** Use Gram–Schmidt; prove root count by sign changes; divide q=p_mr+s and use orthogonality for exactness; apply exactness to ℓ_i² for positive weights; use Hermite interpolation at double nodes and repeated Rolle for the remainder. Each intermediate theorem is an explicit local proof obligation. To retain the exactness-only degree-2m−1 moment variant, construct p_m from its m orthogonality equations using the degree-(m−1) positive moment matrix and nonzero density support; do not pretend a degree-m quadratic norm is defined without the degree-2m moment.

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

**Proof route:** Expand the exact flow and the three selected stage updates by multivariable Taylor, match the rooted-tree coefficients through each stated order, and identify the method-specific local order conditions. P-NUM-ODE-01 owns an abstract defect/stability theorem whose hypotheses are instantiated by these conditions, without any logical edge from that pre-category supplier back to NA-15; this pair states no separate fixed-interval error theorem. Prove the stability function by algebra on the scalar test equation. A method name or observed order plot does not prove the method-specific conditions.

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

**Requires:** published thm-uniform-boundedness-principle with DC, def-dependent-choice, and the common-space semigroup/density interfaces proposed below.

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

**Proof route:** First prove a C¹ IVP parameter/initial-data sensitivity lemma on a common compact tube from difference quotients, the variational integral equation and Grönwall; continuous dependence alone does not justify differentiation. Differentiate the shooting residual through that map; propagate IVP numerical error separately from the root residual; for collocation, show consistency and a uniform inverse bound on the chosen discrete branch before claiming an error rate. Reuse NA-09 local Newton only when its derivative hypotheses hold. FNC implementations/examples are not a convergence proof.

**Examples:** unstable shooting for a decaying mode; a collocation residual with two solution branches; Newton failure from an initial guess outside the local basin.

**Requires:** NA-09, NA-19, thm-existence-and-uniqueness-of-a-maximal-ode-solution, and thm-continuous-dependence-of-odes-on-initial-data-and-parameters.

**Sources:** FNC Ch. 10 shooting.md and nonlinear.md, selected files read at commit a280ed1a013393ee0a184dcbaa866522f35a3516: https://github.com/fncbook/fnc/tree/a280ed1a013393ee0a184dcbaa866522f35a3516. The source provides residual definitions and examples, not general solver or mesh-convergence results; see ode/sources.json source_id driscoll-braun-fundamentals-of-numerical-computation-chapters-4-6-10.

### NA-22 — Geometric numerical integration

**Pages:** geometric-numerical-integration / geometric-numerical-integration-examples.

**Scope:** Define symplectic Euler for a specified separable Hamiltonian H(q,p)=T(p)+V(q), with drift/kick ordering fixed, and Störmer–Verlet as a half-kick/full-drift/half-kick composition; every intermediate state must be in the phase domain. Prove the former is symplectic and first order and the latter symplectic and second order on a controlled tube. For a general nonseparable Hamiltonian, any implicit symplectic-Euler extension instead declares a selected locally unique branch and its admissibility theorem; no explicit separable formula is silently generalized. State the Runge–Kutta symplectic coefficient identity b_i a_ij+b_j a_ji=b_i b_j and prove preservation of quadratic first integrals under its hypotheses. State a finite-order near-energy theorem only for smooth H, a symplectic method with a globally defined truncated modified Hamiltonian H_h^[N] on U, a proved uniform closeness |H_h^[N]−H|≤C h^r and one-step modified-energy defect ≤C h^(N+1), and numerical endpoints/comparison segments in the controlled compact tube K⊂U; the resulting bound is |H(z_n)−H(z_0)|≤2C h^r+C n h^(N+1), with its stated n h horizon; do not present a formal divergent series as a convergent Hamiltonian.

**Proof route:** Reuse the published Hamiltonian flow’s symplecticity and conservation statements; verify discrete symplecticity by Jacobian pullback and derive order by Taylor/symmetry. For backward error, first prove the finite-order formal-log/Hamiltonian-primitive, map-versus-modified-flow and energy-closeness lemmas (global primitives are a hypothesis or a proved topological consequence), then truncate at fixed N, bound the modified-energy defect per step and sum only over the stated time horizon; carry the compact-domain and globality assumptions.

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

**Proof route:** Prove order preservation/range bounds and TVD; establish temporal translation estimates; supply the missing local Helly/BV compactness lemma by a rational-point diagonal argument (uniform local variation and bounds give L¹_loc subsequences). Pass the conservative update and discrete entropy inequality to the limit; use the published Kruzhkov uniqueness/contraction theorem to identify all subsequential limits. Carry the source theorem’s mesh-to-time ratio premise and the chosen piecewise-linear time interpolant. The published entropy-existence theorem requires u₀∈L¹∩L∞ and DC+CC; use it on that global-data branch only. For nonintegrable globally bounded BV data, supply the local-limit existence/initial-trace proof in this pair before using the published local contraction theorem to identify the limit.

**Examples:** Godunov and Lax–Friedrichs monotone flux under CFL; shock captured with correct Rankine–Hugoniot speed; a conservative but nonmonotone weak limit that is not entropy admissible.

**Requires:** NA-26; published PDE scalar-conservation-laws-and-entropy-solutions, especially thm-existence-of-bounded-kruzhkov-entropy-solutions and thm-kruzhkov-local-l1-contraction. Add a local compactness lemma; current local 1D BV items do not supply Helly selection.

**Sources:** Droniou, full 39-page note §§1–2.6 read: https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf; Mishra–Fjordholm–Abgrall, ETH notes, nonblank PDF pp. 1–105, 107–121, 123, 125 read: https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf. ETH Theorem 4.19 has Δt/Δx≥c and cites Helly; Droniou’s no-BV proof is a sketch. Exact limits are in fd-fv/sources.json source_ids droniou-beginner-scalar-fv-2008 and mishra-fjordholm-abgrall-eth-conservation-law-notes.

### NA-28 — Finite-element meshes and interpolation

**Pages:** finite-element-meshes-and-interpolation / finite-element-meshes-and-interpolation-examples.

**Scope:** Define matching affine mesh families, shape regularity, reference finite elements and unisolvent degrees of freedom, conforming and broken polynomial spaces. Prove local interpolation estimates |v−I_Kv|_{W^{m,p}(K)}≤Ch_K^{r−m}|v|_{W^{r,p}(K)} under polynomial reproduction, bounded reference functional and stated Sobolev regularity. Prove the chosen inverse and discrete-trace inequalities using finite-dimensional scaling and shape regularity. State point-evaluation Sobolev embedding thresholds and separate Clément/Scott–Zhang-type averaged operators when lower regularity is needed.

**Proof route:** Map each cell to a reference element; prove reference approximation by polynomial reproduction and Deny–Lions/Bramble–Hilbert; track Jacobian and shape-regularity constants under scaling. Derive inverse and trace estimates from finite-dimensional norm equivalence on the reference cell. State conformity and boundary trace assumptions before using V_h⊂V.

**Examples:** affine triangle and quadrilateral maps; a shape-regular versus sliver family; Lagrange point evaluation outside its Sobolev embedding range.

**Requires:** NA-10 as polynomial interpolation context; published Sobolev, zero-boundary closure, Poincaré, and trace suppliers: def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-poincare-inequality-for-w-one-p-zero, thm-sharp-trace-theorem-for-w-one-p only on its bounded C¹ domain; proposed reference-cell trace/Green, Bramble–Hilbert and Sobolev point-evaluation suppliers for polygonal cells.

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

**Scope:** Define the evolution triple V↪H≃H*↪V* and parabolic energy space W(0,T;V). Under uniformly bounded/coercive a(t;·,·), specify measurability sufficient that t↦A(t)v is strongly measurable in V* for each v∈V (scalar measurability suffices in the separable Hilbert case); then state the trace u∈C([0,T];H), prove variational well-posedness and energy stability, then define spatial Galerkin/Ritz projection and prove its semidiscrete error equation. Fully discrete backward Euler, Crank–Nicolson, cG or dG rates are separate results with time regularity, initial projection and jump assumptions stated.

**Proof route:** Prove the time integration-by-parts/trace lemma and apply BNB to the space-time form; test by u for energy stability. For a time-independent form use spatial Galerkin orthogonality and the exact residual equation (∂tθ,v_h)+a(θ,v_h)=−(∂tρ,v_h), where ρ=R_hu−u and θ=u_h−R_hu, with θ(0)=u_h(0)−R_hu(0). The full evolution operator does not commute with R_h. For measurable time-dependent forms, use a fixed comparison operator and retain its full residual; a differentiable R_h(t) route additionally requires coefficient time regularity and retains the term (∂tR_h(t))u. Then apply energy estimates; use a backward adjoint only for L² smoothing estimates. Do not use analytic-semigroup existence as a finite-element error theorem.

**Examples:** heat equation with initial projection error; semidiscrete Ritz error identity; time regularity loss that lowers Crank–Nicolson order.

**Requires:** NA-28 and NA-29; published heat semigroup suppliers are continuous context only. New evolution-triple trace and variational well-posedness lemmas are required.

**Sources:** Clason, Introduction to FEM, Chs. 11–12, printed pp. 96–112 / PDF pp. 100–115, complete: https://arxiv.org/abs/1709.08618v2; Long Chen, full 12-page parabolic FEM note: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf. Chen cites rather than proves continuous well-posedness; both read records and limitations are in fem-spectral/sources.json.

### NA-37 — Finite-element eigenvalue approximation

**Pages:** finite-element-eigenvalue-approximation / finite-element-eigenvalue-approximation-examples.

**Scope:** For a symmetric coercive form with compact embedding (or a specified coercive shift of a lower-bounded symmetric form), its positive compact solution operator and conforming Galerkin spaces of dimension at least m, prove the fixed-index min–max upper bound λ_{h,m}≥λ_m. With E_m=span{e₁,…,e_m}, define δ_h=sup_{v∈E_m, ||v||_a=1} inf_{w_h∈V_h}||v−w_h||_a, prove injectivity of the trial projection for sufficiently small δ_h, and bound λ_{h,m}−λ_m≤C_m δ_h². A coercive shift is removed from eigenvalues after the argument, preserving the ordering. For multiple eigenvalues compare invariant subspaces/gaps rather than arbitrary eigenvectors. A nonsymmetric/nonconforming Babuška–Osborn extension needs operator-norm convergence, uniform discrete stability, primal/adjoint approximation and generalized-eigenspace multiplicity hypotheses.

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

**Scope:** Define star discrepancy D*_n for points in [0,1)^d using half-open anchored boxes [0,t) and anchored-at-1 Hardy–Krause variation. State and locally prove Koksma–Hlawka for finite variation: |n^-1Σf(x_i)−∫f|≤D*_n V_HK(f). Distinguish this deterministic bound from an empirical error bar; both factors may be harder to know than the integral. Uniform distribution plus Riemann integrability can be a separate convergence theorem with its own proof.

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

**Scope:** For C² f on an open convex domain, an attained interior minimum and initial sublevel set compactly contained in that domain, require mI≼∇²f≼MI on a convex neighborhood containing that set and every trial segment used in the proof (alternatively impose the bounds globally). With m>0, prove exact-line-search gradient descent objective-gap contraction 1−m/M and the Armijo linear rate with 0<a<1/2, 0<b<1, initial trial step 1 and shrink factor b: accepted t≥min{1,2b(1−a)/M} yields gap contraction at most 1−2am min{1,2b(1−a)/M}. State objective gaps and iterate errors separately. For damped Newton require a Lipschitz Hessian on that convex trial neighborhood and prove finite damped steps followed by accepted unit steps and quadratic convergence. Prove ||x̃−x*||≤η/μ for a μ-strongly convex f when ||∇f(x̃)||≤η; include computed-gradient error δ by replacing η with η+δ. Do not assert global optimization for nonconvex or multimodal likelihoods.

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

**Scope:** Optional genuine open-problem entry with candidate ID op-optimal-star-discrepancy-order-dimension-at-least-three: for each fixed integer d≥3, determine the exact asymptotic order as n→∞ of the minimum star discrepancy among n-point subsets of [0,1)^d with the NA-40 half-open anchored-box convention. A fresh source/status review on 2026-10-14 retrieved Owen’s current author-hosted Practical QMC, printed pp. 18–19: it explicitly says the best possible discrepancy rate is not known, gives Roth’s lower bound and the fixed-d conjectural n⁻¹(log n)^(d−1) barrier, and says the latter is proved for d≤2. The document itself carries the 2013–2023 date; retrieval does not pretend it was newly written. The planar case has a different settled order. The current exact-phrase arXiv search and recent 2026 full-text introductions were checked for newer resolution claims: none of the inspected results resolves this fixed-d question; the limited search does not prove absence of every possible claim. The B page may illustrate known bounds and the dimension boundary but proves no resolution.

**Proof route:** None is claimed. Future authoring is source/status review only: kind open-problem and op- ID; sections Open problem and Status; provenance.proof: not-applicable; no Proof, Refutation, Verification, counterexample, proof strategy or proof stamp. Its only prerequisite may be the earlier star-discrepancy definition. It is never a dependency or premise for any other pair.

**Examples:** compare the known planar order with mismatched d≥3 upper/lower bounds; no proposed example is a counterexample to the open question.

**Requires:** NA-40 only for the definition of star discrepancy.

**Sources:** Owen, Practical QMC Ch. 15 discrepancy discussion, full main text §§15.1–15.8, PDF pp. 11–72 and endnotes/exercises read: https://artowen.su.domains/mc/practicalqmc.pdf. The packet records the fixed-d≥3 question as unresolved on 2026-10-12. Fresh 2026-10-14 locators are Owen printed pp. 18–19 and Theorem 15.7, and current research context https://arxiv.org/html/2607.12263v1 §§1.1–1.3 (Smirnov–Vershynin, random sets/arbitrary-measure discrepancy), https://arxiv.org/html/2607.23571v2 §1, Theorems 1.1–1.2 and Remark 1.3 (Dick, uniform inverse-discrepancy tractability). Dick’s new resolution concerns dimension growing with accuracy, not fixed-d logarithmic asymptotics; it is not a resolution of NA-46 and no preprint proof acceptance is asserted. The bounded latest-results search was https://arxiv.org/search/?query=%22star+discrepancy%22&searchtype=all&abstracts=show&order=-announced_date_first&size=50; author/status locators, inspected ranges and limitations are recorded in the audit report. Source/status must remain current at any separate publication. See statistics/coverage.json open_problem_candidate and statistics/sources.json source_id owen-monte-carlo-book-2009-2023-selected-chapters.

## Source-proof and integration boundaries

The source registry in each Sources field is backed by the six actual records:
- research/numerical-analysis-2026-10-12/direct/sources.json
- research/numerical-analysis-2026-10-12/iterative/sources.json
- research/numerical-analysis-2026-10-12/ode/sources.json
- research/numerical-analysis-2026-10-12/fd-fv/sources.json
- research/numerical-analysis-2026-10-12/fem-spectral/sources.json
- research/numerical-analysis-2026-10-12/statistics/sources.json

Hairer–Wanner ODE claims cite only the recovery reader’s exact pages in ode/sources.json; earlier-worker reports remain distinct records, not reread claims. Trefethen’s Lax equivalence theorem and the finite-volume source theorem carry their proof/compactness limits explicitly. The HMT Gaussian and Owen QMC results have listed local intermediate obligations. The 2006 pressure-splitting remark remains a source-specific missing proof. The P-NUM-ODE/SDE contracts are planned, not published; the owner must ensure their final proof requirements are completed before treating them as suppliers. The 2026 CMI announcement is not a proof certificate or a change to the fetched Active status.

## Contract completions from the supplier-first audit (2026-10-14)

These rows cover every A/B pair, including all named procedures and theorem families in its Scope, Proof route and Examples. They refine the draft contracts; they do not certify an authored item. A source locator in each pair identifies the intended proof design, while any missing intermediate below must have a local body before its consumer can be authored as proved. “Work” always names arithmetic, storage, random draws or bit operations separately; a real-arithmetic oracle count is not bit complexity.

| Pair | Required contract and supplier completion |
|---|---|
| NA-01 | Distinguish absolute and relative errors; relative formulas require nonzero denominators. Retain n u<1 for γ_n and normal-range/exact-zero operation premises. The total-error lemma specifies intermediate targets in one normed space. |
| NA-02 | Cholesky loops j=1,…,n and i=j+1,…,n return L or the first invalid pivot/range status. A complex implementation names real component operations, conjugation and square-root rounding. Householder analysis uses exact orthogonal mathematical representatives, not a falsely exactly orthogonal stored matrix. Full-rank computed LS retains residual-dependent conditioning and successful triangular pivots. |
| NA-03 | CSR uses m,n≥0, s stored entries, r₀=0≤…≤r_m=s, 0≤c_k<n; duplicates are summed and explicit zeros count as stored entries. Set y_i=0, then for k=r_i,…,r_(i+1)−1 add v_k x_(c_k). Cost is O(m+s), storage O(m+s); use s, not mathematical nnz, until a canonical no-duplicates/no-zero format is imposed. |
| NA-04 | Iteration sequences have arbitrary n≥1, nonsingular M and fixed ordering; executable runs take a budget and residual test. Jacobi uses D, GS D−L, SOR D−ωL for A=D−L−U; Richardson uses M=ω⁻¹I with ω≠0. A zero diagonal returns failure for Jacobi/GS/SOR. Prove weak irreducible dominance plus a strict row, not irreducibility alone. |
| NA-05 | The m-step sparse bound requires 1≤m≤n and a specified orthogonalization strategy. Incremental Givens small-LS work O(m²) fits the O(m²n) term; solving every dense small LS afresh has a different cost. Happy breakdown returns the invariant-space solution; numerical near-breakdown has its own status. Lanczos Chebyshev bound separates the degenerate interval λ₂=λ_n and n=1; the starting angle/gap cannot be omitted. |
| NA-06 | ILU(0) fixes an ordering and pattern containing the diagonal, copies stored A, processes pivots in increasing order and drops every update outside that pattern; an absent/zero pivot returns failure before division. Factors are preconditioner maps only after invertibility is proved. Setup work depends on pattern intersections; triangular application/storage use stored factor entries. |
| NA-07 | Specify SPD A_h, full-column-rank P, R=P*, and SPD A_H=P*A_hP. C=I−P A_H⁻¹P*A_h is the A_h-orthogonal error projector. Set D=diag(A_h)>0, require ||S e||_A²≤||e||_A²−α||A_h e||_(D⁻¹)² and inf_v ||e−Pv||_D²≤β||e||_A². The product is S C for post-smoothing after correction; the A-adjoint proves the corresponding pre-smoothing norm. The bound is sqrt(1−α/β). A finite hierarchy plus finite smoother counts defines a V-cycle; exact/coarse iterative solve is declared. Master recurrence includes base level and γ<,=,>2^d cases O(N), O(N log N), O(N^(log_(2^d)γ)). |
| NA-08 | Gaussian drawing is a probabilistic primitive; Q spans all of Ran(AΩ), even when its rank is below k+p. A rank-revealing exact basis routine handles rank loss deterministically. The returned projector has rank up to k+p, not necessarily k. Expected error uses the deterministic block bound and local Gaussian moment lemmas; tail/concentration are separately required only for a promised probability bound. |
| NA-09 | Newton accepts x₀, residual norm/tolerance, budget and derivative/linear-solve oracle; singular Jacobian, inadmissible trial state and exhausted backtracking are failure statuses. Finite-difference increments are nonzero and samples must lie in the domain. No quadratic rate is transferred to damped, frozen or approximate-Jacobian variants without a separate perturbation theorem. |
| NA-10 | Barycentric weights w_j=1/∏_(k≠j)(x_j−x_k); at an exact node return f(x_j), otherwise return (Σw_j f(x_j)/(x−x_j))/(Σw_j/(x−x_j)). Prove the denominator is nonzero in exact arithmetic. Rounded denominator/range failure is explicit. Higher-order Rolle handles distinct nodes; Hermite repeated nodes need the separate multiplicity lemma in NA-13. |
| NA-11 | Specify n+1 Chebyshev roots or n+1 Lobatto nodes, with n=0 treated separately for Lobatto. Prove Λ_n≤C log(n+1)+C′; transfer a concrete best-approximation rate rather than infer convergence from E_n→0 alone, since log(n)E_n need not tend to zero. Complex Runge approximation is optional context, not a premise for the real Runge interpolation example. |
| NA-12 | Inputs are a<b, finite callable f and integer n≥1 (even n≥2 for Simpson); outputs are the stated finite weighted sums with h=(b−a)/n. Midpoint uses interior midpoints, trapezoid half endpoint weights, Simpson weights 1,4,2,…,4,1 times h/3. Each error proof specifies real scalar f and the relevant uniform derivative norm. Rounded quadrature has a separate summation error. |
| NA-13 | m≥1; μ is a finite positive measure w dx with positive-definite degree-m polynomial moment matrix. Node construction is mathematical until a finite root/isolation oracle or root algorithm is supplied. Solve weights by cardinal integrals. Prove repeated-zero Rolle/Hermite remainder and a weighted mean-value theorem to obtain one ξ; exactness and positivity do not supply a computed-node/weight stability result. |
| NA-14 | Inputs a<b, ε>0, finite depth D and finite-evaluation f. Compare child Simpson sum S₂ with parent S using |S₂−S|/15; accept the chosen corrected or uncorrected estimate explicitly. On rejection halve the interval and tolerance, unless D is reached; then return the estimate with cap status. Nonfinite evaluations or unrepresentable midpoints return failure. A depth-D binary tree has at most 2^(D+1)−1 nodes; this proves termination, not accuracy. |
| NA-15 | Explicit tableaux have a_ij=0 for j≥i; on N fixed steps compute stages in increasing i and update y+hΣb_i k_i. All stage points must remain in the declared smooth tube. Nonautonomous expansions use augmented (t,y), not the autonomous formula unchanged. Classical RK4 local O(h⁵) requires the stated four-flow-derivative/Taylor bounds; no P-NUM→NA-15→P-NUM cycle. |
| NA-16 | Normalize α_k≠0; declare k, all coefficients, starting k values and N steps. Implicit solves have a specified branch and a proved small-step uniqueness condition; no undefined root selection. A full Jordan/companion-power lemma handles repeated interior roots. Necessity concerns convergence for every admissible equation and consistent start family, not a single test problem or favorable start. |
| NA-17 | Absolute one-step stability means |R(z)|≤1 with R defined (no pole). For multistep methods demand all roots |ζ|≤1 with simple unit roots and nonvanishing leading coefficient at that z. If terminology uses strict decay instead, the imaginary-axis boundary is treated separately; the adopted A-stability convention uses boundedness on the closed left half-plane. |
| NA-18 | Supply pair orders, p, norm scaling atol_i+rtol_i max(|y_i|,|y_i,new|)>0, safety factor and bounded step multipliers. Zero estimated defect chooses the maximum multiplier. Final steps clip to T, failed rejection at h_min or floating t+h=t returns failure, and every trial consumes the finite budget. Successful completion is a status, not a global tolerance theorem. |
| NA-19 | Supply a strongly continuous well-posed solution semigroup E(t), a dense invariant consistency core and bounds uniform for 0≤j k≤T. Local defects are o(k) uniformly on exact core trajectories; convergence means sup_(j k≤T)||S_k^j x−E(jk)x||→0 for every x. This uniform mode gives pointwise boundedness for UBP/DC; arbitrary pointwise-in-time convergence is insufficient. Projection/reconstruction variants prove their own density and norm bounds. |
| NA-20 | h=1/(N+1), N≥1; A_h uses diag 2/h² and off-diag −1/h², prescribed endpoint rows. Prove the barrier q(x)=x(1−x)/2 gives ||A_h⁻¹||∞≤1/8, hence ||e||∞≤h²||u⁽⁴⁾||∞/96. Any energy-norm alternative fixes its h-weighted scaling. A linear solver residual adds an independent A_h⁻¹r term. |
| NA-21 | Shooting inputs include a finite interval on which all trial IVPs exist; define residual from terminal boundary data, then call the qualified root procedure. The sensitivity supplier requires C¹ coefficients/initial map and a common tube; higher smoothness is needed to invoke NA-09. Collocation declares mesh, basis, residual and chosen solution branch. Local algebraic convergence does not establish branch existence under mesh refinement. |
| NA-22 | Root proposals P-NA-GEO-01…04 below fix partial maps, exact pullback, convex-tube local defect and conditional global trajectory error. For C³ potentials use the finite-regularity matrix identity; the existing smooth symplectomorphism definition only applies to smooth maps. Quadratic-invariant RK proof assumes solvable stages and the stated coefficient identity; it does not imply preservation of an arbitrary Hamiltonian. Fixed-step finite-order energy and analytic/exponential-time results have distinct hypotheses and supplier chains. |
| NA-23 | Variable flux example may fix a uniformly positive scalar a∈C³ and u∈C⁴, exact midpoint face samples, uniform grid and Dirichlet closure; derive the fourth-order remainder of a(x+h/2)(u(x+h)−u(x))/h before differencing. For weaker coefficients or other face approximations supply a new consistency estimate. Discrete Poincaré and h-weighted gradient norms are local numerical suppliers, not continuous PDE estimates applied to grid vectors. |
| NA-24 | Declare κ>0, finite grid/time counts, data rows and arithmetic. For θ<1/2 the linear L² condition is mode dependent; θ≥1/2 uses SPD/negative-semidefinite operator energy. An implicit step solves I+θΔt A_h and proves nonsingularity. Time-order claims require the matching derivatives and initial/boundary compatibility; stability alone supplies no rate. |
| NA-25 | Advection velocity sign selects upwind and inflow. Wave stepping takes both initial displacement and a consistent initial velocity/start row. Endpoint CFL=1 has a repeated Nyquist root in the two-level companion state; separate its growing generalized mode rather than infer uniform power stability from |roots|≤1. The energy-controlled norm and finite-boundary flux are explicit. |
| NA-26 | Mesh widths and time steps both tend to zero, with a fixed finite flux stencil and stated reconstruction; initialize by cell averages converging to u₀ in L¹_loc. Test-function sums include the initial trace. Adjacent reconstructed states approach the same limit by translation continuity and uniform boundedness; uniform continuity of the consistent flux on bounded states permits passage. The scheme has no entropy conclusion without NA-27. |
| NA-27 | Set u₀∈BV(R)∩L∞ with the adopted global/local BV convention and cell averages. State the monotonicity CFL on the full invariant interval; Δt/Δx≥c is retained for the chosen proof. Numerical entropy flux for k is F(u∨k,v∨k)−F(u∧k,v∧k). Space and time translation bounds together provide spacetime L¹_loc compactness; spatial Helly alone does not. Initial entropy trace and CC are carried to uniqueness. |
| NA-28 | Fix reference simplex or affine parallelepiped, degree ℓ, integers 0≤m≤r≤ℓ+1, 1≤p≤∞ and functionals bounded on W^(r,p). Point values require a continuous representative, e.g. r>d/p or the separately proved endpoint case. Prove reference Bramble–Hilbert, reference-cell trace/Green and affine scaling before interpolation/inverse claims. Nonaffine quadrilateral maps need a new mapping theorem. |
| NA-29 | V is Hilbert, form bounded/coercive and V_h finite-dimensional conforming; solve continuous/discrete equations with the same functional. Adjoint regularity ||z||_(H^(1+s))≤C||e||₂ and interpolation of z supply h^s times the energy error; h^(ℓ+1) needs both primal degree-ℓ approximation and s=1. Use CC and the actual C²/W^(1,∞) regularity package. |
| NA-30 | State extended comparison space V+V_h and norm, extensions of form/functional, discrete coercivity or inf-sup, and consistency supremum over nonzero tests. Separate first (conforming perturbation) and second (nonconforming) estimates. Geometry changes require an explicit lift and Jacobian bound. Quadrature algorithm inputs and exactness are supplied by NA-12/13 when used. |
| NA-31 | Connected conforming simplicial mesh and boundary face averages fix the CR space. Continuous H¹₀ Poincaré is insufficient for broken functions: prove a discrete broken Poincaré/jump-control lemma. r>1/2 and dual s>1/2 belong to the chosen normal-trace consistency route; do not infer face normal derivatives from an unqualified H¹ solution. |
| NA-32 | Fix the sign parameter distinguishing symmetric/nonsymmetric forms, coefficient-scaled normal flux, boundary data lifting and mesh-dependent norm containing trace/penalty terms. Penalty is chosen above the locally proved inverse-trace threshold uniformly in h; polynomial-degree dependence is stated. Discrete coercivity and adjoint consistency are separate results. |
| NA-33 | State a single face orientation, jump/average conventions, boundary faces and diffusion weighting; weighted penalties include polynomial degree where needed. Prove the broken norm controls constants via boundary enforcement or a mean-zero condition. A recovered H(div) flux needs its own equilibrium/approximation theorem and is not implied by SIP coercivity. |
| NA-34 | Define V,Q and b, zero-mean pressure and velocity boundary conditions, coercivity on ker b, β>0 and discrete β_h≥β₀>0. Root proposals include Korn, divergence right inverse and Fortin construction. For the promised concrete proof choose the mini P₁+bubble/P₁ pair on shape-regular simplicial meshes in d=2 or 3, with all continuity/boundary restrictions; keep Taylor–Hood as a separate candidate until its mesh/dimension proof is supplied. |
| NA-35 | Algorithm takes finite mesh, estimator, 0<θ≤1 and iteration budget; select a deterministic finite marked set with Σmarked η_K²≥θΣall η_K², refine with the proved closure routine and return mesh/solution/estimator or failure. Infinite AFEM convergence analyzes the sequence, not termination at tolerance. Reliability, local efficiency, oscillation contraction and approximation-class optimality have separate constants/hypotheses. |
| NA-36 | Define W={u∈L²(0,T;V):u′∈L²(0,T;V*)} with dense continuous V↪H, u₀∈H and f∈L²(V*); prove trace and energy pairing before well-posedness for measurable a(t). Spatial semidiscretization is a finite mass-matrix ODE, not an implicit finite instruction by itself. Fully discrete rates specify time sampling/averaging of measurable coefficients; point sampling is not well-defined for an equivalence class. |
| NA-37 | Require dim V_h≥m and δ_h small enough to prevent projection collapse of E_m; constants may depend on fixed m and spectral separation. Multiplicity uses invariant-subspace gap; if a cutoff splits a repeated eigenspace, avoid canonical eigenvector claims. Nonsymmetric operator-norm and primal/adjoint approximation lemmas are optional additional authoring obligations, never consequences of symmetric min–max. |
| NA-38 | Fourier even-N Nyquist conventions, periodic grids, Chebyshev endpoint values, boundary row elimination and basis normalization are part of each finite procedure. Galerkin weighted Sobolev estimates require a named weight/domain/order and a proved projection theorem. Boundary-eliminated collocation matrices require scheme-specific nonsingularity/stability; endpoint clustering or eigenvalue growth does not supply it. |
| NA-39 | Inputs are iid draws of a measurable real Y∈L², integer n≥1; return arithmetic sample mean and, for n≥2, unbiased sample variance with divisor n−1. RMSE is around E Y, not a different biased target. Degenerate σ²=0 is an exact constant case; CLT is conditional on 0<σ² and AC. Sample variance unbiasedness needs only L², while its variance needs higher moments. |
| NA-40 | Define pointwise f and anchored-at-1 HK variation on the closed cube, with point samples in the half-open cube. An L¹ equivalence class alone does not specify sample values. Prove the boundary-compatible multivariate Stieltjes/box decomposition or Jordan approximation lemma, then Koksma–Hlawka. Uniform distribution for Riemann-integrable functions is a distinct theorem and does not require finite HK variation. |
| NA-41 | Define (0,m,d)-net elementary b-adic boxes, independent permutations at every used prefix and digit representation/boundary convention. A finite digit scramble samples a discretized distribution, not exactly a continuous uniform real; use a measure-theoretic random primitive for the exact theorem or bound digital truncation separately. Replicate variance uses independent complete scrambles, not independence of points within one net. |
| NA-42 | Define Y₀ estimating E P₀ and Y_l estimating E(P_l−P_(l−1)), unbiasedly, with independent levels and finite variances. Choose L from bias≤ε/√2, and integer N_l=ceil(2ε⁻² sqrt(V_l/C_l)Σsqrt(V_j C_j)), with at least one draw and an explicit branch for V_l=0. Account for rounding/setup and finest-level cost; α≥1/2 controls it in the stated γ=1 theorem. |
| NA-43 | Exact-line search is an idealized oracle definition whose existence must be proved on the search ray; executable backtracking is finite per step under the descent lemma, or returns a capped failure status. Gradient/Newton outer loops have a budget. Residual bounds require global/domain strong convexity linking x̃ to x*. Computed gradient error δ is an adopted or proved uniform bound, never inferred from stopping tolerance. |
| NA-44 | Define A^#_λ=(A*A+λI)⁻¹A*, λ>0; x† and e satisfy b=Ax†+e. The displayed decomposition is exact for the fixed finite-dimensional A; changing an integral operator to A creates a separate residual before applying the inverse. Truncated SVD includes its cutoff/rank convention and nullspace bias. Parameter heuristics remain algorithms/remarks unless an error theorem is proved. |
| NA-45 | Pick an actual ordered chain of intermediate targets in a common normed space; label every difference once so model/data/approximation terms do not overlap. The triangle bound is pathwise; L²/RMSE follows by Minkowski, whereas a squared-error sum requires orthogonality/covariance hypotheses. NA-43 trial-domain restrictions, NA-36 time-dependent residual restrictions and P-NUM/SDE assumptions propagate to the matching numerical terms only. |
| NA-46 | Fix d≥3 before n→∞ and define the infimum over n-point configurations with the exact star-box convention. The dated 2026-10-14 author-source/status review and exact locators in this pair support retaining the unresolved formulation; do not confuse new growing-dimension tractability with fixed-d asymptotic order. Refresh at separate publication. No local proof completion is expected for the unresolved order; NA-40 definitions alone formulate it, and all outgoing logical uses remain forbidden. |

## Proposed root mathematical suppliers and physics-origin reuse

These are research proposals, not new active items or canonical-plan assignments. Adopt existing root results where their full bodies meet the interface; otherwise author the missing lemma before any listed consumer.

| Proposal | Exact interface and local proof route | Consumers |
|---|---|---|
| P-NA-ARITH-01 | Normal-range correctly rounded square root and a declared real-operation implementation of complex arithmetic. Bound each real elementary operation before complex Cholesky/reflector aggregation. | NA-02, with qualified numerical error terms in NA-44/45. |
| P-NA-JORDAN-01 | Matrix powers for all Jordan blocks: |λ|<1 admits polynomial×geometric decay; |λ|=1 requires size one for power boundedness. Use local Jordan theory or prove an equivalent companion recurrence result. | NA-04/05/16/17/25. |
| P-NA-SENS-01 | On a common finite-time tube, C¹ IVP data give C¹ parameter/initial-data flow dependence; derivative solves the variational integral equation. Prove difference-quotient convergence with uniform derivative continuity and Grönwall. Higher-order variants state their own coefficient derivatives. | NA-21 and its shooting/Newton/error examples. |
| P-NA-CELL-01 | H¹ trace/Green inequalities on a reference simplex/parallelepiped, with affine scaling and degree-dependent polynomial inverse trace; global Lipschitz trace/lifting is a distinct extension. Prove face integration using local coordinate integration/density, not the C¹-domain sharp trace theorem. | NA-28→29/30→31/32/33/35/36/37; NA-34 separately. |
| P-NA-APPROX-01 | Reference-cell Bramble–Hilbert/Deny–Lions approximation, bounded functionals and Sobolev point-evaluation thresholds; establish uniform constants on the declared affine shape-regular family. | NA-28 and all listed FEM descendants. |
| P-NA-BV-01 | Spatial BV selection plus uniform temporal translations yields spacetime L¹_loc subsequential compactness. Rational-point diagonal/Helly and local translation compactness are separate lemmas, retaining bounded states and initial trace. | NA-27. |
| P-NA-EVOL-01 | Dense Hilbert evolution triple trace/integration-by-parts, operator-measurable uniformly bounded/coercive form variational existence and energy uniqueness. Prove by Galerkin/weak compactness or fully formulated BNB, including initial trace; spatial Ritz residual does not commute with the evolution operator. | NA-36 and its fully discrete methods; NA-45 only if a parabolic computation is instantiated. |
| P-NA-GEO-01 | Root finite-regularity phase chart and partial kinetic/potential drift/kick/Verlet definitions: SPD mass, C³ potential, every intermediate state in U. Root symplectic definitions supply the smooth subcase. | NA-22. |
| P-NA-GEO-02 | Exact block-Jacobian pullback for drift/kick/composition, with Hessian symmetry and domain containment. Pure mathematical design already proved in physics/items/prop-cm-drift-kick-and-verlet-preserve-the-canonical-form.md. | NA-22, P-NA-GEO-03/04. |
| P-NA-GEO-03 | C³ potential, compact K in a bounded convex tube with finite field/first/second derivative bounds imply uniform cubic Verlet local defect. Actual proof design: physics/items/lem-cm-verlet-local-truncation-error-is-cubic.md, steps 1.1–5.1. | NA-22 and P-NA-GEO-04. |
| P-NA-GEO-04 | Exact and numerical endpoints retained in a controlled compact tube imply global O(h²) trajectory error at fixed T, with the L=0 branch and signed-time flow composition. Design: physics/items/thm-cm-verlet-finite-time-error-is-quadratic.md, steps 1.1–3.1. | NA-22; optional numerical ledger example in NA-45. |
| P-NA-GEO-05 | Finite-order Hamiltonian-log primitives, modified-flow state defect, gradient/closeness estimates and telescoping energy theorem; prove global primitives or state their topology. The longer analytic chain in physics/ is additional reusable design, not an automatically imported result; its holomorphic-neighborhood/compact-retention hypotheses must be retained if adopted. | NA-22 finite-order energy theorem. Analytic/exponential extension remains separate from the approved finite-order claim. |
| P-NA-QMC-01/02 | Boundary-compatible HK/Stieltjes discrepancy representation; nested-scramble ANOVA and occupancy/gain estimates. Supply actual local proofs from authoritative full texts, since the Owen chapters cite omitted proofs. | NA-40/41→45; NA-46 consumes only the discrepancy definition. |

The physics source bodies above are useful mathematical proof designs despite their storage location. No `physics/` theorem/postulate/experiment/remark is a root logical supplier in this plan. Physical Hamiltonian interpretation, wave/material models, electromagnetic applications and quantum computations may appear only as clearly conditional examples/remarks with the physical assumptions attributed to their physics homes. Existing root Hamiltonian/PDE/Sobolev/linear-algebra/probability items remain the actual eligible shared prerequisites. Inspect any adopted root supplier and all consumers before binding these proposal names to final IDs.

## Self-contained consumed P-NUM interfaces (authoring holds)

The following contracts spell out what Numerical Analysis consumes from the independently owned planned P-NUM pages. They are required draft interfaces, not claims that those pages already prove them. The owner must author/verify each local proof and its actual supplier bodies before releasing the corresponding consumer. Source reading from a packet is not transferred to an unread source or to a different theorem.

**P-NUM-ODE-01/02.** Fix d≥1, T>0, h=T/N, N≥1, a common open time-state domain and a compact solution tube with positive margin. Use Euclidean vector norms and induced operator norms. The exact IVP solution y and every numerical stage/state in the theorem stay in that tube. A one-step map Ψ_h(t,·) is defined there and satisfies, for constants C,L≥0 independent of N and j, ||Ψ_h(t_j,y(t_j))−y(t_(j+1))||≤C h^(p+1) and ||Ψ_h(t_j,v)−Ψ_h(t_j,w)||≤(1+Lh)||v−w||. With initial error e₀≤C₀h^p, prove max_j e_j≤(C₀e^(LT)+C(e^(LT)−1)/L)h^p for L>0, and (C₀+CT)h^p for L=0. Derive Euler's C and L from f∈C¹ with finite field, time-derivative and state-Jacobian bounds on the tube; derive each higher-order tableau's defect separately from its exact derivative/order conditions. For augmented log density ℓ′=−div f, Euler requires f∈C² with bounded relevant derivatives of f and div f, the augmented tube, and a separate state/log-defect estimate; no arbitrary higher order follows from C². Local proof route: Taylor/integral remainder, invariant-tube admissibility and geometric-sum recurrence, using actual root ODE/Taylor/Grönwall suppliers. Matching source design: Hairer–Wanner Ch. III §§III.2–III.5, PDF pp. 4–11/printed 60–67, as recorded by the recovery packet. NA-15 supplies concrete conditions to instantiate the abstract theorem, never a prerequisite of the generic theorem. Consumers: NA-15, NA-18 notation only, NA-21 when numerical shooting is quantified, NA-45 matching ODE terms.

**P-NUM-SDE-01 finite-L² interface.** Fix T>0, state dimension d, Brownian dimension r, and a filtered probability space with r independent Brownian coordinates satisfying standing (H): increments after s are independent of F_s, centered Gaussian covariance (t−s)I_r, and W is adapted. Assume AC as inherited by the Itô/conditional-expectation suppliers. X₀ is F₀-measurable, E||X₀||²<∞, and initial data have the same future-increment independence. For Borel b:[0,T]×R^d→R^d and σ:[0,T]×R^d→R^(d×r), require finite uniform constants L,K,K_t such that

- ||b(t,x)−b(t,y)||+||σ(t,x)−σ(t,y)||_F≤L||x−y||;
- ||b(t,x)||+||σ(t,x)||_F≤K(1+||x||);
- ||b(t,x)−b(s,x)||+||σ(t,x)−σ(s,x)||_F≤K_t(1+||x||)|t−s|^(1/2).

The diffusion norm is Frobenius, not an unspecified operator norm. At h=T/N define X_(j+1)=X_j+h b(t_j,X_j)+σ(t_j,X_j)(W_(t_(j+1))−W_(t_j)); step process X̄_h(t)=X_j on [t_j,t_(j+1)), and continuous interpolation Y_h(t)=X₀+∫₀ᵗb(η_h(s),X̄_h(s))ds+∫₀ᵗσ(η_h(s),X̄_h(s))dW_s, η_h(s)=h floor(s/h), with terminal convention fixed. Prove uniform sup_t E||X(t)||²+sup_j E||X_j||²+E sup_t||Y_h(t)||²≤C(1+E||X₀||²), C depending only on T,d,r,L,K,K_t, and the interpolation increment estimate E||Y_h(t)−X̄_h(t)||²≤C h(1+E||X₀||²). All stochastic integrands are predictable L² under the stated conditions. The exact recursion is a finite probabilistic procedure only with a declared Gaussian-draw primitive; no real/bit implementation cost is inferred.

A finite-L² time-dependent strong theorem may then prove E sup_(t≤T)||X(t)−Y_h(t)||²≤C h(1+E||X₀||²) by subtracting integral equations, applying Cauchy–Schwarz, the continuous-time L² martingale maximal bound and Grönwall. The named root thm-doob-lp-maximal-inequality is discrete time; obtain its continuous-path version on dyadic grids using continuity and monotone convergence before using it, and obtain the vector Itô isometry from coordinate sums. These are explicit proposed local intermediate suppliers. This route is established mathematics awaiting local proof, not the different autonomous source theorem below. The older P-NUM-SDE-01 has only qualitative time modulus; this appendix specifies the consumed contract without editing its owner. Consumers: conditional NA-42 Euler example and NA-45 SDE terms.

**P-NUM-SDE-02 autonomous source variant.** Preserve Higham–Mao–Stuart Theorem 4.4 exactly: autonomous C¹ drift/diffusion, one-sided Lipschitz drift, globally Lipschitz diffusion, polynomial local-Lipschitz drift and uniform finite moments of every order for exact, step and continuous Euler processes. Under those assumptions E sup_(t≤T)||X(t)−Y_h(t)||²=O(h); initial L² alone and time dependence are not imported into this theorem. Proof route: their localization/stopping, moment truncation, interpolation defect, Itô/BDG and Grönwall, with actual local suppliers and AC/(H). Source locator: printed 1054–1056, Assumptions 3.1/4.1/4.2, Lemma 4.3, Theorem 4.4 and proof; packet read 1041–1056 does not cover later unread pages. All-moment bounds are independent authoring obligations even for global-Lipschitz specialization.

**P-NUM-SDE-02 weak interface.** For the chosen bounded measurable payoff φ, assume the backward solution u(t,x)=E[φ(X_T^(t,x))] actually solves (∂_t+L_t)u=0, u(T,x)=φ(x), and lies in C^(2,4) on the closed time interval with all mixed derivatives used in the time/state Taylor expansion bounded by C_u(1+||x||^q), q≥0. Take globally Lipschitz/linear-growth coefficients as above, exact and Euler uniform moments of an order p≥2q+8, and state all time regularity used in the backward equation. A separate theorem must derive this backward regularity from coefficient/payoff assumptions; bounded φ alone is insufficient. Conditional Gaussian expansion of one step cancels the first-order backward-equation term and the odd Gaussian cubic term; the remainder is bounded by C h²(1+||x||^(q+4)). Telescope N steps, use the p-moment bounds, and prove |Eφ(X_T)−Eφ(X_N)|≤C h, with C independent of N. The read HMS strong theorem is not its source proof; the Gaussian Taylor argument is an explicit local authoring design, and a matching authoritative weak-error proof remains to be obtained/read if needed. For NA-42 with globally Lipschitz payoff g, coupling each coarse increment as the sum of its fine increments and a common exact solution gives correction variance O(h) from strong L² convergence; bias exponent α=1/2 follows without the stronger weak theorem. α=1 is conditional on this weak contract for that payoff. The cost O(h⁻¹) counts fixed-dimensional per-step operations/random draws. Consumers: NA-42 and matching NA-45 terms only.

## Inherited logical-target audit and typed replacement holds (2026-10-14)

The named root suppliers are not assumed prerequisite-complete. A separate traversal of their actual alias-resolved `deps` found 94 named consumed/context interfaces, 2,795 reachable root item carriers and 317 shortest supplier-to-forbidden-target paths to 14 distinct `remark` items. The exact paths, explicit NA consumers, conditional context candidates and all planned descendants are in `research/scaffold-audit-2026-10-14/numerical-analysis-dependency-closure.json`. Its paths are source-to-prerequisite, the reverse of supplier-to-consumer scheduling arrows. The 94 seeds include the 66 explicitly named main-plan interfaces, additional exact interfaces in the original prerequisite map, and named stochastic imports. Context-only interfaces are kept separate from asserted logical consumption. Ninety-four reachable `justified_by` targets were also checked separately; their direct target kinds were permitted, but following their actual proof `deps` reached 2,022 carriers and found 131 shortest discharge-to-remark paths affecting 33 definitions. These use 12 of the same 14 forbidden targets and introduce no new target. The receipt binds definition-to-consuming-seed paths, explicit/context NA consumer closures and a shortest mixed `deps`/`justified_by` witness for each discharge finding; it does not reverse discharges into scheduling edges. No open-problem, physical item, unresolved dependency or active unproved/external fallback was reached in this root `deps` closure. These are scoped metadata findings, not a whole-corpus mathematical audit.

A published status or a read Statement does not discharge an inherited remark edge. The native closure remains held until the shared supplier owner surgically reroutes each affected actual premise to a definition or locally proved result and checks its entire supplier/consumer chain. Pure contextual links may move to Remarks with no logical edge, but actual definitions or theorems hidden in a remark require the typed contract below. The smallest existing primitive listed in a row is reusable only after its own closure is repaired; new proposal names are not a shortcut around a remaining forbidden edge. No shared source was edited by this numerical reviewer.

| Forbidden target / proposed typed contract | Exact domain, content and local proof route |
|---|---|
| rem-metric-axiom-conventions / P-NA-TYPE-01, definition + lemma | Keep metric and pseudometric terminology in the existing `def-metric-space`, with finite real-valued d and the declared three axioms. The already proved `lem-metric-nonnegativity` establishes d≥0 from d(x,x)=0, symmetry and triangle: 0≤d(x,y)+d(y,x)=2d(x,y). A norm-induced-metric proposition separately proves d_N(u,v)=N(u−v) satisfies all three axioms using N1–N3 and |−1|=1. The metric/norm Definitions already contain those calculations; their prose naming comparison with this remark is contextual, not a required mathematical premise. Reroute `def-norm-and-normed-space` to those typed primitives and keep the finite-real codomain explicit. |
| rem-sup-conventions / P-NA-TYPE-02, definition + existence lemma | For a nonempty bounded-above S⊂R define its real sup as its least upper bound; analogously inf for nonempty bounded-below S. Prove existence from ordered-field completeness and inf via negation; no real sup exists for ∅ because each upper bound s has a smaller upper bound s−1, or for an unbounded-above S. For a nonempty bounded metric subset A, bound distances by 2r before defining diam A; for point-to-nonempty-set distance, 0 is a lower bound. A supremum metric is on bounded functions on the explicitly nonempty domain, with the separately stated empty-domain zero-space variant. Existing `def-complete-ordered-field`, `def-infimum`, `thm-infimum-property` and `lem-metric-nonnegativity` supply the typed premises; extended-real conventions remain a different explicit definition. |
| rem-real-exponents-deferred / P-NA-TYPE-03, definition + algebra lemma | Retain the full published rational-p norm contract p∈Q, p≥1, positive-base rational powers with 0^p=0, finite sum and positive 1/p; ||·||∞ requires n≥1. Use actual `def-rational-power` and its well-definedness/laws/monotonicity and finite Minkowski directly. Statements for arbitrary real p instead consume the later `def-real-power` and real-power laws plus real-exponent Hölder/Minkowski, never this deferred-reading remark. No real-power theorem is inferred merely from a remark explaining the reading order. |
| rem-heine-criterion-choice-cost / P-NA-TYPE-04, lemma | State at a fixed point c the ε–δ versus all-sequences criterion for real limits/continuity, with AC_ω for the converse as used here. Direct implication substitutes a given sequence into each ε–δ bound. Contrapositive converse chooses x_n with 0<|x_n−c|<1/(n+1) and |f(x_n)−L|≥ε₀ using Countable Choice, then contradicts sequence convergence. The actual `thm-sequential-criterion-for-function-limits` and choice definition supply this result after their closure is checked. Do not claim logical necessity or reverse implication between choice principles from the cost of this proof. `thm-sequential-criterion-for-continuity` must give its local argument or consume this proved lemma, not the cost remark. |
| rem-zero-times-infinity-convention-for-pointwise-products / P-NA-TYPE-05, definition + measurability lemma | Explicitly define a Borel pointwise product on extended reals: finite×finite ordinarily, zero×either infinity is 0, nonzero×infinite and infinite×infinite use the product of signs and magnitude ∞. This is an adopted total pointwise operation, not a limit identity; do not use field laws on R̄ or make ∞+(−∞) total. Prove measurable products by partitioning the domain into finite, zero/infinite and signed-infinite branches and checking inverse images of order rays. Ordinary finite real-product continuity/measurability handles the finite branch. `thm-arithmetic-and-lattice-operations-preserve-measurability` must consume this typed definition/result rather than the convention remark. |
| rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative / P-NA-TYPE-06, definition + invariance lemma | Existing `def-l-p-space-as-a-quotient-by-null-functions` defines [f] by almost-everywhere equality. Prove the support/integral/norm assertion actually used is independent of representatives: representatives differ only on a null set, so their nonzero supports differ modulo that set and measurable integrals/norms agree. Pointwise approximation/sampling requires a specifically named measurable representative, not evaluation of an equivalence class. Sigma-finite essential-support and simple-function density suppliers use this typed quotient/invariance interface; any sequential representative choices retain their original choice assumptions. |
| rem-real-and-complex-normed-space-convention / P-NA-TYPE-07, definition + induced-metric lemma | Define a K-normed space for K=R or C, with real finite N≥0, separation, N(λv)=|λ|N(v) using the matching absolute value/modulus, and triangle inequality; Banach means complete for N(u−v). Realification restricts scalars and preserves that metric. Prove the induced metric and continuity of addition/scalar multiplication from triangle and modulus laws; do not treat a remark's “same language” as a complex-space definition. Real-only suppliers remain literal; complex operator/coercive-form/compactness consumers require this typed complex interface and their own sesquilinear hypotheses. |
| rem-characteristic-function-fourier-stieltjes-convention / P-NA-TYPE-08, proposition | For a Borel probability μ on R and bounded integral definitions φ_μ(t)=∫e^(itx)dμ and μ̂(ξ)=∫e^(−2πixξ)dμ, prove φ_μ(t)=μ̂(−t/(2π)) and μ̂(ξ)=φ_μ(−2πξ). Substitute the frequency pointwise and integrate identical bounded integrands; the frequency substitution is bijective. Characteristic-function uniqueness then consumes actual Fourier uniqueness with its AC hypothesis, not this convention remark. Brownian/stochastic/CLT consumers inherit that choice premise. |
| rem-complex-plane-euclidean-dictionary / P-NA-TYPE-09, proposition | For Φ(a+bi)=(a,b), prove real-linearity, bijectivity and |z−w|=||Φz−Φw||₂ using the actual complex-plane identification and modulus laws. Conclude isometry preserves balls, convergence, Cauchy property and continuity by direct ε–δ substitution, then open/connected sets by the homeomorphism argument. No complex field order or complex-linearity of arbitrary real-linear maps is implied. `def-complex-domain` and index/contour consumers use this typed dictionary. |
| rem-euclidean-topology-dictionary / P-NA-TYPE-10, proposition | For n≥1, prove product and Euclidean norm topologies coincide using the two bounds max_i|x_i|≤||x||₂≤√n max_i|x_i| and coordinate boxes/balls; use actual finite-dimensional norm equivalence for other norms. For n=1 this is the usual |x−y| topology. Existing `lem-product-topology-on-rn`, `lem-real-and-metric-notions-agree` and `thm-all-norms-on-rn-are-equivalent` are the typed source route after closure repair; the Euclidean dictionary remark is only exposition. |
| rem-complex-contours-as-planar-rectifiable-paths / P-NA-TYPE-11, definition + proposition | Define complex paths/length via Φ into R² and polygonal variation of Euclidean distance. Isometry gives equality of each polygonal sum and hence of lengths. Rectifiability is equivalent to BV of both coordinate functions by the actual coordinate-BV theorem. For piecewise-C¹ paths, use the locally proved additive speed-integral formula, including corners/zero-speed segments. The contour definition consumes this typed length interface, not a remark connecting it to planar paths. |
| rem-plane-star-shaped-and-convex-dictionary / P-NA-TYPE-12, definition + lemma | Define star-shaped U⊂C about a by (1−t)a+tz∈U for every z∈U and 0≤t≤1, and convex U by the same segment condition for every z,w∈U. Under Φ these are exactly the real planar definitions by linearity. Convexity gives star-shapedness about each a directly; connectedness is not needed for that implication. Typed Euclidean star-shaped/convex definitions plus the isometry/real-linear identification suffice for difference-quotient/logarithm supplier uses. |
| rem-locally-uniform-convergence-dictionary / P-NA-TYPE-13, definition + lemma | For an open Ω⊂C and a sequence of functions, define locally uniform convergence on a neighborhood of every point and prove equivalence to uniform convergence on every compact K⊂Ω. A closed disc inside Ω supplies the compact set for one direction; a finite subcover of local neighborhoods and maximum of finitely many thresholds proves the other. Empty K is vacuous. The compact-convergence topology is used only with its actual function-space definition; contour parameter-integral holomorphy consumes this typed lemma. |
| rem-semigroup-sign-and-generator-conventions / P-NA-TYPE-14, definition + proposition | With Gx=lim_(t↓0)(T(t)x−x)/t and R(λ,G)=(λI−G)⁻¹, retain the given domain. Put B=−G so u′=Gu is u′+Bu=0; the energy-form Dirichlet operator L_D=−Δ_D therefore generates T(t) through G=−L_D=Δ_D. Prove (G−λI)⁻¹=−R(λ,G) by inverse multiplication and retain signs of powers. A Laplace resolvent integral needs Reλ greater than the declared exponential growth bound, not merely resolvent membership. Generation/exponential-bound uses retain DC; contraction M=1,ω=0 is distinct from general boundedness. Actual generator, resolvent and Laplace-result bodies supply these facts. The continuous heat-semigroup route is optional context for NA-36, and its native inherited closure remains held. |

These replacement contracts retain the mathematical content of the actual remark bodies without allowing remarks to establish new results. Before adoption the same supplier reviewer must inspect every direct predecessor and indirect consumer recorded in the graph receipt, implement the minimal actual-premise/context distinction, supply local proofs where required, and retrace the actual graph. Local proposal availability alone is not repaired closure, native authoring readiness or acceptance.
