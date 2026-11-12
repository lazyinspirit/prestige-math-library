---
title: Zeroth projection is rank
status: published
research_item: lem-zero-projection-rank
dependency_level: 22
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; p. 5, Lemma 2.4 and proof; p. 10,
        Lemma 5.1 and proof
      reading_limits: Read the frozen supplied article extraction at PDF p. 3
        conventions, p. 5 Lemma 2.4 and its proof, and p. 10 Lemma 5.1 and its
        proof. No fresh PDF-image inspection or reconstruction of the deep
        motivic constructions is claimed. The proof below uses the declared
        current supplier interfaces and compares their site conventions
        explicitly.
      statement: Lemma 5.1 identifies the zeroth filtration projection with rank for
        seminormal X, referring to the component-section isomorphism of Lemma
        2.4. Lemma 2.4 identifies H^0_cdh(X,Z) with integer-valued functions on
        connected components for separated seminormal finite-type schemes over
        the algebraically closed base field.
      hypotheses: The article conventions on PDF p. 3 use qcqs schemes over an
        algebraically closed field, and affine schemes are finite type. Lemma
        5.1 states seminormality and invokes Lemma 2.4; the latter additionally
        states separatedness and finite type. The arbitrary-field qcqs rank
        equality in this generated item is a local consequence of the
        rank-zero-stage supplier, not an imported assertion of these article
        lemmas.
---

PDF p. 10: Lemma 5.1

## Prerequisites

- [def-filtration-projections](item-def-filtration-projections)
- [def-motivic-filtration](item-def-motivic-filtration)
- [prop-motivic-weight-zero](item-prop-motivic-weight-zero)
- [lem-cdh-integer-sections](item-lem-cdh-integer-sections)
- [lem-author-a279c89ed6c8-cdh-zero-site-comparison](item-lem-author-a279c89ed6c8-cdh-zero-site-comparison)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)
- [lem-adjudicate-60a5a67fb86d-finite-type-clopen-components](item-lem-adjudicate-60a5a67fb86d-finite-type-clopen-components)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)



## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied weight-zero and perfect K-theory constructions. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. Under the canonical identifications
$$H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^0_{\mathrm{cdh},F}(X,\mathbb Z)\cong\operatorname{LC}(|X|,\mathbb Z),$$
the actual zeroth filtration projection $p_0:K_0(X)\to H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)$ is the locally constant Euler rank. Here $F$ is the prime subfield of $k$, and the cdh group uses the supplied entire qcqs $F$-scheme site. The group $\operatorname{LC}(|X|,\mathbb Z)$ consists of functions on the underlying topological space that are constant on a neighbourhood of every point, with pointwise addition. No seminormality, normality, separatedness, finite-type or dimension hypothesis is needed for this rank identification.

