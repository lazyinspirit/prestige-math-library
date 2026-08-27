---
id: ex-two-colour-necklaces-of-length-six-by-polya
kind: example
title: "Two-colour necklaces of length 6 by Pólya"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [cor-necklace-count-via-cycle-index,
       thm-cycle-index-of-cyclic-group]
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

Evaluating the necklace formula at $n=6$ and $m=2$ gives

$$\frac16\left(\varphi(1)2^6+\varphi(2)2^3+\varphi(3)2^2+\varphi(6)2\right)=\frac16(64+8+8+4)=14.$$

So there are $14$ binary necklaces of length $6$.
