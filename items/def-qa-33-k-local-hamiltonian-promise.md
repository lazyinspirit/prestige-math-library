---
id: def-qa-33-k-local-hamiltonian-promise
kind: definition
title: Encoded k-local Hamiltonian promise problem
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-promise-problem
  - def-qa-33-effective-finite-matrix-encoding
  - def-qc-uniform-circuit-family
  - def-qc-povm-and-outcome-law
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §2, local Hamiltonian encoding, PDF pp. 3–4
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.2, PDF pp. 116–118
---

## Definition

Fix an integer $k\ge1$. An encoded instance of input length $N$ gives $n,m\ge1$, with $n$ polynomially bounded in $N$ and $m$ polynomially bounded in $n$. For each term it lists a support set $S_j\subseteq\{0,\ldots,n-1\}$ of size $r_j\le k$ and a Hermitian $2^{r_j}\times2^{r_j}$ matrix $H_j$ in the computational basis of those qubits, ordered by increasing index in $S_j$. It also gives a positive rational polynomial bound $B$ with $\|H_j\|\le B$ for every exact term. Matrix descriptions and their approximation procedures use [[def-qa-33-effective-finite-matrix-encoding]]. Embed each term as $H_j$ on the factors indexed by $S_j$ in increasing order and the identity on every other qubit, and put $H=\sum_{j=1}^m H_j$ on $(\mathbb C^2)^{\otimes n}$. Given rational thresholds $a<b$ with $b-a\ge1/p(n)$ for a polynomial $p$, the promise problem has YES instances when $\lambda_{\min}(H)\le a$ and NO instances when $\lambda_{\min}(H)\ge b$. Inputs violating the format or promise are outside the promise; no behavior is required there. A matrix description is not a free measurement oracle: a verifier must generate every local test circuit from the finite encoding.
