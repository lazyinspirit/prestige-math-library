---
id: thm-bridge-one-is-unknot-and-signature-crossing-change-bound
kind: theorem
title: Bridge number one characterizes the unknot and signature bounds unknotting number
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 17
deps:
  - thm-bridge-one-is-unknot
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-unknotting-number-at-least-half-levine-tristram-signature
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Definition 1, printed pp. 1–2, bridge-position convention"
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Proposition 2.3.9, printed pp. 24–25, signature crossing-change bound"
---

## Statement

Assume full AC. For every smooth oriented knot $K$, $b(K)=1$ if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the fixed oriented coordinate circle, and the classical signature satisfies $|\sigma_{-1}(K)|\le 2u(K)$, where $u(K)$ is the minimum number of crossing changes needed to reach that circle.

## Statement references

[[thm-bridge-one-is-unknot|The bridge-number-one characterization]]

[[thm-unknotting-number-at-least-half-levine-tristram-signature|The signature lower bound for unknotting number]]

## Facts & Assumptions

**Given:** Full AC and a smooth oriented knot $K$.

[A1] Full AC implies the countable-choice hypothesis of the bridge-number-one theorem. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Under countable choice, $b(K)=1$ if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the fixed oriented coordinate circle. [[thm-bridge-one-is-unknot]]

[F2] Under full AC, the classical signature is well-defined and satisfies $|\sigma_{-1}(K)|\le2u(K)$. [[thm-unknotting-number-at-least-half-levine-tristram-signature]]

## Proof

1.1 By [A1], the hypotheses of [F1] hold, so it supplies both implications of the asserted bridge-number characterization, with the specified oriented standard unknot. [A1, F1, given]

2.1 Apply [F2] to the same knot. It gives the asserted signature inequality with the same unknotting-number convention. Combining it with step 1.1 proves the conjunction without changing either interface. [F2, step 1.1] ∎
