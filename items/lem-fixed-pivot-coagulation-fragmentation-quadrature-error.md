---
id: lem-fixed-pivot-coagulation-fragmentation-quadrature-error
kind: lemma
title: Fixed-pivot projection has first-order bounded-Lipschitz kernel quadrature error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-infinite-fixed-pivot-sectional-dynamics
  - def-bounded-lipschitz-discrepancy-for-measures
  - lem-fixed-pivot-barycentric-identities
  - lem-continuous-coagulation-operator-weighted-total-variation-bound
  - lem-continuous-fragmentation-operator-weighted-total-variation-bound
  - thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the bound is proved for each admissible test before taking a supremum.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Let $\mu\in\mathcal M_w(E)$ be positive and put $m=M_0(\mu)$. With $F$ the continuous vector field and $F_\Delta$ the no-cutoff grid field, for $P_\Delta\mu=\int P_\Delta(x)\mu(dx)$ one has
$$\|F_\Delta(P_\Delta\mu)-P_\Delta F(\mu)\|_{BL}\le\Delta\left[\frac{3L_K+K_*}{2}m^2+\bigl(L_\beta(D+1)+\beta_*L_B\bigr)m\right].$$

## Facts & Assumptions

**Given:** A mesh with maximum cell width $\Delta\le1$, bounded Lipschitz kernels, and a positive finite-number measure.

[F1] [[def-infinite-fixed-pivot-sectional-dynamics]]: $F_\Delta$ projects every product and daughter to the grid by $P_\Delta$ and preserves each event's first moment.

[F2] [[def-continuous-size-coagulation-fragmentation-weak-model]]: $F$ has the stated coagulation and fragmentation weak forms, with $K$ Lipschitz and $d_{BL}(B_x,B_y)\le L_B|x-y|$.

[F3] [[def-bounded-lipschitz-discrepancy-for-measures]]: $\|\sigma\|_{BL}$ is the supremum over tests of supremum norm and Lipschitz constant at most $1$.

[F4] [[lem-fixed-pivot-barycentric-identities]]: $P_\Delta(z)$ has total mass $1$, expected displacement at most $\Delta/2$, expected mass exactly $z$, and second-moment excess at most $\Delta^2/4$.

[F5] [[lem-continuous-coagulation-operator-weighted-total-variation-bound]]: the continuous coagulation term maps $\mathcal M_w(E)^2$ to $\mathcal M_w(E)$.

[F6] [[lem-continuous-fragmentation-operator-weighted-total-variation-bound]]: the continuous fragmentation term maps $\mathcal M_w(E)$ to $\mathcal M_w(E)$.

[F7] [[thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability]]: $F_\Delta$ is well-defined on weighted grid measures.

## Proof

1.1 By [F5] and [F6], $F(\mu)\in\mathcal M_w(E)$, and [F4] makes $P_\Delta F(\mu)$ well-defined; [F7] gives $F_\Delta(P_\Delta\mu)\in\mathcal M_w(E)$. Fix a test $\varphi$ admissible in [F3] and set $\bar\varphi(z)=\int\varphi(u)P_\Delta(z)(du)$. On each cell this is the linear interpolation of endpoint values; its slope has absolute value at most $1$, so $\bar\varphi$ is also admissible. The displacement estimate [F4] gives $\int|u-z|P_\Delta(z)(du)\le\Delta/2$. [given, F3, F4, F5, F6, F7, algebra]

2.1 For the coagulation term, sample $X\sim P_\Delta(x)$ and $Y\sim P_\Delta(y)$ independently. The grid-field test integrand averaged over $X,Y$ has gain $\mathbb E\bar\varphi(X+Y)$ and losses $\bar\varphi(x)+\bar\varphi(y)$; the projected continuous-field integrand has gain $\bar\varphi(x+y)$ and the same losses. The gain difference is at most $\mathbb E(|X-x|+|Y-y|)\le\Delta$. Also $\mathbb E|K(X,Y)-K(x,y)|\le L_K\Delta$, and the event bracket has absolute value at most $3$. Thus the absolute difference of the two coagulation integrals is at most $\tfrac12(3L_K+K_*)\Delta m^2$. [F1, F2, step 1.1, algebra]

2.2 For fragmentation, write $G(x)=\int\bar\varphi(z)B_x(dz)$. Then $|G(x)|\le D$, $|G(x)-\varphi(x)|\le D+1$, and $|G(X)-G(x)|\le L_B|X-x|$ by [F2] and [F3]. Since $\mathbb E\varphi(X)=\bar\varphi(x)$, the integrand difference equals $\mathbb E\{\beta(X)[G(X)-\varphi(X)]\}-\beta(x)[G(x)-\bar\varphi(x)]=\mathbb E[\beta(X)(G(X)-G(x))]+\mathbb E[(\beta(X)-\beta(x))G(x)]+\mathbb E[(\beta(x)-\beta(X))\varphi(X)]$. The three terms are bounded by $\beta_*L_B\mathbb E|X-x|$, $L_\beta D\mathbb E|X-x|$, and $L_\beta\mathbb E|X-x|$, respectively. Using $\mathbb E|X-x|\le\Delta$ proves the displayed bound after integrating over $\mu$. [F2, F3, step 1.1, algebra]

3.1 Adding the coagulation and fragmentation bounds holds for every admissible test in [F3]. Taking their supremum gives the asserted bounded-Lipschitz norm inequality. [F3, step 2.1, step 2.2] ∎

