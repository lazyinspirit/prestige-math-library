---
id: lem-author-e61520261113-natural-salvetti-cover
kind: lemma
title: Natural finite Salvetti good covers
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-e61520261113-invariant-facet-points
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-iff-identity-nullhomotopic
  - math:def-abstract-simplicial-complex
  - math:def-geometric-realization-of-an-abstract-simplicial-complex
dependency_roles:
  lem-author-e61520261113-invariant-facet-points: mathematical-premise
  lem-author-5a1e77100001-facet-incidence: mathematical-premise
  def-author-5a1e77100001-salvetti-poset: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  def-complement-interface-artin-tits-prerequisites: mathematical-premise
  math:def-nullhomotopic-map-and-contractible-space: mathematical-premise
  math:cor-contractible-iff-identity-nullhomotopic: mathematical-premise
  math:def-abstract-simplicial-complex: mathematical-premise
  math:def-geometric-realization-of-an-abstract-simplicial-complex: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Luis Paris, K(pi,1) conjecture for Artin groups (2014)
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: "§3.1, proof of Theorem 3.1: chain extensions and Delta on printed
        p.387, omega on p.388, Claims 1–7 and 9–15 on pp.388–392; arrangement
        hypotheses on p.364."
      statement: For the displayed chain-extension construction, U(F,C)=omega(F)×C_F
        is an injectively indexed open cover of M(A). Distinct members intersect
        exactly for incident-pair chains; the intersection is
        omega(F_0,...,F_p)×(C_0)_{F_0}, is nonempty, and admits a contraction.
      hypotheses: A locally finite arrangement of linear hyperplanes meeting a
        nonempty open convex cone I in a finite-dimensional real vector space;
        each chosen x(F) lies in its facet F. We apply only the finite case I=E.
      reading_limits: Read the extracted arrangement hypotheses on printed p.364, the
        facet/localization/poset conventions on pp.385–386, and the construction
        and Claims 1–15 on pp.387–392. Only Claims 1–7 and 9–15 are imported.
        Claim 8 has additional Coxeter hypotheses and is not used; Claim 16 and
        the equivariant conclusion of Theorem 3.1 are not inputs. The
        invariant-cover and realization-identification arguments below are
        local. No complete reading of the survey is claimed.
formulation_deps:
  - lem-author-e61520261113-invariant-facet-points
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-nullhomotopic-map-and-contractible-space
  - math:def-abstract-simplicial-complex
  - math:def-geometric-realization-of-an-abstract-simplicial-complex
argument_deps:
  - lem-author-e61520261113-invariant-facet-points
  - lem-author-5a1e77100001-facet-incidence
  - def-author-5a1e77100001-salvetti-poset
  - lem-author-5a1e77100001-order-complex-model
  - def-complement-interface-artin-tits-prerequisites
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-iff-identity-nullhomotopic
  - math:def-abstract-simplicial-complex
  - math:def-geometric-realization-of-an-abstract-simplicial-complex
dependency_level: 8
---

## Statement

