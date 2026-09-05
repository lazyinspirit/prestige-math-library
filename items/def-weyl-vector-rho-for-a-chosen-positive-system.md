---
id: def-weyl-vector-rho-for-a-chosen-positive-system
kind: definition
title: "The Weyl vector rho for a chosen positive system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-triangular-decomposition-from-a-chosen-positive-root-system]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Definition

Fix a positive root system $\Phi^+$ as in [[thm-triangular-decomposition-from-a-chosen-positive-root-system]]. The **Weyl vector** for that choice is

$$\rho:=\frac12\sum_{\alpha\in \Phi^+} \alpha \in \mathfrak h^*.$$

This is the shift used in the dot action and in the quadratic Casimir eigenvalue formula on this page.
