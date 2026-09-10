---
id: thm-borel-games-are-determined
kind: theorem
title: "Borel games are determined"
status: draft
origin: pipeline
deps: ["thm-borel-payoffs-admit-unraveling-covers", "cor-unraveling-covers-give-determinacy", "def-axiom-of-choice"]
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
    - title: "Corollary 6"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Theorem 2.1.9, printed p77"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
    - title: "Corollary, printed p454"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

In ZFC every Borel payoff game on a set-sized tree with terminal taboos is determined. In particular every Borel Gale–Stewart game on $\mathbb N$ is determined. This theorem uses AC and is not a ZF supplier for the AD implications.

## Facts & Assumptions

[F1] [[thm-borel-payoffs-admit-unraveling-covers]] supplies an unraveling at any natural depth.

[F2] [[cor-unraveling-covers-give-determinacy]] descends determinacy from an unraveling.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** A taboo tree $T$ on a set alphabet and Borel $A\subseteq[T]$.

1.1 The set-alphabet and Borel hypotheses are exactly those of F1; A1 supplies its choice assumption. Apply it with $k=0$ to obtain a covering whose inverse image of $A$ is clopen. By F2, with the same ZFC assumption, $G(A;T)$ is determined. This also applies when the root is terminal or there are no infinite branches, since both suppliers include finite taboo plays. [F1, F2, A1]

2.1 For an ordinary Gale–Stewart game take $T=\mathbb N^{<\mathbb N}$ and no terminal taboos. This is a set-sized pruned tree and its branch space with the cylinder topology is $\mathbb N^{\mathbb N}$. Thus a Borel payoff satisfies step 1.1, and its conclusion is precisely a winning strategy for one of the ordinary two players. QED. [step 1.1]
