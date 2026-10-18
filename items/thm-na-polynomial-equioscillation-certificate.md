---
id: thm-na-polynomial-equioscillation-certificate
kind: theorem
title: "Exact polynomial equioscillation certifies best approximation"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-best-polynomial-uniform-error
  - lem-na-polynomial-alternating-signs-force-root-count
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
      locator: "Printed pp. 73–75, Theorem 10.1, equioscillation sufficiency."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 20–22, Theorem 4.4, sufficiency for T-spaces."
---

## Statement

Let $n\ge0$, let $f\in C([a,b],\mathbb R)$ with $a<b$, and let
$p\in\mathcal P_n([a,b])$. If $E:=\|f-p\|_{\infty,[a,b]}>0$ and there are
$n+2$ ordered nodes $x_0<\cdots<x_{n+1}$ in $[a,b]$ and a sign
$\sigma\in\{-1,1\}$ such
that
$$f(x_i)-p(x_i)=\sigma(-1)^iE\qquad(0\le i\le n+1),$$
then no polynomial in $\mathcal P_n([a,b])$ has smaller uniform error than
$p$. Thus the displayed residual values are an a posteriori optimality
certificate.

## Facts & Assumptions

**Given:** $n\ge0$, a nondegenerate closed interval $[a,b]$, a continuous real function $f$, a polynomial $p$ of degree at most $n$, its positive error $E=\|f-p\|_{\infty,[a,b]}$, and the stated ordered alternation nodes in $[a,b]$.

[F1] [[def-na-best-polynomial-uniform-error]]: the comparison class is $\mathcal P_n([a,b])$ and its error is the uniform norm on that interval.

[F2] [[lem-na-polynomial-alternating-signs-force-root-count]]: no nonzero polynomial of degree at most $n$ can have nonzero alternating signs at $n+2$ ordered nodes.

## Proof

1.1 Suppose $q\in\mathcal P_n([a,b])$ has $\|f-q\|_{\infty,[a,b]}<E$. At a node with $f(x_i)-p(x_i)=\sigma(-1)^iE$, the strict inequality gives $|f(x_i)-q(x_i)|<E$, so $q(x_i)-p(x_i)=(f(x_i)-p(x_i))-(f(x_i)-q(x_i))$ has the same nonzero sign as $\sigma(-1)^i$. [given, F1, algebra]

2.1 The polynomial $q-p$ has degree at most $n$ and, by step 1.1, has nonzero alternating signs at $n+2$ ordered nodes. This contradicts [F2]. Therefore no such $q$ exists, and $p$ is a best approximant. [given, F2, step 1.1, algebra] ∎
