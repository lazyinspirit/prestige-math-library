---
id: ex-quarter-turn-matrix-on-the-real-plane
kind: example
title: 'The quarter-turn $(x,y)\mapsto(-y,x)$ on $\mathbb R^2$ has matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and square $-I_2$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-reals-field, def-coordinate-column-and-matrix-of-a-linear-map,
       thm-matrix-of-a-composite-is-the-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The linear map $Q:\mathbb R^2\to\mathbb R^2$ given by
$Q(x,y)=(-y,x)$ is a quarter-turn. In the standard basis,

$$[Q]=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad [Q]^2=-I_2.$$

Thus $Q^2(x,y)=(-x,-y)$ is the half-turn.

## Facts & Assumptions

**Given:** The real vector space $\mathbb R^2$ with its standard ordered basis and the displayed map $Q$.

[L1] The columns of a linear map's matrix are the coordinate columns of its basis-vector images ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L2] The matrix of a composite is the product of the matrices ([[thm-matrix-of-a-composite-is-the-product]]).

## Verification

**Proof technique:** direct.

1.1 Since $Q(1,0)=(0,1)$ and $Q(0,1)=(-1,0)$, [L1] gives $[Q]=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Multiplying this matrix by itself gives $\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I_2$. [given, L1]

2.1 By [L2], the matrix square is $[Q^2]$, and direct substitution gives $Q^2(x,y)=Q(-y,x)=(-x,-y)$, the half-turn. [step 1.1, L1, L2] ∎
