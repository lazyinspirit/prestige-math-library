---
id: lem-qc-clifford-t-determinant-phase
kind: lemma
title: Determinants of one-qubit Clifford+T words are eighth roots
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-clifford-t-gate-library
  - thm-determinant-multiplicative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits
      url: https://arxiv.org/pdf/1206.5236
    - title: Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
dependency_level: 10
---

## Statement

Every exact one-qubit Clifford+T matrix word, including a free scalar
Clifford phase $\omega^j I$, has determinant in
$\{\omega^k:k\in\mathbb Z\}$.

## Facts & Assumptions

**Given:** $\omega=e^{i\pi/4}$ and a finite word from the one-qubit
Clifford+T matrix alphabet.

[F1] [[def-qc-clifford-t-gate-library]]: $H$ has its displayed Hadamard matrix,
$T=\operatorname{diag}(1,\omega)$, $T^\dagger=\operatorname{diag}(1,\omega^{-1})$,
$S=T^2$, $Z=T^4$, $X,Y,Z$ are the displayed Pauli matrices, and $\omega I$
is an allowed scalar Clifford phase.

[F2] [[thm-determinant-multiplicative]]: determinants multiply under products
of same-sized square matrices.

## Proof


1.1 Direct $2\times2$ determinants give $\det H=-1=\omega^4$, $\det T=\omega$, $\det T^\dagger=\omega^{-1}$, $\det S=\omega^2$, $\det S^\dagger=\omega^{-2}$, and $\det X=\det Y=\det Z=-1=\omega^4$. Also $\det(\omega^j I)=\omega^{2j}$. Thus every one-qubit generator has determinant an integer power of $\omega$. [F1, algebra]

2.1 By [F2], the determinant of a finite product is the product of the generator determinants from step 1.1. The product is again an integer power of $\omega$, including for the empty word, whose determinant is $1$. [F1, F2, step 1.1, algebra] ∎

