---
id: lem-na-polynomial-coefficient-bound-from-fixed-nodes
kind: lemma
title: "Polynomial coefficients are bounded by values at fixed distinct nodes"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
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
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Online chapter ‘Polynomial interpolation,’ Definition 2.1.1 and §2.1.1 (interpolation at distinct nodes as a Vandermonde system)."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 5"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 33–39, polynomial interpolation and cardinal formula."
---

## Statement

Let $n\ge0$ and let $t_0,\ldots,t_n$ be distinct real numbers. For
$0\le j\le n$, define
$$L_j(x):=\prod_{k\ne j}\frac{x-t_k}{t_j-t_k}.$$
If $p(x)=\sum_{k=0}^{n}c_kx^k$ has degree at most $n$, then
$$p(x)=\sum_{j=0}^{n}p(t_j)L_j(x).$$
Consequently, writing $L_j(x)=\sum_{k=0}^{n}\ell_{jk}x^k$, every coefficient
satisfies
$$|c_k|\le\left(\sum_{j=0}^{n}|\ell_{jk}|\right)\max_{0\le j\le n}|p(t_j)|.$$
The empty product convention gives $L_0=1$ when $n=0$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, distinct real nodes $t_0,\ldots,t_n$, and a real polynomial $p$ of degree at most $n$.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a polynomial of degree at most $n$ is a finite coefficient sum $\sum_{k=0}^n c_kx^k$.

[F2] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero polynomial of degree at most $n$ has at most $n$ distinct real roots.

## Proof

1.1 Each denominator $t_j-t_k$ is nonzero, so every $L_j$ is a polynomial of degree at most $n$ and $L_j(t_i)$ is $1$ for $i=j$ and $0$ otherwise. The polynomial $p-\sum_jp(t_j)L_j$ has degree at most $n$ and vanishes at the $n+1$ distinct nodes; [F2] makes it the zero polynomial. This also covers $n=0$, when $L_0=1$. [F1, F2, given, construct, algebra]

2.1 Comparing the coefficients of $x^k$ in the identity of step 1.1 gives $c_k=\sum_jp(t_j)\ell_{jk}$. The triangle inequality yields the stated coefficient bound. [given, step 1.1, algebra] ∎
