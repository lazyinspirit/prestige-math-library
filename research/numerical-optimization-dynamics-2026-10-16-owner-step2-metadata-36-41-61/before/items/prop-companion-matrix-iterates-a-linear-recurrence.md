---
id: prop-companion-matrix-iterates-a-linear-recurrence
kind: proposition
title: "The companion matrix advances the recurrence state vector by one step"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-companion-matrix-of-a-linear-recurrence, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws]
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
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slide 17"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Let $a$ satisfy an order-$d$ recurrence from zero over a field, let $C$ be its row-shift companion matrix, and put $v_n=(a_n,\ldots,a_{n+d-1})^{\mathsf T}$. Then

$$v_{n+1}=Cv_n\qquad\text{and}\qquad v_n=C^nv_0$$

for every $n\ge0$.

## Facts & Assumptions

**Given:** An order-$d$ recurrence sequence $a$, its state vectors $v_n$, and its companion matrix $C$.

[L1] The companion matrix has shift rows and final row $(-c_d,-c_{d-1},\ldots,-c_1)$ ([[def-companion-matrix-of-a-linear-recurrence]]).

[L2] Matrix multiplication is $(AB)_{ik}=\sum_j a_{ij}b_{jk}$, and $I_d$ is the identity matrix ([[def-ring-matrix-product-identity-and-transpose]]).

[L3] Matrix multiplication is associative and satisfies $I_dA=A=AI_d$ ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** induction.

1.1 Multiplying $C$ by $v_n$, the first $d-1$ rows return $a_{n+1},\ldots,a_{n+d-1}$ and the final row returns $-c_da_n-\cdots-c_1a_{n+d-1}=a_{n+d}$, so $Cv_n=v_{n+1}$. [given, L1, L2]

1.2 At $n=0$, one has $C^0v_0=I_dv_0=v_0$. [base, L2, L3]

2.1 If $v_n=C^nv_0$, then step 1.1 and associativity give $v_{n+1}=Cv_n=C^{n+1}v_0$. [ih, step 1.1, L3]

3.1 Induction proves $v_n=C^nv_0$ for every $n\ge0$, together with the one-step identity from step 1.1. [step 1.2, step 2.1, discharge-induction] ∎
