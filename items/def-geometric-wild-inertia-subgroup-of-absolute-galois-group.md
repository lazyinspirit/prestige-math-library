---
id: def-geometric-wild-inertia-subgroup-of-absolute-galois-group
kind: definition
title: "Geometric wild inertia"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-geometric-local-field-at-a-curve-point
  - def-absolute-galois-group-of-a-field
  - def-profinite-group-by-inverse-limit
  - def-pro-p-group
  - def-normal-subgroup
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapter 2 §§2.2.4–2.3.2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Definition

Let $K_x$ be a geometric local field of residue characteristic $p$, with absolute Galois group $G_{K_x}$. For a finite group $H$, define $O_p(H)$ as the product of all normal subgroups of $H$ whose orders are powers of $p$; the empty product is the identity subgroup. For a profinite group $G$, define
$$O_p(G):=\varprojlim_{N\triangleleft_o G} O_p(G/N),$$
where $N$ ranges over open normal subgroups and the transition maps are induced by quotient homomorphisms. This is the largest closed normal pro-$p$ subgroup of $G$. The **geometric wild inertia subgroup** is $P_{K_x}:=O_p(G_{K_x})$.

## Definition references

[[def-geometric-local-field-at-a-curve-point|Geometric local field at a curve point]]

[[def-absolute-galois-group-of-a-field|Absolute Galois group of a field]]

[[def-profinite-group-by-inverse-limit|A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups]]

[[def-pro-p-group|A pro-p group is a profinite group that is an inverse limit of finite p-groups]]

[[def-normal-subgroup|Normal subgroup: invariance under conjugation]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §§2.2.4–2.3.2](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** A geometric local field $K_x$ of residue characteristic $p$ and its profinite absolute Galois group.

[F1] [[def-profinite-group-by-inverse-limit]]: a profinite group is an inverse limit of finite discrete groups; the open normal subgroups give its finite quotients.

[F2] [[def-pro-p-group]]: a pro-$p$ group is an inverse limit of finite $p$-groups.

[F3] [[def-normal-subgroup]]: a normal subgroup is invariant under conjugation by every element of the ambient group.

## Proof

1.1 In a finite group $H$, the product of two normal $p$-subgroups $P,Q$ is a normal subgroup and has order $|P||Q|/|P\cap Q|$, a power of $p$. Since a finite group has only finitely many subgroups, the product of all its normal $p$-subgroups is a normal $p$-subgroup containing every one; thus $O_p(H)$ is defined and is largest. If $H'\twoheadrightarrow H$ is a surjection of finite groups, the image of $O_p(H')$ is a normal $p$-subgroup of $H$, so it lies in $O_p(H)$. [F3, given, algebra]

2.1 By [F1], the quotient maps among $G/N$ form an inverse system and the finite p-cores are compatible by step 1.1. Their inverse limit is an inverse limit of finite $p$-groups, hence a closed normal pro-$p$ subgroup of $G$ by [F2]. Any closed normal pro-$p$ subgroup $P\subseteq G$ maps to a normal $p$-subgroup in every finite quotient $G/N$, so its image lies in $O_p(G/N)$ for each $N$; therefore $P\subseteq O_p(G)$. This proves the claimed maximality and defines $P_{K_x}$. [F1, F2, F3, step 1.1, algebra] ∎
