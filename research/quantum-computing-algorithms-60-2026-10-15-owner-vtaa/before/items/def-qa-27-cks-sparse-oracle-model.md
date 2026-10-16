---
id: def-qa-27-cks-sparse-oracle-model
kind: definition
title: "Childs–Kothari–Somma sparse QLSP oracle model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-26-qlsp-task
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qc-coherent-function-oracle
  - def-qc-circuit-cost-model
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
justified_by: []
axiom_use: "None; all address, value, and state spaces are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "QLSP oracle model and Theorems 2 and 5, PDF pp.2–5 and 22–29."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapters 27–29, sparse simulation, linear systems, and variable-time amplification."
---

## Definition

Fix $N\ge1$, a sparsity bound $d\ge1$, and an $N\times N$ Hermitian matrix $A$ with $\|A\|_{\rm op}\le1$. The sparse QLSP promises that the normalized input state $|b\rangle$ is supported on eigenvectors with $|\lambda|\ge1/\kappa$ for some declared $\kappa\ge1$; equivalently these are singular values at least $1/\kappa$. The QLSP target is the normalized state proportional to $A^+b$ from [[def-qa-26-qlsp-task]]. The zero matrix is excluded by the nonzero supported-state promise.

The access input supplies the following reversible operations and records every forward, inverse, and controlled call separately.

1. **Row location.** For each row $i$ and slot $\ell\in[d]$, a total finite function $f(i,\ell)$ returns the $\ell$th nonzero column in that row, or a designated invalid sentinel for a padded slot. The input supplies a reversible in-place row permutation implementing $(i,\ell)\mapsto(i,f(i,\ell))$ on valid slots, together with a completion on every padded basis input and its inverse.
2. **Reverse location.** For each valid nonzero entry $(i,j)$, a reversible map returns its unique slot $\ell$. Its completion on invalid and padded inputs is specified and charged. This reverse map is an explicit capability; it is not inferred from forward XOR access.
3. **Values.** A finite-precision reversible oracle returns the encoded complex entry $A_{ij}$ at valid pairs and zero at invalid pairs. Its value precision and the induced matrix approximation error are stated separately.
4. **Input preparation.** A supplied unitary $B$ prepares $|b\rangle$ from a designated zero state. $B$, $B^\dagger$, controlled calls, and their circuit/query/gate costs are explicit. No state loading, QRAM, or coordinate list is free.

The paper's row-location and value XOR oracles may be included as component access, but they do not by themselves certify the in-place reversible permutations, reverse map, or their implementation costs. In particular [[def-qa-20-sparse-hamiltonian-oracle-model]] defines total XOR row-location and value maps; this item requires the stronger reversible-location capabilities above whenever the sparse block-encoding construction is used. The parameter $d$, support condition number $\kappa$, value precision, oracle query count, gate cost, and classical data cost remain separate.
