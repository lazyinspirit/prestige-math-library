---
id: thm-poitou-tate-exact-sequence-for-finite-modules
kind: theorem
title: "Poitou–Tate exact sequence for a finite Galois module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-finite-galois-module-and-cartier-dual
  - def-restricted-product-of-local-galois-cohomology-groups
  - def-s-idele-class-module-of-a-global-field
  - lem-s-idelic-primary-class-formation
  - lem-s-idelic-cyclic-ext-reciprocity
  - lem-primary-formation-finite-module-ext-duality
  - lem-s-unit-ext-is-global-cohomology-for-finite-modules
  - lem-s-idelic-ext-in-positive-degrees-is-restricted-local-cohomology
  - lem-global-localization-lands-in-restricted-cohomology
  - lem-restricted-local-galois-cohomology-tate-duality
  - lem-global-h1-localization-is-proper-for-finite-modules
  - thm-long-exact-ext-sequence-in-the-second-variable
  - thm-pontryagin-biduality
  - thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator
  - lem-character-extension-from-a-closed-subgroup-of-an-lca-group
  - prop-yoneda-product-is-composition-in-the-derived-category
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice are inherited through the number-field and
  finite-constant function-field idelic class-formation interfaces. DC is
  inherited through continuous cohomology and Ext resolution data. The
  Ext-sequence argument adds no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Theorem I.4.10 and its complete restricted-product/Ext proof, printed pp. 48–65."
    - title: "Kęstutis Česnavičius, Poitou–Tate without restrictions on the order, arXiv:1410.2621v2"
      url: "https://arxiv.org/pdf/1410.2621v2"
      locator: "§1.1 and §5, Theorem 5.1 and proof, arXiv PDF pp. 1–2 and 21."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $K$ be a global field with
separable closure $K_s$ and absolute Galois group $G_K$. Let $M$ be a finite
continuous $G_K$-module, with $|M|$ prime to $\operatorname{char}K$ when $K$
is a function field. Let $S$ be any set of places containing all archimedean
places, every place where $M$ is ramified, and every finite place whose residue
characteristic divides $|M|$. In the function-field case require $S\ne\varnothing$ unless $M=0$. Write $K_S$ for the maximal Galois extension
unramified outside $S$ and $G_{K,S}=\operatorname{Gal}(K_S/K)$. Put
$M^D=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times)$ with its natural Galois
action. Use $P_S^r(K,M)$ for the restricted product in the Definition, and give
$\mathbb Q/\mathbb Z$ the discrete topology. A locally compact abelian group
means a Hausdorff abelian topological group in which every point has a compact
neighborhood; for such a group $A$, write
$A^\vee=\operatorname{Hom}_{\mathrm{cts}}(A,\mathbb Q/\mathbb Z)$. Fix the
local embeddings used to define the localization maps.

For $N=M$ or $M^D$ and $r\in\{0,1,2\}$, let
$$
\beta_N^r:H^r(G_{K,S},N)\longrightarrow P_S^r(K,N)
$$
be localization and let $X_S^r(K,N)=\ker(\beta_N^r)$. The local Tate pairings
are the cup-product pairings
$$H^r(K_v,M)\times H^{2-r}(K_v,M^D)\xrightarrow{\ \cup\ }H^2(K_v,\mathbb G_m)\xrightarrow{\ \operatorname{inv}_v\ }\mathbb Q/\mathbb Z,$$
where $\mathbb G_m$ is the multiplicative group. At archimedean places use the
corresponding Tate-modified groups. The pairings and localization
maps define the dual and connecting arrows in the exact sequence below. Then
$X_S^1(K,M)$ and $X_S^2(K,M^D)$ are finite and have a canonical perfect pairing
$$
X_S^1(K,M)\times X_S^2(K,M^D)\longrightarrow\mathbb Q/\mathbb Z,
$$
and the sequence of locally compact groups and continuous homomorphisms
$$\begin{aligned}0\longrightarrow H^0(G_{K,S},M)&\longrightarrow P_S^0(K,M)\longrightarrow H^2(G_{K,S},M^D)^\vee\longrightarrow H^1(G_{K,S},M)\longrightarrow P_S^1(K,M)\longrightarrow H^1(G_{K,S},M^D)^\vee\longrightarrow H^2(G_{K,S},M)\longrightarrow P_S^2(K,M)\longrightarrow H^0(G_{K,S},M^D)^\vee\longrightarrow0.\end{aligned}$$
is exact. Here $H^0$ at a real place is Tate-modified and $H^0$ at a complex
place is zero. This is finite-module Galois duality; it makes no p-primary
finite-flat duality assertion.

