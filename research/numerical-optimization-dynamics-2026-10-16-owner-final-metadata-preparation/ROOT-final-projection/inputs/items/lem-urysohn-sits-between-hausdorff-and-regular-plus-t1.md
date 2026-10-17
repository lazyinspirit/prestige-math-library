---
id: lem-urysohn-sits-between-hausdorff-and-regular-plus-t1
kind: lemma
title: "Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-urysohn-space, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-interior-closure-boundary-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and points $x, y \in X$ with $x \ne y$.

[A1] $X$ is Urysohn when distinct points have open neighbourhoods with disjoint closures ([[def-urysohn-space]]).

[A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $X$ is $T_1$ when for distinct $x, y$ there are open $U \ni x$ with $y \notin U$ and open $V \ni y$ with $x \notin V$; every $T_1$ space is $T_0$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] $X$ is regular exactly when for every $x$ and every open $U \ni x$ there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]], clause (b)).

[L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Urysohn and let $x \ne y$; [A1] gives open $U \ni x$ and $V \ni y$ with $\overline{U} \cap \overline{V} = \varnothing$. [A1, assume-hyp]

1.2 Assume $X$ is Hausdorff and let $x \ne y$; [A2] gives disjoint open $U \ni x$ and $V \ni y$. [A2, assume-hyp]

1.3 Assume $X$ is regular and $T_1$ and let $x \ne y$; by [L1] the set $\{y\}$ is closed, so $U_0 := X \setminus \{y\}$ is open by [L3] and contains $x$. [L1, L3, assume-hyp]

2.1 Under step 1.1: $U \cap V \subseteq \overline{U} \cap \overline{V} = \varnothing$ by [L3], so $U$ and $V$ are disjoint open neighbourhoods of $x$ and $y$ and $X$ is Hausdorff, which is claim 1. [step 1.1, A2, L3]

2.2 Under step 1.2: $y \notin U$ and $x \notin V$, since $U \cap V = \varnothing$ with $y \in V$ and $x \in U$; so $U$ and $V$ witness the $T_1$ condition and $X$ is $T_1$, hence $T_0$, which is claim 2. [step 1.2, A3]

2.3 Under step 1.3: [L2] applied to $x \in U_0$ gives an open $U$ with $x \in U \subseteq \overline{U} \subseteq U_0 = X \setminus \{y\}$, so $y \notin \overline{U}$. [step 1.3, L2]

3.1 Under step 2.3: $X \setminus \overline{U}$ is open by [L3] and contains $y$, so [L2] applied to it gives an open $V$ with $y \in V \subseteq \overline{V} \subseteq X \setminus \overline{U}$. [step 2.3, L2, L3]

4.1 Under step 3.1: $\overline{U} \cap \overline{V} = \varnothing$, since $\overline{V} \subseteq X \setminus \overline{U}$; so $U$ and $V$ witness the Urysohn condition at the pair $x, y$ and $X$ is Urysohn, which is claim 3. [step 3.1, A1]

5.1 Claims 1, 2 and 3 are steps 2.1, 2.2 and 4.1, and composing them gives the chain $T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$. [step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **Claim 3 is where the $T_1$ hypothesis earns its place.** Regularity separates a point from a *closed* set, and the closed set used in the proof is the singleton $\{y\}$; without $T_1$ that singleton need not be closed and the argument has nothing to start from. The indiscrete topology on two points is regular and not Urysohn, which shows the hypothesis cannot simply be dropped.

- **Regularity is applied twice, and the second application is the whole point.** The first shrink puts $y$ outside $\overline{U}$; the second separates $y$ from the closed set $\overline{U}$, which is what upgrades disjointness of the sets to disjointness of their closures.

- **Claim 2 explains why the Hausdorff condition alone is often quoted as "points are closed".** By [[thm-t1-iff-singletons-are-closed]] the two are not the same condition; $T_1$ is strictly weaker, and the cofinite topology on an infinite set separates them.
