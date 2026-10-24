---
id: alg-qa-22-product-block-encoding
kind: algorithm
title: Product block encoding with separate ancillas
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
verification:
  precheck: n/a
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - def-qc-tensor-register-and-permutation
  - def-qc-dirac-notation-conversion
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 53
      url: https://arxiv.org/pdf/1806.01838
---

## Definition

**Inputs.** An integer $n\ge1$, square matrices $A,B\in\mathbb C^{n\times n}$, positive normalizations $\alpha_A,\alpha_B$, and unitaries $U_A,U_B$ giving $(\alpha_A,a_A,\varepsilon_A)$ and $(\alpha_B,a_B,\varepsilon_B)$ block encodings, with $\alpha_A\ge\|A\|_{\rm op}$ and $\alpha_B\ge\|B\|_{\rm op}$. Their access and implementation costs are supplied separately under [[def-qa-22-block-encoding-access-model]].

**Construction.** Put the ancillas in the fixed order $A$-ancilla, $B$-ancilla, system. Let $V_A$ act by $U_A$ on the $A$-ancilla and system and by the identity on the $B$-ancilla. Let $V_B$ act by $U_B$ on the $B$-ancilla and system and by the identity on the $A$-ancilla. Return the unitary $W:=V_AV_B$, so $V_B$ acts first, and use all $a_A+a_B$ ancillas for the projected block. No intermediate measurement or reset is performed. The resulting normalization is $\alpha_A\alpha_B$.

## Remarks

The precise normalized product error bound is proved in [[thm-qa-22-product-block-encoding-correctness]].
