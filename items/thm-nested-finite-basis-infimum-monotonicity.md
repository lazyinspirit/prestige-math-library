---
id: thm-nested-finite-basis-infimum-monotonicity
kind: theorem
title: "Nested finite-basis infima decrease to the infimum over their union"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-compactness-under-continuous-maps
  - def-infimum
  - thm-infimum-property
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47, §47.2"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
verification: {}
---

## Statement

Let $K_1\subseteq K_2\subseteq\cdots$ be nonempty compact feasible sets in a
common finite-basis or continuum feasible set $K$, and let $E:K\to\mathbb R$
be continuous. Put $m_j=\min_{P\in K_j}E(P)$. Then $m_j$ is nonincreasing and
$$\lim_{j\to\infty}m_j=\inf_{P\in\bigcup_jK_j}E(P),$$
where the limit is allowed to be $-\infty$. If additionally every $P\in K$ has
a sequence $P_j\in\bigcup_jK_j$ with $P_j\to P$ in the chosen energy topology
and $E(P_j)\to E(P)$, then this limit equals $\inf_{P\in K}E(P)$. In
particular, equality with a continuum infimum requires a proved energy-recovery
property for the specified functional; nestedness alone does not imply it.

In this statement, infima are taken in the extended real line
$\overline{\mathbb R}:=\mathbb R\cup\{-\infty,+\infty\}$: for a nonempty
set of real values, the infimum is its real greatest lower bound when it is
bounded below, and is $-\infty$ when it is unbounded below. In the bounded-below
case this agrees with [[def-infimum]].

## Facts & Assumptions

**Given:** A nested sequence of nonempty compact feasible sets, a common continuous energy, and, for the continuum conclusion, the stated energy-recovery property.

[F1] A continuous real function on a nonempty compact topological space attains its minimum ([[thm-compactness-under-continuous-maps]]).

[F2] Every nonempty set of real values that is bounded below has a real greatest lower bound by [[thm-infimum-property]], characterized by [[def-infimum]]. For a set unbounded below, use the extended-real value $-\infty$ as its infimum. In either case the infimum is a lower bound and is greater than or equal to every other extended-real lower bound.

## Proof


1.1 Each $m_j$ exists by [F1]. If $j\le k$, then $K_j\subseteq K_k$, so the minimum over the larger set satisfies $m_k\le m_j$. Thus $(m_j)$ is nonincreasing. Let $m:=\inf\{m_j:j\ge1\}$ in the extended-real convention of [F2]. If the set of values is bounded below, then for every $\varepsilon>0$ some $j_0$ has $m\le m_{j_0}<m+\varepsilon$ by the greatest-lower-bound property; for $j\ge j_0$, monotonicity gives $m\le m_j\le m_{j_0}<m+\varepsilon$, so $m_j\to m$. If the set is unbounded below, for every real $R$ some $j_0$ has $m_{j_0}<R$, and monotonicity gives $m_j<R$ for every $j\ge j_0$, so $m_j\to-\infty$. Thus the extended-real limit exists and equals $m$. [F1, F2, given, choose]

2.1 Set $a=\inf_{P\in\cup_jK_j}E(P)$ in the extended-real convention of [F2]. Since each minimum is attained by [F1], every $m_j$ is a value of $E$ on the union, so $a$ is a lower bound for $\{m_j:j\ge1\}$ and [F2] gives $a\le m$. For every $P\in\cup_jK_j$, choose an index $j_0$ with $P\in K_{j_0}$. For all $j\ge j_0$, $m_j\le E(P)$; since $m$ is a lower bound for all $m_j$, this gives $m\le E(P)$. Thus $m$ is an extended-real lower bound for all values of $E$ on the union, so $m\le a$ by [F2]. Therefore $m=a$. [F1, F2, step 1.1, given, choose]

3.1 Under the additional recovery hypothesis, fix $P\in K$. If $a=-\infty$, then $a\le E(P)$. Otherwise, for every $\varepsilon>0$, the convergence $E(P_j)\to E(P)$ gives an index $j$ with $E(P_j)<E(P)+\varepsilon$. Since $a\le E(P_j)$, we have $a<E(P)+\varepsilon$ for every $\varepsilon>0$, hence $a\le E(P)$. Taking the extended-real infimum over $P\in K$ gives $a\le\inf_K E$. The reverse inequality follows from $\cup_jK_j\subseteq K$, so the two extended-real infima are equal. [F2, step 2.1, given, choose] ∎

