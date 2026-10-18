---
id: def-alternative-algebra
kind: definition
title: Alternative algebra
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 0
deps: [def-field, def-vector-space]
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
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §3.2"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
---

## Definition

Let $k$ be a field and $A$ a $k$-vector space. An **alternative $k$-algebra**
is a bilinear product $A\times A\to A$ (linear in each argument) satisfying

$$ x(xy)=(x^2)y,\qquad (yx)x=y(x^2) $$

for all $x,y\in A$, where $x^2:=xx$. Associativity and a unit are not part of
this definition.
