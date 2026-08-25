---
id: ex-an-eventown-family-of-maximum-size
kind: example
title: "The pairing construction gives an Eventown family of size $2^{\\lfloor n/2\\rfloor}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eventown, thm-every-maximal-eventown-family-is-maximum, def-set-family-and-its-incidence-matrix, def-incidence-vector-of-a-subset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.2"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

For $n=4$, group the points into the pairs $\{0,1\}$ and $\{2,3\}$. The family

$$\varnothing,\ \{0,1\},\ \{2,3\},\ \{0,1,2,3\}$$

is Eventown. For $n=5$ the same four sets, viewed as subsets of $[5]$, are still
Eventown and still maximal.

## Facts & Assumptions

**Given:** the two families above.

[L1] Eventown families have at most $2^{\lfloor n/2\rfloor}$ members ([[thm-eventown]]).

[L2] Maximal Eventown families have exactly that many members ([[thm-every-maximal-eventown-family-is-maximum]]).

## Verification

**Proof technique:** direct.

1.1 In both displayed families every set has even size, and the intersection of any two displayed sets is again $\varnothing$, $\{0,1\}$, $\{2,3\}$ or $\{0,1,2,3\}$, hence even. [given]

2.1 For $n=4$ there are four sets, which is $2^2=2^{\lfloor4/2\rfloor}$; for $n=5$ there are again four sets, which is $2^2=2^{\lfloor5/2\rfloor}$. [L1, step 1.1]

3.1 The $n=5$ family is maximal by [L2], so the floor in the general bound is visible already in the first odd case. [L2, step 2.1] ∎
