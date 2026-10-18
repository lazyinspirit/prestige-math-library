---
id: ex-qa-37-fibonacci-budget
kind: example
title: "Fibonacci SK level and symbolic gate budget"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 16
deps:
  - thm-qa-37-su2-compiler-error-length
  - def-qa-37-resource-cost-model
  - thm-qa-37-arbitrary-n-encoded-circuit
  - lem-qa-37-product-error
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
justified_by: []
axiom_use: "None; this is an exact numerical recurrence example."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–4, recursion, level and word-length estimates, PDF pp. 2–10."
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406176
      locator: "Theorem 13, exact QSD decomposition, PDF pp. 9–13."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, finite-gate approximation, PDF pp. 26–29."
---

## Example

Take the fixed SK recurrence with $\eta_0=2^{-13}$ and requested tolerance
$\varepsilon=2^{-14}$. This is a symbolic certificate example: the finite
base-net list and its maximum length $L_0$ are supplied compiler data, not
computed here. The exact recurrence gives $J=2$ and output length at most
$25L_0$. For a finite QSD factor list of size $M>0$, allocate each factor
$\delta=\min\{\varepsilon/(2M),\eta_0/2\}$; then the sum of the factor
errors is at most $\varepsilon/2$. The two-qubit B6 search, measurement
count, phase correction and base-net storage remain separate cost entries;
no B6 search-length bound follows from the SK calculation.

## Facts & Assumptions

**Given:** The SK recurrence and length estimate, the compiler cost ledger,
and a finite exact QSD factor list.

[F1] The error recurrence and word-length estimate are
$\eta_{j+1}=64\eta_j^{3/2}$ and $L_j\le L_0 5^j$.
[[thm-qa-37-su2-compiler-error-length]]

[F2] The per-operation costs are separate coordinates; an absent bound is not
zero. [[def-qa-37-resource-cost-model]]

[F3] The exact QSD supplies a finite factorization into one-qubit gates and
CNOTs. [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]]

[F4] Operator error in a finite product of unitary factors is bounded by the sum of factor errors. [[lem-qa-37-product-error]]

## Verification

1.1 Compute $\eta_1=64(2^{-13})^{3/2}=2^6 2^{-39/2}=2^{-27/2}>2^{-14}$, while $\eta_2=64(2^{-27/2})^{3/2}=2^6 2^{-81/4}=2^{-57/4}<2^{-14}$. Therefore $J=2$ is the least level meeting the tolerance, and [F1] gives $L_2\le L_0 5^2=25L_0$. [F1, given, algebra]

2.1 Each of the $M$ factors has error at most $\delta$. If $\delta=\varepsilon/(2M)$, then $M\delta=\varepsilon/2$; if $\delta=\eta_0/2$ is smaller, its defining inequality gives $M\eta_0/2<\varepsilon/2$. The finite product error is therefore at most $\varepsilon/2$ by [F4], while [F2] keeps SK length, B6 search work, measurement and phase correction as separate ledger coordinates. The $L_0$ value is part of a supplied certificate; no net list or B6 length is inferred here. [F2, F3, F4, step 1.1, algebra] ∎
