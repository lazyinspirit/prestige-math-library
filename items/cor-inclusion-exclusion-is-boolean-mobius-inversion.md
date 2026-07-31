---
id: cor-inclusion-exclusion-is-boolean-mobius-inversion
kind: corollary
title: "The complementary inclusion-exclusion formula is Möbius inversion on the Boolean lattice"
status: published
origin: session
deps: [thm-mobius-function-of-a-boolean-lattice, cor-mobius-inversion-for-finite-posets, def-a-sieve-family-and-its-intersections, thm-inclusion-exclusion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1"
      url: "https://math.mit.edu/~rstan/ec/ec1toc.html"
pipeline_run: null
---

## Statement

For a finite sieve family $(A_i)_{i\in I}$ in a finite ambient set $X$, let $\iota:\mathbb N\to\mathbb R$ be the canonical natural map used in [[thm-inclusion-exclusion]]. The complementary inclusion-exclusion identity

$$\iota|X\setminus\bigcup_{i\in I}A_i|=\sum_{J\subseteq I}(-1)^{|J|}\,\iota|A_J|$$

in $\mathbb R$ is exactly the upper-finite Möbius inversion formula on the Boolean lattice $\mathcal P(I)$.

## Facts & Assumptions

**Given:** A sieve family $X,I,(A_i)_{i\in I}$, its intersections $A_J$, and the trace $T(x):=\{i\in I:x\in A_i\}$ ([[def-a-sieve-family-and-its-intersections]]).

[F1] For $J\subseteq I$, $x\in A_J$ exactly when $J\subseteq T(x)$, including $A_\varnothing=X$; and $x\notin\bigcup_iA_i$ exactly when $T(x)=\varnothing$ ([[def-a-sieve-family-and-its-intersections]]).

[L1] Both forms of Möbius inversion hold on the finite Boolean lattice ([[cor-mobius-inversion-for-finite-posets]]).

[L2] Its Möbius function is $\mu(J,K)=(-1)^{|K\setminus J|}$ ([[thm-mobius-function-of-a-boolean-lattice]]).

[L3] The complementary inclusion-exclusion theorem uses the canonical map $\iota:\mathbb N\to\mathbb R$, has the displayed terms, and adopts the convention $A_\varnothing=X$ ([[thm-inclusion-exclusion]]).

## Proof

**Proof technique:** direct.

1.1 For $K\subseteq I$, let $h(K):=\iota|\{x\in X:T(x)=K\}|$, and let $g(J):=\iota|A_J|$. The trace classes partition $A_J$, and [F1] gives $g(J)=\sum_{K\supseteq J}h(K)$ in $\mathbb R$. [F1, L3]

2.1 Apply the upper-finite form of [L1] at $J=\varnothing$: $h(\varnothing)=\sum_{K\supseteq\varnothing}\mu(\varnothing,K)g(K)$. [step 1.1, L1]

3.1 By [F1], $h(\varnothing)=\iota|X\setminus\bigcup_iA_i|$, and by [L2], $\mu(\varnothing,K)=(-1)^{|K|}$. Substitution in step 2.1 gives $\iota|X\setminus\bigcup_iA_i|=\sum_{K\subseteq I}(-1)^{|K|}\,\iota|A_K|$. [step 2.1, F1, L2]

4.1 The identity in step 3.1 matches [L3] term for term, including the empty-subset term $\iota|A_\varnothing|=\iota|X|$; hence complementary inclusion-exclusion is Boolean-lattice Möbius inversion. [step 3.1, L3] ∎
