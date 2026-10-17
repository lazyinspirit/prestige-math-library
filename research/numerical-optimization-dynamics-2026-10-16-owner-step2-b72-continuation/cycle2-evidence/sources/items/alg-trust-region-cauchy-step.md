---
id: alg-trust-region-cauchy-step
kind: algorithm
title: "The Cauchy step for a quadratic trust-region model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-trust-region-quadratic-model-and-ratio
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.1, printed pp. 71–73 / PDF pp. 91–93: Algorithm 4.2 and formulas (4.11)–(4.12) for the Cauchy point."
    - title: "Nick Gould, Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods"
      url: "https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf"
      locator: "§II, pp. 19–20: Cauchy point as the line minimizer along the negative gradient."
---

## Definition

Input a model of [[def-trust-region-quadratic-model-and-ratio]] with gradient
$g$, symmetric model matrix $B$, and
radius $\Delta>0$. If $g=0$, return $p_C=0$ with status `stationary`. If
$g\ne0$, set $c:=g^TBg$ and define
$$\tau:=\begin{cases}
\Delta/\|g\|_2,&c\le0,\\
\min\{\|g\|_2^2/c,\ \Delta/\|g\|_2\},&c>0.
\end{cases}$$
Return $p_C:=-\tau g$ with status `step`.
