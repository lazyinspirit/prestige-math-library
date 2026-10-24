---
id: cor-box-muller-from-independent-bits-gives-standard-normals
kind: corollary
title: "Disjoint ideal fair-bit streams yield independent standard normals by Box–Muller"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-independent-fair-bit-streams-produce-uniforms
  - lem-box-muller-product-density-and-radius-moment
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4, generating normal random variates"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Statement

Assume the Axiom of Choice and Dependent Choice. On the countable product space of ideal independent fair bits, choose two disjoint infinite coordinate subsequences and form their bit-stream uniforms $U_1,U_2$. Use the displayed formula when $0<U_1<1$, and define $Z=(0,0)$ when $U_1\notin(0,1)$, so the null endpoint event is assigned a value. Then
$$Z_1=\sqrt{-2\log U_1}\cos(2\pi U_2),\qquad Z_2=\sqrt{-2\log U_1}\sin(2\pi U_2)$$
are independent with the canonical standard-normal law $N(0,1)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Dependent Choice, the fair-bit product construction, and the two Box–Muller formulas in the Statement.

[F1] Disjoint fair-bit subsequences produce independent uniform variables under Countable Choice and Dependent Choice. [[thm-independent-fair-bit-streams-produce-uniforms]]

[F2] The Box–Muller transform of a joint-uniform pair has independent marginals with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$. [[lem-box-muller-product-density-and-radius-moment]]

[F3] Under the Axiom of Choice, the canonical law $N(0,1)$ is the probability measure with density $\phi$. [[def-standard-normal-and-normal-laws]]

[F4] A singleton has Lebesgue measure zero, so each uniform coordinate has zero probability of either endpoint. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[A1] The Axiom of Choice supplies Countable Choice and is used to identify the canonical $N(0,1)$ law. [[def-axiom-of-choice]], [[def-countable-choice]]

[A2] Dependent Choice is required by the countable fair-bit product. [[def-dependent-choice]]

## Proof

1.1 By [F1], the two disjoint subsequences give a joint-uniform pair on $[0,1]^2$; [F4] shows the pair lies in $(0,1)^2$ almost surely. The chosen endpoint convention changes no law. Applying [F2] gives a pair with independent marginals, each the probability law with density $\phi$. The existence of this finite bit pair uses Dependent Choice through [F1]. [given, F1, F2, F4, A1, A2]

2.1 By [A1], the Axiom of Choice supplies Countable Choice for the hypotheses of [F1] and is the exact axiom required by [F3]. Thus each density-$\phi$ marginal is the canonical $N(0,1)$ law, and the pair remains independent. [F1, F3, step 1.1, A1] ∎
