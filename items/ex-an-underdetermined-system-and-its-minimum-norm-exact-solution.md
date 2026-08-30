---
id: ex-an-underdetermined-system-and-its-minimum-norm-exact-solution
kind: example
title: "An underdetermined consistent system has infinitely many exact solutions but a unique minimum-norm one"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-full-row-rank-pseudoinverse-formula,
       thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A=\begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}, \qquad b=\begin{bmatrix} 1 \\ 1 \end{bmatrix}. $$

Then the exact solutions are

$$ x(t)=\begin{bmatrix} 1-t \\ 1-t \\ t \end{bmatrix} \qquad(t\in\mathbb F), $$

and the minimum-norm one is $A^+b=(1/3,1/3,2/3)^T$.

## Facts & Assumptions

**Given:** The displayed matrix $A$ and right-hand side $b$.

[L1] If $A$ has full row rank, then $A^+=A^*(AA^*)^{-1}$ ([[prop-full-row-rank-pseudoinverse-formula]]).

[L2] $A^+b$ is the unique minimum-norm least-squares solution ([[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]).

## Verification

**Proof technique:** computation.

1.1 Solving $Ax=b$ gives the one-parameter family $x(t)=(1-t,1-t,t)^T$. Thus the system is consistent and has infinitely many exact solutions. [algebra]
1.2 Here $$ AA^*= \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \qquad (AA^*)^{-1}=\frac13 \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}, $$ so [L1] gives $$ A^+b=A^*(AA^*)^{-1}b= \begin{bmatrix} \tfrac13 \\ \tfrac13 \\ \tfrac23 \end{bmatrix}. $$ [L1, algebra]
2.1 The vector of step 1.2 equals $x(2/3)$ from step 1.1, so it is an exact solution. By [L2], it is the unique exact solution of minimum Euclidean norm. [L2, step 1.1, step 1.2] ∎