---
id: cex-qa-30-variational-global-optimum
kind: counterexample
title: "A variational circuit family may miss the optimum"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-30-variational-quantum-algorithm
  - thm-qa-30-vqe-rayleigh-ritz-guarantee
  - def-qa-30-vqe-rayleigh-objective
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

## Statement refuted

A variational circuit family is guaranteed to contain a ground state of every finite Hermitian Hamiltonian.

## Facts & Assumptions

**Given:** $H=\operatorname{diag}(0,1)$ on $\mathbb C^2$ and the ansatz consisting of the fixed state $|1\rangle$.

[F1] [[def-qa-30-vqe-rayleigh-objective]]: the VQE objective is the Dirac expectation and $E_0$ is the least eigenvalue.

[F2] [[thm-qa-30-vqe-rayleigh-ritz-guarantee]]: every ansatz energy is at least $E_0$, with equality only for a ground-space state.

## Counterexample

**Given:** $H=\operatorname{diag}(0,1)$ and the ansatz consisting of $|1\rangle$.

**Proof technique:** direct.

1.1 The eigenvalues of $H$ are $0,1$, so $E_0=0$ and its ground eigenspace is $\operatorname{span}\{|0\rangle\}$. The only ansatz state $|1\rangle$ is orthogonal to that eigenspace. [given, F1, algebra]

2.1 Direct multiplication gives $H|1\rangle=|1\rangle$, hence the ansatz energy is $1>0=E_0$. It still satisfies [F2], so the universal ansatz-coverage claim is false. [given, F2, step 1.1, algebra] ∎
