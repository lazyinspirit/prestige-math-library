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
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
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
dependency_level: 4
---

## Statement

Let $y'=f(t,y)$ on $[0,T]$, with $y:[0,T]\to\mathbb R^d$ having three continuous derivatives. Let $K\subset\mathbb R^d$ be compact with $y([0,T])\subset\operatorname{int}K$, and suppose $f$ is defined on $[0,T]\times K$ and Lipschitz in its state variable there with constant $L$ in the max norm. Let $h_n=t_{n+1}-t_n>0$, $t_0=0$, $t_N=T$, $H=\max_n h_n\to0$, and suppose

$$0<r_{\min}\le r_n:=\frac{h_n}{h_{n-1}}\le r_*<1+\sqrt2\qquad(1\le n<N).$$

Assume $\|Y_0-y(t_0)\|_\infty+\|Y_1-y(t_1)\|_\infty=O(H^2)$. For each step prescribe a closed branch ball $B_{n+1}\subset K$ as in [[alg-variable-step-bdf2-with-selected-implicit-branch]]. Assume there are radii $\eta,\varepsilon>0$, independent of the grid and step index, such that for every sufficiently small $H$ and each $1\le n<N$, whenever

$$\max\{\|Y_n-y(t_n)\|_\infty,\|Y_{n-1}-y(t_{n-1})\|_\infty\}\le\eta,$$

the step equation has exactly one root in $\overline B(y(t_{n+1}),\varepsilon)\subset K$, and $B_{n+1}$ contains exactly one root, which is this same local root selected by the algorithm. Then for sufficiently small $H$ all computed states remain in $K$ and

$$\max_{0\le n\le N}\|Y_n-y(t_n)\|_\infty=O(H^2).$$

The lower ratio bound controls the local residual constant; the upper bound controls the parasitic increment. This is a separate variable-grid theorem and does not follow from the constant-step root condition alone.

## Facts & Assumptions

**Given:** A solution in the sense of [[def-first-order-ode-initial-value-problem-and-solution]], a grid, the variable-step BDF2 recurrence, and the ratio, smoothness, Lipschitz, starter, tube, and branch hypotheses in the statement.

[F1] [[alg-variable-step-bdf2-with-selected-implicit-branch]] defines the step equation and specifies that the unique root in the prescribed ball is the output.

[F2] [[lem-variable-step-bdf2-interpolation-and-local-defect]] gives the exact BDF2 coefficients and bounds the exact unscaled residual by $C h_n^3$ when adjacent ratios stay in a compact subinterval of $(0,\infty)$.

[F3] [[lem-variable-step-bdf2-increment-ratio-recurrence]] gives $q(r_n)=r_n^2/(1+2r_n)\le q_*<1$ under the stated upper ratio bound.

[F4] [[lem-exponential-dominates-one-plus-x]] gives $1+x\le\exp(x)$, and [[thm-exponential-addition-formula]] gives $\exp(x+y)=\exp(x)\exp(y)$.

[A1] For every $t\in[0,T]$ and $u,v\in K$, $\|f(t,u)-f(t,v)\|_\infty\le L\|u-v\|_\infty$.

[A2] There are fixed radii $\eta,\varepsilon>0$ such that, for each sufficiently small grid and every step, each preceding pair within $\eta$ of its exact history gives exactly one root in $\overline B(y(t_{n+1}),\varepsilon)\subset K$; the prescribed ball $B_{n+1}$ also contains exactly one root, and it is this local root.

## Proof

1.1 Put $e_n=Y_n-y(t_n)$ and $d_n=e_n-e_{n-1}$. Subtracting the exact residual in [F2] from the numerical equation in [F1], then using the BDF2 coefficients, gives $(1+2r_n)d_{n+1}-r_n^2d_n=h_n(1+r_n)\bigl(f(t_{n+1},Y_{n+1})-f(t_{n+1},y(t_{n+1}))\bigr)-\tau_n$. [F1, F2, algebra]

2.1 Divide by $1+2r_n$ and use [F3], [A1], $\|e_{n+1}\|_\infty\le \|e_n\|_\infty+\|d_{n+1}\|_\infty$, $(1+r_n)/(1+2r_n)\le1$, and $1+2r_n\ge1$. This gives $\|d_{n+1}\|_\infty\le q_*\|d_n\|_\infty+Lh_n(\|e_n\|_\infty+\|d_{n+1}\|_\infty)+Ch_n^3$. Move the last increment term left; since $Lh_n\le1/2$, $(1-Lh_n)^{-1}\le1+2Lh_n$ and $(1-Lh_n)^{-1}\le2$. Using $\|\tau_n\|_\infty\le Ch_n^3$ from [F2] yields $\|d_{n+1}\|_\infty\le(q_*+2Lq_*h_n)\|d_n\|_\infty+2Lh_n\|e_n\|_\infty+2C h_n^3$. [A1, F2, F3, step 1.1, algebra]

3.1 Choose $A>\max\{1,q_*/(1-q_*)\}$, so $(1+A)q_*<A$, and set $E_n=\|e_n\|_\infty+A\|d_n\|_\infty$. For sufficiently small $H$, $(1+A)(q_*+2Lq_*H)\le A$. Using $e_{n+1}=e_n+d_{n+1}$ in step 2.1 gives a coefficient at most $1+2L(1+A)h_n$ on $\|e_n\|_\infty$ and at most $A$ on $\|d_n\|_\infty$; hence $E_{n+1}\le(1+C_1h_n)E_n+C_2h_n^3$ for constants independent of the grid. [step 2.1, construct, algebra]

4.1 The starter hypothesis gives $E_1=O(H^2)$. Iterate step 3.1 only while the preceding pair is in the local neighborhood of [A2]. The coefficients $C_1=2L(1+A)$ and $C_2$ in step 3.1 can be taken nonnegative. For every subproduct, [F4] gives $\prod_{j=r}^{s}(1+C_1h_j)\le\prod_{j=r}^{s}\exp(C_1h_j)=\exp(C_1\sum_{j=r}^{s}h_j)\le e^{C_1T}$: the unused time $T-\sum_{j=r}^{s}h_j$ is nonnegative, and [F4] gives $\exp(C_1(T-\sum_{j=r}^{s}h_j))\ge1$, which with the addition law proves the last comparison. Expanding the finite recurrence by induction therefore gives $E_n\le e^{C_1T}(E_1+C_2\sum_{j=1}^{n-1}h_j^3)$; here $\sum_jh_j^3\le H^2\sum_jh_j\le TH^2$. These bounds give $\max_nE_n\le C H^2$ up to any first exit, with $C$ independent of the grid. Since $A\ge1$, $\|e_n\|_\infty\le E_n$ and $\|e_{n-1}\|_\infty\le\|e_n\|_\infty+\|d_n\|_\infty\le(1+1/A)E_n$. For sufficiently small $H$, this bound is strictly below $\eta$, so no first exit occurs. At each step [A2] therefore supplies the selected root in $K$, and induction continues through $N$. Finally $\|e_n\|_\infty\le E_n$ proves the claimed maximum error. [A2, F4, step 3.1, algebra] ∎
