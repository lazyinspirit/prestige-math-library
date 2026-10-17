---
id: ex-nonlinear-exponential-kinetics-one-step
kind: example
title: One regularized Gauss–Newton step for exponential reaction kinetics
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-iteratively-regularized-gauss-newton-step
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-exponential-reciprocal-and-positivity
  - def-natural-logarithm
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

For a first-order reaction with conversion fraction $F(c)=1-e^{-c}$ at unit
time, use $X=Y=U=\mathbb R$, true rate $c^\dagger=\log 2$, exact datum
$y=\tfrac12$, initial rate $c_0=0$, $\alpha_0=\tfrac14$, $q=\tfrac12$,
discrepancy factor $\tau=2$, and budget $N=1$. For
$0<\delta\le\tfrac1{10}$ and $|\varepsilon|\le\delta$, the datum
$y^\delta=\tfrac12+\varepsilon$ does not meet the initial discrepancy stopping condition. The
single update gives $c_1=\tfrac25+\tfrac45\varepsilon$; the procedure returns
this state with status `discrepancy` if its post-update residual is at most
$2\delta$, and otherwise with status `budget-exhausted`.

## Facts & Assumptions

**Given:** $X=Y=U=\mathbb R$, $F(c)=1-e^{-c}$, $c^\dagger=\log 2$,
$c_0=0$, $\varepsilon\in\mathbb R$, $|\varepsilon|\le\delta$,
$0<\delta\le1/10$, $\tau=2$, $\alpha_0=1/4$, $q=1/2$, and $N=1$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the Hilbert adjoint in the assigned step.

[F1] [[alg-iteratively-regularized-gauss-newton-step]]: The scalar step is
$c_1=c_0+(F'(c_0)^2+\alpha_0)^{-1}F'(c_0)(y^\delta-F(c_0))$.

[F2] [[thm-derivative-of-exponential]]: $(e^x)'=e^x$.

[F3] [[cor-exponential-reciprocal-and-positivity]]: $e^c>0$ for real $c$ and $e^{-c}=1/e^c$.

[F4] [[thm-chain-rule]]: The derivative of a composition is the product of the outer derivative and the inner derivative.

[F5] [[thm-algebra-of-derivatives]]: A scalar multiple has derivative equal to that scalar times the original derivative.

[F6] [[def-natural-logarithm]]: $\log x$ is the inverse of the exponential for $x>0$, so $e^{\log2}=2$.

## Verification

**Given:** The model and parameter values above.

1.1 By [F6], $e^{\log2}=2$, and [F3] gives $e^{-\log2}=1/2$; hence $F(c^\dagger)=1/2$ and $F(c_0)=0$. The derivative of $c\mapsto-c$ is $-1$ by its difference quotient. Therefore [F2], [F4], and [F5] give $(e^{-c})'=-e^{-c}$ and $F'(c)=e^{-c}$, so $F'(0)=1$. [given, F2, F3, F4, F5, F6, algebra]

2.1 The initial residual satisfies $|y^\delta-F(c_0)|\ge2/5$, while $\tau\delta\le1/5$, so the discrepancy test does not stop at $c_0$. Substitution into [F1] gives $c_1=0+(1+1/4)^{-1}(1/2+\varepsilon)=\tfrac25+\tfrac45\varepsilon$. Because $|\varepsilon|\le1/10$, $c_1\ge\tfrac25-\tfrac2{25}=\tfrac8{25}>0$, so the returned rate lies in the physical rate domain $[0,\infty)$. [A1, F1, step 1.1, given, algebra]

2.2 Since the cap is $N=1$ and $c_1\in U=\mathbb R$, the next check returns status `discrepancy` if its residual is at most $2\delta$; otherwise the cap branch returns `budget-exhausted`. In both cases the returned state is $c_1$. [F1, step 2.1, given] ∎
