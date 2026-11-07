---
dependency_level: 0
id: def-admissible-prime-tuple
kind: definition
title: "Admissible finite tuples of integer shifts"
status: draft
origin: pipeline
deps: [def-prime, thm-standard-representatives-modulo-n, def-finite-cardinality]
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

Let $k\ge1$ and let $H=\{h_1,\ldots,h_k\}\subset\mathbb Z$ be a set of $k$ distinct integer shifts. For a prime $p$, let
$$\nu_H(p):=\bigl|\{[h]_p:h\in H\}\bigr|$$
be the number of distinct residue classes represented by the shifts modulo $p$. The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts.


## Definition references

[[def-prime|Prime integers]]

[[thm-standard-representatives-modulo-n|Residue classes modulo a positive integer]]

[[def-finite-cardinality|Finite-set cardinality]]
