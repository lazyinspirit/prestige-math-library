---
id: lem-gcd-euclidean-step
kind: lemma
title: "If $a = qb + r$ then $a, b$ and $b, r$ have exactly the same common divisors, so $\\gcd(a,b) = \\gcd(b,r)$"
status: published
origin: session
deps: [def-common-divisor-and-gcd, def-divides-in-z, lem-divisibility-basic, thm-int-comm-ring, def-int-operations]
justified_by: []
aliases: []
landmark: false
short: "$\\gcd(a,b) = \\gcd(b,r)$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclidean algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_algorithm"
pipeline_run: null
---

## Statement

Let $a, b, q, r \in \mathbb{Z}$ satisfy

$$a \;=\; qb + r .$$

Then an integer $d$ is a common divisor of $a$ and $b$ if and only if it is a
common divisor of $b$ and $r$ ([[def-divides-in-z]]); the two sets of common
divisors are equal. Consequently

$$\gcd(a,b) \;=\; \gcd(b,r)$$

([[def-common-divisor-and-gcd]]).

No inequality on $r$ is assumed: the identity $a = qb + r$ alone is what is used,
so the lemma applies to any decomposition of $a$, not only to the one produced by
division with remainder.

## Facts & Assumptions

**Given:** Integers $a, b, q, r$ with $a = qb + r$, and the sets $D(a,b)$ and $D(b,r)$ of common divisors ([[def-common-divisor-and-gcd]]).

[L1] $\mathbb{Z}$ is a commutative ring: $x \cdot 0 = 0$, $x + 0 = x$, and every $x$ has an additive inverse; we write $u - v$ for $u + (-v)$, and $a = qb + r$ gives $r = a - qb$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x, y$ ([[lem-divisibility-basic]]).

[L3] For $(u,v) \ne (0,0)$, $\gcd(u,v)$ is the greatest element of $D(u,v)$, and $\gcd(0,0) = 0$ by convention ([[def-common-divisor-and-gcd]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $d \mid b$ and $d \mid r$. Then $d \mid bq + r \cdot 1 = a$ by [L2], so $d$ is a common divisor of $a$ and $b$: $D(b,r) \subseteq D(a,b)$. [given, L1, L2]

1.2 Suppose $d \mid a$ and $d \mid b$. Then $d \mid a \cdot 1 + b(-q) = a - qb = r$ by [L2], so $d$ is a common divisor of $b$ and $r$: $D(a,b) \subseteq D(b,r)$. [given, L1, L2]

1.3 The pairs vanish together: if $b = 0$ and $r = 0$ then $a = q \cdot 0 + 0 = 0$, and if $a = 0$ and $b = 0$ then $r = a - qb = 0 - 0 = 0$. So $(a,b) = (0,0)$ exactly when $(b,r) = (0,0)$. [given, L1]

2.1 By steps 1.1 and 1.2 the two sets of common divisors are equal, $D(a,b) = D(b,r)$. [step 1.1, step 1.2]

3.1 If $(a,b) \ne (0,0)$ then also $(b,r) \ne (0,0)$ by step 1.3, and both greatest common divisors are the greatest element of the one set $D(a,b) = D(b,r)$, hence equal. If $(a,b) = (0,0)$ then $(b,r) = (0,0)$ and both values are $0$. In either case $\gcd(a,b) = \gcd(b,r)$. [step 1.3, step 2.1, L3] ∎

## Remarks

- **This is the whole content of the Euclidean algorithm**; everything else in
  [[thm-euclidean-algorithm]] is bookkeeping about termination. Each division
  replaces a pair by a strictly smaller one without changing the set of common
  divisors, so the invariant is not merely the value $\gcd$ but the set $D$
  itself.

- **The absence of a constraint on $r$ matters.** Applying the lemma with
  $q = 1$ and no inequality is exactly what identifies
  $\gcd(F_{n+2}, F_{n+1})$ with $\gcd(F_{n+1}, F_n)$ for consecutive Fibonacci
  numbers, where $F_{n+2} = F_{n+1} + F_n$ is given by the recursion and not by a
  division.
