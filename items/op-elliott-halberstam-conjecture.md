---
dependency_level: 2
id: op-elliott-halberstam-conjecture
kind: open-problem
title: "Elliott–Halberstam conjecture at every fixed level below one"
status: draft
origin: pipeline
deps: [def-prime-level-of-distribution, def-prime-progression-discrepancy]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Open problem

For each fixed $0<\theta<1$ and every real $A>0$, the Elliott–Halberstam conjecture asserts that there are constants $C_{\theta,A}>0$ and $x_{\theta,A}\ge3$ such that, for every real $x\ge x_{\theta,A}$,
$$\sum_{1\le q\le x^\theta}\max_{a\in(\mathbb Z/q\mathbb Z)^\times}|E_\psi(x;q,a)|\le C_{\theta,A}\frac{x}{(\log x)^A}.$$
The discrepancy uses the full von Mangoldt weight on positive integers $n\le x$ and subtracts $x/\varphi(q)$; prime powers are included. The conjecture asserts every fixed level below $1$, not the endpoint $\theta=1.


## Open problem references

[[def-prime-progression-discrepancy|Full-weighted endpoint discrepancy]]

[[def-prime-level-of-distribution|Weighted level of distribution]]

[[thm-maynard-eh-conditional-h1-at-most-12|Conditional H_1 bound]]

## Status

The R2 source review dated 2026-10-23 records this as open. Maynard’s conditional bounded-gap result and the Polymath8b GEH consequences use the hypothesis conditionally; neither proves it.


