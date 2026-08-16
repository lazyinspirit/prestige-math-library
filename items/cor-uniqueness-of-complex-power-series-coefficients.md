---
id: cor-uniqueness-of-complex-power-series-coefficients
kind: corollary
title: "A complex power-series representation about a fixed centre has unique coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-complex-power-series-coefficient-formula]
aliases: []
landmark: false
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

If two complex power series about the same centre $a$ represent the same function on a neighbourhood of $a$, then their coefficients agree term by term.

## Facts & Assumptions

**Given:** Representations $f(z)=\sum c_n(z-a)^n=\sum d_n(z-a)^n$ on one neighbourhood of $a$.

[L1] In any power-series representation about $a$, the coefficient of order $n$ is $f^{(n)}(a)/n!$ ([[cor-complex-power-series-coefficient-formula]]).

## Proof

**Proof technique:** direct.

1.1 Both series represent the same function on a neighbourhood, so their derivatives of every order at $a$ are the same. [given]

2.1 Applying [L1] to both representations gives $c_n=f^{(n)}(a)/n!=d_n$ for every $n$, including $n=0$. [step 1.1, L1] ∎
