---
id: cor-na-best-polynomial-approximation-unique
kind: corollary
title: "The best uniform polynomial approximant is unique"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-best-polynomial-uniform-error
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-na-best-polynomial-approximation-exists
  - thm-na-polynomial-alternation-necessity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 74–75, uniqueness proof following Theorem 10.1."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 20–22, uniqueness consequences of alternation in a T-space."
---

## Statement

For every $f\in C([a,b],\mathbb R)$ with $a<b$ and every $n\ge0$, there is
exactly one $p_*\in\mathcal P_n([a,b])$ with
$\|f-p_*\|_{\infty,[a,b]}=E_n(f;[a,b])$.

## Facts & Assumptions

**Given:** $I=[a,b]$ with $a<b$, $n\ge0$, and $f\in C(I,\mathbb R)$.

[F1] [[def-na-best-polynomial-uniform-error]]: $E_n(f;I)$ is the infimum of the uniform errors over $\mathcal P_n(I)$.

[F2] [[thm-na-best-polynomial-approximation-exists]]: at least one polynomial in $\mathcal P_n(I)$ attains $E_n(f;I)$.

[F3] [[thm-na-polynomial-alternation-necessity]]: if the best error is positive, a best polynomial has $n+2$ ordered alternating extremal points.

[F4] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: every real polynomial of degree at most $n$ has a coefficient-list representative.

[F5] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots.

## Proof

1.1 Let $p,q\in\mathcal P_n(I)$ both attain $E:=E_n(f;I)$. If $E=0$, then $\|f-p\|_{\infty,I}=\|f-q\|_{\infty,I}=0$, so $p=f=q$ at every point of $I$. [given, F1, F2, algebra]

1.2 Suppose $E>0$ and set $r=(p+q)/2\in\mathcal P_n(I)$. The triangle inequality gives $\|f-r\|_{\infty,I}\le E$, while [F1] gives $\|f-r\|_{\infty,I}\ge E$; hence $r$ is also best. By [F3], choose ordered alternating extrema $x_0<\cdots<x_{n+1}$ for $f-r$. [F1, F3, given, choose, algebra]

2.1 At each $x_i$, $f(x_i)-r(x_i)$ equals either $E$ or $-E$. It is the average of $f(x_i)-p(x_i)$ and $f(x_i)-q(x_i)$, each lying in $[-E,E]$. An average of two numbers in this interval equals $E$ only if both are $E$, and equals $-E$ only if both are $-E$. Thus $p(x_i)=q(x_i)$ for all $n+2$ nodes. [given, F2, F3, step 1.2, algebra]

3.1 Choose coefficient-list representatives $P,Q$ of $p,q$ using [F4]. The polynomial $P-Q$ has degree at most $n$ and vanishes at the $n+2$ distinct points from step 2.1. If it were nonzero, [F5] would bound its distinct real roots by $n$, a contradiction. Thus $P-Q=0$, so their restrictions satisfy $p=q$. Existence is [F2], hence the best approximant is unique. [F2, F4, F5, step 2.1, algebra] ∎
