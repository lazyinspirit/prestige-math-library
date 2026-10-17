---
id: thm-midpoint-collocation-local-branch-and-error-budget
kind: theorem
title: "Local second-order midpoint collocation error with an algebraic residual budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-midpoint-collocation-residual-for-bvps
  - def-linearized-two-point-bvp-operator-and-conditioning
  - lem-midpoint-bvp-discrete-linearized-inverse
  - thm-banach-fixed-point
  - thm-euclidean-space-complete
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
proof_strategy: contraction
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/nonlinear/"

verification:
  precheck: pass
---

## Statement

Here $C^2$ means continuously differentiable with continuous second total derivatives, and $C^3$ means the same through third derivatives. Let $f,B$ be $C^2$ on open neighborhoods of an exact solution $y^*\in C^3([a,b],\mathbb R^d)$ of the square BVP, and suppose its continuous linearized BVP operator is boundedly invertible. For all sufficiently fine uniform meshes, the normalized midpoint residual $G_h$ has a unique zero $Y_h$ in a fixed-radius maximum-norm ball about the sampled vector $Y^*=(y^*(t_i))$. Its Jacobian at $Y_h$ is invertible with an inverse bound independent of $h$. For every candidate $Y$ in that ball with $\|G_h(Y)\|_\infty\le\varepsilon_{\rm alg}$, its piecewise-linear interpolant $P_hY$ satisfies

$$\|P_hY-y^*\|_\infty\le C(h^2+\varepsilon_{\rm alg}),$$

where $C$ is independent of $h$ and the candidate. This is a local branch result only; it asserts no branch selection outside the ball and no global Newton convergence.

## Facts & Assumptions

**Given:** The square BVP, $f,B\in C^2$ near the solution, $y^*\in C^3$, bounded invertibility of the continuous linearized BVP operator, and a uniform mesh.

[F1] [[def-midpoint-collocation-residual-for-bvps]]: $G_h$ consists of normalized midpoint ODE rows and the boundary row, with maximum Euclidean block norms.

[F2] [[def-linearized-two-point-bvp-operator-and-conditioning]]: the continuous linearized operator is $\mathcal L v=(v\prime-Av,B_1v(a)+B_2v(b))$; the theorem assumes it is boundedly invertible.

[F3] [[lem-midpoint-bvp-discrete-linearized-inverse]]: at the sampled vector $Y^*$, $J_h=DG_h(Y^*)$ is invertible with $\|J_h^{-1}\|_{\infty\to\infty}\le K$ uniformly for small $h$.

[F4] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space into itself has a unique fixed point.

[F5] [[thm-euclidean-space-complete]]: a closed ball in a finite-dimensional normed Euclidean space is complete.

[F6] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^{k+1}$ map has a Taylor expansion with remainder controlled by its next derivative on the segment.

## Proof

1.1 Let $Y_i^*=y^*(t_i)$. On each cell, the centered Taylor expansion of the $C^3$ curve $y^*$ about $t_i+h/2$ gives $(Y_{i+1}^*-Y_i^*)/h=y^{*\prime}(t_i+h/2)+O(h^2)$. Since $y^{*\prime}=f(t,y^*(t))$ and $(Y_i^*+Y_{i+1}^*)/2=y^*(t_i+h/2)+O(h^2)$, bounded first derivatives of $f$ make each normalized interior residual $O(h^2)$ uniformly. The exact endpoint pair makes the boundary block zero; [F2] names the boundedly invertible continuous linearized operator assumed here, and thus $\|G_h(Y^*)\|_\infty\le C_0h^2$. The Taylor remainder bounds are uniform because the derivatives are bounded on a compact neighborhood of the trajectory. [given, F1, F2, F6, algebra]

1.2 On a fixed-radius ball about $Y^*$, all midpoint states and endpoint pairs stay in compact subsets of the domains for sufficiently small radius. Bounded second derivatives of $f$ and $B$ imply a constant $L_G$, independent of $h,N$, such that $\|DG_h(Y)-DG_h(Z)\|_{\infty\to\infty}\le L_G\|Y-Z\|_\infty$ on this ball: every interior row depends on only two node blocks and its nonlinear part is $f$ evaluated at their average, while the linear increment term has constant derivative; the boundary row depends only on the two endpoint blocks. The bounds on each row therefore do not grow with the number of mesh cells. [given, F1, F2, F6, algebra]

2.1 Choose $r>0$ small enough that the closed ball $\overline B_\infty(Y^*,r)$ lies in the nodal domain and $K L_G r\le1/2$. Define $T_h(Y)=Y-J_h^{-1}G_h(Y)$. The mean-value bound from step 1.2 gives $\|T_h(Y)-T_h(Z)\|_\infty\le K L_G r\|Y-Z\|_\infty\le\frac12\|Y-Z\|_\infty$ on the ball. Also $\|T_h(Y^*)-Y^*\|_\infty\le K C_0h^2$, so for small enough $h$ this is at most $r/2$; then $T_h$ maps the ball into itself. It is a contraction on a nonempty complete ball by [F4] and [F5]. [F3, F4, F5, step 1.1, step 1.2, given]

3.1 The contraction theorem gives a unique fixed point $Y_h$ in the ball. Since $J_h$ is invertible, $T_h(Y)=Y$ is equivalent to $G_h(Y)=0$, so this is the unique residual zero there. The fixed-point estimate gives $\|Y_h-Y^*\|_\infty\le2KC_0h^2$. Further, $\|DG_h(Y_h)-J_h\|\le L_G\|Y_h-Y^*\|_\infty=O(h^2)$. For small $h$, $\|J_h^{-1}(DG_h(Y_h)-J_h)\|<1/2$; the geometric-series inverse of $I+J_h^{-1}(DG_h(Y_h)-J_h)$ shows $DG_h(Y_h)$ invertible with inverse norm at most $2K$. [F3, step 1.2, step 2.1, algebra]

4.1 For any candidate $Y$ in the ball, put $e=Y-Y_h$. Taylor's formula and the uniform Jacobian Lipschitz bound give $G_h(Y)=DG_h(Y_h)e+q$ with $\|q\|_\infty\le(L_G/2)\|e\|_\infty^2$. Since both points lie in the radius-$r$ ball, $\|e\|_\infty\le2r$; reduce $r$ initially if needed so $(2K)(L_G/2)(2r)\le1/2$. Using [step 3.1], $\|e\|_\infty\le2K\|G_h(Y)\|_\infty+K L_G\|e\|_\infty^2\le2K\varepsilon_{\rm alg}+\tfrac12\|e\|_\infty$, so $\|e\|_\infty\le4K\varepsilon_{\rm alg}$. The piecewise-linear interpolant is a convex combination of adjacent nodes, hence $\|P_h(Y-Y_h)\|_\infty\le\|e\|_\infty$. The linear interpolant of $Y^*$ differs from $y^*$ by at most $h^2\|y^{*\prime\prime}\|_\infty/8$ on each cell, and $\|P_h(Y_h-Y^*)\|_\infty\le\|Y_h-Y^*\|_\infty=O(h^2)$ by step 3.1. Adding these bounds proves the stated estimate. [F3, F6, step 3.1, given, algebra] ∎
