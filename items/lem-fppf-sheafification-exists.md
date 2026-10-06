---
id: lem-fppf-sheafification-exists
kind: lemma
title: "Sheafification exists for the fppf site"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-fppf-sheaf-and-sheafification
  - def-axiom-of-choice
  - def-presheaf-representable-functor-and-representation
  - def-natural-transformation
  - def-equivalence-relation
  - def-fppf-topology-on-schemes
  - thm-filtered-colimits-commute-with-finite-limits-in-set
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - def-fibre-product-schemes-universal-property
  - def-category
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Sites and Sheaves, Section 7.10"
      url: "https://stacks.math.columbia.edu/download/sites.pdf"
      locator: "Section 7.10 (tags 00WB, 00WG, 00WH), the plus construction and its two applications"
    - title: "The Stacks Project, bounded big fppf sites and set-sized categories of schemes"
      url: "https://stacks.math.columbia.edu/tag/021R"
      locator: "Definition 34.7.6 (021R), with Sets Lemmas 3.9.2 (000J) and 3.11.1 (000X); covering-support argument below"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Section 2.3.7, sheafification and the plus construction"
---

## Statement

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). For every presheaf
of sets $F$ on $(\mathit{Sch}/S)_{fppf}$
([[def-fppf-sheaf-and-sheafification]]) there is an fppf sheaf
$F^{\mathrm a}$ and a morphism $F\to F^{\mathrm a}$ satisfying the universal
property of the sheafification; it is unique up to unique isomorphism, the
unit is an isomorphism if $F$ is already a sheaf, and sheafification is
functorial and commutes with finite limits of sheaves. It is computed by the
two-step plus construction $F^{\mathrm a}=F^{++}$ over the fppf pretopology
([[def-fppf-topology-on-schemes]]).

Here the fixed big site has the standard bounded meaning: its underlying
category $\mathcal C$ of $S$-schemes has a set of objects and arrows, contains
$S$ and the empty scheme, and is closed under chosen fibre products. Coverings
are the fppf covering families whose members lie in $\mathcal C$. This is the
set-sized big-site convention of Stacks, Definition 34.7.6, rather than an
assertion that the proper class of all schemes is small. Every presheaf on
this fixed site is allowed; no bound on its section sets is imposed.

## Facts & Assumptions

**Given:** A presheaf of sets $F$ on the fppf site; AC.

[F1] Fppf coverings are stable under base change and under composition, and a common refinement of two coverings of $T$ is given by the family $\{T_i\times_TT_j\to T\}$ ([[def-fppf-topology-on-schemes]]).

[F2] A presheaf $G$ is an fppf sheaf when for every fppf covering the restriction map $G(T)\to\prod_iG(T_i)$ identifies $G(T)$ with the set of compatible families; sheafification is the universal morphism to an fppf sheaf and is unique up to unique isomorphism when it exists ([[def-fppf-sheaf-and-sheafification]], [[def-natural-transformation]]).

[F3] For every small filtered category $\mathcal J$ and finite category $\mathcal K$, filtered colimits commute with finite limits in $\mathbf{Set}$ ([[thm-filtered-colimits-commute-with-finite-limits-in-set]]).

[F4] In a small filtered colimit of sets, two elements have the same image if and only if they become equal after applying some pair of arrows to a common object ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).



## Proof

1.1 Size of the fixed site and its coverings. The category $\mathcal C$ is small in the sense of [[def-category]]: its object and arrow collections are sets. Such a set-category closed under fibre products can be obtained from any set of required $S$-schemes by including $S$ and the empty scheme and repeatedly adjoining one fibre product for each pair of arrows with common target. At each finite stage there are only set-many pairs, because morphisms between two schemes form a set; AC selects the fibre-product models for the set of pairs at each stage, and the union of these stages is a set and contains fibre products for every pair of its arrows. This construction verifies the size and closure properties used here; a saturated bounded big site as in the cited Stacks construction has these same properties. For fixed $T$, the arrows with target $T$ form a set $M_T$. Replace a covering family by its support, the subset of $M_T$ consisting of the distinct arrows occurring in it. Its support is still a cover. Repeated occurrences of an arrow carry identical sections in a matching family: pull their compatibility equality back along the diagonal of its source over $T$. Hence deleting repetitions neither changes the matching-family set nor the generated sieve. Covering supports thus form a subset of $\mathcal P(M_T)$, and the sieves they generate also form a set. All products of section sets and all colimits below are therefore small. No existence axiom for Grothendieck universes is used. [given, construct]

