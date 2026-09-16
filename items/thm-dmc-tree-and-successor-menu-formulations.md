---
id: thm-dmc-tree-and-successor-menu-formulations
kind: theorem
title: "The tree and successor-menu formulations of DMC are equivalent"
status: draft
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, def-multiple-and-dependent-multiple-choice, def-function, def-finite-cardinality, def-natural-numbers, thm-subset-of-a-finite-set, thm-sum-rule]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "§2.1, pp. 5-6"
---

## Statement

Over $\mathrm{ZF}$ the following two assertions are equivalent
([[def-dependent-multiple-choice-finite-level-tree]]):

1. **Tree form.** Every pruned tree of height $\omega$ on every set whose levels
   are nonempty has a subtree with nonempty finite levels.
2. **Successor-menu form.** Every serial relation on every nonempty set admits a
   successor menu sequence.

Assertion 2 is the principle recorded in
[[def-multiple-and-dependent-multiple-choice]]. No choice principle is used in
either direction: the two assertions are equivalent over $\mathrm{ZF}$, and the
proof constructs every object it needs from the ones already given.

## Facts & Assumptions

**Given:** The two assertions of the statement, and their vocabulary as fixed in [[def-dependent-multiple-choice-finite-level-tree]].

[F1] DMC in menu form: if $R$ is serial on a nonempty set $A$, there is a sequence $(F_n)_{n\in\mathbb{N}}$ of nonempty finite subsets of $A$ with every $x \in F_n$ having an $R$-successor in $F_{n+1}$ ([[def-multiple-and-dependent-multiple-choice]]).

[F2] A subtree of a tree of height $\omega$ over $A$ is a subset closed under initial segments containing the empty sequence; its levels are its nodes of each length, and a node of length $n$ has at most one extension of length $n+1$, namely $t^{\frown} a$ for $a \in A$ ([[def-dependent-multiple-choice-finite-level-tree]]).

[L1] Functions are sets of ordered pairs and are equal exactly when they have the same domain and the same values; consequently two nodes over $A$ of the same length that extend a common node are equal, since functions with the same domain and values agree ([[def-function]]).

[L2] A subset of a finite set is finite, and a finite union of finitely many finite sets is finite; a nonempty finite set has an element ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]], [[thm-sum-rule]]).

[L3] Every nonempty set of natural numbers has a least element, and the natural numbers satisfy induction ([[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Assume the tree form of the statement. [assume-hyp]

1.2 Assume the successor-menu form of the statement. [assume-hyp]

2.1 Under step 1.1, let $A$ be a nonempty set and let $R$ be serial on $A$; the $R$-chain tree $T_R$ is a pruned tree of height $\omega$ with nonempty levels, so by the tree form there is a subtree $T'$ of $T_R$ whose levels $T'_n$ are nonempty and finite. [step 1.1, F2, L1]

2.2 Under step 1.2, let $T$ be a pruned tree of height $\omega$ on a set $A$ with nonempty levels, and let $R \subseteq T \times T$ be the relation of immediate succession, $t \mathbin{R} u$ exactly when $u = t^{\frown} a$ for some $a \in A$. [step 1.2, F2]

3.1 Under step 2.1: for every $n$ put $F_n := \{\, t(n) : t \in T'_{n+1} \,\}$, the set of last entries of the nodes of $T'$ of length $n+1$. Each $F_n$ is nonempty and finite, and if $x \in F_n$ is the last entry of $t \in T'_{n+1}$ then $t$ has an extension in $T'_{n+2}$ by the nonemptiness of that level together with [F2], so $x$ has an $R$-successor in $F_{n+1}$, namely the last entry of that extension. [step 2.1, F2, L1]

3.2 Under step 2.2: the relation $R$ is serial on $T$, because $T$ is pruned and every proper extension of a node of length $n$ passes through an immediate successor in $T$ by [F2]; the set $T$ is nonempty, since it contains the empty sequence. [step 2.2, F2]

4.1 Under step 2.2, continuing: by step 3.2 and the successor-menu form there are nonempty finite sets $F_n \subseteq T$ with every $x \in F_n$ having an $R$-successor in $F_{n+1}$; define $G_0 := F_0$ and $G_{n+1} := \{\, u \in F_{n+1} : u = x^{\frown} a \text{ for some } x \in G_n \text{ and some } a \,\}$. [step 3.2, F1, L3]

4.2 Under step 2.1, continuing: the sets $F_n$ of step 3.1 are nonempty finite subsets of $A$; extracting the last entry of each node uses only the defining data of the node, so no selection is made, and the successor condition verified in step 3.1 is exactly the menu condition of [F1]. [step 3.1, F1, L1]

5.1 Under step 4.1: by induction on $n$, each $G_n$ is a nonempty finite subset of $F_n$: the case $n=0$ is $G_0 = F_0$, and if $G_n$ is nonempty then each $x \in G_n \subseteq F_n$ has an $R$-successor $u \in F_{n+1}$, which by uniqueness of immediate successors lies in $G_{n+1}$; moreover every $u \in G_{n+1}$ has a predecessor $x \in G_n$ with $x \mathbin{R} u$ by definition, so the menus $G_n$ are coherent. [step 4.1, F2, L3]

5.2 Under step 3.1 and step 4.2 we have produced a successor menu sequence for the arbitrary serial relation $R$ on the arbitrary nonempty set $A$; this is assertion 2 of the statement, so the tree form implies the successor-menu form. [step 3.1, step 4.2, F1]

6.1 Under step 4.1 and step 5.1: put $T' := \{\, t \in T : t \subseteq s \text{ for some } s \in \bigcup_{n} G_n \,\}$, the downward closure in $T$ of the coherent menus. Then $T'$ is a subtree of $T$ by [F2], and every level $T'_m$ is nonempty: fix $x \in G_0$ and use the successor half of coherence to build, by induction on $k$, an element $s_k \in G_k$ with $x \subseteq s_k$, so that for $k$ with $\operatorname{dom} s_k \ge m$ the initial segment $s_k \upharpoonright m$ lies in $T'_m$; only existence at each finite stage is used, not a selection of successors. [step 5.1, F2, L3]

7.1 Under step 6.1: each level $T'_m$ is finite. Indeed let $D := \{\, \operatorname{dom} s : s \in G_0 \,\}$, a finite set of natural numbers by [L2]. If $t \in T'$ has length $m$ and $t \subseteq s$ with $s \in G_k$, then iterating coherence $k$ times writes $t \upharpoonright (\operatorname{dom} s - j) \in G_{k-j}$ for every $j \le k$, so with $j := \operatorname{dom} s - m$ we get $t \in G_{m-d}$ where $d := \operatorname{dom} s - k \in D$. Hence $T'_m \subseteq \bigcup \{\, G_{m-d} : d \in D,\ d \le m \,\}$, a union of finitely many finite sets, which is finite. [step 5.1, step 6.1, F2, L2]

8.1 Under step 6.1 and step 7.1 the subtree $T'$ of the arbitrary pruned tree $T$ has nonempty finite levels; this is assertion 1 of the statement, so the successor-menu form implies the tree form. [step 6.1, step 7.1]

9.1 Steps 5.2 and 8.1 prove the two implications between assertions 1 and 2, so the two formulations of dependent multiple choice are equivalent over $\mathrm{ZF}$. [step 5.2, step 8.1] ∎
