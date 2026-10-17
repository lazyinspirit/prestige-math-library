---
id: lem-mean-value-theorem-on-closed-interval
kind: lemma
title: Mean value theorem on a closed real interval
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, def-continuity-and-derivative-on-real-interval, lem-rolle-theorem-from-extreme-values]
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

Let $f:[a,b]\to\mathbb R$ be continuous on $[a,b]$ and differentiable on
$(a,b)$, with $a<b$. Then there is $c\in(a,b)$ such that
$$
f(b)-f(a)=f'(c)(b-a).
$$

## Facts & Assumptions

**Given:** A field satisfying [[def-complete-ordered-real-field]], real
endpoints $a<b$, and $f:[a,b]\to\mathbb R$ continuous on $[a,b]$ and
differentiable on $(a,b)$ as defined in
[[def-continuity-and-derivative-on-real-interval]].

[F1] [[def-continuity-and-derivative-on-real-interval]]: continuity is the
relative epsilon-delta condition; differentiability is existence of the
finite two-sided difference-quotient limit.

[L1] [[lem-rolle-theorem-from-extreme-values]]: a continuous function on
$[a,b]$ differentiable on $(a,b)$ with equal endpoint values has an interior
point with derivative zero.

## Proof

1.1 Let $m=(f(b)-f(a))/(b-a)$ and define $g(t)=f(t)-f(a)-m(t-a)$. The function $g$ is continuous on $[a,b]$ and differentiable on $(a,b)$ by [F1], and $g(a)=g(b)=0$. Applying [L1] gives $c\in(a,b)$ with $g'(c)=0$. [given, F1, L1, construct]

2.1 Differentiating the displayed affine expression gives $g'(c)=f'(c)-m=0$. Thus $f'(c)=(f(b)-f(a))/(b-a)$; multiplying by $b-a>0$ proves the identity. [step 1.1, algebra] ∎

