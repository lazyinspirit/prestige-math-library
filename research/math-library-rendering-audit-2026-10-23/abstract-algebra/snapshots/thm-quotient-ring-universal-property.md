---
id: thm-quotient-ring-universal-property
kind: theorem
title: 'A ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring, def-left-right-and-two-sided-ideal, cor-subgroups-of-abelian-groups-are-normal, prop-canonical-quotient-ring-map, thm-quotient-group-universal-property, def-ring-homomorphism]
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

A ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring.

If $I\mathrel{\trianglelefteq}R$, $f:R\to S$ is a ring homomorphism, and
$I\subseteq\ker f$, there is a unique ring homomorphism $\bar f:R/I\to S$ such
that $\bar f(r+I)=f(r)$.

## Facts & Assumptions

**Given:** A two-sided ideal $I\mathrel{\trianglelefteq}R$ and a ring homomorphism $f:R\to S$ with $I\subseteq\ker f$.

[L1] The additive group of a ring is abelian ([[def-ring]]).

[L2] A two-sided ideal is an additive subgroup ([[def-left-right-and-two-sided-ideal]]).

[L3] Every subgroup of an abelian group is normal ([[cor-subgroups-of-abelian-groups-are-normal]]).

[L4] The canonical quotient map is a surjective ring homomorphism ([[prop-canonical-quotient-ring-map]]).

[L5] A group homomorphism killing a normal subgroup factors uniquely through its quotient ([[thm-quotient-group-universal-property]]).

[L6] A ring homomorphism preserves addition, multiplication, and identity ([[def-ring-homomorphism]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1]--[L3], $I$ is normal in the additive group of $R$; applying [L5] to the additive homomorphism underlying $f$ defines $\bar f(r+I)=f(r)$ and proves representative independence. [L1, L2, L3, L5, L6, given, construct]

2.1 Since [L4] gives $(r+I)(s+I)=rs+I$, one has $\bar f((r+I)(s+I))=f(rs)=f(r)f(s)$, and $\bar f(1+I)=f(1)=1$; thus $\bar f$ is a ring homomorphism. [step 1.1, L4, L6, given, algebra]

3.1 The factor identity $f=\bar f\circ\pi$ holds by step 1.1, and any ring-homomorphic factor is additive, so the uniqueness in [L5] proves its uniqueness as a ring factor. [step 1.1, step 2.1, L5, L6, discharge-construct] ∎
