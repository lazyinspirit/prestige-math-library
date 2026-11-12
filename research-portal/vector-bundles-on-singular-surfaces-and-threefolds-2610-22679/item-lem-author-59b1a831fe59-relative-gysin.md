---
title: The identified support fiber is the classical relative Hom before Gysin
status: published
research_item: lem-author-59b1a831fe59-relative-gysin
dependency_level: 18
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood)
- [lem-author-59b1a831fe59-actual-support](item-lem-author-59b1a831fe59-actual-support)
- [lem-author-59b1a831fe59-cancel-twists](item-lem-author-59b1a831fe59-cancel-twists)
- [thm-author-59b1a831fe59-classical-derived-input](item-thm-author-59b1a831fe59-classical-derived-input)
- [prop-smooth-pair-gysin-input](item-prop-smooth-pair-gysin-input)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)


## Statement
Let $k$ be a perfect field. Assume the Axiom of Choice. Fix compatible Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega,k\in\mathcal U$. All field, scheme and scheme-morphism data below lie in $\mathcal U$; the chosen scheme and site categories, including their covering-sieve categories, are $\mathcal V$-small. Coefficient complexes have $\mathcal V$-small abelian groups, and their categories are formed in $\mathcal W$. Retain compatible small representative categories and sites for the classical transfer and derived-category constructions. Existence of these bounds and any compatible enlargement required by the supplied point-support, classical derived-category and coefficient-cancellation constructions are separate hypotheses. The chosen models and comparison maps are assumed to satisfy these bounds compatibly; compatibility is not inferred merely from universe closure.

Let $X$ be a qcqs $k$-scheme of pure finite dimension $d\in\mathbb Z_{\geq0}$, and let $x\in X$ be a closed point at which $X\to\operatorname{Spec}k$ is smooth. Choose the supplied affine open neighbourhood $V$ of $x$, smooth, separated and finite type over $k$, and pure of dimension $d$. Put $U=V\setminus\{x\}$ with its open-subscheme structure and $L=\kappa(x)$. The neighbourhood construction gives $L/k$ finite separable and makes $Z=\operatorname{Spec}L$ a smooth $k$-scheme, closed in $V$ with pure codimension $d$.

For $j\geq0$, write $C_j(T)=\mathbb Z(j)_{\mathrm{mot}}(T)$ for the specified unshifted Elmanto–Morrow coefficient complex and $C_{j,x}(V)=\operatorname{fib}(C_j(V)\to C_j(U))$ for the coherent restriction fiber. For every $i\in\mathbb Z$ and $j\geq0$, the actual point-supported cohomology is
$$H^i(C_{j,x}(V))\cong\operatorname{Hom}_{DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)}\bigl(\operatorname{cofib}(M(U)\to M(V)),\mathbb Z(j)[i]\bigr).$$
Here $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$ is the supplied bounded-above effective localization of Nisnevich sheaves with transfers; $M(T)$ is the image of the transfer-representable sheaf $\mathbb Z_{\mathrm{tr}}(T)$, and $\mathbb Z(j)$ on the right is its classical coefficient. The relative motive is the image of the actual cochain cone of $\mathbb Z_{\mathrm{tr}}(U)\to\mathbb Z_{\mathrm{tr}}(V)$, not an independently chosen quotient evaluation. The smooth-pair Gysin input applies to this exact first arrow and identifies its cofiber, by a compatible isomorphism, with $M(\operatorname{Spec}L)(d)[2d]$. The twist $(d)$ is the nonnegative Tate tensor twist, and $[n]$ is cohomological translation with $A[n]^q=A^{q+n}$.

For $j\geq d$, coefficient cancellation therefore computes the group as $H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z)$, where field notation means evaluation on $\operatorname{Spec}L$. No Gysin statement for singular closed subschemes is used, and no cancellation into negative effective weights is asserted.

## Facts & Assumptions
**Given:** Exactly the field, scheme, point, neighbourhood, residue field, complement, integer indices, Choice and compatible size data of the Statement.

**Goal:** Supply the exact classical relative-object interpretation before applying the imported Gysin triangle.

[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) are used with the separately assumed compatible bounds in the Statement. For [F1] and [F2], retain the scheme and site bounds, small representative sites and larger category bounds of the neighbourhood, actual-support and classical derived-category constructions. For the field comparison in [F3], retain additionally the cancellation supplier's exact nested-universe and coefficient bounds: $\mathcal U\in\mathcal V\in\mathcal W$, $\omega,k\in\mathcal U$, all field and scheme data in $\mathcal U$, coefficient data in $\mathcal V$ and categories formed in $\mathcal W$, with existence and compatible enlargement separately assumed. These are the bounds of the selected motivic-cohomology realization, retained also when using [F4]. Choice is used when invoking the neighbourhood and actual-support constructions, the classical derived-category model and the coefficient comparison. The Hom/fiber and shift calculations add no further choice or size-existence assertion.

