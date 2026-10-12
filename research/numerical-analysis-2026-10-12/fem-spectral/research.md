# Numerical analysis: variational, FEM, spectral and fluid methods

This dossier surveys variational PDE discretization, finite elements, spectral methods, adaptive refinement, mixed/Stokes methods, and parabolic FEM. It records mathematical hypotheses and proof routes so later theorem designs can import the local functional-analysis and PDE results precisely. It is research evidence only; no production library carrier is authored here.

## Main findings

The externally established core is classical and broad: coercive Galerkin methods are quasi-optimal; conforming polynomial FEM has mesh-regularity-dependent approximation rates; duality improves the (L^2) rate only to the extent that the adjoint problem is smoother; mixed methods require a uniform discrete inf-sup condition; and nonconforming methods need stability plus consistency control. These are theorem families with substantial hypotheses, not one general “FEM convergence” fact.

The local library already supplies much of the continuous-functional-analytic base: Sobolev spaces and zero-boundary closures, Poincare, Lax–Milgram, weak Poisson solvability, selected (H^2) regularity, Rellich compactness, trace, and compact-resolvent elliptic spectral theory. I found no local finite-element mesh or element contract, interpolation/error estimate, Céa/Strang theorem, quadrature estimate, adaptive estimator, mixed inf-sup/Fortin/Stokes pair, parabolic Galerkin result, or numerical eigenproblem convergence result. The exact published suppliers and their limits are listed in [prerequisites.json](prerequisites.json).

The 3D global Navier–Stokes smoothness problem is separate from Stokes well-posedness, local-in-time smooth solutions, 2D global regularity, small-data global results, Leray weak existence, partial regularity, and pseudospectral computations. The official CMI statement gives four alternatives A–D. The fetched CMI problem page says “Active.” Its 2026 announcement says CMI is sharing excitement surrounding an announcement that the problem has apparently been settled and says, “The process is deliberately unhurried, but we will provide updates.” The article supplies no proof artifact, submitter, or identification of which alternative is claimed. The announcement is pending evidence, not a verified theorem.

## Elliptic Galerkin and conforming FEM

For a bounded coercive form (a:V\times V\to\mathbb K), the weak problem (a(u,v)=F(v)) has a unique solution by Lax–Milgram. Restricting the trial and test space to (V_h\subset V) gives Galerkin orthogonality (a(u-u_h,v_h)=0). If (a) is bounded with constant (M) and coercive with constant α, testing the error against (u_h-v_h) gives Céa’s estimate

\[
\|u-u_h\|_V\le (M/\alpha)\inf_{v_h\in V_h}\|u-v_h\|_V.
\]

In a symmetric energy inner product the Galerkin solution is the best approximation. For a non-Hermitian coercive form the same route gives quasi-optimality with the (M/\alpha) factor. The proof does not itself give an (h)-rate; that enters through a separate interpolation theorem.

The source mesh assumptions are a family of affine element maps with uniform shape regularity, exact mesh coverage, matching faces for the standard results, and conformity where the argument needs (V_h\subset V). On a shape-regular cell (K), a local interpolation result of order (r\le k+1) has the form
\[
|v-I_Kv|_{W^{m,p}(K)}\le C h_K^{r-m}|v|_{W^{r,p}(K)},\qquad 0\le m\le r,
\]
for a degree-(k) element with polynomial reproduction and a bounded reference-cell interpolation functional. Scaling, a reference-domain Bramble–Hilbert/Deny–Lions argument, and bounded cell-map condition numbers produce the rate. Inverse inequalities and discrete trace estimates go in the opposite direction: they use finite-dimensional polynomial spaces and shape regularity, not additional smoothness of the exact solution. Point-evaluation Lagrange interpolation has a Sobolev embedding threshold; averaged Clément/Scott–Zhang or (L^2)-projection operators handle lower regularity with their own boundary and stability assumptions.

