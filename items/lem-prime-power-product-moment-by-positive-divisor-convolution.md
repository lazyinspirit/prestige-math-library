---
dependency_level: 2
id: lem-prime-power-product-moment-by-positive-divisor-convolution
kind: lemma
title: Prime-power product moment by positive divisor convolution
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
- thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Matomäki–Radziwiłł, Multiplicative Functions in Short Intervals, Lemmas8,11,13; elementary local alternative arguments and refined kernel calculation
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals, Lemma2.5; local Selberg/tent-kernel alternative
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Let $X\ge1$, $Y_1\ge2$, $Y_2\ge1$, $T\ge1$, and put $k=\lceil\log Y_2/\log Y_1\rceil$. For coefficients $|c_p|,|a_m|\le1$, define $Q(s)=\sum_{Y_1\le p\le2Y_1}c_pp^{-s}$ and $A(s)=\sum_{X/Y_2\le m\le2X/Y_2}a_mm^{-s}$. Then

$$\int_{-T}^T|Q(1+it)^kA(1+it)|^2dt\ll (T/X+2^kY_1)(k!)^2.$$

The constant is absolute, also when $k=0$ or a coefficient support is empty.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[[thm-canonical-prime-factorisation]]

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[thm-canonical-prime-factorisation]] gives its stated result under its stated hypotheses.

## Proof

1.1 Let $g(n)=\prod_{Y_1\le p\le2Y_1}(v_p(n)+1)$, where $v_p(n)$ is the exponent of $p$ in $n$. Unique factorization makes this a nonnegative multiplicative function. Write $g^2=1*h$ by divisor convolution. Then $h(p^j)=2j+1$ for $j\ge1$ when $p\in[Y_1,2Y_1]$, and $h(p^j)=0$ otherwise; all $h(n)\ge0$. Consequently, for $Z\ge1$, $\sum_{n\le Z}g(n)^2=\sum_{d\le Z}h(d)\lfloor Z/d\rfloor\le Z\prod_{Y_1\le p\le2Y_1}(1+\sum_{j\ge1}(2j+1)p^{-j})\ll Z$. Indeed every factor has logarithm $O(1/p)$ uniformly for $p\ge2$, and $\sum_{Y_1\le p\le2Y_1}1/p$ is bounded by the harmonic sum of all integers in that dyadic interval, hence by an absolute constant. The geometric-power series at $p=2$ is finite as well. [given, F1, F2, F3, algebra]

2.1 Writing $Q(s)^kA(s)=\sum b_nn^{-s}$, its coefficient satisfies $|b_n|\le k!g(n)$. For each possible product $r$ of $k$ primes dividing $n$, there are at most $k!$ ordered prime tuples giving $r$, and at most $g(n)$ possible such divisors $r$; the residual $m=n/r$ is fixed. The support lies in $[X,2^{k+1}Y_1X]$, because $Y_2\le Y_1^k\le Y_1Y_2$. Splitting the positive integers $n\ge X$ into intervals $[2^jX,2^{j+1}X)$ and applying the bound from step 1.1 gives $\sum |b_n/n|^2\ll(k!)^2/X$. Set $v=t+T$ and $U=2T\ge2$. The polynomial becomes $\sum_n(b_n/n)n^{iT}n^{-iv}$ on $[0,U]$, with the same coefficient square norm since $|n^{iT}|=1$. Thus [F2] applied on $[0,U]$ gives $\ll(T+2^{k+1}Y_1X)(k!)^2/X$. This is the claimed bound; zero supports and $k=0$ retain the same inequalities. [given, F1, F2, F3, step 1.1, algebra] ∎