Let $\mathcal A$ be a finite arrangement of proper linear hyperplanes in a finite-dimensional real vector space $E$, let a finite group $G$ act linearly on $E$ and permute $\mathcal A$, and choose facet points $x(F)\in F$ with $x(gF)=gx(F)$ as in *Invariant choices of facet points for finite linear symmetry groups*. Set $M=(E\times E)\setminus\bigcup_{H\in\mathcal A}(H\times H)$ with its subspace topology and diagonal action. Use the incident-pair poset $P(\mathcal A)$ of *The incident facet and chamber poset*: its elements are $(F,C)$ with $F\preceq C$, and $(F,C)\leq(F',C')$ means $F\preceq F'$ and $C_F\subseteq C'_{F'}$, where $C_F$ is the chamber of $\mathcal A_F=\{H:F\subset H\}$ containing $C$.

There is a finite $G$-invariant open good cover $\mathcal U=\{U(F,C)\}$ of $M$, injectively indexed by $P(\mathcal A)$, satisfying $gU(F,C)=U(gF,gC)$. Here a good cover means that every nonempty intersection of a nonempty finite subfamily is contractible, in the sense of *Nullhomotopic maps and contractible spaces*. Distinct members have nonempty intersection exactly when their incident pairs form a chain.

Define the abstract nerve $N(\mathcal U)$ to have vertex set $\mathcal U$ and simplices the empty set and all nonempty finite subfamilies with nonempty intersection. Write $\operatorname{Ch}(P(\mathcal A))$ for the abstract complex consisting of the empty set and the nonempty finite chains of $P(\mathcal A)$, and $K=|\operatorname{Ch}(P(\mathcal A))|=\operatorname{Sal}(E,\mathcal A)$ for the Salvetti realization of *The Salvetti order complex and its finite CW case*. The vertex map $U(F,C)\mapsto(F,C)$ gives a canonical $G$-equivariant simplicial isomorphism $N(\mathcal U)\cong\operatorname{Ch}(P(\mathcal A))$ and an induced $G$-equivariant homeomorphism $|N(\mathcal U)|\to K$, using the weak realization topology. The actions on the abstract complexes permute vertices, and on their realizations they permute barycentric coordinates.

## Statement references

[[lem-author-e61520261113-invariant-facet-points]]

[[lem-author-5a1e77100001-facet-incidence]]

[[def-author-5a1e77100001-salvetti-poset]]

[[lem-author-5a1e77100001-order-complex-model]]

[[def-complement-interface-artin-tits-prerequisites]]

[[math:def-nullhomotopic-map-and-contractible-space]]

[[math:def-abstract-simplicial-complex]]

[[math:def-geometric-realization-of-an-abstract-simplicial-complex]]

## Facts & Assumptions

[F1] The invariant points and induced facet action come from [[lem-author-e61520261113-invariant-facet-points]]. Incidence and localized chamber signs are supplied by [[lem-author-5a1e77100001-facet-incidence]], and the incident-pair order by [[def-author-5a1e77100001-salvetti-poset]]. The topology of $M$ and its diagonal action use [[def-complement-interface-artin-tits-prerequisites]].

[F2] A nonempty space is contractible when every continuous map from it to every topological space is nullhomotopic, by [[math:def-nullhomotopic-map-and-contractible-space]]. Equivalently its identity map is homotopic to a constant, by [[math:cor-contractible-iff-identity-nullhomotopic]].

[F3] Abstract simplicial complexes contain the empty simplex, all vertex singletons, and all subsets of their simplices: [[math:def-abstract-simplicial-complex]]. Their realizations consist of finite-support barycentric functions with simplex support and have the weak topology on Euclidean simplices: [[math:def-geometric-realization-of-an-abstract-simplicial-complex]]. The realization of the chain complex is $K=\operatorname{Sal}(E,\mathcal A)$ by [[lem-author-5a1e77100001-order-complex-model]].

[F99] For the chain-extension construction in step 1.1, Paris §3.1, Claims 1–7 and 9–15, gives an injectively indexed open cover by $U(F,C)$, with intersections of distinct members nonempty precisely for incident-pair chains. For an increasing chain the intersection is $\omega(F_0,\ldots,F_p)\times(C_0)_{F_0}$ and admits a contraction. The hypotheses are a locally finite linear arrangement in a nonempty open convex cone and points $x(F)\in F$; the present finite arrangement with $I=E$ meets them. No group-action conclusion is imported.



For the chain-extension construction in step 1.1, Paris §3.1, Claims 1–7 and 9–15, gives an injectively indexed open cover by $U(F,C)$, with intersections of distinct members nonempty precisely for incident-pair chains. For an increasing chain the intersection is $\omega(F_0,\ldots,F_p)\times(C_0)_{F_0}$ and admits a contraction. The hypotheses are a locally finite linear arrangement in a nonempty open convex cone and points $x(F)\in F$; the present finite arrangement with $I=E$ meets them. No group-action conclusion is imported.

## External input

For the chain-extension construction in step 1.1, Paris §3.1, Claims 1–7 and 9–15, gives an injectively indexed open cover by $U(F,C)$, with intersections of distinct members nonempty precisely for incident-pair chains. For an increasing chain the intersection is $\omega(F_0,\ldots,F_p)\times(C_0)_{F_0}$ and admits a contraction. The hypotheses are a locally finite linear arrangement in a nonempty open convex cone and points $x(F)\in F$; the present finite arrangement with $I=E$ meets them. No group-action conclusion is imported.

## Proof

**Given:** The arrangement, group, points and incidence data in the Statement, with the conventions in [F1]–[F3] and the imported premise [F99]. **Goal:** Construct the invariant good cover and identify its abstract nerve and realization.

**Proof technique:** direct.

1.1 For a strict facet chain $\gamma=(F_0,\ldots,F_p)$ define $\Delta(\gamma)=\{y+\sum_{i=1}^pt_ix(F_i):y\in F_0,\ t_i>0\}$. A strict chain $\delta=(G_0,\ldots,G_q)$ extends $\gamma$ when $G_0=F_0$ and $\{F_1,\ldots,F_p\}\subseteq\{G_1,\ldots,G_q\}$, allowing equality. Define $\omega(\gamma)=\bigcup_{\delta\text{ extends }\gamma}\Delta(\delta)$, write $\omega(F)=\omega((F))$, and set $U(F,C)=\omega(F)\times C_F$. For $p=0$ the empty sum gives $\Delta((F_0))=F_0$. These are the cited definitions, with valid points in the finite case $I=E$. [given, F1, F99]

2.1 The imported cover and chain-intersection assertions apply to step 1.1. Distinct comparable incident pairs have distinct facets, since equal facets force equal localized chambers and then equal incident chambers by [F1]. Thus the facet chain in the intersection formula is strict and its $\omega$ is defined in step 1.1. Each nonempty finite intersection admits a contraction by [F99], so [F2] gives contractibility under the stated convention. This supplies the open good cover, injective indexing, and exact chain criterion. [F1, F2, F99, step 1.1]

3.1 Linearity and $x(gF)=gx(F)$ give $g\Delta(F_0,\ldots,F_p)=\Delta(gF_0,\ldots,gF_p)$. The facet action preserves incidence and carries extensions bijectively to extensions, so $g\omega(\gamma)=\omega(g\gamma)$. Permuting the hyperplanes sends the chamber of $\mathcal A_F$ containing $C$ to the chamber of $\mathcal A_{gF}$ containing $gC$, so $gC_F=(gC)_{gF}$. Hence $gU(F,C)=U(gF,gC)$. Applying $g$ to the two defining containments of the incident-pair order, and then applying $g^{-1}$, shows that the pair action preserves and reflects that order. There are finitely many facets and chambers, as each is a sign fiber for the finite arrangement; therefore the cover is finite. [F1, step 1.1, step 2.1]

4.1 The nerve defined in the Statement is an abstract simplicial complex: it contains the empty simplex, every singleton because every cover member is nonempty, and every subset of a simplex because a subfamily of an intersecting family still intersects. Injective indexing gives a vertex bijection $b:U(F,C)\mapsto(F,C)$. The chain criterion sends its nonempty simplices precisely to the nonempty chains; it also sends the empty simplex to the empty simplex. Thus $b$ is a simplicial isomorphism, meaning a vertex bijection preserving and reflecting simplices. Naturality of the cover gives $b(gU)=gb(U)$, so this isomorphism is $G$-equivariant. [F3, step 2.1, step 3.1]

5.1 For a barycentric point $\alpha$ of $|N(\mathcal U)|$, define $B(\alpha)$ by $B(\alpha)(b(U))=\alpha(U)$ for each vertex $U$. The vertex bijection and simplex correspondence give a well-defined bijection onto $K$, with inverse given by the inverse coordinate permutation. On every closed simplex both maps are Euclidean coordinate permutations and hence continuous. By the weak topology, the inverse image of an open set under $B$ meets each simplex openly, so $B$ is continuous; the same argument gives continuity of its inverse. Therefore $B$ is a homeomorphism. Equivariance of $b$ implies $B(g\alpha)=gB(\alpha)$ coordinate by coordinate, proving the claimed equivariant identification of realizations. [F3, step 3.1, step 4.1] ∎

## Source notes

The cover formulas and action-independent intersection assertions are imported from [Paris, §3.1](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf). Naturality and the identification of realizations are proved locally in steps 3.1, 4.1 and 5.1. No equivariance assertion from the article under study or from Paris’s Coxeter-specific conclusion is assumed.
