---
id: cex-two-point-outer-measure-need-not-be-regular
kind: counterexample
title: "An outer measure on two points need not be regular"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-outer-measure, def-caratheodory-measurable-set, def-regular-outer-measure-and-measurable-hull]
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

## Statement refuted

Every outer measure is regular: every subset has a Carathéodory measurable hull of the same outer measure.

## Facts & Assumptions

**Given:** The set $X=\{0,1\}$ and $\mu^*(\varnothing)=0$, $\mu^*(\{0\})=\mu^*(\{1\})=1$, $\mu^*(X)=3/2$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

[F2] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

[F3] A **measurable hull** of $E$ is a Carathéodory measurable set $H\supseteq E$ with $\mu^*(H)=\mu^*(E)$; the outer measure is **regular** when every subset has a measurable hull. ([[def-regular-outer-measure-and-measurable-hull]])

## Counterexample

**Proof technique:** direct.

1.1 Exhausting the four subsets proves normalization and monotonicity. For subadditivity, a union equal to a singleton has a singleton member of total cost at least $1$, while a union equal to $X$ either has an $X$ member of cost $3/2$ or contains both singleton contributions of total cost $2\ge3/2$; hence [F1] holds. [F1, algebra]

2.1 For either singleton $E$, the test $A=X$ in [F2] would require $3/2=1+1$, so neither singleton is measurable; $\varnothing$ and $X$ are measurable directly. [step 1.1, F2, algebra]

3.1 The only measurable superset of a singleton is $X$, whose outer measure $3/2$ is larger than the singleton value $1$; therefore [F3] gives no measurable hull for either singleton, and the outer measure is not regular. [step 2.1, F3, algebra] ∎
