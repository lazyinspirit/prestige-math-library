---
id: def-inverse-and-shifted-inverse-iteration
kind: definition
title: "Inverse iteration and shifted inverse iteration"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-power-iteration, def-invertible-matrix-and-general-linear-group]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Definition

Let $A\in M_n(\mathbb F)$, let $\mu\in\mathbb F$ with $A-\mu I$ invertible,
and let $x_0\in\mathbb F^n$ be nonzero. The **shifted inverse iteration** with
shift $\mu$ and starting vector $x_0$ is the power iteration applied to
$(A-\mu I)^{-1}$:

$$ x_{k+1}:=\frac{(A-\mu I)^{-1}x_k}{\|(A-\mu I)^{-1}x_k\|_2}. $$

The special case $\mu=0$, when $A$ itself is invertible, is **inverse
iteration**.

Thus shifted inverse iteration is defined exactly when
$A-\mu I\in \operatorname{GL}_n(\mathbb F)$ in the sense of
[[def-invertible-matrix-and-general-linear-group]].
