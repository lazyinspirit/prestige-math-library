---
id: ex-divisor-function-from-zeta-square
kind: example
title: "The coefficient of 12 in zeta squared is the divisor count of 12"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-divisor-dirichlet-series-zeta-square]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.8"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Example

The coefficient of $12^{-s}$ in $\zeta(s)^2$ is $\tau(12)=6$.

## Facts & Assumptions

**Given:** The identity $\sum_{n \ge 1}\tau(n)n^{-s}=\zeta(s)^2$.

[L1] The square of the zeta Dirichlet series is the divisor-counting Dirichlet
series ([[cor-divisor-dirichlet-series-zeta-square]]).

## Verification

**Proof technique:** direct.

1.1 The positive divisors of $12$ are $1,2,3,4,6,12$, so $\tau(12)=6$. [L1, given, algebra]

2.1 Therefore [L1] says that the coefficient of $12^{-s}$ in $\zeta(s)^2$ is $6$. [L1, step 1.1] ∎
