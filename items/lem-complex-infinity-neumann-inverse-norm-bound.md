---
id: lem-complex-infinity-neumann-inverse-norm-bound
kind: lemma
title: A complex infinity-norm defect bounds the inverse norm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-complex-infinity-matrix-norm, lem-complex-infinity-matrix-norm-submultiplicative, thm-rank-nullity]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§4.2 and 10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $E\in\mathbb C^{n\times n}$, $n\ge1$, and $0\le q<1$ satisfy $\|E\|_{\infty,\mathbb C}\le q$. Then $I-E$ is invertible and
$$
\|(I-E)^{-1}\|_{\infty,\mathbb C}\le \frac1{1-q}.
$$

## Facts & Assumptions

**Given:** $E,q,n$ as in the statement.

[F1] The complex infinity matrix norm is submultiplicative ([[lem-complex-infinity-matrix-norm-submultiplicative]]).

[F2] Its vector norm is the maximum coordinate modulus and its matrix norm is the maximum absolute row sum; in particular $\|I\|_{\infty,\mathbb C}=1$ and $|Y_{ij}|\le\|Y\|_{\infty,\mathbb C}\le n\max_{i,j}|Y_{ij}|$ ([[def-complex-infinity-matrix-norm]]).

[F3] An injective endomorphism of a finite-dimensional vector space is invertible ([[thm-rank-nullity]]).

## Proof

1.1 If $(I-E)x=0$, then $x=Ex$. The vector compatibility bound in [F1] gives $\|x\|_\infty\le q\|x\|_\infty$, so $x=0$ because $q<1$. Thus $I-E$ is injective, and [F3] makes it invertible; put $T=(I-E)^{-1}$. [given, F1, F3, algebra]

2.1 Define $S_N=\sum_{k=0}^N E^k$. By induction and [F1], $\|E^k\|_{\infty,\mathbb C}\le q^k$. The row-sum definition [F2] gives $\|I\|_{\infty,\mathbb C}=1$ and the triangle inequality, so $\|S_N\|_{\infty,\mathbb C}\le(1-q^{N+1})/(1-q)$. The identity $(I-E)S_N=I-E^{N+1}$, multiplied on the left by $T$ from step 1.1, gives $S_N=T-TE^{N+1}$ and hence $T=S_N+TE^{N+1}$. By [F2] and submultiplicativity [F1], $(1-q^{N+1})\|T\|_{\infty,\mathbb C}\le\|S_N\|_{\infty,\mathbb C}\le(1-q^{N+1})/(1-q)$. Since $q^{N+1}<1$, division proves the asserted bound. [given, F1, F2, step 1.1, algebra] ∎

