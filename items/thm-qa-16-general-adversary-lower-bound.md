---
id: thm-qa-16-general-adversary-lower-bound
kind: theorem
title: General adversary spectral lower bound for quantum queries
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - lem-qa-16-adversary-progress-endpoints
  - lem-qa-16-one-query-progress-change
  - lem-qa-16-query-unitary-normal-form
  - def-qa-16-boolean-query-domain
  - def-qa-quantum-query-complexity
  - def-qa-16-general-adversary-bound
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For every finite Boolean query problem and 0≤ε<1/2,
$$Q_\epsilon(f)\ge\left(\frac12-\sqrt{\epsilon(1-\epsilon)}\right)\operatorname{Adv}^{\pm}(f).$$
In particular, at ε=1/3 the coefficient is $1/2-\sqrt2/3>0$.

## Facts & Assumptions

**Given:** A finite Boolean query problem and a standard XOR algorithm in its ordinary oracle-only model with worst-case error at most ε.



[F1] [[lem-qa-16-adversary-progress-endpoints]]: for an admissible real symmetric Γ and a real unit principal eigenvector, an ordinary oracle-only algorithm with per-input error at most ε has |W_0|=||Γ|| and |W_T|≤2√(ε(1−ε))||Γ||.

[F2] [[lem-qa-16-one-query-progress-change]]: in the ordinary oracle-only unitary normal form, each XOR query changes W by at most 2 max_i||Γ∘Δ_i||.

[F3] [[def-qa-16-boolean-query-domain]]: $Q_\epsilon(f)$ is the least worst-case number of standard XOR calls among algorithms correct with probability at least $1-\epsilon$ on every promised input.

[F4] [[def-qa-quantum-query-complexity]]: the query-cost coordinate is the worst-case number of designated oracle calls, excluding nonoracle gates.

[F5] [[def-qa-16-general-adversary-bound]]: admissible Γ is nonzero, real symmetric and zero on equal-output pairs. Its denominator is positive, and Adv± is the attained maximum of the norm ratio for nonconstant f.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite normal complex endomorphism has an orthonormal eigenbasis.

[F7] [[lem-qa-16-query-unitary-normal-form]]: an ordinary oracle-only algorithm with at most T standard XOR queries on each branch has the same output law in unitary normal form with exactly T unconditional queries and an input-independent initial state.

## Proof

1.1 Fix a nonconstant f and an algorithm with per-input error at most ε, as in the parameterized definition [F3]. If its worst-case query count is T, apply [F7] to obtain the same output probabilities in unitary normal form with T queries. For any admissible real symmetric Γ, [F6] applied to its complexification gives an eigenvalue of modulus ||Γ||; the eigenvalue is real, and real or imaginary part of a corresponding eigenvector is a nonzero real eigenvector, so choose a real unit principal eigenvector α. Put D_Γ=max_i||Γ∘Δ_i||. Between queries the algorithm's input-independent unitaries preserve all pairwise inner products, so they do not change W. For T queries, [F2] and the triangle inequality give |W_T−W_0|≤2T D_Γ. [given, F1, F2, F3, F4, F6, F7, algebra]

2.1 By [F1], ||Γ||=|W_0|≤|W_T|+|W_T−W_0|≤(2√(ε(1−ε)))||Γ||+2T D_Γ. Since ε<1/2 and D_Γ>0 by [F5], rearrangement yields T≥(1/2−√(ε(1−ε)))||Γ||/D_Γ. [given, F1, F5, step 1.1, algebra]

3.1 The inequality holds for every admissible Γ. Taking the attained maximum ratio from [F5] gives Q_ε(f)≥(1/2−√(ε(1−ε)))Adv±(f). For constant f the empty algorithm is exact and both sides are zero. [given, F3, F4, F5, step 2.1] ∎
