---
id: lem-three-series-necessity-for-truncated-means-and-variances
title: "Necessity of the truncated mean and variance conditions"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-symmetrization-for-independent-random-series", "lem-bounded-centered-convergent-series-have-summable-variances", "thm-kolmogorov-convergence-criterion", "def-truncation-at-a-fixed-level", "cor-first-borel-cantelli-lemma-for-events", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "lem-measurable-functions-preserve-independence", "lem-series-tail-invariance"]
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
    - title: "Theorem 3.12 necessity and Lemma 3.13, pp. 67\u201368"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Terms tend to zero; BC2 forces the probability series to converge. Truncated and original sums differ finitely a.s. Symmetrize the bounded truncations and apply the bounded-centered lemma, then the centered convergence criterion. Subtract the two convergent series to recover the deterministic means."
---

## Statement

Let independent real random variables $(X_n)_{n\ge1}$ have $\sum_nX_n$ convergent almost surely. For every fixed $A>0$, set $Y_n=X_n^{(A)}=X_n\mathbf1_{\{|X_n|\le A\}}$. Then
$$\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\operatorname{Var}(Y_n)<\infty,$$
and the real numerical series $\sum_n\mathbb EY_n$ converges.

## Facts & Assumptions

[F1] [[lem-symmetrization-for-independent-random-series]]: Given an independent sequence $(X_n)_{n\ge1}$ on $(\Omega,\mathcal F,\mathbb P)$, form the product probability space $(\Omega^2,\mathcal F\otimes\mathcal F,\mathbb P\otimes\mathbb P)$. Write $U_n(\omega,\omega')=X_n(\omega)$, $V_n(\omega,\omega')=X_n(\omega')$, and $Z_n=U_n-V_n$. Then $(U_n)$ and $(V_n)$ are independent copies of the whole sequence, and the $Z_n$ are independent symmetric real random variables. Almost-sure convergence of $\sum_nX_n$ implies almost-sure convergence of $\sum_nZ_n$. If $|X_n|\le A$ almost surely for every $n$, with $0\le A<\infty$, then $|Z_n|\le2A$ almost surely, $\mathbb EZ_n=0$, and $\operatorname{Var}(Z_n)=2\operatorname{Var}(X_n)$.

[F2] [[lem-bounded-centered-convergent-series-have-summable-variances]]: Let $(X_n)_{n\ge1}$ be independent centered real random variables with $|X_n|\le C$ almost surely for one finite constant $C\ge0$. If $\sum_nX_n$ converges almost surely, then $\sum_n\operatorname{Var}(X_n)<\infty$. The bound is two-sided and uniform in $n$.

[F3] [[thm-kolmogorov-convergence-criterion]]: For independent centered square-integrable real random variables $(X_n)_{n\ge1}$, if $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$ to the same finite real random variable.

[F4] [[def-truncation-at-a-fixed-level]]: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is $X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$ The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by thm-arithmetic-and-lattice-operations-preserve-measurability. Thus $X^{(A)}$ is a real random variable as in def-random-element-and-real-random-variable. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

[F5] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If $\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$ then $\mathbb P(A_n\ \mathrm{i.o.})=0.$ No independence hypothesis is needed.

[F6] [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]: Let $(A_n)_{n\in\mathbb N}$ be pairwise independent events with $\sum_{n=0}^\infty \mathbb P(A_n)=+\infty.$ Then $\mathbb P(A_n\ \mathrm{i.o.})=1.$

[F7] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F8] [[lem-series-tail-invariance]]: Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let $N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the $N$-th tail series $\sum_{k \ge N} a_k$ (def-series). Then: 1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$; 2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and in that case $\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$ 3. hence the following are equivalent: $\sum a_k$ converges; every tail series of $\sum a_k$ converges; some tail series of $\sum a_k$ converges. In words: convergence of a series is a property of its terms from any index on, and changing finitely many terms changes the sum but not the fact of convergence.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Convergence of partial sums implies $X_n\to0$ on its probability-one event. Therefore $\{|X_n|>A\}$ occurs only finitely often almost surely. These events are independent, by measurable transformations. If their probability sum were infinite, the second Borel–Cantelli lemma would instead make their infinitely-often event have probability one. Hence the sum is finite. [F7, F6, given]

2.1 The $Y_n$ are independent and bounded by $A$. By the first Borel–Cantelli lemma, $Y_n=X_n$ eventually almost surely. Finite-change invariance, with the real-series indices shifted by one, gives almost-sure convergence of $\sum_nY_n$. [F4, F7, F5, F8, step 1.1]

3.1 Symmetrize this bounded sequence on the two-factor product. The differences $Z_n$ are independent, centered, bounded by $2A$, and their series converges almost surely. The bounded-centered lemma gives $\sum_n\operatorname{Var}(Z_n)<\infty$. Since $\operatorname{Var}(Z_n)=2\operatorname{Var}(Y_n)$, the variance sum for $Y_n$ is finite. [F1, F2, step 2.1]

4.1 The independent centered variables $Y_n-\mathbb EY_n$ now satisfy the convergence criterion. On the intersection of its probability-one event with that from the truncations, subtract the two convergent partial sums: their difference is the deterministic sequence $\sum_{k=1}^n\mathbb EY_k$. That sequence therefore converges in $\mathbb R$. A probability-one event is nonempty, and this argument selects only one path to establish a deterministic conclusion. All truncated expectations are finite, including when $Y_n=0$. [F7, F3, step 2.1, step 3.1, algebra] ∎
