---
id: def-smooth-left-action-of-a-lie-group
kind: definition
title: Smooth left actions of Lie groups
status: draft
origin: pipeline
deps: [def-lie-group, def-c-r-and-smooth-maps-between-smooth-manifolds]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Definition 4.8, printed page 30
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Chapter 21 opening conventions, printed page 541
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $G$ be a Lie group and $M$ a smooth manifold. A **smooth left action** of
$G$ on $M$ is a jointly smooth map

$$a:G\times M\longrightarrow M,\qquad (g,x)\longmapsto g\mathbin{\cdot}x,$$

such that, for all $g,h\in G$ and $x\in M$,

$$e\mathbin{\cdot}x=x,\qquad (gh)\mathbin{\cdot}x=g\mathbin{\cdot}(h\mathbin{\cdot}x).$$

For each $g$, the map $a_g(x)=g\cdot x$ is then a diffeomorphism with inverse
$a_{g^{-1}}$. Joint smoothness is part of the definition; separate
smoothness of individual orbit maps is not substituted for it.
