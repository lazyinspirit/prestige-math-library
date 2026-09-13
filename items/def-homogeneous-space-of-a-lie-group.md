---
id: def-homogeneous-space-of-a-lie-group
kind: definition
title: Homogeneous spaces of Lie groups
status: published
origin: pipeline
deps: [def-lie-group, def-smooth-left-action-of-a-lie-group, def-quotient-topology]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous Spaces, printed pages 550–551
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Section 4.1, printed page 28
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A **homogeneous $G$-space** is a smooth manifold $M$ with a smooth transitive
left action of a Lie group $G$: for every $x,y\in M$ there is $g\in G$ with
$g\cdot x=y$.

If $H\leq G$ is a subgroup, $G/H$ denotes the set of left cosets $gH$ with
the quotient topology induced by $q(g)=gH$. It carries the set-theoretic left
action $a\cdot(gH)=(ag)H$. The notation alone does not assert that $G/H$ is a
Hausdorff smooth manifold; that conclusion will require $H$ to be closed.
