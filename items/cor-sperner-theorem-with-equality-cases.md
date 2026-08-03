---
id: cor-sperner-theorem-with-equality-cases
kind: corollary
title: "Sperner's theorem and its equality cases: a largest antichain is a complete middle level"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lym-inequality, thm-local-lym-inequality, lem-binomial-coefficients-symmetric-and-unimodal, def-boolean-lattice-and-levels, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Statement

Let $A$ be an $n$-element set. Every antichain
$\mathcal F\subseteq\mathcal P(A)$ satisfies

$$|\mathcal F|\le\binom n{\lfloor n/2\rfloor}.$$

Equality holds exactly for a complete middle level. If $n$ is even, the unique
maximum antichain is $[A]^{n/2}$. If $n$ is odd, the maximum antichains are
exactly the two complete middle levels
$[A]^{(n-1)/2}$ and $[A]^{(n+1)/2}$.

## Facts & Assumptions

**Given:** An $n$-element set $A$ and an antichain $\mathcal F\subseteq\mathcal P(A)$.

[L1] The LYM inequality gives $\sum_{S\in\mathcal F}1/\binom n{|S|}\le1$ ([[thm-lym-inequality]]).

[L2] The binomial coefficients have their maximum at the middle rank, uniquely for even $n$ and at the two middle ranks for odd $n$ ([[lem-binomial-coefficients-symmetric-and-unimodal]]).

[L3] For $\mathcal G\subseteq[A]^k$, local LYM gives $|\mathcal G|/\binom nk\le|\nabla\mathcal G|/\binom n{k+1}$, with equality exactly when every set in the upper shadow contains all its $k$-subsets in $\mathcal G$ ([[thm-local-lym-inequality]]).

[F1] The rank-$k$ level of the Boolean lattice is $[A]^k$ and has cardinality $\binom nk$ ([[def-boolean-lattice-and-levels]], [[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Put $M:=\binom n{\lfloor n/2\rfloor}$. By [L2], every $\binom n{|S|}\le M$, so [L1] gives $|\mathcal F|/M\le\sum_{S\in\mathcal F}1/\binom n{|S|}\le1$. Hence $|\mathcal F|\le M$. [given, L1, L2]

2.1 If equality holds, then every member of $\mathcal F$ lies on a rank whose binomial coefficient equals $M$; otherwise the first inequality in step 1.1 would be strict. [step 1.1, L2]

3.1 If $n$ is even, [L2] leaves only rank $n/2$. Thus $\mathcal F\subseteq[A]^{n/2}$, and equality of cardinalities forces $\mathcal F=[A]^{n/2}$. [step 2.1, L2, F1]

3.2 Suppose $n=2k+1$ is odd. Write $\mathcal G:=\mathcal F\cap[A]^k$ and $\mathcal H:=\mathcal F\cap[A]^{k+1}$. Since $\mathcal F$ is an antichain, $\mathcal H$ is disjoint from $\nabla\mathcal G$. The two middle levels both have cardinality $M$, and [L3] gives $|\nabla\mathcal G|\ge|\mathcal G|$. Therefore $|\mathcal F|=|\mathcal G|+|\mathcal H|\le|\mathcal G|+M-|\nabla\mathcal G|\le M$. [step 2.1, L2, L3, F1]

4.1 Equality in step 3.2 forces $|\nabla\mathcal G|=|\mathcal G|$ and $\mathcal H=[A]^{k+1}\setminus\nabla\mathcal G$. By the equality clause of [L3], whenever $S\in\mathcal G$, $x\notin S$, and $y\in S$, the set $(S\setminus\{y\})\cup\{x\}$ also lies in $\mathcal G$: it is a $k$-subset of $S\cup\{x\}\in\nabla\mathcal G$. [step 3.2, L3]

5.1 Any two $k$-subsets can be joined by repeatedly replacing an element not in the target by an element of the target not yet present. Thus the closure in step 4.1 implies that $\mathcal G$ is either empty or all of $[A]^k$. In the first case equality forces $\mathcal H=[A]^{k+1}$; in the second, $\nabla\mathcal G=[A]^{k+1}$ and equality forces $\mathcal H=\varnothing$. [step 4.1, F1]

6.1 Complete levels are antichains and the middle ones have cardinality $M$. Steps 3.1 and 5.1 therefore give all equality cases and complete the proof. [step 3.1, step 5.1, F1] ∎
