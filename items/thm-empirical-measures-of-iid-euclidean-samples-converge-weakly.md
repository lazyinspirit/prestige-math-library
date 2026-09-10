---
id: thm-empirical-measures-of-iid-euclidean-samples-converge-weakly
kind: theorem
title: Empirical measures of iid euclidean samples converge weakly
deps: ["thm-kolmogorov-iid-l1-strong-law", "lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence", "lem-measurable-functions-preserve-independence", "thm-change-of-variables-for-expectation", "thm-finite-and-countable-subadditivity-of-measures"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, strong law Theorem 2.5.10 plus countable-test argument
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For IID $\mathbb R^d$-valued samples $(X_i)$ with common law $\mu$ and finite $d\ge1$, the empirical probabilities $\widehat\mu_n=n^{-1}\sum_{i=1}^n\delta_{X_i}$ converge weakly to $\mu$ almost surely on one common event.

## Facts & Assumptions

[F1] [[lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence]]: For each finite $d\ge1$ there is a countable uniformly dense subset $\mathcal D$ of $C_c(\mathbb R^d;\mathbb R)$ containing nonnegative compact cutoffs $\chi_m\uparrow1$. If Borel probabilities $\mu_n,\mu$ have $\int h\,d\mu_n\to\int h\,d\mu$ for every $h\in\mathcal D$, then $\mu_n\Rightarrow\mu$.

[F2] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

[F3] [[thm-change-of-variables-for-expectation]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, let
$\mathbb P_X$ be its law, and let $g:(S,\Sigma)\to\mathbb R$ or
$g:(S,\Sigma)\to\mathbb C$ be measurable.

1. If $g\ge0$, then
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$
2. If $g(X)$ is integrable, then $g$ is integrable with respect to
   $\mathbb P_X$ and the same formula holds:
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$

[F4] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

[F5] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For each sample outcome, $\widehat\mu_n$ is a probability: finite sums of the unit point masses are countably additive and its total mass is n/$n=1$. For a bounded continuous h, $\int h\,d\widehat\mu_n=n^{-1}\sum_{i\le n}h(X_i)$. [given, algebra]

1.2 Let D be the countable class in F1. For every h in D, F2 makes h($X_i$) IID; they are bounded and hence integrable. F3 gives their mean $\int h\,d\mu$. F4 yields convergence of the corresponding empirical test integrals. [F1, F2, F3, F4]

2.1 Each test convergence event is measurable, by the countable real convergence criterion. F5 shows that the intersection over D of the conull events in step 1.2 is conull. On it all the test integrals converge simultaneously. The determining implication in F1 gives weak convergence for each such outcome. [F1, F5, step 1.2] ∎
