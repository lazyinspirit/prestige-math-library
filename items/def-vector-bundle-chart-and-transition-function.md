---
id: def-vector-bundle-chart-and-transition-function
kind: definition
title: "Vector bundle charts and transition functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $\pi:E\to M$ be a smooth rank-$r$ vector bundle and let
$\Phi_\alpha:\pi^{-1}(U_\alpha)\to U_\alpha\times\mathbb R^r$ be a local
trivialization whose restriction on each fibre is a linear isomorphism. The
pair $(U_\alpha,\Phi_\alpha)$ is a **vector bundle chart**.

For two vector bundle charts $(U_\alpha,\Phi_\alpha)$ and
$(U_\beta,\Phi_\beta)$, the overlap map

$$\Phi_\beta\circ\Phi_\alpha^{-1}:(U_\alpha\cap U_\beta)\times\mathbb R^r\to (U_\alpha\cap U_\beta)\times\mathbb R^r$$

has the form

$$\Phi_\beta\circ\Phi_\alpha^{-1}(p,v)=(p,g_{\beta\alpha}(p)v),$$

where $g_{\beta\alpha}:U_\alpha\cap U_\beta\to GL(r,\mathbb R)$ is smooth. The
map $g_{\beta\alpha}$ is the **transition function** from chart $\alpha$ to
chart $\beta$.
