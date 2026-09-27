---
id: thm-closed-hyperplanes-are-kernels-of-nonzero-functionals
kind: theorem
title: Closed hyperplanes are kernels of nonzero functionals
status: published
origin: pipeline
deps: [def-linear-hyperplane, thm-geometric-hahn-banach-for-subspaces, def-dual-space-of-a-normed-space, def-metric-topology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Exercise 2.47
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

A linear hyperplane $H\subseteq X$ is closed if and only if $H=\ker f$ for
some nonzero $f\in X^*$.

## Facts & Assumptions

**Given:** A linear hyperplane $H\subseteq X$.

[F1] A point outside the closure of a subspace is separated from it by a continuous functional vanishing on that subspace ([[thm-geometric-hahn-banach-for-subspaces]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $H$ is closed and choose $x\notin H$. By [F1] there is $f\in X^*$ with $f|_H=0$ and $f(x)=1$. Thus $H\subseteq\ker f$. [given, F1, choose]

2.1 Since $X/H$ has dimension one, a proper subspace containing $H$ cannot strictly contain $H$. As $f(x)=1$, $\ker f$ is proper; hence $\ker f=H$. [step 1.1, given]

3.1 Conversely, if $H=\ker f$ with $f\in X^*$ nonzero, continuity makes $H$ closed. The induced nonzero map $X/H\to\mathbb K$ is injective and onto, so $\dim(X/H)=1$. [given, algebra] ∎
