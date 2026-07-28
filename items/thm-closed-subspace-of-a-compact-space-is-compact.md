---
id: thm-closed-subspace-of-a-compact-space-is-compact
kind: theorem
title: "A closed subspace of a compact space is compact, and a finite union of compact subspaces is compact"
status: draft
origin: session
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-subspace-topology-top, lem-finite-choice]
justified_by: []
aliases: [thm-closed-subset-of-a-compact-space-is-compact-top]
landmark: true
short: "closed in compact is compact"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subspaces as in [[def-subspace-topology-top]] and compactness as in
[[def-compact-space]]. Then:

1. **Closed in compact is compact.** If $(X, \mathcal{T})$ is compact and
   $F \subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$.
2. **Finite unions.** If $n \in \mathbb{N}$ and $K_0, \dots, K_n$ are compact
   subsets of $X$, then $K_0 \cup \dots \cup K_n$ is a compact subset of $X$. The
   union of the empty list is $\varnothing$, which is a compact subset of every
   space.

Claim 1 needs $X$ to be compact and claim 2 does not; no hypothesis of any kind
is placed on $X$ in claim 2. **No choice principle is used**: claim 1 selects
nothing, taking a least index where a selection would be natural, and claim 2
makes finitely many selections through [[lem-finite-choice]], a theorem of ZF.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $(X, \mathcal{T})$ is compact exactly when every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$; a subset $A \subseteq X$ is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact; and a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$, repetitions allowed ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L3] $F \subseteq X$ is closed exactly when $X \setminus F$ is open ([[def-topological-space]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, let $(X, \mathcal{T})$ be compact, let $F \subseteq X$ be closed and let $\mathcal{U}$ be a family of open subsets of $X$ with $F \subseteq \bigcup \mathcal{U}$; put $\mathcal{W} := \mathcal{U} \cup \{\, X \setminus F \,\}$, a family of open subsets of $X$ with $\bigcup \mathcal{W} = X$, since every point outside $F$ lies in $X \setminus F$ and every point of $F$ lies in some member of $\mathcal{U}$. [L2, L3, construct]

1.2 For claim 2, let $n \in \mathbb{N}$, let $K_0, \dots, K_n$ be compact subsets of $X$, put $K := K_0 \cup \dots \cup K_n$ and let $\mathcal{U}$ be a family of open subsets of $X$ with $K \subseteq \bigcup \mathcal{U}$; then $K_m \subseteq \bigcup \mathcal{U}$ for every $m \le n$, so by [L2] the set $T_m$ of finite subfamilies of $\mathcal{U}$ whose union contains $K_m$ is nonempty, the empty subfamily belonging to it when $K_m = \varnothing$. [L1, L2, construct]

2.1 If $X = \varnothing$ then $F = \varnothing$ and the second alternative of [L2] holds for $F$; otherwise compactness of $X$ applied to $\mathcal{W}$ gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $X = W_0 \cup \dots \cup W_n$. [L1, step 1.1]

2.2 The assignment $m \mapsto T_m$ is a function with domain the natural number $\sigma(n)$ all of whose values are nonempty, so a choice function for its values supplies finite subfamilies $\mathcal{V}_0, \dots, \mathcal{V}_n$ of $\mathcal{U}$ with $K_m \subseteq \bigcup \mathcal{V}_m$ for every $m \le n$. [L4, step 1.2]

3.1 Assume $F \ne \varnothing$, the case $F = \varnothing$ being settled at step 2.1, and fix $x \in F$; then $x \in W_j$ for some $j \le n$, and $x \notin X \setminus F$, so that $W_j \ne X \setminus F$ and hence $W_j \in \mathcal{U}$. Let $j_0$ be the least $j \le n$ with $W_j \in \mathcal{U}$, which exists by the previous sentence, and put $V_j := W_j$ when $W_j \in \mathcal{U}$ and $V_j := W_{j_0}$ otherwise; then $V_0, \dots, V_n \in \mathcal{U}$, and nothing has been selected, $j_0$ being the least admissible index. [step 2.1, construct]

3.2 The family $\mathcal{V} := \mathcal{V}_0 \cup \dots \cup \mathcal{V}_n$ is a subfamily of $\mathcal{U}$; it is finite, a union of finitely many listable families being listed by concatenating their lists; and $K = K_0 \cup \dots \cup K_n \subseteq \bigcup \mathcal{V}$, since each $K_m$ lies inside $\bigcup \mathcal{V}_m \subseteq \bigcup \mathcal{V}$. So $\mathcal{V}$ is empty, in which case $K = \varnothing$, or listable as $\{U_0, \dots, U_p\}$ with $K \subseteq U_0 \cup \dots \cup U_p$; by [L2] the set $K$ is a compact subset of $X$, which is claim 2. [L1, L2, algebra, step 2.2]

4.1 $F \subseteq V_0 \cup \dots \cup V_n$: given $y \in F$ there is $j \le n$ with $y \in W_j$, and $y \in F$ forces $W_j \ne X \setminus F$, hence $W_j \in \mathcal{U}$ and $V_j = W_j \ni y$. Since $V_0, \dots, V_n$ are members of $\mathcal{U}$, [L2] gives that $F$ is a compact subset of $X$, the case $F = \varnothing$ having been settled at step 2.1. [L2, step 2.1, step 3.1]

5.1 Claim 1 is step 4.1 and claim 2 is step 3.2, and the final sentence of claim 2 is the compactness of the empty space, which holds because the empty subfamily of any family covers it. [L1, step 3.2, step 4.1] ∎

## Remarks

**Claim 1 is where the two hypotheses do different work.** Compactness of $X$ supplies a finite subcover of $X$; closedness of $F$ is what makes $X \setminus F$ available as one more open set, so that a cover of $F$ can be enlarged to a cover of $X$ by adding a single member. Neither hypothesis can be dropped: an open subspace of a compact space need not be compact, and without compactness of $X$ there is nothing to thin.

**The converse of claim 1 fails, and that is the subject of the next item.** A compact subset of an arbitrary space need not be closed; it is closed as soon as the ambient space is Hausdorff ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]), and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure without that hypothesis.

**The metric special case is [[lem-closed-subset-of-a-compact-space-is-compact]].** It is stated there for a closed subset of a compact metric space and is not used above; by [[thm-compactness-agrees-with-metric-compactness]] it is claim 1 applied to a metric topology. The general theorem is proved from the general definitions and borrows nothing from the metric development, which is why the metric statement does not appear among its dependencies.
