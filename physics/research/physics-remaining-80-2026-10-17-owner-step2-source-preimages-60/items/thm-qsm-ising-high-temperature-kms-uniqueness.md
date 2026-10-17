---
id: thm-qsm-ising-high-temperature-kms-uniqueness
kind: theorem
title: High-temperature full quantum Ising KMS uniqueness
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - thm-qsm-diagonal-kms-dlr-bijection
  - def-qsm-diagonal-ising-interaction
  - thm-csm-ising-high-temperature-state
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  thm-qsm-diagonal-kms-dlr-bijection: mathematical-premise
  def-qsm-diagonal-ising-interaction: mathematical-premise
  thm-csm-ising-high-temperature-state: mathematical-premise
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
      locator: Chapter 6, PDF pp. 265–289, for the Dobrushin uniqueness criterion and finite-range Ising model.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 31–43, for the Ising influence bound and Dobrushin uniqueness.
---

## Statement

Assume Countable Choice, the finite-matrix C*-identity, $d\geq1$, a translation-invariant symmetric pair coupling $J_{i+k,j+k}=J_{ij}$ with $J_{ij}=0$ for $\|i-j\|_\infty>R$ for some finite $R$, a constant finite field $h_i=h\in\mathbb R$, and $\beta>0$, in the diagonal model of [[def-qsm-diagonal-ising-interaction]]. If
$$\sup_{i\in\mathbb Z^d}\sum_{j\ne i}\tanh(\beta|J_{ij}|)<1,$$
then the full quasi-local matrix algebra has exactly one $\beta$-KMS state. This strict influence bound is sufficient, not sharp. For homogeneous nearest-neighbor coupling $J$, it reduces to $2d\tanh(\beta|J|)<1$. The result is for the longitudinal diagonal interaction and makes no transverse-field claim.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix C*-identity, the translation-invariant finite-range Ising pair interaction, constant field, and $\beta>0$.

[A1] Countable Choice is assumed in the CSM DLR existence and extension framework ([[def-countable-choice]]).

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies the finite-matrix C*-identity required by the quasi-local KMS supplier. Its current batch-36 carrier is draft and used conditionally.

[F1] [[thm-csm-ising-high-temperature-state]] states that for this same pair-energy convention and strict bound $\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$, exactly one DLR state exists. Its current batch-27 carrier is draft and authoring-ready; no independent acceptance is inferred.

[F2] [[thm-qsm-diagonal-kms-dlr-bijection]] gives the affine bijection between DLR measures and full-algebra $\beta$-KMS states under the exact diagonal finite-range assumptions and [A2]. Its current proof remains conditional on the draft suppliers recorded there.

[F3] [[def-qsm-diagonal-ising-interaction]] uses one term per unordered pair and the same constant field energy as the CSM high-temperature statement in [F1].

## Proof

**Proof technique:** Apply the classical sufficient uniqueness condition and transfer its unique DLR state through the bijection.

**Given:** [A1], [F1]–[F3], and the stated coefficients.

1.1 The energy formula in [F3] agrees term by term with the pair Hamiltonian in [F1], including the unordered-pair convention, finite range, translation symmetry, constant field, and the zero transverse component. Hence the DLR specifications addressed by [F1] and [F2] coincide. [given, F1, F2, F3, algebra]

2.1 By [F1], the common DLR set contains exactly one measure. The affine bijection [F2] transfers this singleton to exactly one full-algebra $\beta$-KMS state. In the homogeneous nearest-neighbor case there are $2d$ nonzero neighboring couplings at each site, so the displayed row sum is $2d\tanh(\beta|J|)$; the strict bound remains only a sufficient criterion. [A1, A2, F1, F2, step 1.1, algebra] ∎

