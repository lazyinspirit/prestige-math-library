---
id: def-associative-jordan-product
kind: definition
title: Symmetrized product of an associative algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 1
deps: [def-algebra-over-a-commutative-ring, def-field, def-jordan-algebra]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, §3.2, PDF p. 20"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Definition

Let $k$ be a field with $\operatorname{char}(k)\ne2$ and let $A$ be a unital
associative $k$-algebra as in [[def-algebra-over-a-commutative-ring]]. On the
underlying $k$-vector space define

$$ a\circ b:=\frac12(ab+ba). $$

Denote this algebra with product by $A^+$. The product is symmetric and
bilinear. This definition alone does not assert the Jordan identity; the
following theorem proves it. It does not assert that a Jordan product is
associative.
