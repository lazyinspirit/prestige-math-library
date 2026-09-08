---
id: thm-splitting-suslin-tree-poset-square-not-ccc
kind: theorem
title: "A ccc tree poset whose square is not ccc"
status: draft
origin: pipeline
deps: [def-poset-ccc-and-knaster-property, def-finite-support-poset-product, def-normal-splitting-set-theoretic-tree, def-aronszajn-suslin-and-special-tree, lem-tree-predecessors-and-common-extensions, def-axiom-of-choice]
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
    - title: "Monk, Set theory following Jech (2024), tree definitions printed p65 and Proposition 9.34 printed pp86–87; split-pair product proof supplied locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, if $T$ is a normal splitting Suslin tree, then the poset $P=(T,\le_P)$, where $p\le_Pq$ iff $q\le_Tp$, is ccc, whereas its coordinatewise square $P\times P$ is not ccc.

For each parent $t$, choose two distinct immediate successors $t^0,t^1$. The map $t\mapsto(t^0,t^1)$ is injective and its image is an uncountable antichain in the square.

## Facts & Assumptions

**Given:** Such $T$; assume AC.

[F1] For the reverse order of a tree, poset compatibility is exactly tree comparability; ccc means no uncountable incompatible subset. [[def-poset-ccc-and-knaster-property]]

[F2] In a finite product compatibility is coordinatewise. [[def-finite-support-poset-product]]

[F3] Normality gives a unique root and splitting gives two distinct immediate successors at every height whose successor is below the tree height. [[def-normal-splitting-set-theoretic-tree]]

[F4] A Suslin tree has height $\omega_1$, countable levels, and no uncountable tree antichain. [[def-aronszajn-suslin-and-special-tree]]

[F5] Common predecessors are comparable, and predecessors at a smaller height are unique; strict tree order increases height. [[lem-tree-predecessors-and-common-extensions]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 F1 identifies every poset antichain in $P$ with a tree antichain, which is countable by F4. Thus $P$ is ccc. Its root is greatest in the reverse order, since every node has that unique root below it by F5. Therefore F2 applies to its two-factor product. [F1, F2, F3, F4, F5, given]

1.2 Every $t\in T$ has two distinct immediate successors, since $\operatorname{ht}(t)+1<\omega_1$; choose an ordered pair $(t^0,t^1)$ simultaneously for all $t$ using F3 and A1. Each has height $\operatorname{ht}(t)+1$: a larger height would give an intermediate predecessor by F5. Define $e(t)=(t^0,t^1)$. This map is injective: equality of its first coordinates forces equal parent heights and then identical predecessors at that height by F5. The tree is uncountable, because its height map is onto $\omega_1$ (use height and F5 for nonempty levels) and a countable set cannot have uncountable image. Hence $e[T]$ is uncountable. [F3, F4, F5, A1, given]

2.1 For incomparable parents $t,u$, the nodes $t^0,u^0$ cannot be comparable: a comparison would give a common extension of $t,u$, forcing them comparable by F5. Thus these product pairs are incompatible by F1 and F2. For comparable distinct parents, interchange their names if necessary so that $t<_Tu$. Suppose both coordinates of $e(t),e(u)$ were compatible. F1 and heights then give $t^i\le_Tu^i$ for $i=0,1$. Both $t^i$ and $u$ are below $u^i$, so are comparable by F5. Since $\operatorname{ht}(t^i)=\operatorname{ht}(t)+1\le\operatorname{ht}(u)$, this forces $t^i\le_Tu$. Unique predecessors at that height (or equality when heights coincide) would give $t^0=t^1$, contrary to their choice. Hence at least one coordinate is incompatible, and F2 makes the product pairs incompatible. Thus $e[T]$ is an uncountable product antichain, proving the square is not ccc. [F1, F2, F5, step 1.2] ∎
