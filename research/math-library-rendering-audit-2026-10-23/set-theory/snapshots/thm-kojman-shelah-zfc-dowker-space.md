---
id: thm-kojman-shelah-zfc-dowker-space
kind: theorem
title: A ZFC Dowker space of size aleph omega plus one
status: published
origin: pipeline
deps: [lem-kojman-shelah-subspace-is-closed, lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size, thm-rudin-box-space-is-collectionwise-normal, thm-rudin-tail-neighborhood-obstruction, thm-countable-paracompactness-shrinking-criterion, def-countable-paracompactness-and-dowker-space, def-axiom-of-choice]
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
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 7 section 2, Exercises 11–12 and closed-subspace argument, printed pp. 40–41"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. The Kojman–Shelah scale subspace $X$ is a closed, pointwise cofinal Dowker subspace of $R=X_R(B)$, and $|X|=\aleph_{\omega+1}$. It is Hausdorff and collectionwise normal. Pointwise cofinal means that every $b\in\prod_{n\in B}\aleph_n$ is strictly below some point of $X$ at every coordinate.

## Facts & Assumptions

**Given:** The scale subspace $X\subseteq R=X_R(B)$ and AC.

[F1] $X$ is closed in $R$ ([[lem-kojman-shelah-subspace-is-closed]]).

[F2] $|X|=\aleph_{\omega+1}$ and for every strict-product bound $b$ there is $x\in X$ with $b<x$ pointwise ([[lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size]]).

[F3] $R$ is Hausdorff and separates every indexed discrete family of closed sets by disjoint open neighborhoods ([[thm-rudin-box-space-is-collectionwise-normal]]).

[F4] The initial-top slices $F_k$ in $R$ decrease to empty and are closed. Every open expansion sequence $W_k\supseteq F_k$ contains in its intersection the entire $R$-tail above some $b\in\prod_{n\in B}\aleph_n$ ([[thm-rudin-tail-neighborhood-obstruction]]).

[F5] In a normal countably paracompact space every decreasing closed sequence with empty intersection has open expansions with empty intersection ([[thm-countable-paracompactness-shrinking-criterion]], (iv)).

[F6] A Dowker space is normal, $T_1$, and not countably paracompact ([[def-countable-paracompactness-and-dowker-space]]).

[A1] AC is assumed for the preceding construction theorems and any simultaneous choices of ambient open lifts ([[def-axiom-of-choice]]).

## Proof

1.1 Let $(H_j)_{j\in J}$ be an indexed discrete family of closed subsets of $X$. Since $X$ is closed in $R$ by F1, each $H_j$ is closed in $R$: write it as $X\cap C_j$ for a closed $C_j$ in $R$. At a point of $X$, a relative open neighborhood meeting at most one indexed $H_j$ is the intersection with $X$ of an ambient open set. That ambient set meets precisely the same members, since every $H_j$ lies in $X$. At a point outside $X$, the open set $R\setminus X$ meets none. Thus the family is indexed discrete in $R$. F3 under A1 gives pairwise disjoint open neighborhoods $V_j$ there, and $V_j\cap X$ are pairwise disjoint open neighborhoods of $H_j$ in $X$. Empty members may receive the empty set, and an empty index set gives the empty separating family. [F1, F3, A1]

1.2 Put $E_k=F_k\cap X$. F4 implies these are closed in $X$, decrease, and have empty intersection. Let $(U_k)$ be any open expansion sequence in $X$, with $E_k\subseteq U_k$. Choose open $V_k\subseteq R$ satisfying $V_k\cap X=U_k$, using A1 if necessary, and set $W_k=V_k\cup(R\setminus X)$. This is open by F1. Every point of $F_k$ outside $X$ is in its second summand; every point of $F_k$ inside $X$ belongs to $E_k\subseteq U_k\subseteq V_k$. Therefore $F_k\subseteq W_k$, and $W_k\cap X=U_k$. F4 supplies a bound $b$ whose entire $R$-tail lies in every $W_k$. F2 gives an actual $x\in X$ with $b<x$ pointwise. Thus $x\in W_k\cap X=U_k$ for every $k$, proving $\bigcap_k U_k\ne\varnothing$. [F1, F2, F4, A1]

2.1 Hausdorff separation in $R$ restricts to separation in $X$ by intersecting the two disjoint ambient neighborhoods with $X$. Consequently $X$ is $T_1$: for fixed $x$, each other point has an open neighborhood avoiding $x$, and their union is $X\setminus\{x\}$. For disjoint closed $C,D\subseteq X$, their two-member family is discrete: the complement of $D$ works at points of $C$, the complement of $C$ at points of $D$, and the complement of their union elsewhere. Step 1.1 separates this family. Thus $X$ is normal as well as Hausdorff and collectionwise normal. [F3, step 1.1]

3.1 If $X$ were countably paracompact, its normality from step 2.1 and F5 would give open expansions of the sequence $(E_k)$ with empty intersection. Step 1.2 excludes every such sequence. Hence $X$ is not countably paracompact; together with step 2.1 and F6, this makes $X$ a Dowker space. [step 2.1, step 1.2, F5, F6]

4.1 Closedness is F1, and F2 gives both strict pointwise cofinality and the cardinality $\aleph_{\omega+1}$. Steps 1.1 and 2.1 establish the stated separation properties, and step 3.1 establishes the Dowker conclusion. No inference that failure of countable paracompactness passes to arbitrary closed subspaces is needed: step 1.2 proves the required failure for this particular cofinal subspace. QED. [F1, F2, step 1.1, step 2.1, step 3.1]
