---
id: lem-rolle-theorem-from-extreme-values
kind: lemma
title: Rolle's theorem from attained extrema
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-and-derivative-on-real-interval, lem-extreme-value-theorem-from-compactness]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 16"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec16.pdf"
---

## Statement

Let $a<b$, and let $g:[a,b]\to\mathbb R$ be continuous on $[a,b]$ and
differentiable on $(a,b)$. If $g(a)=g(b)$, then there is $c\in(a,b)$ with
$g'(c)=0$.

## Facts & Assumptions

**Given:** Continuity and differentiability as defined in
[[def-continuity-and-derivative-on-real-interval]], and the extreme-value
result [[lem-extreme-value-theorem-from-compactness]].

[L1] [[def-continuity-and-derivative-on-real-interval]]: $g'(c)$ is the
finite two-sided difference-quotient limit at an interior point.

[L2] [[lem-extreme-value-theorem-from-compactness]]: a continuous function on
$[a,b]$ attains both extrema.

## Proof

1.1 Write $k=g(a)=g(b)$. If $g$ is constant, choose $c=(a+b)/2\in(a,b)$; then $g'(c)=0$. Otherwise some value differs from $k$. If it is greater than $k$, [L2] gives an attained maximum greater than the endpoint values; if it is less, [L2] gives an attained minimum less than them. In either case an extremum occurs at an interior point $c$. [given, L2, choose]

2.1 At an interior local maximum, positive difference quotients are nonpositive and negative difference quotients are nonnegative. Since the common two-sided limit exists by [L1], it must be both nonpositive and nonnegative, hence zero. The inequalities reverse at a local minimum and again force $g'(c)=0$. This proves the claim. [step 1.1, L1, algebra] ∎

