---
id: thm-termwise-differentiation-of-complex-power-series
kind: theorem
title: "Inside its disc of convergence a complex power series is holomorphic and may be differentiated term by term"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-power-series-converge-locally-uniformly, lem-derived-complex-power-series-has-the-same-radius, def-complex-differentiability-holomorphic-and-entire]
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

Let $f(z)=\sum_{n\ge0}c_n(z-a)^n$ have radius $R$. If $|z-a|<R$, then $f$ is complex differentiable at $z$ and
$$f'(z)=\sum_{n\ge1}n c_n(z-a)^{n-1}.$$
Consequently $f$ is holomorphic on its open disc of convergence ([[def-complex-differentiability-holomorphic-and-entire]]).

## Facts & Assumptions

**Given:** A complex power series of radius $R$ and a point $z$ with $|z-a|<R$.

[L1] The series and its derived series converge uniformly on every closed subdisc whose radius is strictly smaller than $R$ ([[thm-complex-power-series-converge-locally-uniformly]], [[lem-derived-complex-power-series-has-the-same-radius]]).

## Proof

**Proof technique:** direct.

1.1 Choose $r$ with $|z-a|<r<R$. For $w$ near $z$, the finite identity $w^n-z^n=(w-z)\sum_{k<n}w^{n-1-k}z^k$ follows by expanding and telescoping, so the difference quotient of each monomial tends to $nz^{n-1}$. [choose, algebra]

2.1 On $|w-a|,|z-a|\le r$, the quotient in step 1.1 is bounded in modulus by $n r^{n-1}$ after translating the centre to $a$. The series $\sum n|c_n|r^{n-1}$ converges by [L1], so its tails are uniformly small. [step 1.1, L1]

3.1 Split the difference quotient of $f$ into a finite head and a tail. The finite head tends termwise to its derivative by step 1.1, while step 2.1 bounds the tail uniformly; hence the quotient tends to $\sum_{n\ge1}nc_n(z-a)^{n-1}$. [step 1.1, step 2.1]

4.1 Since $z$ was arbitrary in the open disc, the derivative exists at every such point, which is holomorphy by [[def-complex-differentiability-holomorphic-and-entire]]. If $R=0$ the disc is empty and the assertion is vacuous; the constant term differentiates to $0$. [step 3.1] ∎
