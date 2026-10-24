---
id: def-ale-moving-domain-map
kind: definition
title: "ALE moving-domain map and mesh velocity"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§2.2, pp. 415–417; §3, pp. 417–419; §4, pp. 419–420."
---

## Definition

Fix an integer $d\ge1$, a time interval $[0,T]$ with $T>0$, and a nonempty bounded open reference domain $\widehat\Omega\subset\mathbb R^d$ with compact Jordan closure; Jordan measurability means equality of finite-rectangle inner and outer contents ([[def-jordan-inner-and-outer-content]]). In dimension $d=1$, require $\widehat\Omega$ to be a finite union of bounded open intervals with pairwise disjoint closures. In dimensions $d\ge2$, require a finite piecewise-$C^1$ boundary presentation: a finite family of compact boundary faces $S_1,\ldots,S_q$ and a compact edge set $E$ such that the faces cover $\partial\widehat\Omega$, each face lies in a regular $C^1$ hypersurface patch, $S_i\cap E$ is surface-null, all face overlaps lie in $E$, and off $E$ the boundary is locally one $C^1$ graph with $\widehat\Omega$ on one side. The faces carry that side's outward unit normal.

An **ALE moving-domain map** is a map $A:[0,T]\times\overline{\widehat\Omega}\to\mathbb R^d$ whose space-time restriction extends to a $C^2$ map on a neighborhood of this set, and for each $t$ the map $A_t(\xi):=A(t,\xi)$ is an orientation-preserving diffeomorphism on neighborhoods of the closures. Write $\Omega(t):=A_t(\widehat\Omega)$ and $J(\xi,t):=\det D_\xi A_t(\xi)>0$. Define the **mesh velocity** in physical coordinates by $w_m(x,t):=\partial_t A_t(A_t^{-1}(x))$. In $d=1$ the moving boundary consists of the transported interval endpoints. In $d\ge2$, require the transported faces under $A_t$ to satisfy the same finite piecewise-$C^1$ boundary-presentation conditions; the diffeomorphism carries the reference faces and edge set to that presentation, with the transported outward normal.

This definition fixes the regularity and sign conventions for the continuous ALE identities. It does not assert a discrete approximation property, a nonintersection theorem for a computed mesh, or well-posedness of a coupled PDE.
