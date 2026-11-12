---
title: Characteristic-zero coefficient vanishing and torsion freeness
status: published
research_item: lem-characteristic-zero-top-torsion
dependency_level: 14
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 5, Proposition 2.6; p. 6, characteristic-zero proof,
        multiplication-by-p sequence and final displayed isomorphism
      reading_limits: Read the frozen article extraction at Proposition 2.6 on printed
        p. 5 and its proof on printed p. 6, and inspected the supplied p. 6 PDF
        page image. The proof below uses the specified top-weight comparison
        draft supplier as an alternative route; it does not claim to reconstruct
        the article’s cdh argument. The added Choice and universe qualifications
        record the current supplier interfaces, not an assertion that these are
        printed hypotheses of the article. No original-article defect or library
        acceptance is asserted.
      statement: Proposition 2.6 asserts that H^{6,3}_mot(X,Z) is torsion-free for an
        affine threefold over an algebraically closed field. Its
        characteristic-zero proof chooses a primitive pth root, identifies
        H^{5,3}_mot(X,Z/p) with H^5_et(X,Z/p)=0, and uses the coefficient exact
        sequence to deduce primewise injectivity.
      hypotheses: "For the proof used here: k is an algebraically closed field of
        characteristic zero, X is an affine finite-type k-scheme of dimension
        three, and p is a prime. No smoothness, reducedness or irreducibility is
        assumed. The proposition statement is broader in characteristic; this
        item retains its characteristic-zero scope."
---

