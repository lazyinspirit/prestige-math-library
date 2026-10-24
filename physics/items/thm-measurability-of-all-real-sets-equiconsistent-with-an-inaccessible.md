---
id: thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible
kind: theorem
title: Exact equiconsistency of universal measurability and an inaccessible
status: published
origin: pipeline
deps: [thm-all-real-sets-measurable-gives-an-inaccessible-inner-model, thm-solovay-model-regularity-relative-to-an-inaccessible, thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l, thm-constructible-inner-model-semantic-and-formal-schema, lem-interpretation-translates-finite-derivations, def-countable-choice, def-boldface-sigma-one-three-measurability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.3 and the concluding corollary, pp. 43 and 51"}
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part I, Sections 4.1-4.4"}
verification:
  audited: 2026-09-22
---

## Statement

ZFC plus an inaccessible cardinal and ZF+DC plus every set of reals Lebesgue
measurable are equiconsistent. The same lower bound already follows from
universal boldface $\Sigma^1_3$ measurability under Countable Choice.

## Facts & Assumptions

**Given:** Fixed arithmetizations of the two theories and their finite fragments.

[F1] [[thm-solovay-model-regularity-relative-to-an-inaccessible]]: by the externally indexed finite-fragment transfer for the Lévy-collapse construction, $$ \operatorname{Con}(\mathrm{ZFC}+\text{an inaccessible}) \Longrightarrow \operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{universal LM}). $$ No uniform arithmetic proof-code transformer is used in that theorem.

[F2] [[thm-all-real-sets-measurable-gives-an-inaccessible-inner-model]]: from ZF+DC plus universal measurability, the constructible universe satisfies ZFC and contains an inaccessible cardinal. Relativization to that definable inner model is an interpretation, so it sends every actual finite target refutation to a source refutation ([[lem-interpretation-translates-finite-derivations]]).

[F3] Under ZF+Countable Choice plus universal boldface $\Sigma^1_3$ measurability, the ambient $\omega_1$ is inaccessible in $L$ ([[thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l]], [[def-countable-choice]], [[def-boldface-sigma-one-three-measurability]]), and $L$ satisfies ZFC ([[thm-constructible-inner-model-semantic-and-formal-schema]]). Relativization to $L$ therefore gives the same refutation translation as in [F2] ([[lem-interpretation-translates-finite-derivations]]).

## Proof

1.1 Upper bound: assume $\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$. The exact external finite-fragment consistency implication in [F1] yields $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{every set of reals is Lebesgue measurable})$. [F1]

1.2 Lower bound: assume $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{universal LM})$. If ZFC plus an inaccessible had an actual refutation, [F2] would translate it to a refutation of the assumed source theory. Hence $\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$ follows. [F2]

1.3 The refinement: if ZF+Countable Choice plus boldface $\Sigma^1_3$ measurability is consistent, an actual refutation of ZFC plus an inaccessible would translate by [F3] to a refutation of that source theory. Thus its consistency already implies the consistency of ZFC plus an inaccessible cardinal. This is the stronger form of the lower bound stated. [F3]

1.4 The inaccessible hypothesis is needed only on the Solovay branch: steps 1.1 uses it, and steps 1.2 and 1.3 use none; the separation of the two branches is the point of this pair. [F1, F2, F3]

2.1 Steps 1.1 through 1.3 give the two consistency implications in both directions, and step 1.4 records the exact role of the inaccessible; this is the Statement. [step 1.1, step 1.2, step 1.3] ∎
