---
id: cex-qsm-finite-gibbs-unique-infinite-not
kind: counterexample
title: Finite Gibbs uniqueness does not imply infinite KMS uniqueness
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-diagonal-ising-interaction
  - def-qsm-local-spin-algebras
  - thm-qsm-finite-kms-gibbs-characterization
  - thm-qsm-ising-kms-coexistence
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-matrix-state-calculus
dependency_roles:
  def-qsm-diagonal-ising-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  thm-qsm-finite-kms-gibbs-characterization: mathematical-premise
  thm-qsm-ising-kms-coexistence: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §3.4, printed pp. 74–78, for finite Gibbs/KMS states and infinite-volume KMS states.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 31–43 and 52–55.
---

## Statement refuted

For every bounded finite-range quantum spin model, uniqueness of the finite-volume Gibbs state for each finite region implies uniqueness of the infinite-volume KMS state.

## Facts & Assumptions

**Given:** The two-dimensional diagonal nearest-neighbor quantum Ising model with $J>0$, zero field, $\beta J\geq2$, $\hbar>0$, Countable Choice, the finite-matrix C*-identity, and its finite- and infinite-volume equilibrium suppliers.

[F1] [[def-qsm-diagonal-ising-interaction]] defines the finite-volume Hamiltonians as finite self-adjoint matrices on the tensor-product spin spaces and the infinite quasi-local model; [[def-qsm-local-spin-algebras]] defines the finite spin Hilbert spaces, local matrix algebras, product bases, and ordinary finite trace.

[A1] Countable Choice and the finite-matrix C*-identity are inherited as exact hypotheses from the infinite-volume theorem ([[def-countable-choice]], [[lem-qsm-finite-matrix-cstar-and-state-duality]]).

[A2] [[lem-qsm-matrix-state-calculus]] supplies the finite Hermitian spectral calculus and trace cyclicity required by the finite KMS characterization; this current batch-36 result is used conditionally.

[F2] [[thm-qsm-finite-kms-gibbs-characterization]] states that under [A1]–[A2], on every nonzero finite-dimensional Hilbert space and for every finite self-adjoint Hamiltonian, the normalized Gibbs trace is the unique $\beta$-KMS state.

[F3] [[thm-qsm-ising-kms-coexistence]] proves that for the stipulated infinite diagonal Ising model, under Countable Choice and the finite-matrix C*-identity, there are at least two distinct full-algebra $\beta$-KMS states.

## Counterexample

**Given:** [A1], [F1]–[F3], and the parameter conditions above.

1.1 Fix any finite $\Lambda\subset\mathbb Z^2$. Its Hilbert space $\mathcal H_\Lambda=(\mathbb C^2)^{\otimes|\Lambda|}$ is nonzero and finite-dimensional, and $H_\Lambda=H_\Lambda^*$ by [F1]. The finite characterization [F2] gives exactly one finite-volume $\beta$-KMS state, namely $\rho_\Lambda=e^{-\beta H_\Lambda}/\operatorname{Tr}(e^{-\beta H_\Lambda})$. This holds for every finite $\Lambda$, regardless of finite-volume energy degeneracies. [A1, A2, F1, F2, given]

2.1 The same coefficients and $\beta J\geq2$ satisfy the hypotheses of [F3], so the infinite quasi-local system has at least two distinct $\beta$-KMS states. Together, the finite-volume conclusion and this infinite-volume conclusion provide a counterexample to the refuted implication: every finite-volume Gibbs state is unique, while the infinite-volume KMS state is not unique. The distinction is between a fixed finite matrix Hamiltonian and the thermodynamic-limit KMS problem. [A1, F3, step 1.1] ∎

## Remarks

This is an exact mathematical counterexample for the stated diagonal interaction. It does not say that finite-volume Gibbs states are ill-defined, nor does it identify a real material or report an observation.

