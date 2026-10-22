---
id: def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse
kind: definition
title: "Finite Hermitian frames and their Gram pseudoinverse"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-moore-penrose-pseudoinverse: mathematical-premise
  thm-moore-penrose-pseudoinverse-exists-and-is-unique: mathematical-premise
justified_by:
  - lem-nrqmx-finite-hermitian-trace-inner-product
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Definition

For an integer $d\ge1$, let $\mathsf H_d=\{A\in M_d(\mathbb C):A=A^*\}$, regarded as a real vector space. For $A,B\in\mathsf H_d$, define the trace pairing $\langle A,B\rangle_{\mathrm{HS}}:=\operatorname{Tr}(AB)$ and write $\|A\|_{\mathrm{HS}}:=\sqrt{\operatorname{Tr}(A^2)}$. The following A-page lemma verifies that the pairing is a real inner product and that this expression is its norm.

Let $m\ge1$ and let $F=(F_a)_{a=1}^m$ be a finite family in $\mathsf H_d$. It is informationally complete when its real linear span is all of $\mathsf H_d$. Its synthesis map is $S:\mathbb R^m\to\mathsf H_d$, $S c=\sum_{a=1}^m c_aF_a$. Define the Gram matrix by $G_{ab}:=\operatorname{Tr}(F_aF_b)$.

Equip $\mathbb R^m$ with the dot product $c^\mathsf Tb=\sum_{a=1}^m c_ab_a$. Here $S^*:\mathsf H_d\to\mathbb R^m$ denotes the adjoint relative to this dot product and the displayed trace pairing: it is characterized by $c^\mathsf T(S^*X)=\langle Sc,X\rangle_{\mathrm{HS}}$ for every $c\in\mathbb R^m$ and $X\in\mathsf H_d$. The following lemma proves that the trace pairing is an inner product and that this adjoint exists as a well-defined linear map; it also establishes that $G=S^*S$ is real symmetric positive semidefinite.

For this positive semidefinite real matrix $G$, let $G^+$ be its unique Moore–Penrose pseudoinverse in $M_m(\mathbb R)$, defined by the four Penrose equations over $\mathbb R$. Define the canonical dual operators $D_a=\sum_{b=1}^m(G^+)_{ba}F_b$ and the reconstruction map $D:\mathbb R^m\to\mathsf H_d$, $D c=\sum_{a=1}^m c_aD_a$. A later A-page lemma identifies this finite pseudoinverse with its spectral formula.

## Definition references

[[lem-qsm-matrix-state-calculus]]

[[lem-qsm-dt-finite-trace-pairing-cyclicity]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[[def-moore-penrose-pseudoinverse]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]

[[lem-nrqmx-finite-hermitian-trace-inner-product]]
