---
id: ex-two-colour-bracelets-of-length-six
kind: example
title: "Two-colour bracelets of length 6"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [cor-bracelet-count-via-cycle-index,
       thm-cycle-index-of-dihedral-group]
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

For $n=6$ and $m=2$, the bracelet formula gives

$$\frac1{12}(64+8+8+4)+\frac14(2^3+2^4)=7+6=13.$$

So there are $13$ binary bracelets of length $6$.
