---
id: lem-standard-projective-opens-are-affine-spaces
kind: lemma
title: "standard projective opens are affine spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-space-points, thm-projective-zariski-topology, def-affine-algebraic-set]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
---

## Statement

For every $i$, normalization of the $i$th coordinate identifies $D_+(x_i)$ with $\mathbf A_k^n$. In particular $[a_0:\cdots:a_n]\mapsto(a_1/a_0,\ldots,a_n/a_0)$ identifies $D_+(x_0)$ with $\mathbf A_k^n$.

## Proof

**Given:** $[a]\in D_+(x_i)$.

1.1 Multiplication by $a_i^{-1}$ gives the unique representative with $i$th coordinate $1$. [given, algebra]

2.1 Retaining the remaining coordinates and reinserting $1$ give mutually inverse maps. [step 1.1, construct]

3.1 On chart overlaps these maps are coordinate ratios with nonzero denominator, so they are affine-chart isomorphisms. [step 2.1, algebra] ∎
