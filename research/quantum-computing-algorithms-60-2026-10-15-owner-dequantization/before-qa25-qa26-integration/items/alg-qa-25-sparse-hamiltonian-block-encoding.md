---
id: alg-qa-25-sparse-hamiltonian-block-encoding
kind: algorithm
title: Sparse Hermitian block encoding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qc-state-preparation-cost-model
  - thm-qc-state-preparation-rotation-level-upper-bound
  - alg-qc-state-preparation
justified_by:
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; this is a finite oracle and circuit procedure."
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 48"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4, Example 2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

**Input.** A finite $d_H$-row-sparse Hermitian matrix $H$, with $d_H\ge1$, and $h_{\max}=\max_{i,j}|H_{ij}|\ge0$. Supply exact row and column enumerations, each listing every nonzero entry exactly once and padded to $d_H$ distinct labels with sentinels that never create a good-flag overlap; supply reversible in-place permutations $O_r,O_c$ and their inverses, each with its actual query and gate costs. Supply an exact unitary $D_{d_H}$ preparing $d_H^{-1/2}\sum_{k=1}^{d_H}|k\rangle$, its inverse, and their costs. A classical table is not a free state-preparation circuit. If $h_{\max}=0$, use one flag qubit and return $X_{\rm flag}\otimes I$ with normalization $1$; its all-zero flag compression is $0=H$. Otherwise set $\alpha=d_Hh_{\max}$.

**Instructions when $h_{\max}>0$.** Put $\widehat H=H/h_{\max}$, so every queried entry $h_{ij}=\widehat H_{ij}$ obeys $|h_{ij}|\le1$. On the paired row/column index registers define
$$V_L=O_r(I\otimes D_{d_H})\,\mathrm{SWAP},\qquad V_R=O_c(D_{d_H}\otimes I).$$
Let $U_L=I_{\rm flag}\otimes V_L$. Define $U_R$ by first applying $V_R$, then querying $h_{ij}$, applying to the flag
$$\begin{pmatrix} h_{ij}&-\sqrt{1-|h_{ij}|^2}\\ \sqrt{1-|h_{ij}|^2}&\overline{h_{ij}} \end{pmatrix},$$
and unquerying the value and arithmetic workspace. The square root is the nonnegative real root. Invalid sentinel pairs use $h_{ij}=0$. Return $U_L^*U_R$ with the all-zero auxiliary block designated as the encoded block. Every index, flag, value, state-preparation, inverse, controlled, arithmetic, and finite-precision operation is supplied or charged separately.

The routine requires the in-place location permutations as explicit input. The total XOR row-location oracle of [[def-qa-20-sparse-hamiltonian-oracle-model]] does not itself supply an $O(1)$-query in-place permutation or its inverse. Any scan or inverse-location construction must be specified and charged before claiming such a sparse-oracle cost.

The block identity and its exact query accounting are proved in [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]].
