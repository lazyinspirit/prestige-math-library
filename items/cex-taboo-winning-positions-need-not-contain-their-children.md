---
id: cex-taboo-winning-positions-need-not-contain-their-children
kind: counterexample
title: "A winning taboo position can have a nonwinning child"
status: published
origin: pipeline
deps: ["def-game-trees-with-terminal-taboos"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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
    - title: "Lemma 1 proof, downward-closure assertion (claim refuted by the displayed local tree)"
      url: "https://arxiv.org/html/2401.09659v1"
---
## Statement refuted

In a game with terminal taboos, a position from which a player can force a terminal taboo for the opponent need not have only such winning children. In particular, deleting all positions from which either player can force an opponent taboo need not leave a prefix-closed tree. Here infinite play does not count as successful terminal reachability for either player.

## Facts & Assumptions

[F1] A terminal taboo loses for its named player, while nonterminal moves and fixed-history parity are as in [[def-game-trees-with-terminal-taboos]].

## Counterexample

**Given:** The tree $T=\{\varnothing,(0)\}\cup\{(1)^\frown0^n:n\in\mathbb N\}$. Its only terminal node is $(0)$; declare it taboo for II. The root is I-to-move. For definiteness the infinite payoff is empty; terminal reachability ignores that payoff.

1.1 Prefixes of $(1)^\frown0^n$ are the root or words $(1)^\frown0^m$ with $m\leq n$, all listed in $T$. The only other nonempty word is $(0)$, whose sole proper prefix is the root. Thus $T$ is a nonempty tree. The node $(0)$ is terminal and every node on the other ray has the unique child obtained by appending $0$, verifying the asserted terminal partition. [given, F1]

2.1 At the root I can choose $0$ and reach the II taboo immediately. Below the child $(1)$ every legal continuation is forced and the only maximal continuation is the infinite sequence $(1,0,0,\ldots)$. No continuation from that child reaches a terminal node. Neither player can therefore force an opponent terminal taboo there, although I can do so at its parent. [F1, step 1.1]

3.1 The proposed deletion removes the root by step 2.1 and retains $(1)$ by the same step. A set retaining $(1)$ but omitting its empty prefix is not a tree. This is the required witness against both the child assertion and the resulting deletion rule. QED. [step 1.1, step 2.1]

## Remarks

This witness corrects the downward-closure assertion in the proof of Buffard–Levrel–Mayo Lemma 1 (arXiv v1). It does not refute a reduction that keeps only nodes all of whose prefixes avoid the two reachability-winning sets. It is an AI-generated counterexample and is not a dependency supplier.
