---
id: def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary
kind: definition
title: "Smooth foliations tangent to the boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-foliation-atlas, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-topological-manifold-with-boundary, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-smooth-distribution-on-a-manifold, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§1.3.6, printed p. 10 (PDF p. 11); §2.1, printed pp. 11–14 (PDF pp. 12–15); §2.2, printed pp. 14–15 (PDF pp. 15–16)"
    - title: "Tomasz Mrowka, MIT 18.965 Differential Topology, lecture notes (complete PDF)"
      url: "https://math.mit.edu/~mrowka/math965lectnote.pdf"
      locator: "§§20–23, PDF pp. 52–56"
dependency_level: 1
---

## Definition

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $W$ be a smooth
$n$-manifold with boundary, $n\ge1$, with boundary charts modelled on the half-space
$\mathbb H^n=\mathbb R^{n-1}\times[0,\infty)$ and smooth structure as in
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]] and
[[def-topological-manifold-with-boundary]]; thus
$\partial W$ is a closed embedded smooth $(n-1)$-manifold
([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

Fix $1\le q\le n$ and split $\mathbb H^n=\mathbb R^{n-q}\times\mathbb H^q$. A
**regular foliation of $W$ tangent to $\partial W$ of codimension $q$** is a
regular foliation atlas for the smooth structure of $W$
([[def-regular-foliation-atlas]]) whose charts are relatively open subsets of
$\mathbb H^n$ and whose transition maps are compatible with the standard
decomposition of $\mathbb H^n$ into the model plaques
$\mathbb R^{n-q}\times\{y\}$, $y\in\mathbb H^q$; that is, on every overlap the
coordinates of the second factor depend only on the second coordinates of the
first factor, exactly as for a foliation atlas on a boundaryless manifold, and
the plaque decomposition restricts to the half-space.

The model plaques meet $\partial\mathbb H^n=\mathbb R^{n-q}\times\partial
\mathbb H^q$ in the sets $\mathbb R^{n-q}\times\{y\}$ with
$y\in\partial\mathbb H^q$. Consequently, near a boundary point of $W$ the
leaves of $F$ are the intersections of the model plaques with the half-space;
the boundary $\partial W$ is a union of leaves of $F$, and each such
boundary plaque lies in the induced regular foliation of $\partial W$ of
codimension $q-1$; the tangent distribution
$TF$ of the foliation ([[def-smooth-distribution-on-a-manifold]]) is tangent to
the boundary along $\partial W$ in the sense that $T_p\partial W$ contains
$D_p=TF_p$ for $p\in\partial W$. Thus the leaf directions have zero normal
component there. A leaf of the foliation restricted to the interior
$\operatorname{Int}W$ is a leaf of $F$, and it need not meet $\partial W$.

The pair uses this vocabulary only for $q=1$: the Reeb foliations of the solid
torus and its gluing are tangent to the boundary, and the boundary torus of a
Reeb component is a single leaf.
