---
id: thm-truncated-centering-criterion-for-an-iid-weak-law
title: "Exact tail criterion for a truncated-centered IID weak law"
kind: theorem
status: published
origin: pipeline
deps: ["def-identically-distributed-and-iid-random-variables", "lem-symmetrization-for-independent-random-series", "lem-independent-copy-symmetrization-tail-bounds", "lem-one-sided-maximal-inequality-for-symmetric-independent-sums", "thm-truncation-weak-law-for-independent-arrays", "lem-vanishing-tail-control-implies-small-truncated-second-moment", "def-convergence-in-probability", "thm-finite-and-countable-subadditivity-of-measures", "lem-largest-summand-bound-for-symmetric-independent-variables"]
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
    - title: "Theorem 4.4, pp. 2\u20135 and Appendix A, pp. 9\u201311"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
    - title: "Theorem 2.2.12 and necessity remark, pp. 63\u201364"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Lemma 5.13, p. 8"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
proof_strategy: "Sufficiency follows from the truncated array law and second-moment bound. Necessity: copy the centered sum, so T_n/n=sum(X_k-X_k-prime)/n ->0. The largest-summand lemma gives P(|T_n|>epsilon n)>=(1-exp(-n P(|X_1-X_1-prime|>epsilon n)))/2, hence n times that tail tends to zero. The independent-copy lower tail comparison with fixed M and epsilon<1 then yields n P(|X_1|>n)->0. The one-sided maximal inequality supplies an alternate check using max|Z_k|<=2 max|T_k|. No CLT or characteristic functions."
---

## Statement

For IID real random variables $(X_n)_{n\ge1}$ and $S_n=\sum_{k=1}^nX_k$, there exist deterministic real constants $(\mu_n)$ with $S_n/n-\mu_n\to0$ in probability if and only if
$$n\mathbb P(|X_1|>n)\longrightarrow0.$$
When this condition holds, $\mu_n=\mathbb E[X_1\mathbf1_{\{|X_1|\le n\}}]$ works. Neither existence of an untruncated mean nor convergence of $(\mu_n)$ is asserted.

## Facts & Assumptions

[F1] [[def-identically-distributed-and-iid-random-variables]]: Let $(X_i)_{i\in I}$ be random elements with the same measurable target $(E,\mathcal E)$. They are **identically distributed** if $\mathbb P(X_i\in B)=\mathbb P(X_j\in B)$ for all $i,j\in I$ and $B\in\mathcal E$, that is, their laws in def-law-or-distribution-of-a-random-element agree. They are **independent and identically distributed (IID)** if, in addition, the whole family is independent in def-independent-random-elements. Independence means mutual independence, not merely pairwise independence. No moment assumption is part of either definition. The empty family satisfies these universal conditions vacuously.

[F2] [[lem-symmetrization-for-independent-random-series]]: Given an independent sequence $(X_n)_{n\ge1}$ on $(\Omega,\mathcal F,\mathbb P)$, form the product probability space $(\Omega^2,\mathcal F\otimes\mathcal F,\mathbb P\otimes\mathbb P)$. Write $U_n(\omega,\omega')=X_n(\omega)$, $V_n(\omega,\omega')=X_n(\omega')$, and $Z_n=U_n-V_n$. Then $(U_n)$ and $(V_n)$ are independent copies of the whole sequence, and the $Z_n$ are independent symmetric real random variables. Almost-sure convergence of $\sum_nX_n$ implies almost-sure convergence of $\sum_nZ_n$. If $|X_n|\le A$ almost surely for every $n$, with $0\le A<\infty$, then $|Z_n|\le2A$ almost surely, $\mathbb EZ_n=0$, and $\operatorname{Var}(Z_n)=2\operatorname{Var}(X_n)$.

[F3] [[lem-independent-copy-symmetrization-tail-bounds]]: Let $X'$ be an independent copy of a real random variable $X$. For every $t>0$, $\mathbb P(|X-X'|>t)\le2\mathbb P(|X|>t/2).$ There exists a finite $M\ge0$ with $\mathbb P(|X|\le M)\ge1/2$; for every such $M$, $\mathbb P(|X-X'|>t)\ge\tfrac12\mathbb P(|X|>t+M).$

[F4] [[lem-one-sided-maximal-inequality-for-symmetric-independent-sums]]: For independent symmetric real random variables $X_1,\ldots,X_n$, $n\ge1$, let $S_k=\sum_{j=1}^kX_j$. For every real $a$, $\mathbb P(\max_{1\le k\le n}S_k>a)\le2\mathbb P(S_n>a).$ Consequently for every $t>0$, $\mathbb P(\max_{1\le k\le n}|S_k|>t)\le2\mathbb P(|S_n|>t).$ No moment assumptions are needed.

[F5] [[thm-truncation-weak-law-for-independent-arrays]]: For each $n\ge1$ let $X_{n,1},\ldots,X_{n,r_n}$ be independent real random variables on one probability space, with finite $r_n\ge0$. Let deterministic $b_n>0$ tend to infinity and set $Y_{n,k}=X_{n,k}\mathbf1_{\{|X_{n,k}|\le b_n\}}$. If $\sum_{k=1}^{r_n}\mathbb P(|X_{n,k}|>b_n)\to0,\qquad b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(Y_{n,k})\to0,$ then $\frac{\sum_{k=1}^{r_n}X_{n,k}-\sum_{k=1}^{r_n}\mathbb EY_{n,k}}{b_n}\longrightarrow0\quad\text{in probability}.$ No independence between rows is required.

[F6] [[lem-vanishing-tail-control-implies-small-truncated-second-moment]]: Let $X$ be a real random variable with $n\mathbb P(|X|>n)\to0$ as positive integers $n\to\infty$. Then $x\mathbb P(|X|>x)\to0$ for real $x\to\infty$, and $\frac{\mathbb E[X^2\mathbf1_{\{|X|\le n\}}]}n\longrightarrow0.$ Moreover $\mathbb E|X|^p<\infty$ for every $0<p<1$.

[F7] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F8] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$ For every $m\in\mathbb N$ one also has $\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$ including $m=0$, where both sides are $0$.

