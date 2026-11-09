---
id: prop-etale-cdh-descent
kind: proposition
title: Étale derived cdh locality on the actual qcqs site
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-7113c087ecba-general-localization
  - lem-author-7113c087ecba-generators-arc
  - lem-author-7113c087ecba-endomorphism-hyperdescent
  - lem-author-7113c087ecba-cdh-hyperdescent
  - lem-author-7113c087ecba-locality-unit
  - lem-author-dcdf962edbda-qcqs-site
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-7113c087ecba-general-localization: mathematical-premise
  lem-author-7113c087ecba-generators-arc: mathematical-premise
  lem-author-7113c087ecba-endomorphism-hyperdescent: mathematical-premise
  lem-author-7113c087ecba-cdh-hyperdescent: mathematical-premise
  lem-author-7113c087ecba-locality-unit: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      version: arXiv:2610.22679v1; frozen supplied article.
      locator: PDF p. 6, characteristic-zero proof of Proposition 2.6, final
        cdh-locality application.
      reading_limits: Read that proof in the supplied extracted article text. No
        unrelated article proof was reviewed.
    - title: The Stacks Project, Lemma 59.105.1
      url: https://stacks.math.columbia.edu/tag/0EW5
      version: Online tagged text accessed 2026-11-09; no repository revision pinned.
      locator: Complete displayed statement and proof.
      reading_limits: Read the ordinary ideal-blowup triangle and its proof for
        bounded-below torsion complexes. The proper-base-change and foundational
        derived-category inputs invoked there remain imported. This lemma is not
        the full-site descent supplier.
    - title: Bhargav Bhatt and Akhil Mathew, The arc-topology
      url: https://arxiv.org/pdf/1807.04725v4
      version: arXiv:1807.04725v4, header 14 December 2020; accessed 2026-11-09.
      locator: Definition 1.2 and Remark 1.4, p. 3; Notation 5.8 and preceding
        finite-ring paragraph, p. 41; Theorem 5.13 and complete proof, pp.
        42–43.
      reading_limits: Read these primary PDF extracted-text passages. Checked the
        finite-ring, bounded-constructible, qcqs and hypercomplete hypotheses
        against the endomorphism-hyperdescent argument. Deeper category-descent
        and valuation results cited by the authors remain imported; no visual
        PDF inspection or reconstruction of those results is claimed.
    - title: Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg
        sheaves
      url: https://arxiv.org/pdf/1511.02828v1
      version: Versioned arXiv v1 endpoint accessed 2026-11-09; returned PDF header
        says v1, 9 November 2015, while its internal Date line says June 11,
        2019.
      locator: Section 3 opening, p. 8; Definitions 5.1/5.3, pp. 17–18; Theorem 5.7
        statement, p. 18, and proof, pp. 19–20; Lemma 5.10 and proof, p. 19;
        Fact 5.15 and preceding paragraph, p. 22.
      reading_limits: Read these primary PDF extracted-text passages. Checked
        arbitrary-small-site scope, unbounded homological complexes,
        coproduct-of-representables hypercovers and product totalization after
        reindexing to cochains. Theorem 5.11 and deeper simplicial-localization
        inputs remain imported; their proofs were not reconstructed. No visual
        PDF inspection is claimed.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      version: arXiv:2309.08463v1; accessed 2026-11-09.
      locator: Section 3.3, p. 14, equation (3.4) and immediately following topology
        and square-criterion paragraph.
      reading_limits: Read the primary PDF extracted-text paragraph and square labels.
        Both finite-presentation hypotheses and qcqs scope were checked. The
        literal square-only criterion omits the empty-object condition, already
        supplied and verified by the current local helpers. The cited
        nonnoetherian square-descent proofs remain imported; no visual PDF
        inspection is claimed.
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. On the entire qcqs prime-field cdh site specified in the qcqs-site supplier, the functor $E(X)=R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$, for any prime $p$, is cdh-local in the hypercomplete derived-sheaf sense. Write $L^{h,F}_{\mathrm{cdh}}=Ri\,a$ for the general-localization supplier’s reflector, and $L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification. Thus $E\xrightarrow{\sim}L^{h,F}_{\mathrm{cdh}}E$ is its hypercomplete unit equivalence. It is also an ordinary cdh sheaf, so its ordinary source unit $E\to L^{o,F}_{\mathrm{cdh}}E$ is an equivalence. It satisfies Nisnevich descent and sends every source abstract blowup square to a cartesian square. More generally these statements hold for constant coefficients in any finite commutative ring. In particular they apply to the article’s characteristic-zero argument. The claim does not depend on replacing the qcqs site by its separated finite-type subcategory.

