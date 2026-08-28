---
id: def-composition-series-and-composition-factors-of-an-object
kind: definition
title: "Composition series and composition factors of an object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-object, def-the-quotient-of-an-object-by-a-subobject, def-subobject-and-quotient-object]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
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

A **composition series** of an object $A$ in an abelian category is a finite
strict chain of subobjects

$$0=A_0\;<\;A_1\;<\;\cdots\;<\;A_n=A$$

such that every quotient object $A_i/A_{i-1}$ is simple
([[def-simple-object]], [[def-the-quotient-of-an-object-by-a-subobject]]).

The simple quotient objects $A_i/A_{i-1}$ are the **composition factors** of
the series.
