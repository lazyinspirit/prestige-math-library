---
id: thm-rosenbrock-euler-one-newton-step-for-backward-euler
kind: theorem
title: Rosenbrock-Euler is one Newton correction for backward Euler
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-rosenbrock-euler-step-map]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §§1.7.2 and 1.8, pp. 31–34"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
verification:
  precheck: pending
---

## Statement

Let $f:U\to\mathbb R^d$ be continuously differentiable, $y\in U$, $h>0$, and suppose $M:=I-hDf(y)$ is invertible. The backward-Euler increment equation is $G(s):=s-hf(y+s)=0$. A Newton correction for $G$ at $s_0=0$, defined by $s_1=s_0-DG(s_0)^{-1}G(s_0)$, is $s_1=hM^{-1}f(y)$. Consequently, the state $y+s_1$ equals the exact-arithmetic autonomous exact-Jacobian Rosenbrock-Euler map [[def-rosenbrock-euler-step-map]] with $\gamma=1$. This identity concerns one Newton correction only; it asserts neither convergence of Newton iteration nor that the corrected increment solves $G(s)=0$.

## Facts & Assumptions

**Given:** The differentiable vector field, state, positive step, and invertible matrix in the statement.

[F1] [[def-rosenbrock-euler-step-map]]: the exact-arithmetic autonomous exact-Jacobian map at $\gamma=1$ is $y+h(I-hDf(y))^{-1}f(y)$ whenever the stage matrix is invertible.

## Proof

1.1 Differentiating $G(s)=s-hf(y+s)$ at $s=0$ gives $DG(0)=I-hDf(y)=M$, while direct substitution gives $G(0)=-hf(y)$. [given, algebra]

2.1 The Newton correction is therefore $s_1=0-M^{-1}(-hf(y))=hM^{-1}f(y)$. [given, step 1.1, algebra]

3.1 By [F1], the Rosenbrock-Euler output is $y+hM^{-1}f(y)=y+s_1$, as claimed. [F1, step 2.1, algebra] ∎
