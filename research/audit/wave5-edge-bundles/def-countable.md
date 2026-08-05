# Citation-precision audit — everything that cites `def-countable`

## The target, as it actually stands on disk

`items/def-countable.md` — definition — Finite, countably infinite, countable, uncountable

#### Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## The 18 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
- [L4] The image of $\mathbb{N}$ under a function is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `def-countable-chain-condition` (published-backward, page countability-axioms-and-cardinal-functions)

Title: The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable

- A topological space $X$ satisfies the **countable chain condition** (ccc) if every family $\mathcal U$ of nonempty open subsets of $X$ with $U\cap V=\varnothing$ whenever $U,V\in\mathcal U$ are distinct is at most countable ([[def-countable]]).

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$

### `def-second-countable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Second countability: an at most countable basis for the topology

- A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

### `def-separable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Separability: the existence of an at most countable dense subset

- A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L1] Nonempty cocountable opens have at most countable complements ([[def-standard-topologies]], [[def-countable]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- the at most countable subsets of $\mathbb{R}$ ([[def-countable]]). Then:
- [L1] A topology is $T_1$ exactly when it contains the cofinite topology on the same set; a finite set is at most countable ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]], [[def-countable]]).

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- ([[def-countable]]) — and give it the cofinite topology
- [L3] A set with at most one element is finite, being equinumerous with $0$ or with $1$; so an infinite set has at least three distinct points, since a set with at most two elements is finite as a union of two sets each with at most one ([[def-countable]], [[def-standard-topologies]], fact (ii)).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
- [L5] The range of a sequence is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), and every finite set is at most countable ([[def-countable]]); so $\mathbb{R}$ is not finite.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L7] An at most countable nonempty family is the set of values of a function with domain $\mathbb{N}$ ([[def-countable]], [[def-injection-surjection-bijection]]).
- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).
- [L4] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]); a finite set is at most countable ([[def-countable]]).

### `lem-countable-local-bases-can-be-open-and-decreasing` (published-backward, page countability-axioms-and-cardinal-functions)

Title: A countable local base can be chosen open and decreasing

- [L2] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `lem-finite-powers-of-countable-sets-are-countable` (published-backward, page the-topology-of-euclidean-space)

Title: Every finite power of an at most countable set is at most countable

- [L3] A finite set is at most countable, and induction holds on $\mathbb N$ ([[def-countable]], [[thm-induction-principle]]).

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- [A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- - **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- [L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).
