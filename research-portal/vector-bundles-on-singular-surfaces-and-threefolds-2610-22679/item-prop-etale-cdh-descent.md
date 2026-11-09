---
title: Étale derived cdh locality on the actual qcqs site
status: published
research_item: prop-etale-cdh-descent
dependency_level: 14
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


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. On the entire qcqs prime-field cdh site specified in the qcqs-site supplier, the functor $E(X)=R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$, for any prime $p$, is cdh-local in the hypercomplete derived-sheaf sense. Write $L^{h,F}_{\mathrm{cdh}}=Ri\,a$ for the general-localization supplier’s reflector, and $L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification. Thus $E\xrightarrow{\sim}L^{h,F}_{\mathrm{cdh}}E$ is its hypercomplete unit equivalence. It is also an ordinary cdh sheaf, so its ordinary source unit $E\to L^{o,F}_{\mathrm{cdh}}E$ is an equivalence. It satisfies Nisnevich descent and sends every source abstract blowup square to a cartesian square. More generally these statements hold for constant coefficients in any finite commutative ring. In particular they apply to the article’s characteristic-zero argument. The claim does not depend on replacing the qcqs site by its separated finite-type subcategory.

## Statement references

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

## Facts & Assumptions
**Given:** Choice, the fixed universe and site-size bounds, the qcqs prime-field site, and a finite commutative coefficient ring $\Lambda$ as in the statement.

**Goal:** Prove hypercomplete and ordinary cdh locality, Nisnevich descent, and descent for every specified abstract blowup square of the actual complex $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$.

[A1] Choice and the fixed bounds are inherited from the selected K-injective resolution and derived inclusion/evaluation model used in steps 1.1 and 4.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The entire qcqs prime-field site, including its finitely presented closed centers and finitely presented proper maps, is fixed by [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site).

[F2] The hypercomplete reflector on this site is $Ri\,a$, and hypercover-descent complexes are its local objects. This is the arbitrary-small-site linear criterion, with cochain reindexing and product totalization, used by [lem-author-7113c087ecba-general-localization](item-lem-author-7113c087ecba-general-localization).

[F3] Every specified cdh generator is an arc cover, including on nonnoetherian qcqs schemes. [lem-author-7113c087ecba-generators-arc](item-lem-author-7113c087ecba-generators-arc)

[F4] Derived endomorphisms of the constant unit in the finite-coefficient constructible category give the actual complex $E_\Lambda$, with its pullbacks, and satisfy arc hyperdescent. The imported theorem is explicitly hypercomplete and requires only a finite coefficient ring. [lem-author-7113c087ecba-endomorphism-hyperdescent](item-lem-author-7113c087ecba-endomorphism-hyperdescent)

[F5] The actual complex satisfies cdh hyperdescent and Nisnevich descent on this site, sends each specified abstract blowup square to a cartesian square, and has $E_\Lambda(\varnothing)=0$. The empty value is included when applying the source square criterion. [lem-author-7113c087ecba-cdh-hyperdescent](item-lem-author-7113c087ecba-cdh-hyperdescent)

[F6] For this same reflector and actual complex, the hypercomplete unit is an equivalence; hyperdescent also gives ordinary locality and the ordinary unit equivalence. [lem-author-7113c087ecba-locality-unit](item-lem-author-7113c087ecba-locality-unit)

## Proof
1.1 Fix $\Lambda$ and the site of [F1]. Apply [F2] under [A1] to use the specified hypercomplete derived-localization model on that entire site. Its local objects are characterized by descent for all hypercovers, rather than merely for ordinary ideal blowup squares. Evaluation on formal coproducts of representables is interpreted by products in this criterion. [given, F1, F2, A1]

2.1 By [F3], every matching map of a cdh hypercover is also locally surjective for the finer arc topology. Apply [F4]: the constant coefficient unit is bounded constructible, its derived pullback is the constant unit, and mapping objects between that unit and all its shifts preserve the descent limit. Thus the comparison concerns the entire derived complex with its actual pullbacks. No invertibility hypothesis on the order of $\Lambda$ is required. [F3, F4, step 1.1]

3.1 Apply [F5] on this exact site to obtain cdh hyperdescent, Nisnevich descent and cartesian values on every specified abstract blowup square. Its zero value on the empty scheme supplies the empty-cover condition in the source square criterion. Both finite-presentation conventions are retained. [F1, F5, step 2.1]

4.1 The hyperdescent just established meets [F2], so [F6] gives the equivalence of the actual unit $E_\Lambda\to L^{h,F}_{\mathrm{cdh}}E_\Lambda$. Hyperdescent includes ordinary covering-family descent; [F6] therefore also gives $E_\Lambda\to L^{o,F}_{\mathrm{cdh}}E_\Lambda$ as an equivalence. Set $\Lambda=\mathbb Z/p$ for any prime $p$ to recover the article input, including characteristic zero. All arguments took place on the full qcqs site, so the other finite rings and every original scope assertion follow as well. [F2, F6, A1, step 3.1] ∎

The article's citation of Stacks Lemma 59.105.1 supplies an ordinary ideal-blowup triangle for bounded-below torsion complexes. That citation alone does not identify a full cdh localization on the qcqs site. The argument above uses the separate full-site suppliers. The original citation-scope gap remains recorded; it is not an error in the Stacks theorem. Ordinary source sheafification and hypercompletion remain distinct reflectors on arbitrary inputs.

## Source scope

The article's citation of Stacks Lemma 59.105.1 supplies an ordinary ideal-blowup triangle for bounded-below torsion complexes. That citation alone does not identify a full cdh localization on the qcqs site. The argument above uses the separate full-site suppliers. The original citation-scope gap remains recorded; it is not an error in the Stacks theorem. Ordinary source sheafification and hypercompletion remain distinct reflectors on arbitrary inputs.
