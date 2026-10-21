---
id: ex-ip-finite-element-mesh-error-at-zero-solve-residual
kind: example
title: A zero algebraic solve residual leaves a separate finite-element model error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-ip-finite-element-pde-tikhonov
  - thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination
  - def-ip-pde-solver-admissibility-contract
  - def-matching-affine-simplicial-meshes
  - def-reference-finite-element-and-unisolvent-dofs
  - def-ip-nonlinear-tikhonov-functional
  - lem-ip-finite-element-reduced-gradient-from-discrete-adjoint
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
axiom_use: "Countable Choice is assumed only for the Hilbert-space weak-state well-posedness and zero-trace conformity used in step 1.1; the explicit Galerkin calculations are finite and choice-free."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints"
      url: "https://arxiv.org/pdf/2503.13170"
verification:
  precheck: pass
---

## Example

Assume Countable Choice. Let $\Omega=(0,1)^2$ be triangulated by joining its center $O=(1/2,1/2)$ to the four corners, and let $\phi$ be the continuous piecewise-affine nodal basis function that is $1$ at $O$ and $0$ at the corners. Set $w=\phi^2$ and equip $V=H^1_0(\Omega;\mathbb R)$ with the full Sobolev norm. Use the coercive bilinear form
$$
a(v,z)=\int_\Omega(vz+\nabla v\cdot\nabla z)\,dx.
$$
Let $U=L^2(\Omega;\mathbb R)$ and define the bounded rank-one control operator $B:U\to V^*$ by
$$
(Bq)(z):=\left(\int_\Omega q\,dx\right)a(w,z)\qquad(q\in U,\ z\in V).
$$
Take the pointwise admissible box $Q_{\rm ad}=\{q\in U:0\le q\le1\text{ almost everywhere}\}$ and restrict the optimization to its finite-dimensional constant subspace $Q_h=\{\gamma\mathbf 1_\Omega:0\le\gamma\le1\}$. Identify this coefficient line with $\Theta_h=\mathbb R$ and $Q_h=[0,1]$ in the Euclidean coefficient, so $\|\gamma\mathbf 1_\Omega\|_U=|\gamma|$. The weak state $u(\gamma)\in V$ for the control $q=\gamma\mathbf 1_\Omega$ satisfies
$$
a(u(\gamma),z)=(B(\gamma\mathbf 1_\Omega))(z)=\gamma a(w,z)\qquad(z\in V),
$$
and observe $F(\gamma)=\int_\Omega u(\gamma)\,dx$. On the same mesh use the one-dimensional continuous piecewise-affine state space $V_h=\operatorname{span}\{\phi\}$, solve the Galerkin equation with the same right hand side, and write its observation as $F_h(\gamma)=\int_\Omega u_h(\gamma)\,dx$. With datum $y=F(1)=1/6$, reference coefficient $0$, and Tikhonov penalty $\alpha=1$, the exact continuous-objective minimizer on $[0,1]$ is $\gamma_*=1/37$, whereas the finite-element-objective minimizer is $\gamma_h=10375/295028$. They differ even when the Galerkin state and discrete adjoint equations are solved exactly and have zero algebraic residual. The forward mesh discrepancy is separately bounded on the entire admissible interval by
$$
\sup_{0\le\gamma\le1}|F(\gamma)-F_h(\gamma)|=41/750.
$$
To instantiate the status, initialize the algorithm at $q_{\rm init}=\gamma_h$, set $\tau_g=0$, $L=1$, $\tau_u=\tau_p=0$, $\delta=0$, $\kappa=1$, $N_{\rm iter}=1$, $N_{\rm solve}=2$, $N_{\rm eval}=2$, and $N_{\rm backtrack}=1$. Use the exact projection onto $[0,1]$, exact state, adjoint and objective-evaluation routines, zero error certificates and finite valid derivative bounds. Since $\gamma_h\in(0,1)$ and $\Phi_h'(\gamma_h)=0$, the exact discrete projected-gradient residual is zero and the algorithm returns `converged` at step 4 before its discrepancy check. This status certifies only discrete stationarity; the explicit mesh discrepancy is a separate quantity.

