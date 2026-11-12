---
title: The actual smooth restriction arrow gives the point-supported cycle fiber
status: published
research_item: lem-author-59b1a831fe59-actual-support
dependency_level: 16
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood)
- [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input)
- [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, large enough for the scheme and site data, and larger bounds for their categories. Existence of these bounds is a separate hypothesis. Let $k$ be a perfect field, let $V$ be a smooth separated finite-type $k$-scheme, let $x\in V$ be a closed point, set $L=\kappa(x)$, and put $U=V\setminus\{x\}$ with its open-subscheme structure. These hypotheses include the affine neighbourhoods furnished by the smooth-point neighbourhood construction.

For $j\geq0$, write $C_j(T)=\mathbb Z(j)_{\mathrm{mot}}(T)$ for the specified unshifted Elmanto–Morrow (EM) coefficient complex, and $C_{j,x}(V)=\operatorname{fib}(C_j(V)\to C_j(U))$. Work in the derived infinity-category $\mathrm D(\mathbb Z)$ of unbounded cochain complexes of abelian groups localized at quasi-isomorphisms, retaining coherent maps and homotopies. An arrow diagram is a functor from the category $0\to1$ to this target; equivalence means equivalence in that functor infinity-category. Let $z^j(T,\bullet)$ be Bloch's unnormalized cycle complex and $z_x^j(V,\bullet)$ its subcomplex with set-theoretic support on $\{x\}\times_k\Delta_k^\bullet$. Homological degree $n$ is cochain degree $-n$ before shifting; $A[m]^q=A^{q+m}$ with differential $(-1)^m d_A$.

The actual restriction arrow $C_j(V)\to C_j(U)$ is equivalent, as an arrow diagram, to
$$[z^j(V,\bullet)[-2j]\longrightarrow z^j(U,\bullet)[-2j]].$$
Its fiber is therefore equivalent to $z_x^j(V,\bullet)[-2j]$, compatibly with the projection to the source of each arrow. The same diagram identifies the arrow with the classical coefficient restriction $R\Gamma_{\mathrm{Zar}}(V,\mathbb Z(j)|_{V_{\mathrm{Zar}}})\to R\Gamma_{\mathrm{Zar}}(U,\mathbb Z(j)|_{V_{\mathrm{Zar}}})$, using the fixed-site MVW coefficient complex. These comparisons occur before taking cohomology. No hypothesis that $k$ be finitely generated over its prime field is required, and no compatibility between different ambients or weights is asserted.

## Facts & Assumptions
**Given:** The field $k$, scheme $V$, closed point $x$, residue field $L$, open complement $U$, nonnegative weight $j$, and the Choice and universe hypotheses in the Statement.

**Goal:** Compare the actual restriction arrows and their support projections before taking cohomology.

[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the bounds of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) discharge the inherited hypotheses of [F0]–[F5] at their uses below. Universe existence is separately assumed. No additional objectwise choice of inverses or fiber models is used.

[F0] [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field) supplies perfectness; [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-classical](https://alphabetamath.cc/item/def-smooth-morphism-classical), [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) specify the $k$-scheme and its smooth separated finite-type structure morphism. By [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme), closed means that $\{x\}$ is closed in $|V|$. By [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), $L=\kappa(x)=\mathcal O_{V,x}/\mathfrak m_x$. No rationality of $x$ is assumed.

[F1] [thm-author-8a080e7d9445-em-regular-input](item-thm-author-8a080e7d9445-em-regular-input) gives the natural EM-to-cdh transformation on qcqs prime-field schemes and its equivalence on regular Noetherian schemes for every nonnegative weight. Its local applicability conclusion verifies that a smooth finite-type $k$-scheme and every open in it are regular Noetherian and qcqs after forgetting to the prime field, without finite type over that prime field.

[F2] [thm-author-8a080e7d9445-open-natural-classical-input](item-thm-author-8a080e7d9445-open-natural-classical-input) gives, for each nonnegative weight on the single fixed ambient $S=V$, the coherent BEM comparison of the cdh functor with cycles and the MVW classical coefficient zigzag on its entire open diagram. It specifies the enhanced functor category, fixed-site derived sections and actual open restrictions used here. The same supplier specifies the classical coefficient complex; it is not an independently chosen object on each open.

[F3] [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) supplies the unnormalized Bloch complex, its admissible generators and alternating face boundary. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) supplies the fixed-support subcomplex and its quasi-isomorphism to the actual restriction fiber, by its stated localization input. [def-supported-complex-indexing](item-def-supported-complex-indexing) fixes cohomological reindexing, shifts, fiber models and their support-to-global projections.

[F4] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), applied to the ring $\mathbb Z$, supplies the stable derived infinity-category, coherent finite limits and the signed cone cofiber model. Its stability identifies pullback and pushout squares. A fiber here is the pullback of $A\to B\leftarrow0$, including its projection to $A$; thus a coherent equivalence of these spans transports the limiting cone and its projection by the pullback universal property. The cochain shift $[m]$ has inverse $[-m]$ and transports these universal properties as well.

[F5] [def-cohomology-with-support](item-def-cohomology-with-support) fixes $C_j(T)=\mathbb Z(j)_{\mathrm{mot}}(T)$ and the actual support restriction convention, distinguished from its spectral $[2j]$ shift. [lem-author-59b1a831fe59-neighborhood](item-lem-author-59b1a831fe59-neighborhood) supplies smooth affine separated finite-type neighbourhoods with a closed point over perfect $k$ in the intended excision application; hence these neighbourhoods satisfy the geometric hypotheses of the Statement. This is the use of that supplier, rather than an assumption that every $V$ has already been introduced elsewhere.

## Proof
1.1 Under [A1], the hypotheses in [F0] meet the smooth finite-type applicability conclusion of [F1]. It verifies regularity, Noetherianity and qcqs for $V$ and its open complement $U$, regarded over the prime field. Restrict the natural transformation in [F1] to their actual open arrow. Apply [F2] on the single ambient $S=V$, restricting its equivalences to the opens $V$ and $U$. Its MVW coefficient diagram is equivalent to the cycle diagram, whose arrow is actual restriction. Compose these equivalences in the enhanced functor category of arrows of [F2] and [F4], using the complex conventions of [F3] and [F5]. Inverses are taken there, preserving coherent restriction data. This proves both asserted arrow comparisons in every nonnegative weight. The neighbourhoods supplied in [F5] meet these same hypotheses, so the comparison applies to the intended excision pairs as well. [A1, F0, F1, F2, F3, F4, F5, given]

2.1 Extend the arrow equivalences of step 1.1 to the spans obtained by adjoining the zero object. The coherent inverse equivalences of spans transport their limiting cones to one another by [F4], so their fibers and source projections are equivalent. For the cycle restriction, apply [F3] to the closed subset $\{x\}\subset V$: its kernel subcomplex maps by a quasi-isomorphism to the specified homotopy-fiber model, with projection equal to its inclusion in $z^j(V,\bullet)$. Reindex homological degree $n$ as cochain degree $-n$ and shift by $[-2j]$. Reindexing identifies the displayed chain fiber model with the cochain model of [F3], and the shift is an equivalence with inverse $[2j]$, so these operations preserve the fiber and projection. This gives $C_{j,x}(V)\simeq z_x^j(V,\bullet)[-2j]$ with the claimed support-to-global compatibility. Taking fibers along the classical intermediate in [F2] gives the same actual classical restriction fiber before cohomology. None of these operations imposes finite generation of $k$ over its prime field or compares choices for different ambients or weights. [A1, F2, F3, F4, F5, step 1.1] ∎
