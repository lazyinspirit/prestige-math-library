---
id: thm-zero-variance-importance-sampling-proposal
kind: theorem
title: The event-conditioned proposal is the zero-variance benchmark
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rare-event-efficiency-criteria
  - alg-importance-sampling
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §3.3"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 1 Part 2, Optimal IS Proposal Density"
      url: "https://laub.au/rare-events/slides/L1ii.slides.html"
---

## Statement

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space, let $P$ have density $f\ge0$ with $\int f\,d\mu=1$, and let $A\in\mathcal X$ have $p=P(A)>0$. For $q^*(x)=\mathbf1_A(x)f(x)/p$ and $X\sim Q^*$ with this density, the ordinary importance-sampling contribution $Z=\mathbf1_A(X)f(X)/q^*(X)$, defined on the $Q^*$-support, equals $p$ almost surely. Thus the estimator from $n\ge1$ IID $Q^*$-draws is unbiased and has variance zero. This proposal depends on the unknown $p$, so it is a benchmark and not a generally available algorithm.

## Facts & Assumptions

**Given:** The probability density $f$, event $A$, and $p=P(A)>0$ in the Statement.

[F1] [[def-rare-event-efficiency-criteria]]: The zero-variance event proposal has density $q^*(x)=\mathbf1_A(x)f(x)/p$.

[F2] [[alg-importance-sampling]]: Ordinary importance sampling averages the contributions $\mathbf1_A(X_i)f(X_i)/q(X_i)$ over IID proposal draws where $q>0$.

## Proof

1.1 The density $q^*$ is nonnegative and $\int q^*\,d\mu=P(A)/p=1$, so it defines a proposal probability measure $Q^*$ supported on $\{x\in A:f(x)>0\}$ up to a $Q^*$-null set. [F1, given, algebra]

2.1 For $Q^*$-almost every $X$, we have $X\in A$ and $f(X)>0$. Substitution of $q^*(X)=f(X)/p$ into [F2] gives $Z=p$ almost surely. Every term in the IID sample average is therefore the same constant $p$; its expectation is $p$ and its variance is zero. [F1, F2, step 1.1, given, algebra] ∎
