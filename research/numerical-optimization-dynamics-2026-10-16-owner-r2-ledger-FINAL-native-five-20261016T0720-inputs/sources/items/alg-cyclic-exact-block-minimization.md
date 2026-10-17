---
id: alg-cyclic-exact-block-minimization
kind: algorithm
title: "Cyclic exact block minimization"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-extended-reals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §2"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
---

## Definition

Let $d,n\ge1$, let $B_1,\ldots,B_n$ partition the coordinates of $\mathbb R^d$ into nonempty blocks, let $F:\mathbb R^d\to(-\infty,+\infty]$, and let $x^0$ satisfy $F(x^0)<+\infty$. A **cyclic exact block-minimization run** with sweep budget $K\in\mathbb N$ processes blocks in the fixed order $1,\ldots,n$ for at most $K$ sweeps. At the update of block $i$, hold all other coordinates at their current values and form
$$M_i(x_{-i})=\arg\min_{u\in\mathbb R^{|B_i|}}F(x_{-i},u).$$
If $M_i(x_{-i})=\varnothing$, return the last iterate and status `block-minimum-failure`. Otherwise replace the current block by any member of $M_i(x_{-i})$. If a minimizer is nonunique, the procedure is relation-valued and every member is an admissible choice; the convergence theorem on this page assumes unique continuous block-minimizer maps. After $K$ complete sweeps, return the current iterate and status `budget-limit`. The finite budget does not certify a stationary point.
