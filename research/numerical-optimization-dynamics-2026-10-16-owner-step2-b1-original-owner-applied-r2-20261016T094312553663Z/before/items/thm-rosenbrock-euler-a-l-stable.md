---
id: thm-rosenbrock-euler-a-l-stable
kind: theorem
title: Rosenbrock-Euler is A-stable and L-stable on the scalar test equation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-euler-step]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §§1.3 and 1.8, pp. 11–13, 33–34"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
verification:
  precheck: pending
---

## Statement

Apply [[alg-rosenbrock-euler-step]] to $y'=\lambda y$ over $\mathbb C$, with exact Jacobian $J=\lambda$ and $z=h\lambda$. Its scalar amplification factor is $R(z)=(1-z)^{-1}$. For this statement, A-stability means $|R(z)|\le1$ for every $z$ with $\operatorname{Re}z\le0$, and L-stability means A-stability together with $R(z)\to0$ as real $z\to-\infty$. The method is both A-stable and L-stable, and its scalar amplification factor agrees with backward Euler.

## Facts & Assumptions

**Given:** A scalar complex test equation, a step $h>0$, and $\operatorname{Re}\lambda\le0$ when stability is asserted.

[F1] [[alg-rosenbrock-euler-step]] gives $y^+=y+hk$ with $(1-h\lambda)k=\lambda y$.

## Proof

1.1 If $\operatorname{Re}z\le0$, then $1-z\ne0$. Solving the stage equation in [F1] gives $y^+=y+h\lambda y/(1-z)=y/(1-z)$, so $R(z)=(1-z)^{-1}$; this is also the scalar backward-Euler update. [given, F1, algebra]

1.2 For $\operatorname{Re}z\le0$, $|1-z|^2=1-2\operatorname{Re}z+|z|^2\ge1$, whence $|R(z)|\le1$. For real $z\to-\infty$, $|(1-z)^{-1}|\to0$. These are exactly the stated A- and L-stability conditions. [given, step 1.1, algebra] ∎
