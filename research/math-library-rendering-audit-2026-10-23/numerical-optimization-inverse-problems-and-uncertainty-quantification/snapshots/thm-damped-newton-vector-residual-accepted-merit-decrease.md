---
id: thm-damped-newton-vector-residual-accepted-merit-decrease
kind: theorem
title: "An accepted damped Newton step strictly decreases the residual merit"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [alg-damped-newton-for-vector-residuals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed p. 141 / PDF p. 7: damped Newton modification; this item proves only its stated residual-merit consequence"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: Newton correction for a vector residual"
---

## Statement

Use the inputs and residual merit $\Phi(x)=\tfrac12\|F(x)\|_2^2$ of
[[alg-damped-newton-for-vector-residuals]]. At any iterate where the procedure
accepts a step $t>0$ with $F(x)\ne0$, the accepted point $x_+=x+t s$ satisfies
$$\Phi(x_+)\le\Phi(x)-\alpha t\|F(x)\|_2^2<\Phi(x).$$
This statement concerns accepted steps only; it does not assert that a chosen
finite backtrack budget will accept a trial.

## Facts & Assumptions

**Given:** An admissible execution of [[alg-damped-newton-for-vector-residuals]], with its parameter $\alpha\in(0,1)$, a nonzero residual $F(x)$, and an accepted step size $t=\beta^j$ for some tested integer $j\ge0$.

[F1] [[alg-damped-newton-for-vector-residuals]]: a tested step is accepted only if $\Phi(x+t s)\le\Phi(x)-\alpha t\|F(x)\|_2^2$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $0<\beta<1$ and $j\ge0$, the tested size $t=\beta^j$ is positive. Because the Euclidean norm is defined by the square root of the sum of coordinate squares, $F(x)\ne0$ gives a nonzero coordinate and hence $\|F(x)\|_2^2>0$; with $\alpha>0$, this gives $\alpha t\|F(x)\|_2^2>0$. [given, algebra]

2.1 The acceptance condition in [F1] therefore gives $\Phi(x_+)\le\Phi(x)-\alpha t\|F(x)\|_2^2<\Phi(x)$, as claimed. [step 1.1, F1, algebra] ∎
