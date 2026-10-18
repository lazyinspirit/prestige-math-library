---
id: lem-discrete-memoryless-channel-iid-information-density-converges
kind: lemma
title: "IID DMC information density converges to mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-density, def-discrete-memoryless-channel-information-capacity, def-finite-stochastic-kernel, def-finite-probability-vector, def-it-finite-mutual-information, def-natural-logarithm]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the random variables have finite support."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.4, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

Fix a finite DMC $W$ and input law $P_X$. If $(X_i,Y_i)_{i\ge1}$ are IID with law $P_X(x)W(y\mid x)$, then $n^{-1}\imath_{P_X}(X^n;Y^n)\to I(P_X;W)$ in probability.

## Facts & Assumptions

**Given:** A finite DMC $W$, an input probability vector $P_X$, and IID pairs with joint law $P_X(x)W(y\mid x)$.

[F1] [[def-discrete-memoryless-channel-information-density]]: on positive joint support, $\imath_{P_X}(x;y)=\ln(W(y\mid x)/Q_{P_X}(y))$.

[F2] [[def-it-finite-mutual-information]]: $I(P_X;W)$ is the finite sum of the joint mass times the log ratio of joint mass to product-marginal mass.

[F3] [[def-finite-stochastic-kernel]]: each row $W(\cdot\mid x)$ is a probability vector.

## Proof

1.1 On every pair with $P_X(x)W(y\mid x)>0$, the output marginal $Q_{P_X}(y)$ is positive. Thus [F1] gives a finite value, and summing its expectation gives $\mathbb E[\imath_{P_X}(X_1;Y_1)]=\sum_{x,y:P_X(x)W(y\mid x)>0}P_X(x)W(y\mid x)\ln\frac{W(y\mid x)}{Q_{P_X}(y)}=I(P_X;W)$ by [F2]. The variable has finite support, hence some finite variance $v$. The row-law normalization is supplied by [F3]. [F1, F2, F3, given, algebra]

2.1 Let $S_n:=\sum_{i=1}^n\imath_{P_X}(X_i;Y_i)$. Independence gives $\mathbb E S_n=nI(P_X;W)$ and $\mathbb E[(S_n-\mathbb E S_n)^2]=nv$. For every $\eta>0$, the squared deviation is at least $n^2\eta^2$ on $\{|S_n/n-I(P_X;W)|\ge\eta\}$, so that event has probability at most $v/(n\eta^2)\to0$. This is convergence in probability. [F1, step 1.1, given, algebra] ∎
