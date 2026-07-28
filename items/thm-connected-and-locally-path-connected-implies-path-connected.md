---
id: thm-connected-and-locally-path-connected-implies-path-connected
kind: theorem
title: "A connected, locally path-connected space is path-connected, because its path components are open"
status: draft
origin: session
deps: [def-path-connected, def-locally-connected, def-connected-space,
       thm-connectedness-characterisations, def-topological-space,
       def-subspace-topology-top, def-connected-component-and-quasicomponent,
       thm-path-connected-implies-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §25"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ be a locally path-connected topological space
([[def-locally-connected]]). Then:

1. **Path components are open**, hence clopen, hence unions of them are clopen.
2. **Components and path components agree**: $P(x) = C(x)$ for every $x \in X$
   ([[def-path-connected]], [[def-connected-component-and-quasicomponent]]).
3. **If $X$ is moreover connected ([[def-connected-space]]) then $X$ is
   path-connected.**

Claim 3 is the statement in the title; claims 1 and 2 are what carry it, and both
are worth having on their own. Local path-connectedness alone does not make a
space path-connected — a two-point discrete space is locally path-connected and
is not path-connected — so the connectedness hypothesis in claim 3 is not
removable.

## Facts & Assumptions

**Given:** A locally path-connected space $X$, with subsets carrying the subspace topology ([[def-subspace-topology-top]]).

[A1] For every $x \in X$ and every open $U \ni x$ there is an open path-connected $V$ with $x \in V \subseteq U$; in particular, taking $U = X$, an open path-connected $V \ni x$ exists ([[def-locally-connected]], [[def-topological-space]]).

[A2] The path components partition $X$; $y \in P(x)$ exactly when a path in $X$ joins $x$ to $y$; a path-connected subset of $X$ containing $x$ is contained in $P(x)$, since each of its points is joined to $x$ inside it and hence in $X$ ([[def-path-connected]], [[def-subspace-topology-top]]).

[A3] A union of open sets is open, and a set is open when each of its points has an open set around it inside it ([[def-topological-space]]).

[A4] A space is connected exactly when its only clopen subsets are $\varnothing$ and the whole space; a subset $A$ is connected exactly when the only subsets of $A$ clopen in $A$ are $\varnothing$ and $A$; the traces of open and of closed sets are the open and the closed sets of a subspace ([[thm-connectedness-characterisations]], claims 1 and 2, [[def-subspace-topology-top]]).

[A5] $C(x)$ is the largest connected subset of $X$ containing $x$; a path-connected space, and a path-connected subset, is connected ([[def-connected-component-and-quasicomponent]], [[thm-path-connected-implies-connected]], claim 2).

## Proof

**Proof technique:** direct.

1.1 Let $x \in X$ and let $y \in P(x)$. By [A1] there is an open path-connected $V$ with $y \in V \subseteq X$, and $V \subseteq P(y) = P(x)$ by [A2], the set $V$ being path-connected and containing $y$, which lies in $P(x)$. [A1, A2]

1.2 For claim 2, $P(x) \subseteq C(x)$ by [A5], $P(x)$ being a path-connected subset containing $x$, hence connected, and $C(x)$ the largest such. [A2, A5]

2.1 So every point of $P(x)$ has an open set around it inside $P(x)$, whence $P(x)$ is open in $X$ by [A3]. [step 1.1, A3]

3.1 $P(x)$ is also closed: its complement is the union of the remaining path components, which partition $X$ by [A2], and each of them is open by step 2.1; so the complement is open by [A3]. Hence every path component is clopen, and so is any union of them, being a union of open sets with complement a union of open sets. This is claim 1. [step 2.1, A2, A3]

4.1 Conversely $P(x) \cap C(x)$ is clopen in the subspace $C(x)$ by step 3.1 and [A4], being the trace on $C(x)$ of a clopen subset of $X$, and it is nonempty, containing $x$; since $C(x)$ is connected, [A4] forces $P(x) \cap C(x) = C(x)$, that is $C(x) \subseteq P(x)$. [step 3.1, A4, A5]

5.1 Claim 2 follows from steps 1.2 and 4.1. [step 1.2, step 4.1]

6.1 For claim 3 assume $X$ is connected. If $X = \varnothing$ it is path-connected by [A2], having no pair of points to join. Otherwise fix $x \in X$; then $P(x)$ is clopen by step 3.1 and nonempty, so $P(x) = X$ by [A4], which says exactly that every point of $X$ is joined to $x$ by a path, and hence any two points are joined to each other. So $X$ is path-connected. [step 3.1, A2, A4] ∎

## Remarks

- **Why the argument is about path components and not about paths.** The hypothesis gives small open path-connected sets, and the only use made of them is that they cannot straddle two path components. That turns a local statement into the global partition of claim 1 with no construction of a long path anywhere; the path joining two given points is produced only at the very end, by the definition of $P(x)$.

- **Claim 2 is why local path-connectedness is the right hypothesis in practice.** Under it the two partitions of $X$ coincide, so "connected" and "path-connected" become interchangeable for subspaces that are open, and every connectedness computation can be done with paths.

- **What fails without local path-connectedness.** Claim 1 is exactly where the hypothesis is spent: without it a path component need not be open, its complement need not be open, and the clopen argument collapses. A connected space whose path components are not open, and which is therefore connected and not path-connected, is constructed later on this page.
