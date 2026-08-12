---
id: ex-splitting-field-of-two-quadratics
kind: example
title: 'The splitting field of $\{x^2-2,x^2-3\}$ over $\mathbb Q$ is $\mathbb Q(\sqrt2,\sqrt3)$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-splitting-fields-exist-for-finite-families, cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields, def-polynomials-that-split-and-splitting-fields, thm-of-square-roots, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Example

The splitting field over $\mathbb Q$ of the family $\{x^2-2,x^2-3\}$ is $\mathbb Q(\sqrt2,\sqrt3)$.

## Facts & Assumptions

**Given:** The family $\{x^2-2,x^2-3\}\subseteq\mathbb Q[x]$.

[F1] The nonnegative real numbers $2$ and $3$ have square roots with the defining square equations ([[thm-of-square-roots]]).

[F2] The splitting field of a product inside a common extension is the composite of the splitting fields of its two factors ([[cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields]]).

[F3] A finite family has the same splitting field as the product of its nonzero members ([[cor-splitting-fields-exist-for-finite-families]]).

[F4] A splitting field is the field generated over the base by all roots of a polynomial that splits there ([[def-polynomials-that-split-and-splitting-fields]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], the roots of $x^2-2$ are $\pm\sqrt2$, so [F4] makes its splitting field $\mathbb Q(\sqrt2)$. Similarly the splitting field of $x^2-3$ is $\mathbb Q(\sqrt3)$. [F1, F4, algebra]

2.1 Their composite is the smallest field containing both, namely $\mathbb Q(\sqrt2,\sqrt3)$. By [F2] it splits the product, and by [F3] it is the splitting field of the stated family. [F2, F3, step 1.1] ∎
