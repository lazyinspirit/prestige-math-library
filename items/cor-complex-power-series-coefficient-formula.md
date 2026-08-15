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

[L2] Complex natural powers satisfy $0^0=1$ and $0^m=0$ for positive $m$ ([[def-complex-integer-powers]]).

[L3] The factorial $n!$ is nonzero ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate [L1] at $z=a$. By [L2], every term with a positive remaining power vanishes and the term indexed by $n$ is $n!c_n$. [L1, L2]

2.1 Thus $f^{(n)}(a)=n!c_n$; divide by the nonzero factorial from [L3]. For $n=0$, this reads $c_0=f(a)$. [step 1.1, L3, algebra] ∎
