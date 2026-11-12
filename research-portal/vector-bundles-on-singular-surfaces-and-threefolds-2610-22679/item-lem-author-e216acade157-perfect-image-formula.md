---
title: The perfect image filtration has the stated second projection and kernel
status: published
research_item: lem-author-e216acade157-perfect-image-formula
dependency_level: 28
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(1), printed p. 3
      reading_limits: "Background for the motivic filtration and graded comparison
        only: read Theorem 1.1(1) in the primary v1 PDF. The stated image,
        Chern-sign and kernel formulas are local deductions from the declared
        suppliers and are not attributed to this paper."
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber)
- [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-filtration-projections](item-def-filtration-projections)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-second-chern-additive](item-lem-second-chern-additive)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe size bounds for the specified motivic filtration, perfect K-theory and Chern constructions. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. The actual second-stage projection transports uniquely to the second image subgroup, giving a homomorphism
$$p_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z),\qquad p_2(\alpha)=-c_2(\alpha).$$
Its kernel is
$$\ker(p_2)=F^3_{\mathrm{mot}}K_0(X).$$
Here $K_0(X)=\pi_0K(X)$ is the K-theory of perfect complexes, and $F^j_{\mathrm{mot}}K_0(X)$ is the image of $\pi_0\operatorname{Fil}^jK(X)\to K_0(X)$, including for $j=3$. A perfect complex is locally quasi-isomorphic to a bounded complex of finite-rank locally free sheaves. The target is degree-four cohomology of the specified weight-two integral motivic complex, and $c_2$ is the actual perfect second Chern operation. Transport means that composing $p_2$ with the second-stage augmentation gives the actual stage projection.

In particular, this preserves the original normal qcqs scope over an algebraically closed field. The formula and kernel require no finite-type, noetherian, dimension or global bundle-representation hypothesis; they assert no injectivity of the third-stage augmentation. Here qcqs means quasi-compact quasi-separated, normal means that every local ring is an integrally closed domain, Choice asserts that every family of nonempty sets has a choice function, and the size bounds fix the sites and ambient universes of the constructions.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size bounds in the Statement. These are inherited from the specified filtration, section and Chern constructions in [F1]–[F4], used at steps 1.1–3.1. No separate choice of a family of representatives is made.

[F1] [lem-author-9b6cb358ddc9-actual-second-fiber](item-lem-author-9b6cb358ddc9-actual-second-fiber), Statement and Proof 4.1, supplies $Q_2(X)\simeq-C_2(X)i_K(X)$ on the actual values of every qcqs field-scheme. Its target is $Y_2(X)=\Omega^\infty\mathcal H(D_2(X)[4])$, with $\pi_0Y_2(X)=H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ for the actual complex value $D_2(X)=\mathbb Z(2)_{\mathrm{mot}}(X)$. Its ordinary-sheaf proof precomposes the factorization units to give this actual-value identity before optional stalkwise localization. This is the conclusion used below; the separate derived-map identity into $A_2^{\mathrm{der}}$ is not evaluated as an actual coefficient value.

[F2] [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber) supplies the actual pointed section $\kappa:B\to S$ of $d:S\to B$, with $S=\Omega^\infty\operatorname{Fil}^1K$, $B=\Omega^\infty\operatorname{gr}^1K$ and fiber $T=\Omega^\infty\operatorname{Fil}^2K$. It also identifies the first stage with the rank fiber over a discrete target. For every such $X$, the supplier explicitly gives injections $\pi_0T(X)\to\pi_0S(X)\to K_0(X)$. These are the actual spectral-stage values on each qcqs field-scheme, before optional stalkwise localization. Only these injections are used below; the section need not be additive.

[F3] [def-motivic-filtration](item-def-motivic-filtration) defines the compatible augmentations and their image subgroups. [def-filtration-projections](item-def-filtration-projections) defines the actual stage map $Q_{2,*}:\pi_0\operatorname{Fil}^2K(X)\to H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ on every qcqs field-scheme, using the graded cofiber of this same tower. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives exactness at the middle term of $\pi_0\operatorname{Fil}^3K(X)\to\pi_0\operatorname{Fil}^2K(X)\xrightarrow{Q_{2,*}}H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$.

[F4] [lem-second-chern-additive](item-lem-second-chern-additive) supplies the additive restriction of the actual $c_2$ to this second image subgroup on every qcqs scheme over a field, with the same assumptions. Its perfect-class argument does not require a global bundle-difference representative.

[F5] [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) defines the $k$-scheme condition as a scheme equipped with a morphism to $\operatorname{Spec}k$. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines the two conditions in qcqs. [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field) specifies algebraic closure for the normal special case mentioned in the Statement, and [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain) specifies integrally closed domains in its inline normality definition. The last two conditions are not hypotheses of the general assertion or its proof.

