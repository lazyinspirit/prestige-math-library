---
id: thm-truncation-weak-law-for-independent-arrays
title: "Truncation weak law for independent arrays"
kind: theorem
status: published
origin: pipeline
deps: ["def-truncation-at-a-fixed-level", "thm-chebyshev-weak-law-for-uncorrelated-arrays", "lem-measurable-functions-preserve-independence", "def-convergence-in-probability", "thm-finite-and-countable-subadditivity-of-measures", "thm-factorization-of-expectations-for-independent-variables"]
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
    - title: "Theorem 2.2.11, pp. 62\u201363; second-moment sufficient form"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Section 2.1, Theorem 4.8 and proof, p. 4; variance form"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
proof_strategy: "Union bound controls the event on which any truncation differs; the uncorrelated-array law controls centered truncated sums. No dependence condition between rows."
---

## Statement

For each $n\ge1$ let $X_{n,1},\ldots,X_{n,r_n}$ be independent real random variables on one probability space, with finite $r_n\ge0$. Let deterministic $b_n>0$ tend to infinity and set $Y_{n,k}=X_{n,k}\mathbf1_{\{|X_{n,k}|\le b_n\}}$. If
$$\sum_{k=1}^{r_n}\mathbb P(|X_{n,k}|>b_n)\to0,\qquad b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(Y_{n,k})\to0,$$
then
$$\frac{\sum_{k=1}^{r_n}X_{n,k}-\sum_{k=1}^{r_n}\mathbb EY_{n,k}}{b_n}\longrightarrow0\quad\text{in probability}.$$
No independence between rows is required.

## Facts & Assumptions

[F1] [[def-truncation-at-a-fixed-level]]: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is $X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$ The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by thm-arithmetic-and-lattice-operations-preserve-measurability. Thus $X^{(A)}$ is a real random variable as in def-random-element-and-real-random-variable. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

[F2] [[thm-chebyshev-weak-law-for-uncorrelated-arrays]]: For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If $v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$ then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

[F3] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F4] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F5] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$ For every $m\in\mathbb N$ one also has $\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$ including $m=0$, where both sides are $0$.

[F6] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Each truncated row is independent by measurable transformations and bounded by $b_n$. Its distinct centered mixed moments vanish: independence factors expectations of bounded products, so the row is uncorrelated. The row weak law therefore makes $b_n^{-1}\sum_k(Y_{n,k}-\mathbb EY_{n,k})$ tend to zero in probability. [F1, F3, F2, given, F6]

2.1 Let $E_n=\bigcup_{k=1}^{r_n}\{|X_{n,k}|>b_n\}$. Outside $E_n$ the original and truncated sums agree. Hence for $\varepsilon>0$ the probability of the claimed error exceeding $\varepsilon$ is bounded by $\sum_k\mathbb P(|X_{n,k}|>b_n)$ plus the corresponding centered truncated probability. Both tend to zero. For empty rows all sums and the union are zero or empty, so the argument includes them; equality at the cutoff is retained. [F5, F4, step 1.1, given, algebra] ∎
