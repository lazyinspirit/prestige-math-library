---
dependency_level: 1
id: def-prime-level-of-distribution
kind: definition
title: "Level of distribution for primes in arithmetic progressions"
status: draft
origin: pipeline
deps: [def-prime-progression-discrepancy, def-von-mangoldt-function, def-unit-group-modulo-n-and-euler-totient, def-natural-logarithm]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Definition

Fix $\theta>0$. The primes have **level of distribution $\theta$** if for every real $A>0$ there are constants $C_{\theta,A}>0$ and $x_{\theta,A}\ge3$ such that, for every real $x\ge x_{\theta,A}$,
$$\sum_{1\le q\le x^\theta}\max_{a\in(\mathbb Z/q\mathbb Z)^\times}|E_\psi(x;q,a)|\le C_{\theta,A}\frac{x}{(\log x)^A}.$$
Here $q$ ranges over positive integers and the maximum ranges over reduced residue classes. The discrepancy $E_\psi(x;q,a)$ uses the full von Mangoldt weight on positive integers $n\le x$ and subtracts the endpoint main term $x/\varphi(q)$; prime powers are included and an integral endpoint has no half-weight. The constants are uniform in $x,q,a$ and may depend on the fixed $\theta,A$.


## Definition references

[[def-prime-progression-discrepancy|Full-weighted endpoint discrepancy]]

[[def-von-mangoldt-function|Von Mangoldt weight]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient]]

[[def-natural-logarithm|Natural logarithm]]

