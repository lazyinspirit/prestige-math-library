---
id: def-euler-beta-function
kind: definition
title: "Euler's Beta function on the right half-planes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: [thm-beta-gamma-identity]
forward_refs: []
aliases: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vi)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Definition

For complex parameters $p,q$ with $\operatorname{Re}p>0$ and
$\operatorname{Re}q>0$, define Euler's Beta function by

$$B(p,q):=\int_0^1 t^{p-1}(1-t)^{q-1}\,dt,$$

again using the real logarithm on $(0,1)$ to define the complex powers.

The Beta-Gamma theorem below justifies convergence on exactly this pair of right
half-planes.
