---
id: def-simple-object
kind: definition
title: "Simple object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subobject-and-quotient-object]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Definition

An object $S$ of an abelian category is **simple** when $S\ne0$ and its only
subobjects are the zero subobject and $1_S$
([[def-subobject-and-quotient-object]]).

Equivalently, $S$ has no proper nonzero subobject.
