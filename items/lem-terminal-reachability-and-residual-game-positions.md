---
id: lem-terminal-reachability-and-residual-game-positions
kind: lemma
title: "Terminal reachability and residual positions"
status: draft
origin: pipeline
deps: ["def-game-trees-with-terminal-taboos", "def-axiom-of-choice", "thm-transfinite-recursion"]
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
    - title: "Lemma 1, corrected local reachability argument"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "paragraph preceding Lemma 2.1.2, printed p64 (independent residual-game comparison)"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
---
## Statement

Assume ZFC. In a tree with terminal taboos, let $W_P$ be the set of positions from which $P$ has a strategy forcing a terminal taboo for the other player; infinite play is not a success. Then $W_I\cap W_{II}=\varnothing$. For nonterminal $p$, membership in $W_P$ is equivalent to some child belonging to $W_P$ when $P$ moves at $p$, and to every child belonging to $W_P$ when the opponent moves. Winning reachability strategies can be fixed simultaneously for all positions in $W_P$.

## Facts & Assumptions

[F1] Taboo labels, legal strategies, and fixed-history games retain their original parity; see [[def-game-trees-with-terminal-taboos]].

[A1] Assume [[def-axiom-of-choice]].

[F2] [[thm-transfinite-recursion]] includes recursion on the natural-number well-order with access to the preceding history.

## Proof

**Given:** A set tree $T$ with a partition of its terminal nodes and a player $P$; write $Q$ for the other player.

1.1 All strategies in all fixed-history subgames are subsets of a fixed set of position/move pairs. A1 selects legal default moves at all nonterminal positions, and a winning reachability strategy $\sigma_p$ for each $p\in W_P$, from its nonempty set of such strategies. A terminal position belongs to $W_P$ exactly when its label is taboo for $Q$: the already finished play is the only maximal play. [F1, A1]

2.1 At a nonterminal $P$-position $p\in W_P$, the first move of $\sigma_p$ chooses a child $q$; restricting the strategy beyond that move proves $q\in W_P$. Conversely if a child $q\in W_P$ exists, choose that move and then follow $\sigma_q$, with defaults elsewhere. Every consistent maximal play then reaches a $Q$ taboo. Thus the some-child equivalence holds. [F1, step 1.1]

2.2 At a nonterminal $Q$-position $p\in W_P$, the opponent may choose any child; restricting $\sigma_p$ after each such choice shows every child belongs to $W_P$. Conversely, if every child belongs to $W_P$, after the opponent's first move to $q$ use the already selected $\sigma_q$. Each consistent play follows one fixed winning continuation and thus terminates at a $Q$ taboo. This proves the every-child equivalence, without requiring a uniform time bound. [F1, step 1.1]

3.1 If $p\in W_I\cap W_{II}$, follow the two respective winning strategies from the fixed history $p$. At each nonterminal stage the parity determines one prescribed legal move. Recursion F2, stopping at a terminal node if one occurs, yields a unique maximal play; if no terminal is reached, the union of its prefixes is an infinite branch. This play is consistent with both strategies, so each strategy forces it to terminate at a taboo for its opponent. A terminal cannot have both labels by F1. Hence the intersection is empty, and all assertions follow. QED. [F1, F2, step 1.1, step 2.1, step 2.2]
