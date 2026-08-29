---
id: cor-dimension-of-the-kth-exterior-power
kind: corollary
title: "If $\\dim V=n$, then $\\dim\\Lambda^kV=\\binom{n}{k}$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-increasing-basis-wedges-form-a-basis, def-dimension, def-binomial-coefficient]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

If $V$ is finite-dimensional over $F$ with $\dim V=n$, then for every $0\le k\le n$,

$$\dim\Lambda^kV=\binom{n}{k}.$$

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ with $\dim V=n$.

[L1] The increasing-index wedges of an ordered basis form a basis of $\Lambda^kV$, indexed by the $k$-element subsets ([[thm-increasing-basis-wedges-form-a-basis]]).

[L2] The dimension of a finite-dimensional vector space is the size of any of its bases ([[def-dimension]]).

[L3] The binomial coefficient is $\binom{n}{k}=|[n]^k|$, the number of $k$-element subsets of an $n$-element set ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.


1.1 Since $\dim V=n$, there is an ordered basis $(e_1,\ldots,e_n)$ of $V$ by [L2]. [L2]

2.1 By [L1], the set of wedges $e_I$ over the $k$-element subsets $I$ of $\{1,\ldots,n\}$ is a basis of $\Lambda^kV$. [L1, step 1.1]

3.1 By [L3] there are exactly $\binom{n}{k}$ such subsets, and by [L2] the dimension equals that count. [L2, L3, step 2.1] ∎
