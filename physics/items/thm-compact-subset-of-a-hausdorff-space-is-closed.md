---
id: thm-compact-subset-of-a-hausdorff-space-is-closed
kind: theorem
title: "In a Hausdorff space a point and a disjoint compact set, and two disjoint compact sets, have disjoint open neighbourhoods; hence every compact subset is closed, and in a compact Hausdorff space the compact subsets are exactly the closed ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-hausdorff-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: [thm-compact-hausdorff-separation]
landmark: true
short: "compact sets separate in a Hausdorff space"
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a Hausdorff topological space
([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in
[[def-compact-space]]. Then:

1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is
   compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with
   $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact
   and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with
   $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$.
4. **In a compact Hausdorff space the two classes coincide.** If in addition
   $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if
   it is closed.

**The proof is written choice-free, and that is not a stylistic preference.** The
textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$",
which is a selection over an arbitrary index set and therefore an appeal to the
full Axiom of Choice. What is done below instead is to take the family of **all**
open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by
a formula, with nothing selected — extract a finite subcover from it, and only
then make finitely many selections, which [[lem-finite-choice]] supplies as a
theorem of ZF.

## Facts & Assumptions

**Given:** A Hausdorff topological space $(X, \mathcal{T})$.

[A1] For all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[L1] $\varnothing$ and $X$ are open, an arbitrary union of open sets is open, the intersection of finitely many open sets is open when at least one is taken, and a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L2] A subset $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix a compact $K \subseteq X$ and a point $x \in X \setminus K$, and put $\mathcal{V} := \{\, V \in \mathcal{T} : U \cap V = \varnothing \text{ for some } U \in \mathcal{T} \text{ with } x \in U \,\}$, a family cut out by a property of $V$ alone and not by any selection. [construct]

2.1 $K \subseteq \bigcup \mathcal{V}$: given $y \in K$ we have $y \ne x$, since $x \notin K$, so [A1] provides $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$; that $V$ belongs to $\mathcal{V}$ and contains $y$. [A1, step 1.1]

3.1 If $K = \varnothing$ then $U := X$ and $V := \varnothing$ satisfy claim 1; otherwise [L2] applied to the family $\mathcal{V}$ gives $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $K \subseteq V_0 \cup \dots \cup V_n$. [L1, L2, step 1.1, step 2.1]

4.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{T} : x \in U \text{ and } U \cap V_j = \varnothing \,\}$ is nonempty, because $V_j \in \mathcal{V}$; and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{T}$ with $x \in U_j$ and $U_j \cap V_j = \varnothing$ for every $j \le n$. [L3, step 3.1]

5.1 Put $U := U_0 \cap \dots \cap U_n$ and $V := V_0 \cup \dots \cup V_n$; both are open by [L1], $x \in U$ because $x \in U_j$ for every $j$, $K \subseteq V$ by step 3.1, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $V_j$ and in $U \subseteq U_j$, contradicting $U_j \cap V_j = \varnothing$. So claim 1 holds. [L1, step 3.1, step 4.1]

6.1 For claim 3 let $K \subseteq X$ be compact and put $G := \bigcup \{\, W \in \mathcal{T} : W \cap K = \varnothing \,\}$, which is open by [L1]. Every member of the union misses $K$, so $G \subseteq X \setminus K$; conversely for $x \in X \setminus K$ claim 1, proved at step 5.1, gives disjoint open $U \ni x$ and $V \supseteq K$, whence $U \cap K = \varnothing$ and $x \in U \subseteq G$. So $G = X \setminus K$ is open, $K$ is closed, and claim 3 holds. [L1, step 5.1]

6.2 For claim 2 let $K, L \subseteq X$ be compact with $K \cap L = \varnothing$, and put $\mathcal{W} := \{\, W \in \mathcal{T} : V \cap W = \varnothing \text{ for some } V \in \mathcal{T} \text{ with } K \subseteq V \,\}$, again cut out by a property. Then $L \subseteq \bigcup \mathcal{W}$: for $y \in L$ we have $y \notin K$, so claim 1, proved at step 5.1, gives disjoint open $U \ni y$ and $V \supseteq K$, and that $U$ lies in $\mathcal{W}$ and contains $y$. [step 5.1, construct]

7.1 If $L = \varnothing$ then $U := \varnothing$ and $V := X$ satisfy claim 2; otherwise [L2] applied to $\mathcal{W}$ gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $L \subseteq W_0 \cup \dots \cup W_m$. [L1, L2, step 6.2]

8.1 For each $j \le m$ the set $T_j := \{\, V \in \mathcal{T} : K \subseteq V \text{ and } V \cap W_j = \varnothing \,\}$ is nonempty, because $W_j \in \mathcal{W}$; and $j \mapsto T_j$ is a function with domain the natural number $\sigma(m)$, so a choice function for its values supplies $V_0, \dots, V_m \in \mathcal{T}$ with $K \subseteq V_j$ and $V_j \cap W_j = \varnothing$ for every $j \le m$. [L3, step 7.1]

9.1 Put $U := W_0 \cup \dots \cup W_m$ and $V := V_0 \cap \dots \cap V_m$; both are open by [L1], $L \subseteq U$ by step 7.1, $K \subseteq V$ because $K \subseteq V_j$ for every $j$, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $W_j$ and in $V \subseteq V_j$, contradicting $V_j \cap W_j = \varnothing$. So claim 2 holds. [L1, step 7.1, step 8.1]

10.1 For claim 4 assume $(X, \mathcal{T})$ is also compact: a compact subset of $X$ is closed by step 6.1, and a closed subset of $X$ is compact by [L4], so the two classes of subsets coincide; with claims 1, 2 and 3 settled at steps 5.1, 9.1 and 6.1 the theorem is proved. [L4, step 6.1, step 9.1] ∎

## Remarks

**Where each hypothesis is spent.** The Hausdorff condition is used exactly once, at step 2.1, to know that the family $\mathcal{V}$ covers $K$; compactness of $K$ is used exactly once, at step 3.1, to cut that cover down to finitely many members. Claim 2 then reuses claim 1 in the same shape, with the roles of point and compact set played by a point of $L$ and the compact set $K$.

**Why the family is defined and not chosen.** For each $y \in K$ the Hausdorff condition asserts that *some* pair $(U, V)$ exists; it provides no rule for naming one. A proof that writes $U_y$ and $V_y$ has selected a pair for every $y \in K$ at once, and for an arbitrary compact $K$ that is the Axiom of Choice. Collecting instead every $V$ that works for *some* $U$ replaces the selection by a formula, and the only selection left is over the finite index set $\sigma(n)$, where [[lem-finite-choice]] applies.

**Claim 3 fails without the Hausdorff hypothesis**, and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure with a witness. Claim 4 is the converse pairing: closedness is enough for compactness only when the ambient space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and compactness is enough for closedness only when it is Hausdorff.
