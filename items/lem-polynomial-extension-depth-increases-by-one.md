---
id: lem-polynomial-extension-depth-increases-by-one
title: A polynomial variable increases depth by one
kind: lemma
status: draft
origin: pipeline
deps: [def-regular-sequence-on-a-module, lem-depth-quotient-by-regular-element, thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local and $0\ne M$ finite. Put
$S=R[X]_{(\mathfrak m,X)}$ and $N=M[X]_{(\mathfrak m,X)}$. Then
$$\operatorname{depth}_S(N)=\operatorname{depth}_R(M)+1, \qquad \dim_S(N)=\dim_R(M)+1.$$

## Facts & Assumptions

**Given:** $X$ belongs to the maximal ideal of $S$.

## Proof

**Proof technique:** direct.

1.1 Multiplication by $X$ on $M[X]$ is injective coefficientwise and its cokernel is $M$. These properties survive localization, so $X$ is $N$-regular and $N/XN\cong M$. [given]

2.1 As an $S$-module, $N/XN$ is $M$ with $X$ acting by zero; regular sequences from $(\mathfrak m,X)$ on it are exactly regular sequences from $\mathfrak m$ on $M$. Hence the regular-quotient depth formula gives $\operatorname{depth}_S(N)=\operatorname{depth}_R(M)+1$. [step 1.1, algebra]

3.1 Put $A=R/\operatorname{Ann}_R(M)$. Then $$\operatorname{Supp}_S(N)= \operatorname{Spec}(A[X])_{(\mathfrak m_A,X)}.$$ The polynomial-dimension theorem gives $\dim A[X]=\dim A+1$, and its lower chain is attained below $(\mathfrak m_A,X)$ because $A$ is local. Therefore the displayed localization has dimension $\dim A+1=\dim_R(M)+1$. This is the asserted dimension equality and does not require every support prime to be extended from $R$ or to contain $X$. [step 1.1, algebra] ∎
