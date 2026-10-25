---
id: ex-rosenbrock-euler-stiff-decay-and-backward-euler
title: "Rosenbrock–Euler damps a stiff scalar decay with the backward-Euler factor"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-rosenbrock-euler-step-map
  - thm-rosenbrock-euler-scalar-a-and-l-stability
  - prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler
  - def-backward-euler-step-equation
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.3"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.3, Example 2.11, printed pp. 33–34: backward-Euler scalar factor"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: linearly implicit Euler and its backward-Euler relation"
---

## Statement

Consider $y'=-100y$ with $y_0=1$ and one step $h=1$. The named Rosenbrock–Euler method ($\gamma=1$, exact Jacobian) returns $y_1=1/101$, exactly the backward-Euler value. Its scalar factor is $1/(1+100)$; it lies in $(0,1)$ and tends to zero as the decay parameter times the step tends to infinity. This is a scalar exact-arithmetic calculation and makes no finite-precision forward-error claim.

## Facts & Assumptions

**Given:** $f(y)=-100y$, $y_0=1$, $h=1$, and exact arithmetic.

[F1] [[def-rosenbrock-euler-step-map]]: at $\gamma=1$, $(1-hJ)k=f(y)$ and $y_+=y+hk$.

[F2] [[thm-rosenbrock-euler-scalar-a-and-l-stability]]: $R_1(z)=1/(1-z)$ and the $\gamma=1$ method is L-stable.

[F3] [[prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler]]: for an autonomous field, the $\gamma=1$ step is one Newton correction of the backward-Euler residual from the starting value.

[F4] [[def-backward-euler-step-equation]]: the scalar endpoint equation is $z=y+h f(z)$.

## Proof

**Given:** The data in the Statement.

1.1 Here $J=-100$ and $z=h(-100)=-100$. By [F1], $k=(-100)/(1+100)=-100/101$, hence $y_1=1-100/101=1/101$. [given, F1, algebra]

2.1 The backward-Euler equation [F4] is $z=1-100z$, so $101z=1$ and its unique scalar root is $z=1/101$. This agrees with step 1.1; [F3] also identifies the Rosenbrock update as one Newton correction, which is exact here because the residual is affine. [F3, F4, step 1.1, algebra]

3.1 Since $z=-100<0$, the factor in [F2] is $1/101\in(0,1)$. For general decay parameter $\lambda>0$, the factor is $1/(1+h\lambda)$, which tends to zero as $h\lambda\to\infty$. [F2, given, algebra] ∎

## Finite check

For $h\lambda=100$, the method factor and backward-Euler factor both equal $1/101$; explicit Euler would have factor $1-100=-99$, which grows in magnitude rather than damping this mode.
