---
id: fs-every-subset-is-caratheodory-measurable
kind: false-statement
title: "FALSE: every subset is Carathéodory measurable for every outer measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Every subset of every set is Carathéodory measurable for every outer measure on that set.

## Facts & Assumptions

**Given:** The two-point set $X=\{0,1\}$ and the set function $\mu^*(\varnothing)=0$, $\mu^*(A)=1$ for $A\ne\varnothing$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

[F2] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

## Refutation

**Proof technique:** direct.

1.1 The function vanishes at $\varnothing$ and is monotone; if a countable union is nonempty, at least one member is nonempty, so the union has value $1$ and the sum of the member values is at least $1$, while an empty union gives $0\le0$. Thus $\mu^*$ is an outer measure. [F1, algebra]

2.1 For $E=\{0\}$ and test set $A=X$, [F2] would require $1=\mu^*(X)=\mu^*(\{0\})+\mu^*(\{1\})=1+1$, which is false. [step 1.1, F2, algebra] ∎
