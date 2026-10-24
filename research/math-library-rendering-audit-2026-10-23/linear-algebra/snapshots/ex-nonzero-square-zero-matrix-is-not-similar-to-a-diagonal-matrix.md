---
id: ex-nonzero-square-zero-matrix-is-not-similar-to-a-diagonal-matrix
kind: example
title: 'A nonzero square-zero matrix is not similar to any diagonal matrix'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-matrix-unit-multiplication, def-similar-matrices, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For every field $F$, the matrix

$$N=E_{01}=\begin{pmatrix}0&1\\0&0\end{pmatrix}\in M_2(F)$$

is nonzero and satisfies $N^2=0$, but it is not similar to any diagonal matrix.

## Facts & Assumptions

**Given:** A field $F$ and the displayed matrix $N$.

[L1] Matrix units satisfy $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$ ([[lem-matrix-unit-multiplication]]).

[L2] Similarity has the form $N=P^{-1}DP$ with $P$ invertible, and every nonzero scalar in a field has an inverse ([[def-similar-matrices]], [[def-field]]).

## Verification

**Proof technique:** contradiction.

1.1 By [L1], $N^2=E_{01}E_{01}=0$, while the $(0,1)$-entry of $N$ is $1$, so $N\ne0$. Suppose, for contradiction, that $N=P^{-1}DP$ as in [L2], with $D$ diagonal. Then $0=N^2=P^{-1}D^2P$, so $D^2=0$. [assume-contra, L1, L2]

2.1 Every diagonal entry $d$ of $D$ satisfies $d^2=0$. If $d\ne0$, the inverse from [L2] gives $d=0$, a contradiction; hence $D=0$, and then $N=P^{-1}0P=0$, contradicting step 1.1. Thus $N$ is not similar to a diagonal matrix. [step 1.1, L1, L2, discharge-contradiction] ∎
