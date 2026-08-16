---
id: cor-separable-degree-is-at-most-extension-degree
kind: corollary
title: "For a finite extension, $[K:F]_s\\le [K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicativity-of-separable-degree, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
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

For every finite field extension $K/F$, one has $[K:F]_s\le [K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L2] Embeddings of a simple algebraic extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Ordinary extension degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L4] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $K$ by [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions from $F$ to $K$. [L4, choose]

1.2 At each simple step, [L2] counts embeddings by distinct roots of a minimal polynomial, so its separable degree is at most the degree of that polynomial, which is the ordinary degree of the step. [L2]

2.1 Multiplying the inequalities in step 1.2 and using [L1] and [L3] for the two tower products gives $[K:F]_s\le[K:F]$. [step 1.1, step 1.2, L1, L3, algebra] ∎
