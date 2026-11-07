---
id: thm-alternating-cohomology-class-of-a-perfect-torsion-complex
kind: theorem
title: Alternating Cohomology Formula for a Perfect Torsion Complex
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
- def-perfect-torsion-complex-relative-euler-class
- def-dedekind-domain
- def-axiom-of-choice
- def-zero-and-stalk-complex
- lem-finite-torsionfree-modules-over-dedekind-domains-are-projective
- thm-relative-k0-determinant-fiber-comparison
- def-perfect-complex-over-a-ring
- def-universal-determinant-functor-on-a-perfect-derived-category
- thm-canonical-truncations-fit-a-distinguished-triangle
- lem-perfect-complexes-form-a-triangulated-subcategory
- thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
- thm-localisation-of-modules-is-exact
sources:
  references:
  - title: Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups, §6
    url: https://arxiv.org/pdf/0812.1556
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain with fraction field $K$, and let $C\in D_{\mathrm{perf}}(R)$ satisfy $K\otimes_R C\simeq0$. For each integer $i$, the cohomology module $H^i(C)$ is a finitely generated torsion $R$-module and has a finite projective resolution, so its relative Euler class $\kappa_{R,K}(H^i(C))=\chi^{\mathrm{tri}}(S^0(H^i(C)),0)$, with $S^0(H^i(C))$ the complex concentrated in degree zero, is defined. Then
$$
\chi^{\mathrm{tri}}(C,0)=\sum_{i\in\mathbb Z}(-1)^i\kappa_{R,K}(H^i(C)),
$$
where the sum is finite because $C$ is perfect.


The same alternating-cohomology formula, with $K$ replaced by $S$, holds for a ring map $R\to S$ satisfying the flatness and regular-target hypotheses of the refined Euler-class definition, whenever $C$ is perfect, $S\otimes_R C\simeq0$, and every $H^i(C)$ has a bounded resolution by finitely generated projective $R$-modules, equivalently its degree-zero stalk is perfect. In particular this applies to the order $\Lambda\to A$ interface when $A$ is semisimple, scalar extension is flat, and the cohomology modules have such resolutions. Finite generation and finite projective dimension alone are not being substituted for this perfect-stalk hypothesis over an arbitrary ring.

## Statement references

