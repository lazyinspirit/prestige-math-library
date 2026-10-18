---
id: def-spherical-structure
kind: definition
title: "Spherical structure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-the-dimension-of-an-object-relative-to-a-pivotal-structure]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Following EGNO, a **spherical structure** is a pivotal structure $a$ on a tensor
category such that

$$\dim_a(X)=\dim_a(X^\vee)$$

for every object $X$.

A **spherical category** is a tensor category equipped with a spherical
structure.
