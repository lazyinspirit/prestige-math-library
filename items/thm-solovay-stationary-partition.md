---
id: thm-solovay-stationary-partition
kind: theorem
title: "Solovay’s stationary partition theorem"
status: published
origin: pipeline
deps: ["lem-splitting-stationary-sets-of-fixed-cofinality", "lem-splitting-stationary-regular-cardinals", "thm-fodor-pressing-down", "prop-basic-stationary-set-calculus"]
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
    - title: "Lietz, Theorem 5.14 and complete two-case proof, pp.43–45"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Fact 15.3 and successor-cardinal proof after Lemma 15.7, pp.83–85"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, every stationary subset $S$ of a regular uncountable cardinal $\kappa$ is the disjoint union of $\kappa$ stationary sets.

## Facts & Assumptions

[F1] [[prop-basic-stationary-set-calculus]]: Club intersections preserve stationarity, and finite unions of nonstationary sets are nonstationary.

[F2] [[thm-fodor-pressing-down]]: A regressive map on a stationary nonzero domain has a stationary fibre.

[F3] [[lem-splitting-stationary-sets-of-fixed-cofinality]]: A stationary subset of a fixed infinite regular cofinality stratum splits into kappa stationary pieces.

[F4] [[lem-splitting-stationary-regular-cardinals]]: A stationary set of regular uncountable cardinals below kappa splits into kappa stationary pieces.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The nonzero limit ordinals below kappa form a club: above any bound iterate successors omega times to find a larger limit below kappa, and a nonzero limit of such ordinals is a limit. Intersect S with this club and the tail above omega. Partition the resulting stationary T into $T_0=\{\alpha\in T:\operatorname{cf}(\alpha)<\alpha\}$ and $T_1=\{\alpha\in T:\operatorname{cf}(\alpha)=\alpha\}$. At least one is stationary. [F1]

1.2 If $T_0$ is stationary, its cofinality map is regressive. Fodor supplies a stationary subset of one cofinality $\lambda<\kappa$, which is infinite regular because its arguments are limits. The fixed-cofinality splitting lemma partitions this subset. [F2, F3]

2.1 If $T_1$ is stationary, its members are regular uncountable cardinals: cofinalities of limits are regular cardinals, and these members equal their cofinalities and exceed omega. Apply the regular-cardinal splitting lemma. In either case adjoin every discarded point of S to one of the kappa pieces. Supersets preserve stationarity, and the pieces remain disjoint and exhaust S. [F1, F4, step 1.1, step 1.2] ∎
