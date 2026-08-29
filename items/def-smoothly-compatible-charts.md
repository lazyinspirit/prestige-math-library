---
id: def-smoothly-compatible-charts
kind: definition
title: "Smoothly compatible charts and the smoothness of Euclidean transition maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-manifold-chart-coordinate-domain-and-coordinate-functions, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Definition

Let $m\ge1$, let $q\in\mathbb N_0$, let $W\subseteq\mathbb R^m$ be open and
let $f:W\to\mathbb R^q$. The map $f$ is **smooth** (of class $C^\infty$) when
every component $f_l:W\to\mathbb R$, $l<q$, is of class $C^k$ for
every $k\in\mathbb N$, where scalar
$C^k$ means that every iterated coordinate derivative through order $k$ exists
and is continuous on $W$ ([[def-ck-and-multi-index-notation-in-several-variables]]).
For $m=0$ the domain is the one-point space or the empty set and every map from
it is declared smooth; for $q=0$ there are no components and every map into the
one-point space is smooth.

Let $M$ be a topological $n$-manifold and let $(U,\varphi)$ and $(V,\psi)$ be
charts on $M$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).
The charts are **smoothly compatible** when $U\cap V=\varnothing$, or when
$n\ge1$ and both **transition maps**

$$\psi\circ\varphi^{-1}:\varphi(U\cap V)\longrightarrow\psi(U\cap V), \qquad \varphi\circ\psi^{-1}:\psi(U\cap V)\longrightarrow\varphi(U\cap V)$$

are smooth in the sense above. Both directions of the transition are part of the
definition; in dimension zero overlapping charts have the same one-point image,
the only transition is the identity, and overlapping charts are declared
compatible.

## Remarks

- **Smoothness is a property of pairs of charts, not of a chart alone.** One
  chart has no smoothness condition: any homeomorphism onto an open set is a
  chart. Smoothness enters only when two charts must agree on their overlap.

- **Both transition directions are required by definition.** A bijective map
  whose one direction is smooth need not have a smooth inverse
  (for example, the two charts $(\mathbb R,\operatorname{id})$ and
  $(\mathbb R,x\mapsto x^3)$ have reverse transition $x\mapsto x^{1/3}$, which
  is not differentiable at $0$); requiring both directions outright makes
  compatibility genuinely symmetric, as
  [[lem-smooth-chart-compatibility-is-symmetric-and-reflexive]] records.
