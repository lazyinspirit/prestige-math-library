---
id: lem-s-idelic-hom-and-real-tate-quotient
kind: lemma
title: S-idèle Hom and the real Tate quotient
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-idele-class-module-of-a-global-field
  - def-restricted-product-of-local-galois-cohomology-groups
  - lem-s-unit-ext-is-global-cohomology-for-finite-modules
  - def-tate-cohomology-for-finite-groups
  - thm-tychonoff
  - cor-cyclotomic-ramification-criterion
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for choosing local orbit representatives, the S-idèle module and compact products.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.13, printed pp.59–60; the finite-module uniform-stage and real Tate quotient are supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K,S,M,n,J_{K,S}$ and $M^D$ satisfy the hypotheses of the finite S-unit Ext comparison, and use the restricted-local-cohomology conventions. There is a natural group isomorphism
$$\operatorname{Hom}_{G_{K,S}}(M^D,J_{K,S})\xrightarrow{\sim}\prod_{v\in S}H^0(G_{K_v},M),$$
where the right side uses ordinary invariants at every place. Composing with the canonical real Tate quotient and the zero complex Tate term gives a surjection onto $P^0_S(K,M)$, whose kernel is the product over real $v\in S$ of the norm subgroups $(1+c_v)M\le M^{c_v}$, together with the full $M$ factor at each complex place. The product of local finite groups is compact Hausdorff in its product topology. No isomorphism with an intrinsic topology on the Ext Hom group, and no global exactness, is asserted.

## Facts & Assumptions

**Given:** The global field, nonempty $S$, finite module, exponent, local conventions and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The S-idèle group is the direct limit of finite-stage restricted S-products, and the local product $P^0$ uses ordinary invariants at finite places and Tate degree zero at archimedean places. [[def-s-idele-class-module-of-a-global-field]] [[def-restricted-product-of-local-galois-cohomology-groups]]

[F2] Actual evaluation identifies $M$ with $\operatorname{Hom}(M^D,E_{K,S})$ equivariantly. [[lem-s-unit-ext-is-global-cohomology-for-finite-modules]]

[F3] For a finite group, Tate degree zero is invariants modulo the norm; for the trivial group it is zero. [[def-tate-cohomology-for-finite-groups]]

[F4] Arbitrary products of compact spaces are compact under AC. [[thm-tychonoff]]

[F5] Rational cyclotomic extensions are unramified outside their conductors. [[cor-cyclotomic-ramification-criterion]]

## Proof

**Proof technique:** use a single finite stage containing all roots and the splitting field, then take the explicit real norm quotient.

1.1 The roots $\mu_n$ lie in $K_S$: in characteristic zero [F5] and unramified base change show the cyclotomic extension ramifies only at places above $n$, which lie in $S$ (when $n\equiv2\pmod4$, replace $n$ by the odd conductor $n/2$; the roots generate the same field); in positive characteristic it is a finite constant extension. Choose a finite Galois $F/K$ in $K_S$ that splits the action on $M$ and contains $\mu_n$. For each $v\in S$, choose one place $w$ of $F$ above $v$ by [A1]. The factors of $J_{F,S}$ over a fixed $v$ form a finite orbit under $\operatorname{Gal}(F/K)$. Evaluation at $w$ identifies an equivariant homomorphism $M^D\to J_{F,S}$ with a family of local invariant homomorphisms $M^D\to F_w^\times$. Since $M^D$ is killed by $n$, every image lies in $\mu_n\subset F_w^\times$. By [F2], these local maps are exactly $H^0(G_{K_v},M)$. [A1, F1, F2, F5, given, choose, construct, algebra]

2.1 Conversely, start with any family of local invariant elements, including an arbitrary infinite family when $S$ is infinite. Step 1.1 turns each into a decomposition-group-equivariant map to the common finite group $\mu_n\subset F_w^\times$; transport it to all places over $v$. The resulting components are units at every finite place, so they form a genuine restricted S-idèle at the single global stage $F$. Assembling them for each element of the finite group $M^D$ gives an equivariant homomorphism $M^D\to J_{F,S}$, hence to $J_{K,S}$. This is inverse to localization. Injectivity follows because all finite-stage idèle transition maps are injective. Thus the displayed isomorphism holds without interchanging an infinite product and a filtered limit. [F1, F2, step 1.1, construct, algebra]

3.1 By [F3], at a real place Tate degree zero is $M^{c_v}/(1+c_v)M$, and at a complex place it is zero; at a finite place it is the ordinary invariant group by [F1]. Therefore the product of the canonical quotient maps is onto $P^0_S(K,M)$ and has precisely the displayed kernel. All local factors are finite, and [F4] makes their product compact Hausdorff. The zero module and the function-field case with no archimedean places are included. [F1, F3, F4, step 2.1, algebra] ∎
