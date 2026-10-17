---
id: ex-zero-feature-column-lasso-coordinate
kind: example
title: "The zero-feature-column Lasso update"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-cyclic-exact-block-minimization
  - def-lasso-estimator
  - lem-coordinate-lasso-soft-threshold-update
  - lem-lasso-objective-has-minimizer
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Example

In the fixed-design Lasso of [[def-lasso-estimator]], if column $X_j=0$ and $\tau>0$, the exact coordinate minimizer is $\theta_j=0$ for every residual formed from the other columns. The formula for a nonzero column is not evaluated with a zero denominator.

## Facts & Assumptions

**Given:** A fixed design $X$, response $y$, penalty $\tau>0$, and one zero column $X_j=0$.

[F1] [[alg-cyclic-exact-block-minimization]]: an exact coordinate update minimizes the objective over the selected coordinate with the others fixed.

[F2] [[def-lasso-estimator]]: the penalty contribution for coordinate $j$ is $2\tau|\theta_j|$.

[F3] [[lem-coordinate-lasso-soft-threshold-update]]: for a zero design column the unique minimizing coordinate is zero.

[F4] [[lem-lasso-objective-has-minimizer]]: a global Lasso minimizer exists for every fixed design and $\tau>0$.

## Proof

1.1 With $X_j=0$, changing $\theta_j$ leaves $y-X\theta$ unchanged and leaves all other penalty terms unchanged. The only varying part of the objective is $2\tau|\theta_j|$, which is nonnegative and vanishes only at zero because $\tau>0$. [F1, F2, given, algebra]

2.1 Therefore every exact coordinate minimization has the unique update $\theta_j=0$, independent of the residual from the other columns. This agrees with the zero-column branch of [F3]; [F4] ensures the overall Lasso problem is not being treated as an empty minimization problem. [F3, F4, step 1.1, algebra] ∎

