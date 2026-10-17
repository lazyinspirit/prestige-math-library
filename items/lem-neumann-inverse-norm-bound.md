---
id: lem-neumann-inverse-norm-bound
kind: lemma
title: A Neumann defect bounds the inverse norm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [lem-neumann-invertibility-for-finite-matrices, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-operator-norm-submultiplicative-and-t-star-t-identity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $E\in\mathbb C^{n\times n}$, $n\ge1$, and let $0\le q<1$ satisfy $\|E\|_2\le q$. Then $I-E$ is invertible and
$$
\|(I-E)^{-1}\|_2\le \frac1{1-q}.
$$

## Facts & Assumptions

**Given:** $E,q,n$ as in the statement.

[F1] If $\|X\|_2<1$, then $I+X$ is invertible ([[lem-neumann-invertibility-for-finite-matrices]]).

[F2] The operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F3] The operator norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Since $\|{-E}\|_2=\|E\|_2\le q<1$, [F1] gives that $T=(I-E)^{-1}$ exists. [given, F1]

2.1 Put $S_N=\sum_{k=0}^N E^k$. By induction and [F2], $\|E^k\|_2\le q^k$, so $\|S_N\|_2\le\sum_{k=0}^Nq^k=(1-q^{N+1})/(1-q)$ by [F3]. The finite identity $(I-E)S_N=I-E^{N+1}$, multiplied on the left by $T$, gives $S_N=T-TE^{N+1}$ and hence $T=S_N+TE^{N+1}$. By the triangle inequality from [F3] and submultiplicativity [F2], $(1-q^{N+1})\|T\|_2\le\|S_N\|_2\le(1-q^{N+1})/(1-q)$. Since $q^{N+1}<1$, division gives $\|T\|_2\le(1-q)^{-1}$. This proves the inverse norm bound without taking a limit of matrices. [given, F2, F3, step 1.1, algebra] ∎

