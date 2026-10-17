---
id: lem-variable-step-bdf2-interpolation-and-local-defect
kind: lemma
title: "Quadratic interpolation gives the variable-step BDF2 formula and cubic residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, pp. 397–401"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "G. Söderlind, L. Wang, and S. Zhang, On the zero-stability of multistep methods on smooth nonuniform grids, §4"
      url: "https://real.mtak.hu/85237/1/B111_BIT.pdf"
dependency_level: 1
---

## Statement

Let $h_{n-1},h_n>0$, $r_n=h_n/h_{n-1}$, and let $y$ be an exact solution with three continuous derivatives near $t_{n-1},t_n,t_{n+1}$, where $h_j=t_{j+1}-t_j$. The derivative at $t_{n+1}$ of the quadratic interpolant through $(t_{n+1},y_{n+1})$, $(t_n,y_n)$, and $(t_{n-1},y_{n-1})$ is

$$\frac{(1+2r_n)y_{n+1}-(1+r_n)^2y_n+r_n^2y_{n-1}}{h_n(1+r_n)}.$$

Equating this derivative to $f(t_{n+1},Y_{n+1})$ defines the variable-step BDF2 formula

$$\frac{(1+2r_n)Y_{n+1}-(1+r_n)^2Y_n+r_n^2Y_{n-1}}{h_n(1+r_n)}=f(t_{n+1},Y_{n+1}).$$

For an exact vector solution $y'=f(t,y)$ whose third derivative is bounded, the unscaled residual

$$\tau_n=(1+2r_n)y(t_{n+1})-(1+r_n)^2y(t_n)+r_n^2y(t_{n-1})-h_n(1+r_n)y'(t_{n+1})$$

has norm $\|\tau_n\|_\infty=O(h_n^3)$ uniformly whenever $r_n$ stays in a fixed compact subinterval of $(0,\infty)$; the formula and remainder hold componentwise.

## Facts & Assumptions

**Given:** Distinct ordered nodes $t_{n-1}<t_n<t_{n+1}$, their positive step sizes, and the linear multistep coefficient convention in [[def-linear-multistep-method-consistency-order-and-root-condition]].

[F1] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] applies separately to every real coordinate of $y$ on the interval between the nodes. For a component with $|y_i^{(3)}|\le M$, its degree-two remainder at displacement $\delta$ has absolute value at most $M|\delta|^3/6$; the intermediate points may differ by component and node. Taking the maximum of these finitely many component bounds gives the same max-norm estimate, without a common vector remainder point.

## Proof

1.1 Set $s=(t-t_{n+1})/h_n$. The interpolation nodes become $0,-1,-(1+1/r_n)$. Their Lagrange basis derivatives at $s=0$ are respectively $(1+2r_n)/(1+r_n)$, $-(1+r_n)$, and $r_n^2/(1+r_n)$, as follows by differentiating the three quadratic basis products. Since $ds/dt=1/h_n$, the derivative formula in the statement follows. [given, construct, algebra]

1.2 Apply [F1] separately to each component at $t_{n+1}$ through degree two. In the weighted combination $S=(1+2r_n)y(t_{n+1})-(1+r_n)^2y(t_n)+r_n^2y(t_{n-1})$, the constant coefficient is zero; the coefficient of $y'$ is $(1+r_n)h_n$; and the coefficient of $y''$ is $-\tfrac12(1+r_n)^2h_n^2+\tfrac12r_n^2(h_n+h_{n-1})^2=0$. [F1, algebra]

2.1 Let $M$ bound the absolute third derivatives of every component. By [F1], the max norm of the remaining weighted remainders is at most $(M/6)\bigl((1+r_n)^2h_n^3+r_n^2(h_n+h_{n-1})^3\bigr)$. On the fixed compact ratio interval, $h_{n-1}=h_n/r_n$ makes this at most $C h_n^3$ with a uniform finite $C$. The canceled terms in step 1.2 leave exactly these remainders after subtracting the exact derivative term, so $\|\tau_n\|_\infty\le C h_n^3$. [F1, step 1.2, algebra] ∎
