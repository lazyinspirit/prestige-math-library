---
id: ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy
kind: example
title: "A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-t0-and-t1-spaces, def-hausdorff-space,
       def-urysohn-space, def-regular-and-t3-spaces, def-normal-and-t4-spaces,
       def-completely-normal-and-perfectly-normal-spaces,
       def-completely-regular-and-tychonoff-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-metrizable-space, thm-t1-iff-singletons-are-closed,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the two extremes of the hierarchy"
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Example

Let $X$ be a set with the **discrete** topology
$\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$, and let $Y = \{a,b\}$ with
$a \ne b$ carry the **indiscrete** topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$ ([[def-standard-topologies]]).
Then:

1. $(X, \mathcal{T}_{\mathrm{disc}})$ satisfies **every** axiom named on the main
   page: it is $T_1$, Hausdorff, Urysohn, regular, completely regular, normal,
   completely normal and perfectly normal, hence $T_0$, $T_1$, $T_2$,
   $T_{2\frac12}$, $T_3$, $T_{3\frac12}$, $T_4$, $T_5$ and $T_6$.
2. $(Y, \mathcal{T}_{\mathrm{ind}})$ is **regular, completely regular, normal,
   completely normal and perfectly normal**, and it is **not $T_0$**, hence not
   $T_1$, not Hausdorff and not Urysohn; and it is not metrizable
   ([[def-metrizable-space]]).

Clause 2 is the sharpest form of the observation that the unnumbered adjectives
carry no information about points: a space may satisfy all five of them and still
fail to distinguish any pair of its points. That is exactly what the numerals
$T_3$ to $T_6$ are for.

## Facts & Assumptions

**Given:** A set $X$ with $\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$; the set $Y = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$; subsets $A, B$ of the space under discussion; and $\mathbb{R}$ with its usual topology.

[A1] In $(X,\mathcal{T}_{\mathrm{disc}})$ every subset is open and every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).

[A2] In $(Y,\mathcal{T}_{\mathrm{ind}})$ the open sets are $\varnothing$ and $Y$, and so are the closed sets ([[def-standard-topologies]], [[def-topological-space]]).

[L1] The axioms: $T_0$ and $T_1$ ([[def-t0-and-t1-spaces]]); Hausdorff ([[def-hausdorff-space]]); Urysohn ([[def-urysohn-space]]); regular ([[def-regular-and-t3-spaces]]); completely regular ([[def-completely-regular-and-tychonoff-spaces]]); normal ([[def-normal-and-t4-spaces]]); completely normal and perfectly normal ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L2] $A$ and $B$ are separated when $\overline{A} \cap B = A \cap \overline{B} = \varnothing$; separated sets are disjoint ([[def-separated-sets]]).

[L3] $\overline{A} = A$ when $A$ is closed, and $\overline{A}$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L4] A set is a $G_\delta$ when it is an intersection of a sequence of open sets; every open set is a $G_\delta$, by the constant sequence ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

[L6] A metrizable space is Hausdorff, so a space that is not Hausdorff is not metrizable ([[def-metrizable-space]]).

[L7] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]]).

## Verification

**Proof technique:** direct.

1.1 In $(X,\mathcal{T}_{\mathrm{disc}})$ every singleton is closed by [A1], so the space is $T_1$ by [L7], hence $T_0$. [A1, L7]

1.2 In $(X,\mathcal{T}_{\mathrm{disc}})$ distinct points $x \ne y$ have the disjoint open neighbourhoods $\{x\}$ and $\{y\}$, whose closures are themselves by [A1] and [L3]; so the space is Hausdorff and Urysohn. [A1, L1, L3]

1.3 In $(X,\mathcal{T}_{\mathrm{disc}})$ let $A$ and $B$ be separated, hence disjoint by [L2]; then $A$ and $B$ are themselves disjoint open sets containing them, so the space is completely normal, and in particular normal, every pair of disjoint closed sets being separated by [L2] and [L3]. [A1, L1, L2, L3]

