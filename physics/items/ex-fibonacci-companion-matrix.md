---
id: ex-fibonacci-companion-matrix
kind: example
title: "The Fibonacci companion matrix advances $(F_n,F_{n+1})$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fibonacci-and-lucas-sequences, prop-companion-matrix-iterates-a-linear-recurrence, thm-characteristic-polynomial-of-a-recurrence-companion-matrix, def-companion-matrix-of-a-linear-recurrence]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slides 16-18"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Example

The companion matrix of the Fibonacci recurrence is

$$C=\begin{pmatrix}0&1\\1&1\end{pmatrix}.$$

It satisfies

$$C\binom{F_n}{F_{n+1}}=\binom{F_{n+1}}{F_{n+2}},\qquad \chi_C(t)=t^2-t-1,$$

and, for $n\ge1$,

$$C^n=\begin{pmatrix}F_{n-1}&F_n\\F_n&F_{n+1}\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The Fibonacci recurrence and its row-shift companion matrix.

[L1] The Fibonacci sequence has initial values $F_0=0,F_1=1$ and recurrence $F_{n+2}=F_{n+1}+F_n$ ([[def-fibonacci-and-lucas-sequences]]).

[L2] A recurrence companion matrix advances its state vector and its powers give all later states ([[prop-companion-matrix-iterates-a-linear-recurrence]]).

[L3] The characteristic polynomial of an order-$d$ recurrence companion matrix equals the recurrence characteristic polynomial ([[thm-characteristic-polynomial-of-a-recurrence-companion-matrix]]).

[L4] The row-shift companion matrix of $t^d+c_1t^{d-1}+\cdots+c_d$ has entries $C_{i,i+1}=1$ for $0\le i<d-1$ and $C_{d-1,j}=-c_{d-j}$ for $0\le j<d$, with all other entries zero ([[def-companion-matrix-of-a-linear-recurrence]]).

## Verification

**Proof technique:** induction.

1.1 By [L1] the recurrence is $F_{n+2}-F_{n+1}-F_n=0$, so $d=2$ and $c_1=c_2=-1$. Unfolding [L4] gives $C_{0,1}=1$, $C_{1,0}=-c_2=1$ and $C_{1,1}=-c_1=1$, with $C_{0,0}=0$, which is the displayed matrix $C$; [L2] then gives its state-vector identity. [given, L1, L2, L4]

1.2 At $n=1$, the proposed power formula reads $C=\left(\begin{smallmatrix}F_0&F_1\\F_1&F_2\end{smallmatrix}\right)$, which follows from [L1]. [base, L1]

1.3 Multiplying the proposed matrix for $C^n$ on the right by $C$ replaces each row $(F_{k-1},F_k)$ by $(F_k,F_{k-1}+F_k)=(F_k,F_{k+1})$ using [L1], so it gives the proposed matrix for $C^{n+1}$. [ih, L1, algebra]

2.1 By [L3], $\chi_C(t)=t^2-t-1$. [step 1.1, L3]

3.1 Steps 1.2 and 1.3 prove the power identity for every $n\ge1$. [step 1.2, step 1.3, discharge-induction] ∎
