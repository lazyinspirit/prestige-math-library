---
id: thm-borel-payoffs-admit-unraveling-covers
kind: theorem
title: "Borel payoffs admit unraveling covers"
status: published
origin: pipeline
deps: ["lem-countable-borel-hierarchy-exhaustion-and-pullbacks", "lem-closed-payoffs-admit-unraveling-covers", "lem-stabilizing-game-coverings-have-inverse-limits", "lem-game-covering-composition-and-continuity", "thm-transfinite-induction", "def-axiom-of-choice", "prop-minimum-rank-selection-and-collection", "thm-transfinite-recursion"]
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
    - title: "Theorem 5"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Theorem 2.1.8, printed pp76–77"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
    - title: "Theorem, printed p454"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

In ZFC, for every set-sized game tree with terminal taboos $T$, every Borel $A\subseteq[T]$ and every $k\in\mathbb N$, there is a $k$-covering of $T$ whose inverse image of $A$ is clopen.

## Facts & Assumptions

[F1] [[lem-countable-borel-hierarchy-exhaustion-and-pullbacks]] gives exhaustion and preservation of ranks by continuous pullback.

[F2] [[lem-closed-payoffs-admit-unraveling-covers]] supplies every requested-depth unraveling for closed and open payoffs.

[F3] [[lem-stabilizing-game-coverings-have-inverse-limits]] supplies covering inverse limits for coherent systems stabilizing at each finite depth.

[F4] [[lem-game-covering-composition-and-continuity]] gives composition, continuity, and preservation of clopen sets by pullback.

[F5] [[thm-transfinite-induction]] permits induction on the positive countable ranks.

[F6] [[prop-minimum-rank-selection-and-collection]] makes the least-rank witnesses in any nonempty definable class a nonempty set.

[F7] [[thm-transfinite-recursion]] permits set-length recursion with a total rule.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The stated ZFC assumptions. We induct simultaneously for all set alphabets, taboo trees and natural depths; these are quantified parameters, not a set of all trees.

1.1 At rank one, F2 handles open and closed payoffs. At any rank a covering unraveling a set also unravels its complement, since the inverse images are relative complements and the complement of a clopen set is clopen. Thus at a higher rank $\alpha$ it suffices to handle $A=\bigcup_n B_n$ where $B_n\in\Pi^0_{\beta_n}([T])$ and $1\leq\beta_n<\alpha$. Assume by F5 that the theorem holds for all lower ranks and all the quantified parameters. [F1, F2, F5]

2.1 We justify the dependent sequence of cover choices before using it. A state is a finite tower over this fixed $T$, together with its last projection to $T$; a valid successor adds a covering of its last tree unraveling the next pulled-back $B_n$ at depth $k+n$. By F4 that projection is continuous; F1 preserves $\beta_n$ under pullback. The induction hypothesis therefore supplies at least one successor state for every valid state. Use F6 to define $W(s)$ as the set of all valid successors of least member-rank. It is nonempty. On an invalid state define $W(s)=\{s\}$, so this is a definable set-valued operation on every input. [F1, F4, F6, step 1.1]

3.1 Starting with the singleton of the length-zero tower, define $D_{n+1}=D_n\cup\bigcup_{s\in D_n}W(s)$. Replacement and Union form each right side, and F7 forms the sequence (with empty-set default for malformed histories). Then $D=\bigcup_n D_n$ is a set and $W(s)\subseteq D$ for every $s\in D$. A1 chooses $w(s)\in W(s)$ on this set-indexed family. Recursion by F7, $s_{n+1}=w(s_n)$, starting at the valid length-zero state, yields only valid towers of length $n$, since every member of $W(s_n)$ is a valid extension. We have consequently constructed $T_0=T$ and $(k+n)$-coverings $T_{n+1}\to T_n$ unraveling the pullback of $B_n$ to $T_n$. This uses choice on a set, not a choice function on a proper class. [F7, A1, step 2.1]

4.1 Compose adjacent coverings by F4 to get coherent maps $\pi_{j,i}$. They are all $k$-coverings. Given depth $m$, choose $N$ with $k+N\geq m$; every adjacent map beyond $N$ and hence every composite beyond $N$ is identity through that depth, on nodes, taboo labels and the stipulated strategy restrictions. Thus F3 applies and gives $T_\infty$ with coherent $k$-coverings $\pi_{\infty,i}$. For each $n$, the inverse image of $B_n$ in $T_{n+1}$ is clopen by the construction, and F4 makes its further pullback to $T_\infty$ clopen. Coherence identifies this pullback with $\pi_{\infty,0}^{-1}(B_n)$. [F3, F4, step 3.1]

5.1 Their union $O=\pi_{\infty,0}^{-1}(A)$ is open. Apply F2 on the taboo tree $T_\infty$ to $O$ at depth $k$, obtaining a covering $S\to T_\infty$ with clopen inverse image of $O$. Compose with $T_\infty\to T$ by F4. The composite is a $k$-covering, and its inverse image of $A$ is exactly that clopen set. This proves the progressive step; F5 proves all positive ranks, and exhaustion F1 includes every Borel payoff. Empty and whole payoffs are already in the base case. QED. [F1, F2, F4, F5, step 4.1]
