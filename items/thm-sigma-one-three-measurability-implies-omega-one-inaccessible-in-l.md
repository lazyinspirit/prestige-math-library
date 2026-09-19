---
id: thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l
kind: theorem
title: Sigma-one-three measurability makes omega-one inaccessible in L
status: draft
origin: pipeline
deps: [def-boldface-sigma-one-three-measurability, lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one, lem-raisonnier-family-is-a-sigma-one-three-filter, thm-raisonnier-filter-is-rapid-from-null-code-measurability, thm-rapid-filters-are-not-lebesgue-measurable, def-countable-choice, lem-measurable-null-code-orders-bound-constructible-null-unions]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Theorem 3.4 and Theorem 3.3, pp. 50-51"}
---

## Statement

Assume ZF+Countable Choice and boldface $\Sigma^1_3$ measurability. Then the
ambient $\omega_1$ is an inaccessible cardinal in $L$.

## Facts & Assumptions

**Given:** Countable Choice and the hypothesis that every $\Sigma^1_3(x)$ set of reals is Lebesgue measurable for every real $x$.

[F1] [[def-boldface-sigma-one-three-measurability]]: the pointclass $\Sigma^1_3(x)$, the inclusion of $\Sigma^1_2(x)$ in $\Sigma^1_3(x)$ by a dummy real quantifier, and the definition of boldface measurability.

[F2] [[lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one]]: failure of inaccessibility of the ambient $\omega_1$ in $L$ yields a real $x$ with $\omega_1^{L[x]}=\omega_1$.

[F3] [[lem-measurable-null-code-orders-bound-constructible-null-unions]]: the null-code order $A(x)$ is $\Sigma^1_2(x)$, and its measurability makes the union of the constructible null Borel sets null.

[F4] [[thm-raisonnier-filter-is-rapid-from-null-code-measurability]]: under Countable Choice and $\omega_1^{L[x]}=\omega_1$, measurability of $A(x\oplus r)$ for every real $r$ makes the filter $F(x)$ rapid.

[F5] [[lem-raisonnier-family-is-a-sigma-one-three-filter]]: $F(x)$ is a $\Sigma^1_3(x)$ subset of the reals.

[F6] [[thm-rapid-filters-are-not-lebesgue-measurable]]: rapid filters are not Lebesgue measurable.

[F7] [[def-countable-choice]]: the ambient choice hypothesis.

## Proof

1.1 Assume, for contradiction, that the ambient $\omega_1$ is not an inaccessible cardinal of $L$, and let $x$ be a real with $\omega_1^{L[x]}=\omega_1$, as supplied by [F2]. [assume-contra, F2]

2.1 For every real $r$, apply [F3] with the real parameter $x\oplus r$: $A(x\oplus r)$ is $\Sigma^1_2(x\oplus r)$. By [F1] it is also $\Sigma^1_3(x\oplus r)$, so the boldface measurability hypothesis makes every such null-code order measurable. [F1, F3, step 1.1]

3.1 By [F4], applied with Countable Choice [F7], $\omega_1^{L[x]}=\omega_1$, and the uniform measurability from step 2.1, the Raisonnier filter $F(x)$ is rapid. [F4, F7, step 1.1, step 2.1]

4.1 By [F5] the filter $F(x)$ is a $\Sigma^1_3(x)$ set of reals, and by [F6] it is not Lebesgue measurable. This contradicts the hypothesis that every $\Sigma^1_3(x)$ set is measurable. [F5, F6, step 3.1]

5.1 The contradiction in step 4.1 refutes the assumption of step 1.1, so the ambient $\omega_1$ is inaccessible in $L$. [discharge-contradiction, step 4.1] ∎
