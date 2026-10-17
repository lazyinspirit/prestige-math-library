---
id: ex-sdc-inexact-midpoint-stage-residual
kind: example
title: An inexact midpoint stage solve has a controlled update error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - prop-one-node-gauss-collocation-order-two
  - thm-sdc-residual-tolerance-preserves-order
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
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

**Given:** The scalar IVP, one-node Gauss tableau, step size and approximate stage in the Example.

[F1] [[prop-one-node-gauss-collocation-order-two]]: the exact collocation stage is the implicit midpoint stage and its method has order two under a common-tube smoothness assumption.

[F2] [[thm-sdc-residual-tolerance-preserves-order]]: if the stage sweep residual is at most $(1-q)C_\tau h^{p+1}$, the stage error is at most $C_\tau h^{p+1}$ and the endpoint perturbation is at most $LC_\tau\|b\|_1h^{p+2}$.

[F3] [[lem-small-step-implicit-rk-branch-and-residual-error]]: on a closed product ball, an invariant contraction map with factor $q<1$ has a unique stage and an update residual $G(V)$ bounds the stage error by $\|G(V)\|/(1-q)$.

[A1] Countable Choice, inherited from the one-node Gaussian moment data used in [F1].

[A2] For [F3], use center $c=1$, radius $R=1$, matrix $A=(1/2)$, and $F(Y)=-Y$ on the closed ball $\mathcal B=[0,2]$. The bound parameters are $M_F=2$ and $L_F=1$; they are denoted with subscripts to distinguish $M_F$ from the number of nodes.

## Verification

1.1 Here $Q_{11}=1/2$, $b_1=1$, and the exact stage equation is $U^*=1-(h/2)U^*$, so $U^*=20/21\in[0,2]$. For [F3], the ball is $[0,2]$, and its map is $\Phi(Y)=1-(h/2)Y=1-0.05Y$. It maps $[0,2]$ into $[0.9,1]\subset[0,2]$; its contraction factor is $q=h|A|L_F=0.1(1/2)(1)=0.05$, and the invariant-ball bound is $h|A|M_F=0.1(1/2)(2)=0.1\le R=1$. Thus the closed-ball and contraction hypotheses of [F3] hold. The stage derivative residual map is $G(V)=V-1+(h/2)V=(1+h/2)(V-U^*)$; at $V-U^*=1/2000$ it has magnitude $21/40000=0.000525$. The one-node SDC sweep has $Q_\Delta=0$, so $|S(V)-V|=|G(V)|$ and the SDC contraction factor is also $h/2=1/20$. [A1, A2, F1, F3, given, algebra]

2.1 With $p=2$ and $C_\tau=1$, the tolerance threshold in [F2] is $(1-q)h^3=19/20000=0.00095$, which exceeds the residual in step 1.1. Hence [F2] certifies $|V-U^*|\le h^3=0.001$. The same value follows from [F3], since $|G(V)|/(1-q)=0.000525/0.95<0.001$. [F2, F3, step 1.1, algebra]

3.1 The approximate endpoint differs from the exact collocation endpoint by $h|V-U^*|=0.1/2000=1/20000=0.00005$. This is at most the general bound $h^4=0.0001$ from [F2]. The example verifies a single stage solve; the global order claim requires the uniform per-step hypotheses in [F2]. [F1, F2, step 2.1, algebra] ∎