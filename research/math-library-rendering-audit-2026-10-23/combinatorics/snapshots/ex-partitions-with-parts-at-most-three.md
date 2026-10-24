---
id: ex-partitions-with-parts-at-most-three
kind: example
title: "Partitions with parts at most $3$ from a truncated multiset product"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-multiset-product-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Restricting the Euler product to part sizes $1,2,3$ gives

$$\frac{1}{(1-x)(1-x^2)(1-x^3)}.$$

The coefficient of $x^5$ is $5$, corresponding to the five partitions of $5$
whose parts are at most $3$:

$$3+2,\ 3+1+1,\ 2+2+1,\ 2+1+1+1,\ 1+1+1+1+1.$$

## Facts & Assumptions

**Given:** A combinatorial class having one object of each size $1$, $2$, and $3$, and no other objects.

[L1] If $\mathcal A$ has no size-zero objects and $a_n$ objects of size $n$, then $\operatorname{MSET}(\mathcal A)$ has generating function $\prod_{n\ge1}(1-x^n)^{-a_n}$ ([[thm-multiset-product-formula]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] to the Given class and multiplying the resulting factors to degree $5$ gives $(1-x)^{-1}(1-x^2)^{-1}(1-x^3)^{-1} = (1+x+x^2+x^3+x^4+x^5)(1+x^2+x^4)(1+x^3) = 1+x+2x^2+3x^3+4x^4+5x^5+O(x^6)$. [given, L1, algebra]

2.1 The five displayed partitions of $5$ are exactly the partitions whose part sizes lie in $\{1,2,3\}$, so the coefficient $5$ has the advertised interpretation. [step 1.1] ∎
