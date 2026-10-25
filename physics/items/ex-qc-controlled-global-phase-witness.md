---
id: ex-qc-controlled-global-phase-witness
kind: example
title: Controlled Global Phase Changes an X-Outcome
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-qc-controlled-global-phase-is-relative-phase
  - def-qc-povm-and-outcome-law
  - thm-qc-povm-probabilities-normalize
  - thm-qc-unit-vector-projector-is-density
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Take the target qubit unitary $U=I_2$, control input $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$, and target input $|0\rangle$. Separately grant controlled access to $C(I_2)$ and $C(e^{i\theta}I_2)$. For the finite control effects $E_\pm=|\pm\rangle\langle\pm|\otimes I_2$, where $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$, the plus outcome has probability $1$ for $C(I_2)$ and $\cos^2(\theta/2)$ for $C(e^{i\theta}I_2)$.

## Facts & Assumptions

**Given:** A control-first two-qubit register, $U=I_2$, real $\theta$, the stated input, separate controlled access to the two specified matrices, and the two control effects in the Example.

[L1] [[thm-qc-controlled-global-phase-is-relative-phase]] proves the general eigenvector witness, verifies the finite two-outcome POVM, and computes its plus probability.

[L2] [[def-qc-controlled-unitary-access]] defines the control-first block action and requires each capability to be explicitly granted. Its carrier is present in this batch.

[L3] [[def-qc-dirac-notation-conversion]] defines the Dirac pairing by reversing the root linear-first pairing and defines the corresponding outer product.

[L4] [[thm-qc-unit-vector-projector-is-density]] proves that every unit-vector outer product is a density operator.

[L5] [[def-qc-povm-and-outcome-law]] defines the finite POVM outcome weight using the density operator and effect.

[L6] [[def-qc-tensor-register-and-permutation]] defines the control-first tensor order and product inner product. Its current draft proof was read.

[L7] [[thm-qc-computational-basis-orthonormal]] proves the one-qubit computational basis is orthonormal. Its current draft proof was read.

[L8] [[thm-qc-povm-probabilities-normalize]] proves the finite weights of this POVM form a probability distribution.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $|e^{it}|=1$ and $e^{it}=\cos t+i\sin t$.

## Verification

1.1 In the ordered basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, the first controlled block is $C(I_2)=\begin{pmatrix}I_2&0\\0&I_2\end{pmatrix}=I_4$. It sends the input to $\omega_0=|+\rangle\otimes|0\rangle$. Both factors are unit vectors by [L7], so their product is unit by [L6], and its rank-one projector is a density operator by [L4]. In [L1], specialize $U=I_2$, $\phi=|0\rangle$, and $\mu=1$; its verified control POVM then gives plus probability $1$. [given, L1, L2, L4, L6, L7, algebra]

1.2 The separately granted second block is $C(e^{i\theta}I_2)=\begin{pmatrix}I_2&0\\0&e^{i\theta}I_2\end{pmatrix}=\operatorname{diag}(1,1,e^{i\theta},e^{i\theta})$. It sends the input to $\omega_\theta=\chi_\theta\otimes|0\rangle$, where $\chi_\theta=(|0\rangle+e^{i\theta}|1\rangle)/\sqrt2$. By [L3] and [L7], $\langle+|\chi_\theta\rangle_D=\langle\chi_\theta,+\rangle_{\rm root}=(1+e^{i\theta})/2$. The phase identity [F1] and orthonormality [L7] give $\|\chi_\theta\|^2=(1+|e^{i\theta}|^2)/2=1$; then the product pairing [L6] gives $\|\omega_\theta\|=1$. Its projector is a density operator by [L4], so the outcome law [L5] applies and gives $|(1+e^{i\theta})/2|^2$, which equals $\cos^2(\theta/2)$ by the derivation in the proof of [L1]. [given, L1, L2, L3, L4, L5, L6, L7, F1, algebra]

2.1 At $\theta=0$, the second controlled matrix is $I_4$ and its plus probability is $1$. At $\theta=\pi$, its diagonal is $(1,1,-1,-1)$ and its plus probability is $0$. The minus probability is the complement by normalization [L8], so these are distinct finite outcome laws under the explicit separate-access assumption. [step 1.1, step 1.2, L1, L2, L5, L8, algebra] ∎
