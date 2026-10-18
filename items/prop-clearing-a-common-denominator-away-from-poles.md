---
id: prop-clearing-a-common-denominator-away-from-poles
kind: proposition
title: "Clearing a common denominator preserves rational eigenpairs only away from poles"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-rational-matrix-eigenproblem-and-pole-domain
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Timo Betcke, Nicholas J. Higham, Volker Mehrmann, Christian Schröder, and Françoise Tisseur, NLEVP: A Collection of Nonlinear Eigenvalue Problems, §2.1"
      url: "https://discovery.ucl.ac.uk/id/eprint/1056500/2/nlevp.pdf"
---

## Statement

Let $R=q^{-1}N$ and $\Omega$ be as in [[def-rational-matrix-eigenproblem-and-pole-domain]]. For every $\lambda\in\Omega$ and every nonzero $x$, $R(\lambda)x=0$ if and only if $N(\lambda)x=0$. No point of $\mathcal P=\mathbb C\setminus\Omega$ is a rational eigenvalue, regardless of whether $N(\lambda)$ is singular there.

## Facts & Assumptions

**Given:** A rational matrix $R=q^{-1}N$ with reduced common denominator $q$, its pole-free domain $\Omega$, and $x\ne0$.

[F1] [[def-rational-matrix-eigenproblem-and-pole-domain]]: $\lambda\in\Omega$ exactly when $q(\lambda)\ne0$, and on that domain $R(\lambda)=q(\lambda)^{-1}N(\lambda)$; rational eigenpairs require $x\ne0$ and $\lambda\in\Omega$.

## Proof

**Proof technique:** direct scalar multiplication.

1.1 If $\lambda\in\Omega$, then $q(\lambda)\ne0$ by [F1]. Multiplying $R(\lambda)x=0$ by the nonzero scalar $q(\lambda)$ gives $N(\lambda)x=0$. Conversely, if $N(\lambda)x=0$, division by the same nonzero scalar gives $R(\lambda)x=0$. This proves the stated equivalence exactly on $\Omega$. [given, F1, algebra]

2.1 If $\lambda\in\mathcal P$, then at least one entry of $R$ has a pole by the reduced common-denominator definition in [F1], so $R(\lambda)$ is undefined and $(\lambda,x)$ is outside the rational eigenproblem's domain. A singular value of $N(\lambda)$ cannot change that domain condition; hence every cleared root at such a point must be rejected. [given, F1, step 1.1, algebra] ∎
