---
page: quantum-fourier-transform-circuits-examples
title: Quantum Fourier-Transform Circuits — Examples
status: published
items: []
examples:
  - ex-qa-qft-fourier-circuit-order-and-truncation
requires:
  - quantum-fourier-transform-circuits
---

The two-qubit example writes the positive-sign $N=4$ transform in both wire orders, checks the final swap and exact gate count, and computes the one-level truncation error by the single omitted controlled phase. It is a finite check of the A-page conventions and formulas, including the exact three-CNOT SWAP expansion. Its gate-list interpretation and resource count use the batch-9 circuit-semantics and resource-accounting suppliers, which are present as drafts; readiness remains conditional on their review and acceptance.
