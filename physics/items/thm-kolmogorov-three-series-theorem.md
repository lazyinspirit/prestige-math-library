---
id: thm-kolmogorov-three-series-theorem
title: "Kolmogorov three-series theorem"
kind: theorem
status: published
origin: pipeline
deps: ["def-almost-sure-convergence-of-a-random-series", "def-truncation-at-a-fixed-level", "lem-three-series-necessity-for-truncated-means-and-variances", "cor-kolmogorov-two-series-sufficiency", "cor-first-borel-cantelli-lemma-for-events", "lem-measurable-functions-preserve-independence", "lem-series-tail-invariance"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 2.5.8, p. 85"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Theorem 3.12, pp. 66\u201368"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Sufficiency: two-series for bounded truncations plus BC1 and finite-change invariance. Necessity is the preceding direct symmetrization lemma for arbitrary A. Form all numerical series after fixed truncation, never subtract infinite expectations."
---

## Statement

Let $(X_n)_{n\ge1}$ be independent real random variables and fix $A>0$. Put $Y_n=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_nX_n$ converges almost surely if and only if all three conditions hold:
$$\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\mathbb EY_n\text{ converges in }\mathbb R,\qquad \sum_n\operatorname{Var}(Y_n)<\infty.$$
The conditions hold for some $A>0$ if and only if they hold for every $A>0$. No moment assumption is imposed on the untruncated variables.

## Facts & Assumptions

[F1] [[def-truncation-at-a-fixed-level]]: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is $X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$ The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by thm-arithmetic-and-lattice-operations-preserve-measurability. Thus $X^{(A)}$ is a real random variable as in def-random-element-and-real-random-variable. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

[F2] [[lem-three-series-necessity-for-truncated-means-and-variances]]: Let independent real random variables $(X_n)_{n\ge1}$ have $\sum_nX_n$ convergent almost surely. For every fixed $A>0$, set $Y_n=X_n^{(A)}=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\operatorname{Var}(Y_n)<\infty,$ and the real numerical series $\sum_n\mathbb EY_n$ converges.

[F3] [[cor-kolmogorov-two-series-sufficiency]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. If $\sum_{n\ge1}\mathbb EX_n$ converges in $\mathbb R$ and $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$.

[F4] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If $\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$ then $\mathbb P(A_n\ \mathrm{i.o.})=0.$ No independence hypothesis is needed.

[F5] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F6] [[lem-series-tail-invariance]]: Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let $N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the $N$-th tail series $\sum_{k \ge N} a_k$ (def-series). Then: 1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$; 2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and in that case $\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$ 3. hence the following are equivalent: $\sum a_k$ converges; every tail series of $\sum a_k$ converges; some tail series of $\sum a_k$ converges. In words: convergence of a series is a property of its terms from any index on, and changing finitely many terms changes the sum but not the fact of convergence.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 If the original series converges almost surely, the necessity lemma gives all three numerical conditions for this arbitrary fixed $A>0$. In particular all truncated means and variances used here are finite. [F2, F1, given]

1.2 Conversely suppose the three conditions hold. The bounded truncations are independent square-integrable variables. Two-series sufficiency makes $\sum_nY_n$ converge almost surely. The first Borel–Cantelli lemma makes $X_n=Y_n$ eventually almost surely; finite-change invariance then gives convergence of $\sum_nX_n$. This also covers zero truncations and finite exceptional sets. [F1, F5, F3, F4, F6, given]

2.1 Conditions at one positive cutoff give convergence by the preceding direction; convergence gives the conditions at every positive cutoff by the first direction. Conditions at every positive cutoff give them at, for example, $A=1$. This is an equivalence between deterministic numerical conditions, and needs no intersection over uncountably many cutoff-dependent events. [step 1.1, step 1.2, algebra] ∎
