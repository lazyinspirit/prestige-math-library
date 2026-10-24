---
id: lem-p-elementary-groups-are-supersolvable
kind: lemma
title: Elementary groups are supersolvable
status: published
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, def-supersolvable-groups-and-monomial-characters, thm-nontrivial-center-of-a-finite-p-group, def-quotient-group]
proof_strategy: induction
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Remark 14.1.3
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every finite $p$-elementary group is supersolvable.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-nontrivial-center-of-a-finite-p-group]].

## Proof

**Given:** $G=C\times P$ with $C$ cyclic of $p'$-order and $P$ a finite $p$-group.

1.1 A cyclic group has a normal series with prime-order factors. The case $P=1$ is immediate. If $P\ne1$, its centre contains a subgroup $Z$ of order $p$, and $P/Z$ has smaller order; by the induction hypothesis it has a normal prime-factor series, whose inverse images preceded by $1\triangleleft Z$ give one for $P$. [F1, given, base, ih]

2.1 Concatenate the series for $C$ and the series $C\times P_i$ from the series of $P$. Each term is normal in $C\times P$ and every factor has prime order, including the cases $C=1$ or $P=1$. ∎ [step 1.1, discharge-induction]
