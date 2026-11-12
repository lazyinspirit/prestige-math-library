---
title: Motivic weight zero on all qcqs schemes
status: published
research_item: prop-motivic-weight-zero
dependency_level: 13
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, Notation and conventions; p. 4, Definition 2.2 and property
        (1) (weight 0)
      statement: Property (1) states a natural weak equivalence Z(0)_mot(X) ≃
        RΓ_cdh(X,Z), yielding natural isomorphisms H^{i,0}_mot(X,Z) ≃
        H^i_cdh(X,Z). Definition 2.2 defines motivic cohomology as the
        cohomology of the motivic complex.
      hypotheses: The p. 3 conventions fix an algebraically closed base field k and
        take Sch_k to consist of qcqs k-schemes. The cohomological degree i is
        an integer; the weight here is zero.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the frozen article extraction and inspected the supplied PDF
        images of pages 3 and 4 at these locations. The cited passage is used
        for statement attribution and the algebraically closed specialization,
        not as a proof premise. The arbitrary-field restriction, explicit
        general prime-field qcqs cdh-site convention, and negative-degree
        vanishing in this item use the declared local suppliers. No construction
        or proof from Elmanto–Morrow was newly retrieved or reconstructed for
        this proposal. Current maintenance read the assigned body and current
        supplier interfaces; no fresh primary-source or page-image reading,
        independent review or acceptance is claimed."
---

PDF p. 4: Property (1)

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections)
- [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction)
- [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection)
- [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-motivic-cohomology](item-def-motivic-cohomology)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$ and compatible ambient bounds for the sheaf and derived constructions below; existence of these universes is a separate size assumption. Let $k\in U$ be any field, let $F\in U$ be its prime subfield, and let $X$ be any quasi-compact quasi-separated (qcqs) $k$-scheme whose defining data lie in $U$. Write $X_F$ for the same scheme with structure map $X\to\operatorname{Spec}k\to\operatorname{Spec}F$.

For arbitrary $k$, $\mathbb Z(0)_{\mathrm{mot}}(X)$ means the prime-field Elmanto–Morrow weight-zero complex restricted along $X\mapsto X_F$, as in the prime-field restriction and cohomology suppliers. Set $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z):=H^i(\mathbb Z(0)_{\mathrm{mot}}(X))$. For algebraically closed $k$ this is precisely the weight-zero convention of the motivic-cohomology definition; the restriction supplier gives its stated arbitrary-field extension.

For $R\Gamma_{\mathrm{cdh}}(X,\mathbb Z)$ use the ordinary constant integer sheaf, placed in degree zero, on the $V$-small general qcqs $F$-scheme cdh site specified by the qcqs-site construction, with derived evaluation at the chosen representative $rX_F$. Write $H^i_{\mathrm{cdh}}(X,\mathbb Z):=H^i(R\Gamma_{\mathrm{cdh}}(X,\mathbb Z))$. Then there is a natural equivalence
$$\mathbb Z(0)_{\mathrm{mot}}(X)\simeq R\Gamma_{\mathrm{cdh}}(X,\mathbb Z),$$
and natural isomorphisms $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^i_{\mathrm{cdh}}(X,\mathbb Z)$ for all integers $i$. Negative-degree groups vanish. Naturality is contravariant in qcqs $k$-schemes within the size bound. The site convention is part of this statement and covers every such qcqs $X/k$.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)

[def-motivic-cohomology](item-def-motivic-cohomology)

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections)

[lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction)

[lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology)

## Facts & Assumptions

[A1] Choice and the stated compatible site and universe bounds are retained for the chosen skeleton and representative isomorphisms and for derived evaluation. In particular they are retained when applying [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections) and [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology) in steps 1.1 and 2.1, including the injective-resolution computation of negative-degree vanishing. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed natural equivalence, all its cohomology isomorphisms and negative-degree vanishing with the specified site and maps.

[F1] The five supplied lemmas, with their explicit site and map conventions: [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site), [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections), [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction), [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection) and [lem-author-dcdf962edbda-cohomology](item-lem-author-dcdf962edbda-cohomology).

[F2] The qcqs and prime-subfield terminology is that of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield). By [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification), identify $F$ with $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, respecting its inclusion in $k$. The nested universes have the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); their existence is assumed separately. The weight-zero complex and cohomology convention agrees with [def-motivic-cohomology](item-def-motivic-cohomology) on its algebraically closed article scope; for arbitrary $k$ use the explicitly specified prime-field restriction in [F1] and the same cohomology formula, not an algebraic-closure hypothesis inferred from that definition.

## Proof

1.1 By [F2], the prime subfield has one of the forms required by the supplied lemmas. The first three lemmas in [F1] fix the precise general site, ordinary constant sheaf, derived evaluation, and actual prime-field restriction, with the motivic convention specified in the statement. The fourth proves that the actual source projection is an equivalence. Thus all hypotheses of the fifth lemma are satisfied for the given qcqs $X/k$, with the nested universe and Choice assumptions retained. [A1, F1, F2]

2.1 Apply that fifth lemma. It supplies the displayed natural map and equivalence, its cohomology isomorphisms in every integer degree and negative-degree vanishing. The groups here use exactly its motivic and constant-sheaf cohomology conventions. This proves the full qcqs statement using the source's site directly; the narrower completed site supplier has not been altered or silently substituted. [A1, F1, F2, step 1.1] ∎

## Source scope
Reference 0 records the article's weight-zero equivalence and induced cohomology isomorphisms under its algebraically closed base-field convention. The arbitrary-field extension, the explicit general prime-field site and the negative-degree vanishing here are supplied by the five local lemmas in [F1]. The proof above is a local application of their interfaces; it does not reconstruct their imported motivic inputs. The frozen article text and supplied PDF page images were checked at the stated locations only; no new reading of Elmanto–Morrow is claimed.
