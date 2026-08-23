---
id: lem-caratheodory-subadditive-inequality-is-automatic
kind: lemma
title: "In the Carathéodory identity, the subadditive inequality is automatic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
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

For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. Consequently, to prove that $E$ is Carathéodory measurable ([[def-caratheodory-measurable-set]]), it suffices to prove the reverse inequality for every $A\subseteq X$.

## Facts & Assumptions

**Given:** An outer measure $\mu^*$ on $X$ and subsets $A,E\subseteq X$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

## Proof

**Proof technique:** direct.

1.1 The test set decomposes as $A=(A\cap E)\cup(A\setminus E)$. [given, algebra]

2.1 Apply countable subadditivity in [F1] to the two sets in step 1.1 followed by empty sets. This gives $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$, including $0=0+0$ when $A=\varnothing$ and without subtracting when a value is $+\infty$. [step 1.1, F1, algebra] ∎
