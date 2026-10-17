---
id: cor-premeasure-induced-set-function-is-an-outer-measure
kind: corollary
title: "Assuming countable choice, the outer set function induced by a premeasure is an outer measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-outer-measure-induced-by-a-premeasure, thm-covering-cost-construction-produces-an-outer-measure, def-algebra-of-subsets, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Proposition 1.10 and formula 1.12"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. The outer set function induced by a premeasure is an outer measure.

## Facts & Assumptions

**Given:** Countable choice, an algebra $\mathcal A_0$ on $X$, a premeasure $\mu_0$, and its induced outer set function $\mu^*$.

[L1] Assuming countable choice, the infimum of countable covering costs defines an outer measure. ([[thm-covering-cost-construction-produces-an-outer-measure]])

[F1] An algebra of subsets of $X$ contains $\varnothing$, is closed under complements relative to $X$ and binary unions, and therefore also contains $X$. ([[def-algebra-of-subsets]])

## Proof

**Proof technique:** direct.

1.1 The algebra law in [F1] gives $\varnothing,X\in\mathcal A_0$, and the premeasure normalization gives $\mu_0(\varnothing)=0$. Thus $\mathcal C=\mathcal A_0$ and $p=\mu_0$ satisfy every hypothesis of [L1]. [F1, given]

2.1 Applying [L1] to the data in step 1.1 shows that the induced outer set function $\mu^*$ is an outer measure. [step 1.1, L1] ∎
