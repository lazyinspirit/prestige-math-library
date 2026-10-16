---
id: lem-qc-pauli-vector-multiplication
kind: lemma
title: Pauli Vector Multiplication and Commutator Formula
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-qc-pauli-matrices]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: §§1.3–1.4, Pauli matrices and one-qubit gates
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
      locator: §2.3.2, PDF pp. 21–22, Pauli matrix multiplication
---

## Statement

For the Pauli matrices $X,Y,Z$ in
[[def-qc-pauli-matrices]], the matrices
are Hermitian, traceless, and square to $I$. For $u,v\in\mathbb R^3$, writing
$u\cdot\sigma=u_1X+u_2Y+u_3Z$ gives
$$ (u\cdot\sigma)(v\cdot\sigma)=(u\cdot v)I+i(u\times v)\cdot\sigma.$$
Also, the Pauli triple is a real basis of the traceless Hermitian $2\times2$
matrices, $\|u\cdot\sigma\|=|u|$, and the commutator therefore satisfies
$$[iu\cdot\sigma,iv\cdot\sigma]=-2i(u\times v)\cdot\sigma.$$

## Facts & Assumptions

**Given:** The standard Pauli matrices
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$,
$Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F1] [[def-qc-pauli-matrices]] defines $X,Y,Z$ in the ordered computational
basis by the three displayed matrices in its Definition.

## Proof

1.1 Taking conjugate transposes of the displayed matrices gives $X^*=X,Y^*=Y,Z^*=Z$, and their traces are all zero. Direct multiplication gives $X^2=Y^2=Z^2=I$ and $XY=iZ$, $YX=-iZ$, $YZ=iX$, $ZY=-iX$, $ZX=iY$, $XZ=-iY$. For example, $XY=\begin{pmatrix}i&0\\0&-i\end{pmatrix}=iZ$ and $YX=\begin{pmatrix}-i&0\\0&i\end{pmatrix}=-iZ$; the remaining four products are respectively $\begin{pmatrix}0&i\\i&0\end{pmatrix}=iX$, $\begin{pmatrix}0&-i\\-i&0\end{pmatrix}=-iX$, $\begin{pmatrix}0&1\\-1&0\end{pmatrix}=iY$, and $\begin{pmatrix}0&-1\\1&0\end{pmatrix}=-iY$. [F1, algebra]

2.1 Expand $(u\cdot\sigma)(v\cdot\sigma)$ bilinearly. The three diagonal terms are $(u_1v_1+u_2v_2+u_3v_3)I$ by step 1.1. The paired off-diagonal terms are $i(u_2v_3-u_3v_2)X+i(u_3v_1-u_1v_3)Y+ i(u_1v_2-u_2v_1)Z$, exactly $i(u\times v)\cdot\sigma$. Put $A=i u\cdot\sigma$ and $B=i v\cdot\sigma$. Then $[A,B]=AB-BA=-(u\cdot\sigma)(v\cdot\sigma)+(v\cdot\sigma)(u\cdot\sigma)$; the vector-product formula and $v\times u=-u\times v$ give $[A,B]=-2i(u\times v)\cdot\sigma$. [F1, step 1.1, algebra]

3.1 A traceless Hermitian matrix has the form $\begin{pmatrix}a&b-ic\\b+ic&-a\end{pmatrix}$ with real $a,b,c$, which equals $bX+cY+aZ$. This proves the basis assertion. The product identity at $u=v$ gives $(u\cdot\sigma)^2=|u|^2I$; since $u\cdot\sigma$ is Hermitian, for every vector $x$ we have $\|(u\cdot\sigma)x\|^2=\langle (u\cdot\sigma)^2x,x\rangle =|u|^2\|x\|^2$. Taking the supremum over unit vectors gives $\|u\cdot\sigma\|=|u|$. Also $i u\cdot\sigma$ is traceless skew-Hermitian by the established matrix traces and adjoints. [F1, step 1.1, step 2.1, algebra] ∎
