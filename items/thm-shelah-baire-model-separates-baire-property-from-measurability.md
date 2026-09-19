---
id: thm-shelah-baire-model-separates-baire-property-from-measurability
kind: theorem
title: Shelah's model separates universal Baire property from universal measurability
status: draft
origin: pipeline
deps: [thm-baire-property-model-equiconsistent-with-zfc, thm-shelah-inner-model-all-sets-of-reals-have-baire-property, thm-all-real-sets-measurable-gives-an-inaccessible-inner-model, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-constructibility-is-absolute-and-l-is-minimal, thm-shelah-inner-model-satisfies-zf-and-dependent-choice, def-lc-inaccessible-and-mahlo-cardinals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.16, Conclusion 7.17 and remarks (3)-(4), pp. 43-44"}
---

## Statement

Relative to $\operatorname{Con}(\mathrm{ZFC})$, it is consistent that ZF+DC
holds, every set of reals has the Baire property, and not every set of reals is
Lebesgue measurable. Thus universal Baire property does not entail universal
Lebesgue measurability over ZF+DC.

## Facts & Assumptions

**Given:** A model $M$ of ZFC, available from $\operatorname{Con}(\mathrm{ZFC})$ through the formal machinery, and the Shelah construction of this pair.

[F1] [[thm-constructibility-is-absolute-and-l-is-minimal]]: constructibility is absolute between transitive models with the same ordinals, and $L$ is minimal.

[F2] [[def-lc-inaccessible-and-mahlo-cardinals]] defines an inaccessible cardinal as an uncountable regular strong-limit cardinal. It supplies the meaning of the property used in the least-inaccessible case below; no transfer of non-inaccessibility between models is attributed to this definition.

[F3] [[thm-baire-property-model-equiconsistent-with-zfc]] with [[thm-shelah-inner-model-all-sets-of-reals-have-baire-property]]: over a model of ZFC+CH one can perform the ccc Shelah construction and pass to $N=HOD(S)$, which satisfies ZF+DC and in which every set of reals has the Baire property.

[F4] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]: $N$ has the same ordinals and reals as the extension and satisfies ZF+DC.

[F5] [[thm-chain-condition-preserves-cofinalities-and-cardinals]]: ccc forcing preserves all cardinals and cofinalities.

[F6] [[thm-all-real-sets-measurable-gives-an-inaccessible-inner-model]]: if a model of ZF+DC has all real sets measurable, its constructible universe contains an inaccessible cardinal.

## Proof

1.1 Work inside $M$; by [F1] the constructible universe $L^M$ is an inner model of ZFC+GCH. If $L^M$ has no inaccessible cardinal, let $N_0=L^M$; otherwise let $\kappa$ be the least inaccessible cardinal of $L^M$ and let $N_0=(L_\kappa)^{L^M}$. In the second case $N_0$ is a transitive set model of ZFC $+V=L$, and $\kappa$ is not an element of $N_0$. Moreover, if $\lambda<\kappa$ were inaccessible in $N_0$, it would be inaccessible in $L^M$: every subset of an ordinal below $\lambda$ and every function between ordinals below $\lambda$ that belongs to $L^M$ already has constructible rank below $\kappa$, so the cardinal, regularity and strong-limit clauses of [F2] are absolute here. That would contradict the minimality of $\kappa$. Thus in both cases $N_0$ satisfies ZFC+CH and has no inaccessible cardinal in its constructible universe, which is itself. [F1, F2]

1.2 Perform the Shelah construction inside $N_0$, which is legitimate by [F3] because $N_0$ satisfies ZFC+CH, and let $N_0[G]$ be the ccc generic extension with its inner model $N=HOD(S)$. [F3]

1.3 $N$ satisfies ZF+DC by [F4] and every subset of the reals in $N$ has the Baire property by [F3]. The ccc of the construction preserves all cardinals and cofinalities by [F5], so $\omega_1^N=\omega_1^{N_0}$, and $N$ has the same ordinals and reals as $N_0[G]$. [F3, F4, F5]

2.1 The constructible universe of $N$ is $N_0$: by [F1] constructibility is absolute between transitive models with the same ordinals, and $L^{N_0[G]}=L^{N_0}=N_0$ because $N_0\models V=L$. Hence $L^N=N_0$ has no inaccessible cardinal. [F1, step 1.3]

3.1 If every set of reals in $N$ were Lebesgue measurable, then [F6] applied inside the model $N$, which satisfies ZF+DC, would make $\omega_1^N$ an inaccessible cardinal of $L^N=N_0$; this contradicts step 2.1. Therefore $N$ has a set of reals that is not Lebesgue measurable. [F6, step 2.1]

4.1 Starting from the arbitrary model $M$ of ZFC, steps 1.1--3.1 construct a model $N$ of $\mathrm{ZF}+\mathrm{DC}+\text{all BP}+\neg\text{all LM}$. Hence the source-backed external model construction yields $$\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all BP}+\neg\text{all LM}).$$ No additional uniform proof-code compiler is asserted. [F3, F6, step 1.1, step 3.1]

5.1 The steps above establish the relative consistency and the failure of the implication from universal BP to universal LM over ZF+DC; this is the Statement. [step 1.3, step 3.1, step 4.1] ∎
