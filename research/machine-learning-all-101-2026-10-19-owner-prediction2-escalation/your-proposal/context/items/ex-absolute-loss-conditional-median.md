---
id: ex-absolute-loss-conditional-median
kind: example
title: "Absolute loss and conditional medians"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Let $\mathsf X=\{u\}$, $\mathsf Y=\{0,4\}$ with discrete sigma-algebras, $\mathsf A=\mathbb R$ with its Borel sigma-algebra, and $\mathcal F$ the set of all predictors from $\mathsf X$ to $\mathbb R$. Give the joint law by $P(u,0)=P(u,4)=1/2$ and define the label coordinate $Y(u,y)=y$. Use absolute loss $\ell(a,y)=|a-y|$. A median of a probability law on $\mathbb R$ is a value $m$ satisfying both $P(Y\le m)\ge1/2$ and $P(Y\ge m)\ge1/2$. The conditional law of $Y$ at the only instance assigns probability $1/2$ to each of $0$ and $4$, so every $m\in[0,4]$ is a median. The predictors $f_m(u)=m$ for $m\in[0,4]$ all minimize population risk, with risk $2$; every predictor with value outside $[0,4]$ has risk greater than $2$.

## Facts & Assumptions

**Given:** The finite measurable spaces, joint law, absolute loss and predictor class stated in the example.

[F1] A supervised problem specifies the measurable spaces, joint law, predictor class and loss. [[def-supervised-learning-problem]]

[F2] Population risk is the integral of the nonnegative loss under the joint law. [[def-population-and-empirical-risk]]

## Verification

1.1 The only instance has probability one, so for a predictor with value $t\in\mathbb R$ the population risk is $R_P(f_t)=\tfrac12|t|+\tfrac12|t-4|$. [given, F1, F2, algebra]

2.1 If $t\le0$, this risk is $2-t$; if $0\le t\le4$, it is $2$; and if $t\ge4$, it is $t-2$. Thus its minimizers are exactly $[0,4]$. For each such $m$, both median inequalities hold with probability at least $1/2$; outside this interval one of the inequalities fails. [given, step 1.1, algebra] ∎
