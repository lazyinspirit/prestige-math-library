---
id: def-poincare-metric-and-distance-on-the-disc
kind: definition
title: "The Poincare metric and distance on the unit disc"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-unit-disc-upper-half-plane-and-blaschke-factor]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jiri Lebl, Guide to Cultivating Complex Analysis, §3.5"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Definition

On the unit disc $\mathbb D$ of
[[def-unit-disc-upper-half-plane-and-blaschke-factor]] fix the **Poincare
metric**, also called the hyperbolic metric of the disc,

$$ds_{\mathbb D}:=\frac{2\,|dz|}{1-|z|^2}.$$

For a piecewise $C^1$ curve $\gamma:[a,b]\to\mathbb D$ its **Poincare length** is

$$\ell_{\mathbb D}(\gamma):=\int_\gamma\frac{2\,|dz|}{1-|z|^2}=\int_a^b\frac{2\,|\gamma'(t)|}{1-|\gamma(t)|^2}\,dt,$$

and the **Poincare distance** between $z,w\in\mathbb D$ is

$$d_{\mathbb D}(z,w):=\inf\{\,\ell_{\mathbb D}(\gamma):\gamma\text{ a piecewise }C^1\text{ curve in }\mathbb D\text{ from }z\text{ to }w\,\}.$$

The image of $\gamma$ is a compact subset of $\mathbb D$, so
$1-|\gamma(t)|^2$ is bounded away from $0$. On each of the finitely many $C^1$
pieces, $|\gamma'(t)|$ is continuous and bounded; hence the displayed integrand
is piecewise continuous and integrable, and each $\ell_{\mathbb D}(\gamma)$ is
a finite real number. The infimum is taken over a nonempty set, because
$\mathbb D$ is convex and the segment from $z$ to $w$ lies in $\mathbb D$.
This normalisation — factor $2$, curvature $-1$ — is fixed for every later
surface page. The explicit formula
$d_{\mathbb D}(z,w)=2\operatorname{artanh}|\varphi_z(w)|$ and the metric axioms
are established on this page by the Poincare-distance formula theorem; the
present definition records the intrinsic path-metric construction it evaluates.
