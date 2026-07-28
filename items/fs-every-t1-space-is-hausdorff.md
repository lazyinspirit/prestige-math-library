---
id: fs-every-t1-space-is-hausdorff
kind: false-statement
title: "FALSE: every $T_1$ space is Hausdorff"
status: published
origin: session
deps: [def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed, def-hausdorff-space,
       def-standard-topologies, def-countable, thm-r-uncountable, def-topological-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]
justified_by: []
aliases: []
landmark: false
short: "$T_1$ does not imply Hausdorff"
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
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** every $T_1$ space ([[def-t0-and-t1-spaces]]) is Hausdorff
([[def-hausdorff-space]]).

The refutation is the **cofinite topology** $\mathcal{T}_{\mathrm{cof}}$ on
$\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
together with the complements of the finite subsets of $\mathbb{R}$. It is $T_1$,
because its closed sets are exactly $\mathbb{R}$ and the finite sets; and it is
not Hausdorff, because any two nonempty open sets meet, $\mathbb{R}$ being
infinite. The witness is worked further on the companion page, where the same
space is shown to fail regularity and normality as well.

## Facts & Assumptions

**Given:** The set $\mathbb{R}$ with the cofinite topology $\mathcal{T}_{\mathrm{cof}}$, and two points $x \ne y$ of $\mathbb{R}$.

[A1] A space is Hausdorff when any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

[L1] $\mathcal{T}_{\mathrm{cof}}$ consists of $\varnothing$ together with the sets whose complement is finite; a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item).

[L2] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d)).

[L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), and every finite set is at most countable ([[def-countable]]); so $\mathbb{R}$ is not finite.

## Refutation

**Proof technique:** direct.

1.1 $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on $\mathbb{R}$ is $T_1$. [L2]

1.2 $\mathbb{R}$ is not finite, since a finite set is at most countable and $\mathbb{R}$ is uncountable. [L3]

1.3 Let $U, V \in \mathcal{T}_{\mathrm{cof}}$ be nonempty and suppose $U \cap V = \varnothing$; then $\mathbb{R} = \mathbb{R} \setminus (U \cap V) = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$, a union of two finite sets, hence finite by [L1]. [L1, assume-hyp]

2.1 Step 1.3 contradicts step 1.2, so no two nonempty open sets of $\mathcal{T}_{\mathrm{cof}}$ are disjoint. [step 1.2, step 1.3]

3.1 Take $x \ne y$ in $\mathbb{R}$, for instance $x = 0$ and $y = 1$. Any open $U \ni x$ and open $V \ni y$ are nonempty, so $U \cap V \ne \varnothing$ by step 2.1, and $x$ and $y$ have no disjoint open neighbourhoods. [step 2.1]

4.1 By step 1.1 the space $(\mathbb{R}, \mathcal{T}_{\mathrm{cof}})$ is $T_1$, and by step 3.1 and [A1] it is not Hausdorff; so the claim is false. [step 1.1, step 3.1, A1] ∎

## Remarks

- **The failure is as large as it can be**, not a boundary case: in the cofinite topology on an infinite set *no* two nonempty open sets are disjoint, so the Hausdorff condition fails at every pair of distinct points at once.

- **What is true is the converse.** Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]), so $T_1$ is strictly weaker, and this item is what makes "strictly" honest.

- **Any infinite set would do.** $\mathbb{R}$ is chosen because its infinitude is already a theorem here ([[thm-r-uncountable]]); nothing in the argument uses the order or the arithmetic of $\mathbb{R}$.