[F9] [[lem-largest-summand-bound-for-symmetric-independent-variables]]: Let $Y_1,\ldots,Y_n$ be independent symmetric real random variables, $n\ge1$, and $S_n=\sum_{k=1}^nY_k$. For $t>0$, $\mathbb P(|S_n|\ge t)\ge\tfrac12\mathbb P(\max_{k\le n}|Y_k|\ge t).$ The same bound holds when both inequalities inside the probabilities are strict. If the $Y_k$ are IID and $p=\mathbb P(|Y_1|>t)$, then $\mathbb P(|S_n|>t)\ge\tfrac12(1-(1-p)^n)\ge\tfrac12(1-e^{-np}).$

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Assume the tail condition and take row $X_{n,k}=X_k$ for $1\le k\le n$, with $b_n=n$. The sum of row tail probabilities is $n\mathbb P(|X_1|>n)\to0$. The normalized truncated variance sum is at most $n^{-1}\mathbb E[X_1^2\mathbf1_{\{|X_1|\le n\}}]\to0$ by the second-moment lemma. The truncated array law yields the claimed convergence with the explicit finite $\mu_n$. [F6, F5, F1, given]

1.2 For necessity suppose constants $\mu_n$ give the convergence. On the two-factor product take an independent copy $X_k\prime$ and let $Z_k=X_k-X_k\prime$, $T_n=\sum_{k=1}^nZ_k$. The $Z_k$ are IID and symmetric. The triangle and union bounds give $\mathbb P(|T_n|>\varepsilon n)\le2\mathbb P(|S_n-n\mu_n|>\varepsilon n/2)\to0$. The deterministic center cancels exactly. [F2, F8, F7, given]

2.1 For $p_n=\mathbb P(|Z_1|>\varepsilon n)$, the largest-summand bound gives $\mathbb P(|T_n|>\varepsilon n)\ge(1-e^{-np_n})/2$. Since the left side tends to zero and $np_n\ge0$, necessarily $np_n\to0$; otherwise a positive lower bound along a subsequence would keep the right side away from zero. [F9, step 1.2, algebra]

3.1 Choose finite $M\ge0$ with $\mathbb P(|X_1|\le M)\ge1/2$. The symmetrization lower bound with $t=n/2$ gives $\mathbb P(|Z_1|>n/2)\ge\mathbb P(|X_1|>n/2+M)/2\ge\mathbb P(|X_1|>n)/2$ for $n\ge2M$. Multiply by $n$ and use the previous step with $\varepsilon=1/2$. This proves necessity, including atomic or deterministic laws. [F3, step 2.1, algebra]

4.1 An alternative check of the maximal step uses $Z_k=T_k-T_{k-1}$ with $T_0=0$, whence $\max_k|Z_k|\le2\max_k|T_k|$. The symmetric maximal inequality gives $\mathbb P(\max_k|Z_k|>2\varepsilon n)\le2\mathbb P(|T_n|>\varepsilon n)\to0$. Independence then gives $1-(1-\mathbb P(|Z_1|>2\varepsilon n))^n\to0$, hence again $n\mathbb P(|Z_1|>2\varepsilon n)\to0$ by $1-p\le e^{-p}$. Both checks retain strict events and allow atoms. [F4, step 1.2, algebra] ∎
