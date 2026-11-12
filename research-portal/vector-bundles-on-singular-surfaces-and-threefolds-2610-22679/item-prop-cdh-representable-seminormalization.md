---
title: Representable cdh sheaves and seminormalization
status: published
research_item: prop-cdh-representable-seminormalization
dependency_level: 11
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 5, proof of Lemma 2.4, the representable-sheaf formula and
        following specialization
      statement: The proof records the representable-cdh-sheaf formula Hom_k(X^sn,Y)
        and its specialization to Hom_k(X,Y) for seminormal X.
      hypotheses: X and Y are separated finite-type schemes over the algebraically
        closed field k of Lemma 2.4; the specialization assumes X seminormal.
      reading_limits: Read the supplied article text on PDF page 5, proof of Lemma
        2.4, including the displayed formula and specialization. This passage
        has algebraically closed scope; the broader perfect-field premise is
        checked separately in Huber–Kelly. No original-author defect is
        asserted.
    - title: "Differential forms in positive characteristic, II: cdh-descent via
        functorial Riemann–Zariski spaces"
      url: https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf
      locator: Theorem 1.4, printed pp. 651–652, perfect-field example and equations
        (2)–(3); Section 2A, Definition 2.1 and Remark 2.2(1), pp. 653–654;
        Remark 2.7 and Proposition 2.8(3), pp. 654–655
      statement: Theorem 1.4 identifies h_Y^cdh(X) with Hom_S(X^sn,Y) and explicitly
        includes Spec k for perfect k as a noetherian Nagata base. Proposition
        2.8(3) makes X^sn to X finite. Section 2A and Definition 2.1/Remark
        2.2(1) specify the separated finite-type scheme site and its cdh
        generators.
      hypotheses: S is noetherian and Nagata; X,Y are separated finite-type S-schemes.
        Apply the explicit example S = Spec k with k perfect. Proposition 2.8(3)
        assumes finite normalization, which it explicitly includes for
        finite-type schemes over a Nagata base.
      reading_limits: Read publisher PDF text of Theorem 1.4 and equations (2)–(3),
        Section 2A, Definition 2.1, Remark 2.2(1), Remark 2.7 and the statement
        of Proposition 2.8. Screenshot retrieval was unavailable. The proof of
        Proposition 6.14 and proofs of imported geometric results were not
        reconstructed. The argument here is a local application of these inputs.
---

PDF p. 5: Proof of Lemma 2.4, HK18 Theorem 1.4

## Prerequisites

- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [lem-author-60d95bfb692a-subintegral-sheaf-invariance](item-lem-author-60d95bfb692a-subintegral-sheaf-invariance)
- [thm-author-60d95bfb692a-huber-kelly-representable-input](item-thm-author-60d95bfb692a-huber-kelly-representable-input)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Differential forms in positive characteristic, II: cdh-descent via functorial Riemann–Zariski spaces · Theorem 1.4, printed pp. 651–652, perfect-field example and equations (2)–(3); Section 2A, Definition 2.1 and Remark 2.2(1), pp. 653–654; Remark 2.7 and Proposition 2.8(3), pp. 654–655 `](https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf)


## Statement
Let $k$ be a perfect field, and let $X,Y$ be separated finite-type $k$-schemes. Write $h_Y(Z)=\operatorname{Hom}_k(Z,Y)$ and $h_Y^{\mathrm{cdh}}$ for its sheafification on the big cdh site of separated finite-type $k$-schemes. Then there is a natural bijection
$$h_Y^{\mathrm{cdh}}(X)\cong\operatorname{Hom}_k(X^{\mathrm{sn}},Y).$$
If $X$ is seminormal, this identifies $h_Y^{\mathrm{cdh}}(X)$ with $\operatorname{Hom}_k(X,Y)$.

A perfect field is one for which every algebraic extension is separable. A finite-type $k$-scheme has a finite affine cover by spectra of finitely generated $k$-algebras; separatedness means its diagonal is a closed immersion. Fix Grothendieck universes $U\in V$ and a $U$-small model of this scheme category, with all $k$-morphisms and representatives of $X,Y,X^{\mathrm{sn}}$. Use the cdh topology and $\mathrm{Set}_V$-valued sheafification with its unit and universal property on this model. Restriction in $h_Y$ is precomposition; associativity and identities of scheme morphisms give the presheaf laws. The seminormalization $p:X^{\mathrm{sn}}\to X$ is the subintegral map with seminormal source. A subintegral map is integral, bijective on points and induces residue-field isomorphisms.

With the additional assumption of the Axiom of Choice, restriction along $p$ is a bijection $F(X)\to F(X^{\mathrm{sn}})$ for every set-valued cdh sheaf $F$ on this site. This is the auxiliary finite-subintegral descent compatibility.

## Statement references

[def-cdh-topology-interface](item-def-cdh-topology-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[thm-author-60d95bfb692a-huber-kelly-representable-input](item-thm-author-60d95bfb692a-huber-kelly-representable-input)

[lem-author-60d95bfb692a-subintegral-sheaf-invariance](item-lem-author-60d95bfb692a-subintegral-sheaf-invariance)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

**Given:** A perfect field $k$ and separated finite-type $k$-schemes $X,Y$, with the site and size conventions in the Statement. For the auxiliary descent assertion, additionally assume the Axiom of Choice.

**Goal:** Establish the displayed bijection, its seminormal specialization and the qualified auxiliary descent compatibility.

[F1] The Huber–Kelly external input gives the displayed natural bijection for separated finite-type schemes over a noetherian Nagata base; those base conditions have the meanings specified in its Statement. [thm-author-60d95bfb692a-huber-kelly-representable-input](item-thm-author-60d95bfb692a-huber-kelly-representable-input)

[F2] For a finite-type scheme over a field, its seminormalization is subintegral, has seminormal source and is finite over the reduction. A seminormal scheme is reduced. A reduced seminormal scheme admits no nontrivial finite subintegral morphism from a reduced scheme. [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[F3] Under the Axiom of Choice, a set-valued cdh sheaf sends finite subintegral morphisms of separated finite-type schemes to bijections. The inherited Choice use is the properness step that makes the finite subintegral map a cdh cover. [lem-author-60d95bfb692a-subintegral-sheaf-invariance](item-lem-author-60d95bfb692a-subintegral-sheaf-invariance) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The spectrum of a perfect field is a noetherian Nagata base. In this scope $p:X^{\mathrm{sn}}\to X$ is finite and $X^{\mathrm{sn}}$ is an object of the separated finite-type site. These premises are imported from Huber–Kelly Theorem 1.4 and Proposition 2.8(3), respectively, as recorded in External input and the second source reference. [thm-author-60d95bfb692a-huber-kelly-representable-input](item-thm-author-60d95bfb692a-huber-kelly-representable-input)

[F5] The scheme category, cdh topology, presheaves, sheaves and set-valued sheafification are those of the two declared site interfaces. The Axiom of Choice says that every family of nonempty sets has a choice function. [def-cdh-topology-interface](item-def-cdh-topology-interface) [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## External input
The perfect-field base premise in F4 is explicitly the example in [Huber–Kelly, Theorem 1.4](https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf), printed page 651. Proposition 2.8(3), printed page 655, supplies finiteness of $p$ under the Nagata hypothesis; the declared theorem interface also records that $X^{\mathrm{sn}}$ belongs to this site. The general representable-sheaf formula is supplied by that declared theorem interface, using Theorem 1.4, equations (2)–(3). These are imported premises; the two-step argument below is their local application and the seminormal specialization, not a reconstruction of the literature proof.

The original article, [proof of Lemma 2.4, PDF page 5](https://arxiv.org/abs/2610.22679v1), records the formula and the seminormal specialization over an algebraically closed field. The broader perfect-field application here uses the Huber–Kelly premise above.

## Proof

**Proof technique:** Apply the imported theorem, specialize its source, and apply finite-subintegral descent under its additional assumption.

1.1 By [F4], the base $S=\operatorname{Spec}k$ is noetherian and Nagata, and $X,Y$ satisfy the separated finite-type hypotheses of [F1]. The site conventions agree by [F5] and the field-site comparison in the theorem interface. Applying [F1] therefore gives the displayed natural bijection, with its naturality in both variables. [F1, F4, F5, given]

2.1 By [F2] and [F4], $p:X^{\mathrm{sn}}\to X$ is a finite subintegral map between objects of this site. Suppose $X$ is seminormal. By [F2], $X$ and $X^{\mathrm{sn}}$ are reduced, and the finite-subintegral criterion makes $p$ an isomorphism. Precomposition with its inverse identifies $\operatorname{Hom}_k(X^{\mathrm{sn}},Y)$ with $\operatorname{Hom}_k(X,Y)$. Composing with step 1.1 proves the seminormal specialization. These identifications are natural because $p$ is the canonical functorial seminormalization map and the comparison in step 1.1 is natural. Finally, for the auxiliary assertion, assume the Axiom of Choice. For arbitrary $X$ as in the Statement, the finiteness and subintegrality already established let [F3] give a bijection $F(X)\to F(X^{\mathrm{sn}})$ for every set-valued cdh sheaf $F$. Choice is used here only through [F3]. This proves the qualified descent compatibility as well. [F2, F3, F4, F5, step 1.1] ∎
