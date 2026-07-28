---
id: thm-locally-compact-hausdorff-basics
kind: theorem
title: "In a locally compact Hausdorff space every point has a neighbourhood base of compact sets, every open subspace and every closed subspace is locally compact, every open set around a point contains an open set with compact closure inside it, and every compact set sits inside an open set with compact closure"
status: draft
origin: session
deps: [def-locally-compact-space, def-compact-space, def-hausdorff-space, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, def-neighbourhood-top, def-interior-closure-boundary-top, thm-closure-characterisation-top, def-subspace-topology-top, def-hereditary-property, lem-compactness-of-a-subspace-is-ambient, def-topological-space]
justified_by: []
aliases: [thm-locally-compact-hausdorff]
landmark: true
short: "locally compact Hausdorff basics"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. **A neighbourhood base of compact sets.** If $X$ is locally compact
   ([[def-locally-compact-space]]) and Hausdorff ([[def-hausdorff-space]]), then
   every neighbourhood $N$ of a point $x \in X$ ([[def-neighbourhood-top]])
   contains a compact neighbourhood of $x$; so the compact neighbourhoods of $x$
   form a neighbourhood base at $x$.
2. **Heredity along open and closed subspaces.** If $X$ is locally compact and
   Hausdorff and $S \subseteq X$ is open, then the subspace $S$ is locally
   compact ([[def-subspace-topology-top]]). If $X$ is locally compact and
   $F \subseteq X$ is closed, then the subspace $F$ is locally compact; no
   Hausdorff hypothesis is used for this half.
3. **Shrinking inside an open set.** If $X$ is locally compact and Hausdorff,
   $O \subseteq X$ is open and $x \in O$, there is an open $V$ with
   $$x \in V \subseteq \overline{V} \subseteq O$$
   and $\overline{V}$ a compact subset of $X$.
4. **Compact sets sit in open sets with compact closure.** If $X$ is locally
   compact and Hausdorff and $K \subseteq X$ is compact, there is an open
   $V \subseteq X$ with $K \subseteq V$ and $\overline{V}$ a compact subset of
   $X$ ([[def-interior-closure-boundary-top]]).

Neither of the two hypotheses of claims 1, 3 and 4 can be dropped. Local compactness
alone gives no base of compact neighbourhoods, and heredity fails outright
without a hypothesis on the subspace.
**No choice principle is used**; every cover produced below is defined by a
formula and thinned by [[lem-compactness-of-a-subspace-is-ambient]], which returns
members rather than indices.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $X$ is locally compact when every point has a compact neighbourhood; a subset $A$ is a compact subset when the subspace it carries is compact ([[def-locally-compact-space]], [[def-compact-space]], [[def-subspace-topology-top]]).

[L2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L3] In a Hausdorff space a compact subset is closed, and a point outside a compact subset is separated from it by disjoint open sets ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claims 1 and 3).

[L4] A closed subset of a compact space is a compact subset of it, and a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L5] $\overline{A}$ is the smallest closed superset of $A$, so $\overline{A} \subseteq F$ for every closed $F \supseteq A$, and $A$ is closed exactly when $A = \overline{A}$; $\operatorname{int}(A)$ is the largest open subset of $A$, and $x \in \operatorname{int}(A)$ exactly when $A$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 2).

[L6] The open sets of a subspace $S$ are the traces $U \cap S$ of the open sets of $X$ and its closed sets are the traces of the closed sets; and for $A \subseteq S \subseteq X$ the topology $A$ inherits from $S$ is the one it inherits from $X$, so compactness of $A$ does not depend on which of the two it is read in ([[def-subspace-topology-top]], [[def-hereditary-property]]).

[L7] An open set is a neighbourhood of each of its points, a superset of a neighbourhood of $x$ is a neighbourhood of $x$, and a union of finitely many closed sets is closed ([[def-neighbourhood-top]], [[def-topological-space]]).

[L8] $A$ is a compact subset of $X$ exactly when every family of open subsets of $X$ covering $A$ has finitely many members covering $A$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 let $X$ be locally compact and Hausdorff, let $x \in X$ and let $N$ be a neighbourhood of $x$; fix a compact neighbourhood $K$ of $x$ and open sets $U, V$ with $x \in U \subseteq K$ and $x \in V \subseteq N$, and put $W := U \cap V$, an open set with $x \in W \subseteq K \cap N$. By [L3] the compact set $K$ is closed. [L1, L2, L3, L7, construct]

1.2 For the closed half of claim 2 let $X$ be locally compact, let $F \subseteq X$ be closed and let $x \in F$; a compact neighbourhood $K$ of $x$ in $X$ contains an open $U \ni x$, and $K \cap F$ is the trace of the closed $F$ on $K$, hence closed in the subspace $K$ and so a compact subset by [L4] and [L6], while $x \in U \cap F \subseteq K \cap F$ with $U \cap F$ open in $F$ exhibits $K \cap F$ as a neighbourhood of $x$ in the subspace $F$. So $F$ is locally compact. [L1, L4, L6, L7]

2.1 The set $F_0 := K \setminus W = K \cap (X \setminus W)$ is the trace of a closed set on $K$, hence closed in the subspace $K$ and a compact subset of $X$ by [L4] and [L6]; and $x \notin F_0$, since $x \in W$. [L4, L6, step 1.1]

