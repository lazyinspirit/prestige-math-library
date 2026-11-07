---
id: thm-arithmetic-fundamental-group-sequence-is-exact
kind: theorem
title: Exactness of the arithmetic étale fundamental-group sequence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-arithmetic-fundamental-group-extension
  - def-axiom-of-choice
  - lem-finite-etale-cover-of-curve-over-algebraic-closure-descends-to-finite-extension
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - lem-finite-etale-algebra-module-presentation-and-rank
  - lem-etale-residue-extensions-finite-separable
  - thm-etale-over-algebraically-closed-field-discrete-smooth-points
  - thm-structure-theorem-for-artinian-rings
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-galois-closures-exist-and-are-minimal
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-finite-stable-base-change-composition
  - lem-etale-stable-base-change-composition
  - thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, Introduction, pp. 137–138
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
    - title: Jakob Stix, On the period-index problem in light of the section conjecture, §1.1
      url: https://arxiv.org/pdf/0802.4125
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $C/k$ be a smooth geometrically connected curve, and choose the algebraic closure and geometric basepoint used to define its arithmetic fundamental-group sequence. Then

$$
1\longrightarrow \pi_1^{\mathrm{et}}(C_{\bar k},\bar c)\longrightarrow \pi_1^{\mathrm{et}}(C,\bar c)\xrightarrow{p_C}G_k\longrightarrow 1
$$

is exact as a sequence of profinite groups.

## Statement references

