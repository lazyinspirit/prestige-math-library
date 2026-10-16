---
page: shors-factoring-algorithm
title: Shor’s Factoring Algorithm
status: draft
items:
  - alg-qa-shor-uniform-residue-sampler
  - lem-qa-crt-sign-vector-factorization
  - lem-qa-even-order-square-root
  - lem-qa-prime-power-order-two-adic-law
  - lem-qa-shor-residue-gcd-branch
  - thm-qa-order-to-factor-success
  - alg-qa-shor-factoring
  - def-qa-shor-cost-accounting
  - lem-qa-shor-perfect-power-precheck
  - thm-qa-shor-residue-sampler-correct-and-cost
  - thm-qa-order-to-factor-correctness
  - thm-qa-shor-factoring-cost
  - thm-qa-shor-factoring-success
examples: []
requires:
  - quantum-order-finding-and-rational-reconstruction
  - divisibility-gcd-and-bezout
  - primitive-roots-and-unit-groups-modulo-n
  - congruences-and-the-chinese-remainder-theorem
  - monoids-groups-and-subgroups
  - uniform-circuit-families-promise-problems-and-complexity
  - primes-and-the-fundamental-theorem-of-arithmetic
---

This page gives a bounded-error factoring procedure for a promised composite integer $N\ge4$. It returns $2$ immediately for even inputs. For odd inputs, it searches for exact perfect powers by integer roots and returns a proper factor when it finds one. In the remaining odd-composite case, it samples uniformly from $1,\ldots,N-1$ by exact rejection sampling. A nonunit sample yields its gcd factor immediately; a unit is passed to the order-finding procedure of [[quantum-order-finding-and-rational-reconstruction]] with internal failure target $1/4$.

Every proposed period is checked directly: it must lie between $2$ and $N$, be even, and satisfy $a^q\equiv1\pmod N$. The reduction then computes $z=a^{q/2}\bmod N$ and tests $\gcd(z-1,N)$ and $\gcd(z+1,N)$. It returns only a divisor checked to lie strictly between $1$ and $N$. Minimality of a candidate period is not required for output correctness; a nonminimal candidate can only miss a factor and cause a retry.

For a true order, the CRT proof identifies success through the two-adic valuations of the local prime-power orders. Each possible local valuation has probability at most $1/2$; with $k$ distinct prime factors, the probability that all valuations agree is at most $2^{-(k-1)}$. Thus the true-order reduction succeeds with probability at least $1/2$ on every odd composite that remains after perfect-power preprocessing. The order finder is exact with probability at least $3/4$ for each fixed unit, so each outer attempt succeeds with probability at least $3/8$. With
$$T=\min\{t\ge1:5^t v\le8^t u\}=\left\lceil\frac{\ln(1/\delta)}{-\ln(5/8)}\right\rceil$$
for $\delta=u/v$, the total failure probability is at most $(5/8)^T\le\delta$.

The random-bit sampler uses countable choice and dependent choice only to supply countably many independent fair bits; the CRT and number-theoretic success proofs use finite products and finite choices. Under supplied explicit reversible arithmetic and an ideal exact-angle QFT, the stated gate, multiplier-call and expected arithmetic/post-processing bit-operation bounds are kept separate. No circuit-description generation-time, finite-alphabet or uniform-family bound is asserted. The bare controlled-unitary query branch costs $O(nT(Q-1))$ queries and carries no polynomial query claim.