## Proof
**Given:** $k,X$, Choice and the size bounds in the Statement, with the specified actual tower and perfect Chern operations.

**Goal:** Transport the actual second-layer map and identify its sign and third-image kernel throughout the stated qcqs scope.

1.1 Apply the two injections supplied in [F2] to the qcqs $k$-scheme $X$ of [F5]. Their composite is the second-stage augmentation by [F3]. Its corestriction $q_2:\pi_0\operatorname{Fil}^2K(X)\to F^2_{\mathrm{mot}}K_0(X)$ is consequently injective and, by the image definition, surjective. It is a homomorphism, being the corestriction of the augmentation on homotopy groups. Its inverse is additive: applying the injective $q_2$ to $q_2^{-1}(x+y)$ and $q_2^{-1}(x)+q_2^{-1}(y)$ gives $x+y$ in both cases. Define $p_2=Q_{2,*}q_2^{-1}$. The stage map $Q_{2,*}$ in [F3] is a homomorphism, so $p_2$ is a homomorphism, and it is the unique one with $p_2q_2=Q_{2,*}$ because $q_2$ is onto. [A1, F2, F3, F5]

2.1 For $\alpha\in F^2_{\mathrm{mot}}K_0(X)$, take its unique actual stage representative $\widetilde\alpha=q_2^{-1}(\alpha)$. Apply [F1]'s actual-value homotopy to $\widetilde\alpha\in\pi_0T(X)$ and pass to components in $Y_2(X)$; its augmentation under $i_K(X)$ is $\alpha$ by [F3]. Since the actual second-stage graded projection induces $Q_{2,*}$ with target $\pi_0Y_2(X)=H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$, this gives $p_2(\alpha)=Q_{2,*}(\widetilde\alpha)=-c_2(\alpha)$. The operation is the same actual perfect operation as in [F4], so its additive interpretation agrees with that supplier. This applies to every perfect class in the image, including classes without global bundle-difference representatives. No identification of actual coefficient values with derived sections of an associated sheaf complex is used. [A1, F1, F3, F4, step 1.1]

3.1 Write $r:\pi_0\operatorname{Fil}^3K(X)\to\pi_0\operatorname{Fil}^2K(X)$ for the transition. Exactness in [F3] gives $\ker Q_{2,*}=\operatorname{im}r$. Thus the isomorphism $q_2$ in step 1.1 gives $\ker p_2=q_2(\operatorname{im}r)$. Compatibility of augmentations identifies the image of this composite in $K_0(X)$ with the image of the third-stage augmentation, which is exactly $F^3_{\mathrm{mot}}K_0(X)$. This proves the kernel formula without third-stage injectivity. [A1, F3, step 1.1, step 2.1] ∎

## Scope and reading limits
The arbitrary-field qcqs result is a local deduction from [F1]–[F4]; no global bundle-representation premise is used.

This citation-only maintenance removes the original-article bibliography entry. The proof uses the declared local suppliers in [F1]–[F4]; no external premise is removed or newly imported. The Statement, Facts & Assumptions, Proof, declared mathematical dependencies and prerequisite inventory are unchanged. The historical reading and maintenance notes below remain records of earlier work and confer no fresh source-reading or acceptance credit. No external PDF or original article was freshly read for this citation cleanup.

The reading and previous-maintenance notes below are historical records from the preceding carrier, not new source-reading or acceptance claims. Current maintenance read the assigned body, all its direct supplier contracts and its current low-dimensional-quotient consumer; it did not retrieve the article PDF. The repair uses the supplier’s explicit actual-value conclusion and preserves the statement, sign, kernel, hypotheses and coverage.

For this repair, read the complete assigned body, its six local direct suppliers, the Choice definition, and the four published formulation definitions in [F5]. The seven existing direct supplier files match the hashes in the frozen context. The perfect-complex convention is stated inline and agrees with [F2]; [F3] supplies the perfect K-spectrum, image groups and graded target. The supplied injections in [F2] suffice for step 1.1, so no additional pointed-space homotopy-exactness premise is invoked. The inverse-additivity argument is supplied locally in that step. These supplier readings check this application, without auditing their prerequisite chains.

The frozen graph has one direct consumer, the low-dimensional quotient. Its complete body was read: its finite-type and dimension hypotheses, projection sign and kernel application remain compatible. The Statement is unchanged, so this repair triggers no changed mathematical interface. Coverage is unchanged. The two prior proposals for this assigned concern were consulted only as unapplied repair proposals, without acceptance credit.

The deeper motivic, determinant and universal-operation constructions are used through the declared supplier contracts. No reconstruction, original-author defect adjudication, library publication or independent rejudgment is claimed. Central rendering and changed-item rejudgment remain controller tasks.
