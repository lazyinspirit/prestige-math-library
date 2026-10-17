---
id: lem-qsm-kms-diagonal-reduction
kind: lemma
title: Quantum Ising KMS states have diagonal local densities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-kms-state
  - def-qsm-diagonal-ising-interaction
  - lem-qsm-commuting-local-dynamics
  - lem-qsm-kms-strip-uniqueness
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  def-qsm-diagonal-ising-interaction: mathematical-premise
  lem-qsm-commuting-local-dynamics: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §3.4, Definition 3.4.4 and Proposition 3.4.5, printed pp. 74–75.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 6, PDF pp. 265–289.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 31–43.
---

## Statement

Assume Countable Choice and the finite-matrix C*-identity for the local spin algebras. Let $\omega$ be a $\beta$-KMS state, with $\beta>0$, for the thermodynamic dynamics of [[def-qsm-diagonal-ising-interaction]] in the full quasi-local matrix algebra. For every finite region $\Lambda$ and any two distinct product-basis configurations $\sigma,\tau\in\{-1,+1\}^\Lambda$, the local matrix unit $E_{\sigma,\tau}$ satisfies $\omega(E_{\sigma,\tau})=0$. Consequently the density matrix representing $\omega$ on each finite local matrix algebra is diagonal in the joint eigenbasis of the matrices $Z_i$.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix C*-identity, the diagonal Ising dynamics, a $\beta$-KMS state for it in the convention of [[def-qsm-kms-state]], and the closed-strip hypotheses below.

[A1] Countable Choice is the axiom that every sequence of nonempty sets has a choice function ([[def-countable-choice]]); it is inherited through the thermodynamic dynamics used here.

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies the C*-identity for each finite local matrix algebra and the representation of its positive functionals by density matrices, under its exact finite-dimensional hypotheses.

[F1] [[lem-qsm-commuting-local-dynamics]] states that every local diagonal projection is fixed by $\alpha_t$.

[F2] [[def-qsm-kms-state]] says the KMS correlation for any pair is bounded and continuous on the closed strip, holomorphic inside, and has lower and upper boundaries $\omega(A\alpha_t(B))$ and $\omega(\alpha_t(B)A)$.

[F3] [[lem-qsm-kms-strip-uniqueness]] says two bounded continuous functions holomorphic inside the same strip with the same lower boundary agree on the whole strip.

## Proof

**Proof technique:** Compare a KMS correlation with the constant function determined by a fixed diagonal projection.

**Given:** [F1]–[F3], $\omega$, and the model's finite local matrix algebras.

1.1 Let $P$ be any local rank-one diagonal projection and $A$ any local observable. By [F1], $\alpha_t(P)=P$, so the lower boundary of the KMS function for the pair $(A,P)$ is the constant $\omega(AP)$. The constant function with that value is bounded, continuous, holomorphic, and has the same lower boundary. By [F3] it equals the KMS function. Evaluating the upper boundary in [F2] at $t=0$ gives $\omega(PA)=\omega(AP)$. [A1, A2, F1, F2, F3, given]

2.1 Fix a finite $\Lambda$ and a product-basis matrix unit $E_{\sigma,\tau}$ with $\sigma\ne\tau$. Take $P=P_\tau$, the diagonal rank-one projection onto the basis vector $e_\tau$. Matrix-unit multiplication gives $E_{\sigma,\tau}P_\tau=E_{\sigma,\tau}$ and $P_\tau E_{\sigma,\tau}=0$. Applying step 1.1 with $A=E_{\sigma,\tau}$ yields $\omega(E_{\sigma,\tau})=0$. By [A2], the restricted positive functional has a unique density matrix whose off-diagonal entries are precisely these matrix-unit expectations, so the finite local density matrix is diagonal. [A2, step 1.1, algebra] ∎
