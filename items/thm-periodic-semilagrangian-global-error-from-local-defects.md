---
id: thm-periodic-semilagrangian-global-error-from-local-defects
kind: theorem
title: "Periodic semi-Lagrangian error is controlled by local foot and interpolation defects"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-semilagrangian-backtracking-on-periodic-grid
  - def-linear-transport-equation-and-its-characteristic-flow
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - lem-periodic-tensor-interpolant-is-convex-and-linf-contracting
  - lem-periodic-tensor-interpolation-hessian-error
  - lem-euler-backward-characteristic-foot-error
  - thm-chain-rule-for-total-derivatives
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
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Fix $T>0$ and a periodic box with grid width $h=\max_j h_j$. Let $u\in C^1([0,T];C^2(\mathbb T^d_\ell))$ solve the nonconservative linear transport equation
$$u_t+b\cdot\nabla u=0,$$
with the periodic $C^1$ velocity and global flow of [[thm-periodic-c1-velocity-has-global-characteristic-flow]]. Consider $N$ equal time steps $\Delta t=T/N$ and node updates
$U_{\boldsymbol i}^{n+1}=(\mathcal J_h U^n)(\widetilde x_{\boldsymbol i}^{\,n}),$
where $\mathcal J_h$ reconstructs a nodal array as a periodic function and $\widetilde x_{\boldsymbol i}^{\,n}$ is a computed backward foot. Suppose constants $\Lambda\ge1$, $C_I\ge0$, and $C_F\ge0$ are uniform over the refinement family and independent of $h,\Delta t,N$. Assume $\|\mathcal J_hV-\mathcal J_hW\|_{L^\infty}\le\Lambda\|V-W\|_{\ell^\infty}$ for all node arrays, the pointwise interpolation defect at each computed foot is at most $C_Ih^{r+1}$ for the exact samples $u^n_{\boldsymbol i}=u(x_{\boldsymbol i},t_n)$, and, for compatible lifts of the computed and exact feet, the foot error satisfies
$\|\widetilde x_{\boldsymbol i}^{\,n}-X(t_n;t_{n+1},x_{\boldsymbol i})\|_2\le C_F(\Delta t)^{q+1}$,
for integers $q,r\ge1$. If $L_u:=\sup_{[0,T]\times\mathbb T^d_\ell}\|\nabla u\|_2$ and $E_n:=\max_{\boldsymbol i}|U_{\boldsymbol i}^n-u(x_{\boldsymbol i},t_n)|$, then, with
$$\delta_h:=C_Ih^{r+1}+\Lambda L_u C_F(\Delta t)^{q+1},$$
$$E_N\le\Lambda^NE_0+\delta_h\sum_{k=0}^{N-1}\Lambda^k.$$
In the contractive case $\Lambda=1$, this becomes
$$E_N\le E_0+T\left(C_I\frac{h^{r+1}}{\Delta t}+L_uC_F(\Delta t)^q\right).$$
For the explicit Euler and tensor multilinear algorithm, [[lem-euler-backward-characteristic-foot-error]], [[lem-periodic-tensor-interpolation-hessian-error]], and [[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]] give $q=r=1$ and $\Lambda=1$. Thus convergence for this branch follows, for example, when $E_0\to0$, $\Delta t\to0$, and $h^2/\Delta t\to0$. No classical advective CFL restriction is used; the joint consistency refinement is still required by this bound.

## Facts & Assumptions

**Given:** A smooth periodic transport solution, a finite time grid, a bounded-stability interpolation operator, a pointwise interpolation defect bound, a certified local backward-foot error, and initial grid error $E_0$.

[F1] [[def-linear-transport-equation-and-its-characteristic-flow]]: for $u_t+b\cdot\nabla u=0$, the spatial characteristic solves $X'=b(t,X)$.

[F2] [[alg-semilagrangian-backtracking-on-periodic-grid]]: the default update is obtained by evaluating the previous grid field at an approximate backward foot and applying periodic multilinear interpolation.

[F3] [[thm-periodic-c1-velocity-has-global-characteristic-flow]]: the exact backward characteristic exists on the full time interval.

[F4] [[thm-chain-rule-for-total-derivatives]]: differentiating $s\mapsto u(X(s),s)$ gives $u_t(X(s),s)+\nabla u(X(s),s)\cdot X'(s)$.

[F5] [[lem-euler-backward-characteristic-foot-error]]: for the default explicit Euler foot, the local error is at most $\frac12(L_xM+L_t)(\Delta t)^2$.

[F6] [[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]: for the default multilinear interpolant, $\Lambda=1$.

[F7] [[lem-periodic-tensor-interpolation-hessian-error]]: for the default interpolant the pointwise defect is at most $\frac18\sum_jh_j^2\|\partial_{jj}u\|_\infty$, so one may take $r=1$ and $C_I=\frac18\sum_j\|\partial_{jj}u\|_\infty$ when $h=\max_jh_j$.

## Proof

1.1 Along the exact characteristic $X(\cdot;t_{n+1},x_{\boldsymbol i})$, [F1] gives $X'=b(t,X)$. The chain rule [F4] therefore gives $\frac{d}{dt}u(X(t),t)=u_t+b\cdot\nabla u=0$. Hence $u(x_{\boldsymbol i},t_{n+1})=u(X(t_n;t_{n+1},x_{\boldsymbol i}),t_n)$. [given, F1, F3, F4, algebra]

2.1 Add and subtract $(\mathcal J_hu^n)(\widetilde x_{\boldsymbol i}^{\,n})$ and $u(\widetilde x_{\boldsymbol i}^{\,n},t_n)$. The operator bound gives a first difference at most $\Lambda E_n$; the interpolation defect contributes at most $C_Ih^{r+1}$; and the spatial Lipschitz bound for $u$ plus the foot error contributes at most $L_uC_F(\Delta t)^{q+1}$. Since $\Lambda\ge1$, this is at most $\delta_h+\Lambda E_n$. Taking the maximum over nodes yields $E_{n+1}\le\Lambda E_n+\delta_h$. [given, F2, F5, F6, F7, step 1.1, algebra]

3.1 Induction on $n$ in the recurrence gives $E_n\le\Lambda^nE_0+\delta_h\sum_{k=0}^{n-1}\Lambda^k$: at $n=0$ the sum is empty, and the recurrence multiplies the preceding finite sum by $\Lambda$ and adds its next term. Taking $n=N$ proves the first bound. [given, step 2.1, induction, algebra]

4.1 If $\Lambda=1$, the sum in step 3.1 is $N=T/\Delta t$, so substituting the definition of $\delta_h$ gives the second bound. The default Euler and tensor multilinear branch has the stated local constants by [F5]–[F7]. Therefore the displayed sufficient refinement conditions make both error terms and the initial error tend to zero. No step uses $\|b\|\Delta t/h\le1$; consistency follows from the two explicit defect terms rather than a classical advective CFL condition. [given, F5, F6, F7, step 3.1, algebra] ∎

## Remarks

For $\Lambda>1$, the geometric sum in the first estimate is not uniformly bounded as $N$ grows. A high-order interpolation or limiter must therefore supply its actual operator bound and local defect before this theorem yields a stable convergence claim. This theorem is for the periodic branch; a nonperiodic boundary branch must separately account for first-hit and boundary-data error as in [[lem-semilagrangian-transverse-first-hit-error]].
