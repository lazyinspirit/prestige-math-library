---
id: thm-multiplicativity-of-separable-degree
kind: theorem
title: "Separable degree is multiplicative in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, lem-restriction-fibres-for-embeddings-in-a-finite-tower]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For every finite tower $F\subseteq K\subseteq L$,

$$[L:F]_s=[L:K]_s[K:F]_s.$$

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$ and an algebraic closure $\Omega/F$.

[L1] Separable degree counts embeddings into an algebraic closure ([[def-separable-degree]]).

[L2] Restriction from $F$-embeddings of $L$ to $F$-embeddings of $K$ is surjective, and every fibre has cardinality $[L:K]_s$ ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the finite set $\operatorname{Hom}_F(L,\Omega)$ is the disjoint union of the restriction fibres indexed by $\operatorname{Hom}_F(K,\Omega)$. [L2]

2.1 There are $[K:F]_s$ fibres by [L1], and each has $[L:K]_s$ elements by [L2]. Counting the disjoint union gives the displayed product. [step 1.1, L1, L2, algebra] ∎
