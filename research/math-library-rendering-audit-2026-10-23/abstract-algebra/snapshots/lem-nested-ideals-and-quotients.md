---
id: lem-nested-ideals-and-quotients
kind: lemma
title: 'If $I\subseteq J$ are ideals of $R$, then $J/I$ is an ideal of $R/I$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-right-and-two-sided-ideal, thm-quotient-ring-laws, prop-canonical-quotient-ring-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

## Statement

If $I\subseteq J$ are ideals of $R$, then $J/I$ is an ideal of $R/I$.

## Facts & Assumptions

**Given:** Two-sided ideals $I\subseteq J\mathrel{\trianglelefteq}R$.

[L1] Ideals are additive subgroups with absorption ([[def-left-right-and-two-sided-ideal]]).

[L2] $R/I$ is a ring of additive cosets ([[thm-quotient-ring-laws]]).

[L3] The quotient map has kernel $I$ ([[prop-canonical-quotient-ring-map]]).

## Proof

**Proof technique:** direct.

1.1 $J/I=\{j+I:j\in J\}$ is an additive subgroup of $R/I$ because $J$ is an additive subgroup. [L1, L2, L3, given, algebra]

2.1 For $r+I\in R/I$ and $j+I\in J/I$, both $(r+I)(j+I)=rj+I$ and $(j+I)(r+I)=jr+I$ lie in $J/I$. [step 1.1, L1, L2, L3, given, algebra]

3.1 Hence $J/I$ is a two-sided ideal of $R/I$. [step 2.1] ∎
