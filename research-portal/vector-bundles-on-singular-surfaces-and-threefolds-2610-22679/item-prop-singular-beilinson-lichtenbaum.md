---
title: Singular Beilinson–Lichtenbaum input
status: published
research_item: prop-singular-beilinson-lichtenbaum
dependency_level: 16
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 6, proof of Proposition 2.6, displayed singular
        Beilinson–Lichtenbaum comparison citing BEM Corollary 7.20; proposition
        hypotheses on printed p. 5
      statement: In the characteristic-zero proof of Proposition 2.6, the article uses
        a chosen primitive pth root of unity to write the weight-three mod-p
        cdh-motivic complex as L_cdh tau^{<=3} RΓ_et(-, Z/p). The present
        all-qcqs formulation and specified slice maps are a local composition of
        the declared suppliers, rather than an assertion that the article
        specifies those site and universe conventions.
      hypotheses: The article applies the formula to an affine threefold over an
        algebraically closed characteristic-zero field k, with p prime and a
        chosen primitive pth root in k. The present comparison itself needs only
        a characteristic-zero field containing that chosen root, together with
        the explicit Choice and universe assumptions of its suppliers;
        affineness and dimension enter later article applications.
      reading_limits: "Historical reading record retained from the incoming generated
        item: For this repair, read the extracted proposition and proof on
        printed pp. 5–6 and visually checked the formula and root qualification
        in the supplied page-6 PDF image. This does not review the other
        vanishing or descent assertions in that proof. Separately read the
        current direct supplier bodies and checked the served BEM Corollary 7.20
        statement and short proof, Theorem 7.5 statement and short proof,
        Definition 7.8 and Remark 7.9. Deep motivic and derived foundations
        remain imported through the declared suppliers; no immutable BEM source
        snapshot or reconstruction is claimed. This maintenance pass read the
        current consumer and declared supplier interfaces; it claims no fresh
        primary-source or page-image reading and no independent acceptance."
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)
- [lem-author-2ac325480ae8-slice-localization](item-lem-author-2ac325480ae8-slice-localization)
- [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root)
- [lem-author-2ac325480ae8-truncated-root-map](item-lem-author-2ac325480ae8-truncated-root-map)
- [lem-author-2ac325480ae8-motivic-restriction-coefficients](item-lem-author-2ac325480ae8-motivic-restriction-coefficients)
- [thm-author-2ac325480ae8-bem-finite-comparison](item-thm-author-2ac325480ae8-bem-finite-comparison)
- [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)
- [math:thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity](https://alphabetamath.cc/item/thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity)


## Statement
Assume the Axiom of Choice and compatible universe bounds for the small étale sites, big cdh sites, slices and products in the supplied constructions. Let $k$ be a characteristic-zero field, let $p$ be a prime, and choose a primitive $p$th root $\zeta\in k$ (in particular this can be done for the article’s algebraically closed $k$). On all qcqs $k$-schemes there is the specified natural equivalence
$$\mathbb Z(3)_{\rm cdh}/p\simeq L_{\rm cdh,k}\tau^{\leq3}R\Gamma_{\rm et}(-,\mathbb Z/p).$$
Here the left side is the restriction of the actual EM cdh-local weight-three complex on qcqs $\mathbb Q$-schemes, with its objectwise derived quotient; $L_{\rm cdh,k}$ is BEM big-site complex-valued cdh localization on qcqs $k$-schemes, with the induced topology and ordinary reflective sheafification specified by the slice-site construction. Equivalently the right side is the restriction of the ambient localized Tate-twisted complex followed by the specified root trivialization. No comparison with a separately fixed separated finite-type or hypercomplete site is asserted.

## Statement references
[lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)

[lem-author-2ac325480ae8-motivic-restriction-coefficients](item-lem-author-2ac325480ae8-motivic-restriction-coefficients)

[lem-author-2ac325480ae8-truncated-root-map](item-lem-author-2ac325480ae8-truncated-root-map)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

[math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria)

[math:thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity](https://alphabetamath.cc/item/thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity)

## Facts & Assumptions
[A1] Choice and the compatible site and universe bounds are used when invoking the derived-sections construction in [lem-author-2ac325480ae8-truncated-root-map](item-lem-author-2ac325480ae8-truncated-root-map). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The site, coherent presheaf category and ordinary derived Čech descent convention are those of [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site); its compatible nested universes also contain the auxiliary big étale site, slice and resolution data required by the truncated-root-map supplier. Universe existence is assumed separately from Choice.

[F1] [thm-author-2ac325480ae8-bem-finite-comparison](item-thm-author-2ac325480ae8-bem-finite-comparison) supplies the actual ambient twisted comparison in weight three mod-$p$, its derived quotient and its ordinary big-site localization conventions.

[F2] [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model) specifies the canonical identification of BEM's cdh complex on qcqs $\mathbb Q$-schemes with the actual EM model and its classical-input maps. [lem-author-2ac325480ae8-motivic-restriction-coefficients](item-lem-author-2ac325480ae8-motivic-restriction-coefficients) carries this identification to qcqs $k$-schemes and to the objectwise derived quotient, including the coefficient cofiber diagrams and evaluation maps.

[F3] [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root) supplies the pullback-compatible coefficient isomorphism $1\mapsto\zeta^{\otimes3}$ from the constant étale $\mathbb Z/p$ sheaf to $\mu_p^{\otimes3}$ on the slice. [lem-author-2ac325480ae8-slice-localization](item-lem-author-2ac325480ae8-slice-localization) supplies the unit-compatible ordinary localization interchange. [lem-author-2ac325480ae8-truncated-root-map](item-lem-author-2ac325480ae8-truncated-root-map) supplies the coherent derived-section presheaves with their actual scheme pullbacks, objectwise canonical truncation before sheafification, and localization of the inverse coefficient map. Thus all these constructions are used with their stated maps and naturality domains.

[F4] [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) supplies the canonical embedding $\mathbb Q\to k$ in characteristic zero, sending $1$ to $1_k$. In particular, it carries $1/p$ to an inverse of $p\cdot1_k$.

[F5] [math:prop-algebraically-closed-splitting-and-finite-extension-criteria](https://alphabetamath.cc/item/prop-algebraically-closed-splitting-and-finite-extension-criteria) says that every nonconstant polynomial splits over an algebraically closed field. [math:thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity](https://alphabetamath.cc/item/thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity) says that, when the characteristic does not divide $n\geq1$, a splitting field of $T^n-1$ contains a primitive $n$th root, meaning an element of multiplicative order $n$. These are used only to justify the algebraically closed case of the chosen-root hypothesis, with $n=p$.

## Proof
**Given:** $k,p,\zeta$ as stated, with fixed compatible universes and AC.

**Goal:** Prove the formula with the actual coefficient/truncation/localization maps.

1.1 By [F4], $p$ is invertible in $k$. If $k$ is algebraically closed, [F5] applies to $T^p-1$: it splits over $k$, characteristic zero does not divide $p$, and $k$ itself is a splitting field over $k$. Hence the primitive root required in the statement can indeed be chosen. In general its choice is part of the hypotheses. Use the site of [A1], with $S=\operatorname{Spec}\mathbb Z[1/p]$, $\mathcal C=\mathrm{Sch}^{\rm qcqs}_S$ and $j:\mathcal C/\operatorname{Spec}k\to\mathcal C$ the forgetful functor. Restrict the actual weight-three, exponent-one comparison of [F1] along $j$. By [F2], its source identifies with the left side of the statement, preserving the specified model, quotient and coefficient maps. Restriction is precomposition, so this remains a natural equivalence, including after evaluation at any qcqs $X/k$. [A1, F1, F2, F4, F5]

2.1 The prime, chosen primitive root, qcqs slice and ordinary localizations meet [F3]'s hypotheses under [A1] and step 1.1. Apply its unit-compatible interchange to the restricted target, obtaining $L_{\rm cdh,k}\tau^{\leq3}R\Gamma_{\rm et}(-,\mu_p^{\otimes3})$ on the slice. Compose with localization of the inverse of the coefficient isomorphism $1\mapsto\zeta^{\otimes3}$, after the stated objectwise truncation. This is exactly the displayed right side. Each arrow is a specified natural equivalence, so the composite is an equivalence contravariantly natural on qcqs $k$-schemes. This proves the characteristic-zero application without a site substitution or use of a degree-three truncated comparison in an unsupported degree. [A1, F3, step 1.1] ∎
