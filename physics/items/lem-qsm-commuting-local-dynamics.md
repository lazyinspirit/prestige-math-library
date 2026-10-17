---
id: lem-qsm-commuting-local-dynamics
kind: lemma
title: Exact local dynamics for commuting diagonal interactions
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-diagonal-ising-interaction
  - thm-qsm-finite-range-spin-dynamics
  - def-countable-choice
  - lem-qsm-finite-matrix-cstar-and-state-duality
dependency_roles:
  def-qsm-diagonal-ising-interaction: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §§3.2–3.4, printed pp. 53–78; finite-range local interactions and Heisenberg dynamics.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 2 §6, printed pp. 24–25.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24 and 31–43.
---

## Statement

Assume Countable Choice and the finite-matrix C*-identity for the local spin algebras. Let $\alpha_t$ be the thermodynamic dynamics for the diagonal interaction of [[def-qsm-diagonal-ising-interaction]], as constructed under the exact hypotheses of [[thm-qsm-finite-range-spin-dynamics]]. For a local observable $A\in\mathcal A_X$, define the finite self-adjoint matrix
$$K_X:=\sum_{S:S\cap X\ne\varnothing}\Phi(S),$$
where the sum ranges over the singleton and pair supports of that Ising interaction. Then the sum is finite and
$$\alpha_t(A)=e^{itK_X/\hbar}Ae^{-itK_X/\hbar}\qquad(t\in\mathbb R).$$
In particular, every local diagonal observable is fixed by $\alpha_t$. The formula is exact for this commuting diagonal model and uses the full local matrix algebra; it does not restrict observables to diagonal matrices.

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix C*-identity, the finite-range diagonal interaction of [[def-qsm-diagonal-ising-interaction]], its free-boundary finite-volume dynamics, $\hbar>0$, and the thermodynamic limit stated in [[thm-qsm-finite-range-spin-dynamics]].

[A1] Countable Choice is the axiom that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]] states that each nonzero finite local matrix algebra with its operator norm satisfies the C*-identity; its current batch-36 proof is draft and is used under its stated hypotheses.

[F1] [[def-qsm-diagonal-ising-interaction]] gives diagonal self-adjoint terms $\Phi(S)$ with finite range and bounded per-site norm sum; each singleton or pair term has finite support.

[F2] [[thm-qsm-finite-range-spin-dynamics]] states, under Countable Choice and [A2], that free-boundary finite-volume dynamics converge in norm on local observables, uniformly on compact time intervals, to the exhaustion-independent group $\alpha_t$.

## Proof

**Proof technique:** Separate the finitely many interaction terms meeting the observable's support from terms disjoint from it.

**Given:** [F1]–[F2], $A\in\mathcal A_X$ local, and $\hbar>0$.

1.1 Only finitely many singleton and pair supports meet the finite set $X$, because the interaction range is finite and each site has finitely many neighbors. Hence $K_X$ is a finite self-adjoint diagonal matrix. Choose any increasing finite exhaustion $\Lambda_n$ that eventually contains every support $S$ meeting $X$. For all sufficiently large $n$, decompose $H_{\Lambda_n}=K_X+L_n$, where $L_n$ is the sum of the remaining terms contained in $\Lambda_n$. Every support in $L_n$ is disjoint from $X$, so $[L_n,A]=0$; every term is diagonal, so $[L_n,K_X]=0$. Therefore $e^{itH_{\Lambda_n}/\hbar}Ae^{-itH_{\Lambda_n}/\hbar}=e^{itK_X/\hbar}Ae^{-itK_X/\hbar}$ for all real $t$. [given, A1, A2, F1, F2, algebra]

2.1 The right side of step 1.1 is independent of $n$. Passing to the norm limit supplied by [F2] gives the claimed exact formula for $\alpha_t(A)$. If $A$ is diagonal, it commutes with the diagonal matrix $K_X$, so the formula reduces to $\alpha_t(A)=A$. [F2, step 1.1, algebra] ∎