1.4 In $(X,\mathcal{T}_{\mathrm{disc}})$ let $C$ be closed and $x_0 \notin C$; the function $f$ with $f(x_0) = 1$ and $f(x) = 0$ for $x \ne x_0$ takes values in $[0,1]$ and is continuous by [L5], and it satisfies $f(x_0) = 1$ and $f(y) = 0$ for every $y \in C$, since $x_0 \notin C$, so the space is completely regular; taking $U := \{x_0\}$ and $V := C$ shows it is regular. [A1, L1, L5]

1.5 In $(Y,\mathcal{T}_{\mathrm{ind}})$ the only open set containing $a$ is $Y$, which also contains $b$, and likewise with $a$ and $b$ exchanged; so no open set contains exactly one of them and the space is not $T_0$, hence not $T_1$, not Hausdorff and not Urysohn, and not metrizable by [L6]. [A2, L1, L6]

1.6 In $(Y,\mathcal{T}_{\mathrm{ind}})$ the closed sets are $\varnothing$ and $Y$ by [A2], so $\overline{\varnothing} = \varnothing$ and $\overline{A} = Y$ for every nonempty $A$, the smallest closed superset of a nonempty set being $Y$. [A2, L3]

1.7 In $(Y,\mathcal{T}_{\mathrm{ind}})$ let $C$ be closed with $y_0 \notin C$; then $C \ne Y$, so $C = \varnothing$ by [A2], and the constant function $1$ is continuous by [L5] with $f(y_0) = 1$ and $f[C] = \varnothing \subseteq \{0\}$ vacuously, so the space is completely regular; and $U := Y$, $V := \varnothing$ are disjoint open sets separating $y_0$ from $C$, so it is regular. [A2, L1, L5]

2.1 In $(X,\mathcal{T}_{\mathrm{disc}})$ every closed set is open by [A1], hence a $G_\delta$ by [L4]; with step 1.3 the space is perfectly normal. [step 1.3, A1, L4]

2.2 In $(Y,\mathcal{T}_{\mathrm{ind}})$ a separated pair $A, B$ has an empty member: if both were nonempty then $\overline{A} \cap B = Y \cap B = B \ne \varnothing$ by step 1.6, contradicting [L2]. [step 1.6, L2]

3.1 By steps 1.1 to 1.5 the discrete space satisfies every axiom listed in claim 1, and the numbered forms follow, each numeral being its adjective together with $T_1$, which holds by step 1.1. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4]

3.2 In $(Y,\mathcal{T}_{\mathrm{ind}})$, given a separated pair with, say, $A = \varnothing$, the open sets $U := \varnothing$ and $V := Y$ separate them, and symmetrically when $B = \varnothing$; so the space is completely normal, and normal, disjoint closed sets being separated by [L2] and step 1.6. [step 1.6, step 2.2, A2, L1, L2]

4.1 In $(Y,\mathcal{T}_{\mathrm{ind}})$ both closed sets $\varnothing$ and $Y$ are open by [A2], hence $G_\delta$ by [L4]; with step 3.2 the space is perfectly normal. [step 3.2, A2, L4]

5.1 Steps 3.2, 4.1, 1.7 and 1.5 are claim 2, and step 3.1 is claim 1. [step 3.1, step 1.5, step 3.2, step 4.1, step 1.7] ∎

## Remarks

- **The two extremes bracket the whole page.** Every topology on a set lies between the indiscrete and the discrete one in the comparison order ([[def-standard-topologies]]), and the two ends of that order sit at opposite ends of the separation hierarchy: the discrete topology satisfies everything, the indiscrete topology on two points satisfies every unnumbered adjective and no numbered axiom at all.

- **The indiscrete space is the reason the numerals exist.** It refutes at a stroke any reading of "normal", "completely normal", "perfectly normal", "regular" or "completely regular" as implying a separation of *points*; the main page records the normal case as a false statement, and the argument here shows the same for the other four adjectives.

- **The discrete space is metrizable and the indiscrete one is not.** [[def-metrizable-space]] records the second, the failure of the Hausdorff condition being an obstruction to metrizability; the first is not needed here, since every axiom was verified directly rather than quoted from the metric theorems of the main page.
