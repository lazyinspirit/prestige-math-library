---
id: def-left-closed-and-right-closed-monoidal-category
kind: definition
title: "Left-closed, right-closed, and biclosed monoidal categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, def-adjunction-by-unit-counit-and-triangle-identities]
landmark: true
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.5"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., VII.7"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1)$ be a monoidal category ([[def-monoidal-category]]).

- It is **right closed** when for every object $X$ the functor $-\otimes X:\mathcal C\to\mathcal C$ has a right adjoint in the sense of [[def-adjunction-by-unit-counit-and-triangle-identities]]. A chosen right adjoint is written $[X,-]$.
- It is **left closed** when for every object $X$ the functor $X\otimes-:\mathcal C\to\mathcal C$ has a right adjoint. A chosen right adjoint is written $\langle X,-\rangle$.
- It is **biclosed** when it is both left closed and right closed.

Thus a right-closed structure gives natural bijections

$$\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y]),$$

and a left-closed structure gives natural bijections

$$\mathcal C(X\otimes A,Y)\cong\mathcal C(A,\langle X,Y\rangle).$$

This page keeps the two closures separate unless a symmetry is supplied later.
