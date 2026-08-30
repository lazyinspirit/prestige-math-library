---
id: thm-constant-rank-theorem-for-manifolds
kind: theorem
title: "The constant-rank theorem for manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rank-of-a-smooth-map-at-a-point, def-immersion-submersion-and-constant-rank-map, thm-chain-rule-for-differentials-of-smooth-maps, lem-constant-rank-source-coordinate-map-is-locally-invertible, lem-constant-rank-tail-components-ignore-kernel-coordinates, thm-higher-regularity-of-local-inverses, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: true
short: "$(u,v)\\mapsto(u,0)$"
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Maps of Constant Rank"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M^m\to N^n$ be smooth, let $p\in M$, and suppose $F$ has constant rank
$r$ on a neighbourhood of $p$. Then there are smooth charts
$\varphi:U\to\mathbb R^m$ at $p$ and $\psi:V\to\mathbb R^n$ at $F(p)$ such that

$$\psi\circ F\circ\varphi^{-1}(u,v)=(u,0)$$

for $(u,v)\in\mathbb R^r\times\mathbb R^{m-r}$ near $\varphi(p)$, with the zero
in $\mathbb R^{n-r}$.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$, a point $p\in M$, and constant rank $r$ near $p$.

[F1] The rank of $F$ at a point is the rank of its differential, and constant rank means that same rank at every point of the chosen set ([[def-rank-of-a-smooth-map-at-a-point]], [[def-immersion-submersion-and-constant-rank-map]]).

[L1] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

[L2] A nonzero rank minor supplies an explicit local source-coordinate map
$\Phi$ that is a $C^k$ diffeomorphism; the identity handles rank zero
([[lem-constant-rank-source-coordinate-map-is-locally-invertible]]).

[L3] Chart maps are smooth diffeomorphisms onto open Euclidean sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L4] A local inverse of a smooth Euclidean map with invertible differential is
smooth ([[thm-higher-regularity-of-local-inverses]]).

[L5] In the source rank coordinates $y=\Phi(x)$, after shrinking to a product
neighbourhood the map has the form $g(u,v)=(u,h(u))$
([[lem-constant-rank-tail-components-ignore-kernel-coordinates]]).

## Proof
**Proof technique:** direct.

1.1 Choose charts $(U_0,\alpha)$ at $p$ and $(V_0,\beta)$ at $F(p)$ as in [L3], and let $f:=\beta\circ F\circ\alpha^{-1}$. By [L3], the maps $\alpha^{-1}$ and $\beta$ are diffeomorphisms, so their differentials are linear isomorphisms. Therefore [L1] gives $$ D f(\alpha(x))=d\beta_{F(x)}\circ dF_x\circ d(\alpha^{-1})_{\alpha(x)} $$ for every $x$ near $p$, and the rank of $D f(\alpha(x))$ equals the rank of $dF_x$. Using [F1], after shrinking $U_0$ the map $f$ has constant rank $r$ on an open Euclidean neighbourhood of $\alpha(p)$. [F1, L1, L3, given]

2.1 After permuting source and target coordinates, use [L2] to form the explicit source map $\Phi$ from the first $r$ components of the smooth map $f$ and the remaining source coordinates. Thus $\Phi$ is smooth. Its local inverse is unique and is $C^k$ for every finite $k$ by [L4], hence is smooth. Put $g:=f\circ\Phi^{-1}$. By [L5], after shrinking to a product neighbourhood, $g(u,v)=(u,h(u))$; here $h$ is smooth because $g$ is smooth. The target shear $\widetilde\beta(z,w):=(z,w-h(z))$ and its explicit inverse $(z,w)\mapsto(z,w+h(z))$ are smooth. Therefore $\widetilde\beta\circ f\circ\Phi^{-1}(u,v)=(u,0)$ near the distinguished point. [step 1.1, L2, L4, L5, construct]

3.1 Compose the original source chart with $\Phi$ and the target chart with the shear: $\varphi:=\Phi\circ\alpha$ and $\psi:=\widetilde\beta\circ\beta$. By [L3] these are smooth charts, and their coordinate representative for $F$ is the normal form from step 2.1. [step 2.1, L3, construct]

4.1 Therefore $F$ has the claimed local slice form around $p$. When $r=0$ or $r=\min\{m,n\}$, the empty blocks in the displayed formula are interpreted in the usual way. [step 3.1] ∎
