---
id: ex-finite-character-partial-choice-graphs
kind: example
title: "Partial choice graphs have finite character"
status: draft
origin: pipeline
deps: ["thm-tukey-finite-character-equivalent-to-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
sources:
  references:
    - title: "Jech, Theorem 2.1, Tukey implies AC, p.11"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Example

For a family $(X_i)_{i\in I}$ of nonempty sets, graphs of partial choice functions form a family of finite character in $I\times\bigcup_iX_i$. Its maximal members are exactly total choice functions.

## Facts & Assumptions

[F1] [[thm-tukey-finite-character-equivalent-to-choice]]: Partial choice graphs are the finite-character family used to derive AC from Tukey.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Every finite subset of a partial choice graph is such a graph. Conversely, if a set of pairs is not a permissible graph, one pair has a value outside its prescribed set, or two pairs share an index with different values. A subset of size one or two witnesses the defect. The empty graph passes every finite test. [F1]

2.1 If a partial graph omits $i$, one $x\in X_i$ extends it by $(i,x)$; hence it is not maximal. A total choice graph cannot be extended permissibly, since every index already has its unique value. For empty $I$ the empty graph is already total and maximal. [step 1.1] ∎
