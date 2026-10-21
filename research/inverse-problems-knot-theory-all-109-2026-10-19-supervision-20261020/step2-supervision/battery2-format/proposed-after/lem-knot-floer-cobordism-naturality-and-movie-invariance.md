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
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega for generic data and the countable family of admissible decompositions considered in the construction."
provenance:
  statement: literature-derived
  proof: ai-altered
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

Let $(W,\Sigma,\mathcal A)$ be a decorated knot cobordism between doubly pointed knots in $S^3$, and let $\mathfrak s\in\operatorname{Spin}^c(W)$. The representative maps from any two parametrized Kirby decompositions and admissible regular Heegaard choices are filtered $\mathbb F_2[U,V]$-equivariantly chain homotopic. If the decorated cobordism is a composite of $(W_1,\Sigma_1,\mathcal A_1)$ followed by $(W_2,\Sigma_2,\mathcal A_2)$, then for fixed Spin-c structures $\mathfrak s_i$ on $W_i$,
$$
\widetilde F_{W_2,\Sigma_2,\mathcal A_2,\mathfrak s_2}\circ \widetilde F_{W_1,\Sigma_1,\mathcal A_1,\mathfrak s_1} \simeq \sum_{\substack{\mathfrak s\in\operatorname{Spin}^c(W)\\ \mathfrak s|_{W_i}=\mathfrak s_i,\ i=1,2}} \widetilde F_{W,\Sigma,\mathcal A,\mathfrak s}.
$$
The sum is over Spin-c structures on the glued cobordism restricting to the specified structures on the two pieces. For $W=S^3\times[0,1]$, $\operatorname{Spin}^c(W)$ has one element, so the sum has one term and the composition law is ordinary composition up to filtered equivariant chain homotopy.

## Statement references

[[def-decorated-link-cobordism-and-floer-target|The decorated surface and filtered two-color target]]

[[def-knot-floer-cobordism-map|Maps for fixed decomposition data and one Spin-c structure]]

[[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing|Triangle analysis required by the map construction]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, Theorems A and B, §§10–13](https://arxiv.org/pdf/1610.05207v3)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§8 and 11.3](https://arxiv.org/pdf/0910.4382v5)

## Facts & Assumptions

**Given:** The decorated cobordism, fixed Spin-c structures, representative maps and, for composition, actual gluing specified in the Statement, with the construction assumptions in [F3].

[F1] **External full naturality theorem.** Zemke, arXiv:1610.05207v3, Theorem A (p.3), gives a fixed-Spin-c $\mathbb Z^P$-filtered $\mathbb F_2[X_p:p\in P]$-equivariant chain map, invariant under diffeomorphism up to filtered equivariant chain homotopy. Diagram changes are compared by the transitive system of Definition 2.15 and Proposition 3.5 (§§2.2 and 3.3, pp.11–14). Theorem 11.5 and its proof (pp.74 and 84–85), followed by Theorem A' and its fourteen-move proof (§12.4, pp.91–95), supply changes of parametrized Kirby decomposition. Definition 12.8, Lemma 12.9 and the final proof of Theorem A (§12.5, pp.95–97) supply empty-end puncturing and its independence. These are imported results; their move checks are not claimed as locally reconstructed. ([Source](https://arxiv.org/pdf/1610.05207v3))

[F2] **External Spin-c composition theorem.** Zemke, Theorem B (pp.3 and 97–98), gives the exact extension-sum formula in the Statement. Its proof stacks decompositions, reorders the elementary maps, applies the two-handle composition law (Proposition 5.10, p.43), and handles empty ends by puncturing. The sum and its chain-homotopy interpretation are part of this imported theorem; no unique global extension is assumed in a general gluing. ([Source](https://arxiv.org/pdf/1610.05207v3))

[F3] The map Definition binds these imports to the specified full dividing-set category and to the two-color specialization, with actual representatives of the required auxiliary homology classes and natural endpoint transition maps. Its explicit finite/countable choice specialization supplies the stated CC scope; the publication is not assumed to have made that foundations analysis itself. The existing local analytic triangle theorem is preserved at its stated scope and is not used as a substitute for [F1] or [F2]. ([[def-knot-floer-cobordism-map]])

## Proof

1.1 Send the w-regions and z-regions of the given surface to the two colors $U,V$. The source ring is now exactly $\mathbb F_2[U,V]$ and its variable-power filtration is exactly the specified two-coordinate filtration. The curvature vanishes by the two-color identity. Hence [F1] applies to the actual maps of [F3] as genuine filtered equivariant chain maps, not merely as hat homology maps or uncolored counts. [F1, F3, given]

2.1 For different endpoint diagrams first use [F1]'s canonical transition chain-homotopy equivalences to compare maps on the same chosen endpoint representatives. Theorem A then gives a filtered equivariant chain homotopy for any two admitted decompositions and regular auxiliary choices. The source's fourteen Cerf moves include the band, basepoint and quasi-stabilization relations; §12.5 additionally handles components missing one or both ends. Boundary-fixed ambient isotopy preserves the given decorations and induces precisely the required diffeomorphism of decorated cobordisms, so it is covered by the same theorem. [F1, step 1.1]

2.2 Apply [F2] to the actual gluing and the two specified structures $\mathfrak s_1,\mathfrak s_2$. Restriction of each summand to the two pieces is exactly the condition displayed in the Statement; no unmarked or total-Spin-c map has replaced these maps. The two-color specialization respects the composition and homotopies, giving the displayed formula over $\mathbb F_2[U,V]$. [F2, F3, step 1.1]

3.1 Finally $H^2(S^3\times[0,1];\mathbb Z)=0$ and the product is spin. Its nonempty Spin-c torsor therefore consists of one element. In the stated product case the extension set has precisely that element and the law reduces to ordinary composition up to filtered equivariant chain homotopy. The argument imports the established naturality/composition theorems, not an unproved assertion that the local triangle identity checks all movies. [given, step 2.1, step 2.2] ∎

