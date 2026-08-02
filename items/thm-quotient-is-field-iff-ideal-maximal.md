---
id: thm-quotient-is-field-iff-ideal-maximal
kind: theorem
title: '$R/M$ is a field if and only if $M$ is a maximal ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-and-maximal-ideals, thm-quotient-ring-laws, lem-field-is-a-commutative-ring, def-field, lem-ideal-criterion-and-intersections]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Statement

$R/M$ is a field if and only if $M$ is a maximal ideal.

Here $R$ is commutative and $M$ is an ideal of $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a proper ideal $M\mathrel{\trianglelefteq}R$.

[L1] A maximal ideal has no proper intermediate ideal ([[def-prime-and-maximal-ideals]]).

[L2] $R/M$ is a quotient ring with its usual coset operations ([[thm-quotient-ring-laws]]).

[L3] A field is a commutative ring in which every nonzero element is invertible ([[lem-field-is-a-commutative-ring]]).

[L4] The definition of field requires a multiplicative inverse for each nonzero element ([[def-field]]).

[L5] The ideal criterion verifies ideals by subtraction and absorption ([[lem-ideal-criterion-and-intersections]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is maximal and $a\notin M$, the set $J=\{m+ra:m\in M,r\in R\}$ is an ideal by the subtraction-and-absorption criterion, properly contains $M$, and hence is $R$; thus $m+ra=1$ for some $m\in M,r\in R$, giving $(a+M)(r+M)=1+M$. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $R/M$ is a field and $M\subsetneq J\mathrel{\trianglelefteq}R$, choose $a\in J\setminus M$; an inverse $r+M$ of $a+M$ gives $ar-1\in M\subseteq J$, while $ar\in J$, so $1\in J$ and $J=R$. [step 1.1, L1, L2, L3, L4, L5, given, choose]

3.1 Hence $R/M$ is a field exactly when $M$ is maximal. [step 2.1] ∎
