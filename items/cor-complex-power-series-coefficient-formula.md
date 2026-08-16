---
id: cor-complex-power-series-coefficient-formula
kind: corollary
title: "The coefficients of a complex power series are its derivatives at the centre divided by the corresponding factorials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-complex-power-series-sums-have-derivatives-of-all-orders, def-complex-integer-powers, def-factorial-and-falling-factorial]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum_{n\ge0}c_n(z-a)^n$ near $a$, then for every $n\in\mathbb N$,
$$c_n=\frac{f^{(n)}(a)}{n!}.$$

## Facts & Assumptions

**Given:** A complex power-series representation of $f$ about $a$.

[L1] The $n$th derivative is obtained by repeated termwise differentiation with falling-factorial coefficients ([[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

[L2] Complex natural powers are defined by the recursion $z^0=1$ and $z^{n+1}=z^nz$ for $n\in\mathbb N$; in particular $0^0=1$ ([[def-complex-integer-powers]]).

[L3] The factorial $n!$ is nonzero ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate [L1] at $z=a$, so every remaining power is $0^m$ with $m=k-n\ge0$. From the recursion of [L2], $0^{m+1}=0^m\cdot0=0$ for every $m\in\mathbb N$, so $0^m=0$ for every positive $m$, while $0^0=1$ by the base clause of [L2]. Hence every term with a positive remaining power vanishes and the term indexed by $n$ is $n!c_n$. [L1, L2, algebra]

2.1 Thus $f^{(n)}(a)=n!c_n$; divide by the nonzero factorial from [L3]. For $n=0$, this reads $c_0=f(a)$. [step 1.1, L3, algebra] ∎
