---
id: def-temperley-lieb-jones-wenzl-recursion
kind: definition
title: "Jones–Wenzl recursion in the nonvanishing-denominator range"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-diagram-category
  - lem-temperley-lieb-generators-satisfy-local-relations
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2, PDF pp. 19–23: Wenzl recursion, annihilation, idempotence, and trace."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\delta\in\mathbb C$ and use the quantum integers of [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]. Define $p_0=1\in\mathrm{TL}_0$ and $p_1=1\in\mathrm{TL}_1$. If $[2]_\delta,\ldots,[n]_\delta$ are nonzero, define recursively, for $1\le r<n$,

$$P_r=p_r\otimes1\in\mathrm{TL}_{r+1},\qquad p_{r+1}=P_r-\frac{[r]_\delta}{[r+1]_\delta}P_r d_r P_r.$$

The element $p_n$ defined by this recursion is the Jones–Wenzl element in the nonvanishing-denominator range. This definition makes no assertion that failure of the displayed recursion implies nonexistence of any idempotent.
