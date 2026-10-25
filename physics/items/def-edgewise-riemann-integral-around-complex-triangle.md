---
id: def-edgewise-riemann-integral-around-complex-triangle
kind: definition
title: "The edgewise Riemann integral around a complex triangle for an integrable pullback"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-oriented-complex-triangle-and-boundary, def-vector-valued-derivative-and-integral, thm-complex-numbers-are-the-real-coordinate-plane, thm-riemann-stieltjes-and-parametric-contour-integrals-agree]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Remark 2.22"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Definition

For an ordered complex triangle and a function on its boundary trace, if the pullback along each affine edge multiplied by that edge's constant velocity is Riemann integrable, define the edgewise triangle integral to be the sum of those three complex Riemann integrals.

Precisely, let the directed edges $\ell_{ab}$, $\ell_{bc}$, and $\ell_{ca}$ be those of [[def-oriented-complex-triangle-and-boundary]], and let $f$ be defined on their combined trace. When the functions

$$t\longmapsto f(\ell_{ab}(t))(b-a),\qquad t\longmapsto f(\ell_{bc}(t))(c-b),\qquad t\longmapsto f(\ell_{ca}(t))(a-c)$$

are Riemann integrable on $[0,1]$ as maps into $\mathbb C=\mathbb R^2$ ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[def-vector-valued-derivative-and-integral]]), put

$$\int_{\partial\Delta[a,b,c]}^{\mathrm{edge}} f(z)\,dz:=\int_0^1 f(\ell_{ab}(t))(b-a)\,dt+\int_0^1 f(\ell_{bc}(t))(c-b)\,dt+\int_0^1 f(\ell_{ca}(t))(a-c)\,dt.$$

The integrability hypothesis makes every term a uniquely defined complex number, so the displayed sum is well-defined. If $f$ is continuous on the trace, [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]] identifies this edgewise value with the published contour integral $\int_{\partial\Delta[a,b,c]}f(z)\,dz$. Constant edges cause no ambiguity because their velocity is zero.
