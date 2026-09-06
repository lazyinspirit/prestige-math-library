---
id: lem-p-elementary-characters-are-induced-from-linear-characters
kind: lemma
title: Characters of elementary groups are induced from linear characters
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, lem-p-elementary-groups-are-supersolvable, thm-finite-supersolvable-groups-are-monomial, def-virtual-character-and-character-ring-of-a-finite-group]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Corollary 14.3.2
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every virtual character of a finite $p$-elementary group is an integral linear combination of characters induced from linear characters of its subgroups.

## Facts & Assumptions

[F1] The cited prerequisite is [[lem-p-elementary-groups-are-supersolvable]].

## Proof

**Given:** $E$ is $p$-elementary and $\xi\in R(E)$.

1.1 The elementary-group lemma makes $E$ supersolvable, and the monomiality theorem writes every irreducible constituent of $\xi$ as an induction of a linear character. [F1, given]

2.1 Add the resulting expressions with the integral multiplicities defining the virtual character $\xi$. $\square$ [step 1.1]
