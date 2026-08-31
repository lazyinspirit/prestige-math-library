---
id: def-cartesian-closed-category
kind: definition
title: "Cartesian closed category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exponential-object, thm-a-category-with-finite-products-is-monoidal]
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
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.4.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Definition

A category $\mathcal C$ is **cartesian closed** when:

- $\mathcal C$ has finite products; and
- for each object $B$, the functor $-\times B$ has a right adjoint.

Writing that right adjoint as $(-)^B$, the object $C^B$ is the exponential object of $C$ by $B$ in the sense of [[def-exponential-object]]. Since a category with finite products is canonically monoidal under the cartesian product ([[thm-a-category-with-finite-products-is-monoidal]]), a cartesian closed category is exactly a cartesian monoidal category whose tensor product is closed.
