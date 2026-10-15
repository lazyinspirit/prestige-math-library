---
id: def-method-agreement-and-limits
kind: definition
title: "Method agreement and limits of agreement"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. M. Bland and D. G. Altman, Statistical methods for assessing agreement between two methods of clinical measurement, Lancet 1986; 327(8476):307–310, complete author-hosted reproduction"
      url: https://www-users.york.ac.uk/~mb55/meas/ba.pdf
    - title: "M. Bland, An Introduction to Medical Statistics, 4th ed., Oxford University Press 2015, §20.5"
      url: https://faculty.ksu.edu.sa/sites/default/files/An-Introduction-to-Medical-Statistics-Martin-Bland.pdf
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be the declared probability model for a
pre-specified target population of measurement conditions. Let $A$ and $B$ be
real random variables giving quantitative measurements of the same target
under the same stated conditions. The choice of target population and the
scientific applicability of its probability law are model assumptions; this
definition does not verify them.

Assume the paired difference $D:=A-B$ is square-integrable. It is measurable
because measurable real functions are closed under finite sums and scalar
multiples ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).
Define its **population bias** and standard deviation by
$$\mu_D:=\mathbb E[D],\qquad \sigma_D:=\sqrt{\operatorname{Var}(D)}.$$
The sign convention is $D=A-B$, so positive bias means that $A$ reads larger
than $B$ on average. The conventional rounded normal-reference limits of
agreement are $\mu_D-1.96\sigma_D$ and $\mu_D+1.96\sigma_D$.

For an iid sample $D_1,\ldots,D_n$ of paired differences from the declared
target population, with $n\ge2$ and observed values $d_1,\ldots,d_n$, define
$$\bar d:=\frac1n\sum_{i=1}^n d_i,\qquad s_D:=\sqrt{\frac1{n-1}\sum_{i=1}^n(d_i-\bar d)^2}.$$
The sample plug-in limits are $\bar d\pm1.96s_D$: they substitute the sample
mean and sample standard deviation into the conventional population formula.
They are point estimates; no unbiasedness, consistency, confidence coverage,
or exact finite-sample coverage for either endpoint is asserted here.

Repeated measurements on one target are not iid merely because there are many
recorded pairs. Their within-target dependence must be stated and modeled, for
example with a covariance or random-effects model. Correlation measures
linear association and does not by itself establish agreement. Limits of
agreement describe the distribution of differences; they do not decide
whether those differences are acceptable for a particular use or whether
either method is calibrated to a known truth.

## Remarks

The exact central normal quantile formula is established by a separate result
on this page. The customary $1.96$ display is a rounded normal quantile
convention.
