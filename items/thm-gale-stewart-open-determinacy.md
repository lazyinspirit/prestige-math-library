---
id: thm-gale-stewart-open-determinacy
kind: theorem
title: "Open and closed Gale–Stewart games are determined"
status: draft
origin: pipeline
deps: ["def-gale-stewart-games-on-pruned-trees", "lem-taboo-games-reduce-to-pruned-residual-games", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Theorem 6.4 and Exercise 6.5, printed pp54–55 (general-alphabet pasting made explicit)"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
    - title: "recalled Gale–Stewart result and Lemma 1, printed p451"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

In ZFC, an open or closed payoff on a nonempty pruned tree over a set alphabet gives a determined game. Either player may move first at a fixed history. The result also holds for terminal-taboo games, with open or closed measured in the infinite-play subspace.

## Facts & Assumptions

[F1] Legal plays, full-position strategies and cylinder topology are [[def-gale-stewart-games-on-pruned-trees]].

[F2] [[lem-taboo-games-reduce-to-pruned-residual-games]] transfers determinacy of a restricted payoff from the pruned residual tree to a taboo tree.

[A1] Assume [[def-axiom-of-choice]] for legal moves and strategy selections.

## Proof

**Given:** First consider a pruned tree and an open winning payoff $B$ for player $P$, with opponent $Q$.

1.1 Let $U=\{p:[T]_p\subseteq B\}$, and let $W$ be the positions from which $P$ has a strategy forcing a visit to $U$ at a finite time, allowing time zero. Strategy sets and the set of positions are sets; A1 fixes one such strategy for each $p\in W$ and fixes default legal moves. Every branch in $B$ has a prefix in $U$ by openness and F1. [F1, A1]

2.1 At $p\notin U$, if $P$ moves and $p\in W$, the strategy's first chosen child is in $W$ by restriction. Conversely a child in $W$ lets $P$ choose it and follow its selected strategy. If $Q$ moves and $p\in W$, restriction after every possible first opponent move makes all children belong to $W$. Conversely, if all children are in $W$, following the selected continuation for the child the opponent chooses forces a visit. Thus outside $W$, every child of a $P$-node avoids $W$, and at least one child of a $Q$-node avoids $W$. [F1, step 1.1]

3.1 If the initial position is in $W$, its selected strategy reaches $U$, and every continued branch lies in $B$ because it extends that visited node. If the initial position is outside $W$, use A1 to choose an avoiding child at each $Q$-node outside $W$ and defaults elsewhere. By step 2.1 every consistent branch remains outside $W$ and therefore outside $U$. Step 1.1 shows it is outside $B$. In this case $Q$ wins. This reasoning refers to the actual player at each node, so it also works after either parity of fixed history. [F1, A1, step 1.1, step 2.1]

4.1 If the specified I payoff is closed, its complement is an open II payoff; apply step 3.1 with $P=II$, retaining the original turn parity. Finally F2 reduces a taboo game to either an already winning reachability case or a pruned residual game; cylinder restriction preserves open and closed sets. Applying the proved pruned result and F2 completes both cases. QED. [F2, step 3.1]
