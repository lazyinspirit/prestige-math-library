---
id: lem-finite-transient-block-geometric-escape
kind: lemma
title: "Finite-step escape from a transient substochastic block"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only a finite selection from finitely many nonempty path sets is used; this follows by finite induction and does not require an axiom of choice."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, Theorem 11.3, printed pp. 417–418; the finite maximum path length and minimum positive escape probability give geometric loss of transient mass."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§2.1, Lemmas 2.1–2.2, PDF pp. 4–5; finite-step overlap/minorization yields a strict contraction factor."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $T\in[0,\infty)^{n\times n}$, $n\ge1$, have row sums at most one. Define the one-step escape probability $d_i=1-\sum_jT_{ij}$. Suppose that for each state $i$ there is a path $i=i_0,i_1,\ldots,i_k$ with $T_{i_r i_{r+1}}>0$ for $0\le r<k$ and $d_{i_k}>0$. Then there are $L\le n$ and $\varepsilon>0$ such that $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$. Writing $k=aL+r$ with $0\le r<L$ gives $\|T^k\|_\infty\le(1-\varepsilon)^a$, so $T^k\to0$. In particular, every complex eigenvalue $\lambda$ of $T$ satisfies $|\lambda|<1$, and its spectral radius $\rho(T):=\max\{|\lambda|:\det(\lambda I-T)=0\}$ is less than one.

## Facts & Assumptions

**Given:** A finite nonempty state set, a nonnegative row-substochastic matrix $T$, and from every state a positive-probability path to a row with positive escape probability.

[A1] $T_{ij}\ge0$, $\sum_jT_{ij}\le1$, and for each $i$ there is a finite path as stated, ending at $i_k$ with $d_{i_k}>0$.

## Proof

**Given:** $T$ and the hypotheses [A1].

**Proof technique:** convert each positive path into a uniform finite-step escape probability.

1.1 For each initial state $i$, choose a shortest path in [A1] to a state with positive escape probability. A shortest path has no repeated state, since deleting the segment between two repetitions leaves a shorter path with the same endpoint; hence it uses at most $n-1$ transitions. The probability of following that path and then escaping is $p_i=(\prod_{r<k}T_{i_r i_{r+1}})d_{i_k}>0$, where the empty product is $1$. The finitely many choices are made by induction over the finite state set. [given, A1, choose, construct]

2.1 Let $L=n$ and $\varepsilon=\min_i p_i$. A finite minimum of positive reals is positive, and every row loses at least $p_i\ge\varepsilon$ mass by step $L$, so $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$. [step 1.1, algebra]

3.1 Since $T\mathbf 1\le\mathbf 1$, induction gives $T^r\mathbf 1\le\mathbf 1$ for $0\le r<L$. For $k=aL+r$, nonnegativity and step 2.1 give $T^k\mathbf 1=(T^L)^aT^r\mathbf 1\le(1-\varepsilon)^a\mathbf 1$. Thus $\|T^k\|_\infty\le(1-\varepsilon)^a$ and $T^k\to0$. [A1, step 2.1, algebra, induction]

4.1 For any $v\in\mathbb C^n$, step 2.1 gives $\|T^Lv\|_\infty\le(1-\varepsilon)\|v\|_\infty$, by bounding each row sum of absolute values with the corresponding row sum of $T^L$. If $Tv=\lambda v$ with $v\ne0$, then $|\lambda|^L\|v\|_\infty=\|T^Lv\|_\infty\le(1-\varepsilon)\|v\|_\infty$, so $|\lambda|\le(1-\varepsilon)^{1/L}<1$. Thus $\rho(T)<1$. [step 2.1, algebra] ∎