For (H^1)-conforming degree (k) Poisson FEM, (u\in H^{1+r}), (0\le r\le k), gives the energy error (O(h^r)). The Aubin–Nitsche step solves an adjoint problem with right-hand side (e=u-u_h\in L^2). If the adjoint gains (s\in(0,1]) derivatives, the (L^2) estimate gains (h^s), yielding (O(h^{r+s})); the textbook rate (h^{r+1}) requires full (H^2) dual regularity. This distinction is essential on reentrant polygons or polyhedra. The local (H^2) supplier is limited to bounded (C^2) domains and Lipschitz principal coefficients; the local corner counterexample shows why (H^2) cannot be silently assumed on a general Lipschitz domain.

For a quadrature or geometry approximation, exact Galerkin orthogonality is replaced by a consistency defect. The Strang route needs a uniformly stable discrete form, a comparison norm containing the exact and discrete spaces, a bounded consistency defect, and approximability. The 2019 notes’ quadrature estimate illustrates that the rate depends on quadrature exactness/order, polynomial degree, coefficient regularity and a mesh-size threshold. A rate statement without those conditions would overstate the source.

## Nonconforming and discontinuous methods

Crouzeix–Raviart (P_1) functions are piecewise affine with continuous face averages, not pointwise continuity. The discrete energy is the broken-gradient seminorm; zero boundary face means and matching-cell continuity of averages make it a norm. The energy proof uses local interpolation, a discrete Poincare estimate, jump bounds from local Neumann liftings, a consistency defect, and Strang’s abstract estimate. For the source’s Poisson theorem, the exact solution is assumed (H^{1+r}) with (r>1/2), ensuring the normal-gradient traces needed on faces. The L2 estimate uses a separately assumed elliptic smoothing exponent (s>1/2).

Nitsche weakly enforces Dirichlet data in an (H^1)-conforming space that does not satisfy the essential boundary trace. The consistency term and a penalty γ₀/h_F yield coercivity only above the inverse-trace threshold. Symmetric Nitsche adds the adjoint-consistency term; the (L^2) proof otherwise loses a half-order when only the boundary consistency error is controlled. SIP-DG uses a broken polynomial space, symmetric face fluxes and jump penalties γ₀/h_F. Its proof chain is exact elementwise consistency, discrete trace/inverse estimates for coercivity, bounded residual consistency, Strang quasi-optimality, then adjoint consistency and dual regularity for (L^2). The sources also give local numerical fluxes and equilibrated (H(\mathrm{div})) recovery, but these remain separate theorems.

## A posteriori estimates and adaptivity

For a second-order divergence-form equation, element residuals and normal-flux jumps give the estimator
\[
\eta_h^2=\sum_K h_K^2\|R_K\|_{L^2(K)}^2+\sum_{F}h_F\|J_F\|_{L^2(F)}^2.
\]
Reliability follows from the residual representation, Galerkin orthogonality, local interpolation and trace estimates. Local efficiency uses interior/face bubble test functions; source/data oscillation is unavoidable unless the residual is already polynomially resolved. Coefficient jumps add face oscillation terms unless the coefficient is continuous or the estimator is modified.

Dörfler bulk marking plus a conforming refinement rule with interior-node and element-size reduction properties yields error reduction for the symmetric model. Oscillation marking is needed for rough data. Nonsymmetric convection breaks Pythagorean orthogonality; the source proves quasi-orthogonality only when the initial mesh is sufficiently fine compared with the convection scale, then contracts a combined error/oscillation quantity. The optimal-complexity proof has stronger assumptions than convergence: the first theorem is for P1 Laplace with piecewise constant data and an approximation class; the generalized coefficient-dependent complexity theorem is stated but its proof is deferred to another reference. No universal adaptive optimality claim follows from these notes.

## Mixed methods and incompressible Stokes

