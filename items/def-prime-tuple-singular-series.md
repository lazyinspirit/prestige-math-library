---
dependency_level: 2
id: def-prime-tuple-singular-series
kind: definition
title: "The Hardy–Littlewood singular series of an admissible tuple"
status: draft
origin: pipeline
deps: [def-admissible-prime-tuple, def-prime, def-unit-group-modulo-n-and-euler-totient, lem-prime-tuple-singular-series-converges]
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

## Definition

Let $H$ be an admissible set of $k$ distinct integer shifts, and let $\nu_H(p)$ be its number of residues modulo $p$. The **singular series** is
$$\mathfrak S(H):=\prod_{p\ \mathrm{prime}}\frac{1-\nu_H(p)/p}{(\varphi(p)/p)^k}.$$
The local factor is the proportion of classes avoiding every $-h\pmod p$, normalized by the $k$ independent one-prime density factors. The product converges to a positive finite real number for every admissible $H$; this well-definedness is proved by the A-page convergence lemma.


## Definition references

[[def-admissible-prime-tuple|Admissibility and residue count]]

[[def-prime|Prime integers]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient and unit classes]]

[[lem-prime-tuple-singular-series-converges|Convergence and positivity proof]]
