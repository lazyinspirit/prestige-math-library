---
id: lem-smith-rank-transition-errors-to-joint-law
kind: lemma
title: "Conditional rank-transition errors control the joint law"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-probability-measure]
justified_by: []
proof_strategy: direct
axiom_use: "The finite-prefix argument uses finite sums; the countable path laws are part of the given data."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families II"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "§§2 and 9, transition laws and joint rank distributions"
verification: {}
---

## Statement

Let $P,Q$ be probability laws on nonincreasing sequences $(r_1,r_2,\ldots)$ of nonnegative integers. Suppose $Q$ is a Markov law with initial distribution $Q_1$ and transition kernels $K_j(n,\cdot)$. For a history $h=(r_1,\ldots,r_j)$ of positive $P$-probability, let $P(\cdot\mid h)$ be the conditional law of $r_{j+1}$. Suppose that for some $k\ge1$,
$$\|P_1-Q_1\|_1\le\eta_0,\qquad \|P(\cdot\mid h)-K_j(r_j,\cdot)\|_1\le\eta_j\quad(1\le j<k)$$
for every positive-probability $P$-history of length $j$. Then the laws of the first $k$ ranks satisfy
$$\|P_{\le k}-Q_{\le k}\|_1\le\eta_0+\sum_{j=1}^{k-1}\eta_j.$$
If $B$ is a set of absorbing ranks for both laws, meaning that a path which reaches $b\in B$ stays constantly equal to $b$, then the full path laws satisfy
$$\|P-Q\|_1\le\eta_0+\sum_{j=1}^{k-1}\eta_j+2P(r_k\notin B)+2Q(r_k\notin B).$$
The result reduces an infinite joint law to a finite list of conditional transition errors and an absorbing-tail bound; it does not prove those estimates for a twist family.

## Statement references

[[def-probability-measure]]


[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, §§2 and 9](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** The path laws, conditional distributions, transition kernels, error bounds, and absorbing-rank hypothesis in the Statement.

## Proof

1.1 For each length-$j$ history $h$, write $p(h),q(h)$ for the prefix masses and $p_h(t)$ for the conditional next-rank mass where $p(h)>0$. Then, inserting and subtracting $p(h)K_j(r_j,t)$ and applying the triangle inequality, $$\sum_{h,t}|p(h)p_h(t)-q(h)K_j(r_j,t)|\le\sum_{h:p(h)>0}p(h)\|p_h-K_j(r_j,\cdot)\|_1+\sum_h|p(h)-q(h)|.$$ The right side is at most $\eta_j+\|P_{\le j}-Q_{\le j}\|_1$. Histories with $p(h)=0$ contribute only to the second sum. [given, algebra]

2.1 Starting at length one and iterating step 1.1 gives the finite-prefix bound. The sums converge absolutely because they are differences of probability distributions, so the same computation applies to countably many possible histories. [step 1.1, given, algebra]

3.1 Define a deterministic map from a length-$k$ prefix to the infinite path that agrees with the prefix and is constantly $r_k$ afterward. Let $\widetilde P,\widetilde Q$ be the pushforwards of the prefix laws by this map. By the triangle inequality over fibers, $\|\widetilde P-\widetilde Q\|_1\le\|P_{\le k}-Q_{\le k}\|_1$. Coupling a path to the constant extension of its own prefix shows $\|P-\widetilde P\|_1\le2P(r_k\notin B)$, since the two agree whenever $r_k\in B$; the same holds for $Q$. The triangle inequality and step 2.1 give the full-path bound. [step 2.1, given, construct, algebra] ∎
