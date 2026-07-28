---
id: ex-sierpinski-space-is-t0-normal-and-not-regular
kind: example
title: "Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing"
status: draft
origin: session
deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-normal-and-t4-spaces, def-regular-and-t3-spaces, def-hausdorff-space,
       def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "Sierpinski space in the hierarchy"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $S = \{a, b\}$ with $a \ne b$ carry the Sierpinski topology
$\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$
([[def-standard-topologies]]), so that $b$ is the open point and $a$ the closed
one. Then:

1. $S$ is **$T_0$** ([[def-t0-and-t1-spaces]]): the open set $\{b\}$ contains $b$
   and not $a$.
2. $S$ is **not $T_1$**, and therefore not Hausdorff
   ([[def-hausdorff-space]]): the singleton $\{b\}$ is not closed
   ([[thm-t1-iff-singletons-are-closed]]).
3. $S$ is **normal** ([[def-normal-and-t4-spaces]]): its only closed sets are
   $\varnothing$, $\{a\}$ and $S$, and no two disjoint closed sets are both
   nonempty.
4. $S$ is **not regular** ([[def-regular-and-t3-spaces]]): the point $b$ and the
   closed set $\{a\}$ have no disjoint open neighbourhoods, because the only
   open set containing $a$ is $S$ itself.

Sierpinski space is therefore the sharpest small witness that **normality
without $T_1$ implies nothing**: it is normal, satisfies the weakest axiom $T_0$,
and fails the axiom immediately above it.

## Facts & Assumptions

**Given:** The two-point set $S = \{a,b\}$ with $a \ne b$ and the topology $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$.

[A1] $\mathcal{T}_{\mathrm{Sier}}$ is a topology on $S$ and its members are exactly $\varnothing$, $\{b\}$ and $S$ ([[def-standard-topologies]], [[def-topological-space]]).

[A2] A set is closed exactly when its complement is open ([[def-topological-space]], [[def-interior-closure-boundary-top]]).

[L1] $T_0$: some open set contains exactly one of two distinct points. $T_1$: each of two distinct points has an open set containing it and missing the other, equivalently every singleton is closed ([[def-t0-and-t1-spaces]], [[thm-t1-iff-singletons-are-closed]]).

[L2] Normal: disjoint closed sets have disjoint open supersets. Regular: a point and a closed set not containing it have disjoint open supersets ([[def-normal-and-t4-spaces]], [[def-regular-and-t3-spaces]]).

[L3] Hausdorff: distinct points have disjoint open neighbourhoods, and every Hausdorff space is $T_1$ ([[def-hausdorff-space]]).

## Verification

**Proof technique:** direct.

1.1 The closed subsets of $S$ are the complements of $\varnothing$, $\{b\}$ and $S$, namely $S$, $\{a\}$ and $\varnothing$. [A1, A2]

1.2 $\{b\}$ is open and contains $b$ but not $a$, so $S$ is $T_0$, which is claim 1. [A1, L1]

1.3 The only open set containing $a$ is $S$, by [A1], since $\varnothing$ contains nothing and $\{b\}$ does not contain $a$. [A1]

2.1 $\{b\}$ is not closed, since $\{b\}$ is not among the three closed sets of step 1.1; so $S$ is not $T_1$ by [L1], and not Hausdorff by [L3], which is claim 2. [step 1.1, L1, L3]

2.2 No two disjoint closed subsets of $S$ are both nonempty: by step 1.1 the nonempty closed sets are $\{a\}$ and $S$, and $\{a\} \cap \{a\} = \{a\}$, $\{a\} \cap S = \{a\}$ and $S \cap S = S$ are all nonempty. [step 1.1]

2.3 Suppose $U$ and $V$ are disjoint open sets with $b \in U$ and $\{a\} \subseteq V$; then $V = S$ by step 1.3, so $U \cap V = U \ne \varnothing$, a contradiction. Hence $b$ and the closed set $\{a\}$ cannot be separated and $S$ is not regular by [L2], which is claim 4. [step 1.1, step 1.3, L2]

3.1 Let $A, B$ be disjoint closed subsets of $S$; by step 2.2 one of them is $\varnothing$, and then $\varnothing$ together with $S$ separates the pair, in the order matching which of $A$ and $B$ is empty. So $S$ is normal by [L2], which is claim 3. [step 2.2, A1, L2]

4.1 Steps 1.2, 2.1, 3.1 and 2.3 are claims 1 to 4, so Sierpinski space is $T_0$ and normal and is neither $T_1$ nor regular. [step 1.2, step 2.1, step 3.1, step 2.3] ∎

## Remarks

- **Normality without $T_1$ does not imply regularity.** This space is normal and not regular. Other combinations occur too: the indiscrete two-point space is regular and normal but not $T_0$, and the cofinite topology on an infinite set is $T_1$ and neither regular nor normal, both worked on this page. Whether regularity implies normality is a question this library leaves open, no witness being reachable from the material available here ([[rem-separation-axiom-conventions]]); nothing above asserts that the two conditions are incomparable. Only with $T_1$ does normality imply regularity ([[def-normal-and-t4-spaces]]).

- **Why "the closed point" is the right name for $a$.** $\{a\}$ is closed and $\{b\}$ is not, so the two points of $S$ are not interchangeable even though the set has only two elements; the labelling is fixed once and for all in [[def-standard-topologies]].

- **The space is $T_0$ and nothing more.** It sits at the very bottom of the chain, and it is the standard reminder that the bottom of the chain is not empty: $T_0$ is a real condition, satisfied here and failed by the indiscrete topology on the same underlying set.
