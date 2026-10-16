---
id: alg-qa-25-sparse-hamiltonian-block-encoding
kind: algorithm
title: Sparse Hermitian block encoding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qc-state-preparation-cost-model
  - thm-qc-state-preparation-rotation-level-upper-bound
  - alg-qc-state-preparation
  - lem-qa-25-sorted-xor-sparse-access-isometries
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

**Input.** A finite $d_H$-row-sparse Hermitian matrix $H$, with $d_H\ge1$. Put $h_{\max}=\max_{i,j}|H_{ij}|$ and supply a certified nonnegative entry bound $h\ge h_{\max}$. Supply exact row and column enumerations. Write their neighbor labels as $\rho(i,k)$ and $\kappa(j,k)$, including $d_H$ distinct labels per row or column: every nonzero entry occurs once, and padded labels are sentinels. Supply reversible in-place permutations whose action on every valid row/slot and column/slot basis state is
$$O_r|i,k\rangle=|i,\rho(i,k)\rangle,\qquad O_c|j,k\rangle=|\kappa(j,k),j\rangle,$$
with their full reversible extensions, inverses, and actual query and gate costs. These permutations are explicit inputs; the row/column lists alone do not imply them. Supply an exact unitary $D_{d_H}$ preparing $d_H^{-1/2}\sum_{k=1}^{d_H}|k\rangle$, its inverse, and their costs. A classical table is not a free state-preparation circuit. If $h=0$, then $H=0$; use one flag qubit and return $X_{\rm flag}\otimes I$ with normalization $1$, whose all-zero flag compression is $0=H$. Otherwise set $\alpha=d_Hh$ and supply a total reversible value-decoding query that writes a finite exact encoding of $h_{ij}=H_{ij}/h$ on valid pairs and $0$ on invalid or sentinel pairs, together with its inverse and any controlled forms used, with their costs. Classical matrix entries alone do not provide this coherent access.

**Instructions when $h>0$.** Put $\widehat H=H/h$, so every queried entry $h_{ij}=\widehat H_{ij}$ obeys $|h_{ij}|\le1$. On the paired row/column index registers define
$$V_L=O_r(I\otimes D_{d_H})\,\mathrm{SWAP},\qquad V_R=O_c(D_{d_H}\otimes I).$$
Let $U_L=I_{\rm flag}\otimes V_L$. Define $U_R$ by first applying $V_R$, then querying $h_{ij}$, applying to the flag
$$\begin{pmatrix} h_{ij}&-\sqrt{1-|h_{ij}|^2}\\ \sqrt{1-|h_{ij}|^2}&\overline{h_{ij}} \end{pmatrix},$$
and unquerying the value and arithmetic workspace. The square root is the nonnegative real root. Invalid sentinel pairs use $h_{ij}=0$. Return $U_L^*U_R$ with the all-zero auxiliary block designated as the encoded block. Every index, flag, value, state-preparation, inverse, controlled, arithmetic, and finite-precision operation is supplied or charged separately.

The supplied-permutation mode requires the in-place location permutations as explicit input. The total XOR row-location oracle of [[def-qa-20-sparse-hamiltonian-oracle-model]] does not itself supply an $O(1)$-query in-place permutation or its inverse. Any scan or inverse-location construction must be specified and charged before claiming such a sparse-oracle cost.

The block identity and its exact query accounting are proved in [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]].

**Sorted-XOR specialization.** As an alternative input mode, supply the exact sorted XOR location/value interface of [[def-qa-20-sparse-hamiltonian-oracle-model]], or the sorted distinct support-superset variant allowing listed zero entries in [[lem-qa-25-sorted-xor-sparse-access-isometries]], a certified positive bound $h\ge\max_{i,j}|H_{ij}|$, and the same separately charged uniform preparation and value/flag arithmetic. Execute the explicit compute-location, binary-search inverse, slot-erasure and row/column-overlap construction of [[lem-qa-25-sorted-xor-sparse-access-isometries]]. It pads the system to $M=2^{\lceil\log_2(N+d_H)\rceil}$ and returns a clean block encoding of $(H\oplus0)/(d_Hh)$, with normalization $\alpha=d_Hh$. The location workspace is exactly clean on every prepared slot state. Each encoding, actual adjoint or coherent controlled encoding costs $O(\log(d_H+1))$ original location calls and $O(1)$ value calls; its sorting assumption is part of this mode's input. If $\|H\|\le1$, choose $h=1$ without computing a maximum. Keep the one-sided value amplitude on $U_R$ exactly as above. The original supplied-permutation mode and its sharper call count remain available.
