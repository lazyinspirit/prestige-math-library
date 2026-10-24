---
id: def-grothendieck-ring-of-a-tensor-category
kind: definition
title: "The Grothendieck ring of a tensor category"
status: published
origin: pipeline
deps: [def-tensor-and-multitensor-category, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.5.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

The **Grothendieck group** $K_0(\mathcal C)$ of a tensor category is generated
by isomorphism classes $[X]$, subject to $[B]=[A]+[C]$ for every short exact
sequence $0\to A\to B\to C\to0$. Its Grothendieck-ring multiplication is
intended to be $[X][Y]=[X\otimes Y]$; its well-definedness is established next.
