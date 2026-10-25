---
id: lem-inverse-of-bijective-group-homomorphism
kind: lemma
title: 'The inverse of a bijective group homomorphism is a group homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, lem-group-homomorphism-basic-properties, def-injection-surjection-bijection]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Statement

The inverse of a bijective group homomorphism is a group homomorphism.

If $f:G\to H$ is a bijective group homomorphism, then its set-theoretic inverse
$f^{-1}:H\to G$ is a group homomorphism.

## Facts & Assumptions

**Given:** A bijective group homomorphism $f:G\to H$.

[L1] An isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[L2] A group homomorphism preserves products, identities, and inverses ([[lem-group-homomorphism-basic-properties]]).

[L3] A bijection has a two-sided set-theoretic inverse ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], for $u,v\in H$ choose $x,y\in G$ with $u=f(x)$ and $v=f(y)$; then $uv=f(xy)$ by [L2]. [L1, L2, L3, given, choose]

2.1 Therefore $f^{-1}(uv)=xy=f^{-1}(u)f^{-1}(v)$, so the inverse preserves the group operation. [step 1.1, L1, L2, L3, given, algebra]

3.1 Hence $f^{-1}:H\to G$ is a group homomorphism. [step 2.1] ∎
