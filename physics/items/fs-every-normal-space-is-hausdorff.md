---
id: fs-every-normal-space-is-hausdorff
kind: false-statement
title: "FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-t4-spaces, def-hausdorff-space, def-t0-and-t1-spaces,
       def-standard-topologies, def-topological-space, thm-t4-implies-t3]
justified_by: []
aliases: []
landmark: false
short: "normal does not imply Hausdorff"
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
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** every normal space ([[def-normal-and-t4-spaces]]) is Hausdorff
([[def-hausdorff-space]]); equivalently, the $T_1$ hypothesis in the definition
of $T_4$ is redundant.

The refutation is the **indiscrete topology**
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a two-point set
$X = \{a, b\}$ with $a \ne b$ ([[def-standard-topologies]]). It is normal,
because its only closed sets are $\varnothing$ and $X$ and no two nonempty closed
sets are disjoint; and it is not Hausdorff, not $T_1$ and not even $T_0$, because
the only open set containing either point is $X$.

## Facts & Assumptions

**Given:** The two-point set $X = \{a,b\}$ with $a \ne b$, carrying the indiscrete topology $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$.

[A1] A space is normal when any two disjoint closed sets have disjoint open supersets ([[def-normal-and-t4-spaces]]).

[A2] A space is Hausdorff when distinct points have disjoint open neighbourhoods, $T_1$ when each of two distinct points has an open set containing it and missing the other, and $T_0$ when some open set contains exactly one of them ([[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

[L1] The closed sets of $\mathcal{T}_{\mathrm{ind}}$ are $\varnothing$ and $X$ ([[def-standard-topologies]], [[def-topological-space]]).

## Refutation

**Proof technique:** direct.

1.1 Let $A$ and $B$ be disjoint closed subsets of $X$; by [L1] each is $\varnothing$ or $X$, and since $X \ne \varnothing$ they cannot both be $X$. [L1]

1.2 If $A = \varnothing$ then $U := \varnothing$ and $V := X$ are disjoint open sets with $A \subseteq U$ and $B \subseteq V$; if $B = \varnothing$ then $U := X$ and $V := \varnothing$ do the same. [L1, construct]

1.3 The only open set containing $a$ is $X$, and the only open set containing $b$ is $X$, since $\varnothing$ contains neither. [L1]

2.1 By steps 1.1 and 1.2 every pair of disjoint closed sets is separated by disjoint open sets, so $(X, \mathcal{T}_{\mathrm{ind}})$ is normal. [step 1.1, step 1.2, A1]

2.2 By step 1.3 no open set contains exactly one of $a$ and $b$, so $(X,\mathcal{T}_{\mathrm{ind}})$ is not $T_0$, hence not $T_1$ and not Hausdorff. [step 1.3, A2]

3.1 By step 2.1 the space is normal and by step 2.2 it is not Hausdorff, so the claim is false; and since it is not $T_1$ either, the $T_1$ hypothesis in the definition of $T_4$ is not redundant. [step 2.1, step 2.2, A1, A2] ∎

## Remarks

- **This is the reason this library does not build $T_1$ into the word *normal*.** Normality on its own places a space nowhere in the hierarchy: the witness above is normal and fails the weakest axiom of all. Sierpinski space, on the companion page, is a second witness, normal and $T_0$ and not regular.

- **The same two-point space refutes more than this.** It is also regular, completely regular, completely normal and perfectly normal, and still not $T_0$; the verification is on the companion page. So *every* unnumbered adjective on this page is compatible with the total failure of point separation, which is exactly what the numerals $T_3$ to $T_6$ are for.

- **What survives.** With $T_1$ added, normality does give the whole descending chain ([[thm-t4-implies-t3]]); the hypothesis is spent at one step, turning a point into a closed set.
