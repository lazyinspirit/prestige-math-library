---
id: thm-quotient-ring-multiplication-well-defined-iff-ideal
kind: theorem
title: 'Multiplication of additive cosets is well defined if and only if the additive subgroup is a two-sided ideal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-ring, def-left-right-and-two-sided-ideal, lem-ring-elementary-consequences, lem-coset-membership-and-equality, def-quotient-group]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Ideals and Quotient Rings"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.03%3A_Ideals_and_Quotient_Rings"
pipeline_run: null
---

## Statement

Multiplication of additive cosets is well defined if and only if the additive subgroup is a two-sided ideal.

Let $J\le(R,+)$.  The rule $(r+J)(s+J)=rs+J$ is independent of representatives
exactly when $J\mathrel{\trianglelefteq}R$.

## Facts & Assumptions

**Given:** A ring $R$ and an additive subgroup $J\le(R,+)$.

[L1] The displayed rule is the proposed quotient multiplication ([[def-quotient-ring]]).

[L2] A two-sided ideal is an additive subgroup absorbing multiplication on both sides ([[def-left-right-and-two-sided-ideal]]).

[L3] Ring multiplication is distributive ([[lem-ring-elementary-consequences]]).

[L4] Coset equality is membership of a difference in the subgroup ([[lem-coset-membership-and-equality]]).

[L5] Additive cosets are available for an additive subgroup ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 If $J$ is an ideal and $r'=r+i$, $s'=s+j$, then $r's'-rs=rj+is+ij\in J$, so the product is well defined. [L1, L2, L3, L4, L5, given, algebra]

2.1 Conversely, compare $(r+J)(0+J)$ with $(r+J)(j+J)$ and the reversed product; [L4] gives $rj,jr\in J$ for all $r,j$. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 Thus the rule is well defined exactly when $J$ is a two-sided ideal. [step 2.1] ∎
