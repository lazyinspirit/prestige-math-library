---
id: def-integral-of-an-oriented-chart-supported-top-form
title: "Chart integral with its orientation sign"
kind: definition
status: published
origin: pipeline
deps: ["lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions", "def-oriented-smooth-manifold-and-oriented-chart", "def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space", "def-support-and-compactly-supported-riemann-integral-in-rn"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee (16.1), pp.404–406"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---
## Definition

Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write
$$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$
Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by
$$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$
Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in [[lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions]]. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.
