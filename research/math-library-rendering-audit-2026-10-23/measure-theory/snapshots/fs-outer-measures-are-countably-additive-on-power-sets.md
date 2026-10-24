---
id: fs-outer-measures-are-countably-additive-on-power-sets
kind: false-statement
title: "FALSE: every outer measure is countably additive on the whole power set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-outer-measure]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Every outer measure is countably additive on its entire power-set domain.

## Facts & Assumptions

**Given:** The two-point set $X=\{0,1\}$ and the set function $\mu^*(\varnothing)=0$, $\mu^*(A)=1$ for $A\ne\varnothing$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

## Refutation

**Proof technique:** direct.

1.1 The function vanishes at the empty set and is monotone; every cover of a nonempty union has a nonempty member, so its total cost is at least $1$, and therefore the function is an outer measure. [F1, algebra]

2.1 The disjoint sets $\{0\}$ and $\{1\}$ have union $X$, but $\mu^*(X)=1$ whereas $\mu^*(\{0\})+\mu^*(\{1\})=2$, so countable additivity fails after padding the pair by empty sets. [step 1.1, algebra] ∎
