---
id: def-quotient-group
kind: definition
title: "The quotient group $G/N$ and coset product $(gN)(hN)=ghN$"
status: draft
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-subgroup, def-index, def-coset]
justified_by: [thm-coset-multiplication-well-defined-iff-normal, thm-quotient-group-laws]
aliases: [def-factor-group]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Factor Groups and Normal Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup
([[def-normal-subgroup]]). The **quotient group**, or **factor group**, $G/N$
has the left cosets

$$G/N:=\{gN:g\in G\}$$

as its elements ([[def-coset]], [[def-index]]), with product

$$ (gN)(hN):=ghN.$$

Independence of the chosen representatives is proved in
[[thm-coset-multiplication-well-defined-iff-normal]], and the group axioms are
proved in [[thm-quotient-group-laws]].
