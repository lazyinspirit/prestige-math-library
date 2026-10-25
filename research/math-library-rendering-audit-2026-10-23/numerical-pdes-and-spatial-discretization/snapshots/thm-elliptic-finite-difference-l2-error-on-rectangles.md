---
id: thm-elliptic-finite-difference-l2-error-on-rectangles
kind: theorem
title: Second-order grid L2 error for rectangular Dirichlet flux differences
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rectangular-grid-and-dirichlet-flux-stencil
  - lem-discrete-summation-by-parts-poincare-and-inverse-bound
  - lem-variable-coefficient-flux-stencil-second-order-consistency
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, Numerical Solution of PDEs, complete lecture notes"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§3.2 and §4.1(a), PDF pp. 15–31: discrete stability, summation by parts, discrete Poincaré, second-order C4 residual, and error transfer."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 5: Finite Difference Approximation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
      locator: "Complete PDF, pp. 1–7: Taylor stencil consistency and the distinction between interior and boundary residuals."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 6: General Linear Second Order Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
      locator: "Complete PDF, pp. 1–5: variable-conductivity flux form, the residual identity, and uniform inverse stability."
verification:
  precheck: pass
---

## Statement

Let $\Omega=(0,L_x)\times(0,L_y)$, let $a\in C^3(\overline\Omega)$ satisfy $a\ge a_0>0$, and let $u\in C^4(\overline\Omega)$ solve $-\partial_x(a\partial_xu)-\partial_y(a\partial_yu)=f$. On each grid from [[def-rectangular-grid-and-dirichlet-flux-stencil]], impose the exact sampled boundary values $u^*_{ij}=u(x_i,y_j)$ and solve $(A_h^aU_h)_{ij}=f(x_i,y_j)$ at every interior node. Let $C_x,C_y$ be the derivative constants of [[lem-variable-coefficient-flux-stencil-second-order-consistency]]. Then the discrete solution exists uniquely and, with $e_h=U_h-u^*$,
$$
\|e_h\|_h\le\frac{L_x^2}{a_0}\sqrt{L_xL_y}\left(2C_xh_x^2+2C_yh_y^2\right).
$$
Thus the weighted grid $L^2$ error is $O(h_x^2+h_y^2)$ as both mesh widths tend to zero. This is a pointwise-smooth-solution result; it asserts no error rate for a nonsmooth weak solution.

## Facts & Assumptions

**Given:** $L_x,L_y>0$, $a\in C^3(\overline\Omega)$ with $a\ge a_0>0$, $u\in C^4(\overline\Omega)$ satisfying $-\partial_x(a\partial_xu)-\partial_y(a\partial_yu)=f$, and the exact sampled Dirichlet boundary values on every rectangular grid.

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]]: $A_h^a$ is the negative-divergence operator formed from exact midpoint face coefficients and acts on the interior nodes; $\|\cdot\|_h$ is the weighted interior grid $L^2$ norm.

[F2] [[lem-discrete-summation-by-parts-poincare-and-inverse-bound]]: if every face value is at least $a_0>0$, the homogeneous Dirichlet matrix is invertible and its inverse has weighted grid $L^2$ norm at most $L_x^2/a_0$.

[F3] [[lem-variable-coefficient-flux-stencil-second-order-consistency]]: the sampled exact solution has interior residual bounded pointwise by $2C_xh_x^2+2C_yh_y^2$.

## Proof

1.1 Write $u_h^*=(u(x_i,y_j))$ and seek $U_h=u_h^*+e_h$ with $e_h\in X_{h,0}$. The discrete equations are equivalent to $A_h^ae_h=f_h-A_h^au_h^*$ on the finite-dimensional zero-boundary space. By [F2], $A_h^a$ is invertible, so this equation has exactly one solution; hence the Dirichlet scheme has exactly one solution $U_h$. [given, F1, F2, algebra]

2.1 Define $\tau_h=A_h^au_h^*-f_h$. Then the equation for $e_h$ is $A_h^ae_h=-\tau_h$, and $e_h=0$ at every boundary node because the scheme uses the exact sampled Dirichlet data. By [F3], each interior entry satisfies $|\tau_{h,ij}|\le 2C_xh_x^2+2C_yh_y^2$. [F1, F3, step 1.1, algebra]

3.1 The weighted sum defining $\|\tau_h\|_h^2$ has $(N_x-1)(N_y-1)$ terms, so $h_xh_y(N_x-1)(N_y-1)\le L_xL_y$. Therefore $\|\tau_h\|_h\le\sqrt{L_xL_y}(2C_xh_x^2+2C_yh_y^2)$. [given, F3, step 2.1, algebra]

4.1 Apply the inverse estimate [F2] to $A_h^ae_h=-\tau_h$ and then use step 3.1. This gives the displayed error bound; the derivative constants do not depend on $N_x$ or $N_y$, so the error is $O(h_x^2+h_y^2)$. [F2, step 2.1, step 3.1, algebra] ∎

## Remarks

No choice axiom is used. The estimates use finite-dimensional coercivity, finite sums, and pointwise Taylor remainders. The published Lax–Milgram and Sobolev–Poincaré pages are continuous-theory context; no continuous weak-solvability theorem is used as a discrete stability result.
