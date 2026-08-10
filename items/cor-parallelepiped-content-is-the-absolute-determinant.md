---
id: cor-parallelepiped-content-is-the-absolute-determinant
kind: corollary
title: "The Jordan content of the parallelepiped spanned by the columns of a square real matrix is the absolute value of its determinant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-linear-images-scale-jordan-content-by-absolute-determinant, def-multidimensional-rectangle-and-volume, lem-euclidean-linear-maps-have-matrices-and-are-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 5.5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. For column vectors $v_1,\ldots,v_n\in\mathbb R^n$, let $A=[v_1\ \cdots\ v_n]$ and
$$P(v_1,\ldots,v_n):=\left\{\sum_{j=1}^n t_jv_j:0\le t_j\le1\right\}.$$
Then $P(v_1,\ldots,v_n)$ is Jordan measurable and
$$\operatorname{cont}(P(v_1,\ldots,v_n))=|\det A|.$$
This includes the singular case, when the content is zero.

## Facts & Assumptions

**Given:** The spanning vectors, their column matrix $A$, and the unit cube $Q=[0,1]^n$.

[L1] A linear map scales the content of every bounded Jordan set by the absolute determinant of its matrix ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L2] The unit cube is a rectangle of volume $1$ ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 The matrix map $T(x)=Ax$ sends $Q$ exactly onto $P(v_1,\ldots,v_n)$. [L1, given]

2.1 Apply [L1] to $Q$ and use [L2] to obtain the stated content formula. [L1, L2, step 1.1]
$$\operatorname{cont}(P)=|\det A|\operatorname{cont}(Q)=|\det A|.$$
If the columns are dependent, [L1] simultaneously supplies Jordan measurability and the zero-content conclusion. ∎
