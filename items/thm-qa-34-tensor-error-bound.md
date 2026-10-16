---
id: thm-qa-34-tensor-error-bound
kind: theorem
title: Tensor-product channel error bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-34-end-to-end-error-contract
  - def-qc-density-operator
  - def-qc-povm-and-outcome-law
  - def-qc-quantum-channel
  - def-qc-tensor-register-and-permutation
  - thm-qc-channel-tensor-error-bound
  - thm-qc-channels-compose-and-tensor
  - thm-qa-34-channel-hybrid-bound
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Statement

For a positive integer $L$ and a finite family of matching channel pairs $\Phi_j,\Psi_j:\mathcal L(H_j)\to\mathcal L(K_j)$, $j=1,\ldots,L$, on nonzero finite-dimensional complex Hilbert spaces,
$$d_\diamond\left(\bigotimes_{j=1}^L\Phi_j,\bigotimes_{j=1}^L\Psi_j\right)\le\sum_{j=1}^L d_\diamond(\Phi_j,\Psi_j).$$
For every nonzero finite-dimensional reference space $R$, every density operator $\rho$ on $(\bigotimes_{j=1}^L H_j)\otimes R$, and every finite POVM on $(\bigotimes_{j=1}^L K_j)\otimes R$, the total variation distance between the outcome laws after applying $(\bigotimes_j\Phi_j)\otimes\operatorname{id}_R$ and $(\bigotimes_j\Psi_j)\otimes\operatorname{id}_R$ to $\rho$ is at most the same sum. No product-input assumption is made; $\rho$ may be entangled across the component inputs and reference.

## Facts & Assumptions

**Given:** The finite channel pairs, product spaces, nonzero finite reference space $R$, input density operator $\rho$, and final finite POVM specified in the Statement.

[F1] [[def-qa-34-end-to-end-error-contract]]: $d_\diamond$ and $D$ each include a factor $1/2$; the raw diamond norm does not.

[F2] [[thm-qc-channel-tensor-error-bound]]: for two matching channel pairs, the raw diamond distance between tensor products is at most the sum of the raw local diamond errors; the diamond norm is multiplicative under tensor products.

[F3] [[thm-qc-channels-compose-and-tensor]]: tensor products and compositions of finite-dimensional channels are channels.

[F4] [[thm-qa-34-channel-hybrid-bound]]: for matching finite-dimensional channels, every finite reference input and final POVM has outcome total variation at most the normalized diamond distance between the channels.

## Proof


1.1 For $L=1$ the channel inequality is equality by [F1]. [base, given, F1, algebra]

1.2 Assume the bound for $L$ factors. By [F3], the first $L$ channel factors in each tensor product form channels. Apply [F2] to this prefix channel pair and the final channel pair. Dividing the raw diamond inequality by $2$ gives the normalized distance of the full tensor products at most the prefix normalized distance plus $d_\diamond(\Phi_{L+1},\Psi_{L+1})$. The induction hypothesis bounds the prefix term by the first $L$ summands. [ih, F1, F2, F3, algebra]

2.1 Steps 1.1 and 1.2 prove the channel inequality for every finite $L$ by induction. [step 1.1, step 1.2, discharge-induction: step 1.2]

3.1 By [F3], the product maps $\Phi:=\bigotimes_j\Phi_j$ and $\Psi:=\bigotimes_j\Psi_j$ are channels. Apply [F4] to the one-stage pair $\Phi,\Psi$, with the declared reference $R$, input $\rho$, and final POVM. Its outcome total variation is at most $d_\diamond(\Phi,\Psi)$, which step 2.1 bounds by $\sum_jd_\diamond(\Phi_j,\Psi_j)$. [given, F3, F4, step 2.1, discharge-induction: step 2.1] ∎

