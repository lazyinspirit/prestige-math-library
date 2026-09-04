---
id: def-rigid-object-and-rigid-monoidal-category
kind: definition
title: "Rigid object and rigid monoidal category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-dual-and-right-dual-object]
landmark: true
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.10.11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Definition

An object of a monoidal category is **rigid** if it has both a left dual and a
right dual in the sense of [[def-left-dual-and-right-dual-object]].

A monoidal category is **rigid** if every object in it is rigid.

Muger's notes also use the word **autonomous** for the same condition, and
Joyal-Street use **compact** in the non-symmetric setting.
