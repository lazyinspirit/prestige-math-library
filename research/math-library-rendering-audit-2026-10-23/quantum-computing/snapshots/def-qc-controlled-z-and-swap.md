---
id: def-qc-controlled-z-and-swap
kind: definition
title: Controlled-Z and SWAP
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-phase-rotation
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
dependency_level: 8
---

## Definition

In the ordered two-qubit basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, define

$$CZ:=CP(\pi)=\operatorname{diag}(1,1,1,-1).$$

Define the **SWAP operator** on the ordered tensor product by $\operatorname{SWAP}(|a\rangle\otimes|b\rangle)=|b\rangle\otimes|a\rangle$ for $a,b\in\{0,1\}$, and extend this rule linearly from the ordered product basis. SWAP is an operator that permutes the register state; it does not relabel the ordered wires.

## Facts & Assumptions

**Given:** The ordered two-qubit computational basis and the definitions of $CP(\theta)$ and the tensor product register.

[L1] [[def-qc-controlled-phase-rotation]] defines $CP(\theta)=\operatorname{diag}(1,1,1,e^{i\theta})$ in control-first order. Its carrier is present in this batch.

[L2] [[def-qc-tensor-register-and-permutation]] defines the ordered factors and product basis. Its current draft proof was read.

[L3] [[thm-qc-computational-basis-orthonormal]] proves the computational basis is orthonormal. Its current draft proof was read, including the one-dimensional zero-qubit boundary case.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{i\pi}=-1$.

## Verification

1.1 Substituting $\theta=\pi$ into [L1] gives $CP(\pi)=\operatorname{diag}(1,1,1,e^{i\pi})=\operatorname{diag}(1,1,1,-1)$ by [F1]. [given, L1, F1, algebra]

1.2 SWAP fixes $|00\rangle$ and $|11\rangle$ and interchanges $|01\rangle$ with $|10\rangle$. The ordered product basis in [L2] spans the tensor product, so these actions determine a unique linear map. By [L2] and [L3] it permutes an orthonormal basis, hence preserves norms and is its own inverse; therefore it is unitary. [given, L2, L3, algebra]

2.1 The preceding action changes the state vector in the fixed ordered tensor product, while the first and second factors remain the declared wires. Thus the definition is an actual linear gate action, not a change of names for the tensor factors. [step 1.2] ∎
