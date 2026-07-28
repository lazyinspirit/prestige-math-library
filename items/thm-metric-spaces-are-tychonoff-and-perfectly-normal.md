---
id: thm-metric-spaces-are-tychonoff-and-perfectly-normal
kind: theorem
title: "In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal"
status: draft
origin: session
deps: [thm-metric-spaces-are-completely-normal, def-completely-regular-and-tychonoff-spaces,
       def-completely-normal-and-perfectly-normal-spaces, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-metric-bounded-diameter,
       lem-distance-to-set-is-lipschitz, thm-metric-closure-characterisation,
       def-metric-continuity, thm-metric-continuity-characterisations,
       def-metrizable-space, def-metric-space, def-metric-topology,
       def-canonical-natural, cor-archimedean-reciprocal, lem-nat-nonzero-is-successor,
       def-max-min, lem-finite-set-has-max, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-t0-and-t1-spaces,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metric spaces are Tychonoff and perfectly normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:

1. **Every closed set is a zero set.** For closed $C \subseteq X$ there is a
   continuous $f : X \to \mathbb{R}$ with $C = Z(f)$
   ([[def-zero-sets-and-cozero-sets]]); for $C \ne \varnothing$ one may take
   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
   the constant function $1$.
2. **Every closed set is a $G_\delta$**
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \ne \varnothing$,
   $$C \;=\; \bigcap_{n \in \mathbb{N}} \{\, x \in X : d(x,C) < 1/(n+1) \,\},$$
   an intersection of open sets, and $\varnothing$ is open hence a $G_\delta$.
3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):
   for closed $C$ and $x_0 \notin C$ the function
   $f(x) := \min\{1,\ d(x,C)/r\}$ with $r := d(x_0,C)$ is continuous, takes the
   value $1$ at $x_0$ and the value $0$ on $C$, when $C \ne \varnothing$; for
   $C = \varnothing$ the constant function $1$ serves.
4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$,
   $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$.

**No choice principle is used anywhere below.**

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a closed set $C \subseteq X$, a point $x_0 \in X \setminus C$, and $\mathbb{R}$ with its usual topology.

[L1] For nonempty $S \subseteq X$ the distance $d(x,S)$ is defined, is $\ge 0$, and $\overline{S} = \{\, x : d(x,S) = 0 \,\}$ ([[def-metric-bounded-diameter]], [[thm-metric-closure-characterisation]], claim 1).

[L2] $|d(x,S) - d(y,S)| \le d(x,y)$ for nonempty $S$ ([[lem-distance-to-set-is-lipschitz]]).

[L3] A map between metric spaces satisfying an inequality $|g(x) - g(y)| \le L\, d(x,y)$ with $L > 0$ is continuous in the $\varepsilon$-$\delta$ sense, by $\delta := \varepsilon / L$, and is therefore continuous as a map of topological spaces ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], clause (b), [[def-metrizable-space]]).

[L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

[L5] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$, and every nonzero natural is a successor, so $k = n+1$ for some $n \in \mathbb{N}$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[def-canonical-natural]]).

[L6] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[def-max-min]], [[lem-finite-set-has-max]]); and $[0,1]$ is the set of reals $t$ with $0 \le t \le 1$ ([[def-interval]]).

