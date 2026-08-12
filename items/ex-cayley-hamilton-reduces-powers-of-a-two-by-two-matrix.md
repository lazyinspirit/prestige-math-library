---
id: ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix
kind: example
title: 'Cayley-Hamilton reduces every power of $\begin{pmatrix}1&1\\1&0\end{pmatrix}$ to a linear combination of $A$ and $I$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cayley-hamilton]
aliases: []
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$, and define $F_0=0$, $F_1=1$, and $F_{m+1}=F_m+F_{m-1}$ for $m\ge1$. Then, over any field and for every $m\ge1$,

$$A^m=F_mA+F_{m-1}I_2,$$

with the integer coefficients interpreted in the field.

## Facts & Assumptions

**Given:** The displayed matrix and recurrence.

[L1] Cayley-Hamilton states that a matrix satisfies its characteristic polynomial ([[thm-cayley-hamilton]]).

## Verification

**Proof technique:** induction on $m$.

1.1 Direct calculation gives $\chi_A(x)=x^2-x-1$ and $A^2=\begin{pmatrix}2&1\\1&1\end{pmatrix}=A+I_2$, agreeing with [L1]. For $m=1$, $A=F_1A+F_0I_2$; for $m=2$, $A^2=F_2A+F_1I_2$. [base, L1, algebra]

2.1 Assume $m\ge2$ and $A^m=F_mA+F_{m-1}I_2$. Multiplication by $A$ and $A^2=A+I_2$ give $A^{m+1}=F_mA^2+F_{m-1}A=(F_m+F_{m-1})A+F_mI_2=F_{m+1}A+F_mI_2$. [ih, step 1.1, algebra]

3.1 The base cases and recurrence prove the formula for every $m\ge1$, so every positive power lies in $\operatorname{span}\{A,I_2\}$. [step 1.1, step 2.1, discharge-induction] ∎
