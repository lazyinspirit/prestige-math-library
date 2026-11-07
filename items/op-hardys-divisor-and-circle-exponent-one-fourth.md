---
id: op-hardys-divisor-and-circle-exponent-one-fourth
kind: open-problem
title: "Hardy Divisor and Circle Exponent 1/4 Conjecture"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-dirichlet-divisor-error-term, def-gauss-circle-error-term]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "Conjecture 1.1 and §1"
    - title: "Youness Lamzouri, “Sharp Omega Results for the Divisor and Circle Problems”"
      url: "https://arxiv.org/pdf/2605.21476v1"
      locator: "§1, statement of the conjectured pointwise exponent"
verification:
  precheck: n/a
---

## Open problem

For every ε>0, do there exist constants C_ε>0 and x_ε≥1 such that for every real x≥x_ε, both |Δ(x)|≤C_εx^{1/4+ε} and |P(x)|≤C_εx^{1/4+ε}? Here Δ is the Dirichlet divisor error and P uses squared radius.

## Open problem references

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

[Youness Lamzouri, “Sharp Omega Results for the Divisor and Circle Problems”](https://arxiv.org/pdf/2605.21476v1)


## Facts & Assumptions

[F1] [[def-dirichlet-divisor-error-term]]: For each positive integer $n$, put $d(n):=\tau(n)$, the number of positive divisors of $n$. Let $\gamma$ be the Euler–Mascheroni constant. All sums indexed by $n$ are over positive integers. For every real $x\ge1$,
$$\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.$$

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.
## Status

Open in the sources consulted for this draft as of 2026-10-26. The formulation is the shared exponent-one-fourth upper-bound conjecture for the two error terms; no global claim about all current literature is made.
