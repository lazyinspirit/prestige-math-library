---
id: thm-index-two-subgroup-is-normal
kind: theorem
title: "Every subgroup of index two is normal"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-subgroup-characterisations, def-index, lem-coset-partition, lem-left-and-right-cosets-equinumerous, lem-coset-membership-and-equality]
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
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Statement

If $H\le G$ and $[G:H]=2$, then $H\mathrel{\trianglelefteq}G$.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$ with $[G:H]=2$.

[F1] The index $[G:H]$ is the cardinality of the left-coset set $G/H$ when that set is finite ([[def-index]]).

[L1] The distinct left cosets of $H$ partition $G$ ([[lem-coset-partition]]).

[L2] The rule $gH\mapsto Hg^{-1}$ is a bijection from the left cosets of $H$ to its right cosets ([[lem-left-and-right-cosets-equinumerous]]).

[L3] For $g\in G$, one has $gH=H$ if and only if $g\in H$; the corresponding right-coset statement follows from $Hg=H$ if and only if $g\in H$ ([[lem-coset-membership-and-equality]]).

[L4] A subgroup $H\le G$ is normal if and only if $gH=Hg$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 If $g\notin H$, then $gH\ne H$ by [L3]. Since [F1] and the hypothesis give exactly two left cosets, [L1] shows that $H$ and $gH$ are disjoint and cover $G$, so $gH=G\setminus H$. [given, F1, L1, L3]

1.2 By [L2] there are exactly two right cosets. If $g\notin H$, then $Hg\ne H$ by [L3]; the same elementary coset argument shows that distinct right cosets are disjoint and cover $G$, so $Hg=G\setminus H$. [given, L2, L3, algebra]

2.1 If $g\in H$, then $gH=H=Hg$ by [L3]; if $g\notin H$, steps 1.1 and 1.2 give $gH=G\setminus H=Hg$. Thus $gH=Hg$ for every $g\in G$, and [L4] gives $H\mathrel{\trianglelefteq}G$. [step 1.1, step 1.2, L3, L4] ∎