## Statement references

[[lem-author-dcdf962edbda-qcqs-site]]

## Facts & Assumptions
**Given:** Choice, the fixed universe and site-size bounds, the qcqs prime-field site, and a finite commutative coefficient ring $\Lambda$ as in the statement.

**Goal:** Prove hypercomplete and ordinary cdh locality, Nisnevich descent, and descent for every specified abstract blowup square of the actual complex $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$.

[A1] Choice and the fixed bounds are inherited from the selected K-injective resolution and derived inclusion/evaluation model used in steps 1.1 and 4.1. [[math:def-axiom-of-choice]]

[F1] The entire qcqs prime-field site, including its finitely presented closed centers and finitely presented proper maps, is fixed by [[lem-author-dcdf962edbda-qcqs-site]].

[F2] The hypercomplete reflector on this site is $Ri\,a$, and hypercover-descent complexes are its local objects. This is the arbitrary-small-site linear criterion, with cochain reindexing and product totalization, used by [[lem-author-7113c087ecba-general-localization]].

[F3] Every specified cdh generator is an arc cover, including on nonnoetherian qcqs schemes. [[lem-author-7113c087ecba-generators-arc]]

[F4] Derived endomorphisms of the constant unit in the finite-coefficient constructible category give the actual complex $E_\Lambda$, with its pullbacks, and satisfy arc hyperdescent. The imported theorem is explicitly hypercomplete and requires only a finite coefficient ring. [[lem-author-7113c087ecba-endomorphism-hyperdescent]]

[F5] The actual complex satisfies cdh hyperdescent and Nisnevich descent on this site, sends each specified abstract blowup square to a cartesian square, and has $E_\Lambda(\varnothing)=0$. The empty value is included when applying the source square criterion. [[lem-author-7113c087ecba-cdh-hyperdescent]]

[F6] For this same reflector and actual complex, the hypercomplete unit is an equivalence; hyperdescent also gives ordinary locality and the ordinary unit equivalence. [[lem-author-7113c087ecba-locality-unit]]

## Proof
1.1 Fix $\Lambda$ and the site of [F1]. Apply [F2] under [A1] to use the specified hypercomplete derived-localization model on that entire site. Its local objects are characterized by descent for all hypercovers, rather than merely for ordinary ideal blowup squares. Evaluation on formal coproducts of representables is interpreted by products in this criterion. [given, F1, F2, A1]

2.1 By [F3], every matching map of a cdh hypercover is also locally surjective for the finer arc topology. Apply [F4]: the constant coefficient unit is bounded constructible, its derived pullback is the constant unit, and mapping objects between that unit and all its shifts preserve the descent limit. Thus the comparison concerns the entire derived complex with its actual pullbacks. No invertibility hypothesis on the order of $\Lambda$ is required. [F3, F4, step 1.1]

3.1 Apply [F5] on this exact site to obtain cdh hyperdescent, Nisnevich descent and cartesian values on every specified abstract blowup square. Its zero value on the empty scheme supplies the empty-cover condition in the source square criterion. Both finite-presentation conventions are retained. [F1, F5, step 2.1]

4.1 The hyperdescent just established meets [F2], so [F6] gives the equivalence of the actual unit $E_\Lambda\to L^{h,F}_{\mathrm{cdh}}E_\Lambda$. Hyperdescent includes ordinary covering-family descent; [F6] therefore also gives $E_\Lambda\to L^{o,F}_{\mathrm{cdh}}E_\Lambda$ as an equivalence. Set $\Lambda=\mathbb Z/p$ for any prime $p$ to recover the article input, including characteristic zero. All arguments took place on the full qcqs site, so the other finite rings and every original scope assertion follow as well. [F2, F6, A1, step 3.1] ∎

The article's citation of Stacks Lemma 59.105.1 supplies an ordinary ideal-blowup triangle for bounded-below torsion complexes. That citation alone does not identify a full cdh localization on the qcqs site. The argument above uses the separate full-site suppliers. The original citation-scope gap remains recorded; it is not an error in the Stacks theorem. Ordinary source sheafification and hypercompletion remain distinct reflectors on arbitrary inputs.

## Source scope

The article's citation of Stacks Lemma 59.105.1 supplies an ordinary ideal-blowup triangle for bounded-below torsion complexes. That citation alone does not identify a full cdh localization on the qcqs site. The argument above uses the separate full-site suppliers. The original citation-scope gap remains recorded; it is not an error in the Stacks theorem. Ordinary source sheafification and hypercompletion remain distinct reflectors on arbitrary inputs.
