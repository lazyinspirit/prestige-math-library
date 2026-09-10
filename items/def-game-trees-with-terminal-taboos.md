---
id: def-game-trees-with-terminal-taboos
kind: definition
title: "Game trees with terminal taboos"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets", "def-gale-stewart-games-on-pruned-trees"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definitions preceding Lemma 1"
      url: "https://arxiv.org/html/2401.09659v1"
---
## Definition

Let $T$ be a nonempty tree as in [[def-trees-and-bodies-on-discrete-alphabets]], now allowing terminal nodes. Partition its terminal nodes into $\mathcal T_I$ and $\mathcal T_{II}$. A node in $\mathcal T_P$ is **taboo for $P$**: reaching it loses for $P$, irrespective of whose turn would have come next. The partition is part of the data, not determined by parity.

The maximal plays are $\lceil T\rceil=[T]\cup\mathcal T_I\cup\mathcal T_{II}$. For a payoff $A\subseteq[T]$, player I wins exactly the members of $A\cup\mathcal T_{II}$ and player II wins all other maximal plays. At nonterminal nodes, parity, legal moves, consistency and strategies are as in [[def-gale-stewart-games-on-pruned-trees]]. A strategy is defined at every nonterminal node of its player's parity and nowhere needs a move at a terminal node. Thus a terminal root already decides the game.

Give $\lceil T\rceil$ the cylinder topology, with cylinder $\{x\in\lceil T\rceil:s\subseteq x\}$ at $s$. Comparable words give the longer cylinder as intersection; incomparable words give empty intersection, and the root cylinder covers the space. A terminal cylinder is its singleton. The complement of $[T]$ is the union of these terminal singleton cylinders, so $[T]$ is a closed subspace. **Payoff complexity** means complexity of $A$ in this infinite-play subspace. It is not silently measured in $\lceil T\rceil$.

For a position $p\in T$, the fixed-history tree is $T_p=\{s\in T:s\subseteq p\text{ or }p\subseteq s\}$. Its taboos are the original taboos in this tree. Earlier moves are forced and all lengths retain their original parity. No player-name interchange is built into this subgame convention. These definitions use ZF only; when all branches are terminal the infinite-play subspace is empty.
