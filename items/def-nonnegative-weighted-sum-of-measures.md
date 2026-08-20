---
id: def-nonnegative-weighted-sum-of-measures
kind: definition
title: "Nonnegative scalar multiples and countable weighted sums of measures"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-nonnegative-extended-series, def-measure]
justified_by: [thm-nonnegative-weighted-sums-of-measures]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Examples 1.4.24 and Exercise 1.4.22"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $\mu$ be a measure and let $c\in[0,+\infty]$. Define the scalar set function $c\mu$ by three disjoint branches:

$$ (c\mu)(E):=\begin{cases}0,&c=0,\\c\,\mu(E),&0<c<+\infty,\\0,&c=+\infty\text{ and }\mu(E)=0,\\+\infty,&c=+\infty\text{ and }\mu(E)>0.\end{cases}$$

Thus neither the zero branch nor the infinite branch forms the undefined extended-real product $0\cdot(+\infty)$.

For measures $(\mu_k)_{k\in\mathbb N}$ on the same measurable space and weights $c_k\in[0,+\infty]$, their **countable weighted sum** is the pointwise set function

$$\left(\sum_{k=0}^{\infty}c_k\mu_k\right)(E):=\sum_{k=0}^{\infty}(c_k\mu_k)(E),$$

using [[def-nonnegative-extended-series]]. Finite weighted sums are defined by the corresponding finite partial sum, with the empty weighted sum the zero set function. The fact that all these set functions are measures is [[thm-nonnegative-weighted-sums-of-measures]].
