---
id: thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra
kind: theorem
title: "Stable unoriented Thom cohomology is free over the square algebra"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-admissible-square-algebra-is-a-connected-bialgebra
  - def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology
  - lem-stable-thom-cohomology-is-a-square-module-coalgebra
  - lem-zero-section-proves-injectivity-of-the-thom-unit-orbit
  - thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - def-axiom-of-choice
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§6, Lemma 6.1 and Proposition 6.2 with proof, printed pp. 11–13; grading, section, and kernel details are proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Under the Steenrod action, M is a free graded left A-module. With Q=M/A⁺M, the freeness isomorphism is M≅A⊗Q; any homogeneous basis of Q lifts to a free A-basis of M.

## Facts & Assumptions

**Given:** AC; the connected bialgebra $\mathcal A$ of square operations; the stable Thom cohomology module $M=\widehat H^*(TO;\mathbb F_2)$ with its connected coaugmented coalgebra structure and diagonal action; the injective unit orbit $\nu:\mathcal A\to M$; and $Q=M/\mathcal A^+M$.

[F1] The bialgebra, the coalgebra and its module-coalgebra compatibility, and the injectivity of the unit orbit are the previously established local results ([[thm-admissible-square-algebra-is-a-connected-bialgebra]], [[lem-stable-thom-cohomology-is-a-square-module-coalgebra]], [[lem-zero-section-proves-injectivity-of-the-thom-unit-orbit]]).

[F2] The connected graded module-coalgebra freeness theorem applies to these hypotheses and gives $M\cong\mathcal A\otimes Q$ with homogeneous bases lifting to free $\mathcal A$-bases; the degree pieces of $M$ are finite-dimensional by the degreewise constancy lemma, so the same holds for $Q$ ([[thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free]], [[lem-stable-thom-cohomology-is-degreewise-eventually-constant]]).

## Proof

**Proof technique:** direct.

1.1 The bialgebra, connected Thom coalgebra, compatible action, and injective unit orbit satisfy every hypothesis of the connected module-coalgebra freeness theorem. Applying it gives $M\cong\mathcal A\otimes(M/\mathcal A^+M)$ as graded left $\mathcal A$-modules. [given, F1, F2]

2.1 Any homogeneous basis of Q=M/A⁺M lifts to a free A-basis of M. This application requires no finite-type assumption for the freeness theorem itself. For detector construction, M^d is finite-dimensional by the degreewise-constancy computation, so Q^d is finite-dimensional in each degree. [step 1.1, F2] ∎
