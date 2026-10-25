---
id: ex-a-two-tree-level-product-and-dense-matrix
kind: example
title: "A two-tree level product and dense matrix"
status: published
origin: pipeline
deps: [def-halpern-lauchli-finitistic-trees-density-and-matrices]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), §1 definitions, pp. 360–361; explicit binary-tree instance"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

Let $T_1=T_2=2^{<\omega}$, ordered by extension.  The level product, the full
product, and a dense matrix can be seen explicitly and are not the same notion.

## Facts & Assumptions

**Given:** The two full binary trees in the example.

[F1] The local definition distinguishes common-level products, full products, and coordinatewise $(h,k)$-matrices. [[def-halpern-lauchli-finitistic-trees-density-and-matrices]]

## Verification

1.1 Since $T_i(2)=\{00,01,10,11\}$, its level-2 product consists of the sixteen pairs $\{(00,00),(00,01),(00,10),(00,11),(01,00),(01,01),(01,10),(01,11),(10,00),(10,01),(10,10),(10,11),(11,00),(11,01),(11,10),(11,11)\}$.  Every pair has common coordinate height $2$. [F1, given]

1.2 For $h=1,k=2$, use roots $0\in T_1(1)$ and $1\in T_2(1)$ and put $A_1=\{000,0010,010,011\}$ and $A_2=\{100,101,110,111\}$.  The height-3 frontier above $0$ is $\{000,001,010,011\}$; the listed members of $A_1$ respectively dominate those four nodes.  The height-3 frontier above $1$ is exactly $A_2$.  Thus both factors are $(1,2)$-dense, and $A_1\times A_2$ is a $(1,2)$-matrix. [F1, construct]

2.1 The pair $(0,101)$ belongs to the full product $T_1\times T_2$, but its coordinate heights are $1$ and $3$, so it belongs to no common-level product. [F1, step 1.1]

3.1 This matrix is a subset of the full product but not of the level product: it contains $(0010,100)$, whose heights are $4$ and $3$.  Hence the level product imposes equal heights, the full product imposes none, and being a matrix imposes coordinatewise domination rather than equal height. [F1, step 1.2, step 2.1] ∎
