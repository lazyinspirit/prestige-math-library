---
id: fs-every-coset-is-a-subgroup
kind: false-statement
title: "Every left coset of a subgroup is itself a subgroup"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coset, def-subgroup, cex-left-coset-that-is-not-a-right-coset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
pipeline_run: null
---

## Statement

Every left coset $gH$ of every subgroup $H\le G$ is a subgroup of $G$.

## Facts & Assumptions

**Given:** The group $S_3$, the subgroup $H=\{e,(12)\}$ and the element $g=(123)$ from [[cex-left-coset-that-is-not-a-right-coset]].

[F1] The left coset is $gH=\{(123),(13)\}$ ([[def-coset]], [[cex-left-coset-that-is-not-a-right-coset]]).

[F2] Every subgroup contains the identity element ([[def-subgroup]]).

## Refutation

**Proof technique:** direct.

1.1 Neither $(123)$ nor $(13)$ is the identity, so $e\notin gH$. [F1]

2.1 By [F2], the set $gH$ cannot be a subgroup. This single coset refutes the statement. [step 1.1, F2] ∎
