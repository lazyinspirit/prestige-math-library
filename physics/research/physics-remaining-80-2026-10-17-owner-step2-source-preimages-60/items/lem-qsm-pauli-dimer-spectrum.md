---
id: lem-qsm-pauli-dimer-spectrum
kind: lemma
title: "Spectrum of the two-qubit Pauli exchange matrix"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-pauli-two-qubit-conventions
  - thm-nth-roots-exist
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Statement

For $C$ from [[def-qsm-pauli-two-qubit-conventions]], the singlet vector $s=(e_0\otimes e_1-e_1\otimes e_0)/\sqrt2$ is an eigenvector with eigenvalue $-3$, and the three orthonormal triplet vectors $e_0\otimes e_0$, $(e_0\otimes e_1+e_1\otimes e_0)/\sqrt2$, and $e_1\otimes e_1$ have eigenvalue $1$. Here $\sqrt2$ is the unique positive square root supplied by [[thm-nth-roots-exist]]. These four vectors are an orthonormal basis of $\mathbb C^2\otimes\mathbb C^2$.

## Facts & Assumptions

**Given:** The explicit Pauli matrices, exchange matrix, and ordered basis of [[def-qsm-pauli-two-qubit-conventions]].

[F1] [[def-qsm-pauli-two-qubit-conventions]]: $C=\sigma_x\otimes\sigma_x+\sigma_y\otimes\sigma_y+\sigma_z\otimes\sigma_z$ in the displayed tensor-product basis.

[F2] [[thm-nth-roots-exist]]: $\sqrt2$ is the unique positive real number whose square is $2$.

## Proof

1.1 Applying the three tensor products in [F1] to the ordered basis $(00,01,10,11)$ gives the matrix with outer diagonal entries $1,1$, middle block $\begin{pmatrix}-1&2\\2&-1\end{pmatrix}$, and all other entries zero. [given, F1, algebra]

2.1 The outer basis vectors are eigenvectors with eigenvalue $1$. The middle block sends $(01-10)/\sqrt2$ to $-3(01-10)/\sqrt2$ and $(01+10)/\sqrt2$ to $(01+10)/\sqrt2$. Since $(\sqrt2)^2=2$, each displayed middle vector has squared norm $(1+1)/2=1$; their inner product is $(1-1)/2=0$. They are also orthogonal to $00,11$, so together the four eigenvectors are an orthonormal basis and give the full spectrum. [given, F2, step 1.1, algebra] ∎
