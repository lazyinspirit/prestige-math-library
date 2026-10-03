---
id: lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct
kind: lemma
title: Continuous finite-dimensional representations of a product of finite groups factor through a finite subproduct
deps:
- def-axiom-of-choice
- lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients
- def-profinite-group-by-inverse-limit
- def-compatible-tuple-inverse-limit-of-groups
- def-inverse-limit-topology-for-finite-discrete-groups
- thm-concrete-inverse-limit-universal-property-in-groups
- lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis
- def-product-topology
- thm-first-isomorphism-theorem-groups
- def-strongly-continuous-unitary-representation
- def-matrix-coefficient-of-a-unitary-representation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2 opening discussion of products and inverse limits of finite groups, printed pp. 1–2
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §22.6, printed p. 53 (representations of a product of compact groups)
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(G_i)_{i\in I}$ be finite discrete groups, let $K:=\prod_{i\in I}G_i$ carry the product topology, and for a finite $F\subseteq I$ let $p_F:K\to K_F:=\prod_{i\in F}G_i$ be the coordinate projection. Then $K$ is a profinite group (it is the inverse limit of the finite groups $K_F$ over the directed set of finite subsets $F\subseteq I$), and for every continuous finite-dimensional unitary representation $\rho$ of $K$ there is a finite $F\subseteq I$ and a representation $\rho_F$ of the finite group $K_F$ with $\rho=\rho_F\circ p_F$. Moreover the open normal subgroup $\ker p_F$ (the subgroup of tuples trivial in the $F$-coordinates, canonically isomorphic to $\prod_{i\notin F}G_i$) can be chosen inside any prescribed identity neighbourhood, and every matrix coefficient of $\rho$ depends on the coordinates in $F$ only.

## Facts & Assumptions

[F1] The concrete inverse limit of the finite discrete groups $K_F$ over the directed set of finite subsets $F\subseteq I$ is the group of compatible tuples, equipped with the inverse limit topology, and it satisfies the universal property of the inverse limit; the coordinate projections are the maps $p_F$. ([[def-compatible-tuple-inverse-limit-of-groups]], [[def-inverse-limit-topology-for-finite-discrete-groups]], [[thm-concrete-inverse-limit-universal-property-in-groups]])

[F2] A topological group topologically isomorphic to an inverse limit of finite discrete groups is profinite, and for such a presentation the kernels of the coordinate projections form an open normal neighbourhood basis at the identity. ([[def-profinite-group-by-inverse-limit]], [[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]])

[F3] A continuous finite-dimensional unitary representation $\rho$ of a profinite group factors through a finite quotient: for the presentation $K=\varprojlim K_F$ there is a finite $F$ with $\ker p_F\subseteq\ker\rho$, so $\rho=\rho_F\circ p_F$ for a representation $\rho_F$ of $K_F$, and every matrix coefficient of $\rho$ factors through that finite quotient. ([[lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients]])

[F4] In the product topology on $\prod_{i\in I}G_i$ the basic identity neighbourhoods fix finitely many coordinates, each $p_F$ is continuous and surjective, and $\ker p_F$ is the closed subgroup of tuples trivial in the coordinates of $F$, canonically isomorphic to $\prod_{i\notin F}G_i$. ([[def-product-topology]])

[F5] Matrix coefficients are $c^{\rho}_{v,w}(k)=\langle\rho(k)v,w\rangle$ for vectors $v,w$, and strong continuity of a finite-dimensional representation makes $k\mapsto\rho(k)$ norm-continuous. ([[def-matrix-coefficient-of-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]])

[F6] The first isomorphism theorem gives $K/\ker p_F\cong p_F(K)=K_F$. ([[thm-first-isomorphism-theorem-groups]])

## Proof

**Given:** AC, Finite discrete groups $(G_i)_{i\in I}$, the product $K=\prod_iG_i$ with product topology, coordinate projections $p_F$ for finite $F\subseteq I$, and a continuous finite-dimensional unitary representation $\rho$ of $K$.

1.1 The map $x\mapsto(p_F(x))_F$ from $K$ to the set of compatible tuples is a topological group isomorphism onto $\varprojlim_FK_F$, with inverse given by the compatible tuple's coordinates: it is a group homomorphism because each $p_F$ is, it is injective because the coordinates determine $x$, it is surjective because the coordinates of a compatible tuple define an element of $K$ whose projections are the given ones, and both directions are continuous for the product and inverse-limit topologies by [F1]; hence $K$ is profinite by [F2], and the kernels $\ker p_F$ form an open normal neighbourhood basis at the identity. By [F4] each $\ker p_F$ is the closed subgroup of tuples trivial in the coordinates of $F$ and is canonically isomorphic to $\prod_{i\notin F}G_i$; moreover $p_F$ is surjective with $K/\ker p_F\cong K_F$ by [F6]. [F1, F2, F4, F6]

2.1 Apply the profinite factorisation lemma [F3] to the profinite presentation of $K$ as $\varprojlim_FK_F$: there is a finite $F\subseteq I$ with $\ker p_F\subseteq\ker\rho$, and $\rho$ factors as $\rho=\rho_F\circ p_F$ for a representation $\rho_F$ of the finite group $K_F$; since the $\ker p_F$ form an identity neighbourhood basis by step 1.1, the finite set $F$ may be chosen so that $\ker p_F$ lies inside any prescribed identity neighbourhood of $K$. Every matrix coefficient $c^{\rho}_{v,w}(k)=\langle\rho_F(p_F(k))v,w\rangle$ by [F5] depends only on $p_F(k)$, hence only on the coordinates in $F$, and is constant on the cosets of $\ker p_F$; this proves the lemma. [F3, F5, step 1.1] ∎
