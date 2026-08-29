---
id: ex-exterior-powers-of-a-diagonal-operator
kind: example
title: "All exterior powers of a diagonal operator are diagonal"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-exterior-powers-are-functorial, thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Example

Let $T:\mathbb R^n\to\mathbb R^n$ be diagonal with diagonal entries $\lambda_1,\ldots,\lambda_n$. Then for every $0\le k\le n$, the map $\Lambda^kT$ is diagonal in the increasing wedge basis: for a $k$-subset $I=\{i_1<\cdots<i_k\}$,

$$\Lambda^kT(e_I)=\lambda_I\,e_I,\qquad \lambda_I:=\lambda_{i_1}\cdots\lambda_{i_k}.$$

For instance, if $T=\operatorname{diag}(2,3,5)$ on $\mathbb R^3$, then $\Lambda^2T$ is $\operatorname{diag}(6,10,15)$ in the basis $(e_1\wedge e_2,e_1\wedge e_3,e_2\wedge e_3)$.

## Facts & Assumptions

**Given:** A diagonal operator $T$ with diagonal entries $\lambda_1,\ldots,\lambda_n$ and a $k$-subset $I$.

[L1] Exterior powers preserve the induced maps on the wedge basis ([[thm-exterior-powers-are-functorial]]).

[L2] In the wedge bases, the matrix of $\Lambda^kT$ has entries $\det A_{J,I}$, the signed $k$-minors of the matrix $A$ of $T$ ([[thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]]).

## Verification

**Proof technique:** direct.


1.1 The matrix $A$ of $T$ in the standard basis is diagonal. [given]

2.1 By [L2], the entry of $\Lambda^kT$ at $(J,I)$ is the determinant of the $k\times k$ submatrix with rows $J$ and columns $I$; for the diagonal matrix of step 1.1 this is $0$ when $J\ne I$ and $\lambda_I$ when $J=I$. [L2, step 1.1, algebra]

3.1 By [L1], the values of $\Lambda^kT$ on the wedge basis $e_I$ determine the whole map, so $\Lambda^kT(e_I)=\lambda_Ie_I$ and the map is diagonal with the displayed entries; the $n=3$ case reads $\operatorname{diag}(6,10,15)$ on $\Lambda^2\mathbb R^3$. [L1, step 2.1]

4.1 Steps 2.1 and 3.1 verify the diagonal form of every exterior power and the concrete example. [step 2.1, step 3.1] ∎
