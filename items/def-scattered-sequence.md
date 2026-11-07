---
id: def-scattered-sequence
kind: definition
title: Scattered real sequence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-delta-scattered-sequence
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Definition 2.13, §2.4"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Definition 2.13, §2.4; full relevant passage inspected"
---

## Definition

A real sequence $a(n)$ indexed by positive integers is **scattered** if, for every $\delta\in(0,1]$, there exist $\eta>0$ and an integer $N_0\ge2$ such that for every integer $N\ge N_0$,

$$\frac1{N^2}\sum_{1\le m<n\le N}w_\delta(a(n)-a(m))\le(\log N)^{-1-\eta},$$

with $w_\delta$ as defined for $\delta$-scattered sequences.

## Definition references

[[def-delta-scattered-sequence]]

[Bergelson–Moreira, Definition 2.13](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
