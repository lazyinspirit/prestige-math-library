---
id: ex-cube-face-colourings-under-rotations
kind: example
title: "Colourings of the faces of a cube up to rotation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-polya-enumeration-theorem,
       def-cycle-index-of-a-permutation-group]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The $24$ rotational symmetries of the cube act on its $6$ faces with cycle
types:

- $1$ identity of type $1^6$;
- $6$ quarter-turns of type $1^2\,4$;
- $3$ half-turns through opposite faces of type $1^2\,2^2$;
- $8$ third-turns through opposite vertices of type $3^2$;
- $6$ half-turns through opposite edges of type $2^3$.

Therefore the number of face-colourings up to rotation with $m$ colours is

$$\frac{m^6+3m^4+12m^3+8m^2}{24}.$$
