---
id: def-gale-stewart-games-on-pruned-trees
kind: definition
title: "Gale–Stewart games and strategies"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets", "def-topological-space"]
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
    - title: "Opening definitions, before Lemma 1; compare Marker Definitions 6.1–6.3"
      url: "https://arxiv.org/html/2401.09659v1"
---
## Definition

Let $E$ be a nonempty set, $T\subseteq E^{<\omega}$ a nonempty pruned tree ([[def-trees-and-bodies-on-discrete-alphabets]]), and $A\subseteq[T]$. In $G(A;T)$, player I moves at even-length positions and player II at odd-length positions. A legal move at $s$ is $e\in E$ such that $s^\frown e\in T$. A full play is a branch $x\in[T]$. Player I wins it when $x\in A$; otherwise player II wins.

A **strategy for player $P$** assigns a legal move to every position at which $P$ moves, including positions inconsistent with its earlier prescriptions. A branch $x$ is consistent with $\sigma$ when $x(n)=\sigma(x\upharpoonright n)$ at each coordinate of that player's parity. The strategy is **winning** if every consistent branch is won by that player. The game is **determined** if at least one player has a winning strategy. These are definitions in ZF; a legal move exists individually at each position, but no simultaneous strategy-existence assertion for arbitrary $E$ is implicit.

For $s\in T$ put $[T]_s=\{x\in[T]:s\subseteq x\}$. These cylinders, including $[T]_\varnothing=[T]$, form a basis: two cylinders intersect in the longer one when the words are comparable, and are disjoint otherwise. Unions of cylinders therefore satisfy the topology axioms in [[def-topological-space]]. Moreover

$$[T]\setminus[T]_s=\bigcup\{[T]_t:t\in T,\ |t|=|s|,\ t\ne s\},$$

so cylinders are clopen. Empty cylinders are permitted. Neither this topology nor the winning-strategy definition asserts nonemptiness of $[T]$ in ZF for arbitrary $E$.
