---
id: def-hall-pi-subgroup
kind: definition
title: "Hall pi-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Definition

Let $\pi$ be a set of prime numbers and let $G$ be a finite group. A subgroup
$H\le G$ is a **Hall $\pi$-subgroup** when:

1. every prime divisor of $|H|$ lies in $\pi$; and
2. no prime divisor of the index $[G:H]$ lies in $\pi$.

Equivalently, $|H|$ and $[G:H]$ are coprime, and the prime divisors of $|H|$
are exactly those from $\pi$ that occur in $|G|$.
