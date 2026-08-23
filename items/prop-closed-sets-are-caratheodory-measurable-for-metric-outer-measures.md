---
id: prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures
kind: proposition
title: "Closed sets are Carathéodory measurable for metric outer measures"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-outer-measure, def-caratheodory-measurable-set, lem-metric-outer-measure-boundary-layer-continuity, lem-caratheodory-subadditive-inequality-is-automatic, def-metric-topology]
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
    - title: "G. Folland, Real Analysis, 2nd ed., proof of Proposition 11.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Every closed subset of a metric space is Carathéodory measurable for every metric outer measure.

## Facts & Assumptions

**Given:** A metric outer measure $\mu^*$ on $(X,d)$, a closed set $F\subseteq X$, and a test set $A\subseteq X$.

[L1] For a closed set $F$ and a finite-outer-measure test set $A$, the positive-distance layers inside $A\setminus F$ increase to $A\setminus F$ in outer measure. ([[lem-metric-outer-measure-boundary-layer-continuity]])

[L2] For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. ([[lem-caratheodory-subadditive-inequality-is-automatic]])

[F1] An outer measure on a metric space is a **metric outer measure** when $\mu^*(A\cup B)=\mu^*(A)+\mu^*(B)$ for all nonempty $A,B$ with $d(A,B)>0$. ([[def-metric-outer-measure]])

## Proof

**Proof technique:** direct.

1.1 If $\mu^*(A)<+\infty$, let $B_n$ be the layers of [L1]. The sets $A\cap F$ and $B_n$ are disjoint and positively separated whenever both are nonempty, while normalization handles an empty member; hence [F1] and monotonicity give $\mu^*(A)\ge\mu^*((A\cap F)\cup B_n)=\mu^*(A\cap F)+\mu^*(B_n)$. [F1, algebra]

2.1 Taking the supremum over $n$ in step 1.1 and using [L1] gives $\mu^*(A)\ge\mu^*(A\cap F)+\mu^*(A\setminus F)$. [step 1.1, L1]

3.1 If $\mu^*(A)=+\infty$, the inequality in step 2.1 is automatic because the right side is at most $+\infty$; in every case [L2] supplies the reverse inequality, so the Carathéodory identity holds for every test set $A$. [step 2.1, L2, cases] ∎
