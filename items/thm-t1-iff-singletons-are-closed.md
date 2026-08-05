---
id: thm-t1-iff-singletons-are-closed
kind: theorem
title: "A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-topological-space, def-standard-topologies,
       def-neighbourhood-top, def-countable]
justified_by: []
aliases: []
landmark: true
short: "$T_1$ iff points are closed"
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
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ on the same set $X$, points $x, y \in X$ and a finite subset $F \subseteq X$.

[A1] $X$ is $T_1$ when for all $x \ne y$ there are open $U, V$ with $x \in U$, $y \notin U$, $y \in V$ and $x \notin V$ ([[def-t0-and-t1-spaces]]).

[L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).

[L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

[L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): fix $x \in X$ and let $y \in X \setminus \{x\}$; then $y \ne x$, so [A1] supplies an open $V$ with $y \in V$ and $x \notin V$, whence $y \in V \subseteq X \setminus \{x\}$. [A1]

1.2 (b) implies (c): let $F \subseteq X$ be finite and list it as $F = \{x_0, \dots, x_{n-1}\}$ by [L4], so that $F = \{x_0\} \cup \dots \cup \{x_{n-1}\}$; for $n = 0$ this reads $F = \varnothing$, which is closed by [L1]. [L1, L4]

1.3 (c) implies (d): let $U \in \mathcal{T}_{\mathrm{cof}}$; if $U = \varnothing$ then $U \in \mathcal{T}$ by [L1], and otherwise $X \setminus U$ is finite by [L3], hence closed by (c), hence $U$ is open. [L1, L3]

1.4 (d) implies (a): let $x \ne y$ in $X$; the sets $X \setminus \{y\}$ and $X \setminus \{x\}$ have finite complements, so they lie in $\mathcal{T}_{\mathrm{cof}}$ by [L3] and hence in $\mathcal{T}$ by (d), and they witness the $T_1$ condition, since $x \in X \setminus \{y\}$, $y \notin X \setminus \{y\}$, $y \in X \setminus \{x\}$ and $x \notin X \setminus \{x\}$. [A1, L3]

2.1 By step 1.1 the set $X \setminus \{x\}$ is a neighbourhood of each of its points, hence open by [L2], so $\{x\}$ is closed by [L1]; this completes the implication (a) implies (b). [step 1.1, L1, L2]

2.2 By step 1.2 and (b) the set $F$ is a union of $n$ closed sets, hence closed by [L1]; this completes the implication (b) implies (c). [step 1.2, L1]

3.1 The four implications of steps 2.1, 2.2, 1.3 and 1.4 close the cycle (a) implies (b) implies (c) implies (d) implies (a), so the four conditions are equivalent. [step 1.3, step 1.4, step 2.1, step 2.2]

4.1 In particular $\mathcal{T}_{\mathrm{cof}}$ itself satisfies (d) with $\mathcal{T} = \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on any set is $T_1$ by step 3.1, and by (d) it is contained in every $T_1$ topology on that set; this is the final assertion of the statement. [step 3.1, L3] ∎

## Remarks

- **The theorem is the reason $T_1$ is quoted as "points are closed".** Every later use of $T_1$ on this page goes through clause (b): the $T_1$ hypothesis in $T_3$ and $T_4$ is used exactly to turn a point into a closed set so that regularity or normality applies to it.

- **Clause (c) is not a strengthening of clause (b).** It follows from it by a finite union, and the finite union is genuinely finite: an *arbitrary* union of closed sets need not be closed, and in the cofinite topology on an infinite set no infinite proper subset is closed at all, although every singleton is.

- **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.
