---
id: thm-laplace-cofactor-expansion
kind: theorem
title: "Laplace expansion computes the determinant along every row and every column over a commutative ring"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-matrix-minors-cofactors-and-adjugate,
       def-determinant-of-a-square-matrix, thm-determinant-of-transpose,
       thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Interactive Linear Algebra"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $n\geq 1$, and $A=(a_{ij})\in M_n(R)$.
For every row $i$ and every column $j$,

$$\det(A)=\sum_{k=0}^{n-1}a_{ik}C_{ik}(A) \quad\text{and}\quad \det(A)=\sum_{k=0}^{n-1}a_{kj}C_{kj}(A).$$

## Facts & Assumptions

**Given:** $R,n,A,i,j$ as in the statement.

[F1] $C_{ik}(A)=(-1)^{i+k}\det(A^{(i,k)})$, with the determinant of the
$0\times0$ minor defined to be $1$
([[def-matrix-minors-cofactors-and-adjugate]]).

[L1] For $n\geq1$, the determinant is the Leibniz sum over permutations
([[def-determinant-of-a-square-matrix]]), and it is alternating,
column-multilinear, and normalized
([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L2] $\det(A^{\mathsf T})=\det(A)$
([[thm-determinant-of-transpose]]).

## Proof

**Proof technique:** direct.

1.1 If $n=1$, both displayed sums have one term, $a_{00}(-1)^0\cdot1=a_{00}=\det(A)$. [F1, L1, algebra]

1.2 Suppose $n>1$. In the Leibniz sum for $\det(A)$, group the terms according to the unique column $k$ whose chosen entry lies in row $i$. [L1]

2.1 After the factor $a_{ik}$ is removed, the remaining choices are exactly the permutations contributing to $\det(A^{(i,k)})$. Moving row $i$ and column $k$ to the last positions takes $(n-1-i)+(n-1-k)$ transpositions, whose parity is the parity of $i+k$; hence the sign contribution is $(-1)^{i+k}$. [step 1.2, algebra]

3.1 Summing the groups in step 2.1 gives $\det(A)=\sum_k a_{ik}(-1)^{i+k}\det(A^{(i,k)}) =\sum_k a_{ik}C_{ik}(A)$. [step 2.1, F1]

4.1 Apply the row formula from step 3.1 to $A^{\mathsf T}$. Its row-$j$ cofactors are the column-$j$ cofactors of $A$, and [L2] identifies the two determinants, giving the column formula. [step 3.1, L2, F1]

5.1 Steps 1.1, 3.1, and 4.1 prove both formulas for every $n\geq1$. [step 1.1, step 3.1, step 4.1] ∎
