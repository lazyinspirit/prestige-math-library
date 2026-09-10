---
id: thm-countable-paracompactness-shrinking-criterion
kind: theorem
title: Increasing-cover and decreasing-closed-set criteria
status: draft
origin: pipeline
deps: [def-countable-paracompactness-and-dowker-space, lem-locally-finite-unions-and-closures, lem-normality-via-shrinking, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Topology, Chapter 4 §3, Theorem 3.3 and Exercises 5–6, p. 27"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For any space $X$ the following are equivalent, with indices in $\omega$:

- (i) $X$ is countably paracompact.
- (ii) Every increasing open cover $(U_n)$ has closed sets $C_n\subseteq U_n$ such that $X=\bigcup_n\operatorname{int}C_n$.
- (iii) Every decreasing closed sequence $(F_n)$ with empty intersection has open sets $G_n\supseteq F_n$ such that $\bigcap_n\overline{G_n}=\varnothing$.

If $X$ is normal, these are also equivalent to (iv): every such $(F_n)$ has open expansions $G_n\supseteq F_n$ with $\bigcap_nG_n=\varnothing$.

## Facts & Assumptions

**Given:** A topological space $X$, and AC. Normality is assumed only for (iv) implying (iii).

[F1] Countable paracompactness supplies a locally finite open refining cover, including its covering condition ([[def-countable-paracompactness-and-dowker-space]]).

[F2] In a normal space a closed $A$ inside an open $U$ admits open $H$ with $A\subseteq H\subseteq\overline H\subseteq U$ ([[lem-normality-via-shrinking]]).

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

1.1 Assume (i), and let $(U_n)$ be an increasing open cover. Take a locally finite open refining cover $\mathcal R$. For each $R\in\mathcal R$ let $a(R)$ be the least $n$ with $R\subseteq U_n$, and set $C_n=X\setminus\bigcup\{R:a(R)>n\}$. This is closed. If $x\in C_n$, some $R$ contains $x$ because $\mathcal R$ covers; necessarily $a(R)\le n$, so $x\in U_n$. If $x\in X$, choose an open neighborhood meeting only finitely many members of $\mathcal R$. At least one meets it because $x$ is covered. The maximum $N$ of their assigned indices exists, and the neighborhood is contained in $C_N$. Thus the interiors cover and (ii) holds. All index assignments are least natural numbers, without choice. [F1, construct]

1.2 Assume (ii) and let $(O_n)$ be any countable open cover; finite nonempty covers can be extended by empty entries. Put $U_n=\bigcup_{i\le n}O_i$, obtain closed $C_n\subseteq U_n$ as in (ii), and replace $C_n$ by $D_n=\bigcup_{i\le n}C_i$. Then $D_n$ is closed and increasing, is contained in $U_n$, and its interiors cover. With $D_{-1}=\varnothing$ put $V_n=U_n\setminus D_{n-1}$. For each $x$, the least $n$ with $x\in D_n$ gives $x\in V_n$, so these open sets cover. If a neighborhood $N_x$ lies in $D_N$, it misses every $V_n$ with $n\ge N+1$. The family $\{V_n\cap O_i:i\le n<\omega\}$ covers $X$, refines $(O_n)$, and near $x$ has at most $\sum_{n\le N}(n+1)$ possibly meeting indexed members. It is the locally finite open refining cover required for (i). If the original cover is empty, $X$ is empty and its empty refining cover suffices. [F1, construct]

1.3 Complementation proves (ii) implies (iii): given decreasing closed $F_n$ with empty intersection, use $U_n=X\setminus F_n$, and put $G_n=X\setminus C_n$. Then $F_n\subseteq G_n$ and $\bigcap_n\overline{G_n}=X\setminus\bigcup_n\operatorname{int}C_n=\varnothing$. Conversely, given increasing $U_n$ covering $X$, put $F_n=X\setminus U_n$, take the expansions of (iii), and set $C_n=X\setminus G_n$. These are closed subsets of $U_n$, and the same identity says their interiors cover. The identity uses $\overline{X\setminus C}=X\setminus\operatorname{int}C$, which follows because a point has a neighborhood contained in $C$ exactly when it is outside that closure. [given, algebra]

2.1 Condition (iii) implies (iv), since $G_n\subseteq\overline{G_n}$. Suppose now that $X$ is normal and (iv) holds. For a given decreasing closed sequence with empty intersection, take its open expansions $G_n$ with empty intersection. For each $n$, the closed set $F_n$ lies in the open $G_n$, so normal shrinking provides an open $H_n$ with $F_n\subseteq H_n\subseteq\overline{H_n}\subseteq G_n$. AC selects these witnesses for all $n$ simultaneously. Hence $\bigcap_n\overline{H_n}\subseteq\bigcap_nG_n=\varnothing$, proving (iii). Steps 1.1–1.3 prove the other equivalences; empty sets cause no exception to these inclusions. QED. [F2, A1, step 1.1, step 1.2, step 1.3]
