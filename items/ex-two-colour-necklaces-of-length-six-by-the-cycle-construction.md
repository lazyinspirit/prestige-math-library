---
id: ex-two-colour-necklaces-of-length-six-by-the-cycle-construction
kind: example
title: "Two-colour necklaces of length 6 by the published CYC formula"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [rem-necklace-count-agrees-with-the-published-cycle-construction,
       cor-necklaces-over-an-m-letter-alphabet]
justified_by: []
aliases: []
landmark: false
verification:
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

The published symbolic-method necklace formula gives the same evaluation at
$n=6$ and $m=2$:

$$\frac16(64+8+8+4)=14.$$

So the cycle-construction route and the Pólya route both count $14$ binary
necklaces of length $6$.
