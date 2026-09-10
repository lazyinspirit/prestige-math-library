---
id: lem-natural-number-game-strategies-have-continuum-many-plays
kind: lemma
title: "Coding strategies and their compatible plays"
status: draft
origin: pipeline
deps: ["def-gale-stewart-games-on-pruned-trees", "lem-cantor-and-baire-sequence-coding", "thm-schroder-bernstein"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "Exercise 6.8, printed p55, supplies the diagonalization problem; this is its explicit strategy/branch coding prerequisite"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF, on the full natural-number game tree, the strategies of either fixed player are in bijection with $\mathcal N=\mathbb N^{\mathbb N}$. For each fixed strategy its compatible infinite plays are also in bijection with $\mathcal N$.

## Facts & Assumptions

[F1] [[def-gale-stewart-games-on-pruned-trees]] defines strategies on all positions of the player's parity and compatible plays.

[F2] [[lem-cantor-and-baire-sequence-coding]] gives explicit natural-number codes for finite words.

## Proof

**Given:** One of the two players on $\mathbb N^{<\omega}$; every natural is legal at every position.

1.1 Order finite positions by $|s|+\sum_{i<|s|}s(i)$, and within each finite stratum by length and then lexicographically. A stratum is finite because its lengths and entries are bounded by the stratum index. Every position has finitely many predecessors. Restricting to the given parity leaves infinitely many positions (constant-zero words of arbitrarily large permitted length), hence gives a bijective enumeration $e:\mathbb N\to P$. For a strategy $\sigma$ put $a(n)=\sigma(e(n))$. Conversely define $\sigma(e(n))=a(n)$ for any $a\in\mathcal N$. These formulas recover every value in either composition. Legality imposes no further condition on the table, by F1. [F1, F2]

2.1 Given a fixed $\sigma$ and $b\in\mathcal N$, construct $x$ by length recursion: at the player's turns append $\sigma(x\upharpoonright m)$, and at the opponent's kth turn append $b(k)$. All moves are legal. The resulting $x$ is compatible with $\sigma$ by its defining equations. Its opponent subsequence is exactly $b$, proving injectivity. Conversely, for any compatible $x$, take its opponent subsequence $b$; induction on length shows the reconstruction equals $x$, using compatibility at the player's turns. Thus the construction is surjective too. This works for I, whose initial move is prescribed, and II, whose initial opponent coordinate is free. QED. [F1, step 1.1]
