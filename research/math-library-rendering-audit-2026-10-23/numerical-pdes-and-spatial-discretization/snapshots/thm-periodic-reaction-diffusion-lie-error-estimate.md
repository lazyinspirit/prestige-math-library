---
id: thm-periodic-reaction-diffusion-lie-error-estimate
kind: theorem
title: Mesh-uniform first-order Lie error for a smooth periodic reaction-diffusion solution
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
aliases: []
deps:
  - alg-exact-lie-reaction-diffusion-step
  - def-periodic-reaction-diffusion-grid
  - def-semilinear-reaction-diffusion-system
  - lem-periodic-fv-grid-spatial-consistency
  - lem-periodic-fv-grid-reaction-diffusion-commutator-bound
  - thm-exact-lie-step-preserves-invariant-rectangle-and-mass
  - thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
  - thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
  - thm-gronwall-integral-inequality
  - lem-xd-finite-matrix-exponential-series
  - thm-ftc-second-part
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the argument uses finite-dimensional variation of constants and scalar Gronwall inequalities.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§9, printed pp. 60–64: Lie splitting, its local commutator defect, and the need for bounds uniform in spatial discretization."
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.6–10.8, PDF pp. 149–153: smooth periodic reaction-diffusion modes and the vector model context."
verification:
  precheck: pass
---

## Statement

Fix $T>0$, a rectangular torus $\mathbb T_L^d$, and $D=\operatorname{diag}(d_1,\ldots,d_m)$ with $d_r\ge0$. Let $F\in C^2(U,\mathbb R^m)$ on an open neighborhood $U$ of a compact reaction-inward rectangle $R$, and let $u\in C^1([0,T];C^4(\mathbb T_L^d;\mathbb R^m))$ solve $u_t=D\Delta u+F(u)$ with $u(x,t)\in R$. For each periodic grid of [[def-periodic-reaction-diffusion-grid]], let $P_hu(t)$ be the samples, and start the exact Lie algorithm [[alg-exact-lie-reaction-diffusion-step]] from $U^0=P_hu(0)$, using the periodic branch and uniform steps $\tau=T/N$. There is a constant $C_T$, depending on $u,F,D,R,T,L,d,m$ but not on the grid widths or $N$, such that
$$
\max_{0\le n\le N}\|U^n-P_hu(t_n)\|_\infty\le C_T(\tau+h_{\max}^2),\qquad t_n=n\tau.
$$
The estimate is for exact reaction and diffusion subflows, a fixed smooth solution, and the periodic centered grid. It gives no error claim for a general finite-volume mesh, nonsmooth solutions, approximate subsolvers, or nonlinear cross-diffusion.

## Facts & Assumptions

**Given:** A smooth periodic solution in the reaction-invariant rectangle, fixed diagonal nonnegative diffusivities, the periodic grids, exact reaction-then-diffusion steps, and a fixed final time $T$.

[F1] [[def-periodic-reaction-diffusion-grid]]: $A_h^{\rm per}$ is the periodic centered positive stencil, $\Delta_h=-A_h^{\rm per}$, and the diffusion generator is $\mathcal A_h=-DA_h^{\rm per}$.

[F2] [[def-semilinear-reaction-diffusion-system]]: the continuous equation is $u_t=D\Delta u+F(u)$ with constant diagonal diffusion and pointwise reaction.

[F3] [[lem-periodic-fv-grid-spatial-consistency]]: the sampled spatial residual $r_h=D(P_h\Delta u-\Delta_hP_hu)$ obeys $\|r_h(t)\|_\infty\le C_{\rm sp}h_{\max}^2$ uniformly in time and grid.

[F4] [[lem-periodic-fv-grid-reaction-diffusion-commutator-bound]]: for the sampled smooth solution, $\|\mathcal A_hP_h(F(u))-DF(P_hu)\mathcal A_hP_hu\|_\infty\le C_{\rm com}$ with a grid-independent constant.

[F5] [[thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass]]: the periodic diffusion evolution matrix has nonnegative entries and row sums one, hence contracts the maximum norm.

[F6] [[thm-exact-lie-step-preserves-invariant-rectangle-and-mass]]: exact Lie steps starting in $R$ remain in $R$.

[F7] [[thm-gronwall-integral-inequality]]: if $w(t)\le A+B\int_0^t w(s)\,ds$ for nonnegative continuous $w$ and constants $A,B\ge0$, then $w(t)\le Ae^{Bt}$; the case $A=0$ gives $w=0$.

[F8] [[alg-exact-lie-reaction-diffusion-step]]: the reaction flow is applied first at each node and the exact periodic diffusion exponential is applied second.

[F9] [[lem-xd-finite-matrix-exponential-series]]: for finite $A$, $E(t)=e^{tA}$ is differentiable, $E'=AE=EA$, and $E(0)=I$.

[F10] [[thm-ftc-second-part]]: a continuous derivative integrates to its endpoint difference on a compact interval.

[F11] [[thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass]]: the exact reaction solution exists for every finite nonnegative time and remains in $R$.

[A1] The stated $C^1_tC^4_x$ regularity, $C^2$ reaction field, and compact range imply uniform bounds on $u_t$, $D^2u$, $DF$, $D^2F$, and the second spatial derivatives of $F(u)$ on $[0,T]\times\mathbb T_L^d$.

## Proof

