---
id: prop-measure-monotonicity
kind: proposition
title: "Measures are monotone"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.57"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Let $\mu$ be a measure on $(X,\mathcal A)$. If $A,B\in\mathcal A$ and $A\subseteq B$, then $\mu(A)\le\mu(B)$.

## Facts & Assumptions

**Given:** A measure $\mu$ on $(X,\mathcal A)$ and measurable sets $A\subseteq B$.

[L1] A measure is nonnegative and countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 The sets $A$ and $B\setminus A$ are measurable, disjoint, and have union $B$. [given]

2.1 Countable additivity applied to these two sets and empty sets thereafter gives $\mu(B)=\mu(A)+\mu(B\setminus A)\ge\mu(A)$; no subtraction is used, so the argument also covers $\mu(B)=+\infty$ and the degenerate cases $A=\varnothing$ and $A=B$. [step 1.1, L1, algebra] ∎

