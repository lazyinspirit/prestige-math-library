---
dependency_level: 0
id: def-liminf-consecutive-prime-gap-hm
kind: definition
title: "The limit-inferior prime-gap constants H_m"
status: draft
origin: pipeline
deps: [def-prime, def-prime-counting-function, thm-euclid-infinitude-of-primes, def-limsup-and-liminf-of-nonnegative-extended-sequences, def-natural-numbers, thm-well-ordering-principle]
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
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Definition

Let $\pi(x)$ be the number of positive primes at most $x$. For each integer $n\ge1$, define $p_n$ to be the least positive integer $p$ with $\pi(p)\ge n$; infinitely many primes and the well-ordering of positive integers make this definition valid. Thus $p_1<p_2<\cdots$ lists all positive primes. For each integer $m\ge1$, define
$$H_m:=\liminf_{n\to\infty}(p_{n+m}-p_n)=\sup_{N\ge1}\,\inf_{n\ge N}(p_{n+m}-p_n),$$
where the infimum and supremum are taken in the nonnegative extended real line $[0,+\infty]$. Thus $H_m$ is the lower limit of the distance spanning $m$ consecutive prime gaps; $H_1$ concerns consecutive primes.


## Definition references

[[def-prime|Prime integers]]

[[def-prime-counting-function|Prime-counting convention]]

[[thm-euclid-infinitude-of-primes|Infinitely many primes]]

[[def-natural-numbers|Natural-number indexing]]

[[thm-well-ordering-principle|Least-element principle]]

[[def-limsup-and-liminf-of-nonnegative-extended-sequences|Extended limit inferior]]
