---
id: fs-paracompact-spaces-are-normal
kind: false-statement
title: "Refuted: every paracompact space is normal"
status: published
origin: session
deps: [prop-compact-spaces-are-paracompact, def-normal-and-t4-spaces, def-topological-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement

Every paracompact space is normal.

## Facts & Assumptions

**Given:** The three-point set $X=\{a,b,c\}$ with topology $\{\varnothing,\{c\},\{a,c\},\{b,c\},X\}$.

[F1] A compact space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[F2] Normality separates every disjoint pair of closed sets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Refutation

**Proof technique:** direct.

1.1 The displayed family is a topology, and $X$ is compact because every open cover of this finite set already has a finite subcover. [construct]

2.1 Its closed sets include $\{a\}$ and $\{b\}$, while every open set containing $a$ contains $c$ and every open set containing $b$ contains $c$. [step 1.1]

3.1 Thus the disjoint closed sets $\{a\}$ and $\{b\}$ have no disjoint open neighbourhoods, so $X$ is not normal by [F2]. [F2, step 2.1]

4.1 By [F1] the compact space $X$ is paracompact, and step 3.1 refutes the displayed assertion. [F1, step 1.1, step 3.1] ∎
