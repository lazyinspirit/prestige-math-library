---
id: prop-soundararajan-divisibility-mass-bounds
kind: proposition
title: "Divisibility mass bounds for Hecke-multiplicative sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§3, Proposition 3.2 and its proof, printed pp. 5–6."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, discussion of Hecke relations, pp. 11–13."
---

## Statement

Let $f:\mathbb N\to\mathbb C$ be Hecke-multiplicative, let $x\ge1$, put
$S_x=\sum_{n\le x}|f(n)|^2$, and define
$F_x(t)=S_x^{-1}\sum_{n\le x/t}|f(n)|^2$ for $1\le t\le x$ and $F_x(t)=0$ for $t>x$.
For every real $y\ge1$ and every square-free positive integer $d$,
$$\sum_{\substack{n\le x/y\\d\mid n}}|f(n)|^2
\le \tau(d)\prod_{p\mid d}(1+|f(p)|^2)F_x(yd)S_x,$$
and
$$\sum_{\substack{n\le x/y\\d^2\mid n}}|f(n)|^2
\le \tau_3(d)\prod_{p\mid d}(2+|f(p^2)|^2)F_x(yd^2)S_x.$$
Here $\tau(d)$ is the number of positive divisors of $d$, and $\tau_3(d)$ is the number of ordered triples of positive integers with product $d$.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §3, Proposition 3.2, printed pp. 5–6.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The Hecke-multiplicative sequence and the notation in the Statement. In proof sums, extend $f$ to positive nonintegral rational arguments by zero; thus terms such as $f(m/b)$ vanish unless $b\mid m$.

[F1] $f(1)=1$ and $f(m)f(n)=\sum_{e\mid\gcd(m,n)}f(mn/e^2)$ for all positive $m,n$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

## Proof

1.1 For a prime $p$, [F1] implies $f(p)f(m)=f(pm)+\mathbf1_{p\mid m}f(m/p)$. Induction over the distinct primes dividing the square-free number $d$ therefore gives
$$|f(md)|\le\sum_{ab=d}|f(a)|\,|f(m/b)|.$$
There are $\tau(d)$ summands, so Cauchy–Schwarz gives
$$|f(md)|^2\le\tau(d)\sum_{ab=d}|f(a)|^2|f(m/b)|^2.$$
For square-free $a$, repeated coprime applications of [F1] give $|f(a)|^2=\prod_{p\mid a}|f(p)|^2$, and hence
$$\sum_{a\mid d}|f(a)|^2=\prod_{p\mid d}(1+|f(p)|^2).$$ [F1, given, induction, algebra]

1.2 Sum step 1.1 over $m\le x/(yd)$ and use $n=md$. For each fixed $b\mid d$, the map $m\mapsto m/b$ is injective on the terms for which $b\mid m$, and its values are at most $x/(yd)$; thus their squared coefficients sum to at most $\sum_{k\le x/(yd)}|f(k)|^2=F_x(yd)S_x$. The resulting sum is at most
$$\tau(d)F_x(yd)S_x\sum_{a\mid d}|f(a)|^2
=\tau(d)\prod_{p\mid d}(1+|f(p)|^2)F_x(yd)S_x.$$
If $yd>x$, both sides involving $F_x(yd)$ vanish because the original sum is empty. This proves the first inequality. [F1, step 1.1, given, algebra]

2.1 The Hecke identity gives
$$f(p^2)f(m)=f(mp^2)+\mathbf1_{p\mid m}f(m)+\mathbf1_{p^2\mid m}f(m/p^2).$$
Induction over the distinct primes dividing $d$ yields
$$|f(md^2)|\le\sum_{abc=d}|f(a^2)|\,|f(m/c^2)|.$$
There are $\tau_3(d)$ terms; Cauchy–Schwarz bounds the square by $\tau_3(d)$ times the sum of their squared terms. [F1, given, induction, algebra]

2.2 Sum step 2.1 over $m\le x/(yd^2)$ and put $n=md^2$. For fixed $c$, the map $m\mapsto m/c^2$ is injective on the terms for which $c^2\mid m$, with image at most $x/(yd^2)$, so the corresponding coefficient sum is at most $\sum_{k\le x/(yd^2)}|f(k)|^2=F_x(yd^2)S_x$. Therefore the result is bounded by
$$\tau_3(d)F_x(yd^2)S_x\sum_{a\mid d}|f(a^2)|^2\tau(d/a).$$
Since $d$ is square-free, coprime multiplicativity from [F1] factors the last sum prime by prime as
$$\sum_{a\mid d}|f(a^2)|^2\tau(d/a)=\prod_{p\mid d}(2+|f(p^2)|^2).$$
This proves the second inequality. If $yd^2>x$, the original sum is empty and the asserted bound is immediate. [F1, step 2.1, given, algebra] ∎
