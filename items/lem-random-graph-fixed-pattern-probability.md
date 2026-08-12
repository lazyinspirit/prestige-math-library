---
id: lem-random-graph-fixed-pattern-probability
kind: lemma
title: "A prescribed set of present and absent edges in $G(n,p)$ has product probability"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-product-probability-has-independent-coordinate-events, def-erdos-renyi-random-graph, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

In $G(n,p)$, let $R$ and $F$ be disjoint sets of possible edges, with $|R|=r$ and $|F|=s$. The probability that every edge of $R$ is present and every edge of $F$ is absent is
$$p^r(1-p)^s.$$
In particular, a fixed labelled graph with $m$ edges has probability $p^m(1-p)^{\binom n2-m}$.

## Facts & Assumptions

**Given:** $G(n,p)$ and disjoint prescribed edge sets $R,F$.

[L1] Coordinate events in a finite product probability space are mutually independent ([[thm-product-probability-has-independent-coordinate-events]]).

[L2] $G(n,p)$ has independent Bernoulli$(p)$ coordinates indexed by the possible edges ([[def-erdos-renyi-random-graph]]).

[L3] There are $\binom n2$ possible edges on $[n]$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Each required-present coordinate has probability $p$ and each required-absent coordinate has probability $1-p$. [L2]

2.1 Mutual independence factors the joint probability as $p^r(1-p)^s$. This remains valid for empty prescriptions and for $p=0,1$. [step 1.1, L1, algebra]

3.1 For a fixed graph, take its $m$ edges as $R$ and the remaining $\binom n2-m$ possible edges as $F$. [step 2.1, L3] ∎
