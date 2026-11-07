---
id: lem-finite-s-high-cohomology-is-archimedean
kind: lemma
title: Finite-S global cohomology above degree two is archimedean
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-idele-class-module-of-a-global-field
  - lem-s-tower-kills-local-primary-brauer-classes
  - thm-hilbert-90-for-absolute-galois-group
  - lem-kummer-cohomology-of-roots-of-unity
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - lem-finite-module-profinite-ext-colimits-and-products
  - lem-finite-module-ext-cohomology-for-divisible-coefficients
  - lem-s-unit-ext-is-global-cohomology-for-finite-modules
  - lem-s-idelic-ext-in-positive-degrees-is-restricted-local-cohomology
  - lem-s-idelic-primary-class-formation
  - lem-s-idelic-cyclic-ext-reciprocity
  - lem-primary-formation-finite-module-ext-duality
  - thm-poitou-tate-exact-sequence-for-finite-modules
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are inherited from the S-tower, local cohomology, Ext and Poitou–Tate interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 4.10(c), printed pp.56–58; the finite-S local-tower all-degree argument is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC, and the finite-module Poitou–Tate theorem in its stated scope. Let $K$ be a number field, $S$ a finite set of places containing all archimedean places and all places whose residue characteristic divides the order of a finite continuous $G_{K,S}$-module $M$. For every $r\ge3$, actual localization is an isomorphism
$$H^r(G_{K,S},M)\xrightarrow{\sim}\bigoplus_{v\text{ real}}H^r(G_{K_v},M).$$
At complex places the groups vanish. The isomorphism is natural in $M$ and in field automorphisms preserving $S$. No statement about $H^3(G_{K,S},\mathbb Z)$ is asserted.

## Facts & Assumptions

**Given:** The number field, finite place set, finite module, choice assumptions and assumed Poitou–Tate theorem in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The S-idèle, S-unit and S-class modules are the stated direct limits and form the quotient sequence. [[def-s-idele-class-module-of-a-global-field]]

[F2] Finite-local S-tower degrees are unbounded at permitted primary primes and kill primary local Brauer classes; absolute Hilbert 90 kills degree one. [[lem-s-tower-kills-local-primary-brauer-classes]] [[thm-hilbert-90-for-absolute-galois-group]]

[F3] For every finite characteristic-zero local field, finite-module cohomology above degree two vanishes; Kummer connects roots of unity and the multiplicative group. [[thm-local-finite-module-tate-duality-in-characteristic-zero]] [[lem-kummer-cohomology-of-roots-of-unity]]

[F4] Continuous Hochschild–Serre applies to a profinite normal subgroup; finite-module profinite Ext commutes with the stated filtered quotient limits, finite products and finite coinduction. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[lem-finite-module-profinite-ext-colimits-and-products]]

[F5] Finite-module Ext against a coefficient divisible by its exponent is cohomology of the corresponding Hom module. In particular S-unit Ext is global cohomology in all degrees. [[lem-finite-module-ext-cohomology-for-divisible-coefficients]] [[lem-s-unit-ext-is-global-cohomology-for-finite-modules]]

[F6] The S-idèle Ext comparison holds in degrees one and two; S-idèle primary formation and cyclic reciprocity supply the hypotheses for the finite-primary Ext duality theorem, which gives vanishing of S-class Ext above degree two. [[lem-s-idelic-ext-in-positive-degrees-is-restricted-local-cohomology]] [[lem-s-idelic-primary-class-formation]] [[lem-s-idelic-cyclic-ext-reciprocity]] [[lem-primary-formation-finite-module-ext-duality]]

[F7] The assumed Poitou–Tate exact sequence has a surjective map from $P_S^2(K,M)$ to the dual of $H^0(G_{K,S},M^D)$. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

## Proof

**Proof technique:** remove the local tower kernel in all primary Ext degrees, then use the positive-degree S-idèle Ext sequence.

