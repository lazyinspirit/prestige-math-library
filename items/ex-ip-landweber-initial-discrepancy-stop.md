---
id: ex-ip-landweber-initial-discrepancy-stop
kind: example
title: The initial residual can already meet the discrepancy threshold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-nonlinear-landweber-discrepancy
  - def-ip-tangential-cone-condition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Take $X=Y=\mathbb R$ with the usual real Hilbert structure, $U=\mathbb R$, $F(x)=x$, $x_0=x^\dagger=0$, $y=F(x^\dagger)=0$, noise level $\delta=1$, noisy datum $y^\delta=1$, discrepancy parameter $\tau>2$, and update budget $M=0$. The local Landweber assumptions hold with any radius $r>0$ and $\eta=0$, and the initial residual is $1\le\tau\delta$. The algorithm therefore returns `stopped` at index zero with iterate $0$ and residual $1$, before consulting the zero update budget.

## Example references

[[alg-ip-nonlinear-landweber-discrepancy|Landweber update, stopping test, and budget order]]

## Facts & Assumptions

**Given:** The scalar real Hilbert space $X=Y=\mathbb R$, $U=\mathbb R$, $F(x)=x$, $x_0=x^\dagger=0$, $y=0$, $\delta=1$, $y^\delta=1$, $\tau>2$, and $M=0$.

[F1] [[alg-ip-nonlinear-landweber-discrepancy]]: the algorithm tests $\|y^\delta-F(x_k^\delta)\|_Y\le\tau\delta$ before testing whether $k=M$.

[F2] [[def-ip-tangential-cone-condition]]: the local TCC remainder is $F(x+h)-F(x)-F'(x)h$ and its required bound is relative to $\|F(x+h)-F(x)\|$.

## Verification

1.1 The map is continuously Fréchet differentiable with $F'(x)h=h$, so $\|F'(x)\|=1$. Its TCC remainder vanishes for every pair, hence the uniform TCC holds with $\eta=0$; $\overline B_{2r}(0)\subset\mathbb R$ and $x^\dagger=0\in\overline B_r(0)$ for any $r>0$. Also $|y^\delta-y|=1=\delta$. [given, F2, algebra]

2.1 At the initial point, $\|y^\delta-F(x_0)\|=|1-0|=1\le\tau\delta$. By [F1] the procedure returns `stopped` at $k=0$ with iterate $x_0=0$ and residual $1$ before the $M=0$ budget condition is checked. [given, F1, algebra] ∎
