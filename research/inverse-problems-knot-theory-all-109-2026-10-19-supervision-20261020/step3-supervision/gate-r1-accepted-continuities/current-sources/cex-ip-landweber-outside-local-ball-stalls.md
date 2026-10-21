---
id: cex-ip-landweber-outside-local-ball-stalls
kind: counterexample
title: Exact-data Landweber can stall without a local tangential-cone condition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-nonlinear-landweber-discrepancy
  - thm-ip-nonlinear-landweber-fejer-and-finite-stopping
  - def-ip-tangential-cone-condition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Exact solvability by itself is enough for exact-data nonlinear Landweber to converge from every initial point; no local tangential-cone or initial-ball hypothesis is needed.

## Statement references

[[thm-ip-nonlinear-landweber-fejer-and-finite-stopping|The local hypotheses and exact-data conclusion]]

## Facts & Assumptions

**Given:** The real Hilbert line $X=Y=\mathbb R$, $U=\mathbb R$, $F(x)=x^2-1$, exact solution $x^\dagger=1$, exact datum $y=0$, and initial point $x_0=0$.

[F1] [[alg-ip-nonlinear-landweber-discrepancy]] specifies the exact-data update $x_{n+1}=x_n+F'(x_n)^*(y-F(x_n))$. Here we study that formula as a bare recurrence, not as a run of the defined procedure: step 2.1 shows this instance violates its admissible local TCC hypothesis. A zero derivative gives a zero update.

[F2] [[def-ip-tangential-cone-condition]]: at a base point $x$ the local TCC requires $|F(x+h)-F(x)-F'(x)h|\le\eta|F(x+h)-F(x)|$ for every increment in its radius.

[F3] [[thm-ip-nonlinear-landweber-fejer-and-finite-stopping]]: its exact-data convergence conclusion assumes the specified outer ball, derivative bound, and uniform TCC on that ball.

## Counterexample

1.1 For every $x,h\in\mathbb R$, $F(x+h)-F(x)-2xh=h^2$, so $F$ is Fréchet differentiable with $F'(x)h=2xh$. Thus $F(1)=0=y$ is an exact solution and $F'(x_0)=F'(0)=0$. The Landweber update in [F1] gives $x_1=0$; induction gives $x_n=0$ and residual $|y-F(x_n)|=1$ for every $n$. The exact-data iterates therefore do not converge to a solution. [given, F1, algebra, induction]

2.1 For any proposed local radius $\delta>0$, choose $h=\delta/2>0$. At $x_0=0$, $F(h)-F(0)=h^2$ and $F'(0)h=0$, so [F2] would require $h^2\le\eta h^2$. Since $h^2>0$, this forces $\eta\ge1$. Thus no local TCC ball at this initial point has a constant $\eta<1/2$, violating the theorem's retained local hypothesis [F3]. [given, F2, F3, choose, algebra] ∎
