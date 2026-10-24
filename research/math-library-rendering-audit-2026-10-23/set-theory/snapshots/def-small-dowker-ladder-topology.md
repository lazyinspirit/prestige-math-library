---
id: def-small-dowker-ladder-topology
kind: definition
title: Small Dowker ladder topology
status: published
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles, def-axiom-of-choice, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, def-topological-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Rinot–Shalev, A guessing principle from a Souslin tree, with applications to topology, §3, space definition and Lemma 3.2, p. 17"
      url: https://www.assafrinot.com/files/paper48.pdf
---

## Definition

Assume AC. Put $\kappa=\omega_1$ and $E=\{\alpha<\kappa:\operatorname{cf}(\alpha)=\omega\}$. Let $(S_n)_{1\le n<\omega}$ be pairwise disjoint stationary subsets of $E$, equipped with a single-ladder two-target AD system $(A_\alpha)_{\alpha\in\bigcup_{n\ge1}S_n}$ in clause 5 of [[def-small-dowker-luzin-stick-and-ad-principles]]. In particular, $A_\alpha\subseteq\alpha$ is cofinal; if $\alpha<\beta$, $A_\alpha\cap A_\beta$ is bounded in $\alpha$; and for each pair of uncountable targets $B_0,B_1\subseteq\kappa$ and each $n\ge1$, stationarily many $\alpha\in S_n$ satisfy $\sup(A_\alpha\cap B_i)=\alpha$ for both $i<2$.

Set $S_0=\kappa\setminus\bigcup_{n\ge1}S_n$, let $n(\alpha)$ be the unique index with $\alpha\in S_{n(\alpha)}$, and put $W_n=\bigcup_{j\le n}S_j$. If $n(\alpha)>0$ and $A_\alpha\cap W_{n(\alpha)-1}$ is cofinal in $\alpha$, set $L_\alpha=A_\alpha\cap W_{n(\alpha)-1}$; in every other case set $L_\alpha=\varnothing$. Thus no undefined $A_\alpha$ or $W_{-1}$ is used on $S_0$. Write $\bar S=\{\alpha:L_\alpha\ne\varnothing\}$.

The **small Dowker ladder topology** on $\kappa$ declares $U\subseteq\kappa$ open exactly when $L_\alpha\setminus U$ is bounded in $\alpha$ for every $\alpha\in U\cap\bar S$. Here bounded means contained in some ordinal $\varepsilon<\alpha$. Consequently, a set $F$ is closed exactly when $F\cap L_\alpha$ is bounded in $\alpha$ for every $\alpha\in\bar S\setminus F$.

For an active $\alpha\in\bar S$, write $N^\varepsilon_\alpha=\{\alpha\}\cup(L_\alpha\setminus\varepsilon)$, $\varepsilon<\alpha$. Every open set containing $\alpha$ contains one such set. These are weak neighborhood tests: they are not asserted to be open, or to form an open basis. The topology axioms, closedness test, and the simultaneous stationary accumulation property below are verified here.

## Facts & Assumptions

**Given:** The preceding partition and single-ladder two-target AD system; AC; the definitions of $L_\alpha,W_n,\bar S$ above.

[F1] Clause 5 supplies cofinal ladders, bounded intersections at the smaller index, and simultaneous stationary guessing of two uncountable targets on each $S_n$ ([[def-small-dowker-luzin-stick-and-ad-principles]]).

[F2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

[F3] Every ordinal below $\omega_1$ is countable and $\omega_1$ is uncountable; under countable choice its countable subsets are bounded ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[F4] A topology contains the empty and whole sets and is closed under arbitrary unions and finite intersections ([[def-topological-space]]).

[A1] AC implies the countable choice used in F2 and F3 by applying a choice function to the nonempty enumeration-witness sets ([[def-axiom-of-choice]]).

## Verification

1.1 Both $\varnothing$ and $\kappa$ satisfy the open-set test. If $\alpha\in\bigcup\mathcal U\cap\bar S$ for a family $\mathcal U$ of open sets, take any member $U\in\mathcal U$ containing this one point. Then $L_\alpha\setminus\bigcup\mathcal U\subseteq L_\alpha\setminus U$ is bounded. This pointwise existence argument selects no family of witnesses. At a point of a finite intersection, the omitted ladder points are a finite union of bounded subsets of the nonzero limit ordinal $\alpha$, hence lie below the maximum of finitely many bounds. The empty intersection is $\kappa$. This proves the topology axioms. [given, F4]

1.2 The complement of $F$ is open precisely when, for each active $\alpha\notin F$, $L_\alpha\setminus(\kappa\setminus F)=L_\alpha\cap F$ is bounded. This proves both directions of the closedness test. Likewise, the open-set test gives $N^\varepsilon_\alpha\subseteq U$ for some $\varepsilon<\alpha$ whenever $U$ is open and contains active $\alpha$; it imposes no openness claim on $N^\varepsilon_\alpha$. [given, algebra]

1.3 Each nonempty $L_\alpha$ is cofinal in $\alpha$, has $\alpha\in E$, and lies in strictly lower levels. If $\alpha<\beta$ are active, $L_\alpha\cap L_\beta\subseteq A_\alpha\cap A_\beta$ is bounded in $\alpha$. It is also bounded in $\beta$, because it is a subset of $\alpha<\beta$. Thus intersections with any distinct active ladder are bounded at either index. [given, F1]

1.4 Given uncountable $B_0,B_1\subseteq\kappa$, F2 and A1 give indices $m_i$ such that $B_i\cap S_{m_i}$ is uncountable: otherwise the level partition would express $B_i$ as a countable union of countable sets. For every $n>\max(m_0,m_1)$ apply F1 to the two targets $B_i\cap S_{m_i}$. On a stationary subset of $S_n$, both $A_\alpha\cap B_i\cap S_{m_i}$ are cofinal in $\alpha$. They lie in $W_{n-1}$, so $L_\alpha$ is active and $L_\alpha\cap B_i$ is cofinal for both $i$. This is the promised simultaneous two-target stationary accumulation property. [F1, F2, A1]

2.1 Taking $B_0=B_1=\kappa$, which is uncountable by F3, step 1.4 gives a stationary subset of $\bar S$ on every sufficiently high level. Any set containing a stationary set meets every club, so $\bar S$ is stationary. Zero and successor ordinals are inactive, as they do not belong to $E$; empty ladders cause no open-set or closed-set condition. These observations include all endpoint cases of the definition. QED. [step 1.3, step 1.4, F3]
