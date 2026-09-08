---
id: thm-diamond-constructs-normal-suslin-tree
kind: theorem
title: "Diamond constructs a normal splitting Suslin tree"
status: draft
origin: pipeline
deps: [def-diamond-on-omega-one, lem-countable-tree-antichain-sealing, lem-club-tree-coding-antichain-reflection, lem-splitting-cofinal-branch-gives-antichain, thm-transfinite-recursion, thm-countable-union-of-countable, thm-zorn, thm-well-ordering-theorem, def-normal-splitting-set-theoretic-tree, def-aronszajn-suslin-and-special-tree, lem-tree-predecessors-and-common-extensions, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Theorem 9.10 and Lemma 9.11, printed pp44–45; consecutive coding and deterministic recursion expanded locally"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, $\diamondsuit$ implies that a normal splitting Suslin tree exists. It may be constructed with underlying set $\omega_1$, a singleton root level, and countably infinite levels at every positive height.

## Facts & Assumptions

**Given:** A diamond sequence $(A_\alpha)_{\alpha<\omega_1}$; assume AC. Nodes are ordinals allocated consecutively.

[F1] Each target subset of $\omega_1$ is guessed on a stationary set. [[def-diamond-on-omega-one]]

[F2] At a nonzero countable limit height, a countable normal tree and maximal antichain admit a countable covering family of distinct cofinal branches meeting that antichain; adding their tops preserves normality and existing splitting. [[lem-countable-tree-antichain-sealing]]

[F3] For any coding of a height-$\omega_1$ countable-level tree, a maximal antichain reflects correctly on a club of coding and level initial segments. [[lem-club-tree-coding-antichain-reflection]]

[F4] A cofinal branch in a splitting $\omega_1$-tree gives an uncountable antichain. [[lem-splitting-cofinal-branch-gives-antichain]]

[F5] Transfinite recursion realizes a specified rule from earlier values. [[thm-transfinite-recursion]]

[F6] Countable unions of countable sets are countable under countable choice. [[thm-countable-union-of-countable]]

[F7] Under AC a nonempty poset with upper bounds for every chain has a maximal element. [[thm-zorn]]

[F8] AC well-orders every set. [[thm-well-ordering-theorem]]

[F9] Normality has unique-root, higher-extension and limit-predecessor-uniqueness clauses; splitting is separate. [[def-normal-splitting-set-theoretic-tree]]

[F10] A Suslin tree is an $\omega_1$-tree with neither a cofinal branch nor an uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F11] Nodes have unique predecessors at smaller heights and nodes below a common extension are comparable. [[lem-tree-predecessors-and-common-extensions]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 Start with $T_0=\{0\}$. Inductively the union $U_\alpha=\bigcup_{\beta<\alpha}T_\beta$ will be a countable ordinal $\eta_\alpha$, carrying a normal splitting tree of height $\alpha$ whenever $\alpha>0$. Every new nonroot level will use the fresh block $[\eta_\alpha,\eta_\alpha+\omega)$. To make the recursive rule single-valued, F8 and A1 fix a well-order of the set $\mathcal P(\omega_1\times\omega_1)$. Among the tree-order relations on the prescribed new ordinal domain satisfying the specified extension requirements below, always take the first. These relations form a set; existence is proved at each stage below. Define an arbitrary empty output for histories not satisfying the invariants. [F5, F8, F9, A1, given]

2.1 At a successor height $\alpha=\beta+1$, give each node of $T_\beta$ countably infinitely many distinct immediate successors. The set of pairs $T_\beta\times\omega$ is countably infinite: for each node enumerate its copy of $\omega$ and use F6, while one copy witnesses infinitude. Transfer these successors by a bijection onto the fresh block. Their predecessors are their parent and its predecessors. Thus every new predecessor order has type $\beta+1$, every old node extends to the new level by first extending to $T_\beta$, and every last-level parent now splits. No new limit-level uniqueness condition arises. This proves existence of a legal successor relation for step 1.1. [F6, F9, F11, A1, step 1.1]

3.1 At nonzero limit $\alpha<\omega_1$, take the union of the earlier orders. It is countable by F6 since $\alpha$ is countable, and normal of height $\alpha$: any two nodes or requested extension at an old level occur together in an earlier stage. Old predecessor sets are unchanged, so their order types and limit uniqueness persist. Every old node already has its splitting successors, since its successor height is below $\alpha$. If the raw guess $A_\alpha$ is a subset of this node set and is a maximal antichain there, use it; otherwise use the singleton root antichain, which is maximal because the unique root is below every node by F11. Apply F2 to the selected antichain. The distinct branches supplied by F2 cover the old tree and each receives one top. There are countably infinitely many such branches: they are countable in number, and each meets the infinite level $T_1$ in only one node, so finitely many cannot cover $T_1$. Transfer the tops bijectively to the fresh block. F2 gives exactly the legal extension required by step 1.1, and in the guess case every new node extends a member of $A_\alpha$. [F2, F6, F9, F11, A1, step 1.1, step 2.1]

4.1 F5 now supplies all stages. Each allocated block is countable, and at countable limits the union of earlier blocks is a countable ordinal by F6; thus allocation stays below $\omega_1$. The final union of node sets is an ordinal at most $\omega_1$. It cannot be countable: the least node of each nonempty level gives an injection of $\omega_1$ into it. Therefore the union is exactly $\omega_1$. The union order is a normal splitting height-$\omega_1$ tree, since each predecessor set, extension requirement and splitting pair is fixed in an earlier stage. Its levels are the singleton root and the prescribed infinite countable blocks. [F5, F6, F9, A1, step 1.1, step 2.1, step 3.1]

5.1 Let $B$ be any antichain of the final tree. Order the set of antichains containing $B$ by inclusion. It is nonempty because it contains $B$. The union of a nonempty inclusion chain is an antichain: any pair of its nodes appears together in the larger of two chain members. It contains $B$ and is an upper bound. For the empty chain use $B$ as upper bound. Thus F7 and A1 extend $B$ to a maximal antichain $A$. [F7, A1, step 4.1]

6.1 Apply F3 to $A$ and the identity coding of the ordinal node set. On a club $C$ of nonzero limit $\delta$, the nodes below level $\delta$ are exactly the ordinal $\delta$, and $A\cap\delta$ is maximal there. F1 says $S=\{\delta:A\cap\delta=A_\delta\}$ is stationary, so take $\delta\in C\cap S$. The guess case of step 3.1 was used at this very stage, because $A_\delta=A\cap\delta$ was a subset of the current tree and maximal in it. Thus every level-$\delta$ node extends a member of $A\cap\delta$. Every later node has a level-$\delta$ predecessor by F11 and also extends such a member. If any node of $A$ had height at least $\delta$, it would be strictly above another member of $A$, violating the antichain property. Hence $A\subseteq\delta$, which is countable, and $B\subseteq A$ is countable as well. [F1, F3, F11, step 3.1, step 4.1, step 5.1]

7.1 The tree has no uncountable antichain by step 6.1. If it had a cofinal branch, splitting and F4 would produce such an antichain, a contradiction. It is therefore Suslin by F10, with the normality, splitting, node set and level sizes established in step 4.1. [F4, F10, step 4.1, step 6.1] ∎
