---
id: ex-sdc-cost-accounting-per-sweep
kind: example
title: Work and storage counts for an M-node SDC sweep
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-explicit-left-euler-sdc-sweep
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

For $M$ nodes and a budget of $K$ complete explicit-left-Euler SDC sweeps, evaluate and retain all $M$ right-hand-side values at the constant predictor. Each completed sweep evaluates $M$ new stage values and reuses the previous stage values. The tableau and preconditioner are set up once.

## Facts & Assumptions

**Given:** The finite SDC algorithm with $M\ge1$ stages and integer budget $K\ge0$.

[F1] [[alg-explicit-left-euler-sdc-sweep]]: the predictor requires $M$ right-hand-side evaluations; each sweep requires $M$ new evaluations, keeps old stage values, and stores $O(M^2)$ tableau/preconditioner entries.

## Verification

1.1 After zero sweeps, exactly $M$ stage derivatives have been evaluated. If $s$ sweeps are completed, each adds exactly $M$ evaluations because its $M$ new stage states are evaluated once and the previous $F(U^j)$ values are reused. Thus the total is $M+sM=M(s+1)$, and for $s\le K$ the worst-case count is $M(K+1)$. [F1, algebra]

2.1 The stored dense matrices $Q,Q_\Delta$ each have $M^2$ real entries, so their storage is $O(M^2)$; retaining old/current stage vectors and their derivative values takes $O(Md)$ additional scalar storage. Each forward-recursion stage sums at most $M$ vector terms, for at most $O(M^2d)$ arithmetic per sweep. These counts omit the cost of evaluating $f$ and of constructing the polynomial quadrature data, which depends on their representation. [F1, given, algebra] ∎
