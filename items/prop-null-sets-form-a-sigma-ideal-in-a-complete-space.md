---
id: prop-null-sets-form-a-sigma-ideal-in-a-complete-space
kind: proposition
title: "Null sets are closed under countable unions and, in a complete space, under arbitrary subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-measure-space, thm-finite-and-countable-subadditivity-of-measures, prop-measure-monotonicity]
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

In every measure space, a countable union of measurable null sets is measurable and null, and every measurable subset of a null set is null. If the measure space is complete, every subset of a measurable null set is measurable and null. Thus the null sets of a complete measure space form a sigma-ideal.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$.

[L1] Countable subadditivity bounds the measure of a countable union by the sum of the member measures ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L2] Measures are monotone under inclusion ([[prop-measure-monotonicity]]).

[L3] A complete measure space contains every subset of every measurable null set in its sigma-algebra ([[def-complete-measure-space]]).

## Proof

**Proof technique:** direct.

1.1 If $N_k\in\mathcal A$ and $\mu(N_k)=0$ for every $k$, then $\bigcup_kN_k$ is measurable and [L1] gives $0\le\mu(\bigcup_kN_k)\le\sum_k0=0$. [given, L1]

1.2 If $S\in\mathcal A$ and $S\subseteq N$ for a measurable null set $N$, then $0\le\mu(S)\le\mu(N)=0$. [given, L2]

2.1 If the space is complete and $S\subseteq N$ for a measurable null set $N$, then [L3] first makes $S$ measurable and step 1.2 makes it null. [step 1.2, L3]

3.1 Step 1.1 gives closure under countable unions, and step 2.1 gives closure under arbitrary subsets in a complete space, including the empty union and the empty subset. [step 1.1, step 2.1] ∎
