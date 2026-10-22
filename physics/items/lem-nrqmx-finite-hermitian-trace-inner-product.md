---
id: lem-nrqmx-finite-hermitian-trace-inner-product
kind: lemma
title: "The real trace pairing on finite Hermitian matrices is an inner product"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1, equation (3.2)"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
---

## Statement

Let $\mathsf H_d$ be the real vector space of Hermitian $d\times d$ complex matrices from the preceding definition. The pairing $\langle A,B\rangle_{\mathrm{HS}}=\operatorname{Tr}(AB)$ is real-valued, symmetric, real-bilinear, and positive definite on $\mathsf H_d$. Its associated norm is $\|A\|_{\mathrm{HS}}=\sqrt{\operatorname{Tr}(A^2)}$. For every $m\ge1$ and finite family $F_1,\ldots,F_m\in\mathsf H_d$, the Gram matrix $G_{ab}=\operatorname{Tr}(F_aF_b)$ is real symmetric positive semidefinite, equals $S^*S$ for the synthesis map $S c=\sum_ac_aF_a$, and satisfies $\ker G=\ker S$.

## Statement references

[[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]

## Facts & Assumptions

**Given:** $d,m\ge1$, the Hermitian matrices $\mathsf H_d$, the trace pairing, the family $F_1,\ldots,F_m$, and the synthesis map defined in the preceding definition.

[F1] [[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]: $\mathsf H_d$ is a real vector space, $\langle A,B\rangle_{\mathrm{HS}}=\operatorname{Tr}(AB)$, and $G_{ab}=\operatorname{Tr}(F_aF_b)$.

[F2] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$ for finite square matrices.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues.

[F4] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: in a real or complex inner-product space, $|\langle u,v\rangle|\le\|u\|\|v\|$.

## Proof


1.1 For Hermitian $A,B$, $\overline{\operatorname{Tr}(AB)}=\operatorname{Tr}((AB)^*)=\operatorname{Tr}(BA)=\operatorname{Tr}(AB)$ by [F2]. The trace is additive and real-homogeneous, so the pairing is real-valued, symmetric, and real-bilinear. [given, F1, F2, algebra]

2.1 Diagonalize $A\in\mathsf H_d$ by [F3] with real eigenvalues $\lambda_1,\ldots,\lambda_d$. Then $\operatorname{Tr}(A^2)=\sum_j\lambda_j^2\ge0$, with equality exactly when all $\lambda_j=0$, hence exactly when $A=0$. This proves positive definiteness and the displayed square-root formula. [F3, step 1.1, algebra]

3.1 For $c\in\mathbb R^m$, bilinearity gives $c^\mathsf T Gc=\operatorname{Tr}((Sc)^2)=\|Sc\|_{\mathrm{HS}}^2\ge0$. For $X\in\mathsf H_d$, the vector $v$ with coordinates $v_a=\operatorname{Tr}(F_aX)$ satisfies $\langle Sc,X\rangle_{\mathrm{HS}}=c^\mathsf Tv$ for every $c$, so it is $S^*X$. By [F2], $v_a=\operatorname{Tr}(XF_a)$; hence the matrix of $S^*S$ is precisely $G$. The equality $\langle c,Gc\rangle=\|Sc\|_{\mathrm{HS}}^2$ implies $\ker G=\ker S$: $Sc=0$ gives $Gc=0$, while $Gc=0$ gives $\|Sc\|_{\mathrm{HS}}^2=0$ and hence $Sc=0$ by step 2.1. By [F4], $|\langle A,B\rangle_{\mathrm{HS}}|\le\|A\|_{\mathrm{HS}}\|B\|_{\mathrm{HS}}$; expanding $\|A+B\|_{\mathrm{HS}}^2$ and applying this bound gives $\|A+B\|_{\mathrm{HS}}\le\|A\|_{\mathrm{HS}}+\|B\|_{\mathrm{HS}}$. Thus the formula is a norm. [F1, F2, step 1.1, step 2.1, F4, algebra] ∎ 

