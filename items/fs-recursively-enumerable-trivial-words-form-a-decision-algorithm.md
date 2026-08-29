---
id: fs-recursively-enumerable-trivial-words-form-a-decision-algorithm
kind: false-statement
title: "FALSE: recursively enumerable trivial words already give a decision algorithm"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-recursive-and-finite-group-presentations, lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable, rem-novikov-boone-undecidability-of-the-word-problem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

If the trivial words of a presentation form a recursively enumerable language,
then the word problem for that presentation is solvable.

## Facts & Assumptions

**Given:** A recursively presented group.

[L1] In a recursively presented group, the trivial words form a recursively enumerable language. ([[lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable]])

[L2] Every finite presentation is recursively presented. ([[def-recursive-and-finite-group-presentations]])

[L3] The Novikov-Boone theorem gives a finitely presented group with unsolvable word problem. ([[rem-novikov-boone-undecidability-of-the-word-problem]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], every recursively presented group has a semidecision procedure that halts on trivial words and may run forever on nontrivial words. [L1, given]

2.1 By [L3], there exists a finitely presented group with unsolvable word problem; by [L2], that group is recursively presented, so step 1.1 applies to it. [L2, L3, given]

3.1 The group from step 2.1 has recursively enumerable trivial words by step 1.1, but its word problem is not solvable. Therefore recursively enumerable positive instances do not force a decision algorithm. [step 1.1, step 2.1]

4.1 Therefore the statement is false. [step 3.1] ∎
