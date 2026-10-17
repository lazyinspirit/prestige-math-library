---
id: thm-p0-control-fem-o-h-error
kind: theorem
title: Piecewise-constant control with shape-regular finite elements has O(h) error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - cor-shape-regular-affine-fe-primal-energy-approximation
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - def-matching-affine-simplicial-meshes
  - lem-fem-control-gradient-residual-bound
  - lem-piecewise-constant-control-h1-projection-error
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - thm-linear-elliptic-control-existence-and-variational-inequality
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5, Lemma 1.1 and Theorem 1.2 with complete variational-inequality proof for piecewise-constant controls."
    - title: Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§1, printed pp. 2–3: the distinction between piecewise-constant O(h) control discretization and variational O(h2) discretization."
---

## Statement

Assume Countable Choice and the elliptic control problem of [[def-linear-elliptic-pde-constrained-control-problem]] on a shape-regular affine simplicial mesh family, with cellwise-constant box bounds and P1 conforming state and adjoint spaces. Let $U_h\subset U$ be the cellwise-constant control space and $Q_h=U_h\cap Q_{ad}$. For each $q\in U$, let $u_h(q)\in V_h$ be the chosen affine finite-element state map, and define the finite-element reduced objective on $U$ by
$$
\widehat J_h(q)=\frac12\|Ju_h(q)-u_d\|_H^2+\frac\alpha2\|q\|_U^2.
$$
Let $p_h(q)\in V_h$ be its associated discrete adjoint. Require adjoint consistency for this same state map and objective, namely
$$
D\widehat J_h(q)[r]=(B^*p_h(q)+\alpha q,r)_U\qquad(q,r\in U).
$$
Write $g_h(q)=B^*p_h(q)+\alpha q$ and $g(q)=\nabla\widehat J(q)$. Let $q_*$ be the continuous minimizer and $q_h$ the minimizer of $\widehat J_h$ over $Q_h$. Assume $q_*\in H^1(E)$, the projected adjoints satisfy $\|B^*p_h(q_h)\|_{H^1(E)}\le C_p$ uniformly in $h$, and the exact state/adjoint finite-element gradient error obeys
$$
\sup_{q\in Q_h}\|g_h(q)-g(q)\|_U\le C_g h.
$$
The last bound is supplied by [[lem-fem-control-gradient-residual-bound]] when its state and adjoint approximations are the same $u_h$ and $p_h$ used in $\widehat J_h$ and the stated primal/adjoint P1 approximation errors and every Strang form/load defect are $O(h)$ uniformly over $Q_h$. Then there is a constant $C$ independent of $h$ such that
$$
\|q_h-q_*\|_{L^2(E)}\le C h.
$$

## Facts & Assumptions

**Given:** The unique continuous minimizer and its variational inequality; the discrete objective and adjoint-consistency identity in the Statement; its minimizer on $Q_h$; the cell-average projection $\Pi_h$; $q_*\in H^1(E)$; the uniform projected-adjoint $H^1$ bound; and the gradient error bound in the Statement.

[F1] The continuous gradient $g(q)=\nabla\widehat J(q)$ is strongly monotone: $(g(q)-g(r),q-r)_U=\|S(q-r)\|_H^2+\alpha\|q-r\|_U^2\ge\alpha\|q-r\|_U^2$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[F2] The continuous minimizer satisfies $(g(q_*),v-q_*)_U\ge0$ for all $v\in Q_{ad}$ ([[thm-linear-elliptic-control-existence-and-variational-inequality]]). Since $q_h$ minimizes the differentiable objective $\widehat J_h$ on the convex set $Q_h$, the adjoint-consistency identity gives $(g_h(q_h),v_h-q_h)_U\ge0$ for every $v_h\in Q_h$.

[F3] $\Pi_h q_*\in Q_h$, $\|q_*-\Pi_hq_*\|_U\le C_\Pi h\|q_*\|_{H^1(E)}$, and $q_*-\Pi_hq_*$ is orthogonal to every element of $Q_h$ ([[lem-piecewise-constant-control-h1-projection-error]]).

[F4] The adjoint-consistency identity gives $g_h(q)=B^*p_h(q)+\alpha q$ for the same objective. Its error obeys $\|g_h(q_h)-g(q_h)\|_U\le C_g h$, and $\|B^*p_h(q_h)-\Pi_h(B^*p_h(q_h))\|_U\le C_\Pi h C_p$ ([[lem-fem-control-gradient-residual-bound]], [[lem-piecewise-constant-control-h1-projection-error]]).

[A1] The dual regularity, uniform primal/adjoint approximation, and Strang defects are such that the two bounds in [F4] hold uniformly as $h\downarrow0$.

## Proof

1.1 Put $e=q_h-q_*$. By [F1], $\alpha\|e\|_U^2\le(g(q_h)-g(q_*),e)_U.$ Replace $g(q_h)$ by $g_h(q_h)$ at a cost at most $C_g h\|e\|_U$ by [F4]. The continuous variational inequality in [F2] gives $-(g(q_*),e)_U\le0$. The discrete variational inequality with the feasible test $\Pi_hq_*$ gives $(g_h(q_h),e)_U\le(g_h(q_h),\Pi_hq_*-q_*)_U.$ Since $g_h(q_h)=B^*p_h(q_h)+\alpha q_h$ and $q_h\in Q_h$, orthogonality in [F3] cancels the regularization term. Orthogonality also lets us subtract $\Pi_h(B^*p_h(q_h))$ from the remaining factor. Hence $\alpha\|e\|_U^2 \le C_\Pi^2 C_p\|q_*\|_{H^1}h^2+C_g h\|e\|_U.$ [F1, F2, F3, F4, given, algebra]

2.1 Since every mesh cell is a nondegenerate simplex, $h>0$. Let $t=\|e\|_U/h$ and divide the inequality in step 1.1 by $h^2$ to obtain $\alpha t^2-C_g t-C_\Pi^2 C_p\|q_*\|_{H^1}\le0.$ Thus $t$ is at most the positive root $\frac{C_g+\sqrt{C_g^2+4\alpha C_\Pi^2C_p\|q_*\|_{H^1}}}{2\alpha},$ which is independent of $h$. The resulting upper bound for $t$ is independent of $h$, proving the $O(h)$ estimate. [step 1.1, algebra] ∎

## Remarks

The finite-element contribution is carried by the exact gradient residual bound. For exact geometry and Galerkin forms it reduces to the matching primal and adjoint energy estimates; a variational crime contributes its full Strang form and load defects. The $H^1$ control regularity is essential to the cell-average term.
