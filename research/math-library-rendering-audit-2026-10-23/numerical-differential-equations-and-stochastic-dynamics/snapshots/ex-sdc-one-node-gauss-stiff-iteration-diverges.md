---
id: ex-sdc-one-node-gauss-stiff-iteration-diverges
kind: example
title: An explicit SDC sweep diverges on a stiff scalar mode
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - lem-sdc-scalar-linear-iteration-matrix
  - lem-one-node-gauss-data-is-midpoint
  - def-collocation-quadrature-tableau
  - alg-explicit-left-euler-sdc-sweep
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
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Example

Assume Countable Choice for the Lebesgue interval-measure formula. Analyze the formal one-node Gauss SDC stage-iteration recurrence for $y'=\lambda y$ with $\lambda=-6$, $h=1$, and initial value $u=1$. The test is stiff in the sense that $h|\lambda|=6$; the fully solved midpoint stage remains nonsingular and its endpoint is stable. This example studies the recurrence without invoking a residual-acceptance test.

## Facts & Assumptions

**Given:** The one-node Gauss tableau, the explicit-left-Euler SDC preconditioner and the scalar test equation in the Example.

[F1] [[lem-one-node-gauss-data-is-midpoint]]: $Q_{11}=1/2$ and $b_1=1$.

[F2] [[alg-explicit-left-euler-sdc-sweep]]: for one node $Q_\Delta=0$.

[F3] [[lem-sdc-scalar-linear-iteration-matrix]]: stage errors obey $E^{k+1}=B(z)E^k$, with $B(z)=(I-zQ_\Delta)^{-1}z(Q-Q_\Delta)$.

[F4] [[def-collocation-quadrature-tableau]]: the midpoint stage solves $U=1+(z/2)U$ and its endpoint is $1+zU$.

[A1] Countable Choice, required to instantiate the one-node Gauss rule for Lebesgue measure on $[0,1]$.

## Verification

1.1 Here $z=h\lambda=-6$, so [F3] and [F1] under [A1] give $B(-6)=(-6)(1/2)=-3$. The collocation stage is $U^*=1-3U^*$, hence $U^*=1/4$. The constant predictor is $U^0=1$, so $E^0=3/4\ne0$ and $E^k=(-3)^k(3/4)$ by induction; its magnitude grows by a factor $3$ at every sweep. [A1, F1, F2, F3, F4, induction, algebra]

2.1 The exactly solved endpoint is $1-6(1/4)=-1/2$, which is also the midpoint stability factor $(1+z/2)/(1-z/2)=-1/2$ multiplying the initial value. Its magnitude is below one, while the SDC contraction ratio from the scalar matrix is $|z|/2=3>1$. Thus stability of the fully solved midpoint step does not imply convergence of the explicit SDC iteration, and the contraction theorem correctly makes no claim here. [F1, F3, F4, algebra] ∎
