---
id: thm-phase-field-convex-splitting-step-existence-and-energy
kind: theorem
title: Existence, uniqueness, mass conservation, and energy decay of a convex-splitting step
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-phase-field-convex-splitting-backward-euler
  - def-phase-field-discrete-realizations
  - lem-phase-field-neumann-laplacian-kernel-and-gauge
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: No choice axiom is used; minimizers are attained in finite-dimensional spaces by coercivity and finite-dimensional compactness.
sources:
  references:
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§2.1, equations (2.1)–(2.2), PDF pp. 2–3: the convex-splitting energy inequality and minimization interpretation. The proof below supplies the full argument for the selected discrete realizations."
    - title: Jing Guo, Cheng Wang, Steven M. Wise, and Xingye Yue, An H2 convergence of a second-order convex-splitting finite difference scheme for the three-dimensional Cahn–Hilliard equation, Communications in Mathematical Sciences 14 (2016), 489–515
      url: https://www.intlpress.com/site/pub/files/_fulltext/journals/cms/2016/0014/0002/CMS-2016-0014-0002-a008.pdf
      locator: "§1, equation (1.4), PDF pp. 489–490, for the first-order Cahn–Hilliard convex-splitting recurrence; §2.2, Theorems 2.2–2.3, PDF pp. 493–494, for the related strict-convexity and modified-energy route."
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 10 §§10.1–10.2, printed pp. 63–68, for the Neumann finite-volume mean-zero compatibility and constant-kernel argument."
verification:
  precheck: pending
---

## Statement

Use the finite-dimensional realization and the hypotheses of [[alg-phase-field-convex-splitting-backward-euler]]. Assume $P_{c,h}$ is convex and coercive on $X_h$, and $P_{e,h}$ is differentiable and convex. For every $u^n$, $M>0$, and $\tau>0$, both branches have a unique minimizer. Their first-order conditions are exactly
$$\frac{u^{n+1}-u^n}{\tau}=-M\mu^{n+1}\quad\text{(Allen–Cahn)},$$
$$\frac{u^{n+1}-u^n}{\tau}=-M A_h\mu^{n+1}\quad\text{(Cahn–Hilliard)}.$$
The Cahn–Hilliard branch conserves $\langle u^n,\mathbf1\rangle_h$. With $\mathcal E_h$ as in the algorithm,
$$\mathcal E_h(u^{n+1})+M\tau\|\mu^{n+1}\|_h^2\le\mathcal E_h(u^n)\quad\text{(Allen–Cahn)},$$
$$\mathcal E_h(u^{n+1})+M\tau\langle A_h\mu^{n+1},\mu^{n+1}\rangle_h\le\mathcal E_h(u^n)\quad\text{(Cahn–Hilliard)}.$$
For the quartic split in [[def-phase-field-gradient-flow-and-double-well]], the required convexity and coercivity hold for both realizations.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space, $A_h$, the convex energy components, a previous state, $M>0$, and $\tau>0$ as in the Statement.

[F1] [[alg-phase-field-convex-splitting-backward-euler]]: the Allen–Cahn objective is $J_{AC}$ and the Cahn–Hilliard objective is $J_{CH}$ on the fixed-mean affine set; the discrete energy is $\frac\kappa2\langle A_hu,u\rangle_h+P_{c,h}(u)-P_{e,h}(u)$.

[F2] [[lem-phase-field-neumann-laplacian-kernel-and-gauge]]: $A_h$ is self-adjoint and nonnegative, its kernel is the constants, and $A_h^\dagger$ is the inverse on the mean-zero subspace.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous function on a nonempty compact finite-dimensional sublevel set attains its minimum.

[F4] [[def-phase-field-discrete-realizations]]: $F_c(s)=s^4/(4\varepsilon^2)+s^2/(2\varepsilon^2)$ has $F_c''(s)=(3s^2+1)/\varepsilon^2>0$, and $F_e(s)=s^2/\varepsilon^2-1/(4\varepsilon^2)$ has $F_e''(s)=2/\varepsilon^2>0$.

## Proof

