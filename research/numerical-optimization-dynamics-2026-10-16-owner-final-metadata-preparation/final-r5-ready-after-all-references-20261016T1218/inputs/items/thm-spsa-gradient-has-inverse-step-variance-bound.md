---
id: thm-spsa-gradient-has-inverse-step-variance-bound
kind: theorem
title: "Weighted simulator moments give an inverse-step SPSA variance bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-evaluation-spsa-gradient-estimator
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "J. C. Spall, An Overview of the Simultaneous Perturbation Method for Efficient Optimization, §§SPSA algorithm and perturbation conditions"
      url: "https://www.jhuapl.edu/spsa/PDF-SPSA/Spall_An_Overview.PDF"
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, Proposition 3.1"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Statement

Assume AC. At a current history $\mathcal F$, let $c>0$, let $\Delta_i\ne0$ almost surely, and use the two-evaluation estimator from [[alg-two-evaluation-spsa-gradient-estimator]]. Suppose the weighted conditional second moment is bounded:
$\mathbb E\!\left[\left(|Y^+|^2+|Y^-|^2\right)\sum_{i=1}^d|\Delta_i|^{-2}\,\middle|\,\mathcal F\right]\le B$
almost surely, with deterministic $B<\infty$. Then
$\mathbb E[\|\widehat G\|_2^2\mid\mathcal F]\le\frac{B}{2c^2},\qquad \operatorname{Var}(\widehat G\mid\mathcal F)\le\frac{B}{2c^2},$
where the vector conditional variance is the sum of coordinate conditional variances as in [[def-stochastic-gradient-oracle-and-unconstrained-update]].

## Facts & Assumptions

**Given:** AC, the current history, step $c$, nonzero perturbation coordinates, and the weighted conditional second-moment bound.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is inherited by the conditional-expectation interface in [F2].

[F1] [[alg-two-evaluation-spsa-gradient-estimator]]: $\widehat G_i=(Y^+-Y^-)/(2c\Delta_i)$.

[F2] [[def-stochastic-gradient-oracle-and-unconstrained-update]] and [[def-conditional-variance]]: for a vector oracle, conditional variance is the sum of the coordinate conditional variances.

[F3] [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: for a square-integrable vector oracle, $\mathbb E[\|\widehat G\|_2^2\mid\mathcal F]=\|\mathbb E[\widehat G\mid\mathcal F]\|_2^2+\operatorname{Var}(\widehat G\mid\mathcal F)$.

## Proof

1.1 For each coordinate, [F1] and $(a-b)^2\le2a^2+2b^2$ give $\|\widehat G\|_2^2=\sum_{i=1}^d\frac{(Y^+-Y^-)^2}{4c^2\Delta_i^2} \le\frac{|Y^+|^2+|Y^-|^2}{2c^2}\sum_{i=1}^d|\Delta_i|^{-2}.$ The right side is integrable conditionally by the stated hypothesis, so each coordinate of $\widehat G$ is square-integrable. [given, F1, algebra]

2.1 Taking conditional expectations in step 1.1 and using the weighted bound yields $\mathbb E[\|\widehat G\|_2^2\mid\mathcal F]\le B/(2c^2)$. [A1, step 1.1, given]

3.1 By [F3], $\operatorname{Var}(\widehat G\mid\mathcal F)=\mathbb E[\|\widehat G\|_2^2\mid\mathcal F]-\|\mathbb E[\widehat G\mid\mathcal F]\|_2^2\le\mathbb E[\|\widehat G\|_2^2\mid\mathcal F]$. Step 2.1 gives the second bound. [A1, F2, F3, step 2.1, algebra] ∎
