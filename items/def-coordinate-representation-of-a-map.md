---
id: def-coordinate-representation-of-a-map
kind: definition
title: "The coordinate representation of a map between manifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-manifold-chart-coordinate-domain-and-coordinate-functions]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a topological $m$-manifold, let $N$ be a topological $n$-manifold,
let $F:M\to N$ be any function, and let
$(U,\varphi)$ and $(V,\psi)$ be charts on $M$ and $N$ respectively
([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]). The
**coordinate representation** (or **local representative**) of $F$ with respect to
these charts is the function

$$\widehat F:=\psi\circ F\circ\varphi^{-1}:\varphi\bigl(U\cap F^{-1}(V)\bigr)\longrightarrow\psi(V),$$

which is defined on the image of $U\cap F^{-1}(V)$. When $F$ is continuous, the
preimage $F^{-1}(V)$ is open in $M$, so $U\cap F^{-1}(V)$ is open in the open set
$U$ and its image under the homeomorphism $\varphi$ is an open subset of
$\mathbb R^m$; in that case $\widehat F$ is a map between open subsets of
Euclidean spaces, and only such representatives are ever tested for smoothness.

With coordinates $(x^1,\ldots,x^m)$ on $U$ and $(y^1,\ldots,y^n)$ on $V$, the
representative expresses the image coordinates as functions of the source
coordinates:
$$\widehat F(x^1,\ldots,x^m)=\bigl(y^1(F(\varphi^{-1}(x))),\ldots,y^n(F(\varphi^{-1}(x)))\bigr).$$

## Remarks

- **The domain is written explicitly.** The restriction to
  $\varphi(U\cap F^{-1}(V))$ is exactly where the composite formula makes sense;
  on the remaining part of $\varphi(U)$ the image of $\varphi^{-1}$ need not even
  lie in $V$. This restriction is the precise content of "the representative with
  respect to these two charts".

- **Continuity is what makes the domain open.** Without continuity of $F$ the
  set $U\cap F^{-1}(V)$ can fail to be open, and the representative is not a map
  between open subsets of Euclidean spaces; the definition of smoothness below
  therefore applies the representative only to continuous maps.
