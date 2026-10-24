---
id: prop-ssprk33-third-order-and-convex-preservation
kind: proposition
title: "SSPRK(3,3) is third order and preserves conditional convex bounds"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-ssprk33
  - def-convex-subset-of-euclidean-space
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-one-step-ode-method-local-defect-order-and-stability
  - prop-explicit-rk-order-conditions-through-four
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Sigal Gottlieb, Chi-Wang Shu, and Eitan Tadmor, Strong Stability-Preserving High-Order Time Discretization Methods, SIAM Review 43(1) (2001), §§2.1–2.2 and §4.1"
      url: "https://www.math.umd.edu/~tadmor/pub/linear-stability/Gottlieb-Shu-Tadmor.SIREV-01.pdf"
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Statement

Assume the smoothness and compact-tube hypotheses of [[prop-explicit-rk-order-conditions-through-four]]. The step in [[alg-ssprk33]] has uniform local order at least three.

For an autonomous field, take an initial state $y\in C$, where $C$ is a convex subset of the state domain, and let $E_h(u)=u+h f(u)$ be the forward-Euler map. If $E_h(C)\subseteq C$ and all displayed stages are admitted, then every SSPRK(3,3) stage and the output lie in $C$. If $\Phi:C\to\mathbb R$ is convex, meaning $\Phi(\theta u+(1-\theta)v)\le\theta\Phi(u)+(1-\theta)\Phi(v)$ for $u,v\in C$ and $0\le\theta\le1$, and $\Phi(E_h(u))\le\Phi(u)$ for every $u\in C$, then $\Phi$ does not increase at any of the three stages or at the output.

For a nonautonomous field, assume the initial state $y\in C$ and that the forward-Euler maps at the actual stage start times $t$, $t+h$, and $t+h/2$ preserve $C$ and satisfy the stated $\Phi$ inequality on all admitted stage states. These conditions are premises of the theorem; the method alone does not assert positivity, total-variation diminishing, or any universal invariant-region property.

## Facts & Assumptions

**Given:** The SSPRK(3,3) recurrence, an initial state $y\in C$, the convex state set, the exact forward-Euler preservation hypotheses, and the smoothness/tube assumptions for the order claim.

[F1] [[alg-ssprk33]]: $Y_1=E_{t,h}(y)$, $Y_2=\frac34y+\frac14E_{t+h,h}(Y_1)$, and $y^+=\frac13y+\frac23E_{t+h/2,h}(Y_2)$, where $E_{\tau,h}(u)=u+h f(\tau,u)$; in the autonomous case $E_{\tau,h}=E_h$.

[F2] [[def-convex-subset-of-euclidean-space]]: a convex set contains $\theta u+(1-\theta)v$ whenever it contains $u,v$ and $0\le\theta\le1$.

[F3] [[def-explicit-runge-kutta-tableau-and-stage-map]]: the tableau has row-sum abscissae and the method output is the weighted sum of its stage slopes.

[F4] [[prop-explicit-rk-order-conditions-through-four]]: the first four explicit tableau order equations through order three imply uniform local order at least three under the stated tube hypotheses.

[A1] $C$ is convex, and the stated functional $\Phi$ is convex on $C$.

[A2] The relevant forward-Euler maps send every admitted point of $C$ into $C$ and do not increase $\Phi$.

## Proof

1.1 Rewriting the recurrences in [F1] as explicit RK stages gives rows of $A$ equal to $(0,0,0)$, $(1,0,0)$, and $(1/4,1/4,0)$, with $c=(0,1,1/2)$ and $b=(1/6,1/6,2/3)$. Thus $\sum b_i=1$, $\sum b_ic_i=1/2$, $\sum b_ic_i^2=1/3$, and $\sum b_i(Ac)_i=1/6$. [F1, F3, algebra]

1.2 In the autonomous case $Y_1=E_h(y)\in C$. Since $Y_1\in C$, [A2] gives $E_h(Y_1)\in C$; [A1] and [F2] then give $Y_2=\frac34y+\frac14E_h(Y_1)\in C$. Applying [A2] to $Y_2$ gives $E_h(Y_2)\in C$, and [A1] gives $y^+=\frac13y+\frac23E_h(Y_2)\in C$. [given, A1, A2, F1, F2, construct]

2.1 The order equations in step 1.1 are exactly the order-one through order-three hypotheses of [F4], so the stated tube assumptions imply uniform local order at least three. [F4, step 1.1]

2.2 Convexity in [A1] gives $\Phi(Y_1)\le\Phi(y)$, $\Phi(Y_2)\le\frac34\Phi(y)+\frac14\Phi(E_h(Y_1))\le\Phi(y)$, and $\Phi(y^+)\le\frac13\Phi(y)+\frac23\Phi(E_h(Y_2))\le\Phi(y)$. Each last inequality uses [A2] at the relevant stage. [given, A1, A2, F1, step 1.2, algebra]

3.1 For a nonautonomous field the three formulas in [F1] use exactly $E_{t,h}$ at $y$, $E_{t+h,h}$ at $Y_1$, and $E_{t+h/2,h}$ at $Y_2$. Applying [A2] at those three start times and repeating the convex-combination calculations in steps 1.2–2.2 proves invariance and nonincrease. [given, A1, A2, F1, F2, step 1.2, step 2.2] ∎
