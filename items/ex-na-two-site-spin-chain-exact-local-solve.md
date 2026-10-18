---
id: ex-na-two-site-spin-chain-exact-local-solve
kind: example
title: "A two-site spin-chain local solve reaches the exact ground state"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
dependency_level: 5
---

## Example

Take two spin-$1/2$ sites with computational basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, Pauli matrix $Z=\operatorname{diag}(1,-1)$, and finite Hamiltonian
$$H=-Z\otimes I-I\otimes Z-Z\otimes Z.$$
Supply the initial product state $|11\rangle$ by the rank-one open-boundary TT cores $G_k(1,i_k,1)=1_{\{i_k=2\}}$ for $k=1,2$. Starting from this presentation, one completed width-two exact sweep of [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]] returns $|00\rangle$ and lowers the energy from $1$ to $-3$.

## Facts & Assumptions

**Given:** The two-site state, Hamiltonian, and width-two exact sweep just specified.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: a normalized finite state is a tensor array, and a finite Hamiltonian input is Hermitian.

[F2] [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]]: each window is updated by the exact lowest eigenvector of its effective Hermitian matrix; with two sites the width-two window is the entire coefficient space.

## Verification


1.1 In the displayed basis, $H$ is the diagonal matrix $\operatorname{diag}(-3,1,1,1)$: the three summands contribute respectively $(-1,-1,1,1)$, $(-1,1,-1,1)$, and $(-1,1,1,-1)$. Thus $|00\rangle$ is the unique unit ground vector with energy $-3$, while $|11\rangle$ has energy $1$. [given, F1, algebra]

2.1 For the only two-site window, the fixed environments are identities, so the embedding $E$ and effective Hamiltonian are $I_4$ and $H$. The exact solve in [F2] therefore selects $|00\rangle$. The backward pass sees the same $H$ and leaves this unique ground vector unchanged, and its exact SVD split has rank one and no discarded tail. Hence the completed sweep returns $|00\rangle$ with energy $-3<1$. [given, F2, step 1.1, algebra] ∎
