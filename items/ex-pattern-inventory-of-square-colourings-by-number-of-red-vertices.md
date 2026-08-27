---
id: ex-pattern-inventory-of-square-colourings-by-number-of-red-vertices
kind: example
title: "Pattern inventory of square colourings by number of red vertices"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-weighted-pattern-inventory-formula,
       ex-cycle-index-of-d-four]
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

Give blue weight $1$ and red weight $r$ in the dihedral action on the square.
Substituting

$$s_i=1+r^i$$

into the cycle index of [[ex-cycle-index-of-d-four]] yields

$$1+r+2r^2+r^3+r^4.$$

So, up to dihedral symmetry, there is:

- $1$ colouring with $0$ red vertices;
- $1$ colouring with $1$ red vertex;
- $2$ colourings with $2$ red vertices, namely adjacent and opposite pairs;
- $1$ colouring with $3$ red vertices;
- $1$ colouring with $4$ red vertices.
