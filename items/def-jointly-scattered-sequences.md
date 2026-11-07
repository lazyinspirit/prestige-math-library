---
id: def-jointly-scattered-sequences
kind: definition
title: Jointly scattered real sequences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-scattered-sequence
  - def-delta-scattered-sequence
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Definition 2.25, §2.7"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Definition 2.25, §2.7; full relevant passage inspected"
---

## Definition

For $k\ge1$, real sequences $a_1(n),\ldots,a_k(n)$ indexed by positive integers are **jointly scattered** if for every nonzero $v=(v_1,\ldots,v_k)\in\mathbb R^k$ and every $\delta\in(0,1]$, there are $\eta>0$ and an integer $N_0\ge2$ such that for all integers $N\ge N_0$,

$$\frac1{N^2}\sum_{1\le m<n\le N}w_\delta\!\left(\sum_{j=1}^k v_j(a_j(n)-a_j(m))\right)\le(\log N)^{-1-\eta},$$

where $w_\delta(t)=1$ for $t=0$ and $w_\delta(t)=\min\{1,|t|^{-\delta}\}$ for $t\ne0$, as in the $\delta$-scattered definition.

## Definition references

[[def-scattered-sequence]]

[[def-delta-scattered-sequence]]

[Bergelson–Moreira, Definition 2.25](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
