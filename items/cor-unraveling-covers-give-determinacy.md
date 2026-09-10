---
id: cor-unraveling-covers-give-determinacy
kind: corollary
title: "Unraveling covers give determinacy"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: ["lem-game-covering-transfers-winning-strategies", "thm-gale-stewart-open-determinacy", "def-axiom-of-choice"]
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
    - title: "Corollary 3"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Lemma 1, printed p451"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

Assume ZFC. If a game covering unravels $A\subseteq[T]$, then $G(A;T)$ is determined, with the given terminal taboos.

## Facts & Assumptions

[F1] [[thm-gale-stewart-open-determinacy]] proves open-payoff determinacy on taboo trees in ZFC.

[F2] [[lem-game-covering-transfers-winning-strategies]] sends a source winning strategy to a target winning strategy for the same player.

[A1] Assume [[def-axiom-of-choice]], as required for F1.

## Proof

**Given:** A covering $(S,\pi,\phi)$ with $\pi^{-1}(A)$ clopen in $[S]$.

1.1 In particular $\pi^{-1}(A)$ is open in the infinite-play subspace of the taboo tree $S$. These are exactly the payoff and tree hypotheses of F1, whose ZFC hypothesis is licensed by A1. Obtain a winning strategy $\sigma$ for one of the two players in $G(\pi^{-1}(A);S)$. [given, F1, A1]

2.1 Apply F2 to this covering, payoff and winning strategy. It gives $\phi(\sigma)$ winning for the same player in $G(A;T)$; the existence of such a strategy is determinacy. This includes a terminal root or empty branch space, since F1 and F2 both include terminal maximal plays. QED. [F2, step 1.1]
