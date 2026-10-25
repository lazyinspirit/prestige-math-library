---
id: def-formal-laurent-series-and-residue
kind: definition
title: "Formal Laurent series $K((x))$, their order, derivative, and residue"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Definition

For a field $K$, a **formal Laurent series** is a coefficient function $a:\mathbb Z\to K$ whose support is bounded below. Write

$$K((x)):=\left\{\sum_{n\ge N}a_nx^n:N\in\mathbb Z\right\}.$$

Addition is coefficientwise and multiplication is finite convolution in each degree. If the supports of two factors are bounded below by $p$ and $q$, then their product is bounded below by $p+q$, and a fixed coefficient has only finitely many contributing pairs. For nonzero $f$, define

$$v_x(f):=\min\{n\in\mathbb Z:[x^n]f\ne0\},$$

and set $v_x(0)=+\infty$. Define $D(x^n)=nx^{n-1}$ for every integer $n$, extending coefficientwise, and define the **formal residue**

$$\operatorname{res}_x(f):=[x^{-1}]f.$$

This generalizes the real-coefficient construction of [[def-formal-laurent-series]] and uses the same finite-convolution and least-support conventions proved in [[lem-laurent-series-ring]] and [[lem-laurent-valuation]]. It changes the indeterminate notation from that page's $t^{-1}$ to $x$.
