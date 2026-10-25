---
id: lem-subring-plus-ideal-and-intersection
kind: lemma
title: 'If $S$ is a subring and $I$ is an ideal of $R$, then $S+I$ is a subring, $I$ is an ideal of $S+I$, and $S\cap I$ is an ideal of $S$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subring, lem-subring-criterion, def-left-right-and-two-sided-ideal, lem-ideal-criterion-and-intersections]
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

If $S$ is a subring and $I$ is an ideal of $R$, then $S+I$ is a subring, $I$ is an ideal of $S+I$, and $S\cap I$ is an ideal of $S$.

## Facts & Assumptions

**Given:** A unital subring $S\subseteq R$ and a two-sided ideal $I\mathrel{\trianglelefteq}R$.

[L1] A subring contains the ambient identity and is closed under ring operations ([[def-subring]]).

[L2] The subring criterion tests subtraction and multiplication ([[lem-subring-criterion]]).

[L3] An ideal is an additive subgroup with two-sided absorption ([[def-left-right-and-two-sided-ideal]]).

[L4] Intersections of ideals and the ideal criterion are valid ([[lem-ideal-criterion-and-intersections]]).

## Proof

**Proof technique:** direct.

1.1 $S+I$ contains $1_R$ and is subtraction-closed; expanding $(s+i)(t+j)=st+sj+it+ij$ proves multiplication closure. [L1, L2, L3, L4, given, algebra]

2.1 For $s+i\in S+I$ and $j\in I$, both $(s+i)j$ and $j(s+i)$ lie in $I$, while $S\cap I$ is subtraction-closed and absorbed by $S$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Hence $S+I$ is a unital subring, $I\mathrel{\trianglelefteq}S+I$, and $S\cap I\mathrel{\trianglelefteq}S$. [step 2.1] ∎
