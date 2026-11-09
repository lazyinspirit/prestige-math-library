---
title: The actual cdh-localization unit is an equivalence
status: draft
research_item: lem-author-7113c087ecba-locality-unit
dependency_level: 13
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-7113c087ecba-general-localization](item-lem-author-7113c087ecba-general-localization)
- [lem-author-7113c087ecba-cdh-hyperdescent](item-lem-author-7113c087ecba-cdh-hyperdescent)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the derived-sections and general-localization suppliers. Write $L^{h,F}_{\mathrm{cdh}}=Ri\,a$ for the hypercomplete reflector denoted $L^F_{\mathrm{cdh}}$ by the general-localization supplier, and $L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification. For a finite commutative ring $\Lambda$, the canonical unit $E_\Lambda\to L^{h,F}_{\mathrm{cdh}}E_\Lambda$ is an equivalence on the exact qcqs prime-field cdh site. Its evaluation gives natural equivalences
$$R\Gamma_{\mathrm{et}}(X,\Lambda)\simeq(L^{h,F}_{\mathrm{cdh}}E_\Lambda)(X).$$
This is derived locality with respect to all sheafified-cohomology equivalences, and in particular implies ordinary locality. Thus the ordinary source unit $E_\Lambda\to L^{o,F}_{\mathrm{cdh}}E_\Lambda$ is also an equivalence.

## Facts & Assumptions

[A1] Choice and the stated bounds are inherited from the K-injective localization and derived-evaluation constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] [lem-author-7113c087ecba-general-localization](item-lem-author-7113c087ecba-general-localization) and [lem-author-7113c087ecba-cdh-hyperdescent](item-lem-author-7113c087ecba-cdh-hyperdescent).

## Proof
1.1 The preceding hyperdescent lemma verifies every hypercover required by the linear criterion in the general-localization lemma. That criterion identifies $E_\Lambda$ as a local object of $Ri\,a$. An object in the essential image of a reflective localization has invertible unit, by full faithfulness of its right adjoint. Therefore the hypercomplete unit is an equivalence. Hypercover descent includes covering-family/Čech descent, so $E_\Lambda$ is also an ordinary sheaf and its ordinary localization unit is an equivalence by the same reflective universal property. [F1, A1]

2.1 Evaluate this actual natural unit at $X$ and use the chosen derived-evaluation model. Evaluation preserves equivalences, so the displayed equivalence follows and is compatible with every pullback. In particular it is valid at the article’s affine threefold, without any change to the chosen big site. [F1, step 1.1] ∎
