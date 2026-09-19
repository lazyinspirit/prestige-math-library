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

[F3] [[thm-constructibility-is-absolute-and-l-is-minimal]]: constructibility is absolute between the relevant transitive models with the same ordinals, and $L\subseteq L[x]\subseteq V$. No preservation of $L$-cardinals in $V$ is asserted: in fact, every ordinal below the ambient $\omega_1$ is countable in $V$.

[F4] [[def-lc-inaccessible-and-mahlo-cardinals]]: a cardinal is inaccessible when it is uncountable, regular and a strong limit.

## Proof

1.1 The ambient $\omega_1$ is regular by Countable Choice, and it is a cardinal in $L$: an $L$-definable surjection from a smaller ordinal onto $\omega_1$ would still be a surjection in the universe. It is also regular in $L$, since an $L$-cofinal map from a smaller ordinal would remain cofinal in the universe. [F1, F3]

2.1 Hence, if $\omega_1$ is not inaccessible in $L$, it fails one of the three clauses of [F4] there. It is uncountable in $L$ (it is uncountable in the universe and $L$ has the same ordinals) and regular in $L$ by step 1.1, so it is not a strong limit cardinal of $L$: there is a cardinal $\mu<\omega_1$ of $L$ with $(2^\mu)^L\ge\omega_1$. By GCH in $L$, $(2^\mu)^L=\mu^+$, so the ordinal $\omega_1$ equals $(\mu^+)^L$ for some $L$-cardinal $\mu<\omega_1$. [F2, F4, step 1.1]

3.1 The ordinal $\mu$ is countable in the ambient universe because $\mu<\omega_1$, so there exists a real $x$ coding a bijection $b:\omega\to\mu$. This is one existential choice from a nonempty set of codes and needs no family-choice principle. [F1, step 2.1]

4.1 Let $\beta<(\mu^+)^L=\omega_1$. Because $\mu$ is an $L$-cardinal and $\beta$ lies below its $L$-successor, $L$ contains a surjection from $\mu$ onto $\beta$; this map also belongs to $L[x]$ by [F3]. Composing it with the bijection $b$ coded by $x$ makes $\beta$ countable in $L[x]$. Thus every ordinal below the ambient $\omega_1$ is countable in $L[x]$, so $\omega_1^{L[x]}\geq\omega_1$. Conversely the ambient $\omega_1$ is uncountable in $L[x]$, since any bijection with $\omega$ in $L[x]\subseteq V$ would contradict its ambient definition; hence $\omega_1^{L[x]}\leq\omega_1$. Therefore equality holds. [F3, step 2.1, step 3.1]

5.1 The steps above produce a real $x$ with $\omega_1^{L[x]}=\omega_1$ from the failure of inaccessibility in $L$; only this existential real is claimed, not the statement for every real. [step 4.1] ∎