1.1 In either realization, the quartic leading part $Q_{4,h}$ of $P_{c,h}$ is continuous and strictly positive on the unit sphere of any fixed norm on $X_h$: it is a positive weighted sum of $u_K^4$ in the finite-volume branch and $\int_0^L v^4$ in the conforming branch, which is positive for every nonzero state. The sphere is compact, so [F3] gives $c_h:=\min_{\|u\|=1}Q_{4,h}(u)>0$. Homogeneity gives $Q_{4,h}(u)\ge c_h\|u\|^4$. The formulas in [F4] show that the remaining quadratic term in $P_{c,h}$ is nonnegative, so $P_{c,h}$ is coercive. The second directional derivatives of the two potential functionals are the corresponding weighted sum or integral of $F_c''(u)w^2$ and $F_e''(u)w^2$; [F4] makes them nonnegative, so both are convex. Thus both quartic realizations satisfy the coercivity and convexity assumptions. [F1, F3, F4, given, algebra]

1.2 The Allen–Cahn objective is continuous and coercive: its positive quadratic term is nonnegative, $P_{c,h}$ is coercive, and the remaining term is linear. For any fixed trial value, a nonempty sublevel set is closed and bounded, hence compact in the finite-dimensional space; [F3] gives a minimizer. The quadratic term $\frac1{2M\tau}\|v-u^n\|_h^2$ is strictly convex, while the remaining nonlinear and quadratic terms are convex by [F2] and the hypotheses, so the minimizer is unique. [F1, F2, F3, given, algebra]

1.3 Differentiating $J_{AC}$ in an arbitrary direction $w$ gives $\langle (u^{n+1}-u^n)/(M\tau)+\kappa A_hu^{n+1}+\nabla_hP_{c,h}(u^{n+1})-\nabla_hP_{e,h}(u^n),w\rangle_h=0$. Since this holds for every $w$, the vector inside the pairing is zero; multiplying by $-M$ gives the stated Allen–Cahn recurrence. [F1, step 1.2, algebra]

2.1 The Cahn–Hilliard affine set is nonempty because it contains $u^n$. Its objective is continuous and coercive on that affine set by coercivity of $P_{c,h}$ and nonnegativity of the $A_h$ quadratic term. The inverse quadratic term is strictly positive on every nonzero mean-zero direction by [F2], so $J_{CH}$ is strictly convex on the affine set. The compact-sublevel argument of step 1.2 and [F3] therefore gives a unique minimizer. [F1, F2, F3, step 1.2, given, algebra]

2.2 At the Cahn–Hilliard minimizer, the directional derivative vanishes for every mean-zero direction $w$. Thus $\mu^{n+1}+(M\tau)^{-1}A_h^\dagger(u^{n+1}-u^n)$ is orthogonal to the mean-zero subspace and is therefore constant. Applying $A_h$ and using [F2] gives $(u^{n+1}-u^n)/\tau=-MA_h\mu^{n+1}$. The affine constraint itself gives $\langle u^{n+1},\mathbf1\rangle_h=\langle u^n,\mathbf1\rangle_h$. [F1, F2, step 2.1, algebra]

3.1 Let $a=u^{n+1}$, $b=u^n$, and $\delta=a-b$. Convexity gives $P_{c,h}(a)-P_{c,h}(b)\le\langle\nabla_hP_{c,h}(a),\delta\rangle_h$ and $-P_{e,h}(a)+P_{e,h}(b)\le-\langle\nabla_hP_{e,h}(b),\delta\rangle_h$. Also $\frac\kappa2(\langle A_ha,a\rangle_h-\langle A_hb,b\rangle_h)=\kappa\langle A_ha,\delta\rangle_h-\frac\kappa2\langle A_h\delta,\delta\rangle_h\le\kappa\langle A_ha,\delta\rangle_h$ by nonnegativity in [F2]. Adding these inequalities gives $\mathcal E_h(a)-\mathcal E_h(b)\le\langle\mu^{n+1},\delta\rangle_h$. [F1, F2, given, algebra]

3.2 In the Allen–Cahn branch, step 1.2 gives $\delta=-M\tau\mu^{n+1}$, so step 3.1 yields $\mathcal E_h(a)-\mathcal E_h(b)\le-M\tau\|\mu^{n+1}\|_h^2$. In the Cahn–Hilliard branch, step 2.2 gives $\delta=-M\tau A_h\mu^{n+1}$, so $\langle\mu^{n+1},\delta\rangle_h=-M\tau\langle A_h\mu^{n+1},\mu^{n+1}\rangle_h\le0$. These are the two asserted energy inequalities. [F2, step 1.2, step 2.2, step 3.1, algebra] ∎

