---
id: lem-qa-16-effective-spectral-gap
kind: lemma
title: Effective spectral gap for a product of two reflections
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-reflection
  - def-inner-product-space
  - def-qc-dirac-notation-conversion
  - thm-qc-reflection-unitary-involution
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


Let $H$ be a finite-dimensional complex inner-product space, $\Pi$ and $\Delta$ orthogonal projections on $H$, $R_\Pi=2\Pi-I$ and $R_\Delta=2\Delta-I$, and $U=R_\Pi R_\Delta$. For $0\le\omega\le\pi$, let $E_\omega$ be the spectral projection of $U$ onto eigenvalues $e^{i\varphi}$ whose principal arguments satisfy $|\varphi|\le\omega$. If $\Delta w=0$, then
$$\|E_\omega\Pi w\|\le \frac{\omega}{2}\|w\|.$$

## Facts & Assumptions

**Given:** The finite-dimensional projections and vector $w$ in the Statement, with $\Delta w=0$.



[F1] [[def-qc-reflection]]: for an orthogonal projection $P$, the plus-on-range reflection is $R_P=2P-I$.

[F2] [[thm-qc-reflection-unitary-involution]]: each such reflection is a unitary involution.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional unitary has an orthonormal eigenbasis; its eigenvalues have modulus one.

## Proof

1.1 Put $R_P=2P-I$ and $R_D=2D-I$. Since $Dw=0$, $R_Dw=-w$; hence $Uw=R_PR_Dw=-R_Pw$ and therefore $Pw=(w+R_Pw)/2=(I-U)w/2$. [given, F1, algebra]

2.1 Let $E_\omega$ be the orthogonal spectral projection of $U$ onto eigenvectors with eigenvalue $e^{i\varphi}$ for a principal phase $\varphi\in[-\pi,\pi]$ satisfying $|\varphi|\le\omega$. By [F2], both reflections are unitary, so $U$ is unitary. By [F3], $E_\omega$ commutes with $U$ and has an orthonormal eigenbasis. Thus $E_\omega Pw=(I-U)E_\omega w/2$, and on each selected eigenvector $|1-e^{i\varphi}|\le|\varphi|\le\omega$. The squared norm in that basis is at most $(\omega/2)^2\|E_\omega w\|^2\le(\omega/2)^2\|w\|^2$. [given, F2, F3, step 1.1, algebra]

3.1 Taking square roots proves $\|E_\omega Pw\|\le\omega\|w\|/2$, including zero- and full-rank projections because step 1.1 used only the projection identities. [given, F1, step 1.1, step 2.1] ∎
