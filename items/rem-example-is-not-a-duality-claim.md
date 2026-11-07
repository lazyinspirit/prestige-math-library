---
id: rem-example-is-not-a-duality-claim
kind: remark
title: "Higher-local coefficient example is illustrative, not a duality theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - ex-two-local-field-finite-constant-residue
  - rem-higher-local-duality-proof-source-gate
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Morrow, An Introduction to Higher Dimensional Local Fields and Adeles, §2, Example 2.14"
      url: "https://arxiv.org/pdf/1204.0586v2"
      locator: "The iterated Laurent-series field example verifies the valuation tower and finite final residue."
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapter IX §4.13"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "The higher local reciprocity passage is an outline and cites external higher-local CFT work."
verification: {}
---

## Remark

The example $\mathbb F_q((u))((t))$ verifies only the recursive valuation
definition of a two-local field and its finite final residue field. It does
not establish a cohomological duality pairing for any coefficient group,
degree, topology, or trace map. The higher-local duality claim remains subject
to the separate proof-source conditions stated on the A page.

## Remark references

[[ex-two-local-field-finite-constant-residue]]

[[rem-higher-local-duality-proof-source-gate]]

## Facts & Assumptions

**Given:** the example and the higher-local duality source gate.

[F1] [[ex-two-local-field-finite-constant-residue]] verifies the field tower, the two discrete valuations, and the finite final residue field.

[F2] [[rem-higher-local-duality-proof-source-gate]] requires a specified cohomology theory, coefficient category, topology, pairing, and trace map before a higher-local duality claim is made.

## Proof

**Proof technique:** compare what the example verifies with what a duality theorem must state.

**Given:** [F1]–[F2].

1.1 By [F1], the example supplies only fields, valuations, and residue identifications; it contains no cohomology groups or coefficient object. [F1, given, algebra]

2.1 A duality assertion requires the additional data in [F2], none of which is constructed by the field example. Therefore the example is illustrative and is not evidence for a higher-local duality theorem. [F2, step 1.1, given, algebra] ∎
