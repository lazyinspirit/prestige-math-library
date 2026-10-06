---
id: def-plancherel-measure-on-partitions
kind: definition
title: "The Plancherel measure on the partitions of $n$"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-partition-young-diagram-and-conjugate-partition, def-factorial-and-falling-factorial, thm-standard-polytabloid-basis, thm-hook-length-formula]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§5, printed p. 25, the Plancherel measure $M_n(\\lambda)=\\dim^2\\lambda/n!$ and the Burnside normalization"
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.8, printed pp. 24-25 (Plancherel measure of order $n$); §1.9 (hook-length formula)"
---

## Definition

For an integer $n\ge0$ let $Y_n$ be the set of partitions $\lambda\vdash n$ of
[[def-partition-young-diagram-and-conjugate-partition]]. This set is finite: a
partition of $n$ has at most $n$ parts and every part is at most $n$, so
$Y_n\subseteq\{(\lambda_1,\dots,\lambda_k):k\le n,\ n\ge\lambda_1\ge\cdots\ge\lambda_k\ge1\}$,
a subset of the finite set $\{1,\dots,n\}^{\le n}$.

For $\lambda\vdash n$ put $f^\lambda:=\dim_{\mathbb C}S^\lambda$, the dimension
of the complex Specht module, so that $f^\lambda$ equals the number of standard
$\lambda$-tableaux ([[thm-standard-polytabloid-basis]], [[thm-hook-length-formula]]);
in particular $f^\lambda$ is a positive integer, because the standard
polytabloids form a basis, and
$f^\lambda=n!/\prod_{x\in[\lambda]}h(x)$ with the empty product $1$ for
$\lambda=\varnothing$, so that $f^\varnothing=1$.

The **Plancherel measure of order $n$** is the function
$$P_n(\lambda):=\frac{(f^\lambda)^2}{n!},\qquad \lambda\in Y_n,$$
with $n!$ the factorial of [[def-factorial-and-falling-factorial]]. The
conventions $0!=1$ and $f^\varnothing=1$ give $P_0(\varnothing)=1/1=1$. For
every $\lambda$ the value $P_n(\lambda)$ is a well-defined nonnegative real
number, being a quotient of a nonnegative integer by the positive integer $n!$.
Thus $P_n$ is a function on the finite set $Y_n$. No choice principle is used:
every quantity involved is finite. Normalization, $\sum_{\lambda\vdash n}P_n(\lambda)=1$,
is not part of this definition and is proved separately in
[[prop-plancherel-weights-sum-to-one]].
