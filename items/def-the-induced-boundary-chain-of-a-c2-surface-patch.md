---
id: def-the-induced-boundary-chain-of-a-c2-surface-patch
kind: definition
title: "The induced boundary chain and circulation of a $C^2$ patch over a finite elementary Green region"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-admissible-regular-parametrized-surface-patch, def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-ck-euclidean-maps-and-diffeomorphisms, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.7"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Definition

A **$C^2$ patch over a finite elementary Green region** is a regular parametrized surface patch $(D,\varphi)$ in the sense of [[def-admissible-regular-parametrized-surface-patch]] whose parameter region $D$ is supplied, in addition, with a decomposition making it a finite elementary Green region in the sense of [[def-type-i-type-ii-and-elementary-green-regions]], and whose parametrization $\varphi$ is of class $C^2$ on an open neighbourhood of $D$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Both requirements on $D$ are part of the data: it is a compact Jordan parameter region, so it is the closure of its nonempty connected interior, and it carries a supplied elementary decomposition.

Let $\partial D=(\sigma_1,\ldots,\sigma_m)$ be the positive boundary chain of that decomposition, the finite list of oriented piecewise-$C^1$ arcs of [[def-positive-orientation-for-elementary-region-boundaries]]. Then the **induced boundary chain** is the list of arcs obtained by composing the positive boundary chain of the parameter region with the parametrization, namely

$$\varphi(\partial D):=(\varphi\circ\sigma_1,\ldots,\varphi\circ\sigma_m),$$

each entry a piecewise-$C^1$ path in $\mathbb R^3$ in the sense of [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]. For a continuous vector field $F$ on a set containing $\varphi[D]$, the **circulation of $F$ around the induced boundary chain** is the finite sum

$$\oint_{\varphi(\partial D)}F\cdot d\mathbf r:=\sum_{l=1}^m\int_{\varphi\circ\sigma_l}F\cdot d\mathbf r,$$

with the vector line integrals of [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]. The value does not depend on the order of the list, a finite sum of reals being independent of its order.

If instead $F$ is defined on an open set $U$ containing $\varphi[D]$, continuity of $\varphi$ and compactness of $D$ give an open neighbourhood $V$ of $D$ in the domain of $\varphi$ with $\varphi[V]\subseteq U$. On $V$, the **pulled-back functions** are the inner products of the field along the parametrization with the two parameter derivatives:

$$P^{*}:=\langle F\circ\varphi,\varphi_u\rangle,\qquad Q^{*}:=\langle F\circ\varphi,\varphi_v\rangle,$$

with the inner product of [[def-euclidean-inner-product]]. The oriented area vector $\varphi_u\times\varphi_v$ and the flux it computes are those of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]. A merely continuous field on an arbitrary set containing $\varphi[D]$ is enough for circulation, but not for these neighbourhood-defined pullbacks.

## Remarks

- **The orientation of the boundary is defined mechanically, not by a hand rule.** Which way the induced boundary chain runs is decided entirely by [[def-positive-orientation-for-elementary-region-boundaries]] in the parameter plane and then transported by $\varphi$. The informal descriptions in the literature — walking along the curve with the head pointing along the normal and the surface on the left, or the right-hand rule — agree with this, but none of them is used here as a definition, and none of them is quoted as one. What makes the sign agreement a fact rather than a convention is that Green's theorem is proved on the parameter region.

- **A closed disc is not a legal parameter region here.** An elementary Green region is bounded by continuous **piecewise-$C^1$** graphs over a nondegenerate interval, and the two semicircular graphs of a disc are not piecewise $C^1$ at the endpoints. Every parameter region used with this definition on this page is a rectangle; a disc-shaped patch image is obtained instead by a polar parametrization over a rectangle, whose induced boundary chain then has two radial edges that cancel and one degenerate edge.

- **Why $C^2$ and where the elementary decomposition is spent.** When $F$ is
  $C^1$ on the open set $U$, the class $C^2$ makes the parameter derivatives
  $\varphi_u,\varphi_v$ of class $C^1$, so the pullback coefficients $P^*,Q^*$
  are differentiable on a neighbourhood of $D$; then
  [[lem-the-stokes-integrand-identity-on-a-c2-patch]] uses $C^2$ once more to
  exchange the mixed second parameter derivatives of $\varphi$. The elementary
  decomposition of $D$ is what lets Green's theorem be applied on the parameter
  region, and the positive boundary chain it carries is what the induced chain
  is the image of.
