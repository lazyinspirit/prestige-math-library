---
id: ex-rqmc-replicate-error-estimate
kind: example
title: "Replicate variance for randomized quadrature"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-statistical-and-computational-error-ledger
  - thm-independent-replicate-variance-estimator
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.4"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Example

Fix the observed data and one randomized quadrature rule for an exact integral $I$. Suppose its independent full-set randomizations produce IID estimates with mean $I$ and finite variance, and the three realized outputs are $Z_1=2/5$, $Z_2=1/2$, and $Z_3=7/10$. Compute the replicate mean and the variance estimate for that mean. This calculation does not assert a Student interval or estimate variability across new data samples.

## Facts & Assumptions

**Given:** Fixed data and exact integral target $I$, with IID randomized-rule outputs of mean $I$ and finite variance. The observed outputs are $2/5,1/2,7/10$.

[F1] For $R\ge2$ IID replicate outputs, $[R(R-1)]^{-1}\sum_r(Z_r-\overline Z_R)^2$ is unbiased for the variance of their average. ([[thm-independent-replicate-variance-estimator]])

[F2] A computation stage is recorded as the difference between its exact reference target and its realized output, with all values on the same scalar scale. ([[def-statistical-and-computational-error-ledger]])

## Verification

1.1 The replicate mean is $\overline Z_3=(2/5+1/2+7/10)/3=8/15$. [given, algebra]

2.1 The squared deviations from $8/15$ sum to $(2/5-8/15)^2+(1/2-8/15)^2+(7/10-8/15)^2=7/150$. [given, step 1.1, algebra]

3.1 The replicate variance estimate for the mean is $(3\cdot2)^{-1}(7/150)=7/900$ by [F1]. With the data fixed, this estimate concerns only the independent rule-randomization law, not data-sampling variation. The realized computation error in the ledger is $\overline Z_3-I=8/15-I$. [F1, F2, step 1.1, step 2.1, algebra] ∎
