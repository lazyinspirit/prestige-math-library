---
id: fs-arbitrary-intersection-of-opens-is-open-top
kind: false-statement
title: "FALSE: an arbitrary intersection of open sets is open in every topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topological-space, def-standard-topologies, def-metrizable-space, lem-real-line-is-a-metric-space,
       def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-interval, def-abs-value,
       lem-of-abs-value, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive,
       lem-nat-nonzero-is-successor, def-countable, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "arbitrary intersections of opens are not open"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
pipeline_run: null
---

## Statement

**False claim:** in every topological space $(X,\mathcal{T})$
([[def-topological-space]]), if $\{\, U_i : i \in I \,\}$ is any family of open
sets then $\bigcap_{i \in I} U_i$ is open.

The topology axioms grant closure under **arbitrary unions** and under
intersections of **finitely many** open sets, and the asymmetry is not a
weakness of the axioms chosen: strengthening (T3) to arbitrary intersections
would exclude the spaces this subject exists to study. Two witnesses are given
below, one in a space with no metric in sight and one in $\mathbb{R}$ with its
usual topology, so that the failure cannot be blamed on exotic examples.

## Facts & Assumptions

**Given:** An infinite set $X$ carrying the cofinite topology and a point $p \in X$, with $I := X \setminus \{p\}$; and $\mathbb{R}$ with its usual topology, together with the family $U_k := B(0,\ 1/(k+1))$ for $k \in \mathbb{N}$, where $1/(k+1)$ abbreviates the inverse of the canonical natural $(k+1) \cdot 1_{\mathbb{R}}$.

[A1] A topology is closed under arbitrary unions and binary intersections; a set is open exactly when it belongs to the topology ([[def-topological-space]]).

[L1] In the cofinite topology the open sets are $\varnothing$ together with the sets of finite complement; a subset of a finite set is finite and a union of two finite sets is finite ([[def-standard-topologies]]); "infinite" means "not finite" ([[def-countable]]).

[L2] $\mathbb{R}$ with $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric space, $B(x,r) = (x-r,\ x+r)$, and the metric topology of $d_{\mathbb{R}}$ is the usual topology of $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-metric-space]] via [[def-metrizable-space]], [[def-interval]], [[def-metric-ball]]).

[L3] Every ball is an open set of the metric topology, and $U \subseteq \mathbb{R}$ is open in it exactly when every point of $U$ has a ball around it inside $U$ ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L4] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]); for $n \ge 1$ the canonical natural $n \cdot 1_{\mathbb{R}}$ is positive ([[lem-of-naturals-positive]]) and its inverse $1/n$ is positive ([[lem-of-inverse-positive]]).

[L5] $|u| \ge 0$, and $|u| = 0$ only for $u = 0$; for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L6] Every nonzero natural number is a successor, so $n \ge 1$ gives $n = m + 1$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

## Refutation

**Proof technique:** direct.

1.1 Since $X$ is infinite, $X \setminus \{p\}$ is infinite: were it finite, $X = \{p\} \cup (X \setminus \{p\})$ would be a union of two finite sets and hence finite. In particular $I \ne \varnothing$. [given, L1]

1.2 For each $x \in I$ the set $X \setminus \{x\}$ is open in the cofinite topology, its complement $\{x\}$ being finite; and $\bigcap_{x \in I} (X \setminus \{x\}) = X \setminus I = \{p\}$. [given, L1]

1.3 For every $k \in \mathbb{N}$ the natural $k+1$ satisfies $k + 1 \ge 1$, so $1/(k+1)$ is a positive real and $U_k = B(0,\ 1/(k+1))$ is a legitimate ball; each $U_k$ is open in the usual topology of $\mathbb{R}$. [given, L2, L3, L4]

1.4 $0 \in U_k$ for every $k$, since $|0 - 0| = 0 < 1/(k+1)$. [given, L4, L5]

1.5 Let $x \in \mathbb{R}$ with $x \ne 0$; then $|x| > 0$ by [L5], so [L4] gives a natural $n \ge 1$ with $1/n < |x|$, and [L6] writes $n = m+1$ with $m \in \mathbb{N}$; hence $|x - 0| = |x| > 1/(m+1)$, so $x \notin B(0,\ 1/(m+1)) = U_m$. [L4, L5, L6]

1.6 $\{0\}$ is not open in the usual topology of $\mathbb{R}$: a ball $B(0,r) = (-r, r)$ with $r > 0$ contains the point $1/n$ for a natural $n \ge 1$ with $1/n < r$ supplied by [L4], and $1/n > 0$, so $1/n \in B(0,r)$ and $1/n \ne 0$; hence no ball around $0$ lies inside $\{0\}$. [L2, L3, L4, L5]

2.1 $\{p\}$ is not open in the cofinite topology: it is nonempty, and its complement $X \setminus \{p\}$ is infinite by step 1.1, so it is neither $\varnothing$ nor a set of finite complement. [step 1.1, L1]

2.2 By steps 1.4 and 1.5, $\bigcap_{k \in \mathbb{N}} U_k = \{0\}$. [step 1.4, step 1.5]

3.1 By steps 1.2 and 2.1 the family $\{\, X \setminus \{x\} : x \in I \,\}$ consists of open subsets of the cofinite space $X$, is nonempty, and has intersection $\{p\}$, which is not open; so the claim fails already in a space defined without any reference to $\mathbb{R}$. [step 1.2, step 2.1, A1]

4.1 By steps 2.2 and 1.6 the sets $U_k$ are open in $\mathbb{R}$, their intersection is $\{0\}$, and $\{0\}$ is not open; with step 3.1 the false claim is refuted twice over, once in a non-metrizable setting and once in a metrizable one. [step 1.3, step 3.1, step 2.2, step 1.6, A1] ∎

## Remarks

- **What is true instead.** Intersections of finitely many open sets are open, which is axiom (T3) iterated ([[def-topological-space]]); and arbitrary intersections of *closed* sets are closed, which is its dual (C2). The intersection of an arbitrary family of open sets is in general only a set whose interior may be smaller than itself, and the interior operator exists precisely to name what survives.

- **The ℝ witness is the shape that recurs.** A decreasing family of balls of radii shrinking to zero has the centre as its intersection, and a singleton is open only in a space where the point is isolated. The index shift is the usual one for this library: the radii are $1/(k+1)$ for $k \in \mathbb{N}$, not $1/k$, since $\mathbb{N}$ contains $0$.

- **The corresponding failure inside $\mathbb{R}$ alone is already published** ([[fs-arbitrary-intersection-of-open-is-open]]), stated there in the order-native vocabulary of the topology of $\mathbb{R}$. The present item is the statement about topological spaces in general, which that page explicitly declined to make.