PDF p. 6: Proof of Proposition 2.6, multiplication by p sequence and conclusion

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root)
- [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison)
- [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine)
- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [lem-author-c5b0693f4fc3-top-torsion-primewise](item-lem-author-c5b0693f4fc3-top-torsion-primewise)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-ring-characteristic](https://alphabetamath.cc/item/def-ring-characteristic)
- [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)
- [math:thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity](https://alphabetamath.cc/item/thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity)
- [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · p. 5, Proposition 2.6; p. 6, characteristic-zero proof, multiplication-by-p sequence and final displayed isomorphism `](https://arxiv.org/abs/2610.22679v1)


## Statement

Assume the Axiom of Choice and fix compatible universe size bounds for the sites and derived-section constructions used below; existence of these bounds is a separate size assumption. Let $k$ be an algebraically closed field of characteristic zero and let $X$ be an affine threefold over $k$. For every prime $p$, choosing a primitive $p$th root of unity in $k$ gives an isomorphism
$$H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^5_{\mathrm{et}}(X,\mathbb Z/p)=0.$$
Consequently multiplication by $p$ is injective on $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ for every prime $p$, and this group is torsion-free.

Here affine threefold means $X=\operatorname{Spec}A$, with $A$ a finitely generated $k$-algebra and $\dim X=3$; no smoothness, reducedness, or irreducibility is assumed. Characteristic zero means that $n\cdot1_k\ne0$ for every positive integer $n$. The motivic groups are the cohomology of the Elmanto–Morrow weight-three complex, with finite coefficients formed by derived tensor product after evaluation. For a sheaf $F$ on the size-bounded small étale site of $X$, write $H^i_{\mathrm{et}}(X,F)=H^i(R\Gamma_{\mathrm{et}}(X,F))$, with $F$ concentrated in degree zero and $R\Gamma_{\mathrm{et}}$ the right derived functor of evaluation at $X$. The constant coefficient sheaf $\mathbb Z/p$ is the sheafification of the constant presheaf, rather than the assertion that every object has exactly $\mathbb Z/p$ as its sections. A primitive $p$th root has multiplicative order exactly $p$. Torsion-free means that no nonzero element is annihilated by a positive integer.

## Statement references

[def-article-conventions](item-def-article-conventions)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-etale-tate-coefficients](item-def-etale-tate-coefficients)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

## Facts & Assumptions

**Given:** An algebraically closed characteristic-zero field $k$, an affine finite-type $k$-scheme $X$ of dimension three, and a prime $p$, under the Choice and size assumptions in the Statement. The scheme and dimension conventions are those of [def-article-conventions](item-def-article-conventions).

**Goal:** Establish the displayed isomorphism and vanishing, the coefficient-sequence injectivity, and torsion-freeness.

[F1] [def-motivic-cohomology](item-def-motivic-cohomology) defines $C=\mathbb Z(3)_{\mathrm{mot}}(X)$, $H^{i,3}_{\mathrm{mot}}(X,\mathbb Z)=H^i(C)$, and $H^{i,3}_{\mathrm{mot}}(X,\mathbb Z/p)=H^i(C\otimes^{\mathbf L}\mathbb Z/p)$.

[F2] [thm-author-c5b0693f4fc3-top-torsion-topweight-comparison](item-thm-author-c5b0693f4fc3-top-torsion-topweight-comparison) gives, under the Choice and size assumptions, for finite-type $X$ over an algebraically closed field and weight $j\geq\dim X$, an equivalence from the actual finite-coefficient motivic complex to $R\Gamma_{\mathrm{et}}(X,\mu_p^{\otimes j})$ when $p$ is invertible in the field. No smoothness, reducedness or irreducibility hypothesis is imposed.

[F3] The coefficient assertion of [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root) says that a chosen primitive $p$th root $\zeta\in k$ induces an isomorphism of étale sheaves $\mathbb Z/p\xrightarrow{\sim}\mu_p^{\otimes3}$, sending $1$ to $\zeta^{\otimes3}$. Its additional ambient-slice assertion is not used here. [thm-author-c5b0693f4fc3-top-torsion-artin-affine](item-thm-author-c5b0693f4fc3-top-torsion-artin-affine) gives $H^i_{\mathrm{et}}(X,\mu_p^{\otimes3})=0$ for $i>\dim X$ under the present Choice, size, affine, finite-type and invertibility hypotheses.

[F4] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) supplies the exact sequence $H^5(C/p)\to H^6(C)\xrightarrow{p}H^6(C)$, where $C/p=C\otimes^{\mathbf L}\mathbb Z/p$. [lem-author-c5b0693f4fc3-top-torsion-primewise](item-lem-author-c5b0693f4fc3-top-torsion-primewise) says an abelian group is torsion-free if multiplication by every prime is injective.

[F5] [def-etale-tate-coefficients](item-def-etale-tate-coefficients) supplies the size-bounded small étale site, the constant ring sheaf $\mathbb Z/p$, the sheaf $\mu_p$ of $p$th roots of unity, and its tensor power $\mu_p^{\otimes j}$ over that ring sheaf. [def-derived-sections-on-sites](item-def-derived-sections-on-sites) defines $R\Gamma_{\mathrm{et}}$ and $H^i_{\mathrm{et}}$ on this chosen site, without identifying distinct sites or topologies.

[F6] The Axiom of Choice is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Use the universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with compatible nested bounds containing $\omega$, the schemes and small sites in use, and larger bounds for categories and presheaf values. Existence of these bounds is assumed separately from Choice. These are the standing construction assumptions of [F2], affine vanishing in [F3], and derived sections in [F5]; no simultaneous choice of a root for every prime is needed.

[F7] Characteristic zero has the meaning of [math:def-ring-characteristic](https://alphabetamath.cc/item/def-ring-characteristic), so $p\cdot1_k$ is nonzero and hence invertible in the field $k$. By [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria), $T^p-1$ splits over $k$. By [math:thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity](https://alphabetamath.cc/item/thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity), when the characteristic does not divide a positive integer $n$, any splitting field of $T^n-1$ contains exactly $n$ distinct roots and a primitive $n$th root. Since $T^p-1$ splits in $k$, the trivial extension $k/k$ itself is such a splitting field.

[F8] [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category) makes cohomology a functor on the derived category, so it sends equivalences to isomorphisms of abelian groups. The derived global sections in [F5] are also functorial, so a coefficient-sheaf isomorphism induces an isomorphism on étale cohomology.

## Proof

1.1 By [F7], $p$ is invertible in $k$ and a primitive $p$th root $\zeta\in k$ exists. Fix any such root. Apply [F2] with $j=3=\dim X$, under [F6]. Using [F1] and the cohomology functor in [F8] gives $H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^5_{\mathrm{et}}(X,\mu_p^{\otimes3})$. The inverse of the coefficient isomorphism in [F3], interpreted on the site of [F5] and passed through derived global sections, identifies this with $H^5_{\mathrm{et}}(X,\mathbb Z/p)$. This identification depends on $\zeta$. Affine étale vanishing in [F3] makes the twisted group zero because $5>3$, hence also the constant-coefficient group is zero. This proves the displayed isomorphism and vanishing. [given, F1, F2, F3, F5, F6, F7, F8, construct]

2.1 By [F1] and step 1.1, the first term $H^5(C/p)$ of the exact sequence in [F4] is zero. Exactness therefore makes multiplication by $p$ injective on $H^6(C)=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. The argument applies separately to each prime $p$ and does not choose roots simultaneously. The primewise criterion in [F4] now proves that this group is torsion-free. All assertions follow. [F1, F4, step 1.1] ∎
