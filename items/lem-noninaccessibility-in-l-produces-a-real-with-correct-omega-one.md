---
id: lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one
kind: lemma
title: Failure of inaccessibility in L produces a real with correct omega-one
status: draft
origin: pipeline
deps: [def-countable-choice, cor-countable-choice-and-omega-one-cofinality, thm-generalized-continuum-hypothesis-in-l, thm-constructibility-is-absolute-and-l-is-minimal, def-lc-inaccessible-and-mahlo-cardinals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.5 and Theorem 3.3, pp. 43-44"}
---

## Statement

Work in ZF+Countable Choice. If the ambient $\omega_1$ is not an inaccessible
cardinal of $L$, then there is a real $x$ such that $\omega_1^{L[x]}$ equals the
ambient $\omega_1$.

## Facts & Assumptions

**Given:** Countable Choice and the hypothesis that the ambient $\omega_1$ is not inaccessible in $L$.

[F1] [[def-countable-choice]] with [[cor-countable-choice-and-omega-one-cofinality]]: Countable Choice makes the ambient $\omega_1$ regular, and every countable subset of $\omega_1$ is bounded.

[F2] [[thm-generalized-continuum-hypothesis-in-l]]: $L$ satisfies GCH, so inside $L$ the power-set operation is the cardinal successor and $2^{\aleph_0}=\aleph_1$.

[F3] [[thm-constructibility-is-absolute-and-l-is-minimal]]: constructibility is absolute between transitive models with the same ordinals, and $L$ is contained in every inner model; cardinals of $L$ remain cardinals when computed below the ambient $\omega_1$, and every ordinal below $\omega_1$ is countable in the ambient universe.

[F4] [[def-lc-inaccessible-and-mahlo-cardinals]]: a cardinal is inaccessible when it is uncountable, regular and a strong limit.

## Proof

1.1 The ambient $\omega_1$ is regular by Countable Choice, and it is a cardinal in $L$: an $L$-definable surjection from a smaller ordinal onto $\omega_1$ would still be a surjection in the universe. It is also regular in $L$, since an $L$-cofinal map from a smaller ordinal would remain cofinal in the universe. [F1, F3]

2.1 Hence, if $\omega_1$ is not inaccessible in $L$, it fails one of the three clauses of [F4] there. It is uncountable in $L$ (it is uncountable in the universe and $L$ has the same ordinals) and regular in $L$ by step 1.1, so it is not a strong limit cardinal of $L$: there is a cardinal $\mu<\omega_1$ of $L$ with $(2^\mu)^L\ge\omega_1$. By GCH in $L$, $(2^\mu)^L=\mu^+$, so the ordinal $\omega_1$ equals $(\mu^+)^L$ for some $L$-cardinal $\mu<\omega_1$. [F2, F4, step 1.1]

3.1 The ordinal $\mu$ is countable in the ambient universe because $\mu<\omega_1$, so choose a real $x$ coding a bijection $\omega\to\mu$: the set of such reals is nonempty, and Countable Choice supplies one. [F1, step 2.1]

3.2 In $L[x]$ the ordinal $\mu$ is countable, and every ordinal below $\mu^+$ has $L$-cardinality at most $\mu$; composing with the bijection coded by $x$ makes each such ordinal countable in $L[x]$. Hence every ordinal below $(\mu^+)^L=\omega_1$ is countable in $L[x]$, while $\omega_1^{L[x]}$ cannot be smaller than the ambient $\omega_1$, since a collapsing bijection in $L[x]$ would be one in the universe and contradict that $\omega_1$ is a cardinal there. Therefore $\omega_1^{L[x]}=\omega_1$. [F1, F3, step 2.1]

4.1 The steps above produce a real $x$ with $\omega_1^{L[x]}=\omega_1$ from the failure of inaccessibility in $L$; only this existential real is claimed, not the statement for every real. [step 3.2] ∎