In the original separated seminormal finite-type case over an algebraically closed field, the same identifications agree naturally with the constant-integer sections on the separated finite-type $k$-scheme cdh site and give
$$H^{0,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^0_{\mathrm{cdh}}(X,\mathbb Z)\cong\mathbb Z^{\pi_0(X)}.$$
Here $\pi_0(X)$ is the finite set of connected components, and its components are open and closed. Thus the original componentwise statement, including disconnected and empty schemes, is retained. On general qcqs schemes the locally constant-function description is used; arbitrary functions on connected components are not asserted to be locally constant.

The spectrum $K(X)$ is the specified nonconnective K-theory of perfect complexes and $K_0(X)=\pi_0K(X)$. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves. Its Euler rank at a point is the alternating dimension of its derived fiber over the residue field. The projection is the actual stage-zero-to-graded map, with $F^0_{\mathrm{mot}}K(X)=K(X)$. A qcqs scheme is quasi-compact and quasi-separated. Seminormality in the finite-type specialization has the supplied local square-and-cube-root convention.

## Statement references

[lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage)

[prop-motivic-weight-zero](item-prop-motivic-weight-zero)

[lem-author-a279c89ed6c8-cdh-zero-site-comparison](item-lem-author-a279c89ed6c8-cdh-zero-site-comparison)

[lem-cdh-integer-sections](item-lem-cdh-integer-sections)

[lem-adjudicate-60a5a67fb86d-finite-type-clopen-components](item-lem-adjudicate-60a5a67fb86d-finite-type-clopen-components)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

## Facts & Assumptions

**Given:** A field $k$, a qcqs $k$-scheme $X$, Choice and compatible site and universe bounds. For the final specialization also assume the separated seminormal finite-type and algebraically closed hypotheses.

**Goal:** Identify the actual projection in qcqs scope and recover the original finite-type component formula on its original site.

[A1] The stated Choice and size premises are inherited from the actual rank, perfect K-theory and weight-zero constructions in [F1]–[F3]. They are used when applying those suppliers at steps 1.1–2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [def-motivic-filtration](item-def-motivic-filtration) identifies stage zero with K. [def-filtration-projections](item-def-filtration-projections) defines $p_0$ as the actual stage-to-graded map on every qcqs field-scheme. [prop-motivic-weight-zero](item-prop-motivic-weight-zero) identifies its target with the constant-integer derived sections on the general qcqs prime-field cdh site.

[F2] [lem-author-ec13f1db88a5-rank-zero-stage](item-lem-author-ec13f1db88a5-rank-zero-stage) computes that site's degree-zero constant sections as locally constant integers, identifies $\Omega^\infty\operatorname{gr}^0K$ as this discrete sheaf, and identifies the actual map on perfect $K_0$ as the locally constant Euler rank. This is an actual map identification over every field, without a smooth-locus premise.

[F3] [lem-author-a279c89ed6c8-cdh-zero-site-comparison](item-lem-author-a279c89ed6c8-cdh-zero-site-comparison) gives the natural comparison with separated finite-type $k$-site sections when $X$ is separated finite type. [lem-cdh-integer-sections](item-lem-cdh-integer-sections) identifies the latter with $\mathbb Z^{\pi_0(X)}$ under the additional seminormal and algebraically closed hypotheses.

[F4] [lem-adjudicate-60a5a67fb86d-finite-type-clopen-components](item-lem-adjudicate-60a5a67fb86d-finite-type-clopen-components) supplies Noetherianity, finitely many clopen connected components, and the natural identification of locally constant integers with functions on those components for every finite-type field-scheme. It applies under [A1] without separatedness or seminormality.

[F5] Quasi-compactness and quasi-separatedness have the scheme definitions in [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). The algebraically closed hypothesis in the specialization means that every nonconstant polynomial over $k$ has a root in $k$, as in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). The separatedness, finite-type and seminormality conventions and the component set in that specialization are those of [F3].

## External input
Reference 0 records the original article Lemmas 5.1 and 2.4 with their respective hypotheses. It documents the original claim represented here; the proof below is a local deduction from [F1]–[F4], rather than an import of the article's smooth-locus argument in unrestricted qcqs scope.

## Proof

1.1 Apply [F1] and [F2] to the given qcqs field-scheme under [A1]. Their source is the same specified K-spectrum, and their map is the same stage-zero cofiber projection. The discrete zeroth-space identification in [F2] identifies its zeroth homotopy group with $\operatorname{LC}(|X|,\mathbb Z)$, and the actual map on $K_0$ is the Euler rank. Composing with the weight-zero identification in [F1] gives the first display and the claimed rank equality on every such $X$. [A1, F1, F2, given]

2.1 The rank in step 1.1 is computed on local bounded finite locally free representatives. Those ranks are locally constant, compatible with restrictions, and additive in exact triangles, as in [F2]. Hence this is a natural homomorphism on all perfect classes, including those without a global vector-bundle presentation. On the empty scheme the locally constant-function group is zero and the same identity applies. [F2, step 1.1]

3.1 Now impose the original separated seminormal finite-type and algebraically closed hypotheses. Apply the natural site comparison and component-section calculation in [F3] to the same weight-zero group. By [F4], this finite-type scheme is Noetherian with finitely many clopen connected components, and their integer values describe exactly its locally constant functions. These identifications take the map in step 1.1 to the original componentwise rank map and give the second display. Thus every original finite-type assertion and the broader qcqs rank equality hold with their respective precise site conventions. [A1, F1, F3, F4, F5, step 1.1, step 2.1] ∎

## Maintenance scope and reading limits
Read the complete assigned body, the declared rank, weight-zero, stage-projection, site-comparison and integer-section interfaces, the existing finite-constant-map lemma, and the mathematical suppliers of the new finite-type component helper. The article reading is limited to the text passages recorded in reference 0. The deep motivic constructions are used through their supplied contracts and are not reconstructed or accepted here. This patch preserves the entire Statement verbatim and all original coverage; its new helper closes the finite-type component argument. Read the complete bodies of the four direct consumers: the surface and threefold classification theorems, threefold Chern prescription, and exterior-square Chern calculation. Each uses the rank equality within its existing hypotheses and needs no change for this repair. No independent repair acceptance or original-author defect adjudication is claimed.
