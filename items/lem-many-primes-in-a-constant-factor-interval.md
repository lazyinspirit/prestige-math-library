---
id: lem-many-primes-in-a-constant-factor-interval
kind: lemma
title: "Many primes lie in a constant-factor interval above a quadratic threshold"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-chebyshev-prime-counting-bounds, thm-logarithm-derivative-and-integral]
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Lemma 4"
      url: "https://arxiv.org/pdf/math/0405392v1"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2, Chapter 5"
      url: "https://www.shoup.net/ntb/ntb-v2_0.pdf"
---

## Statement

For every real $A\ge2$ there are constants $C>A$, $c>0$, and $P_0\ge3$ such
that, for every real $P\ge P_0$, the interval $(AP,CP]$ contains at least
$cP/\log P$ primes. Consequently there is a constant $K\ge1$, depending only
on $A$, such that if an integer $r\ge1$ and a real $P\ge\max(P_0,Kr^2)$ are
given, then $(AP,CP]$ contains at least $r$ distinct primes.

## Statement references

[Heath-Brown, the prime-selection step](https://arxiv.org/pdf/math/0405392v1)

[Shoup, Chebyshev’s theorem on the density of primes, Chapter 5](https://www.shoup.net/ntb/ntb-v2_0.pdf)

## Facts & Assumptions

**Given:** The constants and variables in the Statement.

[F1] [[thm-chebyshev-prime-counting-bounds]]: There are constants
$0<c_1<c_2$ and $x_0$ such that
$c_1x/\log x\le\pi(x)\le c_2x/\log x$ for all $x\ge x_0$.

[F2] [[thm-logarithm-derivative-and-integral]]: For $x>0$,
$(\log x)'=1/x$.

## Proof

1.1 Fix $A\ge2$ and choose $C>A$ so large that
$\delta:=c_1C/2-c_2A>0$. Choose $P_0$ large enough that for every $P\ge P_0$
both $AP$ and $CP$ are at least $x_0$, $\log(AP)\ge\log P$,
$\log(CP)\le2\log P$, and $P_0\ge e^2$. By [F2] and the quotient rule,
$$\left(\frac{x}{\log x}\right)'=\frac{\log x-1}{(\log x)^2}>0\qquad(x\ge P_0),$$
so $x/\log x$ is increasing on $[P_0,\infty)$. Consequently [F1] gives
$$\pi(CP)-\pi(AP)\ge\left(\frac{c_1C}{2}-c_2A\right)\frac{P}{\log P}=\delta\frac{P}{\log P}.$$
This difference counts primes in $(AP,CP]$, proving the first assertion.
[F1, F2, given, choose, algebra]

2.1 Choose $K$ large enough that $K/(\log K+2)\ge1/\delta$ and
$K\ge P_0$. Since $x/\log x$ is increasing for $x\ge P_0$ by step 1.1, if
$P\ge Kr^2$ and $r\ge1$, then
$$\frac{P}{\log P}\ge\frac{Kr^2}{\log(Kr^2)}\ge\frac{K}{\log K+2}\,r.$$
The last inequality uses $\log r\le r$, which gives
$\log(Kr^2)\le(\log K+2)r$. Therefore the first assertion supplies at least
$r$ primes in $(AP,CP]$. [step 1.1, given, choose, algebra] ∎
