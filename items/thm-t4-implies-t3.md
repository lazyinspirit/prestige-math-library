---
id: thm-t4-implies-t3
kind: theorem
title: "A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       def-hausdorff-space, def-urysohn-space, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_4$ implies $T_3$"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a $T_4$ space, that is a normal $T_1$ space
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]). Then $X$ is regular
([[def-regular-and-t3-spaces]]), hence $T_3$, and therefore also Urysohn
([[def-urysohn-space]]), Hausdorff ([[def-hausdorff-space]]), $T_1$ and $T_0$.

**The $T_1$ hypothesis is not decoration.** Normality alone implies none of the
conclusions: the indiscrete topology on a two-point set is normal and not even
$T_0$, which is recorded among this page's false statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ that is normal and $T_1$, a closed set $C \subseteq X$ and a point $x \in X \setminus C$.

[A1] Normality: disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

[A2] $X$ is regular when a point and a closed set not containing it admit disjoint open supersets; $T_3$ means regular and $T_1$ ([[def-regular-and-t3-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] Every regular $T_1$ space is Urysohn, every Urysohn space is Hausdorff, and every Hausdorff space is $T_1$ and hence $T_0$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]).

## Proof

**Proof technique:** direct.

1.1 $\{x\}$ is closed, since $X$ is $T_1$. [L1]

1.2 $\{x\} \cap C = \varnothing$, since $x \notin C$. [given]

2.1 By [A1] applied to the disjoint closed sets $\{x\}$ and $C$ there are disjoint open $U \supseteq \{x\}$ and $V \supseteq C$; in particular $x \in U$. [step 1.1, step 1.2, A1]

3.1 Since $C$ and $x \notin C$ were arbitrary, step 2.1 shows that $X$ is regular; being also $T_1$, it is $T_3$. [step 2.1, A2]

4.1 By [L2] the space $X$ is Urysohn, hence Hausdorff, hence $T_1$ and $T_0$; with step 3.1 this is the whole statement. [step 3.1, L2] ∎

## Remarks

- **The proof is one line and the hypothesis does all the work.** Normality separates two *closed* sets; the $T_1$ hypothesis is exactly what turns the point into one of them. This is the pattern of every "$T_{n+1}$ implies $T_n$" argument in the chain, and it is why this library never builds $T_1$ silently into the words *regular* and *normal* ([[def-normal-and-t4-spaces]]).

- **The converse is not proved here and is not asserted.** Whether a $T_3$ space must be normal is left open on this page: every witness reachable from this page's material would need machinery it does not have, so no false statement asserting a reversal is planted here ([[rem-separation-axiom-conventions]]).