1.1 Let $Y_h(t)=P_hu(t)$ and $E_h(s)=e^{s\mathcal A_h}$. By [F1]–[F3], the sampled equation is $Y_h'=\mathcal A_hY_h+F_h(Y_h)+r_h$, where $F_h$ applies $F$ at each node and $\|r_h(t)\|_\infty\le C_{\rm sp}h_{\max}^2$. Differentiate $E_h(\tau-s)Y_h(t+s)$ using [F9], then integrate from $s=0$ to $s=\tau$ using [F10]; this gives $ Y_h(t+\tau)=E_h(\tau)Y_h(t)+\int_0^\tau E_h(\tau-s)\bigl(F_h(Y_h(t+s))+r_h(t+s)\bigr)\,ds. $ By [F5], $\|E_h(s)\|_{\infty\to\infty}\le1$. [F1, F2, F3, F5, F9, F10, given, algebra]

1.2 For any two grid states $X,Z$ nodewise in $R$, the reaction flows satisfy $\|\Phi_{F_h}^\tau(X)-\Phi_{F_h}^\tau(Z)\|_\infty\le e^{L_F\tau}\|X-Z\|_\infty$, where $L_F=\sup_R\|DF\|$; this follows by subtracting their nodewise integral equations and applying [F7]. Composing with the diffusion contraction [F5] gives $\|S_{h,\tau}(X)-S_{h,\tau}(Z)\|_\infty\le e^{L_F\tau}\|X-Z\|_\infty$ for the exact Lie map $S_{h,\tau}$. [A1, F5, F7, algebra]

2.1 Write $V_h(s)=\Phi_{F_h}^s(Y_h(t))$ for the nodewise exact reaction flow. By [F8], [F11], and integration of its reaction ODE using [F10], the exact Lie step from $Y_h(t)$ equals $E_h(\tau)Y_h(t)+\int_0^\tau E_h(\tau)F_h(V_h(s))\,ds$. Subtract the identity in step 1.1 and add and subtract $E_h(\tau)F_h(Y_h(t+s))$ inside the integrand. The defect is therefore the sum of $ \int_0^\tau [E_h(\tau)-E_h(\tau-s)]F_h(Y_h(t+s))\,ds, \quad \int_0^\tau E_h(\tau)[F_h(V_h(s))-F_h(Y_h(t+s))]\,ds, \quad -\int_0^\tau E_h(\tau-s)r_h(t+s)\,ds. $ [F8, F10, F11, step 1.1, algebra]

3.1 For a scalar $C^2$ component $g$, two integrations of $g''$ give $g(x+h)-2g(x)+g(x-h)=\int_0^h(h-s)(g''(x+s)+g''(x-s))\,ds$, so the absolute centered second difference divided by $h^2$ is at most $\|g''\|_\infty$. Applying this in each coordinate to $u$ and using [A1] gives $\|\mathcal A_hY_h(t)\|_\infty\le C_u$ independently of the mesh. By [F4], $\mathcal A_hF_h(Y_h)-DF(Y_h)\mathcal A_hY_h$ is uniformly bounded; [A1] bounds $DF$, so $\|\mathcal A_hF_h(Y_h(t+s))\|_\infty\le C_A$ for all $s$ and grids. Since $E_h'(r)=E_h(r)\mathcal A_h$ by [F9] and $E_h$ contracts by [F5], $ \|[E_h(\tau)-E_h(\tau-s)]F_h(Y_h(t+s))\|_\infty \le \int_{\tau-s}^{\tau}\|E_h(r)\mathcal A_hF_h(Y_h(t+s))\|_\infty\,dr \le C_As. $ Thus the first integral in step 2.1 has norm at most $C_A\tau^2/2$. [A1, F1, F4, F5, F9, F10, step 2.1, algebra]

3.2 The reaction path $V_h(s)$ stays in $R$ by [F11], so its time derivative is uniformly bounded by $\sup_R\|F\|$. Also $\|Y_h(t+s)-Y_h(t)\|_\infty\le s\sup\|u_t\|_\infty$. Hence, integrating both time derivatives by [F10], $\|V_h(s)-Y_h(t+s)\|_\infty\le C s$. The mean-value bound for $F$ on the convex rectangle $R$ and contraction of $E_h$ show that the second integral in step 2.1 has norm at most $C\tau^2/2$. The residual term has norm at most $C_{\rm sp}\tau h_{\max}^2$ by [F3] and [F5]. Consequently the one-step defect is at most $C(\tau^2+\tau h_{\max}^2)$ with $C$ independent of grid and step. [A1, F3, F5, F10, F11, step 2.1, algebra]

4.1 Set $e_n=\|U^n-Y_h(t_n)\|_\infty$. By [F6] and the assumed PDE range, both inputs in step 1.2 lie in $R$. Applying that stability estimate and the defect bound of step 3.2 gives $e_{n+1}\le e^{L_F\tau}e_n+C\tau(\tau+h_{\max}^2)$, with $e_0=0$. Iterating, $e_n\le C\tau(\tau+h_{\max}^2)\sum_{k=0}^{n-1}e^{L_Fk\tau}\le CT e^{L_FT}(\tau+h_{\max}^2)$ for $n\tau\le T$. This proves the stated estimate after enlarging $C_T$. [F6, step 3.2, step 1.2, algebra] ∎
