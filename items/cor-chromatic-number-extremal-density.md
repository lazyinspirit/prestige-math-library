---
id: cor-chromatic-number-extremal-density
kind: corollary
title: "The asymptotic extremal density is determined exactly by chromatic number: $\\pi(H)=1-1/(\\chi(H)-1)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-erdos-stone-simonovits, thm-turan-density-exists, cor-bipartite-extremal-density-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Statement

For every finite graph $H$ with at least one edge,

$$\pi(H)=1-\frac1{\chi(H)-1}.$$

In particular, two such graphs have the same Turán density exactly when they have the same chromatic number, and every bipartite $H$ has density $0$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] If $H$ is a finite graph with an edge and $r=\chi(H)$, then $\operatorname{ex}(n,H)=(1-1/(r-1)+o(1))\binom n2$ ([[thm-erdos-stone-simonovits]]).

[F2] For every finite graph $H$ with an edge, the normalized extremal numbers converge to $\pi(H)$, their infimum over $n\ge2$ ([[thm-turan-density-exists]]).

[F3] Every finite bipartite graph with an edge has Turán density zero ([[cor-bipartite-extremal-density-zero]]).

## Proof

**Proof technique:** identify the existing limit.

1.1 Erdős–Stone–Simonovits states that the normalized extremal number tends to $1-1/(\chi(H)-1)$, while the definition of $\pi(H)$ is that same existing limit. This proves the formula. [given, F1, F2]

2.1 For integers $r\ge2$, the function $1-1/(r-1)$ is strictly increasing, so equal values are equivalent to equal chromatic numbers. At $r=2$ it is $0$, agreeing with the KST-derived bipartite corollary. [step 1.1, given, F3]

3.1 Steps 1.1-2.1 prove the exact density statement and both consequences. [step 1.1, step 2.1] ∎
