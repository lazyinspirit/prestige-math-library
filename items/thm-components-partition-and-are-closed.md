---
id: thm-components-partition-and-are-closed
kind: theorem
title: "The components of a space are its maximal connected subsets, they partition it, and each of them is closed"
status: draft
origin: session
deps: [def-connected-component-and-quasicomponent, thm-unions-of-connected-sets,
       thm-closure-of-a-connected-set, def-connected-space, def-subspace-topology-top,
       def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §25"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ be a topological space and let $C(x)$ be the connected component of
$x \in X$ ([[def-connected-component-and-quasicomponent]]). Then:

1. **Maximality.** $C(x)$ is connected, contains $x$, and contains every
   connected subset of $X$ that contains $x$. So the components are exactly the
   maximal connected subsets of $X$: a connected $A \subseteq X$ is a component
   if and only if no connected subset of $X$ properly contains $A$ — except that
   $\varnothing$ is connected and is never a component when $X \ne \varnothing$.
2. **Partition.** For $x, y \in X$, either $C(x) = C(y)$ or
   $C(x) \cap C(y) = \varnothing$; every point lies in its own component; and
   $X = \bigcup_{x \in X} C(x)$. So the components are nonempty, pairwise
   disjoint, and cover $X$.
3. **Closedness.** Every component is closed in $X$.

**Components need not be open**, and no clause above says they are. Openness of
the components is a genuine extra hypothesis on $X$, taken up later on this page
under the name local connectedness.

## Facts & Assumptions

**Given:** A topological space $X$, with subsets carrying the subspace topology ([[def-subspace-topology-top]]).

[A1] $C(x)$ is the union of all connected subsets of $X$ containing $x$; it is connected, contains $x$, and contains every connected set through $x$ ([[def-connected-component-and-quasicomponent]], [[thm-unions-of-connected-sets]], claim 1).

[A2] A union of connected subsets with a point in common is connected ([[thm-unions-of-connected-sets]], claim 1).

[A3] If $A$ is connected and $A \subseteq B \subseteq \overline{A}$ then $B$ is connected ([[thm-closure-of-a-connected-set]]).

[A4] $A \subseteq \overline{A}$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

[A5] A singleton is connected, no separation of it existing ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is [A1]: $C(x)$ is connected, contains $x$ by [A5] since $\{x\}$ is one of the sets united, and contains every connected $A \ni x$ because such an $A$ is one of the sets united. [A1, A5]

2.1 A connected $A \subseteq X$ with $A \ne \varnothing$ satisfies $A \subseteq C(a)$ for every $a \in A$, by step 1.1; so $A$ is maximal among connected subsets exactly when $A = C(a)$, and every component is nonempty. [A1, A5]

2.2 Suppose $z \in C(x) \cap C(y)$. Then $C(x) \cup C(y)$ is connected by [A2], the two sets being connected by [A1] and sharing $z$. [step 1.1, A1, A2]

2.3 For claim 3, apply [A3] with $A = C(x)$ and $B = \overline{C(x)}$, the hypothesis $A \subseteq B \subseteq \overline{A}$ holding by [A4]; so $\overline{C(x)}$ is connected, and it contains $x$, hence $\overline{C(x)} \subseteq C(x)$ by step 1.1. [step 1.1, A3, A4]

3.1 That union contains $x$, so it is contained in $C(x)$ by step 1.1, whence $C(y) \subseteq C(x)$; it also contains $y$, so symmetrically $C(x) \subseteq C(y)$, and therefore $C(x) = C(y)$. [step 1.1, step 2.2]

4.1 So for any $x, y$ either $C(x) \cap C(y) = \varnothing$ or $C(x) = C(y)$ by step 3.1; and $x \in C(x)$ by step 1.1, so $X = \bigcup_{x \in X} C(x)$ and every component is nonempty by step 2.1. This is claim 2. [step 1.1, step 2.1, step 3.1]

5.1 With $C(x) \subseteq \overline{C(x)}$ from [A4] this gives $C(x) = \overline{C(x)}$, so $C(x)$ is closed by [A4]. [step 2.3, A4] ∎

## Remarks

- **The exception for $\varnothing$ in claim 1 is not a quibble.** The empty set is connected under the convention of [[def-connected-component-and-quasicomponent]], and it is contained in every set, so "maximal connected subset" has to be read as "maximal among the nonempty connected subsets" for the identification with components to be exact. Step 2.1 is where that is pinned down.

- **Closed but not open is the typical case.** Claim 3 uses only that the closure of a connected set is connected, which is available in every space. There is no matching argument for openness, because the union of the connected sets through a point carries no information about neighbourhoods; that is what local connectedness supplies, and it is a genuine extra hypothesis rather than a missing step.

- **A component of a subspace is computed in that subspace.** For $S \subseteq X$ the components of $S$ are the maximal connected subsets of the space $S$, and claim 3 then says each is closed *in $S$*, not in $X$. Closedness in $X$ follows only when $S$ itself is closed in $X$.
