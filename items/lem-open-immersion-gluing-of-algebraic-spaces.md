---
id: lem-open-immersion-gluing-of-algebraic-spaces
kind: lemma
title: "Gluing algebraic spaces along open subfunctors"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-fppf-sheaf-and-sheafification
  - def-algebraic-space-as-fppf-sheaf
  - def-representable-morphism-of-presheaves
  - def-morphism-and-fibre-products-of-algebraic-spaces
  - def-open-immersion-schemes
  - def-axiom-of-choice
  - thm-gluing-affine-schemes
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemmas 65.8.4 and 65.8.5"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemmas 65.8.4-65.8.5 (tags 02WQ, 02WR), disjoint unions and open gluing of algebraic spaces"
---

## Statement

Assume the Axiom of Choice inherited from the quotient/sheaf and descent
suppliers ([[def-axiom-of-choice]]). Let $F$ be a presheaf of sets on
$(\mathit{Sch}/S)_{fppf}$ ([[def-fppf-sheaf-and-sheafification]]). (1) If
$\{F_i\}_{i\in I}$ are algebraic spaces over $S$
([[def-algebraic-space-as-fppf-sheaf]]) and the disjoint union of suitable
etale scheme covers is representable by an $S$-scheme, then
$\coprod_iF_i$ is an algebraic space. (2) Assume $F$ is an fppf sheaf and
there are subfunctors $F_i\subseteq F$ such that each $F_i$ is an algebraic
space, each inclusion $F_i\to F$ is representable and an open immersion
([[def-representable-morphism-of-presheaves]],
[[def-open-immersion-schemes]]), the induced map $\coprod_iF_i\to F$ is
surjective as a morphism of sheaves, and $\coprod_iF_i$ is an algebraic
space. Then $F$ is an algebraic space over $S$.

## Facts & Assumptions

**Given:** AC; a family of algebraic spaces $F_i$ over $S$; for (2) an fppf sheaf $F$ with open subfunctors $F_i$ whose disjoint union surjects onto $F$ and is an algebraic space.

[F1] An algebraic space is an fppf sheaf with representable diagonal admitting a representable etale surjective cover from a scheme; products and fibre products of algebraic spaces exist and are algebraic spaces, and diagonals are morphisms representable by schemes; fibrewise properties of representable morphisms are read on base changes to schemes and are stable under base change ([[def-algebraic-space-as-fppf-sheaf]], [[def-morphism-and-fibre-products-of-algebraic-spaces]]).

[F2] Open immersions of schemes are etale, representable by open immersions and their composite with a representable etale morphism is representable and etale; a family of these composites is surjective when its open images cover ([[def-open-immersion-schemes]], [[def-representable-morphism-of-presheaves]]).

[F3] Limits of fppf sheaves are computed objectwise and are again fppf sheaves; surjectivity of a morphism of sheaves is the property that sections lift fppf-locally ([[def-fppf-sheaf-and-sheafification]]).



[F4] Schemes glue along compatible open isomorphisms: apply affine-chart gluing to affine covers of the given schemes ([[thm-gluing-affine-schemes]]).

## Proof

1.1 Disjoint unions. Interpret $G=\coprod_iF_i$ as the coproduct in fppf sheaves. Explicitly $G(T)$ consists of a decomposition $T=\coprod_iT_i$ into disjoint open-and-closed subschemes, together with $x_i\in F_i(T_i)$. This formula is a sheaf: a matching local decomposition descends by taking images of its pieces along the covering maps, which are open; the cocycle makes these images disjoint and makes each piece upstairs the inverse image of the descended piece. The complement is the union of the other open images, hence each descended piece is also closed. The matching sections then glue uniquely in each $F_i$. A morphism from this sheaf to any sheaf is uniquely specified by its restrictions to the $F_i$, because the decomposition is a Zariski cover; thus the formula has the coproduct universal property. Choose $U_i\to F_i$ using AC and put $U=\coprod_iU_i$, a scheme by disjoint affine-chart gluing [F4]. Over $(T_i,x_i)\in G(T)$ the pullback of $U\to G$ is the scheme $\coprod_i(T_i\times_{F_i}U_i)$, etale and surjective over $T$. For two sections of $G(T)$, their equality locus over $T_i\cap T'_j$ is empty when $i\ne j$ and is the scheme equality locus in $F_i$ when $i=j$, represented by its diagonal. These schemes form a disjoint union over the disjoint open-and-closed pieces of $T$; it represents the diagonal pullback. Hence $G$ has a representable diagonal and the required etale scheme cover, so it is an algebraic space. [F1, F2, F3, F4, given]

2.1 The cover for open gluing. Assume (2). Choose etale scheme covers $U_i\to F_i$ and their disjoint union $U$. The composites $U_i\to F$ are representable and etale by [F2], since $F_i\to F$ are representable open immersions. Their union is representable: over $T\to F$, its fibre product is the disjoint union of the schemes $T\times_FU_i$, formed by [F4]. It is etale componentwise and surjective, because sections of $F$ locally land in some $F_i$ by the given sheaf surjectivity and then locally lift to $U_i$. Thus $U\to F$ is a representable etale surjective cover. [F2, F3, F4, step 1.1]

3.1 The diagonal for open gluing. Given two sections $x,y\in F(T)$, let $T_i=x^{-1}(F_i)$ and $T'_j=y^{-1}(F_j)$, which are open subschemes by representability of the inclusions. The two families cover $T$: the hypothesis supplies local lifts, and the images of covering morphisms cover the underlying scheme. On $T_i\cap T'_j$, any equality $x=y$ forces $y$ to land in $F_i$. The locus where $y$ lands in $F_i$ is an open subscheme; on it both sections lie in $F_i$, and their equality is represented by the diagonal of $F_i$. This scheme is precisely the equality functor on $T_i\cap T'_j$. These representing schemes agree canonically on base overlaps, their overlap maps are open immersions, and their canonical identifications satisfy the cocycle identity. They glue by [F4] to a scheme representing the equality functor on $T$, since a compatible family of maps glues uniquely. Therefore every scheme base change of $\Delta_F$ is a scheme. Together with step 2.1 and the assumed sheaf condition, this proves that $F$ is algebraic. AC selects covers and is inherited from the suppliers. [F1, F2, F3, F4, step 2.1] ∎
