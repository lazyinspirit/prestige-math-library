---
title: Étale derived cdh locality on the actual qcqs site
status: published
research_item: prop-etale-cdh-descent
dependency_level: 13
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      version: arXiv:2610.22679v1; frozen supplied article.
      locator: PDF p. 6, characteristic-zero proof of Proposition 2.6, final
        cdh-locality application.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the supplied extracted PDF p. 6 proof of Proposition 2.6,
        including its final locality application. No unrelated article argument
        is reviewed here. Current maintenance read the assigned body and current
        supplier interfaces; no fresh primary-source or page-image reading,
        independent review or acceptance is claimed."
      statement: The characteristic-zero proof of Proposition 2.6 uses cdh locality of
        the constant mod-p etale cohomology functor, citing Stacks Lemma
        59.105.1.
      hypotheses: The application is to an affine threefold over an algebraically
        closed field of characteristic zero, with any prime p.
    - title: The Stacks Project, Lemma 59.105.1
      url: https://stacks.math.columbia.edu/tag/0EW5
      version: Online tagged text checked 2026-11-12; no repository revision pinned.
      locator: Complete displayed statement and proof.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Reread the complete tagged statement and proof on 2026-11-12.
        Proper base change and the foundational derived-category inputs cited
        there remain imported. This is not the full-site descent supplier; no
        repository revision is pinned. Current maintenance read the assigned
        body and current supplier interfaces; no fresh primary-source or
        page-image reading, independent review or acceptance is claimed."
      statement: For the ordinary blowup of a finite-type quasi-coherent ideal, a
        bounded-below etale complex with torsion cohomology has the displayed
        blowup distinguished triangle of derived direct images.
      hypotheses: Any scheme X; a closed subscheme cut out by a quasi-coherent ideal
        of finite type; its actual blowup square; K in D-plus of the small etale
        site with torsion cohomology sheaves.
    - title: Bhargav Bhatt and Akhil Mathew, The arc-topology
      url: https://arxiv.org/pdf/1807.04725v4
      version: arXiv:1807.04725v4, header 14 December 2020; checked 2026-11-12.
      locator: Definition 1.2 and Remark 1.4, p. 3; Notation 5.8 and preceding
        finite-ring paragraph, p. 41; Theorem 5.13 and complete proof, pp.
        42–43.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Checked Definition 1.2, Remark 1.4, the finite-ring paragraph,
        Notation 5.8, Remark 5.9, and Theorem 5.13 with its displayed proof in
        primary PDF text on 2026-11-12. Deeper category-descent and valuation
        inputs remain imported; no visual inspection or reconstruction is
        claimed. Current maintenance read the assigned body and current supplier
        interfaces; no fresh primary-source or page-image reading, independent
        review or acceptance is claimed."
      statement: For finite Lambda, bounded constructible etale Lambda-complexes form
        a hypercomplete arc sheaf of infinity-categories on qcqs schemes; the
        fixed-amplitude subcategories do also.
      hypotheses: A fixed finite ring Lambda and qcqs schemes; for amplitude [-n,n], n
        is nonnegative. Notation 5.8 imposes bounded constructible cohomology,
        without requiring finite Tor-dimension. No invertibility condition is
        imposed.
    - title: Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg
        sheaves
      url: https://arxiv.org/pdf/1511.02828v1
      version: Versioned arXiv v1 endpoint checked 2026-11-12; returned PDF header
        says v1, 9 November 2015, while its internal Date line says June 11,
        2019.
      locator: Section 3 opening, p. 8; Definitions 5.1/5.3, pp. 17–18; Theorem 5.7
        statement, p. 18, and proof, pp. 19–20; Lemma 5.10 and proof, p. 19;
        Fact 5.15 and preceding paragraph, p. 22.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Checked Section 3 opening, Definitions 5.1/5.3, Theorem 5.7 and
        its displayed proof, Lemma 5.10 and its proof, and Fact 5.15 with its
        preceding paragraph in primary PDF text on 2026-11-12. Deeper
        model/localization inputs are imported; no reconstruction or visual
        inspection is claimed. Current maintenance read the assigned body and
        current supplier interfaces; no fresh primary-source or page-image
        reading, independent review or acceptance is claimed."
      statement: On a small site, localization of unbounded presheaf complexes at
        sheafified-homology equivalences has precisely hypercover-descent
        objects as fibrant objects. Abelian sheafification induces the stated
        derived-category equivalence.
      hypotheses: A small category with Grothendieck topology and a commutative unital
        coefficient ring; unbounded homological complexes. Hypercovers are
        coproducts of representables and use product totalization. Reindex to
        cochains for this application.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      version: arXiv:2309.08463v1; checked 2026-11-12.
      locator: Section 3.3, p. 14, equation (3.4) and immediately following topology
        and square-criterion paragraph.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Reread equation (3.4), its labels, and the following
        topology/criterion paragraph in primary PDF text on 2026-11-12. The
        explicit zero-empty-value qualification is supplied by the current local
        helpers, not attributed to the literal paragraph. Cited nonnoetherian
        descent proofs remain imported; no visual inspection is claimed. Current
        maintenance read the assigned body and current supplier interfaces; no
        fresh primary-source or page-image reading, independent review or
        acceptance is claimed."
      statement: Section 3.3 specifies the qcqs prime-field cdh generators and states
        the Nisnevich-square and abstract-blowup-square characterization of cdh
        sheaves.
      hypotheses: Schemes are qcqs over a prime field; the closed immersion and proper
        morphism in the abstract blowup square are finitely presented, and the
        latter is an isomorphism off the center. The local application also
        imposes value zero at the empty scheme.
