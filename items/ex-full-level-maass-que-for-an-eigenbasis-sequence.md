---
id: ex-full-level-maass-que-for-an-eigenbasis-sequence
kind: example
title: "Full-level Maass QUE for a Hecke-eigenbasis sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - thm-soundararajan-que-for-full-level-hecke-maass-forms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "Theorem 1, printed p. 2."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "Theorem 1.2, pp. 11–13."
---

## Example

Let $(u_j)$ be any sequence of Petersson-norm-one weight-zero Maass cusp forms for $SL_2(\mathbb Z)$ that are joint eigenfunctions of all normalized Hecke operators and have positive-sign Laplace eigenvalues tending to $+\infty$. Every weak-* subsequential limit of their microlocal lifts is the normalized Liouville measure on $S^*M$, and the projected base measures have no mass loss.

## Example references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, Theorem 1, printed p. 2.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Theorem 1.2, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A sequence satisfying the hypotheses in the Example.

[F1] Every weak-* limit for such a sequence is the normalized Liouville measure and its base projection is normalized area ([[thm-soundararajan-que-for-full-level-hecke-maass-forms]]).

## Verification

1.1 Apply [F1] to the given sequence. Each of its microlocal quantum limits equals normalized Liouville measure. [given, F1, algebra]

2.1 Projecting gives normalized hyperbolic area, with total mass one. [F1, step 1.1, algebra] ∎
