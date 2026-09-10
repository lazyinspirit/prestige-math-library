---
id: lem-game-covering-transfers-winning-strategies
kind: lemma
title: "Winning strategies descend through game coverings"
status: published
origin: pipeline
deps: ["def-game-covering-and-k-covering"]
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
    - title: "Lemma 2"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Lemmas 2.1.3–2.1.4, printed pp67–68"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
---
## Statement

In ZF, if $(S,\pi,\phi)$ covers a taboo tree $T$ and $\sigma$ wins $G(\pi^{-1}(A);S)$ for player $P$, then $\phi(\sigma)$ wins $G(A;T)$ for the same player, for every $A\subseteq[T]$.

## Facts & Assumptions

[F1] [[def-game-covering-and-k-covering]] supplies a same-player strategy map, taboo reflection, and the existential maximal-play lifting requirement.

## Proof

**Given:** A covering, a payoff $A$, and a winning strategy $\sigma$ for $P$ on its source.

1.1 Let $x$ be any maximal play consistent with $\phi(\sigma)$. F1 gives a maximal $\sigma$-consistent lift $y$ with $\pi(y)\subseteq x$. Since $\sigma$ wins, $y$ is not taboo for $P$. The losing-short-lift alternative is therefore impossible, so $\pi(y)=x$. [given, F1]

2.1 If $y$ is infinite, $x$ is infinite by length preservation. When $P=I$, winning gives $y\in\pi^{-1}(A)$, hence $x\in A$. When $P=II$, winning gives $y\notin\pi^{-1}(A)$, hence $x\notin A$. Thus $x$ wins for $P$ in either case. [F1, step 1.1]

3.1 If $y$ is finite, equality in step 1.1 makes $x$ finite and maximal, hence a terminal taboo. If it were taboo for $P$, reflection F1 would make $y$ taboo for $P$, contrary to its winning status. The terminal partition therefore labels $x$ taboo for the opponent, so it wins for $P$. Every consistent maximal $x$ has now been treated, proving the asserted winning strategy. QED. [F1, step 1.1, step 2.1]