---

PDF p. 6: Stacks Lemma 59.105.1

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-7113c087ecba-general-localization](item-lem-author-7113c087ecba-general-localization)
- [lem-author-7113c087ecba-generators-arc](item-lem-author-7113c087ecba-generators-arc)
- [lem-author-7113c087ecba-endomorphism-hyperdescent](item-lem-author-7113c087ecba-endomorphism-hyperdescent)
- [lem-author-7113c087ecba-cdh-hyperdescent](item-lem-author-7113c087ecba-cdh-hyperdescent)
- [lem-author-7113c087ecba-locality-unit](item-lem-author-7113c087ecba-locality-unit)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [thm-author-7113c087ecba-arc-input](item-thm-author-7113c087ecba-arc-input)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:thm-integers-modulo-n-basic-algebra](https://alphabetamath.cc/item/thm-integers-modulo-n-basic-algebra)
- [` Fasel–Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 6, characteristic-zero proof of Proposition 2.6, final cdh-locality application. `](https://arxiv.org/abs/2610.22679v1)
- [` The Stacks Project, Lemma 59.105.1 · Complete displayed statement and proof. `](https://stacks.math.columbia.edu/tag/0EW5)
- [` Bhargav Bhatt and Akhil Mathew, The arc-topology · Definition 1.2 and Remark 1.4, p. 3; Notation 5.8 and preceding finite-ring paragraph, p. 41; Theorem 5.13 and complete proof, pp. 42–43. `](https://arxiv.org/pdf/1807.04725v4)
- [` Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg sheaves · Section 3 opening, p. 8; Definitions 5.1/5.3, pp. 17–18; Theorem 5.7 statement, p. 18, and proof, pp. 19–20; Lemma 5.10 and proof, p. 19; Fact 5.15 and preceding paragraph, p. 22. `](https://arxiv.org/pdf/1511.02828v1)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Section 3.3, p. 14, equation (3.4) and immediately following topology and square-criterion paragraph. `](https://arxiv.org/pdf/2309.08463v1)

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. On the entire qcqs prime-field cdh site specified in the qcqs-site supplier, the functor $E(X)=R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$, for any prime $p$, is cdh-local in the hypercomplete derived-sheaf sense. Write $L^{h,F}_{\mathrm{cdh}}=Ri\,a$ for the general-localization supplier’s reflector, and $L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification. Thus $E\xrightarrow{\sim}L^{h,F}_{\mathrm{cdh}}E$ is its hypercomplete unit equivalence. It is also an ordinary cdh sheaf, so its ordinary source unit $E\to L^{o,F}_{\mathrm{cdh}}E$ is an equivalence. It satisfies Nisnevich descent and sends every source abstract blowup square to a cartesian square. More generally these statements hold for constant coefficients in any finite commutative ring. In particular they apply to the article’s characteristic-zero argument. The claim does not depend on replacing the qcqs site by its separated finite-type subcategory.

## Statement references

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[thm-author-7113c087ecba-arc-input](item-thm-author-7113c087ecba-arc-input)

## Facts & Assumptions
**Given:** Choice, the fixed universe and site-size bounds, the qcqs prime-field site, and a finite commutative coefficient ring $\Lambda$ as in the statement.

**Goal:** Prove hypercomplete and ordinary cdh locality, Nisnevich descent, and descent for every specified abstract blowup square of the actual complex $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$.

[A1] Choice and the fixed bounds are inherited from the selected K-injective resolution, derived inclusion/evaluation model, and site skeleton used in steps 1.1 and 2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[F0] A coefficient ring is a commutative unital ring as in [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), with finite underlying set. Write $\mathbb Z/p$ for the integer congruence classes modulo $p$, with $[a]+[b]=[a+b]$ and $[a][b]=[ab]$. The well-defined ring operations and ring laws are supplied by [math:thm-integers-modulo-n-basic-algebra](https://alphabetamath.cc/item/thm-integers-modulo-n-basic-algebra); for positive $p$ the classes are represented by $0,\ldots,p-1$, so this coefficient ring is finite.

[F1] The entire qcqs prime-field site, including its finitely presented closed centers and finitely presented proper maps, is fixed by [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site). Evaluation on schemes outside its chosen skeleton uses that supplier's representative convention.

[F2] The hypercomplete reflector on this site is $Ri\,a$, and complexes satisfying descent for all hypercovers are its local objects. Here $a$ is abelian sheafification and $i$ is inclusion into presheaves. The ordinary covering-family reflector $L^{o,F}_{\mathrm{cdh}}$ is a separate convention, not identified with this reflector on arbitrary inputs. [lem-author-7113c087ecba-general-localization](item-lem-author-7113c087ecba-general-localization)

[F3] Every specified cdh generator is an arc cover, including on nonnoetherian qcqs schemes; consequently the source cdh topology is coarser than the arc topology. [lem-author-7113c087ecba-generators-arc](item-lem-author-7113c087ecba-generators-arc)

[F4] For finite commutative $\Lambda$, the actual complex-valued functor $E_\Lambda$ satisfies arc hyperdescent on all qcqs schemes, with its actual derived pullback maps. No invertibility hypothesis on its coefficient order is required. Its enhanced coefficient target and coherent pullback conventions are those in [lem-author-7113c087ecba-endomorphism-hyperdescent](item-lem-author-7113c087ecba-endomorphism-hyperdescent). Only this stated descent conclusion is used below.

[F5] On the exact site in [F1], the actual complex satisfies cdh hyperdescent and Nisnevich descent, sends each specified abstract blowup square to a cartesian square, and has $E_\Lambda(\varnothing)=0$. This restriction and square-descent statement, including the zero empty value, is supplied by [lem-author-7113c087ecba-cdh-hyperdescent](item-lem-author-7113c087ecba-cdh-hyperdescent).

[F6] For this same reflector and actual complex, the hypercomplete unit is an equivalence; hyperdescent also gives ordinary locality and the ordinary unit equivalence. Use the underlying abelian derived functor and its compatible strict presheaf-complex representative specified by [lem-author-7113c087ecba-locality-unit](item-lem-author-7113c087ecba-locality-unit): localization of $E_\Lambda$ is transported along that supplier's coherent identification with the representative. The fixed size bounds include the auxiliary big étale site required there.

[F7] Use [def-derived-sections-on-sites](item-def-derived-sections-on-sites) for the construction and resolution-independent meaning of $R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$: evaluate a K-injective resolution of the constant sheaf concentrated in degree zero at the terminal object of the small étale site. The coherent coefficient-valued enhancement and actual pullbacks are the conventions in [F4].

[F8] The Definition in [thm-author-7113c087ecba-arc-input](item-thm-author-7113c087ecba-arc-input) fixes the formulation data: $X_{\mathrm{et}}$ has étale maps $U\to X$ as objects, $X$-morphisms as arrows, and jointly surjective étale families as covers; $\underline\Lambda_X$ is the sheaf associated to the constant presheaf $\Lambda$. It also fixes arc covers and hypercovers, homotopy limits, and homotopy-cartesian squares. A hypercover is an augmented simplicial formal family with locally surjective matching maps; values on formal families are products. Hyperdescent uses its homotopy-limit comparison, and ordinary descent uses covering-family Čech nerves. These conventions do not require an infinite disjoint union to be qcqs.

## Proof
1.1 Fix a finite coefficient ring $\Lambda$ as in [F0] and the exact site of [F1], under [A1]. Interpret $E_\Lambda$ by [F7] and the small étale site, constant sheaf and hypercover conventions of [F8]. By [F3] the source cdh topology is coarser than the arc topology, and [F4] gives arc hyperdescent for this actual functor and its actual maps. Apply the restriction and square-descent conclusion [F5] on this exact site to obtain cdh hyperdescent, Nisnevich descent and cartesian values on every specified abstract blowup square. In particular, its zero value on the empty scheme supplies the empty-cover condition in the square criterion. Both finite-presentation hypotheses on the generators are retained. This application uses no invertibility assumption on the order of $\Lambda$. [given, A1, F0, F1, F3, F4, F5, F7, F8]

2.1 Apply [F2] to the hyperdescent of step 1.1. The local-object criterion is met on the entire site. Using the compatible representative and transported-unit convention in [F6], that supplier gives the equivalence of the actual unit $E_\Lambda\to L^{h,F}_{\mathrm{cdh}}E_\Lambda$. Hyperdescent includes covering-family Čech descent, so [F6] also gives the ordinary unit $E_\Lambda\to L^{o,F}_{\mathrm{cdh}}E_\Lambda$ as an equivalence. Set $\Lambda=\mathbb Z/p$ as in [F0] for any prime $p$ to recover the article input, including characteristic zero. Since the entire argument used the full qcqs site, the finite-ring generalization and the asserted absence of any separated finite-type replacement follow with the same hypotheses. [A1, F0, F1, F2, F6, F8, step 1.1] ∎

## Source scope

The article's citation of Stacks Lemma 59.105.1 supplies an ordinary ideal-blowup triangle for bounded-below torsion complexes. That citation alone does not identify a full cdh localization on the qcqs site. The argument above uses the separate full-site suppliers. The original citation-scope gap remains recorded; it is not an error in the Stacks theorem. Ordinary source sheafification and hypercompletion remain distinct reflectors on arbitrary inputs.

Reference 0 records the characteristic-zero application in [Fasel–Yakerson, Proposition 2.6, PDF p. 6](https://arxiv.org/abs/2610.22679v1). Reference 1 records precisely the ordinary-blowup triangle in [Stacks Lemma 59.105.1](https://stacks.math.columbia.edu/tag/0EW5), with its bounded-below torsion and finite-type-ideal hypotheses.

Reference 2 records [Bhatt–Mathew, Notation 5.8 and Theorem 5.13](https://arxiv.org/pdf/1807.04725v4): hypercomplete arc descent for bounded constructible categories with finite coefficients. The passage to the actual cohomology functor is supplied by [F4], not re-proved here by an unstated mapping-object assertion.

Reference 3 records [Choudhury–Gallauer, Definitions 5.1/5.3, Theorem 5.7 and Fact 5.15](https://arxiv.org/pdf/1511.02828v1): the small-site linear hypercover criterion and its derived-sheaf comparison, used through [F2]. Its product totalization is interpreted after cochain reindexing.

Reference 4 records [Elmanto–Morrow, §3.3, (3.4) and the next paragraph](https://arxiv.org/pdf/2309.08463v1): the qcqs generators and square criterion. The zero empty value needed in the local application is supplied by [F5]. These references document the suppliers and the retained source-scope qualification; the two-step composition above is locally authored.
