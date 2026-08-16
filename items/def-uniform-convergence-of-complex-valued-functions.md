---
id: def-uniform-convergence-of-complex-valued-functions
kind: definition
title: "Uniform convergence and the uniformly Cauchy condition for complex-valued functions, with the componentwise dictionary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-complex-metric-convergence-and-continuity, thm-complex-plane-is-complete]
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
pipeline_run: null
---

## Definition

Let $X$ be a set and let $f_n,f:X\to\mathbb C$. The sequence $(f_n)$ **converges uniformly** to $f$ when
$$\forall\varepsilon>0\ \exists N\ \forall n\ge N\ \forall x\in X:\quad |f_n(x)-f(x)|<\varepsilon.$$
It is **uniformly Cauchy** when
$$\forall\varepsilon>0\ \exists N\ \forall m,n\ge N\ \forall x\in X:\quad |f_m(x)-f_n(x)|<\varepsilon.$$

Writing $f_n=u_n+iv_n$ and $f=u+iv$, uniform convergence in complex modulus is equivalent to uniform convergence of both real component sequences. This follows from $|u_n-u|,|v_n-v|\le |f_n-f|$ and $|f_n-f|\le |u_n-u|+|v_n-v|$. These are the complex analogues of [[def-pointwise-uniform-and-uniformly-cauchy-convergence]], using the metric of [[def-complex-metric-convergence-and-continuity]] and the componentwise convergence clause in [[thm-complex-plane-is-complete]].