1.1 Fix a prime $\ell\mid|M|$ and a finite place $v\in S$. Let $E_v$ be the union of the compatible completions of finite subextensions of $K_S/K$ and put $N_v=\operatorname{Gal}(K_{v,s}/E_v)$. By absolute Hilbert 90 in [F2], $H^1(N_v,K_{v,s}^\times)=0$. Continuous cohomology of $N_v$ is the filtered limit over its open neighborhoods: finite-image cochains and primitives extend from a finite quotient of $N_v$ to a sufficiently small open neighborhood. By [F2], restriction along the S-tower kills every $\ell$-primary local Brauer class, so $H^2(N_v,K_{v,s}^\times)(\ell)=0$. [F2, given, choose, construct, algebra]

2.1 For $q\ge3$, every finite local stage $E/K_v$ has $H^q(G_E,\mu_{\ell^a})=0$ by [F3]. The Kummer long exact sequence therefore makes multiplication by $\ell^a$ injective on $H^q(G_E,K_{v,s}^\times)$ for every $a$, so its $\ell$-primary torsion is zero. Passing to the filtered limit as in step 1.1 yields $H^q(N_v,K_{v,s}^\times)(\ell)=0$. Thus all positive-degree normal-subgroup cohomology has zero $\ell$-primary part. [F3, step 1.1, algebra]

3.1 Let $D_\ell$ be the $\ell$-primary part of $M^D$ and let $M_\ell$ be the $\ell$-primary part of $M$. Resolve $D_\ell$ by finite-rank free integral lattices with continuous action and use the Hochschild–Serre double complex [F4] for the coefficient $K_{v,s}^\times$. Every positive normal-cohomology group is torsion and has zero $\ell$-primary part by steps 1.1–2.1; multiplication by the exponent of $D_\ell$ is therefore invertible on it, while Ext with first argument $D_\ell$ is killed by that exponent. Thus every positive normal-cohomology row vanishes in the Ext spectral sequence, so actual Ext inflation identifies $\operatorname{Ext}^r_{G_{K_v}/N_v}(D_\ell,E_v^\times)$ with $\operatorname{Ext}^r_{G_{K_v}}(D_\ell,K_{v,s}^\times)$ in every degree. Multiplication by the exponent of $D_\ell$ is onto $K_{v,s}^\times$, so [F5] identifies the latter with $H^r(K_v,M_\ell)$, which is zero for $r\ge3$ by [F3]. The comparison is natural in $M$ and respects localization. [F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 Put $D=M^D$ and sum step 3.1 over its primary components. Since $S$ is finite, each finite-stage S-idèle group is a finite product of local multiplicative groups. Apply the finite-product, filtered-quotient and coinduction isomorphisms in [F4] place by place. Step 3.1 makes every finite place contribute zero to $\operatorname{Ext}^r_{G_{K,S}}(D,J_S)$ for $r\ge3$. At a real place the local tower is either real or complex; if $|M|$ is even it contains $i$ because all places above $2$ lie in $S$. The real contribution is consequently ordinary $H^r(G_{K_v},M)$ in positive degrees by [F5], while the complex contribution is zero. If $|M|$ is odd, positive cohomology of a group of order at most two vanishes. Hence S-idèle Ext in each degree $r\ge3$ is the displayed direct sum over real places. [F4, F5, step 3.1, given, construct, algebra]

5.1 For every prime dividing $|M|$, S-tower cyclotomic degrees are unbounded; [F6] therefore identifies $\operatorname{Ext}^r(D,C_S)$ with zero for $r\ge3$. Apply Ext to $0\to E_S\to J_S\to C_S\to0$ from [F1]. The map $\operatorname{Ext}^2(D,J_S)\to\operatorname{Ext}^2(D,C_S)$ is the surjection of [F7] under the actual identifications and local-invariant normalization in [F6]. The long exact sequence therefore identifies $\operatorname{Ext}^r(D,E_S)$ with $\operatorname{Ext}^r(D,J_S)$ for every $r\ge3$. By [F5] and step 4.1, this is the claimed natural localization isomorphism. The zero module is included. [F1, F5, F6, F7, step 4.1, algebra] ∎
