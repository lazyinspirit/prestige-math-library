---
id: thm-closed-hyperplanes-are-kernels-of-nonzero-functionals
kind: theorem
title: Closed hyperplanes are kernels of nonzero functionals
status: published
origin: pipeline
deps: [def-linear-hyperplane, thm-metric-closure-characterisation, def-dual-space-of-a-normed-space, def-metric-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Exercise 2.47
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

A linear hyperplane $H\subseteq X$ is closed if and only if $H=\ker f$ for
some nonzero $f\in X^*$.

## Facts & Assumptions

**Given:** A linear hyperplane $H\subseteq X$.

[F1] Since a linear hyperplane has codimension one, for any $x_0\notin H$ each $x\in X$ has a unique decomposition $x=h+t x_0$ with $h\in H$ and $t\in\mathbb K$ ([[def-linear-hyperplane]]).

[F2] Since $H$ is closed, $x_0\notin H$ implies $\delta:=\operatorname{dist}(x_0,H)>0$ ([[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $H$ is closed and choose $x_0\notin H$. By [F1], define $f(h+t x_0):=t$ on $X$. Uniqueness of the decomposition makes $f$ well defined and linear, with $f(x_0)=1$ and $\ker f=H$. [given, F1, choose, construct]

2.1 By [F2], $\delta=\operatorname{dist}(x_0,H)>0$. For $x=h+t x_0$ with $t\ne0$, the vector $x/t=x_0+h/t$ has norm at least $\delta$, since $-h/t\in H$. Hence $|f(x)|=|t|\le\delta^{-1}\|x\|$; the same bound is clear for $t=0$. Thus $f$ is bounded and nonzero, so $f\in X^*$ and $H=\ker f$. [F1, F2, step 1.1, algebra]

3.1 Conversely, if $H=\ker f$ with $f\in X^*$ nonzero, continuity makes $H$ closed. The induced nonzero map $X/H\to\mathbb K$ is injective and onto, so $\dim(X/H)=1$. [given, algebra] ∎
