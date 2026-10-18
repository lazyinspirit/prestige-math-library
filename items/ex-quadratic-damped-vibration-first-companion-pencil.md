---
id: ex-quadratic-damped-vibration-first-companion-pencil
kind: example
title: "A damped oscillator and its first companion pencil"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-first-frobenius-companion-pencil
  - def-matrix-polynomial-and-homogeneous-eigenpairs
  - thm-first-companion-pencil-is-strong-linearization
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §§1 and 3.4"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Example

Consider the scalar damped oscillator with mass $M=1$, damping coefficient $C=1/2$, and stiffness $K=2$. Its quadratic polynomial is $P(\lambda)=\lambda^2+(1/2)\lambda+2$. The first companion pencil is
$$L(\lambda)=\begin{bmatrix}\lambda+1/2&2\\-1&\lambda\end{bmatrix}.$$
This example checks its finite roots and the companion eigenvector lift.

## Facts & Assumptions

**Given:** The scalar grade-two polynomial $P(\lambda)=\lambda^2+(1/2)\lambda+2$ and its first companion pencil.

[F1] [[def-matrix-polynomial-and-homogeneous-eigenpairs]]: a finite eigenpair satisfies $P(\lambda)x=0$ with $x\ne0$.

[F2] [[def-first-frobenius-companion-pencil]]: for grade two the lift is $z=(\lambda x,x)^T$ and the pencil has top row $(\lambda A_2+A_1,A_0)$ and lower row $(-1,\lambda)$.

[F3] [[thm-first-companion-pencil-is-strong-linearization]]: finite polynomial eigenvectors lift to companion-pencil eigenvectors, and $\det L(\lambda)=\det P(\lambda)$.

## Verification

**Proof technique:** direct calculation.

1.1 The discriminant is $(1/2)^2-4(1)(2)=1/4-8=-31/4$. The quadratic formula therefore gives the two roots $\lambda_\pm=-1/4\pm i\sqrt{31}/4$. Neither is infinite because the leading coefficient $A_2=1$ is invertible. [given, F1, algebra]

2.1 Direct expansion gives $\det L(\lambda)=\lambda(\lambda+1/2)+2=\lambda^2+(1/2)\lambda+2=P(\lambda)$, so these two values are precisely the finite companion-pencil eigenvalues. [given, F2, F3, step 1.1, algebra]

3.1 For either root, $P(\lambda_\pm)\cdot1=0$, and its companion lift is $z=(\lambda_\pm,1)^T$. Multiplication gives $L(\lambda_\pm)z=((\lambda_\pm+1/2)\lambda_\pm+2,-\lambda_\pm+\lambda_\pm)^T=(P(\lambda_\pm),0)^T=(0,0)^T$. [given, F1, F2, step 1.1, algebra] ∎
