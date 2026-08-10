---
id: lem-core-is-largest-normal-subgroup-contained
kind: lemma
title: '$\operatorname{Core}_G(H)$ is the largest normal subgroup of $G$ contained in $H$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-core-of-a-subgroup, def-normal-subgroup, thm-normal-subgroup-characterisations, lem-subgroup-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 6.8"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

For $H\le G$, the core $K=\operatorname{Core}_G(H)$ is a normal subgroup of
$G$, satisfies $K\le H$, and contains every normal subgroup of $G$ that is
contained in $H$. Thus it is the largest normal subgroup of $G$ contained in
$H$.

## Facts & Assumptions

**Given:** A group $G$, a subgroup $H\le G$, and $K:=\operatorname{Core}_G(H)$.

[L1] The core is $K=\bigcap_{g\in G}gHg^{-1}$ ([[def-core-of-a-subgroup]]).

[L2] A subgroup $N$ is normal when $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[L3] Normality is equivalent to $gNg^{-1}\subseteq N$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

[L4] A nonempty subset $S$ of a group is a subgroup if $ab^{-1}\in S$ for every $a,b\in S$ ([[lem-subgroup-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The identity belongs to every $gHg^{-1}$, and if $a,b$ belong to every such conjugate then $ab^{-1}$ does too; [L4] makes $K$ a subgroup. The factor for $g=e$ is $H$, so $K\le H$. [L1, L4]

1.2 For $t\in G$, conjugation sends the family $\{gHg^{-1}:g\in G\}$ to $\{(tg)H(tg)^{-1}:g\in G\}$, the same family because $g\mapsto tg$ is a bijection; hence $tKt^{-1}=K$, and [L2] gives $K\mathrel{\trianglelefteq}G$. [L1, L2, L3]

2.1 If $N\mathrel{\trianglelefteq}G$ and $N\le H$, then $N=gNg^{-1}\le gHg^{-1}$ for every $g\in G$, so $N\le\bigcap_g gHg^{-1}=K$. [L1, L2, L3] ∎
