---
id: thm-locally-connected-iff-components-of-open-sets-are-open
kind: theorem
title: "A space is locally connected exactly when every component of every open subspace is open; in that case the components of the space itself are clopen"
status: draft
origin: session
deps: [def-locally-connected, def-connected-component-and-quasicomponent, def-path-connected,
       thm-components-partition-and-are-closed, def-subspace-topology-top,
       def-topological-space, def-neighbourhood-top, def-connected-space]
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

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. $X$ is locally connected ([[def-locally-connected]]) **if and only if** for
   every open $U \subseteq X$ every component of the space $U$
   ([[def-connected-component-and-quasicomponent]]) is open in $X$.
2. If $X$ is locally connected then every component of $X$ is **clopen**.
3. The same statement with "path-connected" throughout: $X$ is locally
   path-connected if and only if for every open $U \subseteq X$ every path
   component of the space $U$ is open in $X$.

In claim 1 "open in $X$" and "open in $U$" say the same thing, $U$ being open in
$X$ ([[def-subspace-topology-top]]); the statement is written with the ambient
form because that is how it is used.

## Facts & Assumptions

**Given:** A topological space $X$; for open $U \subseteq X$ and $x \in U$, write $C_U(x)$ for the component and $P_U(x)$ for the path component of $x$ in the space $U$.

[A1] $X$ is locally connected at $x$ when every open $U \ni x$ contains an open connected $V$ with $x \in V \subseteq U$; locally path-connected likewise with "path-connected" ([[def-locally-connected]]).

[A2] $C_U(x)$ is the largest connected subset of $U$ containing $x$: it is connected, contains $x$, and contains every connected $A \subseteq U$ with $x \in A$ ([[def-connected-component-and-quasicomponent]], [[def-connected-space]]). The same holds for $P_U(x)$ with "path-connected" in place of "connected": the path components are the classes of the joined-by-a-path equivalence relation, each path-connected and containing its point ([[def-path-connected]]).

[A3] If $U$ is open in $X$ then a subset of $U$ is open in $U$ if and only if it is open in $X$ ([[def-subspace-topology-top]]).

[A4] A set is open exactly when it is a neighbourhood of each of its points, equivalently when each of its points has an open set around it inside it; and a union of open sets is open ([[def-neighbourhood-top]], [[def-topological-space]]).

[A5] Every component of a space is closed in it ([[thm-components-partition-and-are-closed]], claim 3).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is locally connected, let $U \subseteq X$ be open, let $C$ be a component of the space $U$ and let $x \in C$; then $C = C_U(x)$ by [A2], components being determined by any of their points. [A1, A2]

1.2 Conversely assume every component of every open subspace is open in $X$, and let $x \in U$ with $U$ open; put $V := C_U(x)$. [A2]

2.1 In the situation of step 1.1, [A1] supplies an open connected $V$ with $x \in V \subseteq U$; $V$ is then a connected subset of $U$ containing $x$, so $V \subseteq C_U(x) = C$ by [A2]. [step 1.1, A1, A2]

2.2 In the situation of step 1.2, $V$ is connected and contains $x$ by [A2], it is contained in $U$, and it is open in $X$ by hypothesis; so $x \in V \subseteq U$ with $V$ open and connected. [step 1.2, A2]

3.1 So in the situation of step 1.1 every point of $C$ has an open set around it inside $C$, whence $C$ is open in $X$ by [A4]. This is the forward implication of claim 1. [step 1.1, step 2.1, A4]

3.2 And step 2.2 is exactly the condition of [A1] at $x$, so $X$ is locally connected; this is the backward implication, and claim 1 follows. [step 2.2, A1]

4.1 For claim 2, let $C$ be a component of $X$; taking $U = X$, which is open, claim 1 makes $C$ open in $X$, and [A5] makes it closed, so $C$ is clopen. [step 3.1, step 3.2, A3, A5]

5.1 For claim 3, replace "connected" by "path-connected" and $C_U$ by $P_U$ throughout steps 1.1, 1.2, 2.1, 2.2, 3.1 and 3.2: every property of $C_U$ used there is recorded for $P_U$ in [A2], namely that it contains its point, is path-connected, and contains every path-connected subset of $U$ through that point, the last because two points joined to $x$ are joined to each other. [step 3.1, step 3.2, A1, A2, A4] ∎

## Remarks

- **Why the criterion is stated for every open subspace and not only for $X$.** Openness of the components of $X$ alone is strictly weaker: a space may have a single component, itself, which is trivially open, while failing to be locally connected at some point. The strength of local connectedness is that the conclusion holds inside every open piece, however small, and that is what the proof of the forward implication uses at step 2.1 — it applies the hypothesis inside the given $U$, not inside $X$.

- **Claim 2 is the practical form.** Once the components are clopen, a connectedness argument reduces to counting them: a locally connected space is connected exactly when it has one component, and the components behave like the summands of a disjoint union.

- **What claim 2 does not say.** It does not say that a space whose components are clopen is locally connected, and that converse is false in general. Nor does the theorem assert any implication between connectedness and local connectedness; those are settled separately on this page.
