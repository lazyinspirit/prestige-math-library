---
id: alg-qa-exact-binary-qft-circuit
kind: algorithm
title: Exact binary QFT circuit
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps: [def-qa-cyclic-quantum-fourier-transform, def-qa-qft-gate-cost-model, lem-qa-binary-qft-product-factorization, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics]
axiom_use: "No choice axiom is used; the chronological gate list is finite and explicit."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Input: an $n$-qubit register with ordered wires $q_{n-1},\ldots,q_0$, $n\ge0$. The input integer is encoded by $x=\sum_{j=0}^{n-1}x_j2^j$ in the computational basis, as specified by [[def-qc-ordered-bitstring-encoding]].

Output: the following finite gate list, defining a unitary by the circuit semantics of [[def-qc-circuit-denotational-semantics]] on the ordered-register syntax of [[def-qc-circuit-syntax-and-register-order]], and using no ancillas. The assigned denotational-semantics supplier body is absent, so the unitary interpretation remains a supplier check.

1. For $j=n-1,n-2,\ldots,0$, apply $H$ to target $q_j$.
2. For the same $j$, and then for $i=0,1,\ldots,j-1$, apply $\mathrm{CP}_{j-i+1}$ to the pair $(q_i,q_j)$, with $q_i$ as control and $q_j$ as target. Here $\mathrm{CP}_s$ is the ideal controlled phase defined in [[def-qa-qft-gate-cost-model]].
3. For $j=0,1,\ldots,\lfloor n/2\rfloor-1$, swap $q_j$ with $q_{n-1-j}$.

The chronological order is exactly the order listed. If $n=0$, all loops are empty and the output is the empty circuit, i.e. the identity on the one-dimensional register.
