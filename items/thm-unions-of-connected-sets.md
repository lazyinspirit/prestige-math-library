---
id: thm-unions-of-connected-sets
kind: theorem
title: "A union of connected subspaces with a point in common is connected, and so is a union of a family in which every member meets a fixed connected member"
status: published
origin: session
deps: [def-connected-space, thm-connectedness-characterisations, def-subspace-topology-top,
       def-continuous-map-top, def-standard-topologies]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "J. R. Munkres, Topology, 2nd ed., §23"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ be a topological space, let $I$ be a set and let $A_i \subseteq X$ be a
connected subset of $X$ for every $i \in I$ ([[def-connected-space]]). Subsets
carry the subspace topology ([[def-subspace-topology-top]]). Then:

1. **Common point.** If there is $p \in X$ with $p \in A_i$ for every $i \in I$,
   then $\bigcup_{i \in I} A_i$ is a connected subset of $X$.
2. **Common connected core.** If $A \subseteq X$ is connected and
   $A \cap A_i \ne \varnothing$ for every $i \in I$, then
   $A \cup \bigcup_{i \in I} A_i$ is a connected subset of $X$.

No hypothesis of any kind is imposed on the index set: $I$ may be empty, finite
or infinite, and no choice principle is used, since the point $p$ in claim 1 and
the set $A$ in claim 2 are given rather than selected.

## Facts & Assumptions

**Given:** A space $X$, a set $I$, connected subsets $A_i \subseteq X$ for $i \in I$, and the two-point discrete space $\mathbf{2} = \{0,1\}$ ([[def-standard-topologies]]).

[A1] A subset $S$ of a space is connected exactly when every continuous map $S \to \mathbf{2}$ is constant ([[thm-connectedness-characterisations]], claim 2, [[def-connected-space]]).

[A2] The subspace topology is transitive: for $B \subseteq S \subseteq X$ the topology $B$ inherits from $S$ is the topology it inherits from $X$; and a restriction of a continuous map to a subspace is continuous ([[def-subspace-topology-top]], [[def-continuous-map-top]]).

[A3] The empty space is connected, no separation of it existing ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 write $S := \bigcup_{i \in I} A_i$ and assume $p \in A_i$ for every $i \in I$. If $I = \varnothing$ then $S = \varnothing$, which is connected by [A3], so assume $I \ne \varnothing$; then $p \in S$. [given, A3]

1.2 Let $\chi : S \to \mathbf{2}$ be continuous. For each $i \in I$ the restriction $\chi|_{A_i} : A_i \to \mathbf{2}$ is continuous by [A2], the topology $A_i$ carries as a subspace of $S$ being the one it carries as a subspace of $X$. [A2]

1.3 For claim 2 assume $A$ is connected and $A \cap A_i \ne \varnothing$ for every $i \in I$. If $I = \varnothing$ the union is $A$, which is connected by hypothesis, so assume $I \ne \varnothing$; then $A \ne \varnothing$, and we fix $p \in A$. [given, A3]

2.1 Each $\chi|_{A_i}$ is constant by [A1], since $A_i$ is connected; and $p \in A_i$, so that constant value is $\chi(p)$. Hence $\chi(a) = \chi(p)$ for every $a \in A_i$ and every $i \in I$. [step 1.2, A1, given]

3.1 Every $s \in S$ lies in some $A_i$, so $\chi(s) = \chi(p)$ by step 2.1; thus $\chi$ is constant. As $\chi$ was arbitrary, $S$ is connected by [A1]. This is claim 1. [step 1.1, step 2.1, A1]

4.1 For each $i \in I$ the two sets $A$ and $A_i$ are connected and share a point of $A \cap A_i$, so $A \cup A_i$ is connected by claim 1 applied to the two-member family $\{A, A_i\}$. [step 3.1, given]

5.1 The family $\{\, A \cup A_i : i \in I \,\}$ consists of connected sets by step 4.1 and every member contains $p$ by step 1.3, so its union is connected by claim 1; and that union is $A \cup \bigcup_{i \in I} A_i$, since every member contains $A$ and $I \ne \varnothing$. This is claim 2. [step 3.1, step 1.3, step 4.1] ∎

## Remarks

- **Why a common point and not merely pairwise intersection.** Pairwise intersection is not enough for an arbitrary family, and the failure is not exotic: three sets can meet pairwise with empty total intersection, and claim 2 is the form that covers that case, since it asks only that each member meet one fixed connected set. Claim 1 is the special case in which that fixed set is a single point, a singleton being connected.

- **Chains are covered by iterating claim 2.** If $A_0, A_1, A_2, \dots$ are connected and $A_n \cap A_{n+1} \ne \varnothing$ for every $n$, then each partial union $A_0 \cup \dots \cup A_n$ is connected by induction using claim 2, and the total union is connected by claim 1 applied to the partial unions, all of which contain $A_0$. The argument is written out where it is used rather than stated as a further clause here.

- **Nothing is assumed about openness or closedness of the members.** The hypothesis is connectedness alone. This is what makes the theorem the workhorse for building components: an arbitrary union of connected sets through a fixed point is connected, and that is precisely what makes the component of a point well defined.
