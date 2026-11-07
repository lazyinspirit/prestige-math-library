---
dependency_level: 1
id: def-gpy-prime-tuple-divisor-sum-weight
kind: definition
title: "GPY truncated divisor-sum weights for prime tuples"
status: draft
origin: pipeline
deps: [def-admissible-prime-tuple, def-number-theoretic-mobius-function, def-natural-logarithm, thm-canonical-prime-factorisation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Definition

Let $H$ be a set of $k\ge1$ distinct integer shifts, let $0\le\ell\le k$ be an integer, and let $R\ge1$. For an integer $n$ with $n+h\ge1$ for every $h\in H$, the **GPY truncated divisor-sum weight** is
$$\Lambda_R(n;H,\ell):=\frac1{(k+\ell)!}\sum_{\substack{d\mid\prod_{h\in H}(n+h)\\1\le d\le R}}\mu(d)\left(\log\frac Rd\right)^{k+\ell}.$$
The sum is finite. Here $\mu$ is the number-theoretic Möbius function, $\log$ is the natural logarithm, and $H$ is used as a finite shift set; admissibility is imposed when prime-distribution conclusions are proved.


## Definition references

[[def-admissible-prime-tuple|Finite shift sets]]

[[def-number-theoretic-mobius-function|Möbius function]]

[[def-natural-logarithm|Natural logarithm]]

[[thm-canonical-prime-factorisation|Prime-factorization convention]]
