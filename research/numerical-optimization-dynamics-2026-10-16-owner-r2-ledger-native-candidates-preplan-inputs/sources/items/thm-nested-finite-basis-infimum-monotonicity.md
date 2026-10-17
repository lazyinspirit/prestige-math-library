---
id: thm-nested-finite-basis-infimum-monotonicity
kind: theorem
title: "Nested finite-basis infima decrease to the infimum over their union"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-extreme-value-metric
  - def-infimum
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

## Facts & Assumptions

**Given:** A nested sequence of nonempty compact feasible sets, a common continuous energy, and, for the continuum conclusion, the stated energy-recovery property.

[F1] A continuous real function on a nonempty compact set attains its minimum ([[thm-extreme-value-metric]]).

[F2] The infimum is the greatest lower bound of the indicated energy values ([[def-infimum]]).

## Proof


1.1 Each $m_j$ exists by [F1]. If $j\le k$, then $K_j\subseteq K_k$, so the minimum over the larger set satisfies $m_k\le m_j$. Thus $(m_j)$ is nonincreasing and its extended-real limit $m$ exists. [F1, given, algebra]

2.1 Every $m_j$ is a lower bound for $E$ on the union only when taken after all sets? More directly, set $a=\inf_{P\in\cup_jK_j}E(P)$. Since each $K_j$ lies in the union, $a\le m_j$, so $a\le m$. For every $P\in\cup_jK_j$, choose an index $j_0$ with $P\in K_{j_0}$. For all $j\ge j_0$, $m_j\le E(P)$, hence $m\le E(P)$. Since this holds for every such $P$, $m\le a$ by [F2]. Therefore $m=a$. [F2, step 1.1, given, choose]

3.1 Under the additional recovery hypothesis, for each $P\in K$ the sequence from [Given] has $E(P_j)\to E(P)$, so $a\le E(P)$ because $a$ is the infimum over the union. Taking the infimum over $P\in K$ gives $a\le\inf_K E$. The reverse inequality follows from $\cup_jK_j\subseteq K$, so the two infima are equal. [F2, step 2.1, given] ∎

