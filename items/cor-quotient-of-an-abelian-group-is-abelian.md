---
id: cor-quotient-of-an-abelian-group-is-abelian
kind: corollary
title: "Every quotient group of an abelian group is abelian"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Normal Subgroups and Factor Groups, Exercises"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/10%3A_Normal_Subgroups_and_Factor_Groups/10.04%3A_Exercises"
pipeline_run: null
---

## Statement

If $G$ is abelian and $N\mathrel{\trianglelefteq}G$, then $G/N$ is abelian.

## Facts & Assumptions

**Given:** An abelian group $G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] In the quotient group, $(gN)(hN)=ghN$ ([[thm-quotient-group-laws]]).

[F1] A group is abelian when $gh=hg$ for all of its elements ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 For arbitrary cosets $gN,hN\in G/N$, commutativity in $G$ gives $(gN)(hN)=ghN=hgN=(hN)(gN)$. [L1, F1]

2.1 Hence every two elements of $G/N$ commute, so $G/N$ is abelian. [step 1.1, F1] ∎
