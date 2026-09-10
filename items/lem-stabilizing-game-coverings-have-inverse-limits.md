---
id: lem-stabilizing-game-coverings-have-inverse-limits
kind: lemma
title: "Stabilizing systems of game coverings have inverse limits"
status: draft
origin: pipeline
deps: ["def-game-covering-and-k-covering", "lem-game-covering-composition-and-continuity", "def-axiom-of-choice", "thm-transfinite-recursion"]
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
    - title: "Lemma 4, replacing independent lifts by successive coherent lifts"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Lemma 4, printed pp453–454"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
    - title: "Lemma 2.1.6, printed pp68–70 (specified-lift formulation)"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
---
## Statement

Assume ZFC. Let $(T_i)_{i\in\mathbb N}$ be taboo trees with coherent $k$-coverings $C_{j,i}=(T_j,\pi_{j,i},\phi_{j,i})$ for $i\leq j$, identity on the diagonal. Coherent means that both maps compose according to $C_{l,i}=C_{j,i}\circ C_{l,j}$ for $i\leq j\leq l$. Suppose for every $n$ there is $i_n$ such that $C_{j,l}$ is an $n$-covering whenever $j\geq l\geq i_n$. Then a taboo tree $T_\infty$ has $k$-coverings $C_{\infty,i}$ to all $T_i$ with $C_{\infty,i}=C_{j,i}\circ C_{\infty,j}$. The conclusion concerns existential lifts, not specified lift functions.

## Facts & Assumptions

[F1] Covering locality, taboo reflection and short-lift exceptions are [[def-game-covering-and-k-covering]].

[F2] Covering maps compose by [[lem-game-covering-composition-and-continuity]].

[A1] Assume [[def-axiom-of-choice]] for strategy extensions and successive lifts from set-sized play spaces.

[F3] [[thm-transfinite-recursion]] supplies set-length history recursion.

## Proof

**Given:** The coherent stabilizing system in the statement.

1.1 Choose increasing stabilization indices $i_n$, enlarging each least qualifying index by the preceding ones. The depth-$\leq n$ nodes and taboo labels of $T_{i_n}$ agree with those of every later stage. These finite-depth restrictions agree on overlaps: compare both with any stage beyond both indices. Their union defines $T_\infty$ on the union of the stage alphabets, which is a set. Prefix closure follows at a common depth. If a node is not taboo, look at the stabilized next depth: at that stage it is nonterminal and has a child, which belongs to the union. If it is taboo, no stage after stabilization has a child. Thus these labels partition exactly the terminal nodes of the union tree. [given, F1]

2.1 For a limit node $s$ of length $n$, take $j\geq i_n,i$ and define $\pi_{\infty,i}(s)=\pi_{j,i}(s)$. Coherence and identity of later maps through depth $n$ make this independent of $j$. Prefix, length and taboo reflection follow by computing at one sufficiently late common stage. For a limit strategy $\sigma$, to define its image below depth $n$, take $j\geq i_{n+1},i$, extend its common finite-depth restriction to a total strategy $\sigma^j$ on $T_j$ using A1, and use $\phi_{j,i}(\sigma^j)$ below $n$. F1 makes this independent of the extension. Comparing at a further stage and using coherence proves independence of $j$ and agreement as $n$ grows. Thus it defines a total strategy $\sigma_i$; legality is inherited at that finite depth. [F1, F2, A1, step 1.1]

3.1 The same finite-depth calculation proves locality, $\phi_{\infty,i}=\phi_{j,i}\circ\phi_{\infty,j}$ and the analogous position identity. Since all stage maps are $k$-coverings, the common nodes/labels through $k$, position identities there and strategy identities below $k$ are inherited by each limit map. It remains only to prove lifting. [F1, F2, step 2.1]

4.1 Fix a maximal $\sigma_i$-consistent play $x_i$ at stage $i$. For every stage $j\geq i$, $\sigma_j=\phi_{j+1,j}(\sigma_{j+1})$ by step 3.1. Therefore F1 gives a nonempty set of maximal $\sigma_{j+1}$-consistent lifts of any maximal $\sigma_j$-consistent play. All candidates lie in the set union of the stage maximal-play spaces. A1 supplies a selector on these nonempty lift sets; F3 recursively gives $x_{j+1}$ lifting $x_j$. These are successive lifts, so $\pi_{j+1,j}(x_{j+1})\subseteq x_j$, with each proper lift taboo for the player $P$ of $\sigma$. [F1, A1, F3, step 3.1]

5.1 If every $x_j$ is infinite, every adjacent projection equality holds. For each $n$ and $j\geq i_n,i$, identity through depth $n$ gives $x_{j+1}\upharpoonright n=x_j\upharpoonright n$. The eventual prefixes are compatible, so their union is an infinite limit branch $y$, consistent with $\sigma$ by the finite-depth definition of $\sigma_j$. Computing its projection to $i$ at a sufficiently late stage gives $\pi_{\infty,i}(y)\upharpoonright n=x_i\upharpoonright n$ for every $n$, hence equality. [F1, step 2.1, step 4.1]

6.1 Otherwise, once a finite $x_j$ occurs, subsequent lengths are nonincreasing natural numbers by length preservation and the prefix requirement; they eventually equal some $l$. Choose a stage after this stabilization and after $i_{l+1}$. The ensuing plays have equal length and are literally the same depth-$l$ node by stabilization. This node $y$ is terminal in $T_\infty$ with their common label, and its finite prefixes obey $\sigma$ by step 2.1. Its projection to stage $i$ is a prefix of $x_i$ by the successive projection identities. If that prefix is proper, at least one adjacent lift was proper (otherwise composition would give equality); that lift has label taboo for $P$. Each later proper lift has the same label, and each later exact lift inherits it by taboo reflection. Thus $y$ is taboo for $P$. If there was no proper lift, the projection equals $x_i$. Both alternatives satisfy F1. This completes the missing lifting condition and the theorem. QED. [F1, step 2.1, step 3.1, step 4.1, step 5.1]
