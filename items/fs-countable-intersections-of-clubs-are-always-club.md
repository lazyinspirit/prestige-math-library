---
id: fs-countable-intersections-of-clubs-are-always-club
kind: false-statement
title: "Countable intersections of clubs are always club"
status: published
origin: pipeline
deps: ["def-club-subsets-of-ordinals", "thm-small-intersections-of-clubs"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definition 5.7 and following completeness argument, pp.40–41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Fact 14.8, pp.80–81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

False without a cofinality restriction: for every limit ordinal $\theta$, a countable intersection of clubs in $\theta$ is club.

## Facts & Assumptions

[F1] [[def-club-subsets-of-ordinals]]: Club means closed and unbounded in the ambient ordinal.

[F2] [[thm-small-intersections-of-clubs]]: The intersection theorem requires the indexing size strictly below the ambient cofinality, with uncountable ambient cofinality.

## Refutation

**Given:** The objects and hypotheses in the statement.

1.1 At theta equal to omega, each tail $C_n=\{m<\omega:n\le m\}$ is unbounded and vacuously closed, because omega has no nonzero limit ordinal below it. Their intersection is empty and hence not club. [F1]

2.1 Even at the uncountable singular ordinal $\theta=\aleph_\omega$, the tails $D_n=[\aleph_n,\aleph_\omega)$ are club, but their intersection is empty since the alephs indexed by natural numbers are cofinal in theta. In both cases the countable index size equals, rather than lies strictly below, the ambient cofinality omega. Thus neither example meets the intersection theorem's hypotheses. [F1, F2, step 1.1] ∎
