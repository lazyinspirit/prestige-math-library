---
id: thm-identity-theorem-for-real-analytic-functions-on-an-interval
kind: theorem
title: "Two real-analytic functions on an open interval that agree on a set with an accumulation point in that interval agree throughout the interval"
status: published
origin: session
deps: [lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical, def-real-analytic-function, thm-connected-subsets-of-r-are-intervals, def-connected-r, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Analytic function, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Analytic_function"}]}
pipeline_run: null
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval and let $f,g:I\to\mathbb R$ be real analytic. If the agreement set $\{x\in I:f(x)=g(x)\}$ has an accumulation point $c$ lying inside $I$, then $f=g$ throughout $I$.

## Facts & Assumptions

**Given:** The interval, functions, agreement set, and interior accumulation point in the statement.

[L1] Subtracting local power-series representations shows directly that $h:=f-g$ is real analytic ([[def-real-analytic-function]]).

[L2] At a zero of a real-analytic function, the zero is isolated unless the function vanishes on a neighbourhood ([[lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical]]).

[L3] Every interval is connected: it has no decomposition into two nonempty separated sets, where each set must avoid the closure of the other ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L4] Local power-series sums are continuous ([[cor-power-series-sums-are-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Put $h:=f-g$. By [L1], $h$ is real analytic. The accumulating zeros and [L4] give $h(c)=0$, and this zero is not isolated; hence [L2] makes $h$ identically zero on a neighbourhood of $c$. [given, L1, L2, L4]

2.1 Let $V$ be the set of points of $I$ having a neighbourhood in $I$ on which $h$ vanishes. Step 1.1 makes $V$ nonempty, and its definition makes it relatively open. [step 1.1]

3.1 The complement $I\setminus V$ is also relatively open. Indeed, if $h(x)\ne0$, continuity gives a neighbourhood containing no zero and hence no point of $V$; if $h(x)=0$ but $x\notin V$, [L2] makes $x$ an isolated zero, and a sufficiently small neighbourhood again contains no point of $V$. [step 2.1, L2, L4]

4.1 Steps 2.1 and 3.1 make $V$ and $I\setminus V$ separated: every point of either set has a real neighbourhood disjoint from the other, so neither set meets the closure of the other. If $I\setminus V$ were nonempty, they would therefore disconnect the connected interval $I$, contrary to [L3]. Thus $V=I$ and $h=0$ throughout $I$, so $f=g$. [step 2.1, step 3.1, L3] ∎
