---
id: ex-a-nonfree-action-with-three-orbits-on-four-points
kind: example
title: "A nonfree action can have 3 orbits on 4 points"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-cauchy-frobenius-orbit-counting]
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

Let the group $C_2=\{1,\tau\}$ act on

$$X=\{1,2,3,4\}$$

by the transposition $\tau=(1\,2)$ and with $3,4$ fixed.

The orbits are

$$\{1,2\},\qquad \{3\},\qquad \{4\},$$

so there are $3$ orbits. This is a nonfree action, and the naive quotient
$|X|/|C_2|=4/2=2$ is the wrong count.
