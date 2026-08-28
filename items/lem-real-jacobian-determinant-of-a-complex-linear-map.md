---
id: lem-real-jacobian-determinant-of-a-complex-linear-map
kind: lemma
title: "The real Jacobian determinant of a complex-linear automorphism is the squared modulus of its complex determinant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-column-and-matrix-of-a-linear-map, def-ring-matrix-product-identity-and-transpose, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 5.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 5.2"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m\ge1$, let $L:\mathbb C^m\to\mathbb C^m$ be $\mathbb C$-linear, and let
$A$ be its matrix in the standard complex basis. Regard $L$ as an
$\mathbb R$-linear map on $\mathbb R^{2m}$ through the usual identification
$\mathbb C^m\cong\mathbb R^{2m}$. Then

$$\det_{\mathbb R}L=\left|\det_{\mathbb C}A\right|^2.$$

In particular $\det_{\mathbb R}L\ne0$ if and only if $\det_{\mathbb C}A\ne0$.

## Facts & Assumptions

**Given:** The complex-linear map $L$ and its matrix $A=B+iC$ with real matrices $B$ and $C$.

[L1] Determinants multiply under matrix products, and the determinant of a triangular block matrix is the product of its diagonal-block determinants ([[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]]).

[A1] In the real basis $(e_1,\dots,e_m,ie_1,\dots,ie_m)$, the real matrix of $L$ is

$$R=\begin{pmatrix} B & -C \\ C & B \end{pmatrix}.$$

The complex matrices

$$P=\frac12\begin{pmatrix} I & I \\ -iI & iI \end{pmatrix},\qquad Q=\begin{pmatrix} I & iI \\ I & -iI \end{pmatrix}$$

are inverse to one another.

## Proof

**Proof technique:** direct.

1.1 Using [A1], direct block multiplication gives $$QRP=\begin{pmatrix} A & 0 \\ 0 & \overline{A} \end{pmatrix}.$$ Indeed the two columns of $P$ are the $(z,\overline z)$ coordinates of a real vector, and the $\mathbb C$-linearity of $L$ makes the transformed action split into $A$ on the $z$ block and $\overline A$ on the $\overline z$ block. [A1, algebra]

2.1 By [L1], step 1.1, and the identity $QP=I$, one has $$\det_{\mathbb C}R=\det_{\mathbb C}(QRP)=\det_{\mathbb C}A\cdot\det_{\mathbb C}\overline A =\det_{\mathbb C}A\cdot\overline{\det_{\mathbb C}A} =\left|\det_{\mathbb C}A\right|^2.$$ Since $R$ has real entries, the determinant polynomial gives the same real number whether computed over $\mathbb R$ or over $\mathbb C$, so $\det_{\mathbb R}L=\det_{\mathbb C}R$. [step 1.1, L1, algebra]

3.1 The displayed formula immediately makes $\det_{\mathbb R}L$ nonzero exactly when $\det_{\mathbb C}A$ is nonzero. [step 2.1] ∎
