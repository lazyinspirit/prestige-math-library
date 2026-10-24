---
id: cex-three-point-outer-measure-has-only-trivial-caratheodory-sets
kind: counterexample
title: "A three-point outer measure has nonmeasurable subsets despite passing the whole-space split"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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
  references: []
pipeline_run: null
---

## Statement refuted

To check Carathéodory measurability of $E$, it is enough to test the defining split only with $A=X$.

## Facts & Assumptions

**Given:** The set $X=\{1,2,3\}$ and $\mu^*(\varnothing)=0$, $\mu^*(X)=2$, and $\mu^*(A)=1$ for every other nonempty $A\subseteq X$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

[F2] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

## Counterexample

**Proof technique:** direct.

1.1 Normalization and monotonicity follow by exhausting subset sizes. For subadditivity, a nonempty proper union has value $1$ and some member has value at least $1$; a union equal to $X$ either has an $X$ member of cost $2$ or requires at least two nonempty proper members of total cost at least $2$. Thus [F1] holds. [F1, algebra]

2.1 Every $E$ passes the whole-space equation: for nonempty proper $E$, the two pieces have value $1$ and sum to $2=\mu^*(X)$. But choose $x\in E$ and $y\notin E$ and test [F2] with $A=\{x,y\}$; then $\mu^*(A)=1$ while the two singleton pieces sum to $2$. Thus every nonempty proper set fails, and only $\varnothing,X$ are measurable. [step 1.1, F2, choose, algebra] ∎
