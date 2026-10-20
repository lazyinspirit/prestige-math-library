---
id: ex-repeated-fixed-level-tests-not-anytime-valid
kind: example
title: Repeated fixed-level tests do not give an all-times bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $U_1,U_2,\ldots$ be independent random variables, each uniform on $[0,1]$, let $\mathcal F_t=\sigma(U_1,\ldots,U_t)$, and at every time $t\geq1$ test the same null by rejecting when $U_t\leq\alpha$, for a fixed $\alpha\in(0,1)$. Each single-time test has rejection probability $\alpha$, but for every integer $n\geq2$, the probability of at least one rejection by time $n$ is $1-(1-\alpha)^n>\alpha$. Marginal level $\alpha$ at each time therefore does not give the same $\alpha$ bound for the event of ever rejecting.

## Facts & Assumptions

**Given:** The probability space carries the independent $[0,1]$-uniform random variables in the Example.

[A1] The variables $U_1,U_2,\ldots$ are mutually independent and each satisfies $P(U_t\leq x)=x$ for $0\leq x\leq1$.

## Verification

1.1 For every $t\geq1$, [A1] gives $P(U_t\leq\alpha)=\alpha$, so the test at that fixed time has level $\alpha$. [given, A1]

1.2 Independence in [A1] gives $P(U_t>\alpha\text{ for all }1\leq t\leq n)=\prod_{t=1}^nP(U_t>\alpha)=(1-\alpha)^n$. Taking the complement, $P(\exists t\leq n:U_t\leq\alpha)=1-(1-\alpha)^n$. [given, A1, algebra]

2.1 For $n\geq2$, $1-(1-\alpha)^n=\alpha+(1-\alpha)(1-(1-\alpha)^{n-1})>\alpha$, since both factors in the added term are positive. Thus the pointwise error bounds do not supply the same bound for all tests through time $n$. [given, A1, step 1.2, algebra] ∎
