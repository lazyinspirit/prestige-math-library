---
id: alg-qa-finite-abelian-hidden-subgroup-sample
kind: algorithm
title: One finite abelian hidden-subgroup Fourier sample
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-finite-abelian-hidden-subgroup-problem
  - def-qa-normalized-finite-abelian-fourier-transform
  - thm-qa-finite-abelian-fourier-transform-is-unitary
  - lem-qa-cyclic-group-has-n-characters
  - lem-qa-character-dual-of-a-product-factors
  - def-qc-dirac-notation-conversion
  - def-qc-coherent-function-oracle
  - def-qc-projective-measurement
  - def-qc-partial-trace
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Inputs are a hiding instance from [[def-qa-finite-abelian-hidden-subgroup-problem]], a fresh $b$-qubit group register and supplied exact circuits with declared access/costs, where $b$ is the group-code width in that definition:

- $P_G$ prepares the normalized uniform state $|G\rangle=N^{-1/2}\sum_{g\in G}|\operatorname{code}_G(g)\rangle$ on valid group labels and returns its workspace to the declared initial state.
- $O_F$ is the supplied coherent XOR oracle for the total extension $\widetilde F$ in [[def-qa-finite-abelian-hidden-subgroup-problem]], acting on the group register and a fresh $m$-qubit output register initialized to the all-zero word $0^m$.
- $Q_G$ is the supplied exact product QFT, with the fixed negative-character convention
$$Q_G|\operatorname{code}_G(g)\rangle=N^{-1/2}\sum_{\mathbf k}\overline{\chi_{\mathbf k}(g)}|\operatorname{code}_{\widehat G}(\mathbf k)\rangle$$
on the valid group subspace. It is supplied as a unitary on the full $b$-qubit register, so any extension from the valid-label subspace is part of the circuit input.

If $N=1$, return the unique trivial character without a query. Otherwise:

1. Prepare $|G\rangle$ with $P_G$.
2. Apply $O_F$ once to the group register and fresh output register.
3. Discard the output register by the declared partial-trace operation; do not measure it.
4. Apply $Q_G$ to the group register and measure the full $b$-qubit register in its ordered computational basis; the prescribed QFT action places the state in the valid character-code subspace.
5. Decode the measured valid character code as the tuple $\mathbf k$ and return $\chi_{\mathbf k}$.

This procedure assumes the preparation, oracle, and QFT circuits are supplied exactly. It makes no existence, uniformity, or efficiency claim for those circuits.
