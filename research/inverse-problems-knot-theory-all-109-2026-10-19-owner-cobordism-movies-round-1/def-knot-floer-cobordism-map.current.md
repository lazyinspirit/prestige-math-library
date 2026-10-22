---
id: def-knot-floer-cobordism-map
kind: definition
title: "The decorated knot Floer cobordism map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
  - def-colored-multipointed-heegaard-module-for-link-cobordisms
  - def-decorated-link-cobordism-and-floer-target
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The analytic construction assumes AC_omega through the regularity and compactness supplier. Each map is indexed by one Spin-c structure; the composition law sums over extensions only when stated."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§1–9 and 12"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.1–68 and 85–97; Definition 2.1, Theorems A and B, elementary handle/band/quasi-stabilization maps, and the decomposition construction"
    - title: "Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, §§8 and 11.3"
      url: "https://arxiv.org/pdf/0910.4382v5"
      locator: "PDF pp.43–54 and 77–79; hat link Floer cobordism maps and their composition scope"
---

## Definition

Let $(W,\Sigma,\mathcal A)$ be a decorated knot cobordism from $(Y_0,K_0)$ to $(Y_1,K_1)$, and fix $\mathfrak s\in\operatorname{Spin}^c(W)$. Choose a parametrized Kirby decomposition of $W$, together with admissible Heegaard data and regular almost-complex structures for its elementary pieces. Intermediate pieces may contain links with several components or more than one pair of basepoints. Use the colored multipointed modules with $g+n-1$ attaching curves in $\operatorname{Sym}^{g+n-1}(S)$, and specialize all $w$-colors to $U$ and all $z$-colors to $V$; the displayed doubly pointed formula is the $n=1$ case. For a piece represented by a subordinate Heegaard triple $(S,\boldsymbol\alpha,\boldsymbol\beta,\boldsymbol\gamma,w,z)$, its triangle-count map has the form
$$
\mathbf x\longmapsto \sum_{\mathbf y}\ \sum_{\substack{\phi\in\pi_2(\mathbf x,\Theta^+_{\boldsymbol\beta\boldsymbol\gamma},\mathbf y)\\ \mu(\phi)=0,\ \mathfrak s(\phi)=\mathfrak s}} \#_2\bigl(\mathcal M(\phi)\bigr)U^{n_w(\phi)}V^{n_z(\phi)}\mathbf y,
$$
where $\Theta^+_{\boldsymbol\beta\boldsymbol\gamma}$ is the distinguished top-degree generator for the intermediate Heegaard pair, $\mathfrak s(\phi)$ is the Spin-c structure determined by the triangle class, and the other symbols and coefficient ring are as in the two-color target definition. The elementary 2-handle maps and band maps are triangle-count maps; the 0-, 1-, 3-, and 4-handle maps use the corresponding stabilization or destabilization maps; cylindrical changes of the dividing set use basepoint and quasi-stabilization maps. Compose the elementary maps in the chosen decomposition to obtain a representative
$$
\widetilde F_{W,\Sigma,\mathcal A,\mathfrak s,\mathcal K}: CFL^-_{UV}(Y_0,K_0,\mathfrak s|_{Y_0})\longrightarrow CFL^-_{UV}(Y_1,K_1,\mathfrak s|_{Y_1}).
$$
The subscript $\mathcal K$ records the chosen decomposition and auxiliary data. This is one map for one Spin-c structure; maps for different Spin-c structures are not summed unless a sum is explicitly specified. Independence from $\mathcal K$, regular data, and parametrization is a separate naturality assertion.

## Definition references

[[def-decorated-link-cobordism-and-floer-target|Decorated surface, two-color target, and filtration]]

[[def-admissible-pointed-heegaard-floer-data|Admissible pointed Heegaard data]]

[[def-colored-multipointed-heegaard-module-for-link-cobordisms|The necessary intermediate multi-based link modules and color specialization]]

[[def-countable-choice|Countable choice]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures and their restrictions]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§1–9 and 12](https://arxiv.org/pdf/1610.05207v3)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§8 and 11.3](https://arxiv.org/pdf/0910.4382v5)

## Unresolved proof obligations

The formal composition is only a representative after admissible triples, regular perturbations, and finite triangle counts have been constructed. The current batch-92 disk-analysis supplier does not supply those triangle-specific facts. The elementary basepoint/quasi-stabilization formulas are identified by their exact roles but have not been locally expanded into all of Zemke's cases. This carrier therefore does not claim that the representative is a filtered equivariant chain map or that it is independent of the selected data; those claims remain with the assigned analytic and naturality lemmas.
