---
id: def-taylor-series-holomorphic-function
kind: definition
title: "The Taylor series of a holomorphic function at a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-series-power-series-and-absolute-convergence, thm-cauchy-integral-formula-higher-derivatives, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, §2.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Ch. 2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Definition

Let $f$ be holomorphic on an open set $\Omega\subseteq\mathbb C$, and let $a\in\Omega$. The Taylor series of $f$ at $a$ is $\sum_{n\ge0}f^{(n)}(a)(z-a)^n/n!$.

Every derivative $f^{(n)}(a)$ exists by [[thm-cauchy-integral-formula-higher-derivatives]], and $n!$ is the positive factorial of [[def-factorial-and-falling-factorial]], so each coefficient

$$c_n:=\frac{f^{(n)}(a)}{n!}$$

is a well-defined complex number. The resulting complex power series is understood according to [[def-complex-series-power-series-and-absolute-convergence]]. This definition names the formal series; its convergence and equality with $f$ are conclusions of the Taylor expansion theorem.
