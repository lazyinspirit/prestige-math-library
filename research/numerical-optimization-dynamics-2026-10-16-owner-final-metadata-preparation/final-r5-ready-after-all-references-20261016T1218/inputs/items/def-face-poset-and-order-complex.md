---
id: def-face-poset-and-order-complex
kind: definition
title: "Face poset and order complex"
status: published
origin: pipeline
deps: ["def-abstract-simplicial-complex", "def-partial-order"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Definition

For an abstract simplicial complex $K$, its **face poset** is $F(K)=K\setminus\{\varnothing\}$ ordered by inclusion. For a poset $(P,\leq)$, its **order complex** $\Delta P$ has vertex set $P$ and faces all finite chains in $P$, including the empty chain. Here a chain means a subset in which every two elements are comparable.

Inclusion is reflexive, antisymmetric and transitive, as required by [[def-partial-order]]. Every subset of a finite chain is a finite chain, and each singleton is a chain, so this satisfies [[def-abstract-simplicial-complex]]. If $P=\varnothing$, then $\Delta P=\{\varnothing\}$ has no vertices. If $P$ has a least element $p$, every face can be enlarged by $p$; this is a cone with a vertex, not the empty complex.

## Source locators

2.5.10, pp.51–52 (face-chain description); general-poset formulation is an explicit abstraction of the face-chain construction, not a quotation.
