---
id: thm-interval-determinant-sign-certificate-soundness
kind: theorem
title: An interval determinant excluding zero certifies nonsingularity and sign
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-determinant-of-a-square-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.10"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Let $n\ge1$ and let $\mathcal A$ be a nonempty family of real $n\times n$ matrices. Suppose a real interval $D$ contains $\det A$ for every $A\in\mathcal A$. If $0\notin D$, then every $A\in\mathcal A$ is nonsingular; if $D$ is positive or negative, its sign is the common determinant sign. If $D=\{0\}$, every member is singular. When neither condition holds, the certificate makes no singularity or sign assertion.

## Facts & Assumptions

**Given:** $\mathcal A$ and a sound real interval determinant enclosure $D$ as stated.

[F1] The determinant is the finite Leibniz sum for a real square matrix ([[def-determinant-of-a-square-matrix]]).

[F2] A finite square real matrix is invertible exactly when its determinant is nonzero ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

1.1 For any $A\in\mathcal A$, the assumed enclosure gives $\det A\in D$. If $0\notin D$, then $\det A\ne0$, and [F2] makes $A$ nonsingular. If $D$ is a positive or negative interval, every $\det A$ has its corresponding sign. [given, F1, F2]

2.1 If $D=\{0\}$, then $\det A=0$ for every $A\in\mathcal A$, so [F2] makes every member singular. In the remaining case the stated output is inconclusive and no singularity or sign claim is made. [given, F1, F2] ∎

