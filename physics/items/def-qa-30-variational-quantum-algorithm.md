---
id: def-qa-30-variational-quantum-algorithm
kind: definition
title: "Parameterized variational quantum objective"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps:
  - def-qc-density-operator
  - def-qc-quantum-channel
  - def-qc-circuit-denotational-semantics
  - def-trace-of-a-square-matrix
  - def-qc-dirac-notation-conversion
  - def-qc-povm-and-outcome-law
  - lem-qa-30-hermitian-product-trace-real
  - thm-trace-of-ab-equals-trace-of-ba
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

A finite **variational quantum algorithm (VQA)** specifies a parameter domain $\Theta\subseteq\mathbb R^p$, a supplied parameterized finite circuit $U(\theta)$, finitely many prepared density operators $\rho_k$, Hermitian observables $O_k$, real-valued functions $f_k$ on the corresponding expectation ranges, and the objective
$$C(\theta)=\sum_{k=1}^N f_k\!\left(\operatorname{tr}(O_kU(\theta)\rho_kU(\theta)^*)\right).$$
The convention is root inner product linear in the first argument and Dirac expectation $\langle\psi|O|\psi\rangle_D=\operatorname{tr}(O\rho)$. State how each $\rho_k$ is prepared, the measurement/shot model and finite precision, the classical optimizer, its stopping rule, the output, and every circuit, inverse, controlled access, observable, measurement, arithmetic, and state-preparation cost. The definition asserts no optimizer existence, convergence, global optimality, or quantum advantage.

## Facts & Assumptions

**Given:** Finite density operators, Hermitian observables, and supplied unitary circuits.

[F1] [[def-qc-density-operator]]: $\rho\succeq0$ and $\operatorname{tr}(\rho)=1$.

[F2] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible finite matrices.

[F3] [[lem-qa-30-hermitian-product-trace-real]]: the trace of a product of Hermitian matrices is real.

## Verification

**Proof technique:** direct.

1.1 For unitary $U$, $U\rho_kU^*$ is nonnegative because its quadratic form on $x$ is that of $\rho_k$ on $U^*x$, and its trace is $\operatorname{tr}(U\rho_kU^*)=\operatorname{tr}(\rho_kU^*U)=1$ by [F1] and [F2]. Thus it is again a density operator. [given, F1, F2, algebra]

2.1 Since $O_k$ and $U\rho_kU^*$ are Hermitian, [F3] makes their trace product real. Applying the real-valued $f_k$ and summing shows $C(\theta)\in\mathbb R$; the specified preparation, measurement, and optimizer data are additional algorithm inputs and imply no convergence conclusion. [given, F3, step 1.1, algebra] ∎
