---
id: def-colored-multipointed-heegaard-module-for-link-cobordisms
kind: definition
title: "Colored multipointed Heegaard modules for intermediate links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "Definitions 2.1–2.4 and 3.1–3.2, pp.7–12; arbitrary multi-based intermediate links, colorings and strongly admissible diagrams."
---

## Definition

Let $Y$ be a closed connected oriented smooth three-manifold, and let $L\subset Y$ be a nonempty finite oriented link with finite disjoint sets of marked points $\mathbf w,\mathbf z$ alternating on each component, with at least one point of each type on each component. Write $n=|\mathbf w|=|\mathbf z|$. An embedded multipointed Heegaard diagram consists of a genus-$g$ oriented surface $S$ splitting $Y$ into handlebodies, $g+n-1$ disjoint compressing curves of each type $\boldsymbol\alpha,\boldsymbol\beta$, their actual pairwise-disjoint compressing disks, and the points $\mathbf w,\mathbf z$ off the curves. Each disk system cuts its handlebody into $n$ balls, each containing one boundary-parallel link arc joining one $w$-point to one $z$-point. The two systems of arcs together are the prescribed $L$; the matching permutations may have several cycles. Curves of opposite types meet transversely in finitely many points. Orient $S$ as the boundary of the $\alpha$-handlebody. For disconnected $Y$ with every component meeting $L$, take one such diagram on each of its finitely many connected components. A doubly pointed knot diagram is the case $n=1$; the existing multipointed knot convention is the case in which the arc matchings form one cycle in $S^3$.

Put $d=g+n-1$ and use $\operatorname{Sym}^{d}(S)$ and its product tori $\mathbb T_{\boldsymbol\alpha},\mathbb T_{\boldsymbol\beta}$ on a connected component. For $d=0$ the symmetric product and the two empty products are one point. Intersection generators are finite: each is a choice of one of the finitely many intersections for each curve, with a permutation matching the two curve systems. Include the generator-to-Spin-c labelling $\mathfrak s_w$ furnished by the chosen compatible Morse vector fields as part of the specified diagram data. The underlying module in a fixed label $\mathfrak t$ is the free module on its generators; this definition does not assert that the labels are independent of choices.

A coloring is a map $\sigma:\mathbf w\sqcup\mathbf z\to P$ to a specified finite set, with coefficient ring $R_P=\mathbb F_2[X_p:p\in P]$. A disk or polygon class with nonnegative marked multiplicities is assigned the monomial $\prod_{w\in\mathbf w}X_{\sigma(w)}^{n_w}\prod_{z\in\mathbf z}X_{\sigma(z)}^{n_z}$. The two-color specialization sends every $w$-variable to $U$ and every $z$-variable to $V$, giving $R=\mathbb F_2[U,V]$. On disconnected diagrams use the tensor product of the component modules over this same specified ring and the tuple of their Spin-c labels. These are the underlying modules and weights for intermediate links in a decorated cobordism decomposition. An actual differential, its finite counts, square-zero or curvature identity, and comparison maps require their separate analytic and naturality proofs; no such property is part of this module definition.

## Definition references

[[def-admissible-pointed-heegaard-floer-data|The existing multipointed knot case and disk-class notation]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Specified Spin-c data]]

[Zemke, Definitions 2.1–2.4 and 3.1–3.2](https://arxiv.org/pdf/1610.05207v3)
