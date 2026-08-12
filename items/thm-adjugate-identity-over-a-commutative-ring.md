---
id: thm-adjugate-identity-over-a-commutative-ring
kind: theorem
title: "For every positive-sized square matrix over a commutative ring, $A\\operatorname{adj}(A)=\\operatorname{adj}(A)A=\\det(A)I$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-laplace-cofactor-expansion,
       cor-determinant-vanishes-with-a-zero-or-repeated-column,
       cor-determinant-is-alternating-multilinear-in-the-rows,
       def-ring-matrix-product-identity-and-transpose,
       thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra, Proposition 7.2"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

For a commutative ring $R$, $n\geq1$, and $A\in M_n(R)$,

$$A\operatorname{adj}(A) =\operatorname{adj}(A)A =\det(A)I_n.$$

## Facts & Assumptions

**Given:** $R,n,A$ as in the statement.

[L1] Laplace expansion along row $i$ is
$\det(A)=\sum_k a_{ik}C_{ik}(A)$, and expansion along column $j$ is
$\det(A)=\sum_k a_{kj}C_{kj}(A)$
([[thm-laplace-cofactor-expansion]]).

[L2] The determinant is alternating and multilinear in rows
([[cor-determinant-is-alternating-multilinear-in-the-rows]]).

[L3] A matrix with two equal columns has determinant $0$
([[cor-determinant-vanishes-with-a-zero-or-repeated-column]]).

[F1] Matrix multiplication is given by
$(BC)_{ij}=\sum_k b_{ik}c_{kj}$
([[def-ring-matrix-product-identity-and-transpose]]).

[L4] Matrix multiplication is associative and distributive, and $I_n$ is its
identity ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 The $(i,j)$ entry of $A\operatorname{adj}(A)$ is $\sum_k a_{ik}C_{jk}(A)$. If $i=j$, [L1] makes this $\det(A)$. [F1, L1]

1.2 If $i\neq j$, replace row $j$ of $A$ by row $i$. Expanding the resulting determinant along row $j$ gives $\sum_k a_{ik}C_{jk}(A)$, because the minors used in that row do not involve row $j$. The matrix has two equal rows, so its determinant is $0$ by alternation. [L1, L2]

1.3 The $(i,j)$ entry of $\operatorname{adj}(A)A$ is $\sum_k C_{ki}(A)a_{kj}$. It equals $\det(A)$ when $i=j$ by column expansion. When $i\neq j$, it is the column-$i$ expansion of the matrix obtained by replacing column $i$ by column $j$, whose determinant is $0$ because it has two equal columns. [F1, L1, L3]

2.1 Thus $A\operatorname{adj}(A)=\det(A)I_n$. [step 1.1, step 1.2, L4]

2.2 Hence $\operatorname{adj}(A)A=\det(A)I_n$. [step 1.3, L4]

3.1 Combining steps 2.1 and 2.2 proves both identities. [step 2.1, step 2.2] ∎