2.1 The plus construction. For a covering $U=\{T_i\to T\}_{i\in I}$ let $E_F(U)$ be the set of compatible families in $\prod_iF(T_i)$. Order coverings by refinement, so that arrows go from a covering to a refining covering. A refinement pulls a matching family back, independently of the chosen refinement maps: two maps from a member $V$ to members $T_i,T_j$ over $T$ give a map $V\to T_i\times_TT_j$, and compatibility makes the two restrictions equal. Thus $E_F$ is a functor on the preorder of coverings, even though the category retaining all refinement maps need not be filtered. The preorder is filtered by the common product refinement of [F1]. Use the covering supports of step 1.1. Refinement of supports is a preorder on a set; their product refinement is again a covering support after removing repetitions. Thus its filtered colimit is a colimit over a small category. Define $F^+(T)=\operatorname*{colim}_U E_F(U)$. The identity covering supplies $F(T)\to F^+(T)$; base change of coverings defines restriction maps. Independence of refinement maps and [F1] give the presheaf identities and naturality of this unit. For the empty target the empty covering has a singleton matching set; it refines every covering, so $F^+(\varnothing)$ is a singleton. [F1, step 1.1, given]

3.1 The plus construction is universal for maps into sheaves. Given $a:F\to H$ with $H$ a sheaf, apply $a$ to a compatible family representing an element of $F^+(T)$ and glue in $H(T)$. Refinement does not change the glued element, because its restrictions agree on a covering; equality in the filtered colimit is eventual by [F4]. This defines a natural extension $F^+\to H$. It is unique: every element of $F^+$ is locally the image of its representing sections of $F$, and the sheaf condition determines its image in $H$. [F2, F4, step 2.1]

3.2 $F^+$ is separated. Suppose $x,y\in F^+(T)$ agree on every member $T_i$ of a covering. Choose a common refinement of their representative coverings. On each $T_i$, [F4] gives a further covering where the two restricted matching families agree. AC chooses these witnesses for the set of indices $i$, and [F1] composes all these local refinements into one covering of $T$ on which the representatives agree. Therefore $x=y$ by [F4]. Moreover the unit $G\to G^+$ is injective for every separated presheaf $G$: equality of two unit images is equality on a covering, hence equality in $G$. [F1, F4, step 2.1, given]

4.1 Separated presheaves have sheafified plus. Let $G$ be separated and let $x_i\in G^+(T_i)$ be a matching family. Using AC, represent each $x_i$ on a covering $\{T_{ij}\to T_i\}$ by a matching family $s_{ij}\in G(T_{ij})$. On $W=T_{ij}\times_TT_{i'j'}$, the images of the two restricted sections in $G^+(W)$ agree, since both represent the restrictions of the matching $x_i,x_{i'}$. Injectivity of $G(W)\to G^+(W)$ from step 3.2 makes the sections themselves equal. Thus $(s_{ij})$ is a matching family on the composed covering of $T$; its class in $G^+(T)$ glues the $x_i$. Uniqueness follows from the separatedness of $G^+$ in step 3.2. Consequently $G^+$ is a sheaf. AC is used to select local representatives here and local equality witnesses in step 3.2; it never asserts that the category of all refinement maps is filtered. [F1, F4, step 2.1, step 3.2]

5.1 Sheafification. By step 3.2 $F^+$ is separated, and by step 4.1 $F^{++}$ is a sheaf. Applying step 3.1 twice proves that $F\to F^{++}$ is universal for maps into sheaves. It is unique up to unique isomorphism by [F2]. If $F$ is already a sheaf, gluing its matching families identifies $F^+(T)$ with $F(T)$ for every $T$, compatibly with restriction, so the unit to $F^{++}$ is an isomorphism. A natural transformation acts on matching families, hence on their colimits, proving functoriality. [F2, step 3.1, step 3.2, step 4.1]

6.1 Finite limits. For a fixed covering $U$, the functor $F\mapsto E_F(U)$ commutes with all limits: a matching family in an objectwise limit is exactly a coherent collection of matching families in its component presheaves, because the two compatibility equalities can be tested componentwise. This argument permits infinite covering families; it does not require the products defining $E_F(U)$ to be finite. For a finite diagram of presheaves, its components use the same filtered preorder of coverings of $T$, so [F3] interchanges its finite limit with the filtered colimit in step 2.1. Thus plus, and then double plus, commutes with finite limits. Finite limits of sheaves are computed objectwise, since compatible local sections in each component glue uniquely and their diagram identities follow by local uniqueness. This proves the asserted finite-limit property of sheafification. [F3, step 2.1, step 5.1, discharge-construct] ∎

