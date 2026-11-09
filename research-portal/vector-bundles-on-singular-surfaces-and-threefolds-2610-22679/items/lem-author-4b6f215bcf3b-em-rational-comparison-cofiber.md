---
id: lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
kind: lemma
title: Elmanto–Morrow rational comparison cofiber
status: published
domain: mathematics
external_input: true
deps:
  - def-motivic-cohomology
dependency_roles:
  def-motivic-cohomology: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.10(2)–(4), printed pp. 20–21, and proof of part (4)
      statement: For every qcqs Q-scheme X and integer j, the natural map from the
        weight-j motivic complex to the weight-j cdh-local motivic complex has
        rational cofiber; in particular the map modulo every positive integer is
        an equivalence.
      hypotheses: X is quasi-compact and quasi-separated over Q; j is an integer. The
        finite-coefficient consequence here uses a positive integer.
      reading_limits: The theorem statement and the displayed proof of part (4) were
        read. The construction of the cdh-local filtration and the underlying
        derived de Rham comparison proofs were not reconstructed or fully
        traced.
proof_strategy: direct
dependency_level: 9
---

## Statement
For a quasi-compact quasi-separated Q-scheme X and integer j ≥ 0, Elmanto–Morrow supply a natural map in D(Z)

Z(j)_mot(X) → Z(j)_cdh(X)

whose cofiber is isomorphic to the underlying complex of a complex of Q-vector spaces. The first complex is the Elmanto–Morrow complex of [[def-motivic-cohomology]], restricted along Q → k when X is a k-scheme. The second is the cdh-local motivic complex of the cited paper on its category of qcqs Q-schemes. The map is its canonical motivic-to-cdh map. No identification with evaluation on the separately chosen small cdh site is asserted.

## External input
This is the rational-cofiber consequence of the fundamental fiber sequence in Elmanto–Morrow Theorem 4.10(3), equivalently of its pullback square in part (2): the derived de Rham terms on the right are rational. The authors explicitly use that rationality to deduce part (4). A quasi-compact scheme has every open cover admitting a finite subcover; quasi-separated means its diagonal is quasi-compact. The assertion is imported with the hypotheses and reading limits in the reference; the underlying construction and proof are not reconstructed here.

## Facts & Assumptions

**Given:** A qcqs Q-scheme X and j ≥ 0.

**Goal:** Obtain the canonical comparison map with rational cofiber.

[F1] The cited external input supplies the natural comparison map and its rational cofiber under these hypotheses.

## Proof

1.1 Apply [F1] to X and j. [F1, given]

2.1 This yields precisely the stated map and rational-cofiber property. [F1, given, step 1.1] ∎
