---
id: ex-edge-set-orbits-on-four-vertices-by-polya
kind: example
title: "There are 11 S_4-orbits of edge-sets on the pairs of [4]"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-edge-set-orbits-on-two-subsets-by-polya]
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

For the action of $S_4$ on the $6$ unordered pairs of $[4]$, the induced
cycle-index polynomial is

$$\frac1{24}\left(s_1^6+9s_1^2s_2^2+8s_3^2+6s_2s_4\right).$$

Substituting $s_i=1+x^i$ gives

$$1+x+2x^2+3x^3+2x^4+x^5+x^6.$$

In particular, setting $x=1$ yields

$$1+1+2+3+2+1+1=11,$$

so there are $11$ edge-set orbits, equivalently $11$ simple graphs on $4$
vertices up to isomorphism.
