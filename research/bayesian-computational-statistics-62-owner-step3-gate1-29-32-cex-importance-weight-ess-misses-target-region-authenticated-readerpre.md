---
id: cex-importance-weight-ess-misses-target-region
kind: counterexample
title: A high observed weight ESS can miss target mass
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-importance-weight-effective-sample-size
  - alg-self-normalized-importance-sampling
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: counterexample
---

## Statement refuted

If a finite importance sample has weight-based effective sample size $n$, then the sample has visited every region to which the target assigns positive probability.

## Facts & Assumptions

**Given:** The claim in “Statement refuted.”

[F1] [[def-importance-weight-effective-sample-size]]: For nonnegative weights with positive sum, $\operatorname{ESS}_w=(\sum_iw_i)^2/\sum_iw_i^2$.

[F2] [[alg-self-normalized-importance-sampling]]: The unnormalized importance weight at a proposal draw is $W=\tilde p(X)/q(X)$ when $q(X)>0$.

## Counterexample

1.1 Let $\mathsf X=\{a,b\}$, $\tilde p(a)=\tilde p(b)=1$, so $Z_p=2$ and $\pi(b)=1/2$. Take proposal masses $q(a)=99/100$ and $q(b)=1/100$. This proposal has full target support, and the event $E_n=\{X_1=\cdots=X_n=a\}$ has probability $(99/100)^n>0$. [given, algebra]

2.1 On $E_n$, all observed weights equal $W(a)=100/99>0$. By [F1], $\operatorname{ESS}_w=(nW(a))^2/(nW(a)^2)=n$, while no sample is at $b$ and the target assigns $b$ probability $1/2$. Thus the claimed certification fails on an event of positive probability. [F1, F2, step 1.1, algebra] ∎
