---
id: ex-trivial-homomorphism-kernel-and-image
kind: example
title: 'The trivial homomorphism $G\to H$ has kernel $G$ and image $\{e_H\}$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-homomorphism, def-kernel-and-image-of-group-homomorphism, def-group]
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

## Example

The trivial homomorphism $G\to H$ has kernel $G$ and image $\{e_H\}$.

## Facts & Assumptions

**Given:** Groups $G,H$ and $t:G\to H$ defined by $t(g)=e_H$.

[L1] A group homomorphism preserves products ([[def-group-homomorphism]]).

[L2] Kernels and images are defined by inverse images and value sets ([[def-kernel-and-image-of-group-homomorphism]]).

[L3] Every group has an identity element ([[def-group]]).

## Verification

**Proof technique:** direct.

1.1 For $g,h\in G$, $t(gh)=e_H=e_He_H=t(g)t(h)$, so $t$ is a homomorphism. [L1, L2, L3, given, algebra]

2.1 Every $g\in G$ satisfies $t(g)=e_H$, while the only value of $t$ is $e_H$. [step 1.1, L1, L2, L3, given, algebra]

3.1 Thus $\ker t=G$ and $\operatorname{im}t=\{e_H\}$. [step 2.1] ∎
