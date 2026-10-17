---
id: def-na-peano-kernel
kind: definition
title: "Peano kernel of a finite quadrature functional"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-canonical-natural, def-darboux-integral, def-factorial-and-falling-factorial, def-finite-sum, def-integer-power, def-real-polynomial-degree-leading-coefficient-and-monic, lem-changing-a-function-at-finitely-many-points, lem-nat-nonzero-is-successor, def-nat-order, lem-of-naturals-positive, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable, thm-reals-field, thm-riemann-criterion, def-partition-and-refinement, def-darboux-sums]
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
For a natural $r\ge1$, say that $Q$ is exact through degree $r-1$ if $L(p)=0$ for every formal real polynomial $p$ of degree at most $r-1$ ([[def-real-polynomial-degree-leading-coefficient-and-monic]]). Here $r-1$ is the natural predecessor specified by [[def-factorial-and-falling-factorial]]. For any natural $q$, the factorial $q!$ in a real-valued formula denotes its canonical real image $\iota(q!)$ from [[def-canonical-natural]]. This denominator is nonzero: $q!\ne0$ by [[def-factorial-and-falling-factorial]], every nonzero natural is a successor by [[lem-nat-nonzero-is-successor]] and therefore is at least $1$ in the natural order [[def-nat-order]], and its canonical real image is positive by [[lem-of-naturals-positive]], hence invertible by [[thm-reals-field]]. For $t\in[a,b]$ define
$$g_{r,t}(x):=\begin{cases}\dfrac{(x-t)^{r-1}}{\iota((r-1)!)},&x>t,\\0,&x\le t,\end{cases}\qquad K_r(t):=L(g_{r,t}).$$
The power is the natural power of [[def-integer-power]]. For $r\ge2$, $g_{r,t}$ is polynomial and continuous on each side of $t$ by [[thm-algebra-of-continuous-functions]]; the polynomial branch extends to $t$ with value $0$ because $r-1\ge1$, agreeing with the zero branch. Thus it is continuous on $[a,b]$ and Riemann-integrable by [[thm-continuous-implies-integrable]]. For $r=1$ it is the indicator of $(t,b]$; if $t=b$ it is zero, and if $t<b$, for each $\varepsilon>0$ choose $s\in(t,b)$ with $s-t<\varepsilon$ and use the partition with breakpoints $a,t,s,b$ after deleting repeated endpoints. The indicator is constant on all panels except $[t,s]$, where its oscillation is $1$, so its upper-minus-lower sum is at most $s-t<\varepsilon$; [[thm-riemann-criterion]] makes it integrable. At $r=1$ the denominator is $\iota(0!)=1$. Once $K_1$ is shown integrable, changing its values at the finitely many quadrature nodes does not change its integral by [[lem-changing-a-function-at-finitely-many-points]].