The drawing shows the four cells and the interior basis node used in all integrals. The verification uses the affine barycentric coordinate on each exact triangle; it does not infer any value from the drawing.

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (1,1);
  \coordinate (D) at (0,1);
  \coordinate (O) at (0.5,0.5);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw (A)--(O)--(B);
  \draw (B)--(O)--(C);
  \draw (C)--(O)--(D);
  \draw (D)--(O)--(A);
  \fill (O) circle (0.035);
  \fill (A) circle (0.025);
  \fill (B) circle (0.025);
  \fill (C) circle (0.025);
  \fill (D) circle (0.025);
  \node[below left] at (A) {$A$};
  \node[below right] at (B) {$B$};
  \node[above right] at (C) {$C$};
  \node[above left] at (D) {$D$};
  \node[right] at (O) {$O$};
\end{tikzpicture}
```

## Example references

[[def-matching-affine-simplicial-meshes|Matching affine simplex mesh]]

[[def-reference-finite-element-and-unisolvent-dofs|Continuous piecewise-affine finite elements]]

[[def-linear-elliptic-pde-constrained-control-problem|Coercive elliptic weak-state setting]]

[[thm-linear-elliptic-control-state-and-adjoint-wellposedness|State well-posedness under Countable Choice]]

[[thm-zero-boundary-piecewise-polynomials-in-w10p|Zero-boundary conforming polynomials lie in $H^1_0$]]

[[def-ip-nonlinear-tikhonov-functional|Tikhonov functional]]

[[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint|Exact finite-element adjoint gradient]]

[[thm-cauchy-schwarz-in-an-inner-product-space|Cauchy–Schwarz inequality in the Sobolev inner product]]

[[alg-ip-finite-element-pde-tikhonov|Finite-element inversion status]]

[[thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination|Sound discrete convergence status and its scope]]

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*](https://arxiv.org/pdf/2503.13170)

## Facts & Assumptions

**Given:** The unit square, the four-cell mesh, the specified bilinear form and forcing functional, the scalar control coefficient space $\Theta_h=\mathbb R$ with $Q_h=[0,1]$, Countable Choice, the piecewise-affine state space, observation $F(\gamma)=\int_\Omega u(\gamma)$, the data and penalty, and the exact algorithm routines and tolerances specified in the Example.

[A1] Countable Choice means that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] For the bounded Lipschitz domain and bounded coercive form, the state and adjoint equations have unique solutions under Countable Choice ([[def-linear-elliptic-pde-constrained-control-problem]], [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]]).

[F2] A continuous piecewise polynomial with zero boundary facet traces on a bounded polyhedral matching mesh lies in $W^{1,2}_0$ under Countable Choice ([[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F3] On each cell the mesh is affine and the local nodal degree-of-freedom map is unisolvent ([[def-matching-affine-simplicial-meshes]], [[def-reference-finite-element-and-unisolvent-dofs]]).

[F4] For $\alpha>0$, the Tikhonov objective is one half squared data misfit plus $\alpha/2$ times the squared distance from the reference parameter ([[def-ip-nonlinear-tikhonov-functional]]).

[F5] The algorithm's `converged` status tests the exact discrete projected-gradient residual, not the continuous-to-discrete mesh error ([[alg-ip-finite-element-pde-tikhonov]], [[def-ip-pde-solver-admissibility-contract]]).

[F6] In any real inner-product space, $|\langle v,z\rangle|\le\|v\|\|z\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] The algorithm's `converged` status is sound for the exact discrete projected-gradient residual but asserts no mesh convergence or continuous-model accuracy ([[thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination]]).

## Verification

**Given:** The assumptions above and the exact definitions of $\Omega$, $\phi$, $w$, $a$, the state forcing, and the one-dimensional control coefficient.

1.1 The four triangles have area $1/4$. On each triangle $\phi$ is the barycentric coordinate of $O$. For $k=1,2,3$, integration on the reference triangle gives $\int_K\phi^k=|K|\,2/((k+1)(k+2))$; this follows by integrating $(1-x-y)^k$ over $0\le x\le1$, $0\le y\le1-x$. Hence $\int_\Omega\phi=1/3$, $\int_\Omega\phi^2=1/6$, and $\int_\Omega\phi^3=1/10$. Each cell's base is a unit square edge and its altitude from $O$ is $1/2$, so the affine barycentric coordinate has gradient magnitude $2$; therefore $\int_\Omega|\nabla\phi|^2=4$. By [F2], $w=\phi^2\in H^1_0(\Omega)$. Since $|\Omega|=1$, [F6] gives $|\int_\Omega q|\le\|q\|_{L^2}$, and it also gives $|a(w,z)|\le\|w\|_V\|z\|_V$; hence $B$ is a bounded linear map into $V^*$. The same inequality gives $|\int_\Omega v|\le\|v\|_{L^2}\le\|v\|_V$, so the observation is bounded. The form has $a(v,v)=\|v\|_V^2$ and continuity constant $1$, so [F1] applies and gives a unique state. [A1, F1, F2, F3, F6, algebra]

2.1 The exact state is $u(\gamma)=\gamma w$, since substituting it gives $a(u(\gamma),z)=\gamma a(w,z)$ for every $z\in V$; uniqueness from [F1] identifies this as the state map. Therefore $F(\gamma)=\gamma\int_\Omega\phi^2=\gamma/6$. [F1, step 1.1, given, algebra]

2.2 Write the Galerkin state as $u_h(\gamma)=c\gamma\phi$. Testing its weak equation with $\phi$ gives $c\,a(\phi,\phi)=a(\phi^2,\phi)$. Here $a(\phi,\phi)=\int(\phi^2+|\nabla\phi|^2)=1/6+4=25/6$, while $a(\phi^2,\phi)=\int(\phi^3+2\phi|\nabla\phi|^2)=1/10+2\cdot4\cdot(1/3)=83/30$. Thus $c=(83/30)/(25/6)=83/125$, and $F_h(\gamma)=c\gamma\int_\Omega\phi=83\gamma/375$. The scalar Galerkin stiffness $25/6$ is positive, so this state solve is unique and its exact algebraic residual is zero. [given, step 1.1, F3, algebra]

3.1 The exact objective is $\Phi(\gamma)=\frac12(\gamma/6-1/6)^2+\frac12\gamma^2$. Its derivative is $(1/36+1)\gamma-1/36$, so its unique minimizer is $\gamma_*=1/37\in[0,1]$. The discrete objective is $\Phi_h(\gamma)=\frac12(83\gamma/375-1/6)^2+\frac12\gamma^2$. Its derivative is $((83/375)^2+1)\gamma-(83/375)(1/6)$. Since $(83/375)(1/6)=83/2250$ and $(83/375)^2+1=147514/140625$, its unique zero is $\gamma_h=(83/2250)(140625/147514)=10375/295028\in[0,1]$. Both second derivatives are positive, so these stationary points are the unique minimizers on the interval. Moreover $10375\cdot37=383875>295028$, hence $\gamma_h>1/37=\gamma_*$. [F4, step 2.1, step 2.2, algebra]

4.1 For every $\gamma\in[0,1]$, $|F(\gamma)-F_h(\gamma)|=|\gamma|\,|1/6-83/375|\le41/750$, with equality at $\gamma=1$. Thus the forward mesh discrepancy has the explicit bound $41/750$. The scalar Galerkin state matrix is $25/6>0$, and the scalar adjoint matrix is its transpose, so both equations can be solved exactly with zero algebraic residuals. By [F4], [F5] and [F7], the exact discrete reduced gradient at $\gamma_h$ is $\Phi_h'(\gamma_h)=0$. With the algorithm inputs specified in the Example, $\gamma_h$ is interior and $P_{[0,1]}(\gamma_h-\Phi_h'(\gamma_h))=\gamma_h$, so the projected-gradient residual is zero. The state and adjoint solves use the two solve calls, while the projection uses one of the two evaluation calls, leaving the evaluation budget unexhausted at step 4; hence the algorithm returns `converged` before its discrepancy check. This status certifies only discrete stationarity while the continuous model has the different minimizer proved in step 3.1; the mesh bound remains separate. [F4, F5, F7, step 2.2, step 3.1, algebra] ∎