[F0] [def-article-conventions](item-def-article-conventions) supplies schemes over $k$, qcqs and chain dimension; the explicitly stated perfect-field hypothesis replaces its default algebraically closed convention. [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field) defines perfectness. Pure dimension $d$ means that every irreducible component, that is, every maximal irreducible closed subset, has chain dimension $d$. Smoothness at $x$ and of the structure morphisms is as in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). Relative separatedness and finite type are those of [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Closed means $\{x\}$ is closed in the underlying topology by [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), and $L=\mathcal O_{V,x}/\mathfrak m_x$ by [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point). The neighbourhood and complement carry the restricted structure sheaves of [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Pure codimension $d$ here means that the point has codimension $d$ in each containing irreducible component of $V$, measured by chains from the point to that component.

[F1] [lem-author-59b1a831fe59-actual-support](item-lem-author-59b1a831fe59-actual-support) supplies the specified EM complexes, their enhanced target and an equivalence of the actual EM and fixed-site classical restriction diagrams. [thm-author-59b1a831fe59-classical-derived-input](item-thm-author-59b1a831fe59-classical-derived-input) supplies the transfer sheaves, classical coefficients, natural derived Yoneda model, bounded-above effective localization, A¹-local target interpretation and nonnegative Tate tensor convention. In particular its cone-to-fiber formula uses the actual cochain cone and a compatible scalar derived-Hom complex, not just separately chosen isomorphisms of cohomology groups.

[F2] [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood) gives the chosen affine neighbourhood, verifies both smoothness conditions and pure codimension, and supplies the finite separable residue extension and qcqs open complement. [prop-smooth-pair-gysin-input](item-prop-smooth-pair-gysin-input) supplies the Gysin cofiber for precisely this perfect-field smooth separated finite-type pair, including a compatible isomorphism from any cone triangle with the same first arrow. It does not assert uniqueness of that isomorphism from the triangulated axioms alone.

[F3] [lem-author-59b1a831fe59-cancel-twists](item-lem-author-59b1a831fe59-cancel-twists) supplies the precise coefficient comparison for $j\geq d$, including the classical-to-EM field comparison. [def-supported-complex-indexing](item-def-supported-complex-indexing) fixes cohomology, the signed cochain cone, the unshifted fiber and cohomological translation; no spectral $[2j]$ shift is applied here.

[F4] [def-motivic-cohomology](item-def-motivic-cohomology) defines $H^{a,r}_{\mathrm{mot}}(T,\mathbb Z)=H^a(C_r(T))$ in nonnegative weight. Write $H^{a,r}_{\mathrm{mot}}(L,\mathbb Z)$ for this group on $T=\operatorname{Spec}L$. In the application $r=j-d\geq0$.

## Proof
1.1 The data in [F0] and the neighbourhood checks in [F2] put the actual pair in the domains of [F1]. In the derived category of Nisnevich sheaves with transfers, let $f:\mathbb Z_{\mathrm{tr}}(U)\to\mathbb Z_{\mathrm{tr}}(V)$ be the actual map and let $D=\operatorname{Cone}(f)$. Both representables, and hence this two-term cone, are bounded above. Resolve the A¹-local coefficient by the derived-Hom model in [F1]. Yoneda evaluation on that resolution makes the two Hom complexes the classical values on $V$ and $U$, with the actual restriction between them; the natural topology comparison in [F1] identifies them with the fixed-site classical diagram in the actual-support comparison. The cone-to-fiber formula of [F1], with the convention in [F3], identifies $R\operatorname{Hom}(D,\mathbb Z(j))$ with this restriction fiber, hence with the already identified EM support fiber. Taking degree-$i$ cohomology, boundedness above and A¹-locality of the target identify these derived Hom groups with the displayed groups in $DM$, by the localization property in [F1]. No unrelated objectwise equivalences have entered this construction. [A1, F0, F1, F2, F3]

2.1 In $DM$, the image of $D$ is a cofiber of $M(U)\to M(V)$, the same first arrow as in [F2]. Its Gysin cofiber is therefore compatibly isomorphic to $M(\operatorname{Spec}L)(d)[2d]$; no uniqueness of cone is asserted from the triangulated axioms alone. Substitute this isomorphism in step 1.1. For $j\geq d$, apply [F3] to obtain exactly the stated residue-field group with the notation of [F4]. For $0\leq j<d$, the relative-Hom identification of step 1.1 still holds, but this coefficient cancellation is not invoked. This proves the Gysin/coefficient route for the actual support fiber, with its full scope checked before use. [A1, F2, F3, F4, step 1.1] ∎
