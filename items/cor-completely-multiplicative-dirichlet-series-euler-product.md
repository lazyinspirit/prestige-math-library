---
id: cor-completely-multiplicative-dirichlet-series-euler-product
kind: corollary
title: "Completely multiplicative Dirichlet series have geometric Euler factors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-multiplicative-dirichlet-series-euler-product, def-completely-multiplicative-arithmetic-function]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.7"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement

If $f$ is completely multiplicative and its Dirichlet series converges
absolutely at $s$, then

$$\sum_{n \ge 1} f(n)n^{-s} = \prod_p \frac{1}{1-f(p)p^{-s}}.$$

## Facts & Assumptions

**Given:** A completely multiplicative function $f$ and a point of absolute
convergence.

[L1] Completely multiplicative means $f(p^k)=f(p)^k$ for every prime power
([[def-completely-multiplicative-arithmetic-function]]).

[L2] Multiplicative Dirichlet series factor into Euler products
([[thm-multiplicative-dirichlet-series-euler-product]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\sum_{n \ge 1} f(n)n^{-s} = \prod_p \sum_{k \ge 0} f(p^k)p^{-ks}.$ [L2, given, algebra]

2.1 By [L1], each local factor is the geometric series $\sum_{k \ge 0} \bigl(f(p)p^{-s}\bigr)^k = \frac{1}{1-f(p)p^{-s}},$ whose denominator is nonzero because absolute convergence forces $|f(p)p^{-s}|<1$. Substituting into step 1.1 gives the claimed Euler product. [L1, step 1.1, algebra] ∎
