---
id: lem-s-idelic-ext-in-positive-degrees-is-restricted-local-cohomology
kind: lemma
title: Positive-degree S-idèle Ext is restricted local cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-idele-class-module-of-a-global-field
  - def-restricted-product-of-local-galois-cohomology-groups
  - lem-finite-module-profinite-ext-colimits-and-products
  - lem-s-tower-local-primary-ext-comparison
  - lem-unramified-unit-ext-is-local-unramified-cohomology
  - lem-finite-module-ext-cohomology-for-divisible-coefficients
  - lem-number-field-extension-ramified-at-finitely-many-places
  - lem-finite-ramification-of-function-field-extension
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for the S-idèle module, finite Ext resolutions and local comparisons.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.13, printed pp.59–61. The finite-stage unit stabilization and restricted-product passage are supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field, $S$ a nonempty set of places containing all archimedean places, and $M$ a finite discrete continuous $G_{K,S}$-module whose order is a unit outside $S$ and, in positive characteristic, is prime to $\operatorname{char}K$. Let $J_{K,S}$ be the discrete direct-limit S-idèle module and $M^D=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times)$. For $r=1,2$, actual natural Ext/cochain comparisons induce group isomorphisms
$$\operatorname{Ext}^r_{G_{K,S}}(M,J_{K,S})\xrightarrow{\sim}P^r_S(K,M^D).$$
At real places the right side uses Tate cohomology and at complex places it is zero. The isomorphisms use the actual local evaluation maps, including unramified reference subgroups. This asserts no degree-zero comparison, global exactness, or topological identification of the Ext group.

## Facts & Assumptions

**Given:** The global field, nonempty place set, finite module, unit and characteristic conditions, S-idèle module and explicit AC/CC/DC in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The actual S-idèle carrier is the restricted S-component product at each finite stage, and local cohomology uses the specified unramified subgroups outside a finite exceptional set. [[def-s-idele-class-module-of-a-global-field]] [[def-restricted-product-of-local-galois-cohomology-groups]]

[F2] Finite-module profinite Ext is the filtered limit over finite quotients; finite-group Ext commutes with products and satisfies actual finite-index coinduction/Shapiro. [[lem-finite-module-profinite-ext-colimits-and-products]]

[F3] At each finite local place, the S-tower Ext comparison identifies degrees zero through two with full local cohomology for each permitted primary component. [[lem-s-tower-local-primary-ext-comparison]]

[F4] At every finite unramified stage with residue characteristic prime to $|M|$, unit Ext in degrees zero through two identifies naturally with unramified cohomology, with degree two zero. [[lem-unramified-unit-ext-is-local-unramified-cohomology]]

[F5] For an $n$-divisible discrete coefficient, actual finite-module Ext identifies with cohomology of its Hom module. [[lem-finite-module-ext-cohomology-for-divisible-coefficients]]

[F6] Finite extensions of number fields and finite-constant function fields ramify at only finitely many places. [[lem-number-field-extension-ramified-at-finitely-many-places]] [[lem-finite-ramification-of-function-field-extension]]

## Proof

**Proof technique:** finite quotient and coset decomposition, with a stable unramified reference product and only finite exceptional local limits.

1.1 Choose a finite Galois $F_0/K$ in $K_S$ acting trivially on $M$. By [F6] and the unit hypothesis, choose a finite $T_0\subset S$ containing all archimedean places, all places ramifying in $F_0$, and all finite places whose residue characteristic divides $|M|$. Then $F_0\subset K_{T_0}$. If $|M|$ is even, replace $F_0$ by its compositum with $K(i)$, which remains inside $K_{T_0}$ because all places above $2$ lie in $T_0$. Every finite global stage of $K_S$ is contained in some $K_T$ with finite $T\supseteq T_0$, by [F6]. [A1, F6, given, choose, construct, algebra]

2.1 The transition maps on the finite-stage S-idèle groups are injective. For a finite Galois $F/K$ in $K_S$, their invariants under $\operatorname{Gal}(K_S/F)$ are exactly $J_{F,S}$: represent an invariant at a larger finite Galois stage, use injectivity to descend it under the finite subgroup, and descend its local coordinates and finite nonunit support. Applying [F2] gives $\operatorname{Ext}^r_{G_{K,S}}(M,J_{K,S})=\varinjlim_F\operatorname{Ext}^r_{\operatorname{Gal}(F/K)}(M,J_{F,S})$, over finite Galois stages containing $F_0$. Each $J_{F,S}$ is the filtered union over finite $T\subset S$ of $\prod_{w\in T_F}F_w^\times\times\prod_{w\in S_F\setminus T_F}\mathcal O_w^\times$. At a finite group, the finite-rank free integral group-ring resolution used in [F2] makes Ext commute with this filtered union: each Hom term has finitely many free generators, and filtered colimits are exact. We may take $T\supseteq T_0$ and $F\subset K_T$ cofinally by step 1.1. [F1, F2, step 1.1, given, choose, construct, algebra]

3.1 At such a finite stage, decompose the coefficient by places $v\in S$. The factors over the finitely many places of $F$ above a fixed $v$ form a finite coinduced module from the decomposition group $D_w$. The finite-group product and Shapiro isomorphisms in [F2] identify Ext with the product over $v$ of the corresponding $D_w$-Ext groups. For $v\notin T$, the local extension is unramified and $p_v\nmid|M|$, so [F4] identifies each such group, naturally and already at this finite stage, with $H^r(G_{K_v}/I_v,M^D)$. Its inflation is exactly the unramified reference subgroup of $H^r(K_v,M^D)$, and it is zero in degree two. These identifications are compatible with every subsequent finite stage, so the infinite outside-$T$ product is constant; no filtered limit is interchanged with an infinite product. [F2, F4, step 2.1, construct, algebra]

4.1 For each finite $v\in T$, only finitely many coordinates are involved, so finite products commute with the filtered limit. The local stages $F_w$ for $F\subset K_T$ form the defining local tower, and [F2] plus the primary decomposition of $M$ identify their Ext limit with the full local cohomology by [F3]. At a real place, if $|M|$ is even, step 1.1 lets us take $F_0$ containing $i$, so the finite-stage local group and coefficient are $C_2$ and $\mathbb C^\times$; [F5] identifies positive Ext with ordinary, hence Tate, cohomology. If $|M|$ is odd, positive cohomology of the group of order at most two is killed both by two and by $|M|$, hence is zero; [F5] applies because the real and complex multiplicative groups are $|M|$-divisible. Complex places similarly contribute zero. These finite exceptional factors therefore stabilize to the actual local groups in degrees one and two. [F2, F3, F5, step 1.1, step 3.1, algebra]

5.1 Combining steps 2.1–4.1 and taking the filtered union over finite $T$ gives precisely the restricted product for $r=1$ and the finite-support degree-two product for $r=2$. All identifications are induced by actual inflation, coinduction and the Ext/cochain evaluation maps, so they are natural and use the stated local maps. The zero module and finite $S$ are included. No degree-zero real norm quotient or global exactness has been inferred. [F1, F2, F3, F4, F5, step 2.1, step 3.1, step 4.1, algebra] ∎
