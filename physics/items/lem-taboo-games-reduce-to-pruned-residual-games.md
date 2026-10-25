---
id: lem-taboo-games-reduce-to-pruned-residual-games
kind: lemma
title: "Taboo games reduce to pruned residual games"
status: published
origin: pipeline
deps: ["lem-terminal-reachability-and-residual-game-positions", "def-game-trees-with-terminal-taboos", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 1 (conclusion retained, erroneous downward-closure step replaced)"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "printed p64, residual-quasistrategy reduction"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
---
## Statement

In ZFC, either the root of a taboo tree $T$ belongs to $W_I\cup W_{II}$, or

$$S=\{p\in T:(\forall q\subseteq p)\ q\notin W_I\cup W_{II}\}$$

is a nonempty pruned subtree. In the latter case every winning strategy for $G(A\cap[S];S)$ extends to a winning strategy for $G(A;T)$, for any $A\subseteq[T]$. Restriction to $[S]$ preserves every positive Borel level. Consequently determinacy at each such level for pruned set trees is equivalent to determinacy at that level for set trees with taboos.

## Facts & Assumptions

[F1] The reachability sets are disjoint and satisfy the some-child/every-child equivalences of [[lem-terminal-reachability-and-residual-game-positions]].

[F2] The maximal-play and subspace payoff conventions are [[def-game-trees-with-terminal-taboos]].

[A1] Assume [[def-axiom-of-choice]], including the fixed winning reachability strategies from F1.

## Proof

**Given:** A nonempty taboo tree $T$ and $A\subseteq[T]$.

1.1 A root in $W_P$ has a strategy reaching an opponent taboo, which wins for $P$ independently of $A$. Otherwise the root belongs to $S$, and the all-prefix definition makes $S$ prefix closed. A node of $S$ cannot be terminal in $T$, since each terminal is winning for the player opposite its label. [F1, F2]

2.1 At $p\in S$, suppose $P$ is to move and $Q$ is the other player. No child is in $W_P$, since the some-child implication would put $p$ in $W_P$. Some child is outside $W_Q$, since otherwise the every-child implication would put $p$ in $W_Q$. This child avoids both sets, and all its earlier prefixes are prefixes of $p$; hence it belongs to $S$. Thus $S$ is pruned. [F1, step 1.1]

3.1 Let $\sigma$ win for $P$ on $S$. Follow it as long as play stays in $S$. If the opponent $Q$ first exits at child $q$ of $p\in S$, then $q\notin W_Q$ by the some-child clause at the $Q$-position $p$. Since this is the first exit, the only failing prefix is $q$ itself, so $q\in W_P$. Switch to the fixed $P$ reachability strategy at $q$. A1 provides default legal moves after any first inconsistent own move, making the strategy total without affecting consistent plays. [F1, A1, step 2.1]

4.1 A consistent play that exits therefore terminates at an opponent taboo. A consistent play that never exits cannot terminate by step 1.1, so is a branch of $S$; its payoff membership is unchanged by replacing $A$ with $A\cap[S]$, and $\sigma$ wins it. This proves the strategy transfer for either player. [F2, step 1.1, step 3.1]

5.1 A cylinder of $[T]$ restricts to the corresponding cylinder of $[S]$, so opens restrict to opens. Moreover $( [T]\setminus B)\cap[S]=[S]\setminus(B\cap[S])$ and $(\bigcup_nB_n)\cap[S]=\bigcup_n(B_n\cap[S])$. Induction over any positive-rank complement/union expression therefore preserves its Borel level, at limits as well as successors. Applying the hypothesized pruned-tree determinacy and step 4.1 proves the taboo direction; the reverse takes a pruned tree with both taboo sets empty. QED. [F2, step 4.1, algebra]
