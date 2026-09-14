---
id: lem-moore-topology-is-nonseparable
kind: lemma
title: Every uncountable Moore subspace is nonseparable
status: draft
origin: pipeline
deps:
  - def-moore-l-space-topology
  - def-separable-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 7, printed p. 22"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

If $X\subseteq\omega_1$ is uncountable, then $(X,\tau[X])$ is not separable.

## Facts & Assumptions

**Given:** An uncountable $X\subseteq\omega_1$.

[F1] [[def-moore-l-space-topology]] says that $W_\beta\cap X$ is clopen, contains $\beta$, and contains no ordinal below $\beta$.

[F2] [[def-separable-space]] says that a space is separable when it has a countable dense subset.

## Proof

**Proof technique:** direct.

1.1 Let $D\subseteq X$ be countable.  Its supremum is a countable ordinal, so uncountability of $X$ gives $\beta\in X$ with $\sup D<\beta$. [given]

2.1 By [F1], $W_\beta\cap X$ is an open neighborhood of $\beta$ and every one of its points is at least $\beta$.  Hence it is disjoint from $D$, so $D$ is not dense. [F1, step 1.1]

3.1 Since every countable $D\subseteq X$ fails to be dense, [F2] proves that $(X,\tau[X])$ is nonseparable.  The assertion deliberately excludes countable $X$; for $X=\varnothing$ or a singleton the displayed argument has no $\beta$ above $D$ and no nonseparability conclusion is claimed. [F2, step 2.1] ∎
