---
id: ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix
kind: example
title: "A concrete second exterior-power matrix matches the signed $2\\times2$ minors"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Example

Let $T:\mathbb R^3\to\mathbb R^3$ have matrix

$$A=\begin{pmatrix}1&2&0\\0&1&3\\2&0&1\end{pmatrix}.$$

In the wedge basis $(e_1\wedge e_2,\ e_1\wedge e_3,\ e_2\wedge e_3)$ of $\Lambda^2\mathbb R^3$, the matrix of $\Lambda^2T$ is

$$[\Lambda^2T]=\begin{pmatrix}1&3&6\\-4&1&6\\-2&-6&1\end{pmatrix},$$

whose entry in row $J$ and column $I$ is exactly the signed $2\times2$ minor of $A$ with rows $J$ and columns $I$.

## Facts & Assumptions

**Given:** The operator $T$ with the displayed matrix $A$ and the wedge basis of $\Lambda^2\mathbb R^3$.

[L1] In the wedge bases, the matrix of $\Lambda^kT$ has entries $\det A_{J,I}$, where $A_{J,I}$ is the $k\times k$ submatrix with rows $J$ and columns $I$ ([[thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]]).

## Verification

**Proof technique:** direct.


1.1 Direct computation of the images of the three basis wedges gives $\Lambda^2T(e_1\wedge e_2)=(e_1+2e_3)\wedge(2e_1+e_2)=e_1\wedge e_2-4e_1\wedge e_3-2e_2\wedge e_3$, $\Lambda^2T(e_1\wedge e_3)=(e_1+2e_3)\wedge(3e_2+e_3)=3e_1\wedge e_2+e_1\wedge e_3-6e_2\wedge e_3$, and $\Lambda^2T(e_2\wedge e_3)=(2e_1+e_2)\wedge(3e_2+e_3)=6e_1\wedge e_2+2e_1\wedge e_3+e_2\wedge e_3$, so the columns of the matrix are $(1,-4,-2)$, $(3,1,-6)$, $(6,2,1)$. [algebra]

1.2 By [L1], the expected entries are the nine $2\times2$ minors: $\det A_{12,12}=1$, $\det A_{13,12}=-4$, $\det A_{23,12}=-2$, $\det A_{12,13}=3$, $\det A_{13,13}=1$, $\det A_{23,13}=-6$, $\det A_{12,23}=6$, $\det A_{13,23}=2$, $\det A_{23,23}=1$. [L1, algebra]

2.1 The nine coordinates of step 1.1 coincide entry by entry with the nine minors of step 1.2, so the displayed matrix equals the signed minor matrix. [step 1.1, step 1.2] ∎