3.1 By [L3] there are disjoint open sets $A \ni x$ and $B \supseteq F_0$; put $G := A \cap W$, an open set with $x \in G$. [L3, step 1.1, step 2.1]

4.1 $G \subseteq K$ and $K$ is closed, so $\overline{G} \subseteq K$ by [L5]; and $G \subseteq A \subseteq X \setminus B$, a closed set, so $\overline{G} \subseteq X \setminus B$. Hence $\overline{G} \subseteq K \setminus B \subseteq K \setminus F_0 = K \cap W \subseteq W \subseteq N$. [L5, L7, step 1.1, step 3.1]

5.1 $\overline{G}$ is closed and contained in $K$, so it is the trace of a closed set on $K$, closed in the subspace $K$, and a compact subset of $X$ by [L4] and [L6]; and it is a neighbourhood of $x$ by [L7], since the open $G$ satisfies $x \in G \subseteq \overline{G}$. With step 4.1 it lies inside $N$, so claim 1 holds. [L4, L6, L7, step 4.1]

6.1 For the open half of claim 2 let $S \subseteq X$ be open and let $x \in S$; then $S$ is a neighbourhood of $x$ by [L7], so claim 1 supplies a compact neighbourhood $C$ of $x$ in $X$ with $C \subseteq S$. An open $U$ of $X$ with $x \in U \subseteq C$ satisfies $U \subseteq S$, so $U = U \cap S$ is open in $S$ and $C$ is a neighbourhood of $x$ in the subspace $S$; and by [L6] compactness of $C$ read in $S$ is compactness read in $X$. So $S$ is locally compact and claim 2 is proved. [L1, L6, L7, step 5.1]

6.2 For claim 4 put $\mathcal{V} := \{\, U \in \mathcal{T} : \overline{U} \text{ is a compact subset of } X \,\}$, a family cut out by a property. It covers $X$: given $y \in X$, claim 1 applied with $N := X$ gives a compact neighbourhood $C$ of $y$, which is closed by [L3], and an open $U$ with $y \in U \subseteq C$; then $\overline{U} \subseteq C$ by [L5], $\overline{U}$ is closed in the subspace $C$ by [L6], and [L4] makes it a compact subset of $X$, so $U \in \mathcal{V}$. [L3, L4, L5, L6, step 5.1, construct]

6.3 For claim 3 let $O$ be open and $x \in O$; then $O$ is a neighbourhood of $x$ by [L7], so claim 1, proved at step 5.1, gives a compact neighbourhood $C$ of $x$ with $C \subseteq O$, and $C$ is closed by [L3]. Put $V := \operatorname{int}(C)$, which is open and contains $x$ by [L5], $C$ being a neighbourhood of $x$; then $V \subseteq C$ gives $\overline{V} \subseteq \overline{C} = C \subseteq O$ by [L5], and $\overline{V}$ is a closed subset of the compact $C$, hence closed in the subspace $C$ by [L6] and a compact subset of $X$ by [L4]. So $x \in V \subseteq \overline{V} \subseteq O$ with $\overline{V}$ compact, which is claim 3. [L3, L4, L5, L6, L7, step 5.1]

7.1 Let $K \subseteq X$ be compact. If $K = \varnothing$ then $V := \varnothing$ has $\overline{V} = \varnothing$ compact; otherwise [L8] gives $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{V}$ with $K \subseteq U_0 \cup \dots \cup U_n =: V$, an open set. [L8, step 6.2]

8.1 The set $\overline{U_0} \cup \dots \cup \overline{U_n}$ is closed by [L7] and contains $V$, so $\overline{V}$ is contained in it by [L5]; that union is a compact subset by [L4], and $\overline{V}$ is a closed subset of it, hence closed in the subspace it carries and compact by [L4] and [L6]. So $K \subseteq V$ with $\overline{V}$ compact, which is claim 4; claims 1, 2 and 3 were proved at steps 5.1, 6.1 with 6.2, and 6.3. [L4, L5, L6, L7, step 6.3, step 7.1] ∎

## Remarks

**Where the Hausdorff hypothesis is spent.** Twice, and both times through [[thm-compact-subset-of-a-hausdorff-space-is-closed]]: to know that the compact neighbourhood $K$ is closed, and to separate the point $x$ from the compact $K \setminus W$. Without it the compact neighbourhood cannot be shrunk, and claim 1 is exactly the shrinking.

**Claim 3 is the form the rest of the library asks for.** "Every neighbourhood contains a compact neighbourhood" and "every open set around a point contains an open $V$ with $\overline{V}$ compact inside it" are the same statement in different clothes, and the second is the one a nested-shrinking construction needs, since it hands back an *open* set whose closure is already inside the target. It is used in [[thm-baire-category-locally-compact-hausdorff]].

**Claim 2 splits into two halves of different strength.** The closed half is true in any locally compact space and its proof is three lines; the open half runs through claim 1 and therefore through the Hausdorff hypothesis. Together they do not give heredity: an arbitrary subspace of a locally compact Hausdorff space need not be locally compact, and [[fs-local-compactness-is-hereditary]] carries the witness.

**Claim 4 is what the one-point compactification uses.** It says a compact set can always be padded to an open set that is still "bounded" in the only sense available here, namely having compact closure, and that padding is the standard route to separating a point of $X$ from the added point $\infty$ ([[thm-one-point-compactification-properties]]).
