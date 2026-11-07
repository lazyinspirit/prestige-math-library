---
id: lem-s-idelic-cyclic-ext-reciprocity
kind: lemma
title: Cyclic Ext reciprocity for S-idèle classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-s-idelic-primary-class-formation
  - lem-global-idele-class-norm-one-is-compact
  - lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact
  - thm-global-class-field-existence-number-field
  - thm-global-function-field-class-field-existence
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-archimedean-local-reciprocity
  - lem-continuous-characters-separate-points-of-an-lca-group
  - thm-pontryagin-biduality
  - thm-tychonoff
  - thm-local-valuation-ring-compact-open
  - thm-higher-yoneda-ext-agrees-with-derived-ext
  - prop-yoneda-product-is-composition-in-the-derived-category
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for compact products, class-field existence, canonical reciprocity and continuous Ext.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.5 and Theorem 4.6(a), printed pp.51–53. The proof below uses compact exponent quotients and does not use the corrected degree-zero kernel formula in Theorem 4.6(b).
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field and $S$ a nonempty set of its places containing all archimedean places. Let $K_S$ be the maximal extension unramified outside $S$, $\Gamma=\operatorname{Gal}(K_S/K)$, and $C_S$ the discrete direct-limit S-idèle class module. For every finite intermediate $F\subset K_S$, write $V=\operatorname{Gal}(K_S/F)$. For each integer $n\ge1$, the actual Yoneda product and the normalized S-class-formation invariant induce an isomorphism
$$\alpha_1(V,\mathbb Z/n):C_S^V/nC_S^V\xrightarrow{\sim}\operatorname{Hom}(H^1(V,\mathbb Z/n),\mathbb Q/\mathbb Z).$$
This includes infinite $S$ and does not assert a degree-zero Ext duality or the Poitou–Tate sequence.

## Facts & Assumptions

**Given:** The global field, nonempty $S$, unramified tower, finite intermediate field, integer and choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The actual S-idèle formation identifies $C_S^V$ with $C_F/U$, where $U=\prod_{w\notin S_F}\mathcal O_w^\times$, and its invariant is transported from the normalized global idèle-class formation. [[lem-s-idelic-primary-class-formation]]

[F2] The norm-one idèle-class group is compact; the full idèle-class group is locally compact Hausdorff. [[lem-global-idele-class-norm-one-is-compact]] [[lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact]]

[F3] For both global-field types, finite global Artin reciprocity is onto with the norm kernel, and every open finite-index idèle-class subgroup is the norm group of a finite abelian extension. [[thm-global-artin-reciprocity-and-norm-index]] [[thm-global-function-field-artin-reciprocity-and-norm-index]] [[thm-global-class-field-existence-number-field]] [[thm-global-function-field-class-field-existence]]

[F4] Local reciprocity identifies norm subgroups and finite abelian extensions; the unramified extension has all local units as norms. The canonical map is characterized by the cyclic invariant pairing, with the real-place sign map. [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]] [[thm-archimedean-local-reciprocity]]

[F5] Local unit groups and their arbitrary product are compact, and continuous characters separate points in an LCA group. [[thm-local-valuation-ring-compact-open]] [[thm-tychonoff]] [[lem-continuous-characters-separate-points-of-an-lca-group]]

[F6] Yoneda extensions compute derived Ext, and the product is the actual derived composition. [[thm-higher-yoneda-ext-agrees-with-derived-ext]] [[prop-yoneda-product-is-composition-in-the-derived-category]]

[F7] The biduality map is a topological isomorphism for locally compact Hausdorff abelian groups. [[thm-pontryagin-biduality]]

## Proof

**Proof technique:** compact exponent quotients, finite global class-field existence, and the cyclic carry invariant.

1.1 Write $S_F$ for the places over $S$ and $A=C_F/U$. The outside unit product $U$ is compact by [F5], embeds into $C_F$ because $S_F$ is nonempty, and has norm one. Hence $C_F^1/U$ is compact and Hausdorff by [F2]. In the number-field case a positive scalar at one archimedean place provides a continuous section of the norm $C_F\to\mathbb R_{>0}$, giving $A\cong(C_F^1/U)\times\mathbb R_{>0}$. In the function-field case the degree image is a nonzero subgroup $d\mathbb Z$ of $\mathbb Z$; a class of degree $d$ splits $A\cong(C_F^1/U)\times d\mathbb Z$. Therefore $A/nA$ is compact Hausdorff: the real factor is divisible, the integral factor has finite quotient, and the image under multiplication by $n$ of the compact norm-one quotient is compact and closed. It has exponent dividing $n$. [F2, F5, given, choose, construct, algebra]

1.2 For a finite abelian $L/F$, [F3] gives its actual Artin map with norm kernel. That kernel contains $U$ exactly when $L/F$ is unramified at every finite place outside $S_F$: by [F4] local units lie in the local norm group for an unramified extension, and conversely an abelian local extension whose norm group contains all units has the same norm group as an unramified extension of the same degree, so local uniqueness identifies the extensions. The outside product is compact, and finite-coordinate products are dense, so the equivalence holds for all of $U$. An extension $L/F$ unramified outside $S_F$ lies in $K_S$: its normal closure over $K$ is unramified outside $S$ because $F/K$ and all its conjugates are. Thus finite Artin factors define a continuous inverse-limit map $A/nA\to V^{\rm ab}/nV^{\rm ab}$. [F3, F4, F5, given, construct, algebra]

2.1 Each finite quotient of $V^{\rm ab}/nV^{\rm ab}$ is an abelian Galois extension inside $K_S$ of exponent dividing $n$, so its Artin map is onto by [F3] and kills $nA$ and $U$. The inverse-limit image is dense; it is also closed because $A/nA$ is compact, hence it is onto. To prove injectivity, let a class $a\ne0$ lie in $A/nA$. By [F5] a continuous character detects it; since $n$ kills the domain, the character has finite image among the $n$th roots of unity. Its kernel pulls back to an open finite-index subgroup of $C_F$ containing $nC_F$ and $U$. The appropriate existence theorem in [F3] realizes that subgroup as a finite abelian norm group. By step 1.2 the extension lies in $K_S$, and its Galois group has exponent dividing $n$. Its Artin quotient detects $a$, proving injectivity. Hence the actual map is an isomorphism. [F3, F5, step 1.1, step 1.2, choose, algebra]

3.1 A continuous character $\chi:V\to\mathbb Z/n$ factors through a finite cyclic extension. Under [F1], an element of $C_S^V/nC_S^V$ is represented by $a\in A/nA$. Its Yoneda extension is the pushout with a generator $z$ satisfying $nz=a$. Splicing it with $\chi$ and lifting values to $\{0,\ldots,n-1\}$ gives the cyclic carry cocycle $a\,\delta\widetilde\chi/n$. By [F1] the invariant is the sum of its normalized local invariants. At finite places [F4] identifies each local carry invariant with evaluation of the local Artin factor; at real places the same identification is the sign/conjugation formula, and complex places contribute zero. Hence the sum is $\chi(\operatorname{Art}_F(a))$ using the actual global product map. Under step 2.1, evaluation identifies $A/nA$ with the full algebraic dual of $H^1(V,\mathbb Z/n)$: every homomorphism from this discrete torsion character group to $\mathbb Q/\mathbb Z$ is continuous, and its compact bidual is $V^{\rm ab}/nV^{\rm ab}$. Thus the actual Yoneda/invariant map is an isomorphism, including $n=1$. [F1, F3, F4, F6, F7, step 2.1, construct, algebra] ∎
