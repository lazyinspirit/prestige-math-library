---
title: Singular complexes preserve the sequential group convention
status: draft
research_item: lem-author-e0b0bf18ed2b-singular-sequential-comparison
dependency_level: 2
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

- [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)
- [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)
- [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps)
- [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)
- [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)

## Statement
Let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces with structure maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$, sphere first. Let $K=\Delta^1/\partial\Delta^1$, with $|K|$ identified with $S^1$ in the chosen orientation, and put $X_n=\operatorname{Sing}E_n$ with its constant basepoint simplex. Give $X$ the structure map $K\wedge X_n\to X_{n+1}$ adjoint to $|K\wedge X_n|\cong S^1\wedge|X_n|\to S^1\wedge E_n\to E_{n+1}$, where the middle map uses evaluation. Then every $X_n$ is Kan and $G_k(X)\cong\pi_k(E)$ naturally for every integer $k$, with the published sphere-first bonding convention.

## Facts & Assumptions
**Given:** $E$, $K$ and the chosen oriented realization as in the Statement. The group $G_k$ is the sequential colimit of the tail-invariance supplier.

**Goal:** Construct the simplicial prespectrum and compare its stable groups to the published groups.

[F1] The singular-realization input gives the natural evaluation weak equivalence and pointed realization–singular adjunction. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] The sequential definitions fix sphere-first structure maps and bonding maps. [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps), [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[F3] Tail invariance gives cutoff independence and passage of compatible level isomorphisms to colimits. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[F4] The direct sphere-comparison lemma identifies the simplicial groups with topological groups by evaluated sphere representatives and verifies the ordered suspension formula. [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)

## Proof
1.1 The adjunction defines the displayed structure map. A horn in $\operatorname{Sing}E_n$ is a continuous map from a realized topological horn to $E_n$; the simplex retracts continuously onto that horn, so the map extends and $X_n$ is Kan. Naturality of evaluation and the defining adjunction make the square relating the realized structure map to $\sigma_n$ commute. [F1, F2, given]

2.1 For $d\geq1$, use [F4] to identify $\pi_d^{\mathrm{simp}}(X_n)\cong\pi_d(E_n)$, not just the homotopy groups of $|X_n|$. For a sphere representative $a$, the evaluated simplicial bonding map is $\sigma_n\circ(1_{S^1}\wedge(\epsilon_n|a|))$ by [F4]. This is exactly the bonding representative of [F2] with the same sphere-coordinate identification. Thus the group isomorphisms commute with the actual bonding maps, without permuting coordinates. [F1, F2, F4, step 1.1]

3.1 For each integer $k$, choose a tail with $n+k\geq2$. Step 2.1 gives compatible isomorphisms of its stage groups. Passing to colimits by [F3] gives the asserted natural isomorphism $G_k(X)\cong\pi_k(E)$ for every integer $k$. [F2, F3, step 2.1] ∎
