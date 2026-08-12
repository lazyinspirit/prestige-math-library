---
id: ex-determinant-in-two-ordered-bases
kind: example
title: "One operator has matrices diag(2,3) and [[2,0],[1,3]] in two bases, both with determinant 6"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-operator-determinant-is-basis-independent,
       thm-two-sided-change-of-basis-formula,
       def-determinant-of-a-square-matrix, thm-reals-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $T(x,y)=(2x,3y)$ on $\mathbb R^2$. In the standard ordered basis
$\mathcal E$, its matrix is $\operatorname{diag}(2,3)$. In the ordered basis
$\mathcal B=((1,1),(0,1))$, its matrix is
$\begin{pmatrix}2&0\\1&3\end{pmatrix}$. Both determinants are $6$.

## Facts & Assumptions

**Given:** $T,\mathcal E,\mathcal B$ as in the example.

[F1] $\mathbb R$ is a field ([[thm-reals-field]]).

[L1] If $P=P_{\mathcal E\leftarrow\mathcal B}$, then
$[T]_{\mathcal B}=P^{-1}[T]_{\mathcal E}P$
([[thm-two-sided-change-of-basis-formula]]).

[F2] The $2\times2$ determinant is the two-term Leibniz sum
([[def-determinant-of-a-square-matrix]]).

[L2] The operator determinant is independent of the ordered basis
([[thm-operator-determinant-is-basis-independent]]).

## Verification

**Proof technique:** direct.

1.1 Direct evaluation gives $[T]_{\mathcal E}=A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ and $P=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, whose inverse is $P^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$. [F1, given, algebra]
2.1 Matrix multiplication in [L1] gives $$ [T]_{\mathcal B} =P^{-1}AP =\begin{pmatrix}2&0\\1&3\end{pmatrix}. $$ [step 1.1, L1, algebra]
3.1 By the two-term determinant formula, $\det(A)=2\cdot3=6$ and $\det([T]_{\mathcal B})=2\cdot3-0\cdot1=6$. [step 2.1, F2, algebra]
4.1 The explicit computations in steps 3.1 and 2.1 illustrate the equality asserted abstractly by [L2]. [step 3.1, step 2.1, L2] ∎
