---
dependency_level: 3
id: op-hardly-littlewood-prime-tuples
kind: open-problem
title: "Hardy–Littlewood prime k-tuples conjecture"
status: draft
origin: pipeline
deps: [def-prime-tuple-singular-series]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Open problem

For every fixed admissible finite set $H$ of distinct integer shifts, let
$$N_H(x):=\sum_{1\le n\le x}\prod_{h\in H}1_{\mathbb P}(n+h),$$
where $1_{\mathbb P}(m)=1$ for a positive prime $m$ and is $0$ otherwise. The Hardy–Littlewood prime $k$-tuples conjecture asserts
$$N_H(x)\sim\mathfrak S(H)\frac{x}{(\log x)^{|H|}}\qquad(x\to\infty),$$
with $\mathfrak S(H)=\prod_{p\text{ prime}}(1-\nu_H(p)/p)/(1-1/p)^{|H|}$.


## Open problem references

[[def-prime-tuple-singular-series|Singular series and local factors]]

[[def-admissible-prime-tuple|Admissibility]]

[[thm-maynard-multidimensional-sieve-dhl-criterion|Bounded-cluster theorem]]

## Status

This is an open conjecture in the source record dated 2026-10-23. Bounded-gap and Maynard–Tao results prove that some admissible tuples have infinitely many prime translates; they do not establish the full asymptotic for every admissible tuple.


