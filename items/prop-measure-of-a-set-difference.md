---
id: prop-measure-of-a-set-difference
kind: proposition
title: "Measure of a set difference when the smaller set has finite measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, prop-measure-monotonicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.57"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Let $\mu$ be a measure and let $A\subseteq B$ be measurable with $\mu(A)<+\infty$. Then

$$\mu(B)=\mu(A)+\mu(B\setminus A).$$

If $\mu(B)<+\infty$, all terms are real and hence $\mu(B\setminus A)=\mu(B)-\mu(A)$. If $\mu(B)=+\infty$, then $\mu(B\setminus A)=+\infty$.

## Facts & Assumptions

**Given:** Measurable sets $A\subseteq B$ for a measure $\mu$, with $\mu(A)<+\infty$.

[L1] A measure is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L2] If $C\subseteq D$ are measurable, then $\mu(C)\le\mu(D)$ ([[prop-measure-monotonicity]]).

## Proof

**Proof technique:** direct.

1.1 The disjoint measurable sets $A$ and $B\setminus A$ have union $B$, so $\mu(B)=\mu(A)+\mu(B\setminus A)$. [given, L1]

2.1 If $\mu(B)<+\infty$, monotonicity makes both summands in step 1.1 finite, and cancellation in $\mathbb R$ gives $\mu(B\setminus A)=\mu(B)-\mu(A)$. [given, step 1.1, L2, algebra]

3.1 If $\mu(B)=+\infty$, then $\mu(B\setminus A)$ cannot be finite, because its sum with the finite number $\mu(A)$ would be finite; hence it is $+\infty$. Together with steps 1.1 and 2.1 this proves every asserted case, including $A=\varnothing$ and $A=B$. [given, step 1.1, step 2.1, algebra] ∎
