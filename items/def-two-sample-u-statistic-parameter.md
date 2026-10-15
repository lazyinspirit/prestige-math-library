---
id: def-two-sample-u-statistic-parameter
kind: definition
title: Two-sample U-statistic parameter
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-measurable-function-between-measurable-spaces
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Definition

Let $(\mathsf X,\mathcal A)$ be a measurable space, let $P,Q$ be probability
measures on it, and let $r\ge1$ be a fixed integer. Give $\mathsf X^{2r}$
the product sigma-algebra and the product probability measure
$P^{\otimes r}\otimes Q^{\otimes r}$. A **two-sample order-$(r,r)$ kernel** is a
measurable function $h:\mathsf X^{2r}\to\mathbb R$ that is symmetric in its
first $r$ arguments and separately symmetric in its last $r$ arguments. If
$h$ is integrable under this product law, its **two-sample U-statistic
parameter** is

$$\theta(P,Q;h):=\int_{\mathsf X^{2r}}h\,d(P^{\otimes r}\otimes Q^{\otimes r}).$$

The value is finite and real. This definition imposes no null hypothesis and
no antisymmetry condition; those are hypotheses of later results.
