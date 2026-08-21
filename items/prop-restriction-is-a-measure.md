---
id: prop-restriction-is-a-measure
kind: proposition
title: "The restriction of a measure to a measurable set is a measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-restriction-of-a-measure, def-measure]
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
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 10"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

If $\mu$ is a measure on $(X,\mathcal A)$ and $E\in\mathcal A$, then $\mu_E(A)=\mu(A\cap E)$ is a measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A measure $\mu$ on $(X,\mathcal A)$ and a measurable set $E$.

[L1] The restricted set function is $\mu_E(A)=\mu(A\cap E)$ on the original sigma-algebra ([[def-restriction-of-a-measure]]).

[L2] A measure vanishes at the empty set and is countably additive on disjoint measurable sequences ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 One has $\mu_E(\varnothing)=\mu(\varnothing\cap E)=0$. [given, L1, L2]

1.2 If $(A_k)$ is pairwise disjoint in $\mathcal A$, then $(A_k\cap E)$ is pairwise disjoint and $\bigcup_k(A_k\cap E)=(\bigcup_kA_k)\cap E$. [given]

2.1 Countable additivity of $\mu$ applied to step 1.2 gives $\mu_E(\bigcup_kA_k)=\sum_k\mu(A_k\cap E)=\sum_k\mu_E(A_k)$; together with step 1.1 this proves that $\mu_E$ is a measure, including $E=\varnothing$ and $E=X$. [step 1.1, step 1.2, L1, L2] ∎

