---
id: lem-determinant-rank-one-update-over-a-commutative-ring
kind: lemma
title: "For A in M_n(R) and columns u,v over a commutative ring, det(A+uv^T)=det(A)+v^T adj(A)u"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-matrix-minors-cofactors-and-adjugate,
       def-ring-matrix-product-identity-and-transpose,
       thm-laplace-cofactor-expansion,
       thm-leibniz-determinant-is-alternating-multilinear-and-normalized,
       thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jaroslav Vrabel, A note on the matrix determinant lemma"
      url: "https://arxiv.org/abs/1608.03207"
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $n\geq1$, $A\in M_n(R)$, and
$u,v\in M_{n\times1}(R)$. Then

$$\det(A+uv^{\mathsf T}) =\det(A)+v^{\mathsf T}\operatorname{adj}(A)u.$$

## Facts & Assumptions

**Given:** $R,n,A,u,v$ as in the statement.

[L1] The determinant is alternating and multilinear in its columns
([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L2] Expansion along column $j$ is
$\det(B)=\sum_i b_{ij}C_{ij}(B)$
([[thm-laplace-cofactor-expansion]]).

[F1] $\operatorname{adj}(A)_{ji}=C_{ij}(A)$
([[def-matrix-minors-cofactors-and-adjugate]]).

[F2] Matrix products and transposes are given by their entry formulas
([[def-ring-matrix-product-identity-and-transpose]]).

[L3] Matrix addition and multiplication obey the usual distributive laws
([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 Column $j$ of $A+uv^{\mathsf T}$ is $A_j+v_j u$. Expanding the determinant by column multilinearity gives one term for each subset of columns chosen from $uv^{\mathsf T}$. [F2, L1, L3]
2.1 The empty subset contributes $\det(A)$. Every term choosing at least two columns from $uv^{\mathsf T}$ vanishes, since those chosen columns are scalar multiples of the same column $u$ and alternation makes the determinant zero. [step 1.1, L1]
2.2 For the singleton subset $\{j\}$, pull out $v_j$ and expand the determinant of $A$ with column $j$ replaced by $u$ along that column. Deleting that replaced column leaves exactly the same minors as deleting column $j$ from $A$, so its contribution is $v_j\sum_i u_iC_{ij}(A)$. [step 1.1, L1, L2]
3.1 Summing step 2.2 over $j$ and using [F1] gives $\sum_{i,j}v_jC_{ij}(A)u_i =v^{\mathsf T}\operatorname{adj}(A)u$. Together with step 2.1, this is the claimed identity. [step 2.1, step 2.2, F1, L3] ∎
