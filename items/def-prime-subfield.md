---
id: def-prime-subfield
kind: definition
title: "The prime subfield as the intersection of all subfields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subfield, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field. Its **prime subfield** is

$$F_0:=\bigcap\{E:E\text{ is a subfield of }F\}.$$

The family is nonempty because it contains $F$. Its intersection is a subfield: every member contains $0$ and $1$ and is closed under subtraction, multiplication, and inversion of nonzero elements, so the intersection has the same properties. It is the unique smallest subfield of $F$.
