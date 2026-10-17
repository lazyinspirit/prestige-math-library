---
id: ex-mgrit-scalar-diffusion-two-grid-contraction
kind: example
title: "A scalar diffusion mode gives an explicit two-grid MGRIT matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-linear-all-at-once-time-operator
  - lem-mgrit-exact-coarse-elimination
  - alg-mgrit-two-level-cycle
  - thm-mgrit-contraction-implies-residual-and-error-decay
  - def-euler-midpoint-rk4-tableaus
  - def-backward-euler-step-equation
  - def-norm-and-normed-space
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.4, PDF pp. 3–7: time operator, F/C splitting and coarse correction."
    - title: "V. A. Dobrev, Tz. Kolev, N. A. Petersson, and J. B. Schroder, Two-Level Convergence Theory for Multigrid Reduction in Time"
      url: "https://www.unm.edu/~jbschroder/docs/DoKoPeSc2015.pdf"
      locator: "§3.1–3.2, PDF pp. 7–10: explicit two-grid error matrices and contraction estimates."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full lecture notes, slides 57–60: MGRIT coarse correction and FCF relaxation."
---

## Example

Consider the dissipative scalar mode $\dot y=-y$, discretized on four fine steps of length $h=1/4$ by forward Euler, with C-points $0,2,4$. Then the fine-step multiplier is $\alpha=3/4$. On each two-step macro interval, use backward Euler with length $H=1/2$, giving coarse multiplier $\psi=2/3$. For the two-level cycle in [[alg-mgrit-two-level-cycle]] with ideal interpolation/restriction and F-relaxation both before and after coarse correction, the error matrix in the node ordering $(u_1,u_2,u_3,u_4)$ is
$$E=\begin{pmatrix}0&0&0&0\\0&0&0&0\\0&0&0&0\\0&-\frac5{48}&0&0\end{pmatrix}.$$
Its induced $\ell^\infty$ norm is $5/48<1$, so this specified cycle contracts. The calculation is for this scalar mode and cycle only; it implies no mesh-independent MGRIT rate.

## Facts & Assumptions

**Given:** The four-step scalar fine recurrence, the two-step coarse propagator, and the stated F-relaxation cycle.

[F1] [[def-euler-midpoint-rk4-tableaus]]: Forward Euler has $s=1$, $A=(0)$, $b=(1)$, and $c=(0)$.

[F2] [[def-backward-euler-step-equation]]: a backward-Euler endpoint satisfies $z=x+h f(t+h,z)$.

[F3] [[def-linear-all-at-once-time-operator]]: $(A_tv)_1=v_1$ and $(A_tv)_i=v_i-\Phi_i v_{i-1}$ for later time indices.

[F4] [[lem-mgrit-exact-coarse-elimination]]: the exact eliminated coarse operator has Schur complement $S=A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}$.

[F5] [[alg-mgrit-two-level-cycle]]: $P=\begin{bmatrix}-A_{FF}^{-1}A_{FC}\\I_C\end{bmatrix}$, $R=\begin{bmatrix}-A_{CF}A_{FF}^{-1}&I_C\end{bmatrix}$, and the cycle uses F-relaxation and the corresponding coarse correction.

[F6] [[thm-mgrit-contraction-implies-residual-and-error-decay]]: if $\|A_t\|$ and $\|A_t^{-1}\|$ are finite and $\|E\|\le q<1$, then the error after $r$ cycles is at most $q^r\|e^{(0)}\|$, with $q^0=1$.

[F7] [[def-norm-and-normed-space]]: a norm satisfies separation, absolute homogeneity, and the triangle inequality.

[A1] The fine grid has four steps, coarsening factor $m=2$, $h=1/4$, and the product-space norm is $\|e\|_\infty=\max_{1\le i\le4}|e_i|$.

## Verification

1.1 By [F1], each fine Euler step for $\dot y=-y$ multiplies by $\alpha=1-h=3/4$. By [F2], a backward-Euler macro step solves $z=x-\frac12z$, so its multiplier is $\psi=2/3$. [given, F1, F2, A1, algebra]

2.1 In fine order the error operator is $A_t=\begin{pmatrix}1&0&0&0\\-\alpha&1&0&0\\0&-\alpha&1&0\\0&0&-\alpha&1\end{pmatrix}$. In F/C order $F=(1,3)$, $C=(2,4)$, its blocks are $A_{FF}=I$, $A_{FC}=\begin{pmatrix}0&0\\-\alpha&0\end{pmatrix}$, $A_{CF}=\begin{pmatrix}-\alpha&0\\0&-\alpha\end{pmatrix}$, and $A_{CC}=I$. Hence [F4] gives $S=\begin{pmatrix}1&0\\-\alpha^2&1\end{pmatrix}$. [given, F3, F4, step 1.1, algebra]

3.1 F-relaxation maps an error $(e_1,e_2,e_3,e_4)$ to $(0,e_2,\alpha e_2,e_4)$, so the F-row residuals vanish and the ideal restriction in [F5] reduces to the C residual $(e_2,e_4-\alpha^2e_2)$. Solving the practical coarse system $\begin{pmatrix}1&0\\-\psi&1\end{pmatrix}z=(e_2,e_4-\alpha^2e_2)$ gives $z_1=e_2$, $z_2=e_4+(\psi-\alpha^2)e_2$. Subtracting the ideal interpolation [F5] leaves $(0,0,0,(\alpha^2-\psi)e_2)$; post-F-relaxation leaves this vector unchanged. [given, F5, step 2.1, algebra]

4.1 Therefore $E$ has its only nonzero entry in row $4$, column $2$, equal to $\alpha^2-\psi=\frac9{16}-\frac23=-\frac5{48}$. For the norm in [A1], $\|Ee\|_\infty=\frac5{48}|e_2|\le\frac5{48}\|e\|_\infty$, with equality when $e=(0,1,0,0)$. Thus $\|E\|_\infty=5/48<1$. [given, A1, step 3.1, algebra]

5.1 For every $e\in\mathbb R^4$, $\|e\|_\infty=\max_i|e_i|$ is nonnegative and vanishes only when every coordinate is zero; $\|\lambda e\|_\infty=|\lambda|\|e\|_\infty$; and $\|e+f\|_\infty\le\|e\|_\infty+\|f\|_\infty$. Thus the norm in [A1] satisfies [F7]. For any matrix $B$, $\|Bv\|_\infty\le(\max_i\sum_j|B_{ij}|)\|v\|_\infty$ by applying the finite triangle inequality to each row. The row sums of $A_t$ are at most $1+\alpha=7/4$. If $A_tu=w$, forward substitution gives $u_1=w_1$ and $u_i=w_i+\alpha u_{i-1}$, hence by induction $u_i=\sum_{j=1}^{i}\alpha^{i-j}w_j$. Therefore $A_t^{-1}$ has entries $\alpha^{i-j}$ for $i\ge j$ and zero otherwise, with row sums at most $1+\alpha+\alpha^2+\alpha^3=175/64$. Thus $\|A_t\|_\infty\le7/4$ and $\|A_t^{-1}\|_\infty\le175/64$. All hypotheses of [F6] hold with $q=5/48$, so the error after $r$ cycles is at most $(5/48)^r$ times its initial value. [given, A1, F6, F7, step 1.1, step 2.1, step 4.1, algebra] ∎

