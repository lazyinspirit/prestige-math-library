---
id: lem-poisson-count-law-normalization-and-moments
kind: lemma
title: "Normalization, moments, and generating function of the Poisson count law"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-scalar-poisson-count-law
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - def-factorial-and-falling-factorial
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 1, equations (1.7)-(1.11), PDF pp. 13-14."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 1, Poisson mass formula and count moments, PDF pp. 9-10."
verification:
  precheck: pending
---

## Statement

For finite $\lambda\ge0$, the masses in
[[def-scalar-poisson-count-law]] sum to one. If $N\sim\operatorname{Pois}(\lambda)$,
then
$$\mathbb E[N]=\lambda,\qquad \mathbb E[N(N-1)]=\lambda^2,\qquad \mathbb E[N^2]=\lambda^2+\lambda,\qquad \operatorname{Var}(N)=\lambda,$$
and $\mathbb E[s^N]=\exp(\lambda(s-1))$ for $0\le s\le1$.

## Facts & Assumptions

**Given:** A finite parameter $\lambda\ge0$ and the mass formula in
[[def-scalar-poisson-count-law]].

[F1] For $\lambda>0$, the mass at $k$ is $e^{-\lambda}\lambda^k/k!$; at
$\lambda=0$ the law is concentrated at $0$.
([[def-scalar-poisson-count-law]])

[F2] The real exponential is defined by the convergent power series
$e^x=\sum_{k\ge0}x^k/k!$ and satisfies $e^a e^b=e^{a+b}$.
([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]])

[F3] Expectation is integration against the probability law, and variance is
$\mathbb E[(N-\mathbb E N)^2]$ when the second moment is finite.
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-moments-variance-and-covariance]])

## Proof
**Proof technique:** direct.

1.1 If $\lambda=0$, [F1] puts all mass at $0$, so the masses sum to one and the stated moments and generating function have their asserted values. [given, F1]

1.2 Suppose $\lambda>0$. By [F1] and the defining exponential series [F2], $$\sum_{k=0}^\infty e^{-\lambda}\frac{\lambda^k}{k!}=e^{-\lambda}e^\lambda=1.$$ Thus the displayed masses normalize to a probability law. [given, F1, F2, algebra]

2.1 Using [F1] and reindexing the nonnegative series, $$\mathbb E[N]=e^{-\lambda}\sum_{k=1}^\infty k\frac{\lambda^k}{k!}=\lambda e^{-\lambda}\sum_{j=0}^\infty\frac{\lambda^j}{j!}=\lambda.$$ [step 1.2, F1, F2, F3, algebra]

3.1 Reindexing with $j=k-2$ gives $\mathbb E[N(N-1)]=e^{-\lambda}\sum_{k=2}^\infty k(k-1)\lambda^k/k!=\lambda^2e^{-\lambda}\sum_{j=0}^\infty\lambda^j/j!=\lambda^2$ by [F2]. Since $N^2=N(N-1)+N$, this and step 2.1 yield $\mathbb E[N^2]=\lambda^2+\lambda$ and hence $\operatorname{Var}(N)=\mathbb E[N^2]-(\mathbb E N)^2=\lambda$. [step 2.1, F1, F2, F3, algebra]

4.1 For $0\le s\le1$, [F1] and [F2] give $$\mathbb E[s^N]=e^{-\lambda}\sum_{k=0}^\infty\frac{(\lambda s)^k}{k!}=e^{-\lambda}e^{\lambda s}=e^{\lambda(s-1)}.$$ Together with step 1.1 this proves the generating-function formula also at $\lambda=0$. [step 1.1, F1, F2, algebra] ∎