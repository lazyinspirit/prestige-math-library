---
id: ex-ip-relaxed-variable-requires-penalty
kind: example
title: An added variable is not identifiable without a penalty
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-differential-range-invariance
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

The original scalar model is $F(c)=c$ with exact datum $y\in\mathbb R$. Relax it by adding an unconstrained variable $z\in\mathbb R$ and using $\widetilde F(c,z)=c+z$, with penalty coordinate $P(c,z)=z$. The relaxed map satisfies the range-invariance factorization at $(0,0)$ with $K(a,b)=a+b$ and $r(c,z)=(c,z)$. For the exact datum, the unpenalized least-squares objective $J_0(c,z)=(c+z-y)^2$ has every pair with $c+z=y$ as a minimizer. For any fixed $\lambda>0$, adding $\lambda|P(c,z)|^2$ gives $J_\lambda(c,z)=(c+z-y)^2+\lambda z^2$, whose unique minimizer is $(y,0)$. This finite-dimensional example shows why an enlarged variable can require an explicit penalty; it asserts no general uniqueness result for other models.

## Example references

[[def-ip-differential-range-invariance|The range-invariance factorization]]

## Facts & Assumptions

**Given:** The original map $F(c)=c$, the relaxed variable $(c,z)\in\mathbb R^2$, the exact datum $y\in\mathbb R$, the relaxed map $\widetilde F(c,z)=c+z$, and $P(c,z)=z$.

[F1] [[def-ip-differential-range-invariance]]: range invariance at $(0,0)$ means $\widetilde F(c,z)-\widetilde F(0,0)=Kr(c,z)$ for fixed bounded linear $K$ and a map $r$.

## Verification

1.1 With $Z=\mathbb R^2$, $K(a,b)=a+b$ is bounded because $|a+b|\le\sqrt2\sqrt{a^2+b^2}$. Taking $r(c,z)=(c,z)$ gives $Kr(c,z)=c+z=\widetilde F(c,z)-\widetilde F(0,0)$, so the relaxed map satisfies [F1]. [F1, given, construct, algebra]

1.2 For every $c\in\mathbb R$, the pair $(c,y-c)$ makes $J_0(c,y-c)=0$. Since $J_0\ge0$, all these infinitely many pairs are global minimizers, so the relaxed variables are not identifiable from the exact datum alone. [given, algebra]

2.1 The pair $(y,0)$ makes $J_\lambda(y,0)=0$ and $J_\lambda\ge0$. If another pair minimizes, both nonnegative terms must vanish: $z=0$ because $\lambda>0$, and $c+z=y$ from the data term. Hence $c=y$, so $(y,0)$ is the unique minimizer. [given, algebra] ∎
