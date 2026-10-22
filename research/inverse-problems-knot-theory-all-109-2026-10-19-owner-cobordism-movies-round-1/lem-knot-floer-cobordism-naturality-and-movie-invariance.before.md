---
id: lem-knot-floer-cobordism-naturality-and-movie-invariance
kind: lemma
title: "Naturality and movie invariance of the decorated knot Floer map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-decorated-link-cobordism-and-floer-target
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega for generic data and the countable family of admissible decompositions considered in the construction."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, Theorems A and B, §§10–13"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.68–97; parametrized Kirby decompositions, Cerf moves, invariance, puncturing, and the Spin-c composition law"
    - title: "Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, §§8 and 11.3"
      url: "https://arxiv.org/pdf/0910.4382v5"
      locator: "PDF pp.43–54 and 77–79; hat-version cobordism maps and their functoriality"
---

## Statement

Let \((W,\Sigma,\mathcal A)\) be a decorated knot cobordism between doubly pointed knots in \(S^3\), and let \(\mathfrak s\in\operatorname{Spin}^c(W)\). The representative maps from any two parametrized Kirby decompositions and admissible regular Heegaard choices are filtered \(\mathbb F_2[U,V]\)-equivariantly chain homotopic. If the decorated cobordism is a composite of \((W_1,\Sigma_1,\mathcal A_1)\) followed by \((W_2,\Sigma_2,\mathcal A_2)\), then for fixed Spin-c structures \(\mathfrak s_i\) on \(W_i\),
\[
\widetilde F_{W_2,\Sigma_2,\mathcal A_2,\mathfrak s_2}\circ
\widetilde F_{W_1,\Sigma_1,\mathcal A_1,\mathfrak s_1}
\simeq
\sum_{\substack{\mathfrak s\in\operatorname{Spin}^c(W)\\
\mathfrak s|_{W_i}=\mathfrak s_i,\ i=1,2}}
\widetilde F_{W,\Sigma,\mathcal A,\mathfrak s}.
\]
The sum is over Spin-c structures on the glued cobordism restricting to the specified structures on the two pieces. For \(W=S^3\times[0,1]\), \(\operatorname{Spin}^c(W)\) has one element, so the sum has one term and the composition law is ordinary composition up to filtered equivariant chain homotopy.

## Statement references

[[def-decorated-link-cobordism-and-floer-target|The decorated surface and filtered two-color target]]

[[def-knot-floer-cobordism-map|Maps for fixed decomposition data and one Spin-c structure]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|Triangle analysis required by the map construction]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, Theorems A and B, §§10–13](https://arxiv.org/pdf/1610.05207v3)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§8 and 11.3](https://arxiv.org/pdf/0910.4382v5)

## Unresolved proof obligations

The source proves invariance by realizing changes of parametrized Kirby decomposition through fourteen Cerf moves, checking each move using the elementary handle, band, basepoint, and quasi-stabilization relations, and then proving independence under puncturing at empty ends. The composition theorem sums over Spin-c extensions. This carrier has not supplied the full fourteen-move verification or its auxiliary algebraic and analytic lemmas. The exact unresolved triangle supplier is [L1]; the missing move-by-move identities and puncturing checks affect the invariance and composition claims above.
