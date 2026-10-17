---
id: ex-rosenbrock-euler-stiff-linear-damping
kind: example
title: Rosenbrock-Euler damps a stiff scalar mode
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-rosenbrock-euler-step-map, thm-rosenbrock-euler-a-l-stable]
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–34"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
verification:
  precheck: pending
---

## Example

For the scalar equation $y'=-10y$, take $h=1/5$ and $y_n=1$. The Rosenbrock-Euler factor is $1/(1-h\lambda)=1/3$, whereas the explicit Euler step gives $1+h\lambda=-1$. Thus Rosenbrock-Euler contracts this stiff scalar mode on this step while explicit Euler changes its sign without reducing its magnitude.

## Facts & Assumptions

**Given:** $f(y)=-10y$, $y_n=1$, $h=1/5$, and exact-arithmetic stage equations with $\gamma=1$.

[F1] [[def-rosenbrock-euler-step-map]]: the exact scalar method with $\gamma=1$ solves $(1-h\lambda)k=\lambda y_n$ and has update $y_{n+1}=y_n+hk$.

[F2] [[thm-rosenbrock-euler-a-l-stable]] gives Rosenbrock-Euler's scalar factor $R(z)=(1-z)^{-1}$ when the stage is invertible.

## Verification

1.1 Here $\lambda=-10$ and $z=h\lambda=-2$, so $1-h\lambda=3$. The exact stage solve in [F1] gives $k=-10/3$ and $y_{n+1}=1-(1/5)(10/3)=1/3$. [given, F1, algebra]

1.2 The explicit Euler update is $1+h\lambda=1-2=-1$. The two amplification magnitudes are therefore $1/3$ and $1$, respectively, proving the stated contrast for this finite scalar example. [given, step 1.1, algebra] ∎
