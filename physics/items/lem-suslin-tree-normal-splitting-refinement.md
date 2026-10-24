---
id: lem-suslin-tree-normal-splitting-refinement
kind: lemma
title: "Every Suslin tree has a normal splitting refinement"
status: published
origin: pipeline
deps: [def-aronszajn-suslin-and-special-tree, def-normal-splitting-set-theoretic-tree, lem-tree-predecessors-and-common-extensions, thm-countable-union-of-countable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Lemma 9.12 and complete proof, printed pp. 65-68"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC, every Suslin tree $T$ has a normal splitting Suslin tree $S$ derived from it. The construction can be made infinitely splitting: every nonterminal node of $S$ has countably infinitely many immediate successors. Moreover, any hypothetical uncountable branch or antichain in $S$ canonically yields one in $T$; this is the precise sense in which forbidden branches and antichains lift to the original tree.

## Facts & Assumptions

**Given:** A Suslin tree $T$. Assume AC.

[F1] A Suslin tree has height $\omega_1$, countable levels, no cofinal branch, and no uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F2] Normality requires a unique root, extensions to every higher level, and Hausdorff uniqueness at nonzero limit levels; splitting requires at least two immediate successors. [[def-normal-splitting-set-theoretic-tree]]

[F3] Predecessors at a fixed lower height are unique, nodes below a common node are comparable, and strict tree order raises height. [[lem-tree-predecessors-and-common-extensions]]

[F4] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[A1] AC supplies simultaneous enumerations, witnesses, and the final cone choice. [[def-axiom-of-choice]]

## Proof

1.1 Put $T^*=\{t\in T:T\mathord\uparrow t\text{ is uncountable}\}$. Some root belongs to $T^*$, since the countable level of roots cannot have only countable cones while $T$ has height $\omega_1$. If $t\in T^*$ and $\operatorname{ht}(t)<\beta<\omega_1$, then some extension of $t$ on level $\beta$ has uncountable cone: otherwise the part of $T\mathord\uparrow t$ below $\beta$, together with the countably many countable cones based on that level, would be countable by F4. Thus $T^*$ still has height $\omega_1$, countable levels, and extension to every higher level. Being a subtree, it has no forbidden branch or antichain. [F1, F3, F4, A1, given]

2.1 First repair possible non-Hausdorff limit splitting; doing this before passing to branching points is essential. For each downward-closed chain $C\subseteq T^*$ of limit order type $\alpha_C$, where at least two nodes of $T^*$ at height $\alpha_C$ lie above every member of $C$, adjoin one history node $\ell_C$. Keep the old order and declare $x<\ell_C$ exactly when $x\in C$, declare $\ell_C<x$ exactly when every member of $C$ is below $x$, and put $\ell_C<\ell_D$ exactly when $C\subsetneq D$. The eight old/history cases verify transitivity. An infinite descending sequence of history nodes would, by choosing a point in each successive set difference, give a descending sequence in $T^*$; mixed descending sequences reduce to the same contradiction. Predecessors of any node are linearly ordered by inclusion of their histories, so the enlarged order $H$ is a tree. [F3, A1, step 1.1]

3.1 The enlargement remains Suslin. An uncountable chain containing uncountably many history nodes gives a strictly increasing $\omega_1$-sequence of histories; choosing one point from each successive difference gives an uncountable chain in $T^*$. For an uncountable antichain of history nodes, choose for each $C$ an old upper bound $u_C$ at height $\alpha_C$ lying above every member of $C$, as guaranteed by the definition in step 2.1. Comparability of two such bounds would make their predecessor histories comparable, so the $u_C$ form an uncountable antichain in $T^*$. If uncountably many members are old nodes, the contradiction is immediate. AC makes these choices and permits thinning the old/history partition. Thus every forbidden set in $H$ lifts to $T^*$ and then to $T$. Every old node retains its uncountable cone, and each $\ell_C$ lies below two incompatible old upper bounds with uncountable cones; hence every node of $H$ has an uncountable cone. Extension to higher levels is inherited from $T^*$. [F1, F3, A1, step 1.1, step 2.1]

3.2 The history insertion makes $H$ Hausdorff at nonzero limit levels. Suppose a limit-length chain $\langle w_\xi:\xi<\rho\rangle$ has two distinct upper nodes at its level. If old nodes occur cofinally in the chain, those old nodes and all their old predecessors form a downward-closed $T^*$-chain $C$ of limit length with the two upper nodes above it; step 2.1 inserted $\ell_C$ strictly between the chain and those upper nodes. If the chain is eventually made of history nodes $\ell_{C_\xi}$, then the increasing union $C=\bigcup C_\xi$ has the same properties, and again $\ell_C$ is a missing further predecessor. Either case contradicts the assumed level of the two upper nodes. This is Monk's two-case verification of Hausdorff uniqueness; in particular, competing old limit nodes move to a successor level immediately above their common history node. [F2, F3, A1, step 2.1]

4.1 Now branching points are cofinal above every $t\in H$. Suppose instead that the branching points above $t$ were bounded below some countable level. At a higher level, the cone above each node is a chain: two incomparable extensions would have a first divergence, and the Hausdorff property from step 3.2 rules out a first divergence at a limit level, so their last common predecessor would be a branching point. Each such chain is countable by Suslinity, and the level is countable because it is an antichain in $H$; F4 would make the uncountable cone above $t$ countable, a contradiction. Let $B$ be the induced tree of branching points of $H$. Above two incompatible immediate successors of $x\in B$, choose branching points of least possible height. They are distinct immediate successors of $x$ in $B$. Thus every node of $B$ branches, and cofinality of branching points plus the extension property of $H$ gives extensions to every higher $B$-level. As a subtree of $H$, $B$ remains Suslin. [F1, F2, F3, F4, A1, step 3.1, step 3.2]

5.1 The Hausdorff property passes to $B$. Indeed, if two nodes at a nonzero limit $B$-level had the same strict $B$-predecessors but different $H$-predecessor histories, their first divergence in $H$ would yield a branching point strictly above all their common $B$-predecessors and below one of the two nodes. That branching point belongs to $B$, contradicting equality of their $B$-predecessor sets. [F2, F3, step 3.2, step 4.1]

6.1 Retain the nodes of $B$ on its limit levels, ordered as before, and reindex those levels increasingly by $\omega_1$. Between a retained level and the next retained level lie $\omega$ successive branching levels of $B$. Iterating the two-successor choice through the first $n$ of them gives at least $2^n$ incompatible extensions, and the extension property carries all of them to the next retained level. Hence every node has countably infinitely many immediate successors in the retained tree. Its levels are countable because each is an antichain in the Suslin tree $B$, and it keeps the extension property and the limit-history uniqueness from step 5.1. Choose a root of the retained tree and take its cone; every node of $B$ has an uncountable cone by steps 3.1 and 4.1, so this cone is cofinal and the resulting tree has a unique root. [F1, F2, F3, F4, A1, step 3.1, step 4.1, step 5.1]

7.1 Call the resulting cone $S$. It is normal and infinitely splitting by steps 5.1 and 6.1. Restriction to levels and a cone cannot create a branch or antichain, so $S$ is Suslin by steps 3.1 and 4.1; and the lifting transformations in step 3.1 apply to any hypothetical uncountable forbidden set in $S$. This proves both the refinement and the stated lifting clause. The uses of AC were the simultaneous countability enumerations, history witnesses, branching-point selections, and final root cone; no weaker-choice claim is made. [F1, F2, A1, step 3.1, step 4.1, step 6.1] ∎
