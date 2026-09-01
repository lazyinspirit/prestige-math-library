---
id: def-symmetric-monoidal-category
kind: definition
title: "Symmetric monoidal category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-braided-monoidal-category]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 8.1.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Saunders Mac Lane, Natural Associativity and Commutativity, Section 4"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
---

## Definition

A **symmetric monoidal category** is a braided monoidal category
([[def-braided-monoidal-category]]) whose braiding $c$ satisfies

$$c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$$

for all objects $X,Y$.
