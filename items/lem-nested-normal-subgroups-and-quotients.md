---
id: lem-nested-normal-subgroups-and-quotients
kind: lemma
title: 'If $K\mathrel{\trianglelefteq}G$, $N\mathrel{\trianglelefteq}G$ and $K\subseteq N$, then $N/K\mathrel{\trianglelefteq}G/K$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-subgroup, def-quotient-group, thm-quotient-group-laws, thm-normal-subgroup-characterisations]
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

If $K\mathrel{\trianglelefteq}G$, $N\mathrel{\trianglelefteq}G$ and $K\subseteq N$, then $N/K\mathrel{\trianglelefteq}G/K$.

## Facts & Assumptions

**Given:** Normal subgroups $K,N\mathrel{\trianglelefteq}G$ with $K\subseteq N$.

[L1] A normal subgroup is invariant under conjugation ([[def-normal-subgroup]]).

[L2] $G/K$ consists of cosets and has product $(gK)(hK)=ghK$ ([[def-quotient-group]]).

[L3] Quotient multiplication is well defined for normal subgroups ([[thm-quotient-group-laws]]).

[L4] A conjugation-stable subgroup is normal ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Since $K\subseteq N$, the subset $N/K=\{nK:n\in N\}$ is a subgroup of $G/K$ by the quotient product rule. [L1, L2, L3, L4, given, algebra]

2.1 For $gK\in G/K$ and $nK\in N/K$, $(gK)(nK)(gK)^{-1}=(gng^{-1})K$ belongs to $N/K$ because $N\mathrel{\trianglelefteq}G$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Thus the conjugation calculation gives $N/K\mathrel{\trianglelefteq}G/K$. [step 2.1] ∎
