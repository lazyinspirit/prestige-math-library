---
id: lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact
kind: lemma
title: The S-idele carrier and its S-unit quotient are locally compact
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-idele-group-of-a-global-field
  - thm-global-field-adeles-and-ideles-locally-compact
  - thm-global-field-idelic-diagonal-discrete-and-closed
  - thm-local-valuation-ring-compact-open
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - thm-tychonoff
  - lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: AC and Countable Choice are explicit for the global idelic topology and compact unit products. No class-formation or Poitou-Tate duality is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: ChapterI4, printed pp.48–50; nonempty S, S-component ideles and S-unit embedding, checked in retained full text
---

## Statement

Assume AC and Countable Choice. Let $L$ be a global field, and let $S$ be a nonempty set of its places containing all archimedean places. Define
$$J_S(L)=\{x\in\mathbb A_L^\times:x_w=1\text{ for }w\notin S\},$$
with the restricted-product topology on its $S$-coordinates relative to the finite-place unit groups. Thus its elements have only finitely many nonunit finite coordinates, even when $S$ is infinite. Let
$$E_S(L)=\{a\in L^\times:\operatorname{ord}_w(a)=0\text{ for every finite }w\notin S\},$$
and embed it by $\delta_S(a)_w=a$ for $w\in S$ and1 otherwise. Then $J_S(L)$ is locally compact Hausdorff, $\delta_S$ is injective with closed discrete image, and $J_S(L)/\delta_S(E_S(L))$ is locally compact Hausdorff in its quotient topology. All assertions hold for arbitrary nonempty $S$, not just finite or cofinite $S$.

## Facts & Assumptions

**Given:** Exactly the global field, nonempty set and explicit choice hypotheses in the Statement.

[F1] The global idèle group is a locally compact Hausdorff group in its restricted-product topology. At a finite place, the valuation ring is compact open; its unit group is compact open in the multiplicative local field. [[def-idele-group-of-a-global-field]] [[thm-global-field-adeles-and-ideles-locally-compact]] [[thm-local-valuation-ring-compact-open]]

[F2] The global diagonal $L^\times$ is closed and discrete in the idèle group under AC/CC. [[thm-global-field-idelic-diagonal-discrete-and-closed]]

[F3] Under AC products of compact groups are compact. The quotient of an LCA group by a closed subgroup is LCA with its quotient topology. [[thm-tychonoff]] [[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]]

[F4] A global element and its inverse are integral outside finitely many places; thus each nonzero global element has finite nonunit support. [[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[A1] AC and Countable Choice are explicit. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Put $U=\prod_{w\notin S}\mathcal O_{L,w}^\times$, with coordinates1 on $S$. All its places are finite, and [F1]–[F3] make it compact. Let $H$ be the subgroup of actual global idèles whose coordinates outside $S$ are units. It is open in the idèle group: it is the union, over finite subsets $T\subset S$ containing the archimedean places, of the standard open restricted-product pieces allowing arbitrary coordinates in $T$ and only units elsewhere. Hence $H$ is LCA by [F1]. Splitting the coordinates gives a topological group isomorphism
$$H\cong J_S(L)\times U.$$
Both directions preserve the defining basic neighborhoods, which restrict finitely many coordinates and require units at the remaining finite places. The projection is open, $U$ is a closed subgroup, and $H/U$ with its quotient topology is precisely $J_S(L)$. Thus [F3] makes $J_S(L)$ locally compact Hausdorff. This step keeps finite nonunit support inside $S$; it does not replace a restricted product by a full infinite product of noncompact factors. [A1, F1, F3, given, construct, algebra]

2.1 By [F4], the $S$-components of an $S$-unit belong to the stated restricted product, so $\delta_S$ is well defined. Since $S$ is nonempty, equality to1 in one of its completion embeddings forces the global element to be1; thus it is injective. Let $D=L^\times$ be the full diagonal in the global idèles. Then $D\cap H$ is exactly the full diagonal of $E_S(L)$, and it is closed and discrete in $H$ by [F2]. Under the product decomposition of step 1.1, projection to $J_S(L)$ restricts to $\delta_S$, and its kernel on $D\cap H$ is trivial by the same nonempty-$S$ argument. [F2, F4, step 1.1, construct, algebra]

2.2 For any compact $K\subset J_S(L)$, its preimage $K\times U$ is compact. Its intersection with the closed discrete $D\cap H$ is compact and discrete, hence finite. Therefore $K$ meets $\delta_S(E_S(L))$ in only finitely many points. Local compactness now proves that this image is discrete and closed: a compact neighborhood of any point meets it in finitely many points, which can be removed individually by Hausdorff neighborhoods if the point is not among them. At the identity choose a smaller neighborhood avoiding the other finitely many points to obtain discreteness. Finally apply [F3] to this closed subgroup of $J_S(L)$ to obtain the asserted locally compact Hausdorff quotient. This includes singleton $S$ and infinite $S$, and for $S$ equal to all places gives the ordinary idèle and idèle-class groups. [F2, F3, step 1.1, step 2.1, construct, algebra] ∎
