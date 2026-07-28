---
id: thm-quasicomponents-equal-components-in-a-compact-hausdorff-space
kind: theorem
title: "In a compact Hausdorff space every quasicomponent is connected, so quasicomponents and components coincide"
status: draft
origin: session
deps: [def-connected-component-and-quasicomponent, thm-quasicomponents-contain-components, thm-components-partition-and-are-closed, def-connected-space, def-compact-space, thm-compact-iff-fip, def-hausdorff-space, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, def-topological-space, def-subspace-topology-top, def-finite-intersection-property]
justified_by: []
aliases: [thm-components-equal-quasicomponents-compact-hausdorff]
landmark: true
short: "components = quasicomponents when compact Hausdorff"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a compact Hausdorff space ([[def-compact-space]],
[[def-hausdorff-space]], [[def-topological-space]]) and let $x \in X$. Then the
quasicomponent $Q(x)$ is connected
([[def-connected-component-and-quasicomponent]], [[def-connected-space]]), and
consequently

$$C(x) \;=\; Q(x) :$$

the component of $x$ and the quasicomponent of $x$ are the same set, so the
components and the quasicomponents of $X$ are the same family of subsets.

The inclusion $C(x) \subseteq Q(x)$ holds in every space
([[thm-quasicomponents-contain-components]], claim 1) and can be strict; what the
two hypotheses buy is the reverse inclusion. **No choice principle is used.**

## Facts & Assumptions

**Given:** A compact Hausdorff space $(X, \mathcal{T})$ and a point $x \in X$.

[L1] $Q(x)$ is the intersection of all clopen subsets of $X$ containing $x$, a nonempty family since $X$ itself is one; so a clopen set containing $x$ contains $Q(x)$ ([[def-connected-component-and-quasicomponent]]).

[L2] $C(x) \subseteq Q(x)$, and $Q(x)$ is closed in $X$ ([[thm-quasicomponents-contain-components]], claims 1 and 2).

[L3] $C(x)$ is connected, contains $x$, and contains every connected subset of $X$ that contains $x$ ([[thm-components-partition-and-are-closed]], claim 1).

[L4] A separation of a space is a pair of disjoint nonempty open subsets whose union is the space, and each piece of a separation is also closed, being the complement of the other; a subset is connected when the subspace it carries is ([[def-connected-space]], [[def-subspace-topology-top]]).

[L5] The closed subsets of a subspace $S$ are the traces of the closed subsets of $X$, so a subset closed in a closed $S$ is closed in $X$ ([[def-subspace-topology-top]]).

[L6] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[L7] In a Hausdorff space two disjoint compact subsets lie in disjoint open sets ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 2).

[L8] A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection; a family has that property when the intersection of every finite list in it is nonempty, the intersection of the empty list being the whole space ([[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[L9] Finite intersections of open sets are open and finite intersections of closed sets are closed; a set is clopen when it is both ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Write $Q := Q(x)$ and suppose $Q$ carries a separation: disjoint nonempty sets $A, B$, open in the subspace $Q$, with $A \cup B = Q$, and $x \in A$ after renaming, since $x \in Q$ by [L1]. By [L4] each of $A$ and $B$ is also closed in $Q$; $Q$ is closed in $X$ by [L2], so $A$ and $B$ are closed in $X$ by [L5] and compact subsets of $X$ by [L6]. [L1, L2, L4, L5, L6, construct]

2.1 By [L7] there are disjoint open $U \supseteq A$ and $V \supseteq B$ in $X$, and then $Q = A \cup B \subseteq U \cup V$. [L7, step 1.1]

3.1 Let $\mathcal{K}$ be the family of clopen subsets of $X$ containing $x$ and put $\mathcal{F} := \{\, K \setminus (U \cup V) : K \in \mathcal{K} \,\}$, a family of closed subsets of $X$ by [L9]. Its intersection is $Q \setminus (U \cup V)$ by [L1], which is empty by step 2.1. [L1, L9, step 2.1]

4.1 By [L8] the family $\mathcal{F}$ therefore fails the finite intersection property, so some finite list in it has empty intersection; the empty list is not such a list, its intersection being $X$, which contains the nonempty $A$. So there are $n \in \mathbb{N}$ and $K_0, \dots, K_n \in \mathcal{K}$ with $(K_0 \cap \dots \cap K_n) \setminus (U \cup V) = \varnothing$, and $K := K_0 \cap \dots \cap K_n$ is a clopen set containing $x$ with $K \subseteq U \cup V$. [L8, L9, step 1.1, step 3.1]

5.1 $K \cap U$ is clopen: it is open as an intersection of two open sets, and it equals $K \setminus V$, since $K \subseteq U \cup V$ and $U \cap V = \varnothing$, so it is the intersection of the closed $K$ with the closed complement of $V$. It contains $x$, because $x \in A \subseteq U$ and $x \in K$. [L9, step 2.1, step 4.1]

6.1 So $K \cap U$ belongs to $\mathcal{K}$ and [L1] gives $Q \subseteq K \cap U \subseteq U$; but $B$ is a nonempty subset of $Q$ contained in $V$, so it lies in $U \cap V = \varnothing$. This is impossible, so $Q$ admits no separation and is connected by [L4]. [L1, L4, step 1.1, step 2.1, step 5.1]

7.1 Hence $Q(x)$ is a connected subset of $X$ containing $x$, so $Q(x) \subseteq C(x)$ by [L3], while $C(x) \subseteq Q(x)$ by [L2]; the two sets are equal, and since every component and every quasicomponent is of the form $C(y)$ and $Q(y)$ for a point $y$, the two families coincide. [L2, L3, step 6.1] ∎

## Remarks

**Both hypotheses are used, and each does one thing.** The Hausdorff condition turns the two closed pieces of a hypothetical separation into sets that can be surrounded by disjoint open sets; compactness turns the intersection of all clopen sets through $x$ into a finite intersection, which is again clopen. Drop either and the argument stops: without compactness the clopen sets through $x$ need not shrink to $Q(x)$ finitely, and without the Hausdorff condition the two pieces need not be separated at all.

**The inclusion that can be strict.** In an arbitrary space a quasicomponent may properly contain a component, and the witness is a space that is not compact; the general containment is [[thm-quasicomponents-contain-components]], which explicitly declines to assert equality. This theorem is the standard hypothesis under which the two notions agree, and it is the reason the distinction is rarely visible in the compact Hausdorff spaces of everyday use.

**What is not claimed.** Nothing above says the components are open, and nothing says $X$ is totally disconnected when its components are singletons in some other sense; openness of the components is local connectedness, a separate hypothesis ([[thm-components-partition-and-are-closed]]).
