---
id: lem-implicit-q-uniqueness-for-unreduced-hessenberg
kind: lemma
title: "An unreduced Hessenberg similarity is determined up to column phases by its first unitary column"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-linear-isometry-and-orthogonal-or-unitary-operator
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: The implicit Q theorem"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $n\ge1$, let $H\in\mathbb C^{n\times n}$ be upper Hessenberg with every first-subdiagonal entry nonzero. Suppose $Q,V$ are unitary, $Qe_1=Ve_1$, and both $Q^*HQ$ and $V^*HV$ are unreduced upper Hessenberg. Then $V^*Q$ is diagonal unitary with first diagonal entry $1$. Thus the two unitary transformations differ only by column phases. Over $\mathbb R$ the phases are signs.

## Facts & Assumptions

**Given:** $H,Q,V$ as in the statement.

[F1] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]: upper Hessenberg means entries below the first subdiagonal vanish. The nonzero subdiagonal entries are the explicit unreduced hypothesis in the statement.

[F2] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: $Q$ and $V$ are unitary, so $W=V^*Q$ is unitary.

## Proof

1.1 Put $G=V^*HV$, $F=Q^*HQ$, and $W=V^*Q$. Then $GW=WF$ and $We_1=e_1$ by direct multiplication and $Qe_1=Ve_1$. [given, F2, algebra]

2.1 Write $w_j$ for column $j$ of $W$. We prove by induction that $w_j$ is supported in its first $j$ coordinates. This holds for $j=1$ by step 1.1. If it holds through $j$, the $j$th column of $GW=WF$ gives $Gw_j=\sum_{i=1}^{j+1} f_{ij}w_i$. The vector $Gw_j$ is supported in rows $1,\ldots,j+1$ because $G$ is upper Hessenberg, and $w_1,\ldots,w_j$ are supported in their first $j$ coordinates. Since $f_{j+1,j}\ne0$ by unreducedness of $F$, solving this equality for $w_{j+1}$ shows it is supported in rows $1,\ldots,j+1$. [F1, step 1.1, algebra]

3.1 Step 2.1 makes $W$ upper triangular. An upper-triangular unitary matrix is diagonal: its first column has only one nonzero entry of modulus one, orthogonality makes the rest of its first row zero, and induction applies to the trailing principal block. Since $We_1=e_1$, the first diagonal entry is $1$. [F2, step 2.1, algebra] ∎
