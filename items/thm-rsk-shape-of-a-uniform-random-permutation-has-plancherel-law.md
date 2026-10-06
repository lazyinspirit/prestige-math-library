---
id: thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law
kind: theorem
title: "The RSK shape of a uniform random permutation has the Plancherel law"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-plancherel-measure-on-partitions, thm-robinson-schensted-correspondence, cor-paths-in-the-young-graph-index-standard-tableaux, thm-standard-polytabloid-basis, def-uniform-finite-probability-space, def-finite-probability-space-and-event, def-law-or-distribution-of-a-random-element, def-finite-real-random-variable-and-distribution, thm-schensted-longest-increasing-and-decreasing-subsequence-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.6-§1.8, printed pp. 17-28 (row insertion and the Plancherel distribution of the shape of a uniform permutation)"
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§5, printed p. 25 (the Plancherel weights $\\dim^2\\lambda/n!$)"
---

## Statement

Let $n\ge1$ and let $\sigma$ be uniformly distributed on $S_n$ ([[def-uniform-finite-probability-space]]). Let $\operatorname{sh}(\sigma)\vdash n$ be the common shape of the Robinson-Schensted pair $(P(\sigma),Q(\sigma))$ ([[thm-robinson-schensted-correspondence]]). Then $\operatorname{sh}$ is a random element with values in the finite measurable space $(Y_n,2^{Y_n})$ ([[def-law-or-distribution-of-a-random-element]]) and for every $\lambda\vdash n$
$$\mathbb P\bigl(\operatorname{sh}(\sigma)=\lambda\bigr)=\frac{(f^\lambda)^2}{n!}=P_n(\lambda).$$
In particular the uniform distribution on $S_n$ pushes forward to the Plancherel measure of order $n$, and the length of a longest increasing subsequence of $\sigma$ has the same law as the first row length of a Plancherel-random diagram.

## Facts & Assumptions

**Given:** $n\ge1$; the permutations of $\{1,\dots,n\}$ written in one-line form, equipped with the uniform probability; the Robinson-Schensted map $\sigma\mapsto(P(\sigma),Q(\sigma))$; the shape $\operatorname{sh}(\sigma)$; the number $f^\lambda$ of standard $\lambda$-tableaux for $\lambda\vdash n$; and the Plancherel weights $P_n(\lambda)=(f^\lambda)^2/n!$ ([[def-plancherel-measure-on-partitions]]).

[F1] The Robinson-Schensted map is a bijection from the permutations of $\{1,\dots,n\}$ onto the set of pairs $(P,Q)$ of standard tableaux of the same shape $\lambda\vdash n$; $P(\sigma)$ has shape $\operatorname{sh}(\sigma)$ ([[thm-robinson-schensted-correspondence]]).

[F2] For every $\lambda\vdash n$ the number of standard $\lambda$-tableaux equals $f^\lambda$, the number of paths from the empty diagram to $\lambda$ in the Young graph ([[cor-paths-in-the-young-graph-index-standard-tableaux]], [[thm-standard-polytabloid-basis]]).

[F3] On a nonempty finite set the uniform probability space gives every element weight $1/|\Omega|$, so an event of cardinality $m$ has probability $m/|\Omega|$ ([[def-uniform-finite-probability-space]], [[def-finite-probability-space-and-event]]).

[F4] A function from a finite probability space to a finite set is a random element, its law being the pushforward of the probability ([[def-law-or-distribution-of-a-random-element]]); a real-valued such function is a real random variable with the distribution of [[def-finite-real-random-variable-and-distribution]].

[F5] If $\sigma$ has insertion tableau $P(\sigma)$ of shape $\lambda$, then the length of a longest increasing subsequence of $\sigma$ is $\lambda_1$ and the length of a longest decreasing subsequence is $\lambda'_1$ ([[thm-schensted-longest-increasing-and-decreasing-subsequence-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Fibres of the shape map: by [F1] the Robinson-Schensted map is a bijection from the set of $n!$ permutations of $\{1,\dots,n\}$ onto the set of pairs $(P,Q)$ of standard tableaux of equal shape $\lambda\vdash n$. For a fixed $\lambda\vdash n$ the permutations with $\operatorname{sh}(\sigma)=\lambda$ correspond bijectively to the pairs $(P,Q)$ of standard $\lambda$-tableaux, and by [F2] there are exactly $f^\lambda$ choices for $P$ and independently $f^\lambda$ choices for $Q$; hence the fibre over $\lambda$ has cardinality $|\{\operatorname{sh}=\lambda\}|=(f^\lambda)^2$. [given, F1, F2]

2.1 Probability of a shape: on $S_n$ the uniform probability space of [F3] assigns weight $1/n!$ to every permutation, so the event $\{\operatorname{sh}=\lambda\}$ of step 1.1 has probability $|\{\operatorname{sh}=\lambda\}|/n!=(f^\lambda)^2/n!=P_n(\lambda)$; the denominator $n!$ is positive for $n\ge1$. [given, F3, step 1.1, algebra]

3.1 Random element and its law: $\operatorname{sh}$ is a function from the finite probability space $S_n$ to the finite set $Y_n$, hence by [F4] a random element with values in $Y_n$, and its law is the pushforward of the uniform probability; step 2.1 computes that law to be exactly $P_n$. Every subset of $Y_n$ has a measurable inverse image, since every subset of the finite outcome space $S_n$ is an event. Thus the partition-valued map itself has the law $P_n$; a real encoding would instead have the corresponding encoded law. [given, F4, step 2.1]

4.1 Longest increasing subsequence: for every realisation $\sigma$, [F5] identifies the length of a longest increasing subsequence of $\sigma$ with the first row length $\operatorname{sh}(\sigma)_1$. Therefore, for every $l\ge0$, the probability that the longest increasing subsequence has length $l$ equals $\mathbb P(\operatorname{sh}(\sigma)_1=l)=P_n(\{\lambda:\lambda_1=l\})$ by step 3.1, which is precisely the law of the first row length of a diagram drawn from $P_n$. Together with step 3.1 this proves the statement. [given, F5, step 2.1, step 3.1, algebra] ∎ 