---
id: lem-author-f736bc76cd5d-moment-extraction
kind: lemma
title: Extracting a nonconstant eigenvalue from closed-walk moments
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-f736bc76cd5d-trace-walk-count
  - lem-author-f736bc76cd5d-stack-closed-walks
  - prop-expander-prereq-regular-mean-zero-spectrum
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-regular-multigraph-and-normalized-adjacency
  - lem-author-f736bc76cd5d-reversible-slots
  - lem-author-f736bc76cd5d-catalan-count
dependency_roles:
  lem-author-f736bc76cd5d-trace-walk-count: mathematical-premise
  lem-author-f736bc76cd5d-stack-closed-walks: mathematical-premise
  prop-expander-prereq-regular-mean-zero-spectrum: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-regular-multigraph-and-normalized-adjacency: mathematical-premise
  lem-author-f736bc76cd5d-reversible-slots: mathematical-premise
  lem-author-f736bc76cd5d-catalan-count: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Fix an integer $d\ge2$. Let $A_n$ be finite $d$-regular adjacency-slot matrices of orders $n\to\infty$: each $A_n$ is a symmetric nonnegative integer matrix with row sum $d$, and diagonal entries count loop slots. Set $\Lambda_n=\|A_n-(d/n)J\|_{\mathrm{op}}$, where $J$ has all entries one and the norm is Euclidean. For every fixed integer $k\ge1$ and all $n\ge2$,

$$\Lambda_n^{2k}\ge\frac{nC_k(d-1)^k-d^{2k}}{n-1}.$$

Here $C_k$ is the number of Dyck words of length $2k$, namely words with $k$ symbols $+1$ and $k$ symbols $-1$ whose every initial partial sum is nonnegative. In particular, for every $\varepsilon>0$, eventually $\Lambda_n\ge C_k^{1/(2k)}\sqrt{d-1}-\varepsilon$, with $d,k$ held fixed as the order grows.

## Statement references

[[math:def-regular-multigraph-and-normalized-adjacency]]

[[lem-author-f736bc76cd5d-catalan-count]]

[[prop-expander-prereq-regular-mean-zero-spectrum]]

[[def-expander-prereq-asymptotic-quantifiers]]

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] The trace of $A_n^{2k}$ counts closed labelled slot walks ([[lem-author-f736bc76cd5d-trace-walk-count]]).

[F2] At each starting vertex their number is at least $C_k(d-1)^k$, including loops and parallel slots ([[lem-author-f736bc76cd5d-stack-closed-walks]]).

[F3] A regular symmetric matrix has an orthonormal eigenbasis with first eigenvalue $d$ at the constant vector, and the remaining eigenvalues $\lambda_2,\ldots,\lambda_n$ satisfy $\max_{i\ge2}|\lambda_i|=\Lambda_n$ ([[prop-expander-prereq-regular-mean-zero-spectrum]]).

[F4] A conclusion holds eventually if it holds beyond a single order cutoff along the sequence under consideration ([[def-expander-prereq-asymptotic-quantifiers]]).

[F5] In the adjacency-slot convention, $A_n$ is symmetric with nonnegative integer entries and row sum $d$; diagonal entries count loop slots ([[math:def-regular-multigraph-and-normalized-adjacency]]).

[F6] Such a matrix admits directed slot labels with an endpoint-reversing involution, possibly fixing loop labels, and exactly $(A_n)_{xy}$ labels from $x$ to $y$. Labelled walks are composable lists of these labels and are closed when their endpoints agree ([[lem-author-f736bc76cd5d-reversible-slots]]).

[F7] The Dyck-word count satisfies $C_k=\binom{2k}{k}/(k+1)\ge4^k/((2k+1)(k+1))>0$ for $k\ge1$ ([[lem-author-f736bc76cd5d-catalan-count]]).

## Proof

1.1 By [F5] and [F6], choose reversible slot labels for $A_n$; these satisfy the hypotheses of [F1] and [F2]. Hence $\operatorname{tr}(A_n^{2k})\ge nC_k(d-1)^k$. By [F3], write $A_n=Q\operatorname{diag}(d,\lambda_2,\ldots,\lambda_n)Q^\top$ with $Q$ orthogonal. Expanding diagonal entries and using $\sum_xQ_{xi}^2=1$ gives $\operatorname{tr}(A_n^{2k})=d^{2k}+\sum_{i=2}^n\lambda_i^{2k}\le d^{2k}+(n-1)\Lambda_n^{2k}$. Rearranging proves the finite-order inequality, even if its right side is negative. [F1, F2, F3, F5, F6, choose, algebra]

2.1 By [F7] and $d\ge2$, put $a=C_k^{1/(2k)}\sqrt{d-1}>0$ and hold $d,k$ fixed. The right side of the inequality is $a^{2k}+(a^{2k}-d^{2k})/(n-1)$ and tends to $a^{2k}$. If $0<\varepsilon<a$, then $a^{2k}-(a-\varepsilon)^{2k}>0$, so beyond a cutoff that right side exceeds $(a-\varepsilon)^{2k}$. Since $\Lambda_n\ge0$, step 1.1 gives $\Lambda_n>a-\varepsilon$. If $\varepsilon\ge a$, the same desired weak inequality follows from nonnegativity. This proves the eventual assertion. [F3, F4, F7, step 1.1, algebra] ∎