[L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

[L8] Every metric space is completely normal, hence normal ([[thm-metric-spaces-are-completely-normal]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $C \ne \varnothing$ and put $g(x) := d(x,C)$; then $g$ is continuous by [L2] and [L3] with $L = 1$. [L1, L2, L3, assume-hyp]

1.2 If $C = \varnothing$ then the constant function $1$ is continuous and has zero set $\varnothing = C$, since $1 \ne 0$. [L3, L4]

2.1 Under step 1.1: $Z(g) = \{\, x : d(x,C) = 0 \,\} = \overline{C} = C$, the last equality because $C$ is closed. [step 1.1, L1, L4]

2.2 Under step 1.1: for each $n$ the set $W_n := \{\, x : d(x,C) < 1/(n+1) \,\}$ is open, since for $x \in W_n$ and $t := 1/(n+1) - d(x,C) > 0$ any $y$ with $d(x,y) < t$ has $d(y,C) \le d(x,C) + d(x,y) < 1/(n+1)$ by [L2]. [step 1.1, L2]

3.1 By steps 2.1 and 1.2 every closed subset of $X$ is a zero set, which is claim 1. [step 2.1, step 1.2]

3.2 Under step 1.1: $C \subseteq \bigcap_n W_n$, since $d(x,C) = 0 < 1/(n+1)$ for $x \in C$ by [L1] and step 2.1. [step 2.1, step 2.2, L1]

3.3 Under step 1.1: if $x \notin C$ then $d(x,C) > 0$ by [L1] and step 2.1, so [L5] gives $n$ with $1/(n+1) < d(x,C)$ and hence $x \notin W_n$. [step 2.1, step 2.2, L1, L5]

3.4 Under step 1.1 with $x_0 \notin C$: $r := d(x_0,C) > 0$ by [L1] and step 2.1, and $f(x) := \min\{1,\ d(x,C)/r\}$ takes values in $[0,1]$ by [L1] and [L6]. [step 2.1, L1, L6]

4.1 Steps 3.2 and 3.3 give $C = \bigcap_n W_n$ for nonempty closed $C$, and $\varnothing$ is open hence a $G_\delta$ by [L4]; this is claim 2. [step 3.2, step 3.3, L4]

4.2 Under step 3.4: $|\min\{1,u\} - \min\{1,v\}| \le |u - v|$ for all reals $u,v$, since if both are at most $1$ the two sides are equal, if both exceed $1$ the left side is $0$, and if $u \le 1 < v$ then the left side is $1 - u$, which is at most $v - u$, the remaining case $v \le 1 < u$ being the same with $u$ and $v$ exchanged; hence $|f(x) - f(y)| \le |d(x,C) - d(y,C)|/r \le d(x,y)/r$ and $f$ is continuous by [L3] with $L = 1/r$. [step 3.4, L2, L3, L6]

4.3 Under step 3.4: $f(x_0) = \min\{1, r/r\} = \min\{1,1\} = 1$, and $f(y) = \min\{1, 0\} = 0$ for $y \in C$ since $d(y,C) = 0$. [step 3.4, L1, L6]

5.1 By steps 4.2 and 4.3, and by step 1.2 for the case $C = \varnothing$, the space $X$ is completely regular, which is claim 3. [step 1.2, step 4.2, step 4.3]

6.1 A metrizable space $Y$ is completely regular by step 5.1 applied to any inducing metric, and it is $T_1$ by [L7], so it is Tychonoff; it is normal by [L8] and every closed subset of it is a $G_\delta$ by step 4.1, so it is perfectly normal. [step 4.1, step 5.1, L7, L8]

7.1 Being perfectly normal and $T_1$, such a $Y$ is $T_6$; it is $T_5$ and $T_4$ by [L8] and $T_1$, it is $T_{3\frac12}$ by step 6.1, and it is $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$ by the implications already proved on this page; this is claim 4. [step 6.1, L7, L8] ∎

## Remarks

- **Claim 1 is the sharp form and claim 2 is its shadow.** A zero set is always a $G_\delta$ ([[def-zero-sets-and-cozero-sets]]), so claim 2 follows from claim 1; it is proved separately here because the explicit presentation $\bigcap_n \{x : d(x,C) < 1/(n+1)\}$ is the one quoted later, and because it makes visible that the index runs from $n = 0$, where the radius is $1$.

- **The empty closed set is not a nuisance to be waved away.** $d(x,\varnothing)$ is undefined in this library, there being no infimum of the empty set ([[def-metric-bounded-diameter]]), so each of the three claims is discharged separately at $C = \varnothing$ by a constant function or by openness.

- **What this does *not* prove.** It says nothing about which non-metrizable spaces are perfectly normal, and it gives no metrization theorem in the other direction: exhibiting a metric is the only way a space is shown metrizable here ([[def-metrizable-space]]).
