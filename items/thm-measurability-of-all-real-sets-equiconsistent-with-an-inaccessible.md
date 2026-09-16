---
id: thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible
kind: theorem
title: Exact equiconsistency of universal measurability and an inaccessible
status: draft
origin: pipeline
deps: [thm-all-real-sets-measurable-gives-an-inaccessible-inner-model, thm-solovay-model-regularity-relative-to-an-inaccessible, lem-solovay-construction-is-uniformly-formalizable, thm-formal-consistency-transfer-by-forcing, def-countable-choice, def-boldface-sigma-one-three-measurability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.3 and the concluding corollary, pp. 43 and 51"}
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part I, Sections 4.1-4.4"}
---

## Statement

ZFC plus an inaccessible cardinal and ZF+DC plus every set of reals Lebesgue
measurable are equiconsistent. The same lower bound already follows from
universal boldface $\Sigma^1_3$ measurability under Countable Choice.

## Facts & Assumptions

**Given:** Fixed arithmetizations of the two theories and their finite fragments.

[F1] [[thm-solovay-model-regularity-relative-to-an-inaccessible]] with [[lem-solovay-construction-is-uniformly-formalizable]]: the Lévy-collapse construction from an inaccessible yields, fragment by fragment, a set model of ZF+DC in which every set of reals is Lebesgue measurable (among further regularity properties).

[F2] [[thm-all-real-sets-measurable-gives-an-inaccessible-inner-model]]: from ZF+DC plus universal measurability, the constructible universe satisfies ZFC and contains an inaccessible cardinal, with the consistency implication verified fragment by fragment.

[F3] [[def-countable-choice]] with [[def-boldface-sigma-one-three-measurability]] and the argument of [F2]: the same inner-model lower bound applies when the hypothesis is ZF+Countable Choice plus universal boldface $\Sigma^1_3$ measurability, because the argument needs only Countable Choice and the $\Sigma^1_3$ clause.

[F4] [[thm-formal-consistency-transfer-by-forcing]]: the general compiler that turns the uniform verification supplied by [F1] into a consistency implication.

## Proof

1.1 Upper bound: assume $\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$. By [F1] the Solovay construction is uniformly formalizable fragment by fragment, and the compiler [F4] yields $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{every set of reals is Lebesgue measurable})$. [F1, F4]

1.2 Lower bound: assume $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{universal LM})$. By [F2] every model of this theory has an internal constructible universe satisfying ZFC together with an inaccessible cardinal, so $\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$ follows. [F2]

1.3 The refinement: if only Countable Choice and boldface $\Sigma^1_3$ measurability are assumed, the argument of [F2] still applies by [F3] and gives the same inaccessible in the constructible universe; hence the consistency of ZF+CC+boldface $\Sigma^1_3$ measurability already implies the consistency of ZFC plus an inaccessible cardinal. This is the stronger form of the lower bound stated. [F3]

1.4 The inaccessible hypothesis is needed only on the Solovay branch: steps 1.1 uses it, and steps 1.2 and 1.3 use none; the separation of the two branches is the point of this pair. [F1, F2, F3]

2.1 Steps 1.1 through 1.3 give the two consistency implications in both directions, and step 1.4 records the exact role of the inaccessible; this is the Statement. [step 1.1, step 1.2, step 1.3] ∎
