---
id: def-game-covering-and-k-covering
kind: definition
title: "Game coverings, k-coverings and unraveling"
status: published
origin: pipeline
deps: ["def-game-trees-with-terminal-taboos"]
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
    - title: "covering definition before Lemma 2 and k-covering definition before Lemma 4"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "definitions printed pp65–68, triple variant p66"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
---
## Definition

Let $T,S$ be trees with terminal taboos in the sense of [[def-game-trees-with-terminal-taboos]]. A **covering of $T$** is a triple $(S,\pi,\phi)$ with the following data and requirements, formulated in ZF.

The position map $\pi:S\to T$ preserves lengths and prefixes. It **reflects target taboos**: if $\pi(s)$ is taboo for $P$ in $T$, then $s$ is taboo for $P$ in $S$. For $y\in[S]$, define $\pi(y)=\bigcup_n\pi(y\upharpoonright n)$. Prefix and length preservation make this a branch of $T$ with those specified restrictions. For a finite maximal play use the position map.

The strategy map $\phi$ sends every total strategy on $S$ to a total strategy for the same player on $T$. Regard strategies as tagged by their player, even if the underlying functions happen to coincide. **Finite-depth locality** means: if two input strategies for the same player agree at all positions of length $<n$, their images agree at all target positions of length $<n$.

**Lifting requirement.** For each strategy $\sigma$ for player $P$ on $S$ and each maximal play $x$ on $T$ consistent with $\phi(\sigma)$, there exists a maximal play $y$ on $S$ consistent with $\sigma$ such that $\pi(y)\subseteq x$ and either $\pi(y)=x$ or $y$ is taboo for $P$. Thus a lift may end early only as a loss for its strategy's player. No specified lift function is part of the data, and independent existential lifts are not asserted to be coherent.

For $k\in\mathbb N$, this is a **$k$-covering** if $S,T$ have identical nodes and taboo labels at lengths $\leq k$, $\pi$ is the identity on those nodes, and $\phi(\sigma)$ equals $\sigma$ at positions of length $<k$. In particular a zero-covering identifies the roots and their taboo labels; its strategy-identity condition is vacuous.

A covering **unravels** $A\subseteq[T]$ if $\pi^{-1}(A)$ is clopen in $[S]$. This preimage uses infinite branches only. The branch map is continuous: for a cylinder $[T]_p$ its preimage is $\bigcup\{[S]_s:|s|=|p|,\ \pi(s)=p\}$. A finite maximal lifted play can project to a nonterminal target position; taboo reflection is not being reversed in that situation.
