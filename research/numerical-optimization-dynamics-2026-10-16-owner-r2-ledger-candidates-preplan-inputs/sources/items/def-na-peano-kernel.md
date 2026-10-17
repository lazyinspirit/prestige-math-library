---
id: def-na-peano-kernel
kind: definition
title: "Peano kernel of a finite quadrature functional"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-darboux-integral, def-factorial-and-falling-factorial, def-finite-sum, thm-reals-field]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.2"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 223–227, truncated-power definition and Peano representation for quadrature error."
verification:
  precheck: n/a
---

## Definition

Let $a<b$, let $x_1,\ldots,x_s\in[a,b]$ be a finite indexed list (repetitions are allowed), and let $w_1,\ldots,w_s\in\mathbb R$. For every Riemann-integrable $f:[a,b]\to\mathbb R$, define the quadrature value and residual by
$$Q(f):=\sum_{i=1}^{s}w_i f(x_i),\qquad L(f):=\int_a^b f(x)\,dx-Q(f).$$
For an integer $r\ge1$, say that $Q$ is exact through degree $r-1$ if $L(p)=0$ for every real polynomial $p$ of degree at most $r-1$. For $t\in[a,b]$ define
$$g_{r,t}(x):=\begin{cases}\dfrac{(x-t)^{r-1}}{(r-1)!},&x>t,\\0,&x\le t,\end{cases}\qquad K_r(t):=L(g_{r,t}).$$
For $r=1$, this means $g_{1,t}(x)=1$ when $x>t$ and $0$ otherwise; it is Riemann-integrable, and the values of $K_1$ at the finitely many quadrature nodes do not affect any integral of the kernel. For $r\ge2$, $g_{r,t}$ is continuous in $x$.
