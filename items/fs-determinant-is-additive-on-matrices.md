---
id: fs-determinant-is-additive-on-matrices
kind: false-statement
title: 'FALSE: $\det(A+B)=\det(A)+\det(B)$ for all same-sized square matrices'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-matrix-product-identity-and-transpose, thm-leibniz-determinant-is-alternating-multilinear-and-normalized, ex-two-by-two-determinant-formula, thm-reals-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Purdue University, 3.1 + 3.2 Determinants, Properties of Determinants"
      url: "https://www.math.purdue.edu/~chenjk/MA265Su18/Lesson11-acc.html"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

The following claim is false: for all same-sized square real matrices,
$$\det(A+B)=\det(A)+\det(B).$$

## Facts & Assumptions

**Given:** Over $\mathbb R$, take $A=B=I_2$.

[L1] Matrix addition is entrywise and $I_2$ has diagonal entries $1$ ([[def-ring-matrix-product-identity-and-transpose]]).

[L2] Determinant is multilinear in one selected row or column while all other rows or columns are fixed ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L3] For a $2\times2$ matrix, determinant is $ad-bc$ ([[ex-two-by-two-determinant-formula]]).

[L4] The real numbers form a field ([[thm-reals-field]]).

## Refutation

**Proof technique:** direct.

1.1 Here $A+B=2I_2$, so [L3] gives $\det(A+B)=4$, whereas $\det(A)+\det(B)=1+1=2$. Since $4\ne2$ in $\mathbb R$, the claim fails. [L1, L3, L4, algebra]

2.1 The property in [L2] does not imply whole-matrix additivity: changing both rows at once produces cross terms. It permits addition only in one selected row or column while all the others remain fixed. [step 1.1, L2] ∎
