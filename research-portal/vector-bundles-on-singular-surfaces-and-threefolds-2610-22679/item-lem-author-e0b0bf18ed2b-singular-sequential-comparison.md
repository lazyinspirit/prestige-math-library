---
title: Singular complexes preserve the sequential group convention
status: published
research_item: lem-author-e0b0bf18ed2b-singular-sequential-comparison
dependency_level: 2
sources:
  references:
    - title: Kerodon, singular simplicial sets are Kan
      url: https://kerodon.net/tag/002K
      locator: Proposition 1.2.5.8, full statement and displayed proof
      statement: The singular simplicial set of every topological space is a Kan complex.
      hypotheses: An arbitrary topological space; no connectivity or well-pointedness
        assumption is required.
      reading_limits: Read the complete proposition and displayed retraction proof in
        the primary HTML during this repair. The earlier realization-of-horns
        identification invoked there is imported, not reconstructed. Applied
        only to the underlying spaces E_n; the constant basepoint does not
        affect horn filling.
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

- [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)
- [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)
- [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps)
- [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)
- [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)
- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)
- [math:def-compactly-generated-based-space-and-well-pointed-object](https://alphabetamath.cc/item/def-compactly-generated-based-space-and-well-pointed-object)
- [` Kerodon, singular simplicial sets are Kan · Proposition 1.2.5.8, full statement and displayed proof `](https://kerodon.net/tag/002K)


## Statement
Let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces with structure maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$, sphere first. Let $K=\Delta^1/\partial\Delta^1$, with $|K|$ identified with $S^1$ in the chosen orientation, and put $X_n=\operatorname{Sing}E_n$ with its constant basepoint simplex. Give $X$ the structure map $K\wedge X_n\to X_{n+1}$ adjoint to $|K\wedge X_n|\cong S^1\wedge|X_n|\to S^1\wedge E_n\to E_{n+1}$, where the middle map uses evaluation. Then every $X_n$ is Kan and $G_k(X)\cong\pi_k(E)$ naturally for every integer $k$, with the published sphere-first bonding convention.

## Facts & Assumptions
**Given:** $E$, $K$ and the chosen oriented realization as in the Statement. The group $G_k$ is the sequential colimit of the tail-invariance supplier. Naturality is with respect to families of based maps $f_n:E_n\to E'_n$ satisfying $f_{n+1}\sigma_n=\sigma'_n(1_{S^1}\wedge f_n)$.

**Goal:** Construct the simplicial prespectrum and compare its stable groups to the published groups.

[F1] The singular-realization input gives the natural evaluation weak equivalence $\epsilon_n:|\operatorname{Sing}E_n|\to E_n$, the pointed realization–singular adjunction, and the constant basepoint simplices. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] The sequential definitions fix sphere-first structure maps and bonding maps, including the sphere-coordinate identification in the stable colimit. [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps), [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[F3] The tail-invariance supplier defines pointed simplicial prespectra and their stage convention $\pi_d^{\mathrm{simp}}(Z)=\pi_d(|Z|)$. The simplicial smash product $A\wedge B$ is the degreewise quotient of $A\times B$ by the union of the two basepoint factors. Its realization premise gives the natural ordered homeomorphism $|K\wedge Z|\cong S^1\wedge|Z|$ for every pointed simplicial set $Z$, and realized levels are well-pointed based compactly generated weak Hausdorff spaces. It also gives the natural identification with ordinary Kan groups for Kan levels, cutoff independence, and passage of compatible stage-group isomorphisms to colimits. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[F4] The direct sphere-comparison lemma identifies ordinary Kan groups of a singular complex with topological groups by evaluated sphere representatives and verifies the ordered suspension formula. [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)

[F5] Standard simplices, their boundaries and degreewise products have the published simplicial-set meanings; a simplicial set is Kan exactly when every horn inclusion admits an extension into it. [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration), [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[F6] Products and smash quotients of based spaces use the compactly generated convention; well-pointed means that the basepoint inclusion is a cofibration. [math:def-compactly-generated-based-space-and-well-pointed-object](https://alphabetamath.cc/item/def-compactly-generated-based-space-and-well-pointed-object)

[F7] The Kan property of singular complexes is the precise imported premise recorded in External input. [Kerodon, Proposition 1.2.5.8](https://kerodon.net/tag/002K).

## External input
Import from Kerodon Proposition 1.2.5.8 the assertion that $\operatorname{Sing}Z$ is Kan for every topological space $Z$. Its stated scope applies to every $E_n$; choosing the constant basepoint does not change the underlying simplicial set or its horn-extension property. The full statement and displayed proof were read for this repair; the preceding realization-of-horns identification used there remains imported. This premise supplies the Kan assertion only. The sequential construction, bonding-map comparison and colimit argument below are local applications of the declared suppliers.

## Proof
1.1 The ordered homeomorphism in [F3], with the topology convention of [F6], makes the topological composite in the Statement a well-defined based continuous map. The pointed adjunction [F1] therefore defines a unique based simplicial structure map $s_n:K\wedge X_n\to X_{n+1}$. Its defining equation is $\epsilon_{n+1}|s_n|=\sigma_n(1_{S^1}\wedge\epsilon_n)$ under that homeomorphism. By [F7], each $X_n$ is Kan in the sense of [F5]. Thus $X$ is the required pointed simplicial prespectrum; [F3] also ensures its realization has levels in the topological prespectrum convention. [F1, F2, F3, F5, F6, F7, given]

2.1 For $d\geq1$, the evaluation weak equivalence [F1] identifies $\pi_d^{\mathrm{simp}}(X_n)=\pi_d(|X_n|)$ with $\pi_d(E_n)$. By [F3] and [F4], this comparison also agrees with the ordinary Kan-group comparison on evaluated sphere representatives. For a sphere representative $a:A\to X_n$, the equation from step 1.1 and the ordered suspension formula [F4] give the evaluated bonding representative $\sigma_n\circ(1_{S^1}\wedge(\epsilon_n|a|))$. This is exactly the bonding representative of [F2], with its sphere-coordinate identification and the first factor retained. Hence the stage isomorphisms commute with the actual bonding homomorphisms. For each integer $k$, take a tail with $n+k\geq2$ and pass these compatible isomorphisms to colimits by [F3], obtaining $G_k(X)\cong\pi_k(E)$ independently of the cutoff. Evaluation, the ordered homeomorphism and the sphere comparison are natural; for the level maps specified in Given, their naturality also makes the constructed structure maps commute with $\operatorname{Sing}f_n$. The induced colimit isomorphism is therefore natural in $E$. [F1, F2, F3, F4, step 1.1, given] ∎
