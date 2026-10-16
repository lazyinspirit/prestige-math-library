---
id: thm-qc-hadamard-pauli-conjugation
kind: theorem
title: "Hadamard conjugation of the Pauli matrices"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-pauli-algebra
  - def-qc-pauli-matrices
  - def-qc-qubit-and-bloch-representation
  - thm-qc-computational-basis-orthonormal
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; the proof is a finite $2\\times2$ matrix calculation."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.2.1, PDF pp.10–11"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: "https://arxiv.org/pdf/1907.09415v6"
      locator: "§1.4, PDF p.9"
    - title: "Aram Harrow, 6.443/8.371/18.436 Quantum Information Science II, Lecture 1: Quantum states and operations (2018)"
      url: "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
      locator: "§1.2.1, PDF p.3"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $H$ as defined in [[def-qc-one-qubit-gate-alphabet-and-rotations]],
$$HXH=Z,\qquad HZH=X,\qquad HYH=-Y.$$
Moreover, if $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $|-\rangle=(|0\rangle-|1\rangle)/\sqrt2$, then $H|0\rangle=|+\rangle$, $H|1\rangle=|-\rangle$, and $|+\rangle,|-\rangle$ are the $+1$ and $-1$ eigenvectors of $X$, respectively. Thus $H$ sends the computational basis to the $X$-eigenbasis.

## Facts & Assumptions

**Given:** The ordered computational basis $(|0\rangle,|1\rangle)$ and the matrices $H,X,Y,Z$.

[F1] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F2] [[def-qc-pauli-matrices]]: $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F3] [[thm-qc-pauli-algebra]]: $X,Y,Z$ have the products displayed in the Pauli multiplication table.

[F4] [[thm-qc-computational-basis-orthonormal]]: the computational basis $(|0\rangle,|1\rangle)$ is orthonormal.

## Proof

1.1 Using [F1] and [F2], direct multiplication gives $HXH=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=Z$, $HZH=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=X$, and $HYH=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}0&-i\\i&0\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=-Y$. The products agree with the Pauli multiplication table in [F3], including the negative sign. [F1, F2, F3, algebra]

2.1 The first column of $H$ in [F1] gives $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2=|+\rangle$, and its second gives $H|1\rangle=(|0\rangle-|1\rangle)/\sqrt2=|-\rangle$. By [F2], $X|+\rangle=|+\rangle$ and $X|-\rangle=-|-\rangle$. Expanding with [F4] gives $\langle +,+\rangle_{\rm root}=\tfrac12(1+0+0+1)=1$, $\langle -,-\rangle_{\rm root}=\tfrac12(1-0-0+1)=1$, and $\langle +,-\rangle_{\rm root}=\tfrac12(1-0+0-1)=0$. Thus these vectors form the $X$-eigenbasis. [given, F1, F2, F4, algebra] ∎

