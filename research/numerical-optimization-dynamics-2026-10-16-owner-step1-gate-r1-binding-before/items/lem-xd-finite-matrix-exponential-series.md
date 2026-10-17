---
id: lem-xd-finite-matrix-exponential-series
kind: lemma
title: "Finite matrix exponential series and its identities"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorem 3.2 and its proof, PDF pp. 8–10; finite matrix exponential representation and its differential equation."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equation (2.6), printed pp. 044104-2–044104-3; finite-dimensional master equation solved by a matrix exponential."
---

## Statement

For a finite real square matrix $A$, define

$$e^{tA}:=\sum_{k=0}^{\infty}\frac{t^kA^k}{k!}.$$

This series converges absolutely and uniformly for $t$ in every bounded interval. It is differentiable with $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ and $e^{0A}=I$. If finite square matrices $A$ and $B$ commute, then $e^Ae^B=e^{A+B}$.

## Facts & Assumptions

**Given:** A finite real square matrix $A$, and, for the product identity, finite real square matrices $A,B$ with $AB=BA$.

[F1] The induced matrix $1$-norm is finite and submultiplicative: $\|CD\|_1\le\|C\|_1\|D\|_1$. ([[def-induced-matrix-p-norm]], [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]])

[F2] The scalar series $\sum_{k\ge0}x^k/k!$ converges absolutely for every real $x$ and defines $e^x$. ([[def-real-exponential-function-and-e]], [[lem-exponential-series-has-infinite-radius]])

## Proof


**Proof technique:** direct.

1.1 Put $M=\|A\|_1$. For any $T>0$ and $|t|\le T$, [F1] gives $\|t^kA^k/k!\|_1\le (TM)^k/k!$. The majorant series converges by [F2], so the matrix series is absolutely and uniformly Cauchy on $[-T,T]$ and defines $e^{tA}$. Since $T$ was arbitrary, it converges locally uniformly. [given, F1, F2, algebra]

1.2 Fix $c\in\mathbb R$ and choose $R>|c|$. For $|h|<R-|c|$ and $k\ge1$, the finite factorization $(c+h)^k-c^k=h\sum_{j=0}^{k-1}(c+h)^{k-1-j}c^j$ bounds both the norm of the $k$th matrix-series difference quotient and the norm of the $k$th proposed derivative term by $M(MR)^{k-1}/(k-1)!$. The sum of these bounds converges by [F2], so both tails are uniformly small; each finite partial sum is a matrix polynomial whose difference quotient tends to its ordinary derivative. Taking first a sufficiently large partial sum and then $h\to0$ proves differentiability and gives $\frac{d}{dt}e^{tA}|_{t=c}=\sum_{k\ge1}A^kc^{k-1}/(k-1)!=Ae^{cA}$. [given, F1, F2, algebra]

2.1 Every term in the derivative series commutes with $A$, so the same sum equals $e^{cA}A$. The $k=0$ term in the defining series gives $e^{0A}=I$. [step 1.2, algebra]

3.1 For commuting $A,B$, the double series for $e^Ae^B$ is absolutely convergent because its term norms are bounded by $\|A\|_1^m\|B\|_1^n/(m!n!)$, whose double sum is finite by [F2]. Regroup by $r=m+n$; commutation and the binomial formula give $\sum_{m+n=r}A^mB^n/(m!n!)=(A+B)^r/r!$. Summing over $r$ proves $e^Ae^B=e^{A+B}$. [given, F1, F2, algebra] ∎
