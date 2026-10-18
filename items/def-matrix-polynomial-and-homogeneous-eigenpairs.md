---
id: def-matrix-polynomial-and-homogeneous-eigenpairs
kind: definition
title: "Regular matrix polynomials and homogeneous eigenpairs"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. Steven Mackey, Niloufer Mackey, and Françoise Tisseur, Polynomial Eigenvalue Problems: Theory, Computation, and Structure, §§2–3"
      url: "https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §3.1"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Definition

Fix integers $n,m\ge1$ and coefficient matrices $A_0,\ldots,A_m\in\mathbb C^{n\times n}$. The **grade-$m$ matrix polynomial** is
$$P(\lambda):=\sum_{j=0}^{m}A_j\lambda^j.$$
When $P$ is not identically zero, its actual degree is the degree of its largest nonzero scalar entry and can be smaller than the declared grade $m$; the zero polynomial has no actual degree. It is **regular** when the scalar polynomial $\det P(\lambda)$ is not identically zero. Write $x^*$ for conjugate transpose, $\langle u,v\rangle:=v^*u$ for the Euclidean inner product, $\|x\|_2:=(x^*x)^{1/2}$ for the Euclidean vector norm, and $\|M\|_F:=(\sum_{r,s}|M_{rs}|^2)^{1/2}$ for the Frobenius matrix norm.

The **grade-$m$ homogeneous polynomial** is
$$P_h(\alpha,\beta):=\sum_{j=0}^{m}A_j\alpha^j\beta^{m-j}.$$
A projective parameter $[\alpha:\beta]$ is a nonzero pair $(\alpha,\beta)\in\mathbb C^2$ modulo common multiplication by a nonzero scalar. A **homogeneous eigenpair** is $([\alpha:\beta],x)$ with $x\in\mathbb C^n\setminus\{0\}$ and $P_h(\alpha,\beta)x=0$. This condition is independent of the representative because $P_h(c\alpha,c\beta)=c^mP_h(\alpha,\beta)$. If $\beta\ne0$, the associated finite parameter is $\lambda=\alpha/\beta$ and $P_h(\alpha,\beta)=\beta^mP(\lambda)$. The point $[1:0]$ is the parameter at infinity; there $P_h(1,0)=A_m$, so it is an eigenvalue exactly when $A_m$ is singular. For regular $P$, the algebraic multiplicity at a finite $\lambda_0$ is the order of the zero of $\det P$ at $\lambda_0$. The **reversal** is $P^{\rm rev}_m(\mu):=\sum_{j=0}^{m}A_{m-j}\mu^j=\mu^mP(1/\mu)$; the algebraic multiplicity at infinity is the order of the zero of $\det P^{\rm rev}_m$ at $\mu=0$. The order of a zero at $0$ is the largest integer $r$ for which $\mu^r$ divides the scalar polynomial.

## Remarks

The grade is part of the data. Padding a polynomial with zero leading coefficients leaves its finite eigenvalues unchanged but can add eigenvalues at infinity. Regularity excludes the identically singular case while allowing $A_m$ to be singular.
