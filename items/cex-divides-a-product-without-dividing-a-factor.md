---
id: cex-divides-a-product-without-dividing-a-factor
kind: counterexample
title: "$6 \\mid 4 \\cdot 9$ while $6 \\nmid 4$ and $6 \\nmid 9$: dividing a product does not force dividing a factor, and the coprimality hypothesis is what fails"
status: published
origin: session
deps: [def-divides-in-z, lem-divisibility-basic, lem-coprime-divides-product, def-coprime, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd, thm-division-algorithm-in-z, thm-int-comm-ring, def-int-operations, thm-int-ordered-ring, def-int-order, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "$6 \\mid 36$, $6 \\nmid 4$, $6 \\nmid 9$"
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
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for all integers $d, a, b$, if $d \mid ab$ then $d \mid a$ or
$d \mid b$ ([[def-divides-in-z]]).

**Witness:** $d = 6$, $a = 4$, $b = 9$. Here $4 \cdot 9 = 36 = 6 \cdot 6$, so
$6 \mid 4 \cdot 9$; but $4 = 0 \cdot 6 + 4$ and $9 = 1 \cdot 6 + 3$ have nonzero
remainders, so $6 \nmid 4$ and $6 \nmid 9$.

The true statement in this direction carries a coprimality hypothesis
([[lem-coprime-divides-product]]): if $\gcd(d,a) = 1$ and $d \mid ab$ then
$d \mid b$. That hypothesis is exactly what fails here, in both readings:
$\gcd(6,4) = 2$ and $\gcd(6,9) = 3$, and neither is $1$.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The integers $4$, $6$, $9$ and $36$.

[L1] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, $x \cdot (-1) = -x$, $x \cdot 0 = 0$, and multiplication distributes over addition ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L4] For $u \in \mathbb{Z}$ and $v > 0$ there is exactly one pair $(q,r)$ with $u = qv + r$ and $0 \le r < v$, and $v \mid u$ holds exactly when $r = 0$ ([[thm-division-algorithm-in-z]]).

[L5] $d = \gcd(u,v)$ exactly when $d \ge 0$, $d \mid u$, $d \mid v$, and every common divisor of $u$ and $v$ divides $d$ ([[cor-common-divisor-divides-gcd]], [[def-common-divisor-and-gcd]]).

[L6] If $d \mid u$ and $d \mid v$ then $d \mid ux + vy$ for all $x,y$ ([[lem-divisibility-basic]]).

[L7] If $\gcd(u,v) = 1$ and $u \mid vw$ then $u \mid w$ ([[lem-coprime-divides-product]]); $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

[L8] $\iota$ is injective and preserves order, and $2 \ne 1$, $3 \ne 1$ in $\mathbb{N}$ ([[lem-nat-embeds-int]]).

## Counterexample

**Proof technique:** direct.

1.1 $4 \cdot 9 = 36$ and $36 = 6 \cdot 6$, so $6 \mid 4 \cdot 9$. [L1, L3, algebra]

1.2 $6 \nmid 4$: since $6 > 0$, [L4] applies, and $4 = 0 \cdot 6 + 4$ with $0 \le 4 < 6$ is the unique representation of that form, so the remainder is $4 \ne 0$. [L1, L2, L4, algebra]

1.3 $6 \nmid 9$: likewise $9 = 1 \cdot 6 + 3$ with $0 \le 3 < 6$, so the remainder is $3 \ne 0$. [L1, L2, L4, algebra]

1.4 $\gcd(6,4) = 2$: indeed $2 \ge 0$, $6 = 2 \cdot 3$ and $4 = 2 \cdot 2$, so $2$ is a common divisor; and $6 \cdot 1 + 4 \cdot (-1) = 6 - 4 = 2$, so every common divisor of $6$ and $4$ divides $2$ by [L6]. By [L5], $\gcd(6,4) = 2$, and $2 \ne 1$ by [L8]. [L1, L5, L6, L8, algebra]

1.5 $\gcd(6,9) = 3$: indeed $3 \ge 0$, $6 = 3 \cdot 2$ and $9 = 3 \cdot 3$; and $6 \cdot (-1) + 9 \cdot 1 = 3$, so every common divisor divides $3$ by [L6]. By [L5], $\gcd(6,9) = 3$, and $3 \ne 1$ by [L8]. [L1, L5, L6, L8, algebra]

2.1 Steps 1.1, 1.2 and 1.3 exhibit $d = 6$, $a = 4$, $b = 9$ with $d \mid ab$, $d \nmid a$ and $d \nmid b$: the claim is refuted. [step 1.1, step 1.2, step 1.3]

3.1 So [L7] is not contradicted: applied with $u = 6$ it would need $\gcd(6,4) = 1$ or $\gcd(6,9) = 1$, and by steps 1.4 and 1.5 neither holds. The failure of the refuted claim is exactly the failure of coprimality, not a failure of the lemma. [step 2.1, step 1.4, step 1.5, L7] ∎

## Remarks

- **This is the gap that primality closes.** When $d$ is prime its only positive
  divisors are $1$ and itself, so $\gcd(d,a) = 1$ for every $a$ that $d$ does not
  divide, and the refuted claim becomes true. Primes are not defined on this
  page, and the statement above is not repaired here; it is recorded so that the
  coprimality hypothesis of [[lem-coprime-divides-product]] is visibly doing
  work rather than decorating the statement.

- **The witness is minimal in spirit, not proved minimal.** No claim is made that
  $(6,4,9)$ is the smallest such triple.
