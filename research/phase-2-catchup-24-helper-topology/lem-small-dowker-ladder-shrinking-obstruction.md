---
id: lem-small-dowker-ladder-shrinking-obstruction
kind: lemma
title: Small Dowker ladder shrinking obstruction
status: draft
origin: pipeline
deps: [def-small-dowker-ladder-topology, lem-small-dowker-ladder-normality, thm-countable-paracompactness-shrinking-criterion, thm-dowker-product-characterization, def-axiom-of-choice, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rinot–Shalev, A guessing principle from a Souslin tree, with applications to topology, Lemma 3.1 p. 16 and Corollaries 3.9, 3.11 p. 19"
      url: https://www.assafrinot.com/files/paper48.pdf
---

## Statement

Assume AC and the hypotheses of [[def-small-dowker-ladder-topology]]. Its ladder space $X$ has cardinality $\aleph_1$ and is not countably paracompact. The decreasing closed sets $D_n=\omega_1\setminus W_n$, $n<\omega$, have empty intersection, but every sequence of open expansions $U_n\supseteq D_n$ has nonempty intersection. The product $X\times[0,1]$, with the usual interval and product topology, is not normal.

## Facts & Assumptions

**Given:** The ladder space $X$ on $\omega_1$ and AC; $W_n=\bigcup_{j\le n}S_j$ and $D_n=\omega_1\setminus W_n$.

[F1] The sets $(S_n)_{n<\omega}$ partition $\omega_1$, and each $S_n$ for $n\ge1$ is stationary ([[def-small-dowker-ladder-topology]]).

[F2] This space is normal Hausdorff, each $W_n$ is open, and no two disjoint closed sets are both uncountable ([[lem-small-dowker-ladder-normality]]).

[F3] Under countable choice, countable unions of countable sets are countable and countable subsets of $\omega_1$ are bounded; $\omega_1$ is the least uncountable ordinal and is a cardinal ([[thm-countable-union-of-countable]], [[thm-countable-subsets-of-omega-one-are-bounded]], [[thm-omega-one-is-the-least-uncountable-ordinal]]).

[F4] In a normal space, countable paracompactness is equivalent to the existence of open expansions with empty intersection for every decreasing closed sequence with empty intersection ([[thm-countable-paracompactness-shrinking-criterion]], condition (iv)).

[F5] For a $T_1$ space, normality of its product with $[0,1]$ is equivalent to normality and countable paracompactness of the space ([[thm-dowker-product-characterization]]).

[A1] AC supplies countable choice in F3 and the assumptions of F4–F5 ([[def-axiom-of-choice]]).

## Proof

1.1 Since $W_n$ is open and increasing, its complements $D_n$ are closed and decreasing. A point belongs to a unique level $S_j$ and is excluded from $D_n$ for all $n\ge j$, so $\bigcap_nD_n=\varnothing$. Each $D_n$ contains $S_{n+1}$. A stationary subset of $\omega_1$ is uncountable: a countable set is bounded by F3 and therefore misses a club tail. Hence each $D_n$ is uncountable, including $D_0$. [F1, F2, F3, A1]

2.1 Let $(U_n)_{n<\omega}$ be any sequence of open sets with $D_n\subseteq U_n$. The closed complement $F_n=\omega_1\setminus U_n$ is disjoint from the uncountable closed $D_n$. Thus $F_n$ is countable by F2. AC, through F3, makes $\bigcup_nF_n$ countable, so it cannot equal $\omega_1$. Consequently $\bigcap_nU_n=\omega_1\setminus\bigcup_nF_n\ne\varnothing$. No monotonicity of the expansions is needed; empty $F_n$ cause no exception. [step 1.1, F2, F3, A1]

3.1 The normal space supplied by F2 fails condition (iv) of F4 by steps 1.1–2.1, and hence is not countably paracompact. It is $T_1$, since the normality lemma proves singleton closedness. F5 therefore shows $X\times[0,1]$ cannot be normal. Finally, its underlying set is literally $\omega_1$, whose cardinality is $\aleph_1$ by F3: the identity is the required bijection, with no quotient or choice of representatives. QED. [step 1.1, step 2.1, F2, F3, F4, F5, A1]
