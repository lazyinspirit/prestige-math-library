---
id: ex-infinite-polynomial-eigenvalue-from-singular-leading-coefficient
kind: example
title: "A singular leading coefficient gives an infinite polynomial eigenvalue"
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
    - title: "D. Steven Mackey, Niloufer Mackey, and Françoise Tisseur, Polynomial Eigenvalue Problems: Theory, Computation, and Structure, §2"
      url: "https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §3.1"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Example

Take the grade-two matrix polynomial $P(\lambda)=\operatorname{diag}(1,\lambda^2)$, so $n=m=2$, $\det P(\lambda)=\lambda^2$, and $A_2=\operatorname{diag}(0,1)$ is singular. The finite root $\lambda=0$ and the infinite root are different projective eigenvalues. Their algebraic and geometric multiplicities are computed directly below.

## Facts & Assumptions

**Given:** $A_0=\operatorname{diag}(1,0)$, $A_1=0$, and $A_2=\operatorname{diag}(0,1)$ for a regular grade-two polynomial.

[F1] [[def-matrix-polynomial-and-homogeneous-eigenpairs]]: $P_h(1,0)=A_2$, and the algebraic multiplicity at infinity is the zero order at $0$ of $\det P^{\rm rev}_2$.

[F2] [[def-first-frobenius-companion-pencil]]: at infinity the homogeneous companion pencil is $-B_c=\operatorname{diag}(A_2,I_2)$, with block eigenvectors $(x,0)^T$ for $x\in\ker A_2$.

[F3] [[thm-first-companion-pencil-is-strong-linearization]]: the finite and infinite eigenspaces correspond to those of the polynomial, and the infinite algebraic multiplicity is $mn-\deg\det P$.

## Verification

**Proof technique:** direct calculation.

1.1 The determinant is $\det P(\lambda)=\lambda^2\not\equiv0$, so $P$ is regular; its degree is $2$, while $mn=4$. Thus the theorem's degree-defect formula gives infinite algebraic multiplicity $4-2=2$. Also $P^{\rm rev}_2(\mu)=\operatorname{diag}(\mu^2,1)$, whose determinant has a zero of order two at $\mu=0$. [given, F1, F3, algebra]

2.1 The leading matrix $A_2$ has rank one and kernel $\operatorname{span}\{e_1\}$, so the infinite eigenspace has geometric multiplicity one and is represented in the companion pencil by $(e_1,0)^T$. This differs from its algebraic multiplicity two. [given, F1, F2, step 1.1, algebra]

3.1 At the finite root $\lambda=0$, $P(0)=\operatorname{diag}(1,0)$ has kernel $\operatorname{span}\{e_2\}$. The finite lift is $(0,e_2)^T$, which the companion theorem maps to a pencil eigenvector. Thus the finite root zero is not the infinite eigenvalue represented by $(e_1,0)^T$. [given, F1, F2, F3, step 1.1, algebra] ∎
