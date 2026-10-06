---
id: cex-euler-lagrange-stationarity-does-not-imply-a-minimum
kind: counterexample
title: "Stationarity of the Euler-Lagrange equation does not imply a minimum"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-weak-euler-lagrange-equation-for-integral-functionals, thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional, thm-first-variation-vanishes-at-an-interior-minimiser, def-convex-and-strictly-convex-functionals-on-a-banach-space, thm-poincare-inequality-for-w-one-p-zero, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice, thm-holder-inequality-for-integrals, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 2 Section 2.4 and Chapter 5 Section 5.1, printed pp. 14-15 and 57-58"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Section 2, Remark 1.5, printed p. 7"
verification:
  precheck: pass
---

## Statement refuted

**Counterexample.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$ be a bounded $C^1$ domain and let
$$J(u)=-\frac12\int_\Omega|Du|^2\,dx\qquad(u\in H^1_0(\Omega)).$$
Then $u=0$ is the only stationary point: its weak Euler-Lagrange (stationarity) equation reads $-\int_\Omega Du\cdot D\varphi\,dx=0$ for every $\varphi\in H^1_0(\Omega)$, which forces $Du=0$ and then $u=0$ almost everywhere by the Poincare inequality ([[thm-poincare-inequality-for-w-one-p-zero]]). But $J$ is not bounded below: for any fixed nonzero $\varphi\in H^1_0(\Omega)$ one has $J(t\varphi)=-\tfrac{t^2}{2}\|D\varphi\|_2^2\to-\infty$ as $|t|\to\infty$. So the Euler-Lagrange equation is a necessary condition only; the functional is concave, not convex, and [[thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional]] does not apply.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, the functional $J(u)=-\tfrac12\int_\Omega|Du|^2\,dx$ on $H^1_0(\Omega)$, and the Lagrangian $f(x,s,\xi)=-\tfrac12|\xi|^2$.

[F1] A stationary point of $J$ is a point $u\in H^1_0(\Omega)$ whose first variation vanishes in every direction $\varphi\in H^1_0(\Omega)$. The quadratic expansion below computes this variation directly for every $n\ge1$. For $n\ge2$, its vanishing is also the fixed-zero-trace weak Euler-Lagrange formula of [[thm-weak-euler-lagrange-equation-for-integral-functionals]], since $f_s=0$, $f_\xi=-\xi$ and the $p=2$ differentiation growth bounds hold.

[F2] On the full linear space $H^1_0(\Omega)$, at a local minimiser the first variation vanishes ([[thm-first-variation-vanishes-at-an-interior-minimiser]]); the converse requires convexity and stationarity in the sense $\delta I(u;v-u)\ge0$ for all competitors, by [[thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional]].

[F3] Poincare's inequality controls the $L^2$ norm by the Dirichlet energy on $H^1_0(\Omega)$ ([[thm-poincare-inequality-for-w-one-p-zero]]); in particular $\int_\Omega|Du|^2=0$ forces $u=0$ almost everywhere.

[F4] The Lagrangian $f(x,s,\xi)=-\tfrac12|\xi|^2$ is concave, not convex, in $\xi$ ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]).

## Counterexample

**Proof technique:** direct computation of the stationary equation and along the line $t\varphi$.

1.1 The stationary equation. For $f(x,s,\xi)=-\tfrac12|\xi|^2$ one has $f_\xi(x,s,\xi)=-\xi$ and $f_s=0$, so the exact expansion $J(u+\varepsilon\varphi)-J(u)=-\varepsilon\int Du\cdot D\varphi-\tfrac12\varepsilon^2\int|D\varphi|^2$ gives the bounded first variation $\delta J(u;\varphi)=-\int Du\cdot D\varphi$ by Holder ([[thm-holder-inequality-for-integrals]]). Thus a point $u\in H^1_0(\Omega)$ satisfies the weak Euler-Lagrange equation of [F1] exactly when $\int_\Omega Du\cdot D\varphi\,dx=0$ for every $\varphi\in H^1_0(\Omega)$. [F1, algebra]

1.2 $0$ is not a minimiser, not even locally. Fix any nonzero $\varphi\in H^1_0(\Omega)$, which exists: choose a ball $B_R(a)\subseteq\Omega$ and a nonzero smooth bump supported inside it ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]). Poincare [F3] gives $\|D\varphi\|_2>0$, and consider $J(t\varphi)=-\tfrac{t^2}{2}\int_\Omega|D\varphi|^2\,dx$. As $|t|\to\infty$ this tends to $-\infty$, so $J$ is not bounded below on $H^1_0(\Omega)$; and for every $t\ne0$ one has $J(t\varphi)<0=J(0)$, and $\|t\varphi\|_{H^1}=|t|\|\varphi\|_{H^1}\to0$ as $t\to0$, so $0$ is not a local minimiser either. [F3, algebra]

2.1 The only stationary point. If $u$ is stationary, step 1.1 applies with the admissible test function $\varphi=u\in H^1_0(\Omega)$, giving $\int_\Omega|Du|^2=0$; by [F3] this forces $Du=0$ and hence $u=0$ almost everywhere. Conversely $u=0$ satisfies the equation because $D0=0$. So $0$ is the only stationary point of $J$. [F3, step 1.1]

3.1 Conclusion. The only stationary point of $J$ fails to be a minimiser by step 1.2, so the Euler-Lagrange equation is a necessary condition only; the failure is consistent with [F2], since $J$ is concave in the gradient by [F4] and the convex stationarity-sufficiency theorem therefore does not apply. [F2, F4, step 2.1, step 1.2] ∎
