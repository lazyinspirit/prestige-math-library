---
id: thm-group-homomorphism-injective-iff-trivial-kernel
kind: theorem
title: 'A group homomorphism is injective if and only if its kernel is trivial'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, def-injection-surjection-bijection, lem-group-inverse-laws]
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

A group homomorphism is injective if and only if its kernel is trivial.

For a group homomorphism $f:G\to H$, $f$ is injective exactly when
$\ker f=\{e_G\}$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$.

[L1] $\ker f=\{g\in G:f(g)=e_H\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L2] Homomorphisms preserve inverses and products ([[lem-group-homomorphism-basic-properties]]).

[L3] Injectivity means that equal values have equal arguments ([[def-injection-surjection-bijection]]).

[L4] In a group, $y^{-1}x=e_G$ implies $x=y$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is injective and $g\in\ker f$, then $f(g)=e_H=f(e_G)$, so $g=e_G$. [L1, L2, L3, L4, given, algebra]

2.1 Conversely, if $\ker f=\{e_G\}$ and $f(x)=f(y)$, then $f(y^{-1}x)=e_H$, whence $y^{-1}x=e_G$ and $x=y$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The two implications prove the equivalence. [step 1.1, step 2.1] ∎
