---
id: thm-variable-step-bdf2-order-two-under-ratio-bound
kind: theorem
title: "Variable-step BDF2 is second-order convergent under a uniform ratio bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-interpolation-and-local-defect
  - lem-variable-step-bdf2-increment-ratio-recurrence
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. Söderlind, L. Wang, and S. Zhang, On the zero-stability of multistep methods on smooth nonuniform grids, §4"
      url: "https://real.mtak.hu/85237/1/B111_BIT.pdf"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, Stability and Convergence, pp. 402–409"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
---

## Statement

Let $y'=f(t,y)$ on $[0,T]$, with $y:[0,T]\to\mathbb R^d$ having three continuous derivatives. Let $K\subset\mathbb R^d$ be compact with $y([0,T])\subset\operatorname{int}K$, and suppose $f$ is defined on $[0,T]\times K$ and Lipschitz in its state variable there with constant $L$ in the max norm. Let $h_n=t_{n+1}-t_n>0$, $t_0=0$, $t_N=T$, $H=\max_n h_n\to0$, and suppose

$$0<r_{\min}\le r_n:=\frac{h_n}{h_{n-1}}\le r_*<1+\sqrt2\qquad(1\le n<N).$$

Assume $\|Y_0-y(t_0)\|_\infty+\|Y_1-y(t_1)\|_\infty=O(H^2)$. For each step prescribe a closed branch ball $B_{n+1}\subset K$ as in [[alg-variable-step-bdf2-with-selected-implicit-branch]], and suppose that for every pair of preceding states in $K$ the step equation has exactly one root in $B_{n+1}$. Select that root. Then for sufficiently small $H$ all computed states remain in $K$ and

$$\max_{0\le n\le N}\|Y_n-y(t_n)\|_\infty=O(H^2).$$

The lower ratio bound controls the local residual constant; the upper bound controls the parasitic increment. This is a separate variable-grid theorem and does not follow from the constant-step root condition alone.

## Facts & Assumptions

**Given:** A solution in the sense of [[def-first-order-ode-initial-value-problem-and-solution]], a grid, the variable-step BDF2 recurrence, and the ratio, smoothness, Lipschitz, starter, tube, and branch hypotheses in the statement.

[F1] [[alg-variable-step-bdf2-with-selected-implicit-branch]] defines the step equation and specifies that the unique root in the prescribed ball is the output.

[F2] [[lem-variable-step-bdf2-interpolation-and-local-defect]] gives the exact BDF2 coefficients and bounds the exact unscaled residual by $C h_n^3$ when adjacent ratios stay in a compact subinterval of $(0,\infty)$.

[F3] [[lem-variable-step-bdf2-increment-ratio-recurrence]] gives $q(r_n)=r_n^2/(1+2r_n)\le q_*<1$ under the stated upper ratio bound.

[A1] For every $t\in[0,T]$ and $u,v\in K$, $\|f(t,u)-f(t,v)\|_\infty\le L\|u-v\|_\infty$.

[A2] For each sufficiently small step, the prescribed closed ball $B_{n+1}\subset K$ contains exactly one root for every pair of preceding states in $K$; the algorithm selects this root.

## Proof

1.1 Put $e_n=Y_n-y(t_n)$ and $d_n=e_n-e_{n-1}$. Subtracting the exact residual in [F2] from the numerical equation in [F1], then using the BDF2 coefficients, gives $(1+2r_n)d_{n+1}-r_n^2d_n=h_n(1+r_n)\bigl(f(t_{n+1},Y_{n+1})-f(t_{n+1},y(t_{n+1}))\bigr)-\tau_n$. [F1, F2, algebra]

2.1 Divide by $1+2r_n$ and use [F3], [A1], $\|e_{n+1}\|_\infty\le \|e_n\|_\infty+\|d_{n+1}\|_\infty$, $(1+r_n)/(1+2r_n)\le1$, and $1+2r_n\ge1$. This gives $\|d_{n+1}\|_\infty\le q_*\|d_n\|_\infty+Lh_n(\|e_n\|_\infty+\|d_{n+1}\|_\infty)+Ch_n^3$. Move the last increment term left; since $Lh_n\le1/2$, $(1-Lh_n)^{-1}\le1+2Lh_n$ and $(1-Lh_n)^{-1}\le2$. Using $\|\tau_n\|_\infty\le Ch_n^3$ from [F2] yields $\|d_{n+1}\|_\infty\le(q_*+2Lq_*h_n)\|d_n\|_\infty+2Lh_n\|e_n\|_\infty+2C h_n^3$. [A1, F2, F3, step 1.1, algebra]

3.1 Choose $A>q_*/(1-q_*)$, so $(1+A)q_*<A$, and set $E_n=\|e_n\|_\infty+A\|d_n\|_\infty$. For sufficiently small $H$, $(1+A)(q_*+2Lq_*H)\le A$. Using $e_{n+1}=e_n+d_{n+1}$ in step 2.1 gives a coefficient at most $1+2L(1+A)h_n$ on $\|e_n\|_\infty$ and at most $A$ on $\|d_n\|_\infty$; hence $E_{n+1}\le(1+C_1h_n)E_n+C_2h_n^3$ for constants independent of the grid. [step 2.1, construct, algebra]

4.1 The starter hypothesis gives $E_1=O(H^2)$. Iterating step 3.1 and using $\prod_n(1+C_1h_n)\le e^{C_1T}$ and $\sum_nh_n^3\le H^2\sum_nh_n=TH^2$ gives $\max_nE_n=O(H^2)$. For sufficiently small $H$, every preceding pair stays in $K$, so [A2] supplies the next unique root and induction continues to $N$; $\|e_n\|_\infty\le E_n$ proves the claimed maximum error. [A2, step 3.1, algebra] ∎