[Breuning, §6](https://arxiv.org/pdf/0812.1556)

## Facts & Assumptions

**Given:** The Axiom of Choice and either the Dedekind-domain data or the general ring-map data in the Statement. In the general case write $T=S$, and in the Dedekind case write $T=K$; all modules are left modules and shifts use the cochain convention.

[A1] [[def-axiom-of-choice]]: arbitrary choice is available in this number-field branch.

[F1] [[def-dedekind-domain]]: $R$ is a Noetherian integrally closed domain of Krull dimension one.

[F2] [[lem-finite-torsionfree-modules-over-dedekind-domains-are-projective]]: assuming the Axiom of Choice, every finitely generated torsion-free $R$-module is projective.

[F3] [[def-perfect-torsion-complex-relative-euler-class]]: $\chi^{\mathrm{tri}}(C,t)$ is the relative Euler class of a perfect object with an isomorphism from even to odd localized cohomology, and $\kappa_{R,K}(M)=\chi^{\mathrm{tri}}(S^0(M),0)$ for perfect torsion modules.

[F4] [[def-zero-and-stalk-complex]]: $S^0(M)$ is the complex with $M$ in degree zero and zero modules in every other degree.

[F5] [[thm-relative-k0-determinant-fiber-comparison]]: the fixed map $\eta:K_0(R,T)\to\pi_0\mathcal F(N)$ is a group isomorphism, taking the relative Euler class to its determinant object with the specified localized trivialization.

[F6] [[def-universal-determinant-functor-on-a-perfect-derived-category]]: a distinguished triangle $X\to Y\to Z\to X[1]$ gives $g(Y)\cong g(X)\otimes g(Z)$, natural in triangle isomorphisms and compatible with octahedral filtrations and split-triangle symmetry.

[F7] [[thm-canonical-truncations-fit-a-distinguished-triangle]]: the canonical distinguished triangles are $\tau^{\leq i-1}C\to\tau^{\leq i}C\to S^0(H^i(C))[-i]\to(\tau^{\leq i-1}C)[1]$, with the usual cohomology of each truncation.

[F8] [[lem-perfect-complexes-form-a-triangulated-subcategory]]: perfect objects are closed under shifts and cones, and under isomorphisms in distinguished triangles.

[F9] [[def-perfect-complex-over-a-ring]]: a perfect complex has a bounded representative with finitely generated projective terms.

[F10] [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]: over a Noetherian ring submodules of finite modules are finitely generated.

[F11] [[thm-localisation-of-modules-is-exact]]: localization is exact, hence commutes with kernels, images and cohomology; a module whose fraction-field localization vanishes is torsion, since each element is killed by a nonzero denominator.

## Proof

**Proof technique:** finite canonical truncation tower and additivity in the determinant fiber.

1.1 In the Dedekind case choose a bounded finite-projective representative $P$ of $C$. Its cycles, boundaries and cohomology are finite by Noetherianity. Exact localization gives $K\otimes_R H^i(C)=H^i(K\otimes_RP)=0$, so every $H^i(C)$ is torsion. For any such finite module $M$, take a finite free surjection $R^n\to M$. Its kernel $L$ is finitely generated by Noetherianity and torsion-free as a submodule of $R^n$, hence projective by [F2]. Thus $0\to L\to R^n\to M\to0$ is a resolution by finitely generated projectives, making $S^0(M)$ perfect. The Axiom of Choice is used through [F2]. In the general case perfectness of these stalks is the explicit hypothesis, and flatness gives $T\otimes_R H^i(C)=H^i(T\otimes_R C)=0$. In both cases $C$ has cohomology in a finite interval $[a,b]$. [A1, F1, F2, F4, F9, F10, F11, given, choose, algebra]

1.2 For any perfect $X$ with $T\otimes_RX\simeq0$, let $e(X)=\chi^{\mathrm{tri}}(X,0)$. Its trivialization in [F3] is the canonical one obtained from the unique derived isomorphism $T\otimes_RX\cong0$: the cohomology comparison is natural, and on the zero complex all its factors and evaluations are unit maps. If $X\to Y\to Z\to X[1]$ is a distinguished triangle of such objects, the determinant map of [F6] is an isomorphism of their fiber objects. Indeed, after applying $N$ and the fixed natural comparison with scalar extension, it is the determinant map of the localized triangle. The unique maps of its three zero objects to zero form a triangle isomorphism to the zero triangle, so determinant naturality identifies this map with the tensor product of the two canonical trivializations. Taking components and applying $\eta^{-1}$ gives $e(Y)=e(X)+e(Z)$, and the zero fiber object gives $e(0)=0$. [F3, F5, F6, construct, algebra]

2.1 The shift triangle $X\to0\to X[1]\to X[1]$ therefore gives $e(X[1])=-e(X)$. Shifts remain perfect and become zero after scalar extension. Iterating for positive shifts and applying the same identity to $X[-1]$ for negative shifts yields $e(X[j])=(-1)^je(X)$ for every integer $j$. In particular $e(S^0(H^i(C))[-i])=(-1)^i\kappa_{R,T}(H^i(C))$. [F3, F4, F8, step 1.1, step 1.2, algebra]

2.2 Put $C_i=\tau^{\leq i}C$ for $a-1\leq i\leq b$. The initial object $C_{a-1}$ is zero in the derived category. By [F7] each successive triangle has third term $S^0(H^i(C))[-i]$, perfect by step 1.1 and [F8]. Induction in these triangles makes every $C_i$ perfect; flatness and the truncation cohomology show $T\otimes_R C_i\simeq0$. The last object $C_b$ is isomorphic to $C$. Thus step 1.2 applies at every stage, giving $e(C_i)=e(C_{i-1})+e(S^0(H^i(C))[-i])$. [F7, F8, step 1.1, step 1.2, induction, algebra]

3.1 Sum these finitely many identities and use step 2.1 to obtain $\chi^{\mathrm{tri}}(C,0)=\sum_{i=a}^b(-1)^i\kappa_{R,T}(H^i(C))$. Zero cohomology terms contribute zero, and if all cohomology vanishes then $C\simeq0$ and both sides are zero. The construction uses actual canonical truncation triangles, without asserting a splitting of $C$ into its cohomology. It uses the fixed determinant comparison of [F3]; naturality in step 1.2 ensures that the equality concerns its specified trivializations, rather than just the underlying absolute determinant classes. This proves both branches of the Statement. [F3, F5, F7, step 1.2, step 2.1, step 2.2, algebra] ∎
