---
id: def-qa-30-qaoa-circuit-and-objective
kind: definition
title: "QAOA circuit and expected combinatorial objective"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
  - def-qc-controlled-phase-rotation
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-projective-measurement-outcome-law
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
    - title: "Edward Farhi, Jeffrey Goldstone, and Sam Gutmann, A Quantum Approximate Optimization Algorithm (arXiv:1411.4028v1)"
      url: "https://arxiv.org/pdf/1411.4028"
verification:
  precheck: pass
---

## Definition

Let $G=(V,E)$ be a finite simple undirected graph, $p\ge1$, and $\gamma_1,\ldots,\gamma_p,\beta_1,\ldots,\beta_p\in\mathbb R$. On $|V|$ qubits define
$$C_G=\sum_{(u,v)\in E}\frac{I-Z_uZ_v}{2},\qquad B_G=\sum_{v\in V}X_v.$$
Prepare $|+\rangle^{\otimes |V|}$ and apply, in the declared right-to-left product convention,
$$U_{G,p}(\gamma,\beta)=\prod_{j=p}^{1}e^{-i\beta_jB_G}e^{-i\gamma_jC_G}.$$
The output state is $|\psi_{G,p}(\gamma,\beta)\rangle=U_{G,p}|+\rangle^{\otimes|V|}$ and the objective is $\langle\psi|C_G|\psi\rangle_D$. Measuring every qubit in the computational basis returns a random bitstring, hence a cut. Each cost and mixer exponential, graph-input access, parameter encoding, state preparation, measurement, repetition, and classical optimizer cost must be supplied and charged; this definition is not a guarantee of a maximum cut or approximation ratio.

## Facts & Assumptions

**Given:** Computational-basis bitstrings $x\in\{0,1\}^{|V|}$ and the Pauli $Z$ eigenvalue convention.

[F1] [[def-qc-pauli-matrices]]: $Z|b\rangle=(-1)^b|b\rangle$ for $b\in\{0,1\}$.

[F2] [[thm-qc-projective-measurement-outcome-law]]: the finite computational-basis measurement probabilities sum to one and determine the outcome law.

## Verification

**Proof technique:** direct.

1.1 On $|x\rangle$, the edge term $(I-Z_uZ_v)/2$ has eigenvalue $(1-(-1)^{x_u+x_v})/2$, which is $1$ exactly when $x_u\ne x_v$ and $0$ otherwise. Thus $C_G|x\rangle$ has eigenvalue equal to the cut size of $x$. [given, F1, algebra]

2.1 The finite projective measurement law assigns probabilities $q_x\ge0$ summing to one, so the expectation of the measured cut size is $\sum_xq_x C_G(x)=\langle\psi|C_G|\psi\rangle_D$ by the diagonal spectral expansion. Each output is therefore a feasible cut with the stated score observable. [given, F2, step 1.1, algebra] ∎
