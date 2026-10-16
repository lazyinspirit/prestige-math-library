---
id: def-complex-path-polygonal-length-and-rectifiability
kind: definition
title: Polygonal length and rectifiability of complex paths
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-complex-numbers-and-arithmetic
- def-complex-metric-convergence-and-continuity
- def-metric-continuity
- def-interval
- lem-real-line-is-a-metric-space
- def-partition-and-refinement
- def-complete-ordered-field
- def-extended-reals
- lem-extended-reals-complete
justified_by: []
aliases: []
sources:
  references:
  - title: U. Lang, Differential Geometry I, Section 1.1
    url: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
---

## Definition

For $a\le b$, a **complex path** is a map $\gamma:[a,b]\to\mathbb C$ continuous from the usual real metric to $d_{\mathbb C}$ ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metric-continuity]], [[def-complex-metric-convergence-and-continuity]]). Its parameter interval and parametrization are part of the path, not just its trace.

For $a<b$ and a partition $P=(t_0,\ldots,t_m)$ as in [[def-partition-and-refinement]], set

$$\ell_P^{\mathbb C}(\gamma)=\sum_{i<m}|\gamma(t_{i+1})-\gamma(t_i)|,\qquad L_{\mathbb C}(\gamma)=\sup_P\ell_P^{\mathbb C}(\gamma)\in[0,+\infty].$$

Every summand and hence every partition sum is a finite nonnegative real by the metric formula. There is at least one partition, $(a,b)$. The supremum is taken in the extended real line ([[def-extended-reals]], [[lem-extended-reals-complete]]). The path is **rectifiable** when the partition sums are bounded above by a real number; equivalently $L_{\mathbb C}(\gamma)<+\infty$. In that case the length is the nonnegative real least upper bound supplied by [[def-complete-ordered-field]]. Bounded trace alone is not the definition of rectifiability. Complex subtraction is that of [[def-complex-numbers-and-arithmetic]].

On a singleton interval $[a,a]$, set $L_{\mathbb C}(\gamma)=0$ and call every path rectifiable. No partition of a degenerate interval is invoked.
