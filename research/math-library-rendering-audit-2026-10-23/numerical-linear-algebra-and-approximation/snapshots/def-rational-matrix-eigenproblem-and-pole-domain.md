---
id: def-rational-matrix-eigenproblem-and-pole-domain
kind: definition
title: "Rational matrix eigenproblem on its pole-free domain"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-matrix-polynomial-and-homogeneous-eigenpairs
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
    - title: "Timo Betcke, Nicholas J. Higham, Volker Mehrmann, Christian Schröder, and Françoise Tisseur, NLEVP: A Collection of Nonlinear Eigenvalue Problems, §2.1"
      url: "https://discovery.ucl.ac.uk/id/eprint/1056500/2/nlevp.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §2.7"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Definition

Let $\mathbb C(\lambda)$ denote the field of quotients of complex scalar polynomials. Let $R(\lambda)\in\mathbb C(\lambda)^{n\times n}$ with $n\ge1$ be a square matrix whose entries are rational functions of $\lambda$. Write each entry as a reduced scalar fraction (common polynomial factors have been cancelled), and let $q(\lambda)$ be the monic least common multiple of their denominators. Thus the zero set $\mathcal P:=\{\lambda:q(\lambda)=0\}$ is exactly the set of poles of at least one entry. Define the pole-free domain $\Omega:=\mathbb C\setminus\mathcal P$ and the polynomial matrix $N(\lambda):=q(\lambda)R(\lambda)$, whose entries are polynomials as in [[def-matrix-polynomial-and-homogeneous-eigenpairs]]. A **rational eigenpair** is a pair $(\lambda,x)$ with $\lambda\in\Omega$, $x\in\mathbb C^n\setminus\{0\}$, and $R(\lambda)x=0$; its $\lambda$ is a rational eigenvalue. The **cleared-denominator polynomial equation** is $N(\lambda)x=0$, but it represents the rational eigenproblem only on $\Omega$. Any solution at a pole is an inadmissible candidate, even when the cleared polynomial matrix is singular there.
