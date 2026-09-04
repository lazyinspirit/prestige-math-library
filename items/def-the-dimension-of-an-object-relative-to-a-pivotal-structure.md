---
id: def-the-dimension-of-an-object-relative-to-a-pivotal-structure
kind: definition
title: "The dimension of an object relative to a pivotal structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-pivotal-structure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $a$ be a pivotal structure on a rigid monoidal category. The **dimension of
an object $X$ relative to $a$** is

$$\dim_a(X):=\operatorname{Tr}_L(a_X)\in\operatorname{End}_{\mathcal C}(\mathbf 1).$$

The subscript is part of the notation: changing the pivotal structure changes
the morphism whose trace is being taken, so the resulting dimension can change
as well.