The abstract mixed system is
\[
a(u,v)+b(v,p)=F(v),\qquad b(u,q)=G(q).
\]
In the reflexive-space Babuška–Brezzi theorem, well-posedness requires (i) an inf-sup/isomorphism condition for (a) on κer(B) plus the adjoint kernel condition, and (ii) a constraint inf-sup β>0. If (a) is coercive on κer(B), condition (i) follows. In a conforming discrete pair, use the corresponding conditions on κer(B_h) and (b|_{V_h\times Q_h}), uniformly in (h). A Fortin operator Π_h satisfying (b(Π_hv-v,q_h)=0) and bounded uniformly in (V) transfers the continuous LBB condition to the discrete one.

For Stokes, (V=H^1_0(D)^d), (Q=L^2_0(D)) for full Dirichlet boundary (or (L^2(D)) with appropriate mixed boundary/flux compatibility), (a) is the viscous strain form, and (b(v,q)=-(q,\nabla\cdot v)). Korn gives coercivity and a continuous right inverse of divergence gives the continuous inf-sup. A discrete velocity is generally only weakly divergence-free; (\ker B_h\subset\ker B) is an extra property associated with exact divergence-conforming designs and can ensure pressure robustness. The mixed error estimate carries (1/\beta_h) in the pressure bound and may carry a pressure-approximation term in the velocity estimate when the discrete kernel is not a subspace of the continuous kernel.

The reviewed stable pairs are not interchangeable without their mesh hypotheses. Taylor–Hood (P_2/P_1) is stable under the source’s simplicial assumptions (in 3D, every cell has enough interior edges and at most one boundary face in the stated argument); (P_k/P_{k-1}), (k\ge2), is cited stable in dimensions two and three. The mini ((P_1+\text{bubble},P_1)) pair uses bubble moments to construct a Fortin map. Scott–Vogelius ((P_k,P_{k-1}^{\rm disc})) is stable only on specified quasi-uniform nonsingular or barycentrically refined meshes for the listed degrees. The ((P_2,P_0^{\rm disc})) result stated here is two-dimensional. CR/P0 has a commuting divergence interpolant and first-order error, but is not globally H(div)-conforming. By contrast, Q1/P0 and P1/P1 exhibit checkerboard pressure modes; P1/P0 can lock. Pressure-space truncation, dimension and macroelement checks must be explicit.

## Parabolic FEM and time discretization

The natural continuous setting is an evolution triple (V\hookrightarrow H\simeq H^*\hookrightarrow V^*) with (u\in L^2(0,T;V)), (u_t\in L^2(0,T;V^*)), hence (u\in C([0,T];H)). If (a(t;u,v)) is measurable, uniformly bounded and uniformly coercive, the space-time bilinear form satisfies BNB and gives a unique weak solution with a stability estimate. Heat energy bounds come from testing by (u), and stronger bounds by (u_t) need the corresponding regularity/forcing assumptions.

For spatial semidiscretization, the Ritz map (R_h) satisfies (a(R_hu,v_h)=a(u,v_h)); this gives the commuting identity (A R_h=Q_h A) and the error equation
\[
L_h(u_h-R_hu)=Q_h(I-R_h)u_t.
\]
Energy stability then bounds the discrete component by the initial projection error and the (H^{-1}_h)-norm of the projected consistency term. A dual backward parabolic problem gives (L^2) superconvergence only under smoothing and solution regularity. Time discretization by Euler/CN is a separate ODE/Rothe analysis; cG(r) and dG(r) in time have their own test spaces, jump terms, initial-data treatment and temporal approximation assumptions. The local analytic-semigroup suppliers cover continuous heat flow, not these FEM error theorems.

## Elliptic eigenproblems and spectral methods

