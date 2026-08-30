---
id: def-landau-radius-and-landau-constant
kind: definition
title: "Landau radii and the Landau constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §7.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Definition

Let $f$ be holomorphic on $\mathbb D$ with $f'(0)\ne0$. The **Landau radius**
$\lambda(f)$ is the supremum of all $r>0$ such that $f(\mathbb D)$ contains a
round disc of radius $r$.

The **Landau constant** is

$$\mathcal L:=\inf\{\,\lambda(f):f\text{ holomorphic on }\mathbb D,\ |f'(0)|=1\,\}.$$
