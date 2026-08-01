---
id: cor-subgroups-of-abelian-groups-are-normal
kind: corollary
title: "Every subgroup of an abelian group is normal"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-normal-subgroup-characterisations, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Statement

Every subgroup of an abelian group is normal.

## Facts & Assumptions

**Given:** An abelian group $G$ and a subgroup $H\le G$.

[F1] A group is abelian when $xy=yx$ for all of its elements ([[def-group]]).

[L1] A subgroup $H\le G$ is normal if and only if $gH=Hg$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 For every $g\in G$, commutativity gives $gH=\{gh:h\in H\}=\{hg:h\in H\}=Hg$. [F1, algebra]

2.1 Hence $H\mathrel{\trianglelefteq}G$ by the coset characterisation of normality. [step 1.1, L1] ∎