For a symmetric coercive form with compact embedding (V\hookrightarrow L^2), the solution operator is compact, self-adjoint and positive. The local continuous supplier chain already supplies an eigenbasis and Courant–Fischer min-max. In conforming symmetric FEM, the generalized matrix problem (A_hU=\lambda_hM_hU) has positive real eigenvalues; min-max gives λ_{hm}\geλ_m. A fixed-index eigenvalue error is bounded by a constant times the square of the best energy approximation on the first m-dimensional eigenspace; smooth eigenfunctions can yield twice the H1 rate. For multiple eigenvalues, compare eigenspaces rather than selecting an arbitrary eigenvector. Duality again needs an adjoint regularity index.

For nonsymmetric or nonconforming schemes, the solution operators must converge in operator norm to a compact limit. The source also requires uniform discrete stability, an extended comparison form, primal and adjoint orthogonality/consistency, and best approximation. Eigenvalue convergence involves generalized eigenspaces, algebraic multiplicity, ascent and both primal/adjoint regularity exponents. These conditions are not supplied merely by the continuous compact spectral theorem.

The spectral source’s collocation chapter gives explicit Chebyshev/Fourier differentiation matrices and BVP boundary elimination. Its spectral-Galerkin chapter uses compact orthogonal-polynomial combinations to encode boundary conditions and can produce sparse/stiffness-structured matrices. Weighted Jacobi projection and Gauss–Lobatto interpolation rates are (N^{l-m}) in the specified weighted Sobolev norms. Exponential convergence is supported for analytic data, not arbitrary nonsmooth functions. Fourier differentiation presumes periodicity; endpoint clustering makes explicit stability steps severe (second derivative spectral radius grows like (N^4) in the cited Chebyshev experiments). A spectral algorithm or observed exponential rate is not a theorem without its function class, boundary and quadrature hypotheses.

## Navier–Stokes boundary and exact CMI evidence

The official Fefferman statement formulates (1)–(3) for incompressible velocity/pressure and lists exactly: A, global unforced smoothness on ℝ³; B, the periodic-torus analogue; C, forced breakdown on ℝ³; D, forced breakdown on the periodic torus. Its statement separately describes 2D global regularity, 3D small-data global regularity, arbitrary-data local smooth solutions, Leray weak existence, and CKN partial regularity. Those results do not settle A–D. The Navier–Stokes numerical methods in the spectral notes and MIT lecture are approximation procedures for the equations and carry no global regularity implication.

The official CMI current problem page fetched 2026-10-12 has HTTP 200 and says “Active.” The CMI announcement page is separately cached; its first sentence is paraphrased in [sources.json](sources.json), and the exact sentence “The process is deliberately unhurried, but we will provide updates.” is recorded there. The article does not supply a proof file, name a submitter, or identify an A–D alternative. Therefore the status record retains both facts: the official problem page says Active; the announcement reports an apparent settlement under a deliberately unhurried process. The proposed `op-` candidate in the coverage and prerequisites files has no logical-supplier dependencies.

## Local imports and design boundary

Published local inputs already inspected include `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `thm-poincare-inequality-for-w-one-p-zero`, both bounded-domain zero-extension and extension-domain Rellich results, `thm-sharp-trace-theorem-for-w-one-p`, `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`, `thm-global-h-two-dirichlet-regularity`, its uniqueness-dependent corollary and corner counterexample, plus the symmetric elliptic operator, compact resolvent, discrete eigenbasis, min-max and compact self-adjoint spectral theorem. The local H2 theorem has C2-domain and coefficient assumptions; its (L^2) term is removed only under a uniqueness/invertibility hypothesis. The local Rellich theorem for (W^{1,p}_0\to L^p) needs only bounded open Ω but has its stated choice assumptions; the full (W^{1,p}\to L^p) theorem requires an extension domain.

Local analytic heat-semigroup results are useful continuous suppliers but do not give parabolic FEM. Existing results should be imported with their own exact domains and assumptions; source books/notes are evidence for designing new proof contracts, not logical dependency edges. No numerical carrier or production prose was authored in this research packet.
