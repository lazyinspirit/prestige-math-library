---
id: def-complex-path-polygonal-length-and-rectifiability
kind: definition
title: Polygonal length and rectifiability of complex paths
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
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
  - def-finite-sum
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: E. Stein and R. Shakarchi, Complex Analysis, Princeton Lectures in Analysis II, Chapter 1, Section 3
      url: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf
    - title: L. V. Ahlfors, Complex Analysis, 3rd ed., Chapter 4, Section 1.2
      url: https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf
---

## Definition

For $a\le b$, a **complex path** is a map $\gamma:[a,b]\to\mathbb C$ continuous
from the usual real metric to $d_{\mathbb C}(z,w)=|z-w|$
([[def-interval]], [[lem-real-line-is-a-metric-space]],
[[def-metric-continuity]], [[def-complex-metric-convergence-and-continuity]]).
Its domain and parametrization are part of the path, not merely its trace.

If $a<b$ and $P=(n,t)$ is a partition of $[a,b]$ as in
[[def-partition-and-refinement]], define

$$\ell_P^{\mathbb C}(\gamma):=\sum_{j<n}|\gamma(t_{j+1})-\gamma(t_j)|,\qquad L_{\mathbb C}(\gamma):=\sup_P\ell_P^{\mathbb C}(\gamma)\in\overline{\mathbb R}.$$

The sum is the ordinary finite real sum of the moduli of the chords. Its
supremum is taken in the extended real line
([[def-extended-reals]], [[lem-extended-reals-complete]]). The path is
**rectifiable** when these sums are bounded above by a real number, equivalently
when $L_{\mathbb C}(\gamma)<+\infty$. A bounded trace alone does not imply
rectifiability; the companion worked example gives a continuous path with
bounded trace and unbounded partition sums.

On a singleton interval $[a,a]$, define $L_{\mathbb C}(\gamma)=0$ and call every
path rectifiable. This convention does not invoke a partition, whose definition
requires distinct endpoints.

## Facts & Assumptions

**Given:** Reals $a\le b$ and a continuous map $\gamma:[a,b]\to\mathbb C$.

[F1] [[def-complex-metric-convergence-and-continuity]]: $d_{\mathbb C}(z,w)=|z-w|$ is a metric with finite nonnegative real values.

[F2] [[def-partition-and-refinement]]: For $a<b$, a partition is a finite strictly increasing list $a=t_0<\cdots<t_n=b$ with $n\ge1$; finite sums are as in [[def-finite-sum]] and sums of nonnegative terms are nonnegative by [[lem-finite-sum-laws]].

[F3] [[def-extended-reals]] and [[lem-extended-reals-complete]]: Every subset of $\overline{\mathbb R}$ has an extended-real supremum; for a nonempty set of real numbers bounded above in $\mathbb R$, that supremum is the real least upper bound.

## Proof

1.1 If $a<b$, every partition chord contributes $|\gamma(t_{j+1})-\gamma(t_j)|=d_{\mathbb C}(\gamma(t_{j+1}),\gamma(t_j))$, a finite nonnegative real by [F1]. The finite sum is therefore a finite nonnegative real by [F2]. [given, F1, F2]

2.1 The set of partition sums is nonempty: the list with $n=1$, $t_0=a$, $t_1=b$, and tail $t_k=b$ is a partition. Thus [F3] supplies its extended-real supremum. Since every sum is nonnegative, the supremum is not $-\infty$; it is finite exactly when some real number bounds all partition sums above. This is the stated rectifiability criterion. [F2, F3, step 1.1, construct]

3.1 If $a=b$, the definition assigns length $0$ and rectifiability directly; no partition is available or used. [given, F2] ∎
