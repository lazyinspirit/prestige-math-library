---
id: thm-csm-dk-integrable-covariance-green-kubo
kind: theorem
title: Green–Kubo covariance limit under absolute integrability
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - def-integrable-real-and-complex-functions-and-their-integrals
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-dominated-convergence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: MIT OpenCourseWare, 22.103 Microscopic Theory of Transport, Lecture 3, pp. 1–4
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
---

## Statement

Let $(\Xi,\mathcal F,\mathbb P)$ be a probability space and let
$V:\mathbb R\times\Xi\to\mathbb R^d$ be jointly measurable for the completed
product of Lebesgue measure and $\mathbb P$. Assume $\mathbb E[V(t)]=0$ for
every $t$, $\mathbb E|V(0)|^2<\infty$, and second-order stationarity in the
explicit sense that each covariance below is finite and
$$C_{ij}(s):=\mathbb E[V_i(u)V_j(u+s)]$$
is independent of $u\in\mathbb R$ for every $s\in\mathbb R$ and every
$1\le i,j\le d$. For $T>0$, the Lebesgue integral
$X(T)=\int_0^T V(s)\,ds$ exists almost surely and in $L^2$. Define
$$\operatorname{Cov}(X(T))_{ij} =\mathbb E[(X_i(T)-\mathbb EX_i(T))(X_j(T)-\mathbb EX_j(T))];$$
the centered hypothesis makes these means zero. Then
$$\operatorname{Cov}(X_i(T),X_j(T)) =\int_0^T(T-s)\big(C_{ij}(s)+C_{ji}(s)\big)\,ds.$$
If each $C_{ij}$ is absolutely integrable on $[0,\infty)$, then
$$\frac{\operatorname{Cov}(X(T))}{2T}\longrightarrow D,\qquad D_{ij}=\frac12\int_0^\infty\big(C_{ij}(s)+C_{ji}(s)\big)\,ds,$$
and $D$ is positive semidefinite. This is a variance-growth conclusion; it
does not assert a central limit theorem or identify a transport coefficient.

## Facts & Assumptions

**Given:** A probability space, a jointly measurable centered vector process
with stationary second moments and finite second moment at one time, plus
absolute integrability of every nonnegative-lag covariance entry for the
limit clause.

[A1] $\mathrm{AC}_\omega$ is assumed for the completed-product
Tonelli–Fubini supplier ([[def-countable-choice]]).

[F1] [[thm-tonelli-and-fubini-for-completed-product-measures]]: on a completed
product of sigma-finite spaces, nonnegative integrals and integrable
functions may be integrated by sections under its stated
$\mathrm{AC}_\omega$ hypothesis.

[F2] [[thm-dominated-convergence]]: almost-everywhere convergence under one
common integrable majorant allows passage to the limit in the integral.

[F3] [[def-integrable-real-and-complex-functions-and-their-integrals]]:
$L^1$ and $L^2$ denote absolute integrability of the corresponding powers
with respect to the indicated measure.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]]: the integral
Cauchy–Schwarz inequality applies to square-integrable functions.

## Proof

**Given:** [A1] and the process hypotheses in the statement.

1.1 By second-order stationarity,
$\mathbb E|V(t)|^2=\sum_i C_{ii}(0)=\mathbb E|V(0)|^2$ for every $t$.
Tonelli applied to the nonnegative jointly measurable function $|V|^2$
therefore gives
$\mathbb E\int_0^T|V(s)|^2\,ds=T\mathbb E|V(0)|^2<\infty$.
Consequently the path integral of $|V|^2$ is finite almost surely; [F4] on
$[0,T]$ then makes $V$ pathwise integrable. Moreover,
$|X(T)|^2\le T\int_0^T|V(s)|^2ds$, so $X(T)\in L^2$.
[A1, F1, F3, F4, given, algebra]

2.1 The bound in step 1.1 and Cauchy–Schwarz in probability give
$\mathbb E\int_0^T|V(s)|\,ds\le T(\mathbb E|V(0)|^2)^{1/2}<\infty$.
Fubini and $\mathbb E[V(s)]=0$ therefore give $\mathbb E[X(T)]=0$.
For each $i,j$, [F4] and stationarity give
$\mathbb E|V_i(u)V_j(v)|\le\mathbb E|V(0)|^2$ on the finite square
$[0,T]^2$. Fubini therefore permits expansion of
$\mathbb E[X_i(T)X_j(T)]$ as the double integral of
$\mathbb E[V_i(u)V_j(v)]$. Splitting the square into $u\le v$ and $v\le u$,
then writing $s=|v-u|$, gives the two terms
$\int_0^T(T-s)C_{ij}(s)ds$ and
$\int_0^T(T-s)C_{ji}(s)ds$. Since the means are zero, this is the stated
covariance formula. [F1, F4, step 1.1, given, algebra]

3.1 Divide the covariance formula by $2T$ and extend the integrand by zero
for $s>T$. Its $(i,j)$ entry is
$\frac12\mathbf1_{[0,T]}(s)(1-s/T)(C_{ij}(s)+C_{ji}(s))$. As $T\to\infty$
it converges pointwise to $\frac12(C_{ij}(s)+C_{ji}(s))$ and is bounded by
the integrable function
$\frac12(|C_{ij}(s)|+|C_{ji}(s)|)$. By [F2], each matrix entry converges to
the stated integral. [A1, F2, step 2.1]

4.1 For every $a\in\mathbb R^d$,
$a^\top\operatorname{Cov}(X(T))a/(2T)\ge0$ because it is a scaled variance.
Entrywise convergence from step 3.1 gives
$a^\top Da=\lim_{T\to\infty}a^\top\operatorname{Cov}(X(T))a/(2T)\ge0$.
Thus $D$ is positive semidefinite. For a scalar velocity observable in
units m/s, $D$ has units m$^2$/s. [step 3.1, algebra] ∎

## Remarks

The MIT notes derive a self-diffusion formula from a physical long-time
mean-square-displacement assumption. The theorem here proves only the stated
covariance limit under second-order stationarity and absolute integrability;
it supplies neither that physical identification nor a Gaussian limit.
