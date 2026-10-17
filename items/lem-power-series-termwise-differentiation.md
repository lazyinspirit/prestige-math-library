---
id: lem-power-series-termwise-differentiation
kind: lemma
title: Power series may be differentiated term by term inside their radius
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, def-continuity-and-derivative-on-real-interval, lem-real-and-complex-modulus-rules]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec22.pdf"
---

## Statement

Let $R_0>0$ and let $(a_n)_{n\ge0}$ be real coefficients such that for every
$0<R<R_0$ both $\sum_{n\ge0}|a_n|R^n$ and
$\sum_{n\ge1}n|a_n|R^{n-1}$ converge. Then
$F(x)=\sum_{n\ge0}a_nx^n$ is differentiable for $|x|<R_0$, with
$F'(x)=\sum_{n\ge1}na_nx^{n-1}$.

## Facts & Assumptions

**Given:** A field satisfying [[def-complete-ordered-real-field]], the
continuity/differentiability definition
[[def-continuity-and-derivative-on-real-interval]], and the real modulus rules
[[lem-real-and-complex-modulus-rules]].

[F1] [[def-continuity-and-derivative-on-real-interval]]: derivative means the
finite two-sided difference-quotient limit.

[L1] [[lem-real-and-complex-modulus-rules]]: $|xy|=|x||y|$ and
$|x+y|\le|x|+|y|$ for real $x,y$.

## Proof

1.1 Fix $c$ with $|c|<R_0$ and choose $R$ with $|c|<R<R_0$. For $0<|h|<R-|c|$, the identity $$ (c+h)^n-c^n=h\sum_{j=0}^{n-1}(c+h)^{n-1-j}c^j $$ for $n\ge1$ and [L1] yield $|((c+h)^n-c^n)/h|\le nR^{n-1}$. Thus the tail of the difference-quotient series beyond degree $N$ is at most $\sum_{n>N}n|a_n|R^{n-1}$, uniformly for these $h$. The tail of the proposed derivative series at $c$ has the same bound. [given, L1, algebra]

2.1 For fixed $N$, the difference quotient of the polynomial $\sum_{n=0}^N a_nx^n$ tends to $\sum_{n=1}^Nna_nc^{n-1}$ as $h\to0$ by the binomial identity. Given $\varepsilon>0$, choose $N$ so both tails bounded above are below $\varepsilon/3$, then choose $h$ small enough that the finite polynomial quotient differs from its derivative by less than $\varepsilon/3$. The full difference quotient therefore differs from $\sum_{n\ge1}na_nc^{n-1}$ by less than $\varepsilon$, proving the derivative formula. [F1, step 1.1, algebra] ∎

