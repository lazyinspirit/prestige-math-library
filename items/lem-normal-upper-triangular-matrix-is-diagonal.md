---
id: lem-normal-upper-triangular-matrix-is-diagonal
kind: lemma
title: "A normal upper-triangular matrix is diagonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Statement

Let $A=(a_{ij})\in M_n(\mathbb C)$. If $A$ is upper triangular and normal, then
$A$ is diagonal.

## Facts & Assumptions

**Given:** An upper-triangular matrix $A=(a_{ij})\in M_n(\mathbb C)$ that is normal.

[L1] A matrix is normal exactly when it commutes with its conjugate transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

## Proof

**Proof technique:** direct.

1.1 Because $A$ is upper triangular, the $n$-th diagonal entry of $AA^*$ is $\sum_{j\ge n}|a_{nj}|^2=|a_{nn}|^2$, while the $n$-th diagonal entry of $A^*A$ is $\sum_{i\le n}|a_{in}|^2$; [L1] makes these equal, so $a_{in}=0$ for every $i<n$. [L1, algebra]

2.1 More generally, if every entry to the right of $a_{kk}$ in row $k$ is already zero, then the $k$-th diagonal entries of $AA^*$ and $A^*A$ are $|a_{kk}|^2$ and $\sum_{i\le k}|a_{ik}|^2$, so [L1] forces $a_{ik}=0$ for every $i<k$. [L1, step 1.1, algebra]

3.1 Starting from $k=n$ in step 1.1 and descending through $k=n-1,\dots,1$, step 2.1 shows that every entry above the diagonal is zero. Thus $A$ is diagonal. [step 1.1, step 2.1] ∎
