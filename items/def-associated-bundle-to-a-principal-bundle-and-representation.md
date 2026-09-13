---
id: def-associated-bundle-to-a-principal-bundle-and-representation
kind: definition
title: Associated bundles
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle, def-vector-bundle-chart-and-transition-function, def-principal-g-bundle-and-associated-fiber-bundle, def-quotient-topology, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Vector-bundle and fibre-bundle conventions, Chapter 10, especially printed pages 249–250 and 267–268
---

## Definition

Let $\pi:P\to M$ be a smooth right principal $H$-bundle, meaning that the
topological principal charts of
[[def-principal-g-bundle-and-associated-fiber-bundle]] are diffeomorphisms, and
let $\rho:H\to GL(V)$ be a smooth finite-dimensional real representation.
Define a right action on $P\times V$ by

$$(p,v)\cdot h=(ph,\rho(h)^{-1}v).$$

The **vector bundle associated to $P$ and $\rho$** is the quotient set with
quotient topology

$$P\times_HV=(P\times V)/H.$$

Write $[p,v]$ for the orbit of $(p,v)$. Equivalently, the generating relation
is

$$[ph,v]=[p,\rho(h)v].$$

The projection is

$$r:P\times_HV\to M,\qquad r([p,v])=\pi(p).$$

It is well defined because $\pi(ph)=\pi(p)$ and continuous by the quotient
universal property [[thm-quotient-universal-property]]. The inverse in the
diagonal action is essential: it makes the displayed relation and the right
action law agree. The quotient construction itself uses no choices. The
homogeneous principal bundle of
[[thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle]] is one instance, not a
hypothesis of the general definition. The next theorem supplies the smooth
vector-bundle atlas in the sense of
[[def-vector-bundle-chart-and-transition-function]].
