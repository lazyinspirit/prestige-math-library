---
id: def-polymath-densely-divisible-moduli
kind: definition
title: "Iterated dense divisibility of squarefree moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-smooth-moduli-and-progression-discrepancy, thm-canonical-prime-factorisation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2.1, Definition 2.1 and equation (2.2), printed pp. 8–9"
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§1.2.1, printed p. 4; §3.1, printed pp. 11–12"
---

## Definition

For a real $y\ge1$ and integer $i\ge0$, define recursively the set $D^{(i)}(y)$ of $i$-tuply $y$-densely divisible positive integers. Every positive integer belongs to $D^{(0)}(y)$. For $i\ge1$, a positive integer $n$ belongs to $D^{(i)}(y)$ if, for every pair of nonnegative integers $j,k$ with $j+k=i-1$ and every real $R$ with $1\le R\le yn$, there are positive integers $q,r$ such that
$$n=qr,\qquad y^{-1}R\le r\le R,\qquad q\in D^{(j)}(y),\quad r\in D^{(k)}(y).$$

Write $D(y)=D^{(1)}(y)$ for the once-densely-divisible integers. If $I\subset\mathbb R$ is a bounded set of primes, let $S_I$ be the set of squarefree positive integers whose prime divisors lie in $I$, and put $D_I^{(i)}(y)=S_I\cap D^{(i)}(y)$. Thus an element of $D_I^{(i)}(y)$ is squarefree, has all prime factors in $I$, and satisfies the recursive factorization condition above.

## Definition references

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[[thm-canonical-prime-factorisation|For $n \\ge 1$ and any injective list $p : r \\to \\mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \\prod_{i<r} p_i^{\\,v_{p_i}(n)}$; the exponents are determined by $n$, and $v_q(n) = 0$ for every prime $q$ outside the list]]

[Polymath8a, Definition 2.1 and equation (2.2)](https://arxiv.org/pdf/1402.0811v3)

[Stadlmann, §1.2.1](https://arxiv.org/pdf/2309.00425v3)
