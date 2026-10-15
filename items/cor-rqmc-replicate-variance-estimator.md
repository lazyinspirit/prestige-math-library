---
id: cor-rqmc-replicate-variance-estimator
kind: corollary
title: "Independent RQMC replicates estimate randomization variance"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-rqmc-point-set-and-estimator
  - thm-rqmc-single-rule-unbiasedness
  - thm-independent-replicate-variance-estimator
  - def-moments-variance-and-covariance
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Statement

Fix the observed data and an integrable RQMC target $I=I(f)$. Suppose one
full-set randomization produces an estimator $\widehat I$ with
$\mathbb E[\widehat I]=I$ and finite variance $\tau^2$. For $R\ge2$
independent full-set randomizations, write their IID estimates as
$\widehat I_1,\ldots,\widehat I_R$ and their mean as
$\overline I_R=R^{-1}\sum_{r=1}^R\widehat I_r$. Then
$$\widehat V_R=\frac1{R(R-1)} \sum_{r=1}^R(\widehat I_r-\overline I_R)^2$$
is unbiased for $\operatorname{Var}(\overline I_R)=\tau^2/R$. This variance
is over computation randomization conditional on the fixed data and rule; it
does not include data-sampling variation.

## Facts & Assumptions

**Given:** The fixed target, an RQMC estimator with mean $I$ and finite variance, and $R\ge2$ independent full-set randomizations.

[F1] [[def-rqmc-point-set-and-estimator]]: An independent full-set randomization is an independent copy of the entire point-array vector.

[F2] [[thm-rqmc-single-rule-unbiasedness]]: A single marginally uniform rule has expectation $I(f)$ for every Borel integrable $f$.

[F3] [[thm-independent-replicate-variance-estimator]]: For IID real $Z_1,\ldots,Z_R$ with finite variance, $[R(R-1)]^{-1}\sum_r(Z_r-\overline Z_R)^2$ is unbiased for $\operatorname{Var}(\overline Z_R)$.

[F4] [[def-moments-variance-and-covariance]]: Variance is $\mathbb E[(Z-\mathbb EZ)^2]$ for a square-integrable real variable.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement.

1.1 By [F1], independent full-set randomizations give independent estimates with the same law. By [F2] their common mean is $I$, and the stated finite variance supplies the moment hypothesis of [F3]. [F1, F2, F3, F4, given]

2.1 Apply [F3] to $Z_r=\widehat I_r$. It gives $\mathbb E[\widehat V_R]=\operatorname{Var}(\overline I_R)$. Independence and the common variance $\tau^2$ give $\operatorname{Var}(\overline I_R)=R^{-2}\sum_r\operatorname{Var}(\widehat I_r)=\tau^2/R$. Since the data are fixed in the probability law of these replicates, this variance concerns randomization only. [F3, given, algebra] ∎
