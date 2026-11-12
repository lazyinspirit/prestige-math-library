---
title: Bounded finite-projective complexes and affine chain models
status: published
research_item: lem-author-4f716d60801a-finite-projective-model
dependency_level: 3
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)
- [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)
- [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic)
- [thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice and the fixed compatible Grothendieck universes containing the data and $\omega$ used by the unbounded derived enhancement. For a commutative unital ring $A$, degreewise associated sheaf and global sections give inverse equivalences between bounded complexes of finitely generated projective $A$-modules and bounded complexes of finite locally free sheaves on $\operatorname{Spec}A$, preserving chain maps, homotopies, shifts and cones. A bounded complex $P$ of projective modules is K-projective: every map from $P$ to an acyclic complex is nullhomotopic, including after any shift of the target. Thus its derived morphisms are chain maps modulo homotopy, and the differential graded category of bounded finite-projective complexes models the full enhanced ring-perfect subcategory.

More precisely, all complexes here are cochain complexes and bounded means zero outside a finite interval. Let $\mathcal C_A$ be the dg category of bounded finite-projective complexes with the Hom complexes specified below. The functor $N_{\mathrm{dg}}\mathcal C_A\to\mathcal D(A)$ induced by inclusion and derived localization is fully faithful with essential image the objects perfect in the ordinary derived category. The ordinary category of the same complexes, localized as an infinity-category at quasi-isomorphisms, gives this same model. For any bounded projective $P$ and any complex $Q$, the cochain complex $\underline{\operatorname{Hom}}_A(P,Q)$ computes derived Hom from $P$, and in particular $H^0\underline{\operatorname{Hom}}_A(P,Q)=\operatorname{Hom}_{D(A)}(P,Q)$. Here computing derived Hom means that $\underline{\operatorname{Hom}}_A(P,Q)\to\underline{\operatorname{Hom}}_A(P,I_Q)$ is a quasi-isomorphism for a fibrant replacement $Q\to I_Q$ in the supplied derived construction.

## Statement references
[math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

[lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)

[math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)

[math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic)

[thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Facts & Assumptions
**Given:** $A$, bounded projective $P$, arbitrary $Q$ and acyclic $N$; Choice and the fixed universe assumptions as stated. Existence of these universes is a separate assumption, not a consequence of Choice.

**Goal:** Establish the affine chain model, its derived Hom calculation and the actual enhanced comparison.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained for the affine equivalence and the imported unbounded resolution constructions. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) and [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) specify the compatible size bounds. The finite homotopy construction below makes only finitely many lift selections.

[F1] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) gives the additive termwise equivalence between finite projectives and finite locally free sheaves, with its natural unit and counit.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the unbounded derived localization, cochain maps and homotopies, cohomology, quasi-isomorphisms and cochain cone convention. The current Statement of [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) explicitly supplies exactness of associated sheaf and preservation of quasi-isomorphisms.

[F3] [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) defines ring-perfect objects by bounded finite-projective representatives up to derived isomorphism. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) supplies the lifting property for arbitrary projective terms, without a finite-generation hypothesis.

[F4] Use $C^\sharp_n=C^{-n}$, $d^\sharp_n=d_C^{-n}$ to translate [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes) and [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) to cochains. Explicitly, $\underline{\operatorname{Hom}}_A(P,Q)^r=\prod_n\operatorname{Hom}_A(P^n,Q^{n+r})$, with $(\delta u)^n=d_Q^{n+r}u^n-(-1)^r u^{n+1}d_P^n$. Its cochain degree $r$ is the published Hom chain degree $-r$. Composition is $(vu)^n=v^{n+r}u^n$ for $u$ of degree $r$; identities are degree-zero identity maps. These operations are associative and satisfy $\delta(vu)=(\delta v)u+(-1)^{\deg v}v\delta u$ by substitution, giving the stated dg category. Shifts are $Q[s]^n=Q^{n+s}$ with differential $(-1)^s d_Q$, and $\operatorname{Cone}(f)^n=E^n\oplus C^{n+1}$ with $d(e,c)=(d_Ee+fc,-d_Cc)$ for $f:C\to E$. The published cone criterion [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic) applies under this same reindexing. The degree-zero cocycles of the Hom complex are exactly cochain maps; its degree-zero boundaries are exactly maps $dh+hd$, so its $H^0$ is cochain maps modulo homotopy.

