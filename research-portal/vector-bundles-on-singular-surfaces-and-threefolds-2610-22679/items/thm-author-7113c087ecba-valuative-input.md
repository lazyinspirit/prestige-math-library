---
id: thm-author-7113c087ecba-valuative-input
kind: theorem
title: Exact valuation inputs for the topology comparison
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: The Stacks Project, Extensions of valuation rings
      url: https://stacks.math.columbia.edu/tag/0ASF
      locator: Lemma15.125.5 and its full statement/proof
      statement: If A is a valuation ring, A→B is étale, and m lies over the maximal
        ideal, then A⊂B_m is an extension of valuation rings with identical
        value groups.
      hypotheses: Arbitrary valuation ring and étale ring map, no noetherian hypothesis.
      reading_limits: Read full lemma and displayed proof; the deeper weak-dimension
        and normalization results cited there are imported, not reconstructed.
    - title: The Stacks Project, Valuative criterion for properness
      url: https://stacks.math.columbia.edu/tag/0BX5
      locator: Lemma29.43.1, statement and proof
      statement: A proper finite-type quasi-separated morphism has a unique lift over
        any valuation-ring diagram with its fraction field.
      hypotheses: Morphisms of schemes; arbitrary valuation ring; the proper maps here
        are finitely presented, hence finite type, and separated, hence
        quasi-separated.
      reading_limits: Read full displayed statement and short proof; underlying
        universal-closedness/separatedness criteria not reconstructed.
    - title: Bhargav Bhatt and Akhil Mathew, The arc-topology
      url: https://arxiv.org/pdf/1807.04725v4
      locator: Definition1.2 p.3; Proposition2.1 and proof p.9
      statement: Arc covers are tested by extensions of valuation rings of rank at
        most one.
      hypotheses: Qcqs source/target schemes and families with the source
        finite-subcover convention.
      reading_limits: Read full definition and Proposition2.1 proof; the local
        generator lemma applies the rank-at-most-one definition directly.
dependency_level: 0
---

## Statement
For an étale algebra $B$ over a valuation ring $V$, localization at a point over its closed point is a valuation-ring extension with the same value group. A proper morphism admits the valuative lift over $V$ whenever its fraction-field lift is given. Arc covers are tested using such extensions with valuation rank at most one.

## External input
Import only these precise valuation/criterion facts, not an unrecorded comparison between finite-type and qcqs sites.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] The exact source records in External input.

## Proof
1.1 Import exactly the two Stacks assertions and the BM definition in the source records. [F1]

2.1 In the application the proper morphism is finitely presented and separated, so the criterion’s finite-type and quasi-separated hypotheses hold. Equality of value groups in the étale assertion preserves rank. These are exact foundational inputs; the generator comparison itself is authored locally. [F1, step 1.1] ∎
