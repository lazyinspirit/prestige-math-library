---
id: ex-counting-outer-measure-is-metric-on-the-real-line
kind: example
title: "Counting outer measure is a metric outer measure on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-outer-measure, ex-counting-outer-measure, lem-real-line-is-a-metric-space, thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 11.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Example

Counting outer measure on $\mathbb R$, equipped with its usual metric, is a metric outer measure. Hence every Borel subset is Carathéodory measurable, while in fact every subset is measurable.

## Facts & Assumptions

**Given:** The real line and counting outer measure.

[F1] An outer measure on a metric space is a **metric outer measure** when $\mu^*(A\cup B)=\mu^*(A)+\mu^*(B)$ for all nonempty $A,B$ with $d(A,B)>0$. ([[def-metric-outer-measure]])

[L1] Counting measure is an outer measure on $\mathcal P(X)$ and every subset of $X$ is Carathéodory measurable. ([[ex-counting-outer-measure]])

[L2] The function $d_{\mathbb R}(x,y)=|x-y|$ is a metric on $\mathbb R$, called its usual metric. ([[lem-real-line-is-a-metric-space]])

[L3] Every Borel subset of a metric space is Carathéodory measurable for every metric outer measure. ([[thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures]])

## Verification

**Proof technique:** direct.

1.1 By [L2], $d_{\mathbb R}(x,y)=|x-y|$ is the usual metric on $\mathbb R$. [L2]

2.1 Positively separated nonempty sets are disjoint, so additivity of counting measure on disjoint sets in [L1] gives the equality required by [F1]; if either set is empty, both sides agree by the zero value. Thus counting outer measure is metric. [step 1.1, F1, L1, algebra]

3.1 Applying [L3] gives Borel measurability, while [L1] gives the stronger conclusion that every subset of $\mathbb R$ is Carathéodory measurable. [step 2.1, L1, L3] ∎
