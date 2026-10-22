---
id: cex-nrqmx-smooth-frame-obstruction
kind: counterexample
domain: mathematics
library: mathematics
title: A nonzero-Chern band has no global smooth periodic frame
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 8
deps:
  - thm-nrqmx-bloch-projector-chern
  - ex-nrqmx-two-band-gap-closures
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-bloch-projector-chern: mathematical-premise
  ex-nrqmx-two-band-gap-closures: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 6, §§6.1.1–6.1.2.
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 6, §6.3.5.
---

## Statement refuted

Every smooth isolated Bloch band on the two-torus admits a global smooth periodic normalized eigenvector.

## Statement references

[[thm-nrqmx-bloch-projector-chern]]

[[ex-nrqmx-two-band-gap-closures]]

## Facts & Assumptions

**Given:** Axiom of Choice, Countable Choice, the smooth-frame obstruction theorem, and the $M=1$ band in [[ex-nrqmx-two-band-gap-closures]].

[A1] Axiom of Choice and Countable Choice are the principles in [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] [[ex-nrqmx-two-band-gap-closures]] computes $C(P_-)=-1$ at $M=1$ and verifies the uniform gap.

[F2] [[thm-nrqmx-bloch-projector-chern]] proves that a global $C^2$ periodic orthonormal frame forces the Chern number to be zero.

## Counterexample

**Given:** [A1], [F1], [F2], and the lower band of the stated two-band Hamiltonian at $M=1$. Its spectral gap is open and its Chern number is $-1$.

1.1 By [F1], this is a smooth rank-one orthogonal band projector with $C(P_-)=-1\ne0$. Suppose it had a global smooth periodic normalized eigenvector $u(k)$. Since its range is one-dimensional, $u(k)$ would be a global orthonormal frame of the line bundle. [A1, F1, given]

2.1 Apply [F2] to that frame: it would force $C(P_-)=0$, contradicting step 1.1's value $-1$. Thus this smooth isolated band has no global smooth periodic normalized eigenvector, refuting the universal statement. [F2, step 1.1, algebra] ∎