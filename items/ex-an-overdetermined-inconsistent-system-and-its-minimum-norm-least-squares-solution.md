---
id: ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution
kind: example
title: "An overdetermined inconsistent system has a unique minimum-norm least-squares solution given by $A^+b$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-reduced-qr-formulas-for-full-rank-pseudoinverses,
       thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Take

$$ A=\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{bmatrix}, \qquad b=\begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}. $$

Then $b\notin\operatorname{im}A$, the least-squares problem is inconsistent,
and

$$ A^+b=\begin{bmatrix} \tfrac13 \\ \tfrac13 \end{bmatrix}. $$

## Facts & Assumptions

**Given:** The matrix $A$ and right-hand side $b$ in the statement.

[L1] Reduced QR gives the pseudoinverse of a full-column-rank matrix without forming normal equations ([[prop-reduced-qr-formulas-for-full-rank-pseudoinverses]]).

[L2] $A^+b$ is the unique least-squares solution of minimum norm ([[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]).

## Verification

**Proof technique:** computation.

1.1 The columns of $A$ are independent, so $A$ has full column rank. Directly, $$ A^*A= \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}, \qquad (A^*A)^{-1}=\frac13 \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}. $$ Hence $A^+b=(A^*A)^{-1}A^*b=(1/3,1/3)^T$. [L1, algebra]

2.1 The residual is $$ r=b-AA^+b= \begin{bmatrix} \tfrac23 \\ \tfrac23 \\ -\tfrac23 \end{bmatrix}, $$ so $r\neq0$ and the system is inconsistent. [step 1.1, algebra]

3.1 By [L2], the vector from step 1.1 is nevertheless the unique least-squares solution of minimum Euclidean norm. [L2, step 1.1, step 2.1] ∎