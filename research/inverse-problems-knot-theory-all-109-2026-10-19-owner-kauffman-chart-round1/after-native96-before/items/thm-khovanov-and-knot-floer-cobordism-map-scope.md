---
id: thm-khovanov-and-knot-floer-cobordism-map-scope
kind: theorem
title: "Scope of the Khovanov and decorated knot Floer cobordism maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - thm-barnatan-khovanov-cobordism-functoriality-up-to-sign
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The integral Khovanov branch assumes AC_omega through link invariance. The two-color knot Floer branch is over F2[U,V] and is indexed by Spin-c structures, with the composition sum over extensions."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Theorems 4–5"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1472–1480; even integral Khovanov cobordism maps up to sign and chain homotopy"
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, Theorems A and B"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.2–4 and 85–97; colored link Floer maps, filtered chain homotopy invariance, and Spin-c composition law"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, §4.2"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed pp.1235–1237; boundary-fixed isotopy scope and movie-move argument"
---

## Statement

Assume countable choice. For a smooth oriented knot cobordism in $S^3\times[0,1]$, the ordinary even integral Khovanov assignment has source and target the bigraded groups $Kh^{i,j}$ and is defined up to an overall sign; after quotienting morphisms by sign, it is invariant under ambient isotopy fixed on the boundary and respects composition. If the surface is equipped with a dividing set and one $w$- and one $z$-basepoint on each boundary knot, the decorated knot Floer assignment has source and target the filtered complexes $CFL^-_{UV}(S^3,K)$ over $\mathbb F_2[U,V]$, and is invariant up to filtered equivariant chain homotopy. For a general gluing of decorated four-dimensional cobordisms, the link Floer composition law sums over Spin-c structures on the composite that restrict to the chosen structures on the pieces; for the product $S^3\times[0,1]$ this sum has one term. The two assignments therefore have separately specified targets, coefficient rings, decorations, and equivalence relations.

## Statement references

[[thm-barnatan-khovanov-cobordism-functoriality-up-to-sign|Even integral Khovanov cobordism functoriality]]

[[def-decorated-link-cobordism-and-floer-target|The decorated Floer target and dividing-set data]]

[[def-knot-floer-cobordism-map|The Spin-c-indexed decorated Floer map]]

[[lem-knot-floer-cobordism-naturality-and-movie-invariance|Floer naturality and composition law]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, Theorems 4–5](https://arxiv.org/pdf/math/0410495v2)

[Zemke, *Link cobordisms and functoriality in link Floer homology*, Theorems A and B](https://arxiv.org/pdf/1610.05207v3)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §4.2](https://arxiv.org/pdf/math/0206303)

## Unresolved proof obligations

The statement combines two established constructions but their proofs remain independent: the Khovanov branch requires the corrected spherical movie classification, all local normalized Carter–Saito map calculations, and the additional sweep-around map identity; the Floer branch requires triangle analysis and the fourteen Cerf-move checks, together with empty-end puncturing. The exact unresolved suppliers are [L1] and [L2]. No comparison map or equality between the two different targets is asserted.
