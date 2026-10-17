---
id: thm-qsm-chain-kms-uniqueness
kind: theorem
title: Unique one-dimensional Ising KMS state at every positive temperature
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - thm-qsm-diagonal-kms-dlr-bijection
  - def-qsm-diagonal-ising-interaction
  - thm-csm-chain-dlr-uniqueness
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  thm-qsm-diagonal-kms-dlr-bijection: mathematical-premise
  def-qsm-diagonal-ising-interaction: mathematical-premise
  thm-csm-chain-dlr-uniqueness: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §3.4, printed pp. 74–78.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24 and 31–43.
---

## Statement

Assume Countable Choice, the finite-matrix C*-identity, $d=1$, finite $\beta>0$, $\hbar>0$, a uniform field $h_i=h\in\mathbb R$, and nearest-neighbor couplings $J_{i,i+1}=J_{i+1,i}=J\in\mathbb R$ with all other pair couplings zero, in the diagonal model of [[def-qsm-diagonal-ising-interaction]]. Then the full quasi-local matrix algebra has exactly one $\beta$-KMS state. The conclusion concerns the longitudinal diagonal Ising chain; no transverse-field term is included.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix C*-identity, the one-dimensional nearest-neighbor Ising model, finite $J,h$, $\beta>0$, and $\hbar>0$.

[A1] Countable Choice is assumed for the CSM cylinder-measure extension and DLR uniqueness suppliers ([[def-countable-choice]]).

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies the finite-matrix C*-identity required by the quasi-local KMS supplier. Its current batch-36 carrier is draft and used conditionally.

[F1] [[thm-csm-chain-dlr-uniqueness]] states that for this nearest-neighbor chain and every finite $\beta>0$, $J,h\in\mathbb R$, there is exactly one DLR state under Countable Choice. Its current batch-27 carrier is draft and authoring-ready; this is not independent acceptance.

[F2] [[thm-qsm-diagonal-kms-dlr-bijection]] gives an affine bijection between DLR measures and full-algebra $\beta$-KMS states for the same diagonal model, under Countable Choice, [A2], and its stated finite-range assumptions. Its current batch-42 proof is conditional on the exact draft suppliers listed in its Facts & Assumptions.

## Proof

**Proof technique:** Transfer the exact classical DLR uniqueness result through the full-algebra KMS–DLR bijection.

**Given:** [A1], [F1], [F2], and the stated one-dimensional Ising parameters.

1.1 Under these parameters, the conditional energy in [[def-qsm-diagonal-ising-interaction]] is the one-dimensional nearest-neighbor Ising energy used by [F1]: each unordered edge is counted once and the same constant field term is included at every site. Thus the DLR sets in [F1] and [F2] are identical. [given, A1, F1, F2, algebra]

2.1 By [F1], that DLR set has exactly one measure. The bijection [F2] is both injective and surjective, so it sends this singleton to exactly one full-algebra $\beta$-KMS state. This is a model deduction conditional on [A1]–[A2], [F1], and [F2]. [A1, A2, F1, F2, step 1.1] ∎

## Remarks

The finite-volume transfer-matrix result and the infinite-volume uniqueness conclusion are distinct: the latter follows from the CSM DLR uniqueness theorem plus the proved quantum correspondence. The conclusion does not describe a transverse-field chain or an empirical material.

