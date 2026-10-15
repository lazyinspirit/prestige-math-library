---
id: rem-finite-simulation-synthetic-likelihood-is-a-random-approximation
kind: remark
title: "Finite-simulation synthetic likelihood is a random approximation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-synthetic-likelihood
  - alg-synthetic-likelihood-monte-carlo-estimation
  - lem-two-simulation-summary-covariance-is-singular-in-two-dimensions
  - def-axiom-of-choice
justified_by: []
forward_refs:
  - ex-two-simulation-covariance-is-random-and-singular
axiom_use: "AC is inherited only through the Gaussian synthetic-likelihood definition; the finite-simulation boundary calculation is choice-free."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David T. Frazier et al., Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, Journal of the American Statistical Association 118(544), 2821–2832 (2023)"
      url: "https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf"
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
---

## Remarks

Under AC for the Gaussian-density interface ([[def-axiom-of-choice]]), the finite-simulation mean, covariance, and returned plug-in value depend on the simulated summaries. The approximation may be **unavailable**: the local lemma [[lem-two-simulation-summary-covariance-is-singular-in-two-dimensions]] shows that with two two-dimensional summaries the covariance is never positive definite, so [[alg-synthetic-likelihood-monte-carlo-estimation]] returns unavailable. A companion example gives two positive-probability simulation outcomes with different covariances ([[ex-two-simulation-covariance-is-random-and-singular]]).

The ideal Gaussian summary density is not asserted to be the exact model likelihood. No unbiasedness or consistency claim is made for the finite plug-in quantity.
