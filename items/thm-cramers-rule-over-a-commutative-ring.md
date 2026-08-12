---
id: thm-cramers-rule-over-a-commutative-ring
kind: theorem
title: "Cramer's rule over a commutative ring: every solution satisfies $\\det(A)x_j=\\det(A_j(b))$, and a unit determinant gives the unique quotient formula"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-laplace-cofactor-expansion,
       thm-leibniz-determinant-is-alternating-multilinear-and-normalized,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       cor-inverse-matrix-by-adjugate,
       def-ring-matrix-product-identity-and-transpose,
       thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: true
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

Let $R$ be a commutative ring, $n\geq1$, $A\in M_n(R)$, and
$b\in R^n$. Let $A_j(b)$ be obtained from $A$ by replacing column $j$ by
$b$. Every solution $x$ of $Ax=b$ satisfies

$$\det(A)x_j=\det(A_j(b))\qquad(0\leq j<n).$$

If $\det(A)$ is a unit, the solution is unique and

$$x_j=\det(A)^{-1}\det(A_j(b)).$$

## Facts & Assumptions

**Given:** $R,n,A,b,j$ as in the statement, and a solution $x$ when the first
claim is used.

[L1] The determinant is alternating and multilinear in columns
([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L2] Laplace expansion along a column computes the determinant as the sum of
its entries times their cofactors ([[thm-laplace-cofactor-expansion]]).

[L3] If $\det(A)$ is a unit, then $A$ is invertible
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]) and
$A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$
([[cor-inverse-matrix-by-adjugate]]).

[F1] Matrix multiplication obeys the entry formula
([[def-ring-matrix-product-identity-and-transpose]]).

[L4] Matrix multiplication is associative and distributive
([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $Ax=b$, then $b=\sum_k x_kA_k$, where $A_k$ is column $k$ of $A$. [F1, given]

1.2 Now suppose $u:=\det(A)$ is a unit. By [L3], $A$ is invertible, so $x=A^{-1}b=u^{-1}\operatorname{adj}(A)b$ is the unique solution. [L3, L4]

2.1 Replace column $j$ by the sum from step 1.1 and use column multilinearity. Every term with $k\neq j$ has two equal columns and vanishes; the term $k=j$ is $x_j\det(A)$. Thus $\det(A_j(b))=x_j\det(A)$. [step 1.1, L1]

2.2 Its $j$th coordinate is $u^{-1}\sum_i C_{ij}(A)b_i$. Deleting column $j$ removes the replaced column, so $C_{ij}(A_j(b))=C_{ij}(A)$; expanding $A_j(b)$ along column $j$ therefore identifies the sum as $\det(A_j(b))$. [step 1.2, F1, L2]

3.1 Step 2.1 proves the unconditional cross-multiplied identity, and step 2.2 proves the quotient formula and uniqueness under the unit hypothesis. [step 2.1, step 2.2] ∎
