---
id: lem-determinant-independence-criterion
kind: lemma
title: "Determinant criterion: if the matrix $\\bigl(\\langle v_i,w_j\\rangle\\bigr)_{i,j}$ is invertible then both $v_1,\\dots,v_m$ and $w_1,\\dots,w_m$ are linearly independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-diagonal-independence-criterion, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, cor-square-matrices-form-a-ring, thm-invertible-matrix-theorem, def-linear-independence, def-bilinear-symmetric-skew-and-alternating-forms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.1.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $V$ be an $F$-vector space, and let
$\langle\cdot,\cdot\rangle:V\times V\to F$ be a bilinear form. If the matrix

$$M=\bigl(\langle v_i,w_j\rangle\bigr)_{1\le i,j\le m}$$

is invertible, then both lists $v_1,\dots,v_m$ and $w_1,\dots,w_m$ are linearly
independent.

## Facts & Assumptions

**Given:** the vectors $v_1,\dots,v_m,w_1,\dots,w_m$ and the matrix $M$ above.

[F1] Square matrices form a ring, so matrix multiplication is associative and has identity $I$ ([[cor-square-matrices-form-a-ring]]). An invertible matrix $M$ has a two-sided inverse $M^{-1}$ with $MM^{-1}=M^{-1}M=I$ ([[def-invertible-matrix-and-general-linear-group]]).

[F2] The form is linear in each variable separately ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sum_{i=1}^{m}c_iv_i=0$. Pairing with each $w_j$ and using [F2] gives $\sum_{i=1}^{m}c_i\langle v_i,w_j\rangle=0$ for every $j$, which is the matrix equation $c^{\mathsf T}M=0$. [F2, assume-contra]

2.1 Since $M$ is invertible, multiply on the right by $M^{-1}$ and use [F1] to obtain $c^{\mathsf T}=0$. So $c_1=\cdots=c_m=0$, and the vectors $v_1,\dots,v_m$ are linearly independent. [F1, step 1.1, discharge-contradiction]

3.1 If $\sum_jd_jw_j=0$, pairing with each $v_i$ and using linearity in the second variable gives $Md=0$. Multiplying on the left by $M^{-1}$ and using [F1] gives $d=0$. Thus $w_1,\dots,w_m$ are linearly independent as well. [F1, F2] ∎

## Remarks

- This is the matrix version of the diagonal and triangular criteria: there the matrix is visibly diagonal or triangular, while here only invertibility is assumed.
