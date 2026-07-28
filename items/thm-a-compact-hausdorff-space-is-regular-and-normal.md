---
id: thm-a-compact-hausdorff-space-is-regular-and-normal
kind: theorem
title: "A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$"
status: draft
origin: session
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact, def-regular-and-t3-spaces,
       def-normal-and-t4-spaces, def-t0-and-t1-spaces, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-topological-space]
justified_by: []
aliases: [thm-compact-hausdorff-is-normal]
landmark: true
short: "compact Hausdorff implies regular and normal"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a compact ([[def-compact-space]]) Hausdorff
([[def-hausdorff-space]]) topological space. Then:

1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);
2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);
3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.

Following [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],
*regular* and *normal* name the separation conditions alone and the numerals
$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the
$T_1$ half, and it is stated separately for that reason.

**Nothing stronger is claimed.** In particular it is not asserted here that a
compact Hausdorff space is completely regular
([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no
continuous real-valued function is produced anywhere below.

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $X$.

[A1] $X$ is regular when for every closed $C \subseteq X$ and every $x \in X \setminus C$ there are disjoint open $U \ni x$ and $V \supseteq C$; the case $C = \varnothing$ is met by $U = X$ and $V = \varnothing$, and $T_3$ is regular together with $T_1$ ([[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[A2] $X$ is normal when for all disjoint closed $A, B \subseteq X$ there are disjoint open $U \supseteq A$ and $V \supseteq B$; the cases $A = \varnothing$ and $B = \varnothing$ are met by $\varnothing$ together with $X$, and $T_4$ is normal together with $T_1$ ([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

[A3] $X$ is a topological space, so a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L1] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L2] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighbourhoods, and two disjoint compact sets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-compact-space]]).

[L3] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $C \subseteq X$ be closed and let $x \in X \setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]

1.2 Let $A, B \subseteq X$ be closed with $A \cap B = \varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]

1.3 $X$ is $T_1$, being Hausdorff. [L3]

2.1 By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \ni x$ and $V \supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]

2.2 By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \supseteq A$ and $V \supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]

3.1 By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]

4.1 Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The whole content is that "closed" and "compact" coincide here, in the direction that is needed.** Regularity asks a point to be separated from a closed set and normality asks two closed sets to be separated; compactness of the ambient space converts each closed set into a compact one, and the separation of compact sets in a Hausdorff space is what [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies. No new separation argument is run.

- **Why compactness of $X$ is needed and not just of the sets separated.** The hypothesis is used only through [L1], to know that an arbitrary closed subset of $X$ is compact. A Hausdorff space in which the sets to be separated happen to be compact is separated by [L2] alone and needs no hypothesis on the ambient space at all; what compactness of $X$ buys is that *every* closed set is such a set.

- **The degenerate cases are not a gap.** If $C$, $A$ or $B$ is empty the required open sets are named outright in [A1] and [A2], so the argument does not depend on any nonemptiness hidden in the compact-separation clauses.
