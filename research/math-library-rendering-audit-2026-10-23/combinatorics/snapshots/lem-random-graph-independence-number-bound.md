---
id: lem-random-graph-independence-number-bound
kind: lemma
title: "$\\mathbb P(\\alpha(G(n,p))\\ge s)\\le\\binom ns(1-p)^{\\binom s2}\\le n^s\\exp(-p\\binom s2)$ for $s\\le n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-clique-and-independence-numbers, lem-random-graph-fixed-pattern-probability, thm-finite-union-bound, def-binomial-coefficient, thm-binomial-closed-formula, lem-exponential-dominates-one-plus-x]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, proof of Theorem 4.2.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, proof of Theorem 6.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

For $0\le s\le n$ and $p\in[0,1]$,
$$\mathbb P(\alpha(G(n,p))\ge s)\le\binom ns(1-p)^{\binom s2}\le n^s\exp\!\left(-p\binom s2\right).$$
For $s>n$, the event is empty. At $s=0$ every displayed quantity equals $1$. At $s=1$ both bounds equal $n$, so the second inequality is an equality while the first is strict whenever $n\ge2$.

## Facts & Assumptions

**Given:** Naturals $n,s$ and $p\in[0,1]$.

[L1] $\alpha(G)$ is the greatest size of an independent vertex set ([[def-clique-and-independence-numbers]]).

[L2] A prescribed set of absent edges has probability $(1-p)^m$ ([[lem-random-graph-fixed-pattern-probability]]).

[L3] Probability of a finite union is at most the sum of the event probabilities ([[thm-finite-union-bound]]).

[L4] There are $\binom ns$ subsets of size $s$ ([[def-binomial-coefficient]]).

[L5] For $s\le n$, $\binom ns\,s!=n^{\underline s}$ ([[thm-binomial-closed-formula]]).

[L6] $(1-p)^m\le\exp(-pm)$ for $0\le p\le1$ ([[lem-exponential-dominates-one-plus-x]]).

## Proof

**Proof technique:** cases.

1.1 Suppose $s\le n$. If $\alpha(G(n,p))\ge s$, some $s$-set has all of its $\binom s2$ possible internal edges absent. [assume-case inrange, L1]

1.2 Suppose $s>n$. Then no $s$-subset exists and the event $\alpha(G(n,p))\ge s$ is empty. [assume-case outrange, L1, L4]

2.1 A fixed $s$-set is independent with probability $(1-p)^{\binom s2}$, so [L3] and [L4] give the first bound. [step 1.1, L2, L3, L4]

3.1 By [L5], $\binom ns\le n^{\underline s}\le n^s$, including $s=0$. Applying [L6] with $m=\binom s2$ gives the second bound. [step 2.1, L5, L6, algebra]

4.1 The cases are exhaustive. At $s=0$ or $1$, $\binom s2=0$ and the displayed expressions have their stated boundary values. [step 3.1, step 1.2, cases-exhaustive] ∎
