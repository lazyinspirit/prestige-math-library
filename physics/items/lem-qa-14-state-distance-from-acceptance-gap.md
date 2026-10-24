---
id: lem-qa-14-state-distance-from-acceptance-gap
kind: lemma
title: Acceptance-gap lower bound on final-state distance
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-14-boolean-search-query-model
  - def-qa-bounded-error-promise-correctness
  - def-qc-povm-and-outcome-law
  - def-qc-finite-positive-effect-family
  - thm-non-negative-operator-characterisations
  - thm-qc-unit-vector-projector-is-density
  - def-trace-of-an-endomorphism
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; the argument is finite-dimensional and uses no choice principle.
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.1 (PDF p.7): output-distribution variation is bounded by Euclidean state distance."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–114 (PDF pp.119–123): bounded-error output separation in the query lower-bound argument."
---

## Statement

If a common final two-outcome measurement accepts one unit state with probability at least $2/3$ and another with probability at most $1/3$, then the distance between their state vectors is at least $1/6$.

## Facts & Assumptions

**Given:** Unit vectors $\psi,\phi$ in the same finite-dimensional register and one common final acceptance measurement.

[F1] A common two-outcome POVM has an acceptance effect $E$ with $0\preceq E\preceq I$ and acceptance weight $\operatorname{tr}(P_uE)$ on a unit state $u$ ([[def-qc-povm-and-outcome-law]], [[def-qc-finite-positive-effect-family]]).

[F4] [[thm-non-negative-operator-characterisations]]: a finite nonnegative operator has an orthonormal eigenbasis with nonnegative real eigenvalues.

[F5] [[thm-qc-unit-vector-projector-is-density]]: for a unit $u$, $P_u:w\mapsto\langle w,u\rangle u$ is its density operator. The root pairing is linear in the first argument.

[F6] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any basis.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\|v\|$.

[F3] [[def-qa-bounded-error-promise-correctness]]: bounded-error decision correctness gives acceptance probability at least $2/3$ on a yes input and at most $1/3$ on a no input.

## Proof

1.1 By [F1] and [F4], choose an orthonormal eigenbasis $(e_j)$ for $E$. Positivity of $E$ and $I-E$ puts each eigenvalue $\lambda_j$ in $[0,1]$. For $w=\sum_j w_je_j$, $\|Ew\|^2=\sum_j\lambda_j^2|w_j|^2\le\sum_j|w_j|^2=\|w\|^2$. For a unit $u=\sum_j u_je_j$, [F5]–[F6] give $\operatorname{tr}(P_uE)=\sum_j\lambda_j|u_j|^2=\langle Eu,u\rangle$. Thus the same acceptance expectation and contraction estimate hold for every two-outcome POVM. [given, F1, F4, F5, F6, algebra]

2.1 Put $\delta=\psi-\phi$. The acceptance-probability difference equals $\langle E\delta,\psi\rangle+\langle E\phi,\delta\rangle$. By [F2], unit normalization, and step 1.1, its absolute value is at most $\|E\delta\|\|\psi\|+\|E\phi\|\|\delta\|\le2\|\delta\|$. The probability gap in [F3] is at least $1/3$, so $\|\psi-\phi\|\ge1/6$. [given, F2, F3, step 1.1, algebra] ∎
