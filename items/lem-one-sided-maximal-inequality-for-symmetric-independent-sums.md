---
id: lem-one-sided-maximal-inequality-for-symmetric-independent-sums
title: "One-sided maximal inequality for symmetric independent sums"
kind: lemma
status: draft
origin: pipeline
deps: ["def-symmetric-real-random-variable", "def-partial-sums-and-sample-means", "thm-grouping-independent-sigma-algebras", "lem-measurable-functions-preserve-independence", "thm-independent-random-elements-have-product-joint-law"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 2.2, Lemma 5.13 and proof, p. 8"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
proof_strategy: "On the first crossing of a at k, the unused tail is independent and symmetric, so has probability at least 1/2 to be nonnegative. Apply the result also to -S and sum for the two-sided bound. No moment hypotheses."
---

## Statement

For independent symmetric real random variables $X_1,\ldots,X_n$, $n\ge1$, let $S_k=\sum_{j=1}^kX_j$. For every real $a$,
$$\mathbb P(\max_{1\le k\le n}S_k>a)\le2\mathbb P(S_n>a).$$
Consequently for every $t>0$,
$$\mathbb P(\max_{1\le k\le n}|S_k|>t)\le2\mathbb P(|S_n|>t).$$
No moment assumptions are needed.

## Facts & Assumptions

[F1] [[def-symmetric-real-random-variable]]: A real random variable $X$ is **symmetric** if its law as defined in def-law-or-distribution-of-a-random-element equals the law of $-X$. Equivalently, $\mathbb P(X\in B)=\mathbb P(X\in -B)$ for every Borel $B\subseteq\mathbb R$, where $-B=\{-b:b\in B\}$. No existence of an expectation is assumed in this definition. In particular atoms, including an atom at zero, are allowed.

[F2] [[thm-grouping-independent-sigma-algebras]]: Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint index sets. For each $r<m$, define $\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$ Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

[F3] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: Let $n\ge1$, and let $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ for $i<n$ be independent random elements. Define $X=(X_0,\dots,X_{n-1}):\Omega\to\prod_{i<n}S_i.$ Then $X$ is a random element of $\left(\prod_{i<n}S_i,\bigotimes_{i<n}\Sigma_i\right)$, and its law is the finite product of the marginal laws: $\mathbb P_X=\bigotimes_{i<n}\mathbb P_{X_i}.$

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Let $A_k=\{S_j\le a\ (j<k),\ S_k>a\}$. They partition the crossing event. The unused tail $R_k=S_n-S_k$ is independent of the past by grouping. Its law is symmetric: the independent marginal laws are unchanged when each remaining variable is negated, so their sum has the same law as its negative. Hence $\mathbb P(R_k\ge0)\ge1/2$, including $R_n=0$. [F2, F3, F1, given, F4]

2.1 On $A_k\cap\{R_k\ge0\}$ one has $S_n>a$. Independence gives $\mathbb P(A_k\cap\{R_k\ge0\})\ge\mathbb P(A_k)/2$. These events are disjoint over $k$, so summing proves the one-sided assertion. The argument works unchanged at $a=0$ and at negative $a$. [step 1.1, algebra]

3.1 Apply that assertion to $(X_j)$ and $(-X_j)$. The event of a strict absolute crossing of $t$ is contained in the union of a positive and a negative crossing. Their final events $\{S_n>t\}$ and $\{-S_n>t\}$ are disjoint for $t>0$, giving the displayed two-sided bound. Atoms at thresholds do not enter the strict events. [F3, step 2.1, algebra] ∎
