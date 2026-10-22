---
id: thm-unknotting-number-at-least-half-levine-tristram-signature
kind: theorem
title: The classical signature bounds unknotting number
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-knot-bridge-position-and-unknotting-number
  - lem-rank-one-hermitian-signature-perturbation
  - lem-seifert-matrices-differ-rank-one-under-crossing-change
  - def-levine-tristram-hermitian-form-and-signature
  - lem-levine-tristram-hermitian-form-singular-set
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-seifert-matrix-skew-part-is-surface-intersection
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Proposition 2.3.9 and Corollary 2.3.10, printed pp. 24–25"
    - title: "Anthony Conway, The Levine–Tristram signature: a survey"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§§2.1 and 2.4, printed pp. 3–7, Hermitian form and signature convention"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. For every smooth oriented knot $K$, the classical signature $\sigma_{-1}(K)$ of the positive-push Seifert form is independent of the chosen connected spanning surface and integral basis, and it satisfies
$$|\sigma_{-1}(K)|\le 2u(K).$$
Zero eigenvalues are omitted when computing the signature of a Hermitian matrix.

## Statement references

[[def-levine-tristram-hermitian-form-and-signature|The positive-push Hermitian form and the classical value at minus one]]

[[def-knot-bridge-position-and-unknotting-number|The unknotting number as a minimum crossing-change length]]

## Facts & Assumptions

**Given:** Full AC and a smooth oriented knot $K$.

[A1] Full AC implies the countable-choice hypothesis of the unknotting-number definition. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The unknotting set is nonempty and $u(K)$ is its least element, measured by finite sequences of crossing changes in regular diagrams. [[def-knot-bridge-position-and-unknotting-number]]

[F2] A single crossing change admits corresponding Seifert matrices with difference zero or $\pm vv^T$. [[lem-seifert-matrices-differ-rank-one-under-crossing-change]]

[F3] Two Hermitian matrices differing by rank at most one have signatures differing by at most two, with zero eigenvalues omitted. [[lem-rank-one-hermitian-signature-perturbation]]

[F4] The positive-push matrix gives $H_{-1}(V)=2(V+V^T)$; surface and basis changes preserve its signature. At a nonroot this is the declared invariant $\sigma_{-1}$. [[def-levine-tristram-hermitian-form-and-signature]], [[lem-seifert-stabilization-preserves-levine-tristram-signature]], [[lem-levine-tristram-hermitian-form-singular-set]]

[F5] The skew part $V-V^T$ is the unimodular intersection pairing of a knot Seifert surface. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

## Proof

1.1 At $\omega=-1$ the form is nonsingular for every knot. Indeed $V+V^T\equiv V-V^T\pmod2$, so its determinant is odd by [F5] and in particular is not zero. Thus $H_{-1}=2(V+V^T)$ is nonsingular. By [F4], $-1$ is not an Alexander root and the actual matrix signature is precisely $\sigma_{-1}(K)$; its surface and basis independence also follows from [F4]. This removes any need to use a root-average convention at $-1$. [A1, F4, F5, given, algebra]

2.1 For two successive knots in a crossing-change sequence, use the two corresponding bases from [F2]. If their Seifert matrix difference is $\pm vv^T$, their $H_{-1}$ difference is $\pm4vv^T$, of rank at most one; if the difference is zero, the same bound holds. By [F3], the absolute signature change is at most two. Step 1.1 identifies the signatures of these particular matrices with the knot invariants, regardless of which diagram surfaces occur at other stages. [F2, F3, F4, step 1.1, algebra]

3.1 By [F1], take a sequence of length $u(K)$ ending at the standard unknot. Its disk Seifert surface has an empty matrix and signature zero. Apply the estimate of step 2.1 to each consecutive pair and add the finitely many inequalities. The triangle inequality yields $|\sigma_{-1}(K)|\le2u(K)$, including a length-zero sequence. Together with step 1.1 this proves both claims. [F1, F4, step 1.1, step 2.1, choose, algebra] ∎
