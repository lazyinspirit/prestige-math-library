---
id: ex-two-branch-awgn-water-filling
kind: example
title: Water-filling for noise variances one and four
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-parallel-gaussian-channel-with-power-constraint, lem-water-filling-optimal-allocation, thm-parallel-awgn-feedback-capacity-water-filling]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used in the finite allocation calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.4, Theorem 20.14"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.3.2, Theorem 17.7"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Example

For the two parallel branches with noise variances $\lambda_1=1$ and $\lambda_2=4$, under total power $P\ge0$, the optimal allocation is $(0,0)$ and the capacity is $0$ at $P=0$. For $P>0$, the water level and allocations are
$$T=\begin{cases}1+P,&0<P\le3,\\(P+5)/2,&P\ge3,\end{cases}\qquad (p_1,p_2)=\begin{cases}(P,0),&0\le P\le3,\\((P+3)/2,(P-3)/2),&P\ge3.\end{cases}$$
The capacity is $C(P)=\frac12\ln(1+P)$ for $0\le P\le3$ and $C(P)=\ln((P+5)/4)$ for $P\ge3$. At $P=3$, both formulas give $\ln2$.

## Facts & Assumptions

**Given:** A two-dimensional parallel Gaussian channel with independent noise variances $1$ and $4$, and a nonnegative total power $P$.

[A1] [[def-parallel-gaussian-channel-with-power-constraint]]: the cost is squared Euclidean norm per vector use and rates are natural-log nats.

[F1] [[lem-water-filling-optimal-allocation]]: the optimal allocation is $p_j=(T-\lambda_j)^+$ with $T$ chosen so their sum is $P$.

[F2] [[thm-parallel-awgn-feedback-capacity-water-filling]]: this allocation's value is the ordinary and feedback capacity under the average power constraint.

## Verification

1.1 At $P=0$, the only feasible allocation is $(0,0)$. If $0<P\le3$, choosing $T=1+P\le4$ makes $p_1=T-1=P$ and $p_2=(T-4)^+=0$, whose sum is $P$. If $P\ge3$, choosing $T=(P+5)/2\ge4$ gives $p_1=(P+3)/2$, $p_2=(P-3)/2$, and their sum is $P$. At $P=3$ the formulas agree. In each positive-power regime [F1] therefore confirms the displayed water level and nonnegative powers. [A1, F1, given, cases, algebra]

2.1 Substituting the first allocation into the rate formula [F2] gives $\frac12\ln(1+P)$; substituting the second gives $\frac12\ln(T)+\frac12\ln(T/4)=\ln(T/2)=\ln((P+5)/4)$. At the common endpoint $P=3$, both are $\ln2$. [F2, step 1.1, given, algebra] ∎
