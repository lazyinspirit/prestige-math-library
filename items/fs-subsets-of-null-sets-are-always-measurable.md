---
id: fs-subsets-of-null-sets-are-always-measurable
kind: false-statement
title: "FALSE: every subset of a measure-null set is measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-measure-space, def-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

**False claim.** In every measure space, every subset of a measurable null set is measurable. Equivalently, every measure space is complete in the sense of [[def-complete-measure-space]].

## Facts & Assumptions

**Given:** The two-point set $X=\{0,1\}$ and the family $\mathcal A=\{\varnothing,X\}$.

[L1] A measure has value $0$ at the empty set and is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L2] Completeness requires every subset of every measurable null set to belong to the sigma-algebra ([[def-complete-measure-space]]).

## Refutation

**Proof technique:** direct.

1.1 The family $\mathcal A$ is a sigma-algebra on $X$, and the set function $\mu(\varnothing)=\mu(X)=0$ is a measure: both sides of countable additivity are $0$ for every disjoint measurable sequence. [given, L1]

1.2 The set $X$ is measurable and $\mu(X)=0$, but $\{0\}\subseteq X$ and $\{0\}\notin\mathcal A$. [given]

2.1 By step 1.2 the measure space of step 1.1 is not complete, so the claimed universal measurability of subsets of null sets is false. [step 1.1, step 1.2, L2] ∎

