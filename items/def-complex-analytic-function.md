---
id: def-complex-analytic-function
kind: definition
title: "Complex analytic functions as locally representable by convergent power series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-series-power-series-and-absolute-convergence, def-complex-differentiability-holomorphic-and-entire]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open and let $f:U\to\mathbb C$. The function $f$ is **analytic at** $a\in U$ if there are $r>0$ and complex coefficients $(c_n)_{n\ge0}$ such that $B(a,r)\subseteq U$ and
$$f(z)=\sum_{n=0}^{\infty}c_n(z-a)^n\qquad(z\in B(a,r)),$$
with convergence in the sense of [[def-complex-series-power-series-and-absolute-convergence]]. It is **analytic on** $U$ if it is analytic at every point of $U$.

This terminology is distinct from **holomorphic** in [[def-complex-differentiability-holomorphic-and-entire]]: analytic is defined by local power-series representation, while holomorphic is defined by complex differentiability.