[F5] [thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input) supplies the dg nerve, invariance of its mapping spaces under Hom quasi-isomorphisms, the reflective comparison to the specified $\mathcal D(A)$ using $Q\to I_Q$, and the ordinary-category localization comparison under identity-cylinder closure. These are the precise enhanced inputs used below; they do not assert the perfect-model conclusion in advance.

## Proof
1.1 Apply [F1] termwise: naturality makes the unit and counit commute with differentials, while additivity preserves the equations for maps and homotopies and the signed shift and cone matrices of [F4]. Finite sums of projectives are projective by lifting each summand separately, and finite generation is preserved by taking the finite union of generating sets. Thus this is an equivalence of the indicated complex categories, preserving those constructions; exactness in [F2] preserves quasi-isomorphisms. For a cochain map $f:P\to N$, choose $b$ with $P^n=0$ for $n>b$ and start with $h^{b+1}=0$. Descending through the finite nonzero range of $P$, suppose the homotopy equation is already satisfied in degree $n+1$. Put $r^n=f^n-h^{n+1}d_P^n$. Then $d_Nr^n=f^{n+1}d_P^n-d_Nh^{n+1}d_P^n=h^{n+2}d_P^{n+1}d_P^n=0$. Hence $r^n$ factors through $Z^n(N)=\ker d_N^n$. Acyclicity makes $d_N^{n-1}:N^{n-1}\to Z^n(N)$ surjective; projectivity in [F3] lifts $r^n$ to $h^n:P^n\to N^{n-1}$. Below the lowest nonzero degree put $h^n=0$; the remaining equations have zero source. This proves $f=dh+hd$. Apply it to $N[r]$ for each integer $r$: a Hom cocycle $u$ of degree $r$ is a map $P\to N[r]$, and a nullhomotopy $h$ for that map gives $u=\delta((-1)^r h)$. Thus $\underline{\operatorname{Hom}}_A(P,N)$ is acyclic. [A1, F1, F2, F3, F4, given, construct, algebra]

2.1 For a quasi-isomorphism $q:Q\to R$, [F4] gives an acyclic cone. Direct substitution into the displayed Hom and cone differentials identifies $\underline{\operatorname{Hom}}_A(P,\operatorname{Cone}(q))$ with $\operatorname{Cone}(\underline{\operatorname{Hom}}_A(P,q))$: in degree $r$ both consist of pairs $(a^n:P^n\to R^{n+r},b^n:P^n\to Q^{n+r+1})$ and have differential $(\delta a+qb,-\delta b)$. Step 1.1 and the cone criterion therefore make $\underline{\operatorname{Hom}}_A(P,q)$ a quasi-isomorphism. In particular use the unit $Q\to I_Q$ from [F5]. The natural comparison of mapping spaces factors as $\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,Q)\to\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,I_Q)\simeq\operatorname{Map}_{\mathcal D(A)}(LP,LQ)$. The first arrow is an equivalence by the Hom quasi-isomorphism and [F5], and the second is its localization adjunction. This proves enhanced full faithfulness for $\mathcal C_A$, with the actual localization functor and coherent compositions, as well as the asserted derived Hom computation. In particular its $H^0$ description follows from [F4] and [F2]. Every perfect derived object is isomorphic to such a representative by [F3]; an isomorphism in the homotopy category is an equivalence in the enhancement. This gives the stated essential image without replacing a mapping-space argument by a morphism-set calculation. Finally a quasi-isomorphism $q:P\to Q$ between bounded projectives is a homotopy equivalence: the established Hom quasi-isomorphism for source $Q$ supplies $g:Q\to P$ with $qg\simeq\mathrm{id}_Q$, and injectivity on $H^0$ for source $P$ then gives $gq\simeq\mathrm{id}_P$. Conversely homotopy equivalences are quasi-isomorphisms because homotopic maps have the same action on cohomology. Identity mapping cylinders remain in $\mathcal C_A$: their terms are finite sums of terms of $P$ and its shift, as seen from $P\oplus\operatorname{Cone}(\mathrm{id}_P)$. Thus [F5] identifies the ordinary quasi-isomorphism localization with its dg nerve and hence with the same full enhanced perfect subcategory. Choice and the separate universe assumptions enter through [A1] and [F5]; no additional infinite choice was used in step 1.1. [A1, F2, F3, F4, F5, step 1.1, construct, algebra] ∎
