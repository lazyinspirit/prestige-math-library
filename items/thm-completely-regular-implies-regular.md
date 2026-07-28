---
id: thm-completely-regular-implies-regular
kind: theorem
title: "Every completely regular space is regular, and every Tychonoff space is $T_3$"
status: draft
origin: session
deps: [def-completely-regular-and-tychonoff-spaces, def-regular-and-t3-spaces,
       def-t0-and-t1-spaces, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interval, def-subspace-topology-top, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "completely regular implies regular"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$
is completely regular ([[def-completely-regular-and-tychonoff-spaces]]) then $X$
is regular ([[def-regular-and-t3-spaces]]). Consequently every Tychonoff space is
$T_3$, being completely regular and $T_1$ ([[def-t0-and-t1-spaces]]).

This page does not prove the converse and does not assert it: a regular space
that is not completely regular would need a construction this page does not
carry, so whether the implication reverses is left open here.

## Facts & Assumptions

**Given:** A completely regular space $(X,\mathcal{T})$, a closed set $C \subseteq X$ and a point $x_0 \in X \setminus C$.

[A1] Complete regularity supplies a continuous $f : X \to [0,1]$ with $f(x_0) = 1$ and $f(y) = 0$ for every $y \in C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[A2] $X$ is regular when every such pair $(C, x_0)$ admits disjoint open $U \ni x_0$ and $V \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).

[L2] $f^{-1}[W]$ is open in $X$ for every open $W$ in the target ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L3] The sets $(1/2, \infty)$ and $(-\infty, 1/2)$ are open in the usual topology of $\mathbb{R}$, they are disjoint, and $0 < 1/2 < 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $f$ as in [A1], and put $W_1 := (1/2,\infty) \cap [0,1]$ and $W_0 := (-\infty,1/2) \cap [0,1]$, which are open in $[0,1]$ and disjoint by [L1] and [L3]. [A1, L1, L3]

1.2 Put $U := f^{-1}[W_1]$ and $V := f^{-1}[W_0]$; both are open in $X$ by [L2]. [A1, L2]

2.1 $x_0 \in U$, since $f(x_0) = 1 > 1/2$ and $1 \in [0,1]$. [step 1.1, step 1.2, A1, L3]

2.2 $C \subseteq V$, since $f(y) = 0 < 1/2$ and $0 \in [0,1]$ for every $y \in C$. [step 1.1, step 1.2, A1, L3]

2.3 $U \cap V = \varnothing$: a point of both would satisfy $f(x) > 1/2$ and $f(x) < 1/2$, which is impossible by trichotomy of the order of $\mathbb{R}$. [step 1.1, step 1.2, L3]

3.1 By steps 1.2, 2.1, 2.2 and 2.3 the pair $(C, x_0)$ is separated by disjoint open sets, and since $C$ and $x_0$ were arbitrary, $X$ is regular by [A2]. [step 1.2, step 2.1, step 2.2, step 2.3, A2]

4.1 If in addition $X$ is $T_1$ then $X$ is regular and $T_1$, that is $T_3$; so every Tychonoff space is $T_3$. [step 3.1, A2] ∎

## Remarks

- **The threshold $1/2$ is arbitrary.** Any $t$ with $0 < t < 1$ works, and the same two-set construction applied to a function with values in $\mathbb{R}$ rather than $[0,1]$ gives the same conclusion; the normalisation of [[def-completely-regular-and-tychonoff-spaces]] is used only to know that $f(x_0)$ and the values on $C$ lie on opposite sides of the threshold.

- **What the theorem does not give.** It says nothing about separating two closed sets, and complete regularity does not imply normality. In the other direction, a normal $T_1$ space *is* completely regular, but that is Urysohn's lemma and is the one arrow of the classical chain this page cannot reach ([[rem-separation-axiom-conventions]]).
