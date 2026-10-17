---
id: ex-sdc-cost-accounting-per-sweep
kind: example
title: Work and storage counts for an M-node SDC sweep
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-explicit-left-euler-sdc-sweep
  - lem-sdc-sweep-work-and-storage-bound
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

For $M$ nodes and a budget of $K$ complete explicit-left-Euler SDC sweeps, consider a run that passes the preliminary checks and completes predictor evaluation. Evaluate and retain all $M$ right-hand-side values at the constant predictor. Each completed sweep evaluates $M$ new stage values and reuses the previous stage values. The tableau and preconditioner are set up once.

When $K=0$, the predictor values are still evaluated, but no residual test is run; the procedure returns `iteration-budget-exhausted` with no accepted endpoint.

## Facts & Assumptions

**Given:** The finite SDC algorithm with $M\ge1$ stages and integer budget $K\ge0$.

[F1] [[alg-explicit-left-euler-sdc-sweep]]: evaluate and cache the predictor derivatives, reuse old derivatives during each sweep, and apply the stated finite-budget and residual branches.

[F2] [[lem-sdc-sweep-work-and-storage-bound]]: after predictor evaluation and $s$ completed sweeps with no incomplete sweep, the stage-call count is $M(s+1)$; all runs use at most $M(K+1)$ instructed stage calls. Coefficients need $O(M^2)$ storage, stage/derivative buffers need $O(Md)$, and a dense sweep needs $O(M^2d)$ scalar arithmetic, subject to the lemma's work model and exclusions.

## Verification

1.1 With $K=0$, the algorithm evaluates and stores the $M$ predictor derivatives, then returns `iteration-budget-exhausted` without an accepted endpoint. If the run stops after $s>0$ completed sweeps with no incomplete sweep, each adds exactly $M$ evaluations because its $M$ new stage states are evaluated once and the previous $F(U^j)$ values are reused. Thus the total is $M+sM=M(s+1)$, and for $s\le K$ this is at most $M(K+1)$, attained if all $K$ sweeps complete. A failed run with a partially evaluated sweep is counted by its actual prefix as in [F2], and still obeys that bound. Acceptance after $s\ge1$ sweeps returns $U^{s-1}$ and uses its cached endpoint derivatives with no additional calls. [F1, F2, algebra]

2.1 The stored dense matrices $Q,Q_\Delta$ each have $M^2$ real entries, so their storage is $O(M^2)$; retaining old/current stage vectors and their derivative values takes $O(Md)$ additional scalar storage. Each forward-recursion stage has two sums with at most $2M$ vector terms in total, for at most $O(M^2d)$ scalar arithmetic per sweep. Residual formation adds $O(Md)$ scalar arithmetic and at most $M$ square roots; an accepted endpoint adds $O(Md)$ arithmetic and no new field evaluations. These are the proved counts in [F2]. They omit the cost of evaluating $f$, constructing the polynomial quadrature data (which depends on their representation), supplied predictor generation, and external admissibility/invariance certification and their internal storage. The model uses exact real arithmetic and gives no floating-point roundoff guarantee. [F1, F2, given, algebra] ∎
