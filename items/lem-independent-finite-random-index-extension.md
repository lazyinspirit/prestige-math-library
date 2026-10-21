---
id: lem-independent-finite-random-index-extension
kind: lemma
title: "An independent finite random index has the weighted expectation formula"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-measure
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Saeed Ghadimi and Guanghui Lan, Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming, §2.1"
      url: "https://arxiv.org/pdf/1309.5549"
      locator: "§2.1, RSG method, Algorithm 1 and Theorem 2.1(a) with proof, PDF pp. 4–6"

---

## Statement

Let $(\Omega,\mathcal F,P)$ be a probability space, let $N\ge1$, and let $p_1,\ldots,p_N\ge0$ satisfy $\sum_{k=1}^N p_k=1$. There is a probability-space extension carrying an independent random index $R\in\{1,\ldots,N\}$ with $P(R=k)=p_k$. For any integrable real random variables $H_1,\ldots,H_N$ on the original space, the lifted random variable $H_R(\omega,k)=H_k(\omega)$ is integrable on the extension and satisfies $\mathbb E[H_R]=\sum_{k=1}^N p_k\mathbb E[H_k]$.

## Facts & Assumptions

**Given:** A probability space, a positive integer $N$, nonnegative weights of total mass one, and integrable real random variables $H_1,\ldots,H_N$.

[F1] [[def-probability-measure]]: a probability measure has total mass one.

[F2] [[def-measure]]: a measure is countably additive on pairwise disjoint measurable sequences.

[F3] [[def-random-element-and-real-random-variable]]: a random element is a measurable map into its stated measurable space.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation is the Lebesgue integral, extended for nonnegative functions and finite for integrable real functions.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F6] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]: each nonnegative measurable function is the increasing limit of nonnegative simple functions.

[F7] [[thm-monotone-convergence-for-the-integral]]: the integrals of an increasing sequence of nonnegative measurable functions converge to the integral of its limit.

## Proof

1.1 Define $\widetilde\Omega=\Omega\times\{1,\ldots,N\}$ and let $\widetilde{\mathcal F}$ consist of the sets $E=\bigcup_{k=1}^N A_k\times\{k\}$ with every $A_k\in\mathcal F$. Each such decomposition is unique, since $A_k=\{\omega:(\omega,k)\in E\}$. The empty set and whole space have this form; complements replace each $A_k$ by $\Omega\setminus A_k$; and countable unions replace each $A_k$ by the corresponding countable union in $\mathcal F$. Thus $\widetilde{\mathcal F}$ is a sigma-algebra. [F1, given, construct]

2.1 For $E=\bigcup_k A_k\times\{k\}$ define $\widetilde P(E)=\sum_k p_kP(A_k)$. This is nonnegative and $\widetilde P(\widetilde\Omega)=\sum_kp_k=1$. If $E_j=\bigcup_k A_{j,k}\times\{k\}$ are pairwise disjoint, then for each fixed $k$ the sets $A_{j,k}$ are pairwise disjoint. Countable additivity of $P$ from [F2] gives $\widetilde P(\bigcup_jE_j)=\sum_kp_k\lim_{m\to\infty}\sum_{j=1}^mP(A_{j,k})$. Because the sum over $k$ is finite, its limit commutes with this finite sum; rearranging each finite double sum gives $\widetilde P(\bigcup_jE_j)=\lim_{m\to\infty}\sum_{j=1}^m\widetilde P(E_j)=\sum_j\widetilde P(E_j)$. Hence $\widetilde P$ is a probability measure. [F1, F2, step 1.1, given, algebra]

3.1 Let $R(\omega,k)=k$. It is measurable because each inverse image is $\Omega\times\{k\}$, and $\widetilde P(R=k)=p_k$. For every $A\in\mathcal F$, its lift $\widetilde A=A\times\{1,\ldots,N\}$ satisfies $\widetilde P(\widetilde A\cap\{R=k\})=p_kP(A)=\widetilde P(\widetilde A)\widetilde P(R=k)$, so $R$ is independent of all lifted original events. [F1, F3, step 2.1, given, algebra]

3.2 First suppose each $H_k$ is a nonnegative simple function. Write it as a finite sum of nonnegative constants times indicators of measurable sets. On the $k$th slice, the lifted indicator of $A\in\mathcal F$ is $\mathbf1_{A\times\{k\}}$, whose integral is its probability $p_kP(A)$ by [F4] and step 2.1. Finite linearity [F5], followed by summing the finitely many slices, gives $\widetilde{\mathbb E}[H_R]=\sum_kp_k\mathbb E[H_k]$. [F4, F5, step 2.1, given, algebra]

4.1 For arbitrary nonnegative measurable $H_k$, choose increasing simple approximations $H_{k,m}\uparrow H_k$ by [F6]. Since there are finitely many $k$, the lifted simple functions $H_m(\omega,k)=H_{k,m}(\omega)$ increase pointwise to $H_R$. Apply [F7] on the extension and on the original space to the simple-function identity of step 3.2; the finite sum over $k$ commutes with the increasing limit. Therefore $\widetilde{\mathbb E}[H_R]=\sum_kp_k\mathbb E[H_k]$ for all nonnegative measurable $H_k$. [F6, F7, step 3.2, algebra]

5.1 For integrable real $H_k$, apply step 4.1 separately to $H_k^+$ and $H_k^-$. Their weighted expectations are finite because $\sum_kp_k\mathbb E|H_k|<\infty$. Subtracting the two nonnegative identities using [F5] proves both integrability of $H_R$ and the stated expectation formula. The extension and selector are explicitly finite-slice constructions, so this proof uses no choice axiom. [F4, F5, step 4.1, given, algebra] ∎

