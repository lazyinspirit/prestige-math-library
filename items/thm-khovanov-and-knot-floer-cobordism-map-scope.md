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
  proof: ai-altered
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

Assume countable choice. For a smooth oriented knot cobordism in $S^3\times[0,1]$, the ordinary even integral Khovanov assignment has source and target the bigraded groups $Kh^{i,j}$ and is defined up to an overall sign; after quotienting each Khovanov hom-set by the action $f\mapsto -f$, it is invariant under ambient isotopy fixed on the boundary and respects composition. If the surface is equipped with a dividing set and one $w$- and one $z$-basepoint on each boundary knot, the decorated knot Floer assignment has source and target the filtered complexes $CFL^-_{UV}(S^3,K)$ over $\mathbb F_2[U,V]$, and is invariant up to filtered equivariant chain homotopy. For a general gluing of decorated four-dimensional cobordisms, the link Floer composition law sums over Spin-c structures on the composite that restrict to the chosen structures on the pieces; for the product $S^3\times[0,1]$, this sum has one term if the chosen piece structures are restrictions of the unique product structure, and is empty otherwise. In the compatible case the law is ordinary composition. The two assignments therefore have separately specified targets, coefficient rings, decorations, and equivalence relations.

## Statement references

[[thm-barnatan-khovanov-cobordism-functoriality-up-to-sign|Even integral Khovanov cobordism functoriality]]

[[def-decorated-link-cobordism-and-floer-target|The decorated Floer target and dividing-set data]]

[[def-knot-floer-cobordism-map|The Spin-c-indexed decorated Floer map]]

[[lem-knot-floer-cobordism-naturality-and-movie-invariance|Floer naturality and composition law]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, Theorems 4–5](https://arxiv.org/pdf/math/0410495v2)

[Zemke, *Link cobordisms and functoriality in link Floer homology*, Theorems A and B](https://arxiv.org/pdf/1610.05207v3)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §4.2](https://arxiv.org/pdf/math/0206303)

## Facts & Assumptions

**Given:** Countable Choice and the smooth oriented knot cobordism in the Statement; for the Floer assignment also its dividing set, marked points and specified Spin-c structures.

[F1] The retained even integral Khovanov functor gives the indicated bigraded groups and cobordism maps up to one overall sign, with boundary-fixed isotopy invariance and composition after quotienting by sign. This locally resolved result is reused unchanged. ([[thm-barnatan-khovanov-cobordism-functoriality-up-to-sign]])

[F2] The decorated Floer map construction and naturality lemma give the two-color filtered $\mathbb F_2[U,V]$-equivariant maps, with one Spin-c label and the extension-sum composition law. Their explicitly external inputs are Zemke's Theorems A and B, arXiv:1610.05207v3, pp.3 and 85–98, at the full divided-surface, parametrized-boundary and colored-chain-complex scope; their explicit finite/countable-choice specialization is retained, and no full-Choice theorem is silently substituted for the stated hypothesis. Neither the hat-only Juhasz construction nor the graph reduction is being asserted to construct this two-variable functor. ([[def-knot-floer-cobordism-map]], [[lem-knot-floer-cobordism-naturality-and-movie-invariance]], [source](https://arxiv.org/pdf/1610.05207v3))

## Proof

1.1 Apply [F1] to the smooth oriented surface. Its target is ordinary even integral $Kh^{i,j}$, and identifying a map with its negative removes exactly the one sign ambiguity. Its isotopy and composition conclusions are the first assertion of the Statement. [F1, given]

1.2 For the separately decorated surface apply [F2], coloring all w-regions by $U$ and z-regions by $V$. The intermediate multiply based link modules and their endpoint naturality identifications are part of that construction. Zero curvature makes the endpoint objects the specified complexes, and external Theorem A gives filtered equivariant chain-homotopy invariance. This assertion has coefficient field $\mathbb F_2$ and its own decoration and Spin-c data; no integral Khovanov sign ambiguity or comparison between the two theories is transferred to it. [F2, given]

2.1 The general composition law is the extension sum in [F2]. On $S^3\times[0,1]$ the Spin-c set has one element, so the extension sum is a singleton for compatible piece structures and empty otherwise. Combining the two independently established assignments proves the entire Statement with its distinct targets, coefficients and equivalence relations. It asserts neither equality of the functors nor a canonical chain-level top generator, and requires no new local reconstruction of the imported Cerf checks. [F1, F2, step 1.1, step 1.2] ∎

