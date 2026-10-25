---
id: thm-image-subgroup-and-kernel-normal
kind: theorem
title: 'The image of a group homomorphism is a subgroup and its kernel is a normal subgroup'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, lem-subgroup-criterion, def-normal-subgroup]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Statement

The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.

For every group homomorphism $f:G\to H$, one has
$\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$.

[L1] The kernel is the inverse image of $e_H$ and the image is the set of values of $f$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L2] A group homomorphism preserves products and inverses ([[lem-group-homomorphism-basic-properties]]).

[L3] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L4] A subgroup $N$ is normal when $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The image contains $e_H=f(e_G)$ and, for $f(x),f(y)\in\operatorname{im}f$, contains $f(x)f(y)^{-1}=f(xy^{-1})$; thus [L3] gives $\operatorname{im}f\le H$. [L1, L2, L3, L4, given, algebra]

2.1 The kernel is a subgroup by the same calculation, and for $k\in\ker f$ one has $f(gkg^{-1})=f(g)e_Hf(g)^{-1}=e_H$, so $g(\ker f)g^{-1}\subseteq\ker f$; applying this to $g^{-1}$ gives equality. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation calculation in step 2.1 completes both assertions. [step 1.1, step 2.1] ∎
