---
title: Independent Salvetti homotopy-model input
status: published
research_item: thm-salvetti-topology-input-artin-tits-prerequisites
dependency_level: 7
sources:
  references:
    - title: Luis Paris, K(pi,1) conjecture for Artin groups, Annales de la Faculté
        des sciences de Toulouse 23 (2014), 361–415
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: §1, arrangement convention p.364, Vinberg system and its
        cone/arrangement pp.365–366, complement p.368; §3.1, construction
        pp.385–386 and Theorem 3.1 p.386 (printed pagination).
      statement: For every arrangement under the stated hypotheses, there exists a
        homotopy equivalence f:Sal(A)→M(A). If I is the open Tits cone of a
        Vinberg realization (W,S) and A is its Coxeter arrangement, f can be
        chosen W-equivariant, and its induced map Sal(A)/W→M(A)/W is a homotopy
        equivalence.
      hypotheses: Distinct linear hyperplanes meeting a nonempty open convex cone I in
        a finite-dimensional real vector space, locally finite in I; complement
        (I×I) minus the union of H×H. The equivariant and quotient clauses
        require a Vinberg realization with closed fundamental chamber Cbar,
        I=int(union over w in W of w Cbar), and A the fixed hyperplanes of its
        linear reflections; use the induced Salvetti action and diagonal
        complement action.
      reading_limits: Read the independent PDF’s extracted text for the arrangement
        convention (p.364), Vinberg data and cone (pp.365–366), complement
        (p.368), facets (p.382), and Salvetti construction, action and complete
        Theorem 3.1 statement (pp.385–386). Inspected the proof opening on
        p.387; the full proof was not checked or reconstructed. The import gives
        no equivariance for another cone or arbitrary normalizer action,
        finiteness for infinite arrangements, or asphericity.
external_input: true
---

## Prerequisites

- [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)
- [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model)
- [lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action)
- [math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence)
- [thm-reflection-artin-topology-input-artin-tits-prerequisites](item-thm-reflection-artin-topology-input-artin-tits-prerequisites)
- [math:def-equivariant-map-of-group-actions](https://alphabetamath.cc/item/def-equivariant-map-of-group-actions)
- [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)
- [` Luis Paris, K(pi,1) conjecture for Artin groups, Annales de la Faculté des sciences de Toulouse 23 (2014), 361–415 · §1, arrangement convention p.364, Vinberg system and its cone/arrangement pp.365–366, complement p.368; §3.1, construction pp.385–386 and Theorem 3.1 p.386 (printed pagination). `](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf)


## Statement

Let $I$ be a nonempty open convex cone in a finite-dimensional real vector space $E$ and $\mathcal A$ a locally finite arrangement of linear hyperplanes meeting $I$. Let $M(I,\mathcal A)$ be the product complement of *Complexified complements in an open convex cone*, and let $\operatorname{Sal}(I,\mathcal A)$ be the simplicial CW model of *The Salvetti order complex and its finite CW case*.

There exists a homotopy equivalence $f:\operatorname{Sal}(I,\mathcal A)\to M(I,\mathcal A)$, with homotopy equivalence understood as in *Homotopy equivalences, homotopy inverses and spaces of the same homotopy type*. If $\mathcal A$ is finite, the model is finite; in particular this holds for a finite arrangement in the whole vector space.

For the additional equivariant assertion, let $(W,S)$ be a Vinberg system in $E$ with closed fundamental chamber $\overline C$, in the sense specified in *Independent Artin fundamental-group identification*. Require $I=\operatorname{int}(\bigcup_{w\in W}w\overline C)$ and $\mathcal A=\{\operatorname{Fix}(r):r\in W\text{ is a linear reflection}\}$, the Coxeter arrangement of this realization. For the actions of *Linear symmetries act on the Salvetti model*, $f$ can be chosen $W$-equivariant: $f(wx)=wf(x)$ for every $w\in W$ and $x\in\operatorname{Sal}(I,\mathcal A)$, as in *Equivariant maps and isomorphisms of group actions*.

Under these additional Vinberg hypotheses, for each of $X=\operatorname{Sal}(I,\mathcal A)$ and $X=M(I,\mathcal A)$, let $X/W$ be the set of orbits for the relation $x\sim y$ if $y=wx$ for some $w\in W$. Give it the quotient topology: $U\subseteq X/W$ is open exactly when $q_X^{-1}(U)$ is open in $X$, where $q_X(x)=[x]$. With these topologies, the induced map $\overline f:\operatorname{Sal}(I,\mathcal A)/W\to M(I,\mathcal A)/W$, $\overline f([x])=[f(x)]$, is a homotopy equivalence.

## Statement references

[def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model)

[lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action)

[math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence)

[thm-reflection-artin-topology-input-artin-tits-prerequisites](item-thm-reflection-artin-topology-input-artin-tits-prerequisites)

[math:def-equivariant-map-of-group-actions](https://alphabetamath.cc/item/def-equivariant-map-of-group-actions)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

## External input

Paris, §3.1, Theorem 3.1, printed p.386, supplies the homotopy equivalence to the product complement of [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) for the simplicial model of [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model), with homotopy equivalence as in [math:def-homotopy-equivalence](https://alphabetamath.cc/item/def-homotopy-equivalence).

Its equivariant and orbit-space clauses apply to the Vinberg data of [thm-reflection-artin-topology-input-artin-tits-prerequisites](item-thm-reflection-artin-topology-input-artin-tits-prerequisites), with $I$ equal to the interior of the union of translates of the closed fundamental chamber and $\mathcal A$ its reflection hyperplanes. The actions are those of [lem-author-5a1e77100001-linear-action](item-lem-author-5a1e77100001-linear-action), equivariance means [math:def-equivariant-map-of-group-actions](https://alphabetamath.cc/item/def-equivariant-map-of-group-actions), and the orbit spaces carry [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology). These clauses are imported in this precise setting; they are not deduced merely from equivariance of an arbitrary homotopy equivalence.

Finiteness for finite $\mathcal A$ is the separately proved elementary assertion of [lem-author-5a1e77100001-order-complex-model](item-lem-author-5a1e77100001-order-complex-model).

## Source notes

The five local helpers spell out the construction and elementary properties; they do not reconstruct Paris's homotopy-equivalence proof. The independent source was read to the limits recorded in its reference metadata. This input supplies neither asphericity nor equivariance under a general normalizer action. The latter requires its own construction in the article consumers. The helpers and this target remain drafts pending ordinary native author adoption and later scientific review.
