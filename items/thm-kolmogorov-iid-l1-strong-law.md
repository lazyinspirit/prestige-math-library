---
id: thm-kolmogorov-iid-l1-strong-law
kind: theorem
title: Kolmogorov iid l1 strong law
deps: ["def-identically-distributed-and-iid-random-variables", "lem-iid-linear-truncation-occurs-only-finitely-often", "lem-summability-of-truncated-normalized-variances", "lem-cesaro-limit-of-truncated-means", "lem-measurable-functions-preserve-independence", "thm-kolmogorov-strong-law-under-summable-normalized-variances"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

## Facts & Assumptions

[F1] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

[F2] [[lem-summability-of-truncated-normalized-variances]]: For identically distributed integrable real $(X_n)$ and $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$, $\sum_{n\ge1}\operatorname{Var}(Y_n)/n^2\le2\mathbb E|X_1|<\infty$. No independence is required.

[F3] [[thm-kolmogorov-strong-law-under-summable-normalized-variances]]: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

[F4] [[lem-cesaro-limit-of-truncated-means]]: For identically distributed integrable real $(X_n)$, with $Y_k=X_k\mathbf1_{\{|X_k|\le k\}}$, one has $n^{-1}\sum_{k=1}^n\mathbb EY_k\to\mathbb EX_1$.

[F5] [[lem-iid-linear-truncation-occurs-only-finitely-often]]: For identically distributed integrable real $(X_n)$, put $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$. Almost surely $Y_n=X_n$ for all sufficiently large $n$. Consequently $n^{-1}\sum_{k=1}^n(X_k-Y_k)\to0$. Independence is unnecessary.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Set $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$. The truncation maps are Borel, so F1 makes $(Y_n)$ mutually independent. They are bounded by n and hence square-integrable. [F1]

2.1 F2 gives $\sum_n\operatorname{Var}(Y_n)/n^2<\infty$. With $b_n=n$, F3 applies to step 1.1 and yields $n^{-1}\sum_{k\le n}(Y_k-\mathbb EY_k)\to0$ almost surely. [F2, F3, step 1.1]

3.1 By F4, $n^{-1}\sum_{k\le n}\mathbb EY_k\to\mu$. By F5, $n^{-1}\sum_{k\le n}(X_k-Y_k)\to0$ almost surely. Intersecting the two conull events with step 2.1 and adding these three terms gives $S_n/n\to\mu$. [F4, F5, step 2.1] ∎
