---
id: ex-sdc-inexact-midpoint-stage-residual
kind: example
title: An inexact midpoint stage solve has a controlled update error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - prop-one-node-gauss-collocation-order-two
  - def-first-order-ode-initial-value-problem-and-solution
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-countable-choice
  - alg-explicit-left-euler-sdc-sweep
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: https://www.unige.ch/~hairer/poly/poly.pdf
    - title: John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations
      url: https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf
---

## Example

Assume Countable Choice for the Lebesgue interval-measure formula. Use one-node Gauss collocation on $y'=-y$, $y(0)=1$, with $h=1/10$. Let $U^*$ be its exact midpoint stage and take the approximate stage $V=U^*+1/2000$.

## Facts & Assumptions

**Given:** The scalar IVP, one-node Gauss tableau, step size and approximate stage in the Example; use the explicit-left-Euler SDC sweep when comparing sweep and stage residuals.

[F1] [[prop-one-node-gauss-collocation-order-two]]: the exact collocation stage is the implicit midpoint stage and its method has order two under a common-tube smoothness assumption.

[F3] [[lem-small-step-implicit-rk-branch-and-residual-error]]: on a closed product ball, an invariant contraction map with factor $q<1$ has a unique stage and an update residual $G(V)$ bounds the stage error by $\|G(V)\|/(1-q)$.

[F4] [[def-first-order-ode-initial-value-problem-and-solution]]: for this scalar IVP the stage field is $f(t,Y)=-Y$.

[F5] [[alg-explicit-left-euler-sdc-sweep]]: its explicit-left-Euler stage block $Q_\Delta$ is strictly lower triangular, so for one node $Q_\Delta=0$ and the formal sweep is $S(V)=1-(h/2)V$ for this field.

[A1] Countable Choice, inherited from the one-node Gaussian moment data used in [F1].

[A2] For [F3], use center $c=1$, radius $R=1$, matrix $A=(1/2)$, and $F(Y)=-Y$ on the closed ball $\mathcal B=[0,2]$. The bound parameters are $M_F=2$ and $L_F=1$; they are denoted with subscripts to distinguish $M_F$ from the number of nodes.

## Verification

1.1 Here $Q_{11}=1/2$, $b_1=1$, and by [F4] the exact stage equation is $U^*=1-(h/2)U^*$, so $U^*=20/21\in[0,2]$. For [F3], the ball is $[0,2]$, and its map is $\Phi(Y)=1-(h/2)Y=1-0.05Y$. It maps $[0,2]$ into $[0.9,1]\subset[0,2]$; its contraction factor is $q=h|A|L_F=0.1(1/2)(1)=0.05$, and the invariant-ball bound is $h|A|M_F=0.1(1/2)(2)=0.1\le R=1$. Thus the closed-ball and contraction hypotheses of [F3] hold. The stage update residual map is $G(V)=V-1+(h/2)V=(1+h/2)(V-U^*)$; at $V-U^*=1/2000$ it has magnitude $21/40000=0.000525$. For the explicit-left-Euler sweep in [F5], $Q_\Delta=0$, so $|S(V)-V|=|G(V)|$ and the SDC contraction factor is also $h/2=1/20$. [A1, A2, F1, F3, F4, F5, given, algebra]

2.1 The specified $V=20/21+1/2000$ lies in $[0,2]$, so [F3] applies. With $q=1/20$, the numerical residual threshold $(1-q)h^3=19/20000=0.00095$ exceeds $|G(V)|=21/40000$ from step 1.1. Directly, [F3] gives $|V-U^*|\le |G(V)|/(1-q)=21/38000<1/1000=h^3$. [F3, step 1.1, algebra]

3.1 For this field $f(t,Y)=-Y$ and endpoint weight $b_1=1$, the approximate endpoint differs from the exact collocation endpoint by $h|V-U^*|=0.1/2000=1/20000=0.00005$. The stage bound in step 2.1 also gives the upper bound $h\,h^3=h^4=0.0001$. The example verifies a single stage solve; a global order-two conclusion would additionally require uniform per-step defect, stability, and stage-error estimates on the common tube. [F1, F4, step 2.1, algebra] ∎
