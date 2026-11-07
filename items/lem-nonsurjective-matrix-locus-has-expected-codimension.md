---
id: lem-nonsurjective-matrix-locus-has-expected-codimension
kind: lemma
title: "Codimension of the nonsurjective matrix locus"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-dimension-affine-and-projective-space
  - lem-dimension-finite-union-components
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stated algebraic-dimension suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§3.15, the codimension of the rank-deficient cone; the matrix-chart calculation is reconstructed here."
verification: {}
---

## Statement

Assume AC, let $k$ be an algebraically closed field, and let $m\ge t\ge1$. In the affine space of $t\times m$ matrices, the closed locus of matrices of rank less than $t$ has codimension $m-t+1$. The conclusion is independent of the characteristic of $k$.

## Facts & Assumptions

**Given:** The algebraically closed field and matrix sizes in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Affine $N$-space over $k$ has dimension $N$. [[cor-dimension-affine-and-projective-space]]

[F2] The dimension of a finite union of closed subsets is the maximum of their dimensions. [[lem-dimension-finite-union-components]]

## Proof

**Proof technique:** calculate the charts of every rank stratum.

1.1 For $0\le s\le t-1$, consider matrices of rank exactly $s$. The zero-rank stratum is one point. For $s>0$, choose one nonzero $s\times s$ minor and permute rows and columns to put it in the upper-left block $A$. Write the matrix in blocks $\begin{pmatrix}A&B\\C&D\end{pmatrix}$. On this chart $A$ is invertible, and elementary block elimination shows that the total rank equals $s$ precisely when $D=CA^{-1}B$. Hence the chart is an open subset of affine space with freely chosen $A,B,C$, of dimension $s^2+s(m-s)+(t-s)s=s(m+t-s)$ by [F1]. [A1, F1, given, choose, construct, algebra]

2.1 The rank-exactly-$s$ stratum is covered by finitely many such minor charts, so its closure has dimension $s(m+t-s)$; for $s=0$ the same formula is zero. The rank-less-than-$t$ locus is the finite union of these closures, since the vanishing of all $t\times t$ minors is closed. By [F2], its dimension is the maximum of $s(m+t-s)$ for $0\le s\le t-1$. The difference between successive values is $m+t-2s-1>0$ in this range, so the maximum occurs at $s=t-1$. [F2, step 1.1, algebra]

3.1 The ambient matrix space has dimension $mt$ by [F1], whereas the maximal rank-deficient dimension is $(t-1)(m+1)$. Their difference is $mt-(t-1)(m+1)=m-t+1$. The case $t=1$, where the rank-deficient locus is the zero matrix, is included. [F1, step 2.1, algebra] ∎
