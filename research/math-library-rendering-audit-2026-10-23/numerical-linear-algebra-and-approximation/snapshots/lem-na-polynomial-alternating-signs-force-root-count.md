---
id: lem-na-polynomial-alternating-signs-force-root-count
kind: lemma
title: "Alternating polynomial signs force the Haar zero-count contradiction"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-algebra-of-continuous-functions
  - thm-intermediate-value
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–75, Theorem 10.1 and its sign-change proof."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 20–22, Theorem 4.4 for T-spaces; the polynomial specialization is proved locally here."
---

## Statement

Let $n\ge0$, let $p$ be a nonzero real polynomial of degree at most $n$, and
let $x_0<\cdots<x_{n+1}$ be real numbers. The values $p(x_i)$ cannot all be
nonzero with alternating signs.

## Facts & Assumptions

**Given:** $n\ge0$, a nonzero real polynomial $p$ of degree at most $n$, and
$x_0<\cdots<x_{n+1}$ with each $p(x_i)\ne0$.

[F1] [[thm-algebra-of-continuous-functions]]: every real polynomial function is continuous on its domain.

[F2] [[thm-intermediate-value]]: if a continuous real function has endpoint values of opposite signs on a closed interval, it has a zero in the open interval.

[F3] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots.

## Proof

1.1 Suppose that the nonzero values $p(x_i)$ alternate in sign. By [F1], $p$ is continuous on each $[x_i,x_{i+1}]$. Since the endpoint values are nonzero and have opposite signs, [F2] gives a root $z_i\in(x_i,x_{i+1})$ for every $0\le i\le n$. These open intervals are pairwise disjoint, so the $z_i$ are $n+1$ distinct real roots. [given, F1, F2, construct]

2.1 The $n+1$ distinct roots from step 1.1 contradict [F3], because $p$ is nonzero and has degree at most $n$. Therefore the assumed alternating nonzero values cannot occur. [given, F3, step 1.1, algebra] ∎