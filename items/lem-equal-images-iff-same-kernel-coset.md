---
id: lem-equal-images-iff-same-kernel-coset
kind: lemma
title: 'Two elements have the same image under a homomorphism if and only if they lie in the same coset of its kernel'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, lem-coset-membership-and-equality]
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

Two elements have the same image under a homomorphism if and only if they lie in the same coset of its kernel.

For a homomorphism $f:G\to H$ and $g,h\in G$,

$$f(g)=f(h)\quad\Longleftrightarrow\quad g\ker f=h\ker f.$$

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$ and elements $g,h\in G$.

[L1] $\ker f$ is the set of elements sent to $e_H$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L2] $f(h^{-1}g)=f(h)^{-1}f(g)$ ([[lem-group-homomorphism-basic-properties]]).

[L3] For $K\le G$, $gK=hK$ if and only if $h^{-1}g\in K$ ([[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 If $f(g)=f(h)$, then [L2] gives $f(h^{-1}g)=e_H$, so $h^{-1}g\in\ker f$ and [L3] gives $g\ker f=h\ker f$. [L1, L2, L3, given, algebra]

2.1 If $g\ker f=h\ker f$, then [L3] gives $h^{-1}g\in\ker f$, so $f(h)^{-1}f(g)=e_H$ and $f(g)=f(h)$. [step 1.1, L1, L2, L3, given, algebra]

3.1 This proves the stated equivalence. [step 1.1, step 2.1] ∎
