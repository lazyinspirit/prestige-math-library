---
id: def-adjoint-triple
kind: definition
title: 'Adjoint triple $L\dashv M\dashv R$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adjunction-by-unit-counit-and-triangle-identities]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Definition

An **adjoint triple** $L\dashv M\dashv R$ consists of categories $\mathcal C,\mathcal D$, functors

$$L,R:\mathcal D\to\mathcal C,\qquad M:\mathcal C\to\mathcal D,$$

and adjunctions $L\dashv M$ and $M\dashv R$ in the sense of [[def-adjunction-by-unit-counit-and-triangle-identities]]. Thus the middle functor is simultaneously a right adjoint and a left adjoint, with separate units and counits for the two adjunctions.
