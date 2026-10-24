---
id: lem-c1-divided-difference-extends-continuously
kind: lemma
title: The first divided difference of a C1 function extends continuously
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-higher-derivatives-and-smoothness, def-derivative]
proof_strategy: direct
axiom_use: None. The extension uses the definition of derivative.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §5.19, subtraction of the singular value at an interior pole.
---

## Statement

Let $a<c<b$ and $f\in C^1([a,b])$. Define $g(x)=(f(x)-f(c))/(x-c)$ for $x\ne c$ and set $g(c)=f'(c)$. Then $g$ is continuous on $[a,b]$.

## Facts & Assumptions

**Given:** Reals $a<c<b$ and $f\in C^1([a,b])$.

[F1] [[def-higher-derivatives-and-smoothness]]: $f\in C^1$ means $f$ and its first derivative are continuous on the interval, with one-sided endpoint derivatives.

[F2] [[def-derivative]]: $f'(c)=\lim_{x\to c,,x\ne c}(f(x)-f(c))/(x-c)$.

## Proof

1.1 On $[a,b]\setminus\{c\}$ the numerator and denominator are continuous and the denominator is nonzero, so their quotient $g$ is continuous at every point other than $c$. [given, F1, algebra]

2.1 By the derivative limit in [F2], the quotient defining $g(x)$ tends to the assigned value $f'(c)=g(c)$ as $x\to c$. Thus $g$ is continuous at $c$ as well, and hence on the whole interval. [given, F2, algebra] ∎

