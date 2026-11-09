---
title: Stable spectra and exact triangles
status: published
research_item: def-stable-spectra-interface
dependency_level: 3
---

PDF p. 3: Filtered S1 spectra

## Prerequisites

- [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)
- [lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison)
- [lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison)
- [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift)
- [lem-author-e0b0bf18ed2b-exactness-and-products](item-lem-author-e0b0bf18ed2b-exactness-and-products)
- [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

## Definition
Use the symmetric monoidal stable infinity-category $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$ supplied by the stable enhancement input. Here $S$ is the infinity-category of spaces, $S_*^{\mathrm{fin}}$ is the infinity-category of finite pointed spaces, and $\operatorname{Exc}_*$ consists of functors taking the point to a contractible space and pushouts to pullbacks. An infinity-category retains mapping spaces and coherent higher compositions. Diagrams are coherent functors, and limits and colimits are their homotopy limits and colimits; these exist for small diagrams.

Write $0$ for the zero spectrum. For $f:A\to B$, define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\sqcup_A0$. A fiber or cofiber sequence includes its nullhomotopy and defining pullback or pushout square. Define suspension $E[1]=0\sqcup_E0$ and desuspension $E[-1]=0\times_E0$. A fiber sequence $F\to A\to B$ extends to the cofiber triangle $F\to A\to B\to F[1]$, and $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. Let $\mathbb S=\Sigma^\infty S^0$ be the sphere spectrum and define $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$. These are abelian groups for every $i\in\mathbb Z$, and $\pi_i(E[1])\cong\pi_{i-1}(E)$.

Products are coherent homotopy products. The smash product $E\wedge F$ is the separately colimit-preserving symmetric monoidal product with unit $\mathbb S$; its associativity, symmetry and unit include higher coherences. A ring spectrum means an associative or commutative algebra object for smash, with the intended type specified. Smash is separately exact: it preserves finite limits and finite colimits in each variable.

To connect this interface with the published sequential-prespectrum definition, let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces, with $\sigma_n:S^1\wedge E_n\to E_{n+1}$ and the sphere coordinate first. Form $X=\operatorname{Sing} E$ with the structure maps of the singular sequential comparison, then form $QX$ as in the Omega replacement comparison. Regard its coherent Omega tower as an object $\mathcal RE$ of $\mathrm{Sp}$ using the imported tower equivalence. For every $i\in\mathbb Z$ there is a natural isomorphism

$$\pi_i^{\mathrm{seq}}(E)=\operatorname*{colim}_{n\gg0}\pi_{n+i}(E_n)\xrightarrow{\sim}\pi_i(\mathcal RE).$$

The left bonding map is suspension with $S^1$ first followed by $\sigma_n$, with the published sphere-coordinate identification. If $E$ is already an Omega-prespectrum, its adjoint structure maps are weak equivalences and the comparison agrees with evaluation at each sufficiently late level. The tower $(QX)_{n+1}$ represents $(\mathcal RE)[1]$, so $\pi_i((\mathcal RE)[1])\cong\pi_{i-1}^{\mathrm{seq}}(E)$. In particular, a map inducing isomorphisms on all published stable groups is sent to an equivalence in $\mathrm{Sp}$.

## Definition references

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison)

[lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison)

## Facts & Assumptions
**Given:** The smallness conventions of the external stable enhancement and, for the comparison, a sequential prespectrum $E$ as specified above.

**Goal:** Justify the operations, comparison and index convention in the definition.

[F1] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies the stable enhancement, coherent tower equivalence, limits, colimits and smash product.

[F2] [lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison) identifies the published sequential groups with those of $\operatorname{Sing} E$, preserving sphere order.

[F3] [lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison) identifies the groups of $\operatorname{Sing} E$ and its Omega replacement.

[F4] [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift) identifies the latter groups with enhanced groups and proves the suspension index.

[F5] [lem-author-e0b0bf18ed2b-exactness-and-products](item-lem-author-e0b0bf18ed2b-exactness-and-products) proves rotation, homotopy products and separate exactness.

## Justification
1.1 The operations and coherences exist by [F1], and the rotation, product and exactness assertions follow from [F5]. The group $\pi_i(E)$ is abelian because [F4] identifies it with a homotopy group in degree at least two. [F1, F4, F5]

1.2 Compose the natural isomorphisms of [F2], [F3] and [F4]. They use the specified sphere-first bonding maps and give the displayed comparison. The tail formula in [F4] gives the suspension sign. If $E$ is already an Omega-prespectrum, its adjoint weak equivalences make each sufficiently late bonding map an isomorphism, so the colimit agrees with evaluation there. [F2, F3, F4, given]

2.1 For a map inducing isomorphisms on all published stable groups, step 1.2 gives isomorphisms on all enhanced groups. At every level of an Omega tower, these detect all homotopy groups, including components by shifting to a double loop space. The Whitehead criterion for spaces then gives a level equivalence, and the tower equivalence detects an equivalence in $\mathrm{Sp}$. This completes the justification. The construction uses functorial $\operatorname{Sing}$ and $Q$ and does not assert a model-category or monoidal equivalence. [F1, F4, step 1.2] ∎
