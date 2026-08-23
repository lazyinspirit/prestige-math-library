---
id: ex-zero-one-outer-measure-on-a-two-point-set
kind: example
title: "The zero-one outer measure on a two-point set has only the trivial measurable sets"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-outer-measure, def-caratheodory-measurable-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On $X=\{0,1\}$, define $\mu^*(\varnothing)=0$ and $\mu^*(E)=1$ for every nonempty $E\subseteq X$. This is an outer measure, and its Carathéodory measurable sets are exactly $\varnothing$ and $X$.

## Facts & Assumptions

**Given:** The finite set and set function in the Example.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

[F2] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

## Verification

**Proof technique:** direct.

1.1 Exhausting the four subsets gives normalization and monotonicity. For countable subadditivity, an empty union has value $0$, while a nonempty union has value $1$ and contains a point lying in a nonempty cover member, so the covering sum is at least $1$; hence [F1] holds. [F1, algebra]

2.1 The sets $\varnothing$ and $X$ satisfy [F2] identically. For either singleton $E$, the test $A=X$ gives $1=\mu^*(X)$ but $\mu^*(A\cap E)+\mu^*(A\setminus E)=1+1$, so neither singleton is measurable. [step 1.1, F2, algebra] ∎
