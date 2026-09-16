---
id: thm-all-real-sets-measurable-gives-an-inaccessible-inner-model
kind: theorem
title: All-real-set measurability yields an inaccessible inner model
status: draft
origin: pipeline
deps: [thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l, thm-choice-implies-dependent-implies-countable-choice, thm-constructible-inner-model-semantic-and-formal-schema, thm-constructible-universe-satisfies-choice, def-lc-inaccessible-and-mahlo-cardinals, def-boldface-sigma-one-three-measurability, thm-formal-consistency-transfer-by-forcing]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.3 and its corollary, pp. 43 and 51"}
---

## Statement

If a universe satisfies ZF+DC and every set of reals is Lebesgue measurable, then
its constructible universe $L$ satisfies ZFC and contains an inaccessible
cardinal — indeed the ambient $\omega_1$ is inaccessible in $L$. Consequently
this theory has at least the consistency strength of ZFC plus an inaccessible
cardinal.

## Facts & Assumptions

**Given:** A universe $V$ with ZF+DC in which every set of reals is Lebesgue measurable.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: DC implies Countable Choice.

[F2] [[def-boldface-sigma-one-three-measurability]]: boldface $\Sigma^1_3$ measurability means that every $\Sigma^1_3(x)$ set is Lebesgue measurable for every real $x$; universal measurability of all real sets immediately implies it, since every $\Sigma^1_3(x)$ set is a set of reals.

[F3] [[thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l]]: under ZF+Countable Choice and boldface $\Sigma^1_3$ measurability, the ambient $\omega_1$ is inaccessible in $L$.

[F4] [[thm-constructible-inner-model-semantic-and-formal-schema]] with [[thm-constructible-universe-satisfies-choice]]: for every model of ZF, its constructible universe satisfies ZFC and has the same ordinals.

[F5] [[def-lc-inaccessible-and-mahlo-cardinals]]: the definition of inaccessibility, so that the same ordinal certified in [F3] is verified to be uncountable, regular and a strong limit inside $L$.

[F6] [[thm-formal-consistency-transfer-by-forcing]]: the formal compiler that turns an internally verified model construction into a consistency implication, fragment by fragment.

## Proof

1.1 DC implies Countable Choice by [F1], so the choice hypothesis of [F3] holds in $V$. [F1]

1.2 Every set of reals is measurable, hence every $\Sigma^1_3(x)$ set is measurable for every real $x$ by [F2]; thus $V$ satisfies boldface $\Sigma^1_3$ measurability. [F2]

2.1 By [F3] the ambient $\omega_1$ is inaccessible in $L$. [F3, step 1.1, step 1.2]

3.1 By [F4], $L$ satisfies ZFC and has the same ordinals as $V$; by [F5] the ordinal certified in step 2.1 is uncountable, regular and a strong limit in $L$, so $L\models$ "there is an inaccessible cardinal". [F4, F5, step 2.1]

4.1 Formal consistency: every finite fragment of ZF+DC+all-measurable is verified in $V$ to yield the corresponding finite fragment of ZFC+inaccessible inside the definable class $L$; the inner-model schema [F4] and the compiler [F6] convert this fragment-by-fragment verification into $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all measurable})\to\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$, without any external well-order of $V$ and without assuming a transitive set model. [F4, F6, step 3.1]

5.1 The steps above give the semantic conclusion that the ambient $\omega_1$ is inaccessible in $L$, and step 4.1 the stated consistency-strength consequence; this is the Statement. [step 2.1, step 4.1] ∎