## Statement references

[[def-finite-galois-module-and-cartier-dual]]

[[def-restricted-product-of-local-galois-cohomology-groups]]

[[def-s-idele-class-module-of-a-global-field]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §4](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Kęstutis Česnavičius, *Poitou–Tate without restrictions on the order*, §§1.1 and 5](https://arxiv.org/pdf/1410.2621v2)

## Facts & Assumptions

**Given:** The global field, module, set of places, local conventions and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The S-unit, S-idèle and S-class modules form the specified exact sequence. [[def-s-idele-class-module-of-a-global-field]]

[F2] For every coefficient prime $\ell$ with unbounded tower degree, the S-idèle module has the normalized primary class-formation invariant and finite-quotient properties; actual cyclic degree-one Ext reciprocity holds over every open subgroup. [[lem-s-idelic-primary-class-formation]] [[lem-s-idelic-cyclic-ext-reciprocity]]

[F3] The primary finite-module formation theorem identifies actual Ext in degrees one and two with the duals of global cohomology in complementary degrees, under [F2]. [[lem-primary-formation-finite-module-ext-duality]]

[F4] Actual S-unit Ext is global cohomology, and actual S-idèle Ext in degrees one and two is restricted local cohomology, via natural local evaluation. [[lem-s-unit-ext-is-global-cohomology-for-finite-modules]] [[lem-s-idelic-ext-in-positive-degrees-is-restricted-local-cohomology]]

[F5] Localization lands in the specified restricted products; complementary local restricted cohomology groups are topological duals under the sums of local cup-product invariants, including Tate-modified real and zero complex terms. [[lem-global-localization-lands-in-restricted-cohomology]] [[lem-restricted-local-galois-cohomology-tate-duality]] [[def-restricted-product-of-local-galois-cohomology-groups]]

[F6] The actual $H^1$ localization map is proper and has finite kernel for either finite module. [[lem-global-h1-localization-is-proper-for-finite-modules]]

[F7] A short exact sequence in the second variable gives the natural long exact Ext sequence, and the Yoneda product is composition in the derived category. [[thm-long-exact-ext-sequence-in-the-second-variable]] [[prop-yoneda-product-is-composition-in-the-derived-category]]

[F8] Locally compact abelian groups are naturally topologically isomorphic to their biduals; the dual of a quotient is the annihilator of its closed kernel, and every continuous character of a closed subgroup extends. [[thm-pontryagin-biduality]] [[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]] [[lem-character-extension-from-a-closed-subgroup-of-an-lca-group]]

[F9] The Cartier dual of the finite module is finite and its second Cartier dual is the original module by evaluation. [[def-finite-galois-module-and-cartier-dual]] [[lem-s-unit-ext-is-global-cohomology-for-finite-modules]]

## Proof

**Proof technique:** obtain the second half from positive-degree S-idèle Ext, prove its images closed using properness, and dualize the second half for the Cartier dual.

1.1 If $M=0$, all groups and maps in the Statement are zero, including when $S=\varnothing$. Suppose $M\ne0$. Then $S$ is nonempty and contains a finite place: in a function field this is assumed, while in a number field the residue characteristics dividing $|M|$ give a finite place. Write $G=G_{K,S}$, $D=M^D$, $B^r(N)=H^r(G,N)$ and $P^r(N)=P^r_S(K,N)$. Give each $B^r$ the discrete topology. Every global and local cohomology group in the sequence is killed by $|M|$, so its continuous circle-valued characters take values in $\mathbb Q/\mathbb Z$. [F5, given, construct, algebra]

2.1 The quotient defining $C_S$ yields the exact sequence $0\to E_S\to J_S\to C_S\to0$: at each finite stage its kernel is the diagonal S-unit group, and directed limits are exact. By [F7] apply actual $\operatorname{Ext}^\bullet_G(D,-)$. For each prime $\ell\mid|M|$, the tower has unbounded $\ell$-power degrees: adjoining $\ell$-power roots of unity gives unbounded degrees in characteristic zero, while constant extensions do so in positive characteristic. Thus [F2] applies to each primary component of $D$, and [F3] identifies Ext against $C_S$ in degree one with $B^1(D)^\vee$ and in degree two with $B^0(D)^\vee$. By [F4], Ext against $E_S$ gives $B^r(M)$ and positive-degree Ext against $J_S$ gives $P^r(M)$. [F1, F2, F3, F4, F7, step 1.1, construct, algebra]

2.2 Let $K_1=\ker(B^1(D)\to P^1(D))$. By [F6] it is finite and every compact subset of $P^1(D)$ has finite inverse image. Each point of the locally compact restricted product has a compact neighborhood, which therefore meets the localization image in finitely many points. The image is consequently closed and discrete, and the induced map $B^1(D)/K_1$ onto that image is a topological isomorphism. [F5, F6, step 1.1, construct, algebra]

3.1 Naturality of the actual Ext/cochain comparisons makes the maps $B^r(M)\to P^r(M)$ localization. The normalized global invariant is the sum of local invariants, and [F7] identifies the Yoneda product with composition; hence by [F4] and [F5] the maps $P^1(M)\to B^1(D)^\vee$ and $P^2(M)\to B^0(D)^\vee$ are the duals of localization in degrees one and zero. At a real place positive ordinary cohomology agrees with positive Tate cohomology, and complex positive terms vanish. The degree-zero localization of $D$ is injective because the finite place of step 1.1 contributes the invariants of a subgroup of $G$. By [F8] its dual is onto. Thus the long Ext sequence gives the exact second half $B^1(M)\longrightarrow P^1(M)\longrightarrow B^1(D)^\vee\longrightarrow B^2(M)\longrightarrow P^2(M)\longrightarrow B^0(D)^\vee\longrightarrow0.$ The same applies with $M,D$ interchanged, by [F9]. [F4, F5, F7, F8, F9, step 1.1, step 2.1, construct, algebra]

4.1 By [F5], $P^1(M)$ is the topological dual of $P^1(D)$. The map $P^1(M)\to B^1(D)^\vee$ in step 3.1 is restriction of characters along localization. By [F8], every character of the closed localization image extends, and restriction is a quotient map: its kernel is the image annihilator and duality identifies the quotient with the dual of that image. Thus the image of $P^1(M)$ is exactly the closed compact annihilator $K_1^\perp\subset B^1(D)^\vee$, and its cokernel is $K_1^\vee$. Exactness in step 3.1 identifies $X_S^2(K,M)$ with $K_1^\vee$, giving a canonical perfect pairing with $X_S^1(K,D)=K_1$ and proving both groups finite. [F5, F8, step 3.1, step 2.2, algebra]

5.1 All arrows in the second half are continuous and strict. The first has closed discrete image by [F6], and the middle dual-localization map is a quotient onto its closed image by step 4.1. The following connecting map factors through the finite discrete quotient $K_1^\vee$, so it is continuous and strict. Both $B^2(M)$ and $P^2(M)$ are discrete: the latter is a direct sum because the unramified degree-two local groups vanish by [F5]. The remaining arrows between discrete groups are strict. The same assertions hold after interchanging $M$ and $D$. [F5, F6, F9, step 3.1, step 4.1, algebra]

6.1 Apply [F8] to each short exact image sequence in the second half for $D$: closed subgroups and quotient duals reverse these sequences exactly, and biduality returns the discrete global groups. By [F5], the dual of $P^r(D)$ is $P^{2-r}(M)$ with the stated real and complex conventions. This gives the exact first half $0\longrightarrow B^0(M)\longrightarrow P^0(M)\longrightarrow B^2(D)^\vee\longrightarrow B^1(M)\longrightarrow P^1(M)\longrightarrow B^1(D)^\vee.$ The first arrow is localization, the next is the sum of local cup-product pairings against localization, and the connecting arrow is the dual of the connecting arrow in the second half for $D$. The common middle arrow agrees with that of step 3.1 by the same local cup products; choose the standard connecting-map sign. [F5, F8, F9, step 3.1, step 5.1, construct, algebra]

7.1 Join the two exact halves at their common arrow. They are the displayed nine-term sequence of continuous homomorphisms, including all archimedean and infinite-$S$ terms. Apply step 4.1 with $M,D$ interchanged to obtain the canonical perfect pairing $X_S^1(K,M)\times X_S^2(K,D)\to\mathbb Q/\mathbb Z$. This proves the Statement without assuming a degree-zero global Ext comparison or vanishing of $H^3(G,\mathbb Z)$. [step 3.1, step 4.1, step 6.1, algebra] ∎
