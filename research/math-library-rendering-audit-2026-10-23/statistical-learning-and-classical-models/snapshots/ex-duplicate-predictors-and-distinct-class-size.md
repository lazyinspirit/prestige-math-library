---
id: ex-duplicate-predictors-and-distinct-class-size
kind: example
title: "Duplicate predictors do not enlarge the finite class"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-realizable-and-agnostic-pac
  - alg-finite-list-empirical-risk-minimizer
  - thm-finite-class-sample-complexity
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
---

## Example

Let $(\mathcal X,\Sigma_X)$ be a measurable space, give $\{0,1\}$ its discrete sigma-algebra, and use binary zero-one loss. Let $L=(h_1,\ldots,h_K)$ be a nonempty ordered finite list of measurable classifiers, and let $\mathcal H$ be the set of its $q$ distinct classifiers, where $1\le q\le K$. For any labeled sample $S=((x_i,y_i))_{i=1}^m\in(\mathcal X\times\{0,1\})^m$ with $m\ge1$, put $\widehat R_S(h)=m^{-1}\sum_{i=1}^m\mathbf 1\{h(x_i)\ne y_i\}$ and, for a law $P$ on $\mathcal X\times\{0,1\}$, put $R_P(h)=P\{(x,y):h(x)\ne y\}$. For every such sample and every finite tolerance $\eta\ge0$, the finite-list ERM on $L$ returns the same classifier as the procedure on the list formed by retaining only the first occurrence of each distinct classifier. Thus the empirical minimum and selected prediction rule are unchanged by duplicate entries. Let $\widehat h_\eta(S)$ denote this finite-list ERM on $L$. For any such law $P$, $0\le\eta<\epsilon<1$, $0<\delta<1$, and positive integer $m$ satisfying the following condition, if $S$ is an IID sample of size $m$ from $P$, then $\mathbb P_S\{R_P(\widehat h_\eta(S))-\inf_{h\in\mathcal H}R_P(h)\le\epsilon\}\ge1-\delta$:
$$m\ge\frac{2\bigl(\log q+\log(2/\delta)\bigr)}{(\epsilon-\eta)^2}$$
is sufficient for agnostic excess risk at most $\epsilon$ with probability at least $1-\delta$; the bound depends on $q$, not the original list length $K$.

## Example references

[[def-realizable-and-agnostic-pac]]: defines the agnostic excess-risk guarantee used here.

[[alg-finite-list-empirical-risk-minimizer]]: selects the first list entry whose empirical risk is within the supplied tolerance of the finite-list minimum.

[[thm-finite-class-sample-complexity]]: gives the agnostic finite-class sample-size condition in terms of the number of distinct hypotheses.

## Facts & Assumptions

**Given:** An ordered finite list $L$, its set $\mathcal H$ of distinct classifiers, an IID sample, and finite $\eta\ge0$.

[F1] The finite-list algorithm returns the first index whose empirical risk is at most the finite minimum plus $\eta$. [[alg-finite-list-empirical-risk-minimizer]]

[F2] A finite class with $q$ distinct classifiers has the agnostic sample bound $m\ge2(\log q+\log(2/\delta))/(\epsilon-\eta)^2$ for $0\le\eta<\epsilon$. [[thm-finite-class-sample-complexity]]

[F3] IID means sample observations are mutually independent and identically distributed. [[def-identically-distributed-and-iid-random-variables]]

## Verification

**Given:** The list and tolerance in the Example.

1.1 The list and its deduplicated sublist have the same set of empirical-risk values, so their minima agree. Whether a list entry satisfies the tolerance test in [F1] depends only on its classifier; among repeated copies, the first copy is encountered first. Therefore both runs select the same classifier. [given, F1, algebra]

2.1 By [F3], the sample is IID, which is the sampling hypothesis of [F2]. The list with first occurrences retained enumerates $\mathcal H$ exactly once. Apply [F2] to this finite class with $|\mathcal H|=q$; its sample bound contains $q$ and no term involving $K$. [F2, F3, step 1.1] ∎