[Tamagawa, arithmetic fundamental-group sequence, Introduction](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[Stix, exact sequence and section map, §1.1](https://arxiv.org/pdf/0802.4125)

[[def-arithmetic-fundamental-group-extension]]

[[lem-finite-etale-cover-of-curve-over-algebraic-closure-descends-to-finite-extension]]


## Facts & Assumptions

**Given:** AC, the field $k$, its algebraic closure $\bar k$, the smooth geometrically connected curve $C/k$, and the compatible geometric basepoint. Write $\Pi=\pi_1^{\mathrm{et}}(C)$, $\Delta=\pi_1^{\mathrm{et}}(C_{\bar k})$, and $j:\Delta\to\Pi$ for the pullback-induced map.

[F1] [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]] identifies finite étale covers and their geometric fibres with finite continuous fundamental-group sets, with connected covers corresponding to transitive actions. The groups are profinite.

[F2] [[lem-finite-etale-galois-refinements-and-quotients]] provides connected Galois refinements with regular geometric fibres, finite connected-component decompositions, and faithful geometric fibres. Morphisms of finite étale covers are finite étale.

[F3] [[lem-finite-etale-cover-of-curve-over-algebraic-closure-descends-to-finite-extension]] descends every specified finite diagram of geometric covers and cover morphisms to a finite Galois field extension.

[F4] [[thm-effective-fpqc-descent-of-finite-etale-covers]] descends finite étale covers and their maps along faithfully flat quasi-compact covers.

[F5] [[lem-finite-etale-algebra-module-presentation-and-rank]], [[lem-etale-residue-extensions-finite-separable]], [[thm-etale-over-algebraically-closed-field-discrete-smooth-points]], and [[thm-structure-theorem-for-artinian-rings]] give the finite étale algebra criterion, separable residue extensions and finite-dimensional reduced algebra decompositions.

[F6] [[thm-primitive-element-theorem-for-finite-separable-extensions]] and [[thm-chinese-remainder-theorem-for-comaximal-ideals]] give primitive presentations of finite separable extensions and the product decomposition of a split separable polynomial algebra. [[thm-galois-closures-exist-and-are-minimal]] puts every finite separable extension inside a finite Galois extension. An algebraic extension is purely inseparable over its maximal separable subextension by [[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]].

[F7] [[lem-finite-stable-base-change-composition]] and [[lem-etale-stable-base-change-composition]] give stability of finite étale morphisms under base change and composition.

[F8] The maps in [[def-arithmetic-fundamental-group-extension]] come from pullback on finite étale covers. AC is [[def-axiom-of-choice]], and is retained through the cover-classification and descent suppliers.

## Proof

1.1 First identify the field fundamental group, rather than assume an arithmetic exact sequence. A finite étale $k$-algebra $A$ is a product of finite separable field extensions. Indeed it is finite dimensional and hence Artinian, and $A\otimes_k\bar k$ is a product of copies of $\bar k$ by [F5]; faithful scalar extension shows $A$ is reduced. The reduced Artinian decomposition gives field factors, and their residue extensions are separable by [F5]. Conversely, for a finite separable field extension $L/k$, a primitive presentation has minimal polynomial with invertible derivative in $L$. Its algebra is finite free and has zero differentials, so [F5] makes it finite étale. Products give the same assertion for finite products of separable extensions. Such algebras split over a finite Galois subextension of $\bar k$. [F5, F6, given, algebra]

1.2 Let $Y\to C_{\bar k}$ be any finite étale cover. By [F3], it descends to $Y_L\to C_L$ over some finite Galois $L/k$. The composite $Z=Y_L\to C_L\to C$ is finite étale by [F7]. The decomposition $L\otimes_k\bar k=\prod_{\sigma:L\hookrightarrow\bar k}\bar k$ identifies $Z_{\bar k}$ with the disjoint union of the conjugate covers; the summand for the chosen inclusion is $Y$. Every nonidentity $\delta\in\Delta$ acts nontrivially on some such geometric fibre by the defining fibre-functor automorphism convention. Its action on the corresponding summand of the fibre of $Z_{\bar k}$ is the restriction of the action of $j(\delta)$ on $Z$, so $j(\delta)\ne1$. This proves injectivity. The map $j$ is continuous by [F8], and its image is compact and thus closed in $\Pi$. [F1, F3, F6, F7, F8, construct, algebra]

2.1 For finite Galois $L/k$ with group $G$, a primitive presentation and [F6] give $L\otimes_kL\cong\prod_{\sigma\in G}L$: the polynomial factors into its distinct conjugate roots, and the overlap maps are the corresponding $G$-action maps. Thus descent of a finite constant $L$-scheme is precisely a finite $G$-set, since the overlap cocycle is the group action law. By [F4] every such set descends, and equivariant maps descend as well. It follows also directly that automorphisms of the geometric fibre functor on finite étale $k$-schemes are exactly $G_k$. In fact their values at the chosen inclusions $L\hookrightarrow\bar k$ give compatible automorphisms of all finite Galois $L/k$; naturality for their field automorphisms and inclusions determines the action on every finite fibre. Conversely an automorphism of $\bar k/k$ acts on every fibre by composition. The compatible automorphisms define an automorphism on $k^s$, which extends uniquely to $\bar k$: every element of $\bar k$ has some purely inseparable power in $k^s$, and its prescribed image is the unique root of the transformed power equation. Thus $\pi_1(\operatorname{Spec}k)=G_k$, topologically as well: the finite fibres of the Galois extensions give precisely the finite Galois restriction topology. In particular $G_k$ is profinite by [F1]. [F1, F4, F6, step 1.1, construct, algebra]

3.1 The finite étale constant cover $C_L\to C$ is connected for every finite Galois $L/k$, since $C$ is geometrically connected. Its geometric fibre is the regular $G$-set. By [F1] its $\Pi$-action is transitive; by step 2.1 it is obtained by restricting that regular action along $p_C:\Pi\to G_k$. Hence $p_C$ surjects onto every finite Galois quotient $G$. Its image is dense in $G_k$ and is also compact, being the continuous image of the profinite group $\Pi$. A compact subset of the Hausdorff group $G_k$ is closed, so $p_C$ is surjective. [F1, F7, F8, step 2.1, given, algebra]

3.2 The geometric base change of every constant cover is a disjoint union of copies of $C_{\bar k}$. Consequently $\Delta$ acts trivially on its fibre. The constant covers for finite Galois $L/k$ detect all finite restriction coordinates of $G_k$ by step 2.1, so $p_Cj=1$. Thus $j(\Delta)\subseteq\ker p_C$. [F1, step 2.1, step 1.2, algebra]

3.3 For a finite étale $Z\to C$, let $S$ be the finite set of connected open-and-closed components of $Z_{\bar k}$, using [F2]. Descend the finite diagram of these components, their inclusions and their disjoint-union isomorphism to one finite Galois $L/k$ by [F3]. The resulting pieces of $Z_L$ are geometrically connected, because their $\bar k$-base changes are the specified connected components; they are therefore exactly the connected components of $Z_L$. Its natural $\operatorname{Gal}(L/k)$-descent action permutes them and gives an action on $S$. By step 2.1 and [F4], this action descends the constant $S$-scheme over $L$ to a finite étale $k$-scheme $E$. On each component of $Z_L$ take its structure map to the corresponding copy of $C_L$ in $\coprod_SC_L$. These maps commute with the descent actions, so [F4] descends them to a cover morphism $q:Z\to C\times_kE$. On the geometric fibre this is the map to $S$ whose fibres are the $\Delta$-orbits: [F1] identifies the connected covers over $C_{\bar k}$ with transitive geometric actions. The $\Pi$-action on $S$ factors through $G_k$, since the quotient cover is constant. The argument includes the empty cover, with $S$ and $E$ empty. [F1, F2, F3, F4, step 2.1, construct]

4.1 Let $\gamma\in\ker p_C$ and take any connected pointed Galois cover $Z\to C$. Its fibre is a regular finite quotient $\Pi/U$ by [F1] and [F2]. In the quotient map of step 3.3, $\gamma$ fixes the image of every fibre point because it acts trivially on $S$ through $G_k$. For the chosen point there is therefore $\delta\in\Delta$ with $\gamma\cdot z=j(\delta)\cdot z$. Regularity gives $\gamma U=j(\delta)U$. The finite Galois quotient actions are cofinal among the finite-fibre coordinates of $\Pi$ by [F2]. Hence $\gamma$ belongs to $j(\Delta)U$ for every open normal subgroup $U$ in a neighbourhood basis of $1$. Their intersection is the closure of $j(\Delta)$, which equals $j(\Delta)$ by step 1.2. Thus $\ker p_C\subseteq j(\Delta)$. No normality of the geometric image was presumed in constructing the component quotient. [F1, F2, step 1.2, step 3.3, given, algebra]

5.1 Steps 3.2 and 4.1 identify $j(\Delta)$ with $\ker p_C$, so this image is normal. Together with step 1.2 and surjectivity from step 3.1 this proves exactness. The continuous injection $j$ is a closed embedding, since its source is compact and its target Hausdorff; the induced continuous bijection $\Pi/j(\Delta)\to G_k$ is an isomorphism of profinite groups for the same compact-Hausdorff reason. This proves the full stated sequence with the AC use in [F8]. [F8, step 3.1, step 1.2, step 3.2, step 4.1, algebra] ∎
