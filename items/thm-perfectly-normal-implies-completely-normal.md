---
id: thm-perfectly-normal-implies-completely-normal
kind: theorem
title: "Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets"
status: draft
origin: session
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-g-delta-and-f-sigma-in-a-topological-space,
       lem-normality-via-shrinking, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space, def-countable,
       def-countable-choice, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal implies completely normal"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(X, \mathcal{T})$ be a perfectly normal space
([[def-completely-normal-and-perfectly-normal-spaces]]): $X$ is normal
([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a $G_\delta$,
equivalently every open subset of $X$ is an $F_\sigma$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Then $X$ is **completely
normal**: any two separated sets $A, B \subseteq X$ ([[def-separated-sets]])
admit disjoint open $U \supseteq A$ and $V \supseteq B$.

Consequently $T_6$ implies $T_5$.

**No continuous function is constructed anywhere in the proof**, and in
particular Urysohn's lemma is not used. All that is consumed is normality,
applied once to each member of a countable family of closed sets, and the
$F_\sigma$ presentation of two open sets.

**Where the choice principle is spent, and why it is not removable as written.**
Step 4.1 selects, for each $n \in \mathbb{N}$ at once, one open set $U_n$ out of
the nonempty family that normality provides for the closed set $F_n$, and
likewise one $V_n$; normality is an existence statement and supplies no rule for
singling out a member, so extracting the two sequences is an application of
$\mathrm{AC}_\omega$ and of nothing stronger. The hypothesis is stated in the
theorem rather than hidden in the proof, as this library does everywhere.

## Facts & Assumptions

**Given:** A perfectly normal space $(X,\mathcal{T})$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

[A3] $\mathrm{AC}_\omega$: for a family of nonempty sets indexed by $\mathbb{N}$ there is a function choosing a member of each ([[def-countable-choice]]).

[L1] In a normal space, disjoint closed sets $F$ and $D$ admit an open $W \supseteq F$ with $\overline{W} \cap D = \varnothing$ ([[lem-normality-via-shrinking]], final assertion, [[def-normal-and-t4-spaces]]).

[L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] A union of finitely many closed sets is closed by iterating (C3), an arbitrary union of open sets is open by (T2), and an intersection of two open sets is open by (T3) ([[def-topological-space]]).

[L4] For all $n, m \in \mathbb{N}$ exactly one of $n < m$, $n = m$, $m < n$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq X \setminus \overline{B}$ and $B \subseteq X \setminus \overline{A}$, and both of these sets are open. [A1, L2]

2.1 By [A2] fix sequences of closed sets with $X \setminus \overline{B} = \bigcup_{n \in \mathbb{N}} F_n$ and $X \setminus \overline{A} = \bigcup_{n \in \mathbb{N}} G_n$. [step 1.1, A2, choose]

3.1 For every $n$ the closed sets $F_n$ and $\overline{B}$ are disjoint, since $F_n \subseteq X \setminus \overline{B}$; likewise $G_n$ and $\overline{A}$ are disjoint closed sets. [step 2.1, L2]

4.1 By [L1] the set of open $W \supseteq F_n$ with $\overline{W} \cap \overline{B} = \varnothing$ is nonempty for each $n$, and likewise the set of open $W' \supseteq G_n$ with $\overline{W'} \cap \overline{A} = \varnothing$; so [A3] supplies sequences $(U_n)_{n \in \mathbb{N}}$ and $(V_n)_{n \in \mathbb{N}}$ of open sets with $F_n \subseteq U_n$, $\overline{U_n} \cap \overline{B} = \varnothing$, $G_n \subseteq V_n$ and $\overline{V_n} \cap \overline{A} = \varnothing$ for every $n$. [step 3.1, A3, L1, choose]

5.1 Define $U := \bigcup_{n \in \mathbb{N}} \big(U_n \setminus \bigcup_{i \le n} \overline{V_i}\big)$ and $V := \bigcup_{n \in \mathbb{N}} \big(V_n \setminus \bigcup_{j \le n} \overline{U_j}\big)$. [step 4.1, construct]

6.1 $U$ and $V$ are open: for each $n$ the set $\bigcup_{i \le n} \overline{V_i}$ is a union of finitely many closed sets, hence closed, so its complement is open and $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is an intersection of two open sets; the union over $n$ is then open. [step 5.1, L2, L3]

6.2 $A \subseteq U$: given $a \in A$, step 1.1 and step 2.1 put $a$ in some $F_n \subseteq U_n$, while $a \in \overline{A}$ and $\overline{V_i} \cap \overline{A} = \varnothing$ give $a \notin \overline{V_i}$ for every $i$; hence $a \in U_n \setminus \bigcup_{i \le n} \overline{V_i} \subseteq U$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.3 $B \subseteq V$: given $b \in B$, step 1.1 and step 2.1 put $b$ in some $G_m \subseteq V_m$, while $b \in \overline{B}$ and $\overline{U_j} \cap \overline{B} = \varnothing$ give $b \notin \overline{U_j}$ for every $j$; hence $b \in V_m \setminus \bigcup_{j \le m} \overline{U_j} \subseteq V$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.4 Suppose $x \in U \cap V$; then by step 5.1 there are $n, m \in \mathbb{N}$ with $x \in U_n$, $x \notin \overline{V_i}$ for all $i \le n$, $x \in V_m$, and $x \notin \overline{U_j}$ for all $j \le m$. [step 5.1, assume-hyp]

7.1 If $n \le m$ in step 6.4 then $j := n$ satisfies $j \le m$, so $x \notin \overline{U_n}$; but $x \in U_n \subseteq \overline{U_n}$, which is impossible. [step 6.4, L2]

7.2 If $m < n$ in step 6.4 then $i := m$ satisfies $i \le n$, so $x \notin \overline{V_m}$; but $x \in V_m \subseteq \overline{V_m}$, which is impossible. [step 6.4, L2]

8.1 By [L4] one of $n \le m$ and $m < n$ holds, so steps 7.1 and 7.2 exclude every case and no such $x$ exists: $U \cap V = \varnothing$. [step 7.1, step 7.2, L4]

9.1 By steps 6.1, 6.2, 6.3 and 8.1 the sets $U$ and $V$ are disjoint open sets containing $A$ and $B$ respectively; since $A$ and $B$ were an arbitrary separated pair, $X$ is completely normal, and with the hypothesis $T_1$ this reads $T_6$ implies $T_5$. [step 6.1, step 6.2, step 6.3, step 8.1] ∎

## Remarks

- **The subtraction of the earlier closures is the entire trick.** Each $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is still large enough to catch the part of $A$ that $F_n$ covers, because no point of $A$ lies in any $\overline{V_i}$; and it is small enough that the two unions cannot meet, because a putative common point would be inside a $U_n$ that a later stage of $V$ has already removed, or inside a $V_m$ that a later stage of $U$ has removed. The comparison $n \le m$ or $m < n$ is what decides which of the two it is.

- **Only the two closures $\overline{A}$ and $\overline{B}$ are used**, never the sets $A$ and $B$ themselves beyond membership, which is why the hypothesis is exactly separation and not disjointness. For disjoint sets that are not separated the argument breaks at step 6.2.

- **The converse is not proved here and is not asserted.** Perfect normality asks a countability condition of every closed set that complete normality never mentions, so the two are not the same hypothesis; but no witness separating them is exhibited in this library, and nothing above claims one exists.

- **The hereditary reading is not used.** Complete normality is equivalent to the normality of every subspace, and some texts prove this theorem in that language; the argument above works directly with the separated-sets definition and never passes to a subspace.
