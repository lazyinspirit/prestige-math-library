---
id: ex-counting-outer-measure
kind: example
title: "Counting measure is an outer measure for which every subset is measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-outer-measure, def-caratheodory-measurable-set, def-counting-measure, prop-counting-measure-is-a-measure]
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

## Example

For every set $X$, counting measure is an outer measure on $\mathcal P(X)$ and every subset of $X$ is Carathéodory measurable.

## Facts & Assumptions

**Given:** A set $X$ and its counting set function $\#_X$.

[L1] For every set $X$, counting measure is a measure on $(X,\mathcal P(X))$. ([[prop-counting-measure-is-a-measure]])

[F1] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

## Verification

**Proof technique:** direct.

1.1 The measure axioms in [L1] give normalization and countable additivity on the full power set, hence monotonicity and countable subadditivity; thus counting measure is an outer measure. [L1]

2.1 For arbitrary $A,E\subseteq X$, the decomposition $A=(A\cap E)\sqcup(A\setminus E)$ and countable additivity in [L1] give $\#_X(A)=\#_X(A\cap E)+\#_X(A\setminus E)$, so [F1] holds for every $E$, including finite, infinite, and empty cases. [L1, F1, algebra] ∎
